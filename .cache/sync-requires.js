
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\serge\\Desktop\\sjav\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\serge\\Desktop\\sjav\\src\\pages\\about.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\serge\\Desktop\\sjav\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\serge\\Desktop\\sjav\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("C:\\Users\\serge\\Desktop\\sjav\\src\\pages\\projects.js"))
}

