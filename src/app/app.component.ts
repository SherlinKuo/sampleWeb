import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // 元件名稱
  templateUrl: 'app.component.html', //合作的 HTML
  styleUrls: ['app.component.scss'], //合作的 SCSS
})
export class AppComponent { // Module 名稱
  constructor() {} //建構函式(初始化的內容都放裡面)
}
