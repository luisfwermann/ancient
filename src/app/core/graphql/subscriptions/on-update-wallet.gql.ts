import { Injectable } from '@angular/core';
import { Subscription, gql } from 'apollo-angular';
import { Wallet } from '../../models/wallet.model';

interface Response {
  updateWallet: { wallet: Wallet };
}

@Injectable({
  providedIn: 'root'
})
export class OnUpdateWalletGQL extends Subscription<Response, void> {
  document = gql`
    subscription OnUpdateWallet {
      updateWallet {
        wallet {
          id
          amount
          name
        }
      }
    }
  `;
}
