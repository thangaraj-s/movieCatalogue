import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieDescriptionComponent } from './movie-description.component';

describe('MovieDescriptionComponent', () => {
  let component: MovieDescriptionComponent;
  let fixture: ComponentFixture<MovieDescriptionComponent>;
  let mockRouter = {
    url: "/movieName/1"
  };
  let mockaRoute = {
    params: {'id': '1'}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDescriptionComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockaRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
