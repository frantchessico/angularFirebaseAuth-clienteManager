import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user = null;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
     this.authService.isAuthenticated()
                     .subscribe(auth => this.user = auth)
  }

  logout() {
    this.authService._logout()
                    .then(() => this.router.navigate(['/login']))
                    .catch()
  }

}
