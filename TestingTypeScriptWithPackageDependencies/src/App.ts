import { IdGenerator } from "./IdGenerator";

const idGenerator = new IdGenerator();
const id = idGenerator.getId();
console.log(`Generated id is ${id}`);