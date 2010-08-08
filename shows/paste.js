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
      PageTitle: Config.Title
    },
    footer: {
      FooterCopyright: Config.Footer.Copyright
    },
    Title: doc.title,
    Language: doc.language,
    Tags: doc.tags,
    Created: "",
    Code: doc.code
  },partials);
};