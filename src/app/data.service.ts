import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

    let  emp =  [
      {  id:  1,  name:  'abc', worklocation: "chennai", mobile: 12345},
      {  id:  2,  name:  'xyz', worklocation: "bengaluru",   mobile: 12345 },
      {  id:  3,  name:  'pqr', worklocation: "pune",   mobile: 12345 },
      {  id:  4,  name:  'uvw', worklocation: "hydrabad",   mobile: 12345 }
     ];

   return {emp};

  }
}
