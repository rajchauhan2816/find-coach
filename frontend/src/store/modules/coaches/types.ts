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


export interface CoachState {
  coaches: ICoach[];
  loading: boolean;
  error?: string;
  loggedIn: IUser | null;
}
