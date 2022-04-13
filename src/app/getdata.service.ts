import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { MapType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffe } from './alcohol';
import { AnimeData } from './anime-data';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private dataFetcher:HttpClient) { 

  }
  getData(){
    return this.dataFetcher.get<Coffe>('https://coffee.alexflipnote.dev/random.json')
  }
  getOtherData(){
    return this.dataFetcher.get<AnimeData>('https://anime-facts-rest-api.herokuapp.com/api/v1')
  }
  getGif(){
    let params= new HttpParams().set('q','angular').set('api_key','yEedtTvxZzn6xSTeDe9a3Kxvngw5asrF').set('limit','10')
    return this.dataFetcher.get<any>('https://api.giphy.com/v1/gifs/search',{params})
  }

}
