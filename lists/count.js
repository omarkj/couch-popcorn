function(head, req) {
  var t_doc = this;
  var Mustache = require("lib/mustache");
  var Config = require("config").config;
  var helpers = require("lib/helpers");
  var template = t_doc.templates.simplelist;
  var partials = t_doc.templates.partials;
  
  var url_segment = "";
  
  if (helpers.get_page_name(req) == "Languages") {
    url_segment = "languages"
  } else {
    url_segment = "tags"
  }
  
  provides('html', function() {
    var segment_title = helpers.get_page_name(req);
    var results = [];
    while (res = getRow()) {
        results.push({
          Title: res.key,
          Count: res.value
        });
    }
    
    return Mustache.to_html(template,{
      header: {
        PageTitle: segment_title,
        DocPath: Config.DocPath,
      },
      footer: {
        FooterCopyright: Config.Footer.Copyright
      },
      DocPath: Config.DocPath,
      url_segment: url_segment,
      Results: results
    }, partials); 
  });
}