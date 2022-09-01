import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserToken } from './UserToken';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAdminLoggedIn = false;
  isUserLoggedIn = false;
  userUrl = 'http://127.0.0.1:8082/api';
  token:any;
  

  constructor(private http: HttpClient) { }
  

  login(username:string,password:any){
    let headers=new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
    let options = {
      headers: headers
    };
  const params = new HttpParams({
    fromObject: {
      username: username,
      password: password
    }
  });
    const authUrl = this.userUrl + '/login' ;
    return this.http.post(authUrl,  params,options)
  }

  isUserAuthenticated(): boolean {
    return !!this.getCurrentUser();
}

  getCurrentUser() {
    return localStorage.getItem("Access_token")
}

  register(data:any) {
    return this.http.post<any>(`${this.userUrl}/user/register`, data);
  }

  getWalletBalance(){
    this.token=localStorage.getItem("Access_token")
    return this.http.get<any>(`${this.userUrl}/user/getWalletBalance`,{
      headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Host':'http://127.0.0.1:8082',
          // 'Content-Length':'0',
          // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0)',
          // 'Accept':'*/*',
          // 'Accept-Encoding':'gzip, deflate, br',
          // 'Connection':'keep-alive',
          'AUTHORIZATION': 'Bearer '+this.token 
        }),
      
      });
  }

  addAmount(price:any){
    let headers=new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Host':'http://127.0.0.1:8082',
      'AUTHORIZATION': 'Bearer '+localStorage.getItem("Access_token")
    })
    let options = {
      headers: headers
    };
  const params = new HttpParams({
    fromObject: {
      amount: price,
    }
  });
    return this.http.put<any>(`${this.userUrl}/user/addon/wallet`,params,options)
  }

  confirmTicket(bus_id:any,seats:any){
    console.log(seats)
    return this.http.post<any>(`${this.userUrl}/user/tickets/book/${bus_id}/${seats}`,'',{
      headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Host':'http://127.0.0.1:8082',
          // 'Content-Length':'0',
          // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0)',
          // 'Accept':'*/*',
          // 'Accept-Encoding':'gzip, deflate, br',
          // 'Connection':'keep-alive',
          'AUTHORIZATION': 'Bearer '+localStorage.getItem("Access_token") 
        }),
      
      })
  }
  cancelTicket(id:any){
    return this.http.delete<any>(`${this.userUrl}/user/tickets/${id}/cancel`,{
      headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Host':'http://127.0.0.1:8082',
          // 'Content-Length':'0',
          // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0)',
          // 'Accept':'*/*',
          // 'Accept-Encoding':'gzip, deflate, br',
          // 'Connection':'keep-alive',
          'AUTHORIZATION': 'Bearer '+localStorage.getItem("Access_token") 
        }),
      
      })
  }

  getAllUserTicket(){
    return this.http.get<any>(`${this.userUrl}/user/tickets`,{
      headers: new HttpHeaders(
        {
          'Content-Type':  'application/json',
          'Host':'http://127.0.0.1:8082',
          // 'Content-Length':'0',
          // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:44.0) Gecko/20100101 Firefox/44.0)',
          // 'Accept':'*/*',
          // 'Accept-Encoding':'gzip, deflate, br',
          // 'Connection':'keep-alive',
          'AUTHORIZATION': 'Bearer '+localStorage.getItem("Access_token") 
        }),
      
      })
  }


  logout() {
    localStorage.removeItem('Access_token');
    localStorage.removeItem('Refresh_token');
  }

  isAdminLogin() {
    if (this.isUserAuthenticated()) {
      return true;
    } else {
      return false;
    }
  }
    isUserLogin() {
      if (this.isUserAuthenticated()) {
        return true;
      } else {
        return false;
      }
    }

}
