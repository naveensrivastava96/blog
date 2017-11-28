import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
 const url="https://naveenjson-server.herokuapp.com/blogs";
 const header = { headers: new Headers({'Content-Type': 'application/json'})};
   @Injectable()
export class StoreDataInDbService {


  constructor(private http: Http) { }

  get() {
    return this.http.get(url).map(res => res.json());

  }

     getblog(id) {
       return this.http.get(url+"/"+id).map(res => res.json());

     }
     postData(data) {
       return this.http.post(url, data, header).map(res => res.json());


     }

}
