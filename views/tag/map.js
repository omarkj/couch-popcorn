function(doc) {
  if (doc.type == 'Paste' && !doc.Private && doc.tags) {
    doc.tags.forEach(function(t) {
      emit(t, doc);
    });
  }
};