import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';

const  BASIC_URL = "https://service-booking-app-backend-4124fad6cd33.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  postAd(adDTO:any): Observable<any>{
    const userId = UserStorageService.getUserId();
    return this.http.post(BASIC_URL + `api/company/ad/${userId}`, adDTO,{
      headers : this.createAutherizationHeader()
    })
  }

  getAllAdsByUserId(): Observable<any>{
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/company/ads/${userId}`,{
      headers : this.createAutherizationHeader()
    })
  }

  getAdById(adId:any): Observable<any>{
    return this.http.get(BASIC_URL + `api/company/ad/${adId}`,{
      headers : this.createAutherizationHeader()
    })
  }

  updateAd(adId:any, adDTO:any): Observable<any>{
    return this.http.put(BASIC_URL + `api/company/ad/${adId}`, adDTO,{
      headers : this.createAutherizationHeader()
    })
  }

  deletedAd(adId:any): Observable<any>{
    return this.http.delete(BASIC_URL + `api/company/ad/${adId}`,{
      headers : this.createAutherizationHeader()
    })
  }

  getAllAdBookings(): Observable<any>{
    const companyId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/company/bookings/${companyId}`,{
      headers : this.createAutherizationHeader()
    })
  }

  changeBookingStatus(bookingId: number, status: string): Observable<any>{
    return this.http.get(BASIC_URL + `api/company/booking/${bookingId}/${status}`,{
      headers : this.createAutherizationHeader()
    })
  }

  createAutherizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    )
  }
}
