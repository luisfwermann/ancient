import { Injectable } from '@angular/core';
import { Mutation, gql } from 'apollo-angular';
import { Item } from '../../models/item.model';

interface Response {
  openBox: {
    boxOpenings: {
      id: string;
      itemVariant: Item;
    }[];
  };
}

interface Variables {
  boxId: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class OpenBoxGQL extends Mutation<Response, Variables> {
  document = gql`
    mutation openBox($boxId: ID!, $amount: Int!) {
      openBox(input: { boxId: $boxId, amount: $amount }) {
        boxOpenings {
          id
          itemVariant {
            id
            name
            value
            iconUrl
          }
        }
      }
    }
  `;
}
