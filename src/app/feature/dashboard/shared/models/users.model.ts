export class UserModel {
  id: number;
  name: string;
  lastName: string;
  typeDocument: string;
  numberDocument: number;
  healtyCompany: string;
  typeAffiliate: string;

  constructor(
    id: number,
    name: string,
    lastName: string,
    typeDocument: string,
    numberDocument: number,
    healtyCompany: string,
    typeAffiliate: string
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.typeDocument = typeDocument;
    this.numberDocument = numberDocument;
    this.healtyCompany = healtyCompany;
    this.typeAffiliate = typeAffiliate;
  }
}
