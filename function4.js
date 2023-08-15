function delSymbols(text, sym) {
   for (let i = 0; i < sym.length; i++) {
      text = text.split(sym[i]).join('');
   }
   return text;
}

const remove = delSymbols("hello world", ['l', 'd']);
alert(remove);
