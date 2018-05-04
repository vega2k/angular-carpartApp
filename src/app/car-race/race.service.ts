import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class RaceService {

  constructor(private http:HttpClient) {

  }

  getRaces():Observable<any> {
    return this.http.get('assets/json/races.json',
      {responseType:'json'});
  }

}
