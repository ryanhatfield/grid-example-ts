import Farm from "./farm";
import Identifiable from "./identifiable";

/**
 * Basic object for all users
 */
interface User extends Identifiable {
  /**
   * User's First Name
   */
  firstName: string;

  /**
   * User's Last Name
   */
  lastName: string;

  /**
   * Farms the user has access to
   */
  farms: Array<Farm> | null;
}
export default User;
