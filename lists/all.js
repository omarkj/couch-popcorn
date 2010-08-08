function(head, req) {
  var t_doc = this;
  var Mustache = require("lib/mustache");
  var List = require("vendor/couchapp/lib/list");
  var Config = require("config").config;
  var template = t_doc.templates.list;
  var partials = t_doc.templates.partials;
  
  var results = []
  for (var i=0; i < head.total_rows; i++) {
    results.push(getRow(i));
  };
  
}