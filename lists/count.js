function(head, req) {
  var t_doc = this;
  var Mustache = require("lib/mustache");
  var List = require("vendor/couchapp/lib/list");
  var Config = require("config").config;
  var template = t_doc.templates.simplelist;
  var partials = t_doc.templates.partials;
  
  
  provides('html', function() {
    var results = [];
    while (res = getRow()) {
      results.push({
        Title: res.key[0] instanceof Array ? res.key[0] : res.key,
        Count: res.value
      });
    }
    return Mustache.to_html(template,{
      header: {
        PageTitle: Config.Title,
        DatabaseName: Config.DatabaseName
      },
      footer: {
        FooterCopyright: Config.Footer.Copyright
      },
      Results: results
    },partials);  });
}