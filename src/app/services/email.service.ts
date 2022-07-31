import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private api = 'https://mailthis.to/lukasemail';

  constructor(private httpClient: HttpClient) { }

  // calls an email api to send the message
  postMessage(input: FormGroup): Observable<Object> {
    return this.httpClient.post(this.api, input, { responseType: 'text' }).pipe(
      map(response => { 
          return response;
        }        
      ), (error: any) => {
        return error;
      }
    );
  }
}