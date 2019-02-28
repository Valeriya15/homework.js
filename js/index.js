const a = parseFloat(prompt('Enter a'));
const b = parseFloat(prompt('Enter b'));
const c = parseFloat(prompt('Enter c'));

const result = solveQard(a, b, c);
alert(result);

function solveQard(a, b, c){
    const d = calcDiscr(a, b, c);
    if (d == 0){
        x = - b / (2 * a);
        return 'x1 = ' + x ;
    }
    if(d > 0) {
        x1 = (- b + calcDiscr(a, b, c))/ (2 * a);
        x2 = (- b - calcDiscr(a, b, c))/ (2 * a);
        return 'x1 = ' + x1 + ' , x2 = ' + x2 ;
    }
    else if(d < 0)
        return 'no key' ; 
    
}


function calcDiscr(a, b, c){
    return b * b - 4 * a * c;
}
