/**
 * Checks if the provided value is a valid hexadecimal color code.
 *
 * @param {any} hexColor Value to be checked.
 * @returns {boolean} True if the value is a valid hexadecimal color code, false otherwise.
 */
function isValidHexColor(hexColor: any): boolean {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/
  ).test(hexColor);
}

/**
 * Checks if the provided array of color codes represents a valid gradient.
 *
 * @param {string[]} hexColors Array of color codes to be checked.
 * @returns {boolean} True if the array represents a valid gradient, false otherwise.
 */
function isValidGradient(hexColors: string[]): boolean {
  const colors = [hexColors];
  for (let i = 1; i < colors.length; i++) {
    if (!isValidHexColor(colors[i])) {
      return false;
    }
  }
  return true;
}

/**
 * Parses a boolean value or string representation of a boolean.
 *
 * @param {boolean | string} value Value to be parsed.
 * @returns {boolean | undefined} Parsed boolean value or undefined if parsing fails.
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