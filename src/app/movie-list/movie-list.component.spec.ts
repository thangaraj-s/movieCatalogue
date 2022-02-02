import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let mockRouter = {
    navigate() {},
    url: "/movieName/1"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      providers: [
        {provide: Router, useValue: mockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check movieName", () => {
    let index = 0;
    let movie = {
      movieName: "Kung Fu Panda"
    };
    mockRouter.url = "/movieName/0";
    spyOn(component.router, "navigate");
    component.movieName(index, movie);
    expect(component.selectedMovie).toEqual("Kung Fu Panda");
  });
  it("should check ngAfterContentChecked", () => {
    mockRouter.url = "/";
    component.ngAfterContentChecked();
    expect(component.selectedMovie).toEqual("Kung Fu Panda");
  });
});
