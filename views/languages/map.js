function(doc) {
  if (doc.type == 'Paste' && !doc.Private) {
      emit(doc.language, 1);
  }
};