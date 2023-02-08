import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import User from 'src/app/models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  routeUrl = `${environment.baseUrl}/User`;
  user:User=new User("","","",new Date(),0,0)
  
  PostUser(u:User) {
    return this.http.post<User>(`https://localhost:44359/api/User`,u);
  } 
  GetUserById(id:string) {
    return this.http.get<User>(`https://localhost:44359/api/User/${id}`);
  }
  
}
