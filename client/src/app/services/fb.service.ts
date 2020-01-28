import { Injectable } from '@angular/core';
import {AngularFireLiteAuth, AngularFireLiteFirestore} from 'angularfire-lite';
import {first, switchMap} from 'rxjs/operators';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(public auth: AngularFireLiteAuth, public fs: AngularFireLiteFirestore) { }

  isAuth() {
    return this.auth.isAuthenticated();
  }

  signin(email, pass) {
    return this.auth.signin(email, pass);
  }

  signup(email, pass) {
    return this.auth.signup(email, pass);
  }

  logout(): Observable<any> {
    return from(this.auth.signout());
  }

  
  

}
