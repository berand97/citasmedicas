export class MedicalCategoryModel {
  id: number;
  categoryMedicalName: string;
  priceCategory: number;

  constructor(
    id: number,
    categoryMedicalName: string,
    priceCategory: number
  ) {
    this.id = id;
    this.categoryMedicalName = categoryMedicalName;
    this.priceCategory = priceCategory;
  }
}
