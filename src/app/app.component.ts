import User from './models/User';
 import { UserService } from 'src/services/user.service';
 import {ChangeDetectionStrategy} from "@angular/core";
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public userSer:UserService) {}
  ngOnInit(): void {
    // this.localService.localUser.next(this.localService.getFromStorage())
    // this.sub = this.localService.localUser.subscribe(data => { this.userName = data.Name ? data.Name : "" })
    // this.myUser=JSON.parse(localStorage.getItem(User))

  }
}