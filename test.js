import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";

const text = fs.readFileSync("test.md", "utf8");
const res = unified().use(remarkParse).use(remarkGfm).parse(text);
console.log(
  JSON.stringify(
    res,
    (key, value) => {
      // this excessively detailed info about the byte-position in the markdown of various elements for this demo purpose
      if (key === "position") {
        return undefined;
      }

      return value;
    },
    2
  )
);
