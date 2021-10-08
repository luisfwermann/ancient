import { Injectable } from '@angular/core';
import { gql, Query } from 'apollo-angular';
import { Box } from '../../models/box.model';

interface Response {
  box: Box;
}

interface Variables {
  boxId: string;
}

@Injectable({
  providedIn: 'root'
})
export class BoxGQL extends Query<Response, Variables> {
  document = gql`
    query box($boxId: ID!) {
      box(id: $boxId) {
        id
        name
        iconUrl
        cost
      }
    }
  `;
}
