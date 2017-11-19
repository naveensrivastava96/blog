import { Component, OnInit } from '@angular/core';
import {StoreDataInDbService} from "../store-data-in-db.service"


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  data: Object[];
  constructor(private storeService:StoreDataInDbService) { }

  ngOnInit() {
    this.storeService.get().subscribe(x => {
      this.data = x;
    });

  }
  getCategory(category: string) {
    if (category === 'All') {

      this.storeService.get().subscribe(x => {
        this.data = x;
      });
    }

    else {

      this.storeService.get().subscribe(x => {
        this.data = x.filter(function (item) {
          return item.category === category;
        });
      });
    }
  }
}
