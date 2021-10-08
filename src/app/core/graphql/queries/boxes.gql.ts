import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { Box } from '../../models/box.model';

interface Response {
  boxes: { edges: { node: Box }[] };
}

@Injectable({
  providedIn: 'root'
})
export class BoxesGQL extends Query<Response, void> {
  document = gql`
    {
      boxes(free: false, purchasable: true, openable: true) {
        edges {
          node {
            id
            name
            iconUrl
            cost
          }
        }
      }
    }
  `;
}
