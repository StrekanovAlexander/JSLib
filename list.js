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

const reverse = (list) => {
    const iter = (items, acc) => {
        if (isEmpty(items)){
            return acc;
        }
        return iter(tail(items), cons(head(items), acc));
    };
    return iter(list, l()); 
};

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

//****************************** UNION *********************************/
const list1 = cons(2, cons(3, cons(2, cons(1, cons(7, null)))));
const list2 = cons(1, cons(5, cons(3, cons(5, cons(8, cons(9, null))))));

const isTwin = (elem, list) => {
    if (isEmpty(list)){
        return false;
    }
    return head(list) === elem ? true : isTwin(elem, tail(list));
};

const union = (list1, list2) => {
    if (isEmpty(list1)) {
        return list2;
    }
    return cons(head(list1), union(tail(list1), list2));
}

//console.log(toString(union(list1, list2)));

const unique = (list1, list2) => {
    if (isEmpty(list1)){
        return list2;
    }
    if (isTwin(head(list1), tail(list1))) {
        return cons(head(list1), unique(tail(list1), list2));    
    }    
};

console.log(toString(unique(list1, list2)));

/*
const unique = (list) => {
    const iter = (items, acc) => {
        if (isEmpty(items)){
            return acc;
        }
        return isTwin(head(items), tail(items)) ? iter(tail(items), acc) : iter(tail(items), cons(head(items), acc));
    };
    return iter(list, l()); 
};
*/
