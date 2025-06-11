import { myFunction as userFunction } from "./user.mjs";
import { myFunction as customerFunction } from "./customer.mjs";

import sayHi, {sayGoodBye } from "./greeting.mjs";

userFunction();
customerFunction();

sayHi();
sayGoodBye();