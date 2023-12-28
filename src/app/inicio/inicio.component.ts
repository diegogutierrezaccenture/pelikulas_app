import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  popularMovies: any[] = [];
  moviesDetails: any[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private tmdbService: TmdbService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    // Acceder a la instancia de FirebaseService
    console.log(this.firebaseService.app);
    console.log(this.firebaseService.analytics);
    
    this.tmdbService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results;
    });
  }

  search(): void {
    this.tmdbService.searchMovies(this.searchQuery).subscribe((data) => {
      this.searchResults = data.results;
    });
  }

  getMoviesByGenre(genreId: number): void {
    this.tmdbService.getMoviesByGenre(genreId).subscribe((data) => {
      // Manejar las películas por género
    });
  }
}
