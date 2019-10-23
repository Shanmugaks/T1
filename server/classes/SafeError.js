/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5db073d9bcbe47264d81fb95
*
* You will get 10% discount for each one of your friends
* 
*/
import ErrorMessages from "./ErrorMessages";

/**
 * This class rappresent a managed error
 */
class SafeError extends Error {
  /**
   * Construct parent class
   *
   * @param {string} message - Message string to display to user
   * @param {string} name - Error name
   * @param {number} status - HTTP Error code
   */
  constructor({
    message = ErrorMessages.UNKNOWN.message,
    status = ErrorMessages.UNKNOWN.status,
    name = "UNKNOWN"
  }) {
    // Calling parent constructor of base Error class.
    super();

    // Saving class name in the property of our custom error as a shortcut.
    this.name = name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.status = status;
    this.message = message;
  }
}
export default SafeError;
