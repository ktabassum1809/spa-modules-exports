import { day, month, year, output } from "./elements.js";

 export function checkValid() {
  // Check the HTML element validity
  if (!day.validity.valid) {
    return false;
  }
  if (!month.validity.valid) {
    return false;
  }
  if (!year.validity.valid) {
    return false;
  }

  return true;
}

 export function update() {
  // Guard clause to validate user inputs
  if (!checkValid()) {
    return;
  }

  // Nothing better than Datetimes in JS :)
  const date = new Date(0);
  date.setUTCFullYear(year.value);
  date.setUTCMonth(month.value - 1);
  date.setUTCDate(day.value);

  output.innerText = date.toISOString();
}

// ???
