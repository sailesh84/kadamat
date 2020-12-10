import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { urls } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  // private categoryList = 'http://localhost:4040/allServices/categoryList';
  // private apiUrl = 'http://localhost:4040/allServices';
  constructor(private http: HttpClient) {}

  // getServiceListData() {
  //   return this.http.get(this.categoryList);
  // }

  addProduct(user: User) {
    // return this.http.post<User>(`${this.apiUrl}/add`, user, this.httpOptions)
    let apiUrl = urls.LOCAL_SERV_URL;
    return this.http
      .post<User>(apiUrl+ '/add', user)
      .pipe
      // catchError(this.handleError('addProduct', null))
      ();
  }

  getUnitList(){
    let apiUrl = urls.LOCAL_SERV_URL;
    let finalUrl = apiUrl + 'unitList';
    return this.http.get(finalUrl);
  }

  getAreaList(){
    let apiUrl = urls.LOCAL_SERV_URL;
    let finalUrl = apiUrl + 'areaList';
    return this.http.get(finalUrl);
  }

  getTimeList(){
    let apiUrl = urls.LOCAL_SERV_URL;
    let finalUrl = apiUrl + 'timeList';
    return this.http.get(finalUrl);
  }

  getServiceListData(){
    let apiUrl = urls.LOCAL_SERV_URL;
    let finalUrl = apiUrl + 'categoryList';
    return this.http.get(finalUrl);
  }
}
