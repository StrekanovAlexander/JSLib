'use strict';
const cons = (x, xs) => message => {
  switch (message) {
    case 'head':
      return x;
    case 'tail':
      return xs;    
  }
};

const head = ls => ls('head');
const tail = ls => ls('tail');
const isEmpty = item => item === null ? true : false;

const listToString = ls => {
  const iter = (l, acc) => {
    if (isEmpty(l)) return acc.substr(0, acc.length - 1);
    return iter(tail(l), acc += `${head(l)},`);
  } 
  return iter(ls, ''); 
};

const stringToList = s => {
  if (!s) return null; 
  const arr = s.split(',').reverse();
  let l = cons(arr[0], null);
  for (let i = 1; i < arr.length; i++) {
    l = cons(arr[i], l);
  } 
  return l;
};

//export { cons, head, tail, isEmpty, listToString, stringToList };