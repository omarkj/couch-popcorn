function(doc) {
  if (doc.type == 'Paste' && !doc.Private && doc.tags.length > 0) {
      emit(doc.tags, 1);
  }
};