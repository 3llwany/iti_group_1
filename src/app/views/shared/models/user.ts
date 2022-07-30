export interface IUserVM {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: ICompanyVM;
  address: IAddressVM;
}

export interface ICompanyVM {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface IAddressVM {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
}
