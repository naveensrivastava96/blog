import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
const url="https://naveenjson-server.herokuapp.com/blogs";
const header = { headers: new Headers({'Content-Type': 'application/json'})};
@Injectable()
export class DeletefromdbService {

  constructor(private http:Http) { }

  delete(Id)
  {
    console.log("deleted with Id : "+Id);
    return this.http.delete(url+"/"+Id, header).map(res => res.json());

  }



}
