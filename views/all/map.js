function(doc) {
  if (doc.type == 'Paste' && !doc.Private) {
    emit(doc._id, doc);
  }
};