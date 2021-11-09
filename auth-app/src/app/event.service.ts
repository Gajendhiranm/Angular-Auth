import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 
  private _eventsURL = "https://localhost:3000/events"
  private _specialURL = "https://localhost:3000/special"

  constructor(private _http : HttpClient) { }

  getEvents(){
     return this._http.get<any>(this._eventsURL)
  }

  
  getSpecialEvents(){
    return this._http.get<any>(this._specialURL)
 }


}
