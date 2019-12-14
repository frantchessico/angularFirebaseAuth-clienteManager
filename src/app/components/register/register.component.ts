import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
     this.authService._register(this.user)
                     .then(res => console.log(res))
                     .catch(err => console.error(err))
  }

}
