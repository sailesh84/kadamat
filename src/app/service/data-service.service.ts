import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
// import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private categoryList = 'http://localhost:4040/allServices/categoryList';
  private apiUrl = 'http://localhost:4040/allServices';
  constructor(private http: HttpClient) { }
    getServiceListData() {
      return this.http.get(this.categoryList);
   }
    addProduct(user: User) {
    // return this.http.post<User>(`${this.apiUrl}/add`, user, this.httpOptions)
    return this.http.post<User>(`${this.apiUrl}/add`, user)
   .pipe(
      // catchError(this.handleError('addProduct', null))
    )
  }
}
