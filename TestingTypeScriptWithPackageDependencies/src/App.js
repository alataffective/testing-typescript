define(["require", "exports", "./IdGenerator"], function (require, exports, IdGenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var idGenerator = new IdGenerator_1.IdGenerator();
    var id = idGenerator.getId();
    console.log("Generated id is " + id);
});
