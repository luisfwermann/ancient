import { BoxGQL } from './../graphql/queries/box.gql';
import { BoxesGQL } from './../graphql/queries/boxes.gql';
import { OpenBoxGQL } from './../graphql/mutations/open-box.gql';
import { Injectable } from '@angular/core';
import { Box } from '../models/box.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {
  constructor(private boxGQL: BoxGQL, private boxesGQL: BoxesGQL, private openBoxGQL: OpenBoxGQL) {}

  async list(): Promise<Box[]> {
    const res = await this.boxesGQL.fetch().toPromise();
    const boxes: Box[] = [];
    res?.data?.boxes.edges.forEach((edge) => boxes.push(edge.node));

    return boxes;
  }

  async get(boxId: string): Promise<Box> {
    const res = await this.boxGQL.fetch({ boxId }).toPromise();
    return res.data?.box;
  }

  async openBox(boxId: string, amount = 1): Promise<Item | null> {
    const res = await this.openBoxGQL.mutate({ boxId, amount }).toPromise();
    return res.data ? res.data.openBox.boxOpenings[0].itemVariant : null;
  }
}
