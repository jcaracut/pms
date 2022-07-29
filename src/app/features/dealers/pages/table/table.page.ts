import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  player_icon = "/assets/icon/player.jpeg";
  dealer_icon = "/assets/icon/dealer.jpeg";

  constructor() { }

  ngOnInit() {
  }

}
