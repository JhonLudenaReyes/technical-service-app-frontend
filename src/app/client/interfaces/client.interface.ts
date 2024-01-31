export interface Client {
  clientId?: number;
  ruc: string;
  dateOfBirth: Date;
  email: string;
  state?: string;
  personId?: number;
  fK_Person?: any;
}
