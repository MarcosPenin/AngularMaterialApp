import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookigcompleteComponent } from './bookigcomplete.component';

describe('BookigcompleteComponent', () => {
  let component: BookigcompleteComponent;
  let fixture: ComponentFixture<BookigcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookigcompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookigcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
