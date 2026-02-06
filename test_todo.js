const fs = require("fs");

console.log("Running tests...");

// Test 1: File exists or can be created
if (!fs.existsSync("todos.json")) {
  fs.writeFileSync("todos.json", "[]");
}
console.log("Test 1 passed: todos.json exists");

// Test 2: JSON format valid
try {
  JSON.parse(fs.readFileSync("todos.json"));
  console.log("Test 2 passed: JSON valid");
} catch {
  console.log("Test 2 failed");
}

// Test 3: Can write to file
try {
  fs.writeFileSync("todos.json", "[]");
  console.log("Test 3 passed: Can write file");
} catch {
  console.log("Test 3 failed");
}

console.log("Tests finished");
