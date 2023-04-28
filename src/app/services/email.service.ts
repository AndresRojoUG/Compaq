import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

HttpClientModule
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClientModule) { }
  
}
