import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OnUpdateWalletGQL } from '../graphql/subscriptions/on-update-wallet.gql';
import { Wallet } from '../models/wallet.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  constructor(private onUpdateWalletGQL: OnUpdateWalletGQL) {}

  onUpdateWallet(): Observable<Wallet | null> {
    return this.onUpdateWalletGQL.subscribe().pipe(map((res) => res.data?.updateWallet.wallet || null));
  }
}
