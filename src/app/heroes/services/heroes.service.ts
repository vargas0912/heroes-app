import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe }      from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
   return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`)
  }

  getHeroesById(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${ id }`)
  }

  getSuggestion(q: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${ q }&_limite=6`);
  }

  addHero( hero: Heroe ): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero( hero: Heroe ): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${ hero.id }`, hero);
  }

  deleteHero( id: string ): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/heroes/${ id }`);
  }
   
   
}
