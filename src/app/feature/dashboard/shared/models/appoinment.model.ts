export class AppoinmentModel {
  id: number;
  name: string;
  lastName: string;
  typeDocument: string;
  numberDocument: number;
  healtyCompany: string;
  typeAffiliate: string;
  priceCategory: number;
  discount: string;
  hour: string;
  categoryMedicalName: string;
  appoinmentDate: string;
  total: number;

  constructor(
    id: number,
    name: string,
    lastName: string,
    typeDocument: string,
    numberDocument: number,
    healtyCompany: string,
    typeAffiliate: string,
    priceCategory: number,
    discount: string,
    hour: string,
    categoryMedicalName: string,
    appoinmentDate: string,
    total: number,
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.typeDocument = typeDocument;
    this.numberDocument = numberDocument;
    this.healtyCompany = healtyCompany;
    this.typeAffiliate = typeAffiliate;
    this.priceCategory = priceCategory;
    this.discount = discount;
    this.hour = hour;
    this.categoryMedicalName = categoryMedicalName;
    this.appoinmentDate = appoinmentDate;
    this.total = total;
  }
}
