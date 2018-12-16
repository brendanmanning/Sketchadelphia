function randomstr(len) {
    var text = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < len; i++)
      text += characters.charAt(Math.floor(Math.random() * characters.length));
  
    return text;
  }