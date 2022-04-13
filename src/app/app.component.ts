import { Component,OnInit } from '@angular/core';
import { Coffe } from './alcohol';
import { AnimeData } from './anime-data';
import { AnimeDetail } from './anime-detail';
import { GetdataService } from './getdata.service';
import { Mytype } from './mytype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servehtt';
  animeData:AnimeData;
  animefacts:AnimeDetail[];
  errorRcv:any;
  giffyDetail:any;
  gifDetails:any;
  CoffeObj:Coffe={file:"https://coffee.alexflipnote.dev/ngIrv7YNyqU_coffee.jpg"};
  constructor(private mydata:GetdataService){
  }
 getCoffe(){
  this.mydata.getData().subscribe(data=>this.CoffeObj=data);
  console.log(this.CoffeObj);
 }
 getAnimeData(){
  this.mydata.getOtherData().subscribe(data=>this.animeData=data,(err)=>{this.errorRcv=err
  console.log(err)});
 
  this.animefacts=this.animeData.data;
  console.log(this.animefacts);
 }
 getGif(){
   this.mydata.getGif().subscribe(data=>{console.log(data)
    console.log(this.giffyDetail=data.data)
    console.log(this.giffyDetail=data.data[0])
    console.log(this.giffyDetail=data.data[0].images)
    console.log(this.giffyDetail=data.data[0].images.downsized_medium)
    this.gifDetails=data.data
  })
 }
  
}
