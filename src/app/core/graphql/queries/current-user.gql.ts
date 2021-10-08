import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { User } from '../../models/user.model';

interface Response {
  currentUser: User;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentUserGQL extends Query<Response, void> {
  document = gql`
    {
      currentUser {
        id
        name
        wallets {
          id
          amount
          currency
        }
      }
    }
  `;
}
