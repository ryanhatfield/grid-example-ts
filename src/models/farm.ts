import Field from "./field";
import Identifiable from "./identifiable";

interface Farm extends Identifiable {
  /**
   * Friendly name of the Farm
   */
  name: string;

  /**
   * List of Fields in the Farm
   */
  fields: Array<Field>;
}
export default Farm;
