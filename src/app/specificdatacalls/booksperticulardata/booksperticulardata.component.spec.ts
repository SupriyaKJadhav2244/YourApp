import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksperticulardataComponent } from './booksperticulardata.component';

describe('BooksperticulardataComponent', () => {
  let component: BooksperticulardataComponent;
  let fixture: ComponentFixture<BooksperticulardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksperticulardataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksperticulardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
