import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: any = [];
  inputItem: any;

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.list.push(this.inputItem);
    this.inputItem = '';
  }

}
