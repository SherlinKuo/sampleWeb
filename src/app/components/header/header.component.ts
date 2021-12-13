import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  categorys:string[] = ["焦點", "國際", "COVID-19"];

  constructor() { }

  ngOnInit() {}

}
