import { LoginService } from './../../core/services/login.service';
import { User } from './../../core/models/user.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ag-header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  balance: number | null = null;
  currentUser: User | null = null;

  private subs: Subscription[] = [];

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.subs.push(
      this.loginService.currentUser.subscribe((user) => {
        this.currentUser = user;
        this.refreshBalance();
      })
    );
  }

  refreshBalance(): void {
    this.balance = this.currentUser?.wallets.reduce((sum, wallet) => (sum += wallet.amount), 0) || null;
  }

  onLoginClick(): void {
    this.loginService.redirectToLogin();
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
