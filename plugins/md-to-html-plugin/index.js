const { readFileSync } = require("fs");
const { resolve } = require("path");

class MdToHtmlPlugin {
  constructor({ template, filename }) {
    if (!template) {
      throw new Error("The config for 'template' must be configured");
    }

    this.template = template;
    this.filename = filename ?? "md.html";
  }

  apply(compiler) {
    compiler.hooks.emit.tap("md-to-html-plugin", (compilation) => {
      const _assets = compilation.assets;
      const _mdContent = readFileSync(this.template, "utf8");
      const _template = readFileSync(
        resolve(__dirname, "./template.html"),
        "utf8"
      );
      const _mdContentArr = _mdContent.split("\n");
      // const _htmlStr = compileHTML(_mdContentArr);

      _assets[this.filename] = {
        source() {
          return _mdContent;
        },
        size() {
          return _mdContent.length;
        },
      };

      console.log(_mdContentArr);
    });
  }
}

module.exports = MdToHtmlPlugin;
