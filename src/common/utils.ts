/**
 * Checks whether the provided value is a valid hexadecimal color.
 *
 * @param {string|string[]} hexColor - The input value to check for valid hexadecimal color.
 * @returns {boolean} - True if the input is a valid hexadecimal color, false otherwise.
 */
function isValidHexColor(hexColor: string | string[]): boolean {
  if (Array.isArray(hexColor)) return false;
  const re = new RegExp("^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$", "g");
  return re.test(hexColor);
}

/**
 * Checks whether the provided array of hexadecimal colors is a valid gradient.
 *
 * @param {string|string[]} hexColors - The array of hexadecimal colors to check for a valid gradient.
 * @returns {boolean} - True if the array represents a valid gradient, false otherwise.
 */
function isValidGradient(hexColors: string | string[]): boolean {
  let colors;
  if (Array.isArray(hexColors)) {
    colors = hexColors;
  } else {
    colors = hexColors.split(",");
  }

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
