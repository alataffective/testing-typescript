define(["require", "exports", "uuid"], function (require, exports, uuid) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IdGenerator = (function () {
        function IdGenerator() {
        }
        IdGenerator.prototype.getId = function () {
            var id = uuid.v4();
            console.log("Returning id " + id);
            return id;
        };
        return IdGenerator;
    }());
    exports.IdGenerator = IdGenerator;
});
