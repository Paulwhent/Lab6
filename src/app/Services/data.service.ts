import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import{Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/8ae82583-5e22-11ea-a136-5fc8aea01062');
  }
GetWeatherData():Observable<any>{
return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=cefce004a5cee31a8868abc16d559be8');

}
}
