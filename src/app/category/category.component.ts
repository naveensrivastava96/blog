import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {BodyComponent} from "../body/body.component"

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Output() getCategory = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  getcategory(category){
    this.getCategory.emit(category);

}

}
