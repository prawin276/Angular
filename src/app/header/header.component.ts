import { Component, OnInit } from '@angular/core';
import { MENUS } from '../menus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menus = MENUS;

  constructor() { }

  ngOnInit() {
  }

}
