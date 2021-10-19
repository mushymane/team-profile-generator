const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            // Act
            const intern = new Intern("Elon", "1", "elon@tesla.com", 'UPenn');

            // Assert
            expect(intern).toEqual({ name: "Elon", id: "1", email: "elon@tesla.com", school: 'UPenn' });
        });

        it("should throw an error if 'name' is empty", () => {
            // Act
            const cb = () => new Intern("", "2", "jack@twitter.com", "NYU");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is empty", () => {
            // Act
            const cb = () => new Intern("Cathie", "", "cathie@ark.com", 'USC');
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' is empty", () => {
            // Act
            const cb = () => new Intern("Charles Hoskinson", "4", "charles@cardano.com", "");
            const err = new Error("Expected parameter 'school' to be a non-empty string");
      
            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe("getRole()", () => {
        it("should return 'Intern' after calling getRole()", () => {
            const intern = new Intern("Elon", "1", "elon@tesla.com", 'UPenn');

            const result = intern.getRole();
            // let spy = jest.spyOn(manager, 'getRole').mockImplementation(() => 'Manager');

            expect(result).toBe('Intern');
            // expect(manager.getRole()).toBe('Manager');
            // spy.mockRestore();
        });
    });

    describe("getName()", () => {
        it("should return 'Jack' after calling getName()", () => {
            const intern = new Intern("Jack", "2", "jack@twitter.com", 'NYU');

            const result = intern.getName();

            expect(result).toBe('Jack');
        });
    });

    describe("getId()", () => {
        it("should return 'A1' after calling getId()", () => {
            const intern = new Intern("Cathie", "A1", "cathie@ark.com", 'USC');

            const result = intern.getId();

            expect(result).toBe('A1');
        });
    });

    describe("getEmail()", () => {
        it("should return 'elon@tesla.com' after calling getEmail()", () => {
            const intern = new Intern("Elon", "B4", "elon@tesla.com", 'UPenn');

            const result = intern.getEmail();

            expect(result).toBe('elon@tesla.com');
        });
    });

    describe("getSchool()", () => {
        it("should return 'UPenn' after calling getSchool()", () => {
            const intern = new Intern("Elon", "1", "elon@tesla.com", "UPenn");

            const result = intern.getSchool();

            expect(result).toBe("UPenn");
        });
    });
});