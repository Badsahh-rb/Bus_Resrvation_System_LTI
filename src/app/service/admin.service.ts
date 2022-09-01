import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './Bus';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  ownerUrl = 'http://127.0.0.1:8082/api/admin';
  token:any;
  constructor(private http: HttpClient) { }

  showAllBus() {
    return this.http.get<any>(`${this.ownerUrl}/getBuses`,{
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
  addBus(bus:Bus) {
    return this.http.post(`${this.ownerUrl}/addbus`,bus,{
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
    };
  updateBus(bus:Bus){
    return this.http.post(`${this.ownerUrl}/updateBus`,bus,{
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
  deleteBus(bus:Bus){
    return this.http.post(`${this.ownerUrl}/deleteBus`,bus,{
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
