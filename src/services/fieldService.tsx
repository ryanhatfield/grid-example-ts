import Field from "../models/field";

export function FieldsByFarmGUID(farmGUID: string): Array<Field> {
  const fieldGUID = "789"
  return [
    {
      guid: fieldGUID,
      name: "Cucumber Field",
    }
  ]
}