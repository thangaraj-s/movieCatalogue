import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MovieDescriptionComponent } from './movie-description.component';

describe('MovieDescriptionComponent', () => {
  let component: MovieDescriptionComponent;
  let fixture: ComponentFixture<MovieDescriptionComponent>;
  let mockRouter = {
    url: "/movieName/1"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDescriptionComponent ],
      providers: [
        {provide: Router, useValue: mockRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should check ngAfterContentChecked", () => {
    mockRouter.url = "/";
    component.ngAfterContentChecked();
    expect(component.img).toEqual("../../assets/kung_fu_panda.jpg");
  });
});
