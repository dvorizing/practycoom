import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import User from 'src/app/models/User';
import { UserService } from 'src/services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
 
  constructor(public UserSer: UserService) { }
  ngOnInit(): void {
    // this.localService.localUser.next(this.localService.getFromStorage())
    // this.sub = this.localService.localUser.subscribe(data => { this.userName = data.Name +data.FamilyName? data.Name : "" })
  }

}
