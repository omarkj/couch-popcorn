function(doc) {
  if (doc.type == 'Paste') {
    emit(doc._id, {title:doc.title, tags:doc.tags, date:doc.date, language:doc.language});
  }
};