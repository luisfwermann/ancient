import { CurrentUserGQL } from './../graphql/queries/current-user.gql';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SubscriptionService } from './subscription.service';
import { Wallet } from '../models/wallet.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.getCurrentUser());
  currentUser = this.currentUserSubject.asObservable();

  onUpdateWalletSub!: Subscription;

  constructor(private currentUserGQL: CurrentUserGQL, private subscriptionService: SubscriptionService) {}

  async checkCurrentUser(): Promise<void> {
    const serverUser = await this.fetchGQLUser();
    const clientUser = this.getCurrentUser();

    if (!serverUser && clientUser) {
      this.setCurrentUser(null);
    } else {
      this.setCurrentUser(serverUser);
      this.checkOnUpdateWallet();
    }
  }

  getCurrentUser(): User | null {
    const cachedUser = localStorage.getItem('login.user');
    return cachedUser ? JSON.parse(cachedUser) : null;
  }

  setCurrentUser(user: User | null): void {
    if (user) {
      localStorage.setItem('login.user', JSON.stringify(user));
    } else {
      localStorage.removeItem('login.user');
    }
    this.currentUserSubject.next(user);
  }

  redirectToLogin(): void {
    window.location.href = 'https://api-staging.csgoroll.com/auth/steam?redirectUri=http://localhost:4200';
  }

  async fetchGQLUser(): Promise<User> {
    const serverUser = await this.currentUserGQL.fetch().toPromise();
    return serverUser.data.currentUser;
  }

  checkOnUpdateWallet(): void {
    this.onUpdateWalletSub?.unsubscribe();

    this.onUpdateWalletSub = this.subscriptionService.onUpdateWallet().subscribe((wallet: Wallet | null) => {
      const currentUser = this.getCurrentUser();
      if (!wallet || !currentUser) {
        return;
      }

      const idx = currentUser.wallets.findIndex((w) => w.id === wallet?.id);
      if (idx !== undefined) {
        currentUser.wallets[idx] = wallet;
      } else {
        currentUser.wallets.push(wallet);
      }

      this.setCurrentUser(currentUser);
    });
  }
}
