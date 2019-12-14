import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  _register(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  _login(user) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  isAuthenticated() {
    return this.afAuth.user;
  }

  _logout() {
    return this.afAuth.auth.signOut();
  }
}
