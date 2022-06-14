import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'UD37';

  private roles: string [] = [];

  isLogedIn = false;
  showAdminBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService){}

  ngOnInit(): void{
    this.isLogedIn = !! this.tokenStorageService.getToken();

    if(this.isLogedIn){
      const USER = this.tokenStorageService.getUser();
      this.roles = USER.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = USER.username;

    }

  }

}
