import { hello, HelloWorld } from "./module/include"
import { map } from "lodash"

export const world: HelloWorld = {
    world: "World",
    hello: map(hello.split(""), x => x.toUpperCase()).join(),
}

export default world
