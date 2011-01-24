// Generate index (Create new paste)
function(head, req) {
  var t_doc = this;
  
  /* load requirements */
  var Mustache = require("lib/mustache");
  var Config = require("config").config;
  var template = t_doc.templates.index;
  var partials = t_doc.templates.partials;
  
  return Mustache.to_html(template,{
    header: {
      PageTitle: "New Paste",
      DocPath: Config.DocPath
    },
    footer: {
      FooterCopyright: Config.Footer.Copyright
    },
    DocPath: Config.DocPath
  },partials);
};