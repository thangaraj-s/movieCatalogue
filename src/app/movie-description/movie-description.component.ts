import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit {

  movieList;
  movieName;
  img;
  director;
  casts;
  genre;
  index;

  constructor(public data: DataService, public router: Router, public aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieList = this.data.movieList;
    this.aRoute.params.subscribe((params: Params) => {
      this.index = params.id;
      if (this.router.url !== "/") {
        this.img = this.movieList[this.index].img;
        this.movieName = this.movieList[this.index].movieName;
        this.director = this.movieList[this.index].director;
        this.casts = this.movieList[this.index].casts;
        this.genre = this.movieList[this.index].genre;
      } else {
        this.img = this.movieList[0].img;
        this.movieName = this.movieList[0].movieName;
        this.director = this.movieList[0].director;
        this.casts = this.movieList[0].casts;
        this.genre = this.movieList[0].genre;
      }
    });
  }

}
