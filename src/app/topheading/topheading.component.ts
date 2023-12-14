import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit{
[x: string]: any;
constructor(private _services:NewsapiservicesService){}
topheadingDisplay:any=[];
ngOnInit(): void {
  this._services.topheading().subscribe((result)=>{
    console.log(result);
    this.topheadingDisplay=result.articles;
  })
}
}
