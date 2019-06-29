String.prototype.splitString = function(partLength, splitter) {
  return this.match(new RegExp(`.{1,${partLength}}`, 'g')).join(splitter);
}
