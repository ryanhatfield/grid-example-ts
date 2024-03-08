import { delay, http, HttpResponse } from "msw";
import User from "../models/user";

// TODO: ignore this for now
export const handlers = [
  http.get(
    "https://3000-ryanhatfiel-gridexample-jpud34kgwfb.ws-us108.gitpod.io/user/1234",
    () => {
      const userResponse: User = {
        guid: "1234",
        firstName: "Larry",
        lastName: "Cucumber",
        farms: null,
      };

      // await delay(1500);

      return HttpResponse.json(userResponse);
    }
  ),
];
