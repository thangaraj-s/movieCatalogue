import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, AfterContentChecked {
  movieList = [];
  selectedMovie = "";
  index: string;
  constructor(public data: DataService, public router: Router) { }

  ngOnInit(): void {
    this.movieList = this.data.movieList;
  }
  ngAfterContentChecked(): void {
    if(this.router.url !== "/") {
      this.index = this.router.url.replace("/movieName/", "");
      this.selectedMovie = this.movieList[this.index].movieName;
    } else {
      this.selectedMovie = this.movieList[0].movieName;
    }
  }
  movieName(index: number, movie: any) {
    this.router.navigate(['/movieName', index]);
    this.selectedMovie = movie.movieName;
  }
}
