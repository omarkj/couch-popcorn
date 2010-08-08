function(doc) {
  if (doc.type == "Paste") {
    emit(null, doc);
  }
};