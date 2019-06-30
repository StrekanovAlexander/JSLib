String.prototype.splitString = function(partLength, splitter) {
  return this.replace(/\s/g, '')
            .match(new RegExp(`.{1,${partLength}}`, 'g'))
            .join(splitter);
}