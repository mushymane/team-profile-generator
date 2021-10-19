const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            // Act
            const engineer = new Engineer("Elon", "1", "elon@tesla.com", 'dogefather');

            // Assert
            expect(engineer).toEqual({ name: "Elon", id: "1", email: "elon@tesla.com", github: 'dogefather' });
        });

        it("should throw an error if 'name' is empty", () => {
            // Act
            const cb = () => new Engineer("", "2", "jack@twitter.com", "jack");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is empty", () => {
            // Act
            const cb = () => new Engineer("Cathie", "", "cathie@ark.com", 'cathiesark');
            const err = new Error("Expected parameter 'id' to be a non-empty string");

            // Assert
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'github' is empty", () => {
            // Act
            const cb = () => new Engineer("Cathie", "3", "cathie@ark.com", "");
            const err = new Error("Expected parameter 'github' to be a non-empty string");
      
            // Assert
            expect(cb).toThrowError(err);
        });
    });

    describe("getRole()", () => {
        it("should return 'Engineer' after calling getRole()", () => {
            const engineer = new Engineer("Elon", "1", "elon@tesla.com", 'dogefather');

            const result = engineer.getRole();
            // let spy = jest.spyOn(manager, 'getRole').mockImplementation(() => 'Manager');

            expect(result).toBe('Engineer');
            // expect(manager.getRole()).toBe('Manager');
            // spy.mockRestore();
        });
    });

    describe("getName()", () => {
        it("should return 'Jack' after calling getName()", () => {
            const engineer = new Engineer("Jack", "2", "jack@twitter.com", 'jack');

            const result = engineer.getName();

            expect(result).toBe('Jack');
        });
    });

    describe("getId()", () => {
        it("should return 'A1' after calling getId()", () => {
            const engineer = new Engineer("Cathie", "A1", "cathie@ark.com", 'cathiesark');

            const result = engineer.getId();

            expect(result).toBe('A1');
        });
    });

    describe("getEmail()", () => {
        it("should return 'elon@tesla.com' after calling getEmail()", () => {
            const engineer = new Engineer("Elon", "B4", "elon@tesla.com", 'dogefather');

            const result = engineer.getEmail();

            expect(result).toBe('elon@tesla.com');
        });
    });

    describe("getGithub()", () => {
        it("should return 'dogefather' after calling getGithub()", () => {
            const engineer = new Engineer("Elon", "1", "elon@tesla.com", "dogefather");

            const result = engineer.getGithub();

            expect(result).toBe("dogefather");
        });
    });
});