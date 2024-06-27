// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {

  // Write your unit tests here!
  test("Returns value of organization in object", function() {
    expect(launchcode.organization).toBe("nonprofit");
  })

  test("Returns value of executiveDirector in object", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  })

  test("Returns value of percentageCoolEmployees in object", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })

  test("Returns value of programsOffered in object", function() {
    expect(launchcode.programsOffered).toBe("Web Development", "Data Analysis", "Liftoff");
  })

  test("When passed a number that is ONLY divisible by 2,", function() {
    expect(launchcode.launchOutput()).toBe("Launch!");
  })
});