function(head, req) {
  var t_doc = this;
  var Mustache = require("lib/mustache");
  var List = require("vendor/couchapp/lib/list");
  var Config = require("config").config;
  var template = t_doc.templates.list;
  var partials = t_doc.templates.partials;
  
  provides('html', function() {
    var results = [];
    while (res = getRow()) {
      var row = {
        id: res.key,
        title: res.value.title,
        date: res.value.date,
        language: res.value.language,
        hasTags: (res.value.tags.length > 0),
        tags:res.value.tags
      };
      results.push(row);
    }
    return Mustache.to_html(template,{
      header: {
        PageTitle: Config.Title,
        DatabaseName: Config.DatabaseName
      },
      footer: {
        FooterCopyright: Config.Footer.Copyright
      },
      Pastes: results
    },partials);
  });
}