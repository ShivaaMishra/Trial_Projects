


// function sum(a,b){
//     let total = a+b;
//     console.log(total);
// }

// sum(12,13);


// function mul(a,b,c,d){
//     let total = a*b*c*d;
//     console.log(total);
// }

// mul(2,2,2,2);



// const sum = () => `the sum of two number is ${(a=5)+(b=6)}`;

// console.log(sum());


// let arr = ["shiv", "kamal", "vimal", "sujal"];

// console.log(arr[arr.length-1]);

// let arr = ["a", "b", "c", "d"];

// for(let j=0; j<arr.length; j++){
//     console.log(arr[j]);
// }

// let arr = ["aa", "bb", "cc", "dd"];

// arr.forEach(function(element,index){
//     console.log(`${element} : ${index}`);
// })

// let aray = ["shiv", "kamal", "vimal", "sujal"];

// aray.forEach((element) => console.log(element));




// for(let a=1; a<=10; a++){
//     let tableOf = 12;
//     console.log(`${tableOf} * ${a} = ${tableOf * a}`);
// }




// let aray = ['shiv', 'charan', 'das', 'kanahaiya', 'lal', 'inter', 'college'];

// aray.push('meerapur');

// console.log(aray);



// let aray = ['shiv', 'charan', 'das', 'kanhaiya', 'lal'];

// let count = aray.push('college');

// console.log(count);



// let aray = ['shiv', 'chraran', 'das', 'kanahaiya',];

// console.log(aray);
// console.log(aray.pop());



// let aray = ['shiv', 'charan', 'das', 'kanhaiya', 'lal']

// aray.splice(aray.length,0,'inter','college');

// console.log(aray);




// let months = ['Jan', 'Feb', 'mar', 'April', 'May', 'June',];

// let count = months.splice(2,1,'March');

// console.log(months);




//                                  {UPDATED MONTH}

// let month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'july', 'August', 'September', 'October', 'November'];

// let newMonth = month.indexOf('dec');

// if(newMonth != -1){
//     month.splice(newMonth,1,'July');
//     console.log(month);
// }else{
//     console.log('No such data found');
// }








//---------------------{DELETE VALUE FROM ARRAY}




// let month = ['Jan', 'Feb', 'March', 'April', 'May'];

// let newMonth = month.indexOf('April');

// if(newMonth != -1){
//   let aray =  month.splice(newMonth,1);
//     console.log(aray);
// }else{
//     console.log('No such data found');
// }







//----------------------{MAP USES WITH REDUCE,FILTER,SORT}


// let num = ['1', '2', '3', '4', '5'];

// let newNum = num.map((val,index,arr) => {
//     return `Index no = ${index} and the value ${val} belongs to ${arr}`;
// });
// console.log(newNum);




// let num = [4, 9, 16, 25, 36, 49, 63];

// let newNum = num.map((val) => Math.sqrt(val))
// console.log(newNum);




// let num = [6, 8, 12, 16, 18];

// let newNum = num.map((val) => val*2).filter((val) => val > 30).reduce((accumulator,val) => val += accumulator )
// console.log(newNum);
