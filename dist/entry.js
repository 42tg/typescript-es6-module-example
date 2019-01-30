import { hello } from "./module/include";
import { map } from "lodash";
export const world = {
    world: "World",
    hello: map(hello.split(""), x => x.toUpperCase()).join(),
};
export default world;
