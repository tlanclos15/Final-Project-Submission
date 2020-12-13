import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getUserDetails(username, password) {
    // post blah blah blah
    return this.http.post('/api/auth.php', {
      username,
      password
    }).subscribe(data => {
      console.log(data, ' is what we got from the server');
    })
  }
}
