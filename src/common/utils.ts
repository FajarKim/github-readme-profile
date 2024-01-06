/**
 * Checks whether the provided value is a valid hexadecimal color.
 *
 * @param {any} hexColor - The input value to check for valid hexadecimal color.
 * @returns {boolean} - True if the input is a valid hexadecimal color, false otherwise.
 */
function isValidHexColor(hexColor: string): boolean {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/
  ).test(hexColor);
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

/**
 * Parses a boolean value from either a boolean or string representation.
 *
 * @param {boolean | string} value - The input value to parse as a boolean.
 * @returns {boolean | undefined} - The parsed boolean value, or undefined if parsing fails.
 */
function parseBoolean(value: boolean | string): boolean | undefined {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "string") {
    if (value.toLowerCase() === "true") {
      return true;
    } else if (value.toLowerCase() === "false") {
      return false;
    }
  }
  return undefined;
}

export {
  isValidHexColor,
  isValidGradient,
  parseBoolean
}
