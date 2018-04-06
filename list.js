const True = x => y => x;
const False = x => y => y;
const If = b => x => y => b(x)(y);

const cons = (x, y) => b => b(x)(y);
const car = pair => pair(True);
const cdr = pair => pair(False);
const isEmpty = x => x === null;

const toString = list => {
    const iter = (items, acc) => {
        if (isEmpty(items)) return acc;
        return iter(cdr(items), `${acc} ${car(items)}`);  
    };
    return iter(list, ``);
};

const map = (f, list) => {
    if (isEmpty(list)) return null;
    return cons(f(car(list)), map(f, cdr(list))); 
};

const filter = (f, list) => {
    if (isEmpty(list)) return null;
    if (f(car(list))){
        return cons(car(list), filter(f, cdr(list)));
    } else {
        return filter(f, cdr(list));
    }
};

const reduce = (f, acc, list) => {
    if (isEmpty(list)) return acc;
    acc = f(car(list)) ? acc + 1 : acc;
    return reduce(f, acc, cdr(list));
}