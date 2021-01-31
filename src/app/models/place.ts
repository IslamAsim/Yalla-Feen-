export class Place{
  id: string | null;
  title: string;
  img: string;
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
