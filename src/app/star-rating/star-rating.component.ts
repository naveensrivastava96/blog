import { Component, OnInit, Input } from '@angular/core';
import { UpdateStarService} from "../update-star.service";
// import {RadioControlValueAccessor} from "./radio_value_accessor";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit {

  @Input() 'customid' ;
  noId;
  @Input() 'blogItems'


  constructor(private updateStar: UpdateStarService) {

  }

  ngOnInit() {
    console.log("star Rating :"+this.customid);
    this.noId=this.customid;
    console.log("from star : "+this.blogItems);
      }

  getStars(stars:number)
  {
    let starsToUpdate = {
      "rating": stars,
      "id" : this.noId,
    };

    console.log(this.noId);
    this.updateStar.UpdateData(starsToUpdate,this.noId).subscribe( data => {console.log(data);});
    console.log("updated");
  }

}
