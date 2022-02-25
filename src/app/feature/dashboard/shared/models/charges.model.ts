export class ChargeModel {
  id: number;
  name: string;
  type: string;
  percent: number;

  constructor(
    id: number,
    name: string,
    type: string,
    percent: number,
  ) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.percent = percent;
  }
}

