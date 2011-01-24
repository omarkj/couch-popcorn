function(head, req) {
  var t_doc = this,
    Mustache = require("lib/mustache"),
    helpers = require("lib/helpers"),
    Config = require("config").config,
    template = t_doc.templates.list,
    partials = t_doc.templates.partials;
  
  provides('html', function() {
    var segment_title = helpers.get_page_name(req);
    var results = [];
    while (res = getRow()) {
      var row = {
        id: res.id,
        title: res.value.title.capitalize(),
        date: res.value.date,
        language: res.value.language,
        hasTags: (res.value.tags.length > 0),
        tags:res.value.tags
      };
      results.push(row);
    }
    return Mustache.to_html(template,{
      header: {
        PageTitle: segment_title,
        DocPath: Config.DocPath
      },
      footer: {
        FooterCopyright: Config.Footer.Copyright
      },
      DocPath: Config.DocPath,
      Pastes: results
    },partials);
  });
}