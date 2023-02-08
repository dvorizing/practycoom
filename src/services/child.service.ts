import { Injectable } from '@angular/core';
import Child from 'src/app/models/Child';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChildService {
  constructor(public http: HttpClient) { }
  routeUrl = `${environment.baseUrl}/Child`;
  childArr:Child[]=[];
  
  PostChild(c:Child) {
    return this.http.post<Child>(`https://localhost:44359/api/Child`,c);
  }
  GetChildById(id:string) {
    return this.http.get<Child>(`https://localhost:44359/api/Child/${id}`);
  }
  
  
}
