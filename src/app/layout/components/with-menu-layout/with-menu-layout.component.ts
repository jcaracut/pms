import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-with-menu-layout',
  templateUrl: './with-menu-layout.component.html',
  styleUrls: ['./with-menu-layout.component.scss'],
})
export class WithMenuLayoutComponent implements OnInit {

  routerSubscription: Subscription;
  constructor(
    private router: Router, 
    private menuCtrl: MenuController,
    ) { }

  public pages = [
  ];
  // public labels = [ 'Settings', 'Logout',];

  ngOnInit() {
  }

  logout(){
    // this.userProvider.Clear();
    this.router.navigateByUrl('login');
  }

  goToSettings() {
    this.router.navigateByUrl('settings');
  }
}
