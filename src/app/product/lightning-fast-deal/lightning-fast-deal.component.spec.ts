import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightningFastDealComponent } from './lightning-fast-deal.component';

describe('LightningFastDealComponent', () => {
  let component: LightningFastDealComponent;
  let fixture: ComponentFixture<LightningFastDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightningFastDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightningFastDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
