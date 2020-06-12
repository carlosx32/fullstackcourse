var pages = require("node-github-pages")(app, {
    static: "public", // Static directory path(css, js...)
    path: "docs" // Output path
  });
  pages.renderFiles([{
    "view": "index",
    "url": "",
    "options": { title: "Express" }
  },
  {
    "view": "second",
    "url": "/second",
    "options": { title: "second page" }
  },
  .
  .
  .
  ]);