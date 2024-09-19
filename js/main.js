import { init } from "./init.js";

import {day, month, year, output} from "./elements.js";

import {update} from "./updater.js";
import {checkValid} from "./updater.js";

// Initialize the elements
init();
console.log(day, month, year, output);
update();
checkValid();
