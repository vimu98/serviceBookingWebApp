import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/basic/services/storage/user-storage.service';


const BASIC_URL = "https://servicebooking-appbackend-13388ffb11a5.herokuapp.com/";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllAds(): Observable<any>{
    return this.http.get(BASIC_URL + `api/client/ads`,{
      headers : this.createAutherizationHeader()
    })
  }

  searchAdByName(name: any): Observable<any>{
    return this.http.get(BASIC_URL + `api/client/search/${name}`,{
      headers : this.createAutherizationHeader()
    })
  }

  getAdDetailsByAdId(adId: any): Observable<any>{
    return this.http.get(BASIC_URL + `api/client/ad/${adId}`,{
      headers : this.createAutherizationHeader()
    })
  }

  bookService(bookDTO: any): Observable<any>{
    return this.http.post(BASIC_URL + `api/client/book-service`, bookDTO,{
      headers : this.createAutherizationHeader()
    })
  }

  getMyBookings(): Observable<any>{
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/client/my-bookings/${userId}`,{
      headers : this.createAutherizationHeader()
    })
  }

  giveReview(reviewDTO:any): Observable<any>{
    return this.http.post(BASIC_URL + `api/client/review`,reviewDTO, {
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
