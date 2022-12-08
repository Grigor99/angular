import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {


  constructor(){

  }

  mobiles = null;

  ngOnInit() {
    throw new Error('Method not implemented.');
  }

}
