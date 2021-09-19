import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopperticulardataComponent } from './laptopperticulardata.component';

describe('LaptopperticulardataComponent', () => {
  let component: LaptopperticulardataComponent;
  let fixture: ComponentFixture<LaptopperticulardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopperticulardataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopperticulardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
