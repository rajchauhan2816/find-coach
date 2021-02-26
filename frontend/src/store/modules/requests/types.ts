export interface IRequest {
  _id: string;
  from: string;
  message: string;
  to: string;
}

export interface RequestState {
  requests: IRequest[];
}
