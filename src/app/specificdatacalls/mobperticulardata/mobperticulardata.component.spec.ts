import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobperticulardataComponent } from './mobperticulardata.component';

describe('MobperticulardataComponent', () => {
  let component: MobperticulardataComponent;
  let fixture: ComponentFixture<MobperticulardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobperticulardataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobperticulardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
