const fs = require("fs")
const browserify = require("browserify")
const tsify = require("tsify")
const babelify = require("babelify")

browserify()
    .plugin(tsify, { target: "es6" })
    .transform(
        babelify.configure({
            extensions: [".tsx", ".js", ".ts"],
            presets: ["@babel/preset-env"],
        }),
    )
    .add("./src/entry.ts")
    .bundle()
    .on("error", error => console.log(error))
    .pipe(fs.createWriteStream("./dist/bundle.js"))
