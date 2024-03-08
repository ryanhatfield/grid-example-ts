import User from "../models/user";
import { delay } from "msw";

/**
 * Get the User from the API by it's GUID
 *
 * @param guid guid of the User
 * @returns A promise returning a user
 */
export function UserByGUID(guid: string): User {
  const userResponse: User = {
    guid: "1234",
    firstName: "Larry",
    lastName: "Cucumber",
    farms: null,
  };
  return userResponse;
}
