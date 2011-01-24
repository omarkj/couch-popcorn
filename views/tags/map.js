function(doc) {
  if (doc.type == 'Paste' && !doc.Private && doc.tags.length > 0) {
    doc.tags.forEach(function(t) {
      emit(t, 1);
    })
  }
};