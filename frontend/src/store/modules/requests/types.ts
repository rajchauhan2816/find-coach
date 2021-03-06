export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  role: string;
}

export interface ICoach {
  _id: string;
  areas: string[];
  description: string;
  hourlyRate: number;
  user: IUser;
}
export interface IRequest {
  _id: string;
  from: IUser;
  message: string;
  to: ICoach;
}

export interface RequestState {
  requests: IRequest[];
}
