export interface ICoach {
  id: string;
  firstName: string;
  lastName: string;
  areas: string[];
  description: string;
  hourlyRate: number;
}

export interface CoachState {
  coaches: ICoach[];
  loading: boolean;
  error?: string;
}
