const square = x => x * x;
const isEven = x => x % 2 === 0;
/********************************/
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

const toString = list => {
    const iter = (items, acc) => {
        if (isEmpty(items)) return acc;
        return iter(tail(items), `${acc} ${head(items)}`); 
    }     
    return iter(list, ``);  
};

const map = (f, list) => {
    if (isEmpty(list)) return null;
    return cons(f(head(list)), map(f, tail(list)));
};

const filter = (f, list) => {
    if (isEmpty(list)) return null;
    if (f(head(list))){
        return cons(head(list), filter(f, tail(list)));
    } else {
        return filter(f, tail(list)); 
    }
}; 

const reduce = (f, acc, list) => {
    if(isEmpty(list)) return acc;
    if (f(head(list))) {
        acc += 1;
    }; 
    return reduce(f, acc, tail(list)); 
};

const reduce2 = (f, acc, list) => {
    if(isEmpty(list)) return acc;
    if (f(head(list))) {
       acc = cons(head(list), acc);
    }; 
    return reduce2(f, acc, tail(list)); 
};

const reverse = list => {
    const iter = (items, acc) => {
        if (isEmpty(items)) return acc;
        return iter(tail(items), cons(head(items), acc));
    }   
    return iter(list, null); 
}

/* const numbers = cons(1, cons(2, cons(3, cons(4, cons(5, cons(6, cons(7, null)))))));
const numbers2 = map(square, numbers);
const numbers3 = filter(isEven, numbers); 
const numbers4 = reduce2(isEven, null, numbers);  
const numbers5 = reverse(numbers4);   

console.log(toString(numbers));
console.log(toString(numbers2));
console.log(toString(numbers3));
console.log(toString(numbers4));
console.log(toString(numbers5));
 */