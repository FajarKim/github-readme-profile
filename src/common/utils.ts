function isValidHexColor(hexColor: string): boolean {
  return new RegExp(
    /^([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{4})$/
  ).test(hexColor);
};

function isValidGradient(colors: string[]): boolean {
  for (let i = 1; i < colors.length; i++) {
    if (!isValidHexColor(colors[i])) {
      return false;
    }
  }
  return true;
};

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
};

export {
  isValidHexColor,
  isValidGradient,
  parseBoolean
}