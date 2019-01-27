import { Component, OnInit, AfterContentInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { ProductsService } from 'src/app/Service/products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticateService } from './../../Service/authentication.service';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit,AfterContentInit {
  product = {
    'description': null,
    'type': null,
    'quantity': null,
    'image': null
  };
  disable=false;
  upload = false;
  selectedFile = null;
  res: boolean;
  size = false;
  type = false;
  id;
  constructor(private route: ActivatedRoute,
    private router: Router, private ps: ProductsService,
    private http: HttpClient, public AuthService: AuthenticateService,private progressService:NgProgress) { }

  ngOnInit() {
    console.log(this.AuthService.currentUser())
    this.id = this.route.snapshot.paramMap.get('id')   //to get :id from url
    if (this.id) {
      this.res = true;
      this.ps.getSingleProduct(this.id).take(1)
      .subscribe(res => { this.product = JSON.parse(res), console.log(this.product) });
    }
  }

  delete() {
    this.progressService.start();
    this.progressService.set(0.1);
      this.progressService.inc(0.2);
    if (!confirm("Are you sure you want to delete this product?")) return; {
      this.ps.deleteProduct(this.id).subscribe(res => {
        this.progressService.done();
        this.router.navigate(['/donor/donatedProduct'])
      },error=>{
        this.progressService.done();
      }
      );
    }
  }


  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if (event.target.files[0]) {
      if (this.selectedFile.size >= 10000000 ) {
        this.size = true;
        if(this.selectedFile.type==='image/png'){
        this.type=true;
      }
      }
      else if(this.selectedFile.type==='image/png'){
        this.type=true;
      }
      else {
        this.type = false;
        this.size = false;
        this.upload = true;
      
        this.progressService.start();
        this.progressService.set(0.1);
        this.progressService.inc(0.2);
      console.log(this.selectedFile);
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    console.log(uploadData); 
        this.http.post('https://obv53599.pythonanywhere.com/uploadimage', uploadData)
        .subscribe(
          res => {
          this.progressService.done();
            console.log(res);
            this.product.image = res['url'];
            this.res = true;
            this.upload = false;
          },error=>{
        this.progressService.done();
          }
        );}
    }
  }

  ngAfterContentInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.progressService.start();
          this.progressService.set(0.1);
          this.progressService.inc(0.2);
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.progressService.done();
        }
      });
    }


  onSave(value: NgForm) {
    this.disable=true;
    this.progressService.start();
    this.progressService.set(0.1);
    this.progressService.inc(0.2);
  let  product={
       description:value['description'],
       type:value['type'],
       quantity:value['quantity'],
       image:this.product.image
    }
    console.log(product);
    if (this.id) {
      this.disable=false;
      this.ps.updateProduct(product, this.id).subscribe(res => {
          this.progressService.done();
        this.router.navigate(['/donor/donatedProduct']);
      },
        error => {
          this.disable=false;
        this.progressService.done();
          console.log(error);
        });
    } else {
      this.ps.addProduct(product).subscribe(res => {
          this.progressService.done();
        this.router.navigate(['/donor/donatedProduct']);
        this.disable=false;
      },
        error => {
          this.disable=false;
        this.progressService.done();
          console.log(error);
        });
    }
  }
}
