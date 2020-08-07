import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedBookComponent } from './recommended-book.component';

describe('RecommendedBookComponent', () => {
  let component: RecommendedBookComponent;
  let fixture: ComponentFixture<RecommendedBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
