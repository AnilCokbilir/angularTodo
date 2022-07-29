import { Component, OnInit } from '@angular/core';
import { InputArrayService } from '../input-array.service';
@Component({
  selector: 'app-fetch-api',
  templateUrl: './fetch-api.component.html',
  styleUrls: ['./fetch-api.component.scss']
})
export class FetchApiComponent implements OnInit {
  pokemon: any[] = [];
  constructor(public service: InputArrayService) { }

  ngOnInit(): void {
    this.showCongif()
  }

  showCongif() {
    this.service.getConfig().subscribe((api: any) => {
      console.log(api);
      this.pokemon.push(api);
      console.log('pokemon', this.pokemon);
    })
  }
}
