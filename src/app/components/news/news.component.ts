import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  title:string = "每日新聞";

  newinfo = {
    category:  "今日頭條",
    title: "台灣9/27本土0確診, 陳時中: 10月5日起有條件開放部分休閒娛樂場所",
    content: "指揮官陳時中今(27)日表示，考量國內疫情目前已趨緩且穩定控制，經與相關單位溝通討論及評估後，指揮中心規劃於本週起放寬部分場域防疫管制措施，並於10月5日起有條件開放部分休閒娛樂場所"


  }
  constructor() { }

  ngOnInit() {}

}


