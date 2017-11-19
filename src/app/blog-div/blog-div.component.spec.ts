import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDivComponent } from './blog-div.component';

describe('BlogDivComponent', () => {
  let component: BlogDivComponent;
  let fixture: ComponentFixture<BlogDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
