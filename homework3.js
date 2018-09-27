
const coolfunc = function (a,b,c) {
    return (a + b)/c;
};
const f = coolfunc(6,12,3);
console.log(f);
//A function that takes no arguments and returns something
const noarg = function () {
    return "there are no arguments, yeeee!!"
};

const f1 = noarg();
console.log(f1);
//A function that takes arguments, does something but does not return anything

const noreturn = function (k,f) {
    console.log(k);};

const f2 = noreturn (5);
console.log(f2);
//


const numberfunction = function (num1, num2) {
    if (num1 ===  num2){
        return 0;
    } else if (num1 > num2) {
        return 1;
    } else  {
        return 6;
    }
};
const f3 = numberfunction (5,8);
console.log(f3);
/////
const mult = function (base, height) {
    return base * height;
}
const f4 = mult(10,20);
console.log(f4);
///

const division = function (firstnum,secondnum) {
    return firstnum / secondnum;
};
const f5 = division (mult(10,5),2);
console.log (f5);
///
const AreaTriangle = function (numb1,numb2) {
    return division (mult(numb1,numb2),2);

}
const f11 = AreaTriangle (50,22);
console.log(f11);

const lol = function (s) {
    return (s+"").length;}

const a = lol (45);
console.log(a);


// Create a function that takes two strings and a number.
//If the length of the two strings concatenated together is greater than the given number, return 1, else return -1.

const myfunc = function (str1,str2,num5) {
        if (str1.length+str2.length > num5) {
            return 1;}
        else {return -1;}
    };
console.log(myfunc ("lol","lmao",5));


//-Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1

const runStuff = (str2,num44,num45)
{
    if (str2 === "rectangle") {
        return num44 * num45;
    } else if (str2 === "triangle") {
        return (num44*num45)/2;
    } else {return -1;}
}






