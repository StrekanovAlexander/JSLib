const cons = (elem, list) => msg => {
    switch(msg){
        case 'head':
            return elem;
        case 'tail':
            return list;      
    }
}

const head = list => list('head');
const tail = list => list('tail');
const l = () => null;
const isEmpty = list => list === null; 

const toArray = list => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
          return acc;
        }
        acc.push(head(items));   
        return iter(tail(items), acc);   
    };   
    return iter(list, []);  
};

const toString = list => {
    return toArray(list).join(',');
};   

const map = (f, list) => {
    if (isEmpty(list)) {
        return l(); 
    }
    return cons(f(head(list)), map(f, tail(list))); 
};

const filter = (f, list) => {
    if (isEmpty(list)) {
        return l(); 
    }
    if (f(head(list))) {
        return cons(head(list), filter(f, tail(list)));        
    } else {
        return filter(f, tail(list));
    } 
};

const square = x => x * x;
const isEven = x => x % 2 === 0;

const num = cons(1, cons(2, cons(3, cons(4, cons(5, null)))));
console.log(toArray(num));
console.log(toString(num));

const num2 = map(square, num);
console.log(toString(num2));

//const num3 = filter(isEven, num2);
//console.log(toString(num3));