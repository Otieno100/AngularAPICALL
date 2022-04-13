import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../dog';

@Component({
  selector: 'app-api-req',
  templateUrl: './api-req.component.html',
  styleUrls: ['./api-req.component.css']
})
export class ApiReqComponent implements OnInit {
  apiData:Dog[]
  constructor(private getData:HttpClient, ) { }


  ngOnInit(): void {
    this.getData.get<Dog[]>('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
    .subscribe(data=>this.apiData=data);
  }

}
