// Get a paste
function(doc, req) {
  var t_doc = this;
  
  /* load requirements */
  var Mustache = require("lib/mustache");
  var Config = require("config").config;
  var template = t_doc.templates.paste;
  var partials = t_doc.templates.partials;
  
  var line_highlight = [-1];
  
  if ('query' in req) {
    if ('line' in req.query) {
      if (Array.isArray(JSON.parse(req.query.line))) {
        line_highlight = req.query.line;
      } else {
        line_highlight = [-1];
      }
    }
  }
  
  return Mustache.to_html(template,{
    header: {
      PageTitle: doc.title + " ["+doc.language+"]",
      DatabaseName: Config.Config
    },
    footer: {
      FooterCopyright: Config.Footer.Copyright
    },
    tags: doc.tags,
    Created: doc.date,
    hasTags: (doc.tags.length > 0),
    DocPath: Config.DocPath,
    line_highlight: line_highlight,
    Code: doc.code
  },partials);
};