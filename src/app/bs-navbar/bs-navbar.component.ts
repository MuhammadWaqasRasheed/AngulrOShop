import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'src/models/app-user';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  appUser:any//actually is of type AppUser but due to compiler error it is giving error so i set it to any

  constructor(private auth:AuthService) { 
    this.auth.appUser$.subscribe(user=>{
      if(user) this.appUser=user
      else this.appUser=null
    })
  }

  logout()
  {
    this.auth.logout();  //calling authService Logout() method
  }


}
