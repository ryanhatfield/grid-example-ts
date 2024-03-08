import Farm from "../models/farm";
import { FieldsByFarmGUID } from "./fieldService";

export function FarmsByUserGUID(userGUID: string): Array<Farm> {
  const farmGUID = "123"
  return [
    {
      guid: farmGUID,
      name: "Veggie Farms",
      fields: FieldsByFarmGUID(farmGUID)
    }
  ]
}