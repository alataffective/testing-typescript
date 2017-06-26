import { } from "jasmine";
import { IdGenerator } from "../src/IdGenerator";

describe("An id generator", () => {

  const idGenerator = new IdGenerator();

  it("generates an id", () => {
    expect(idGenerator.getId()).not.toBeNull();
  });

});
