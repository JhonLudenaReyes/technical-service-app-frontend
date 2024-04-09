export interface Client {
  clientId?: number;
  ruc: string;
  dateOfBirth: Date;
  hobby: string;
  email: string;
  state?: string;
  personId?: number;
  fK_Person?: any;
}
