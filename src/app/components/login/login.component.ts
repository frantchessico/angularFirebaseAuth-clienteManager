import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {
    email: '',
    password: ''
  }
  constructor(private flashMessage: FlashMessagesService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService._login(this.user)
                    .then(() => {
                      
                      this.flashMessage.show('Welcome to you Account', {
                        cssClass: 'alert-success',
                        timeout: 3000
                      })

                      this.router.navigate(['/clients'])
                    })
                    .catch(err => {
                      this.flashMessage.show(err.message, {
                        cssClass: 'alert-danger',
                        timeout: 3000
                      })
                    })
  }

}
