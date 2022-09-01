import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  userUrl = 'http://127.0.0.1:8082/api';
  constructor(private http: HttpClient) { }

  chechAvail(data:any) {
    return this.http.get<any>(`${this.userUrl}/user/check/${data.startingPoint}/${data.endingPoint}/${data.availableDate}`,{
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
      
      });
  }
  bookSeats(data:any) {
    return this.http.post<any>(`${this.userUrl}/bookSeats`, data,{
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
      
      });
  }
  bookTickets(data:any)
  {
    return this.http.post<any>(`${this.userUrl}/bookTickets`, data,{
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
      
      });
  }
}
