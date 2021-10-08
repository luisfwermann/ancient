import { LoginService } from './core/services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.checkCurrentUser();
  }
}
