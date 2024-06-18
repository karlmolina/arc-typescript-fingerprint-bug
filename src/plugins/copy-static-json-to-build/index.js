module.exports = {
  hydrate: {
    copy: async ({ arc, inventory, copy }) => {
      // Copy static.json to build
      const fs = require("fs").promises;
      const path = require("path");
      await fs.cp(
        path.join(process.cwd(), "public", "static.json"),
        path.join(
          process.cwd(),
          ".build",
          "http",
          "get-index",
          "node_modules",
          "@architect",
          "shared",
          "static.json",
        ),
      );
      console.log("Copied static.json to build");
    },
  },
};
