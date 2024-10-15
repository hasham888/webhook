// test.js

// Import the assert module for testing
const assert = require('assert');

// A simple function to add two numbers
function add(a, b) {
    return a + b;
}

// A test case to verify the add function works correctly
try {
    // Test 1: Check if 2 + 3 equals 5
    assert.strictEqual(add(2, 3), 5);
    console.log('Test 1 passed: 2 + 3 equals 5');
    
    // Test 2: Check if -1 + 1 equals 0
    assert.strictEqual(add(-1, 1), 0);
    console.log('Test 2 passed: -1 + 1 equals 0');
    
    // Test 3: Check if 0 + 0 equals 0
    assert.strictEqual(add(0, 0), 0);
    console.log('Test 3 passed: 0 + 0 equals 0');
    
    console.log('All tests passed successfully!');
} catch (error) {
    console.error('Test failed:', error.message);
    process.exit(1);  // Exit with a non-zero status code for Jenkins to mark build as failed
}
