define(["require", "exports", "../src/IdGenerator"], function (require, exports, IdGenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe("An id generator", function () {
        var idGenerator = new IdGenerator_1.IdGenerator();
        it("generates an id", function () {
            expect(idGenerator.getId()).not.toBeNull();
        });
    });
});
