const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office if provided valid arguments", () => {
            // Act
            const manager = new Manager("Elon", "1", "elon@tesla.com", '1');

            // Assert
            expect(manager).toEqual({ name: "Elon", id: "1", email: "elon@tesla.com", office: '1' });
        });

        it("should throw an error if 'name' is empty", () => {
            // Act
            const cb = () => new Manager("", "2", "jack@twitter.com", '2');
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is empty", () => {
            // Act
            const cb = () => new Manager("Cathie", "", "cathie@ark.com", '3');
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'office' is empty", () => {
            // Act
            const cb = () => new Manager("Jack", "2", "jack@twitter.com", "");
            const err = new Error("Expected parameter 'office' to be a non-empty string");
      
            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe("getRole()", () => {
        it("should return 'Manager' after calling getRole()", () => {
            const manager = new Manager("Elon", "1", "elon@tesla.com", '1');

            const result = manager.getRole();
            // let spy = jest.spyOn(manager, 'getRole').mockImplementation(() => 'Manager');

            expect(result).toBe('Manager');
            // expect(manager.getRole()).toBe('Manager');
            // spy.mockRestore();
        });
    });

    describe("getName()", () => {
        it("should return 'Jack' after calling getName()", () => {
            const manager = new Manager("Jack", "2", "jack@twitter.com", '2');

            const result = manager.getName();

            expect(result).toBe('Jack');
        });
    });

    describe("getId()", () => {
        it("should return 'A1' after calling getId()", () => {
            const manager = new Manager("Cathie", "A1", "cathie@ark.com", '3');

            const result = manager.getId();

            expect(result).toBe('A1');
        });
    });

    describe("getEmail()", () => {
        it("should return 'elon@tesla.com' after calling getEmail()", () => {
            const manager = new Manager("Elon", "B4", "elon@tesla.com", '1');

            const result = manager.getEmail();

            expect(result).toBe('elon@tesla.com');
        });
    });

    describe("getOffice()", () => {
        it("should return 'Z0' after calling getOffice()", () => {
            const manager = new Manager("Elon", "1", "elon@tesla.com", "Z0");

            const result = manager.getOffice();

            expect(result).toBe("Z0");
        });
    });
});