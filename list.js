const cons = (elem, list) => msg => {
    switch(msg) {
        case 'head':
            return elem;
        case 'tail':
            return list;
    }
};

const head = list => list('head');
const tail = list => list('tail');

const isEmpty = list => list === null;
const emptyList = null;
const square = x => x * x;
const isEven = x => x % 2 === 0; 
const add = (a, b) => a + b;

const toString = list => {
    const iter = (items, acc) => {
        if (isEmpty(items)) return acc;
        return iter(tail(items), `${acc}${head(items)}`);
    };
    return iter(list, '');    
};

const map = (f, list) => {
    if (isEmpty(list)) return null;
    return cons(f(head(list)) , map(f, tail(list))); 
};

const filter = (f, list) => {
    if (isEmpty(list)) return null; 
    if (f(head(list))) {
        return cons(head(list), filter(f, tail(list)));
    } else {
        return filter(f, tail(list));
    }
};

const not = x => x ? false : true;
const and = (a, b) => a ? ( b ? true : false) : false; 
const or = (a, b) => {
    if (a) return true;
    if (b) return true;
    return false;
};   
