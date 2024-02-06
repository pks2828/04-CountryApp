
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Country } from '../interfaces/country';


//Mostrar los paises por capital mediante la solicitud http inyectando el servicio de httpclient. 1er paso
@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }//Mediante esto hacemos la peticion a la API

  searchCountryByAlphaCode(code:string): Observable<Country | null> {

    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country[]>( url )
     .pipe(
      map( countries => countries.length > 0 ? countries[0] : null ), //Si hay mas de un país con ese código devuelve solo uno
      catchError( () => of(null) )
     );
  }

  searchCapital(term: string): Observable<Country[]> {//Funcion que se encarga de hacer la peticion a la API mediante el termino de busqueda en base a la interfaz
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>( url )
     .pipe(
      catchError( () => of([]) )
     );
  }

  searchCountry(term:string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>( url )
     .pipe(
      catchError( () => of([]) )
     );

  }

  searchRegion(region:string):Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>( url )
     .pipe(
      catchError( () => of([]) )
     );

  }

}
