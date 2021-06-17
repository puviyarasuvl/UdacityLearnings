const fs = require("fs");

// Run at timer
setTimeout(() => {
  console.log("Print Fifth");
}, 300);

// Run at setImmediate
setImmediate(() => {
  console.log("Print Third");
});

// Run in the next tick
process.nextTick(() => {
  console.log('Print Second');
});

// Run in mainline
console.log('Print First');

//start polling by calling IO
fs.readFile(__filename, () => {
  // Run after polling
  console.log("Print Forth");
});
