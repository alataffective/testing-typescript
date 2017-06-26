import * as uuid from "uuid";

export class IdGenerator {

  getId() {
    const id = uuid.v4();
    console.log(`Returning id ${id}`);
    return id;
  }

}
