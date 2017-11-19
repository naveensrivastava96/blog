import { Component, OnInit } from '@angular/core';
import {StoreDataInDbService} from "../store-data-in-db.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {UpdateStarService} from "../update-star.service";


interface BlogItem {
  name: string;
  title: string;
  category: string;
  logo: string;
  ratings: string;
  content: string;
  date: string;
  id: any ;
}
@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})

export class UpdatepageComponent implements OnInit {

  constructor(private storeData: StoreDataInDbService, private route: ActivatedRoute, private location: Location,private updateService:UpdateStarService) {
  }

  data: BlogItem;
  id: any;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.storeData.getblog(this.id).subscribe(x => this.data = x);

  }

  getImage(logo: File[]) {
    const fileReader = new FileReader();
    fileReader.onload = (file) => {
      this.data.logo = fileReader.result;
      this.updateService.UpdateData(this.data, this.data.id).subscribe(x => {
        this.location.back();
      });
    }
    if (logo[0]) {
      fileReader.readAsDataURL(logo[0]);
    }
    else {
      this.updateService.UpdateData(this.data,this.data.id).subscribe(x => {
        this.location.back();
      });
    }

  }

}
