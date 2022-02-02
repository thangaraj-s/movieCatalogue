import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movieList = [
    {
      movieName: "Kung Fu Panda",
      img: "../../assets/kung_fu_panda.jpg",
      director: "Mark Osborne",
      casts: "Jack Black, Jackie Chen",
      genre: "Action, Comedy"
    },
    {
     movieName: "Veeram",
     img: "../../assets/veeram.jpg",
     director: "XXXXX",
     casts: "AAAAA",
     genre: "aaaa"
   },
   {
     movieName: "Annatha",
     img: "../../assets/annatha.jpg",
     director: "YYYYY",
     casts: "BBBB",
     genre: "bbb"
   }
  ];

  constructor() { }
}
