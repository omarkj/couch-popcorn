// Get a paste
function(doc, req) {
  var t_doc = this;
  
  /* load requirements */
  var Mustache = require("lib/mustache");
  var Config = require("config").config;
  var template = t_doc.templates.paste;
  var partials = t_doc.templates.partials;
  
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
    Code: doc.code
  },partials);
};