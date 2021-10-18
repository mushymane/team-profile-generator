const { expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      // Act
      const employee = new Employee("Elon", "1", "elon@tesla.com");

      // Assert
      expect(employee).toEqual({ name: "Elon", id: "1", email: "elon@tesla.com" });
    //   expect(employee.name).toEqual("Elon");
    //   expect(employee.id).toEqual("1");
    //   expect(employee.email).toEqual("elon@tesla.com");
    });

    it("should throw an error if 'name' is empty", () => {
      // Act
      const cb = () => new Employee("", "2", "jack@twitter.com");
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is empty", () => {
        // Act
        const cb = () => new Employee("Cathie", "", "cathie@ark.com");
        const err = new Error("Expected parameter 'id' to be a non-empty string");
  
        // Assert
        expect(cb).toThrowError(err);
    });

    it("should return 'Employee' after calling getRole()", () => {
        const employee = new Employee("Elon", "1", "elon@tesla.com");

        const result = employee.getRole();

        expect(result).toBe('Employee');
    });

    it("should return 'Jack' after calling getName()", () => {
        const employee = new Employee("Jack", "2", "jack@twitter.com");

        const result = employee.getName();

        expect(result).toBe('Jack');
    });

    it("should return 'A1' after calling getName()", () => {
        const employee = new Employee("Cathie", "A1", "cathie@ark.com");

        const result = employee.getId();

        expect(result).toBe('A1');
    });

    it("should return 'elon@tesla.com' after calling getEmail()", () => {
        const employee = new Employee("Elon", "B4", "elon@tesla.com");

        const result = employee.getEmail();

        expect(result).toBe('elon@tesla.com');
    });
  });
});
