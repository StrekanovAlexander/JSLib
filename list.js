const cons = (elem, list) => msg => {
    switch (msg) {
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

const reverse = list => {
    const iter = (items, acc) => {
        return isEmpty(items) ? acc : iter(tail(items), cons(head(items), acc));
    };
    return iter(list, l());
}

const toString = list => {
    const iter = (items, acc) => {
        if (isEmpty(items)) {
            return acc.slice(0, acc.length - 2);
        } 
        return iter(tail(items), acc + head(items) + ', ');
    };
    return iter(list, '');
}

const map = (f, list) => {
    if (isEmpty(list)){
        return l();
    } else {
        return cons(f(head(list)), map(f, tail(list)));
    }
}

const square = x => x * x;
const numbers = cons(1, cons(2, cons(3, l())));
const sq_numbers = map(square, numbers);
console.log(toString(numbers));
console.log(toString(sq_numbers));

/*
console.log(head(numbers));
console.log(head(reverse(numbers)));
console.log(toString(numbers));
 */