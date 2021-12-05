import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film';
import { FilmService } from '../services/film.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: [
  ]
})
export class UpdateFilmComponent implements OnInit {

  currentFilm = new Film();
  constructor(private activatedRoute: ActivatedRoute,private router :Router,
    private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.consulterFilm(this.activatedRoute.snapshot.params.id).
    subscribe( prod =>{ this.currentFilm = prod; } ) ;
   
  }

  updateFilm(){
  this.filmService.updateFilm(this.currentFilm).subscribe(prod => {
    this.router.navigate(['films']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }   
}
