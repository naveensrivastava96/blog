import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {StoreDataInDbService} from "../store-data-in-db.service";
import {DeletefromdbService} from "../deletefromdb.service";
import {ActivatedRoute} from "@angular/router";
//import {RoutingModule} from "../routing/routing.module"



@Component({
  selector: 'app-blog-div',
  templateUrl: './blog-div.component.html',
  styleUrls: ['./blog-div.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class BlogDivComponent implements OnInit {

   @Input ('data') 'data'
  constructor(private storeDataInDb: StoreDataInDbService,private deletefromdb:DeletefromdbService) {



  }
  blogItems: Object[];
  ngOnInit() {

    this.storeDataInDb.get().subscribe(data => {
      (this.blogItems = data);
      console.log(this.blogItems);
    });
    // this.blogItems=this.data;
    // console.log("data:"+this.data);

  }
  deleteBlog(event,Id)
  {
    console.log("this is blog Id to delete "+Id);
    this.deletefromdb.delete(Id).subscribe(data =>{console.log(data)});
    window.location.href = "/";
  }
}
