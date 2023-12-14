import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  newsApiUrl='https://newsapi.org/v2/top-headlines?country=us&apiKey=ca0f05735e954b9a808075b3dcab5a98'
  techApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ca0f05735e954b9a808075b3dcab5a98'
  businessApiUrl='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ca0f05735e954b9a808075b3dcab5a98'
  topheading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
  technews():Observable<any>{
    return this._http.get(this.techApiUrl);
  }
  businessnews():Observable<any>{
    return this._http.get(this.businessApiUrl);
  }
}
