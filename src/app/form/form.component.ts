import { Component, OnInit } from '@angular/core';
import { StoreDataInDbService} from '../store-data-in-db.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private storeDataInDb:StoreDataInDbService) { }

  ngOnInit() {
  }

  getFromData(name:String,title:String,category:String,content:String,image:File[])
  {
    console.log("In get ");
    let fileReader = new FileReader();
    fileReader.onload=(file)=>{
      let str=fileReader.result;
      let Obj={
        name:name,
        title:title,
        category:category,
        content:content,
        rating:0,
        logo:str,
        date: (new Date()).toDateString()

      }
console.log("this is "+Obj);
      this.storeDataInDb.postData(Obj).subscribe( data => {console.log(data);
        window.location.href = "/";});

  }
  fileReader.readAsDataURL(image[0]);


  }


}
