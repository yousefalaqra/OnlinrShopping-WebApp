import { Guid } from "../../../node_modules/guid-typescript/dist/guid";
import {TrackableModel} from "./TrackableModel";


export class ItemModel extends TrackableModel {
    ItemId: Guid;
    ItemName: string;
    ItemDescreption: string;
    ItemImg: string;
    ItemPrice: number;
  }