function(doc) {
  if (doc.type == 'Paste' && !doc.Private && doc.language) {
    emit(doc.language, doc);
  }
};