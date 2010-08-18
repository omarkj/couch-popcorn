function (newDoc, savedDoc, userCtx) {
  function require(obj, msg) {
    if (obj.length === 0) {
      throw({forbidden:msg});
    }
  };
  if (userCtx.roles.indexOf('_admin') == -1) {
    if (newDoc.type == 'Paste') {
      require(newDoc.title, "Title missing");
      require(newDoc.code, "Code missing");
      require(newDoc.language, "Language missing");
      require(newDoc.date, "Date missing");
    }
  }
};