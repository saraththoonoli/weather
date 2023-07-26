import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient ) {

   }
  getWeather(){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Minneapolis&appid=76c425f83d3dd4a696721e5d4d4cc3fe&unit=imperial')
  }

}
