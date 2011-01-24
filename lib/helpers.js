exports.get_page_name = function(request) {
  if ('query' in request) {
    if ('page'in request.query) {
      var page = request.query.page;     
      if (page == "all") {
        return "All Pastes";
      } else if (page == "languages") {
        return "Languages";
      } else if ("tags") {
        return "Tags";
      } else if ("tag") {
        return "By tag: ";
      } else {
        return "List of pastes";
      }
    }
  }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}