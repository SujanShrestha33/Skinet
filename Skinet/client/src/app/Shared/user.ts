export type User = {
  firstName : string;
  secondName : string;
  email : string;
  address : Address;
}

export type Address = {
  line1 : string;
  line2 : string;
  city : string;
  state : string;
  country : string;
  postalCode : string;
}
