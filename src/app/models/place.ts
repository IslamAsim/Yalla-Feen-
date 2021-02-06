import { User } from "./user";
import { Comment } from './comment';
import { Rating } from './rating';
import { Category } from './category';

export class Place{
  // tslint:disable-next-line:variable-name
  _id: string;
  title: string;
  description: string;
  location: string;
  type:string;
  comments:any[];
  owner:any;
  category:any;
  favorites_count:number;
  tags:string;
  workStart:Date;
  workEnd:Date;
  vistorType:string;
  budgetType:string;
  phone:string;
  images:string [];
  rating: any;
  workingHours: string;
}
