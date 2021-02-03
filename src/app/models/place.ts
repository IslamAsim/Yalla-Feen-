export class Place{
  // tslint:disable-next-line:variable-name
  _id: string;
  title: string;
  placeImages:string [];
  description: string;
  rating: number;
  workingHours: string;
  location: string;
  contact: string;
  // @ts-ignore
  feedBacks: [{
    user: string;
    feedback: string
  }] = [];
}
