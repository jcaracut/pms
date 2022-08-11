import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  player_icon = "/assets/icon/player.jpeg";
  dealer_icon = "/assets/icon/dealer.jpeg";
  table_style: Record<string, string> = {};
  scan_started: boolean;
  table_started: boolean;
  table_profile_selected: boolean;

  players: Player[];

  player1: Player;
  player2: Player;
  player3: Player;
  player4: Player;
  player5: Player;
  player6: Player;
  player7: Player;
  player8: Player;
  player9: Player;

  maxPlayers: number = 9;

  constructor() { }

  ngOnInit() {
    this.scan_started = true;
    this.table_style = {
      '--background':  !this.scan_started ? "url('/assets/icon/table.png') no-repeat 50%" : 'transparent'
    };
  }

  // scanQR(): Promise<Player>{
  //   return this.player1;
  // }

  scanQR(){
    return null;
  }

  startTable(){
    
  }

  playerClick(position) {
    switch (position) {
      case 1:
        if(this.player1)
          alert("Logout?"); 
          // Seat out
        else 
          this.player1 = this.scanQR();
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      case 6:

        break;
      case 7:

        break;
      case 8:

        break;
      case 9:

        break;
      default:
        break;
    }
  }

}
