import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerThirdComponent } from './banner-third.component';

describe('BannerThirdComponent', () => {
  let component: BannerThirdComponent;
  let fixture: ComponentFixture<BannerThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
