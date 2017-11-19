import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
const url="http://localhost:3000/blogs";
const header = { headers: new Headers({'Content-Type': 'application/json' , 'Accept': 'q=0.8;application/json;q=0.9'})};

@Injectable()
export class UpdateStarService {

  constructor(private http: Http) { }

  UpdateData(data,Id) {
    return this.http.patch(url+"/"+Id, data, header).map(res => res.json());


  }
}
