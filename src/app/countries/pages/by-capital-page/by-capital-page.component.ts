import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
//Mostrar los paises por capital mediante la solicitud http. 2do paso
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private CountriesService: CountriesService){}

  searchByCapital( term: string ):void {
    this.CountriesService.searchCapital( term )
    .subscribe( countries => {
      this.countries = countries;
    });

  }

}
