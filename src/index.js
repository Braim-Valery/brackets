module.exports = function check(str, bracketsConfig) {
  const openClose = [];

  bracketsConfig.forEach(e => {
    openClose.push(e.join(""));
  });

  for(let i = 0; i <= openClose.length; i++) {
    openClose.forEach(e => {
        while(str.indexOf(e) != -1) {
          str = str.replace(e, "");
        }
    });
    if(str.length == 0) return true;
  }
  return false;
};