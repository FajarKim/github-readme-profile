/**
 * Checks whether the provided value is a valid hexadecimal color.
 *
 * @param {any} hexColor - The input value to check for valid hexadecimal color.
 * @returns {boolean} - True if the input is a valid hexadecimal color, false otherwise.
 */
function isValidHexColor(hexColor: string): boolean {
  const re = new RegExp("^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$", "g");
  return re.test(hexColor);
}

/**
 * Checks whether the provided array of hexadecimal colors is a valid gradient.
 *
 * @param {string[]} hexColors - The array of hexadecimal colors to check for a valid gradient.
 * @returns {boolean} - True if the array represents a valid gradient, false otherwise.
 */
function isValidGradient(hexColors: string): boolean {
  const colors = hexColors.split(",");
  for (let i = 1; i < colors.length; i++) {
    if (!isValidHexColor(colors[i])) {
      return false;
    }
  }
  return true;
}

export {
  isValidHexColor,
  isValidGradient
}
