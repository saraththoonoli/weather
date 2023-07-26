import { Component,OnInit } from '@angular/core';
import { ApiService } from './Services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myweather:any
  temp:Number=0
  feels:number=0
  humidity:number=0
  pressure:number=0
  summury:string=''
  title = 'weather-app';
  constructor(private api:ApiService){

  }

ngOnInit(): void {
  this.api.getWeather().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.myweather=res
      console.log(this.myweather);
      this.temp=this.myweather.main.temp
      this.feels=this.myweather.main.feels_like
      this.humidity=this.myweather.main.humidity
      this.pressure=this.myweather.main.pressure
      this.summury=this.myweather.weather[0].main
      
      
    },
    error:(error)=>console.log(error.message),
    complete:()=>console.log('api call compleated')
  })
}
}

