import { Component, OnInit } from '@angular/core';
import {StoreDataInDbService} from "../store-data-in-db.service";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  heading='';
  data: Object[];
  constructor(private storedataindb:StoreDataInDbService) { }

  ngOnInit() {
    this.storedataindb.get().subscribe(x => {
      this.data = x;
    });
  }

  search(val: string) {
    if (val.trim() !== '') {
      this.heading = '';
      this.storedataindb.get().subscribe(x => {
        this.data = x.filter(function (item) {
          return (item.title.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) !== -1);
        });
      });
    }

    if (val.trim() === '') {
      this.storedataindb.get().subscribe(x => {
        this.data = x;
      });
    }
  }



}
