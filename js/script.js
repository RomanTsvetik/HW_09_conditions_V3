//1
let x = 10;
let y = 7;

x > y ? alert('x больше, чем y') : alert('x не больше, чем y');

//2
let num = prompt('Введите число');

if (num % 2 == 0) {
    alert(`Число ${num} - четное`);
}else {
    alert(`Число ${num} - нечетное`);
}

//3
let num = prompt('Введите целое число');
num > 0 ? alert(`число "${num}" - ${num.length}-значное положительное`) : alert(`число "${num}" - ${num.length - 1}-значное отрицательное`);

// 4
let a = prompt('Введите 1e число');
let b = prompt('Введите 2e число');
let c = prompt('Введите 3e число');

if (a > b && a > c) {
    alert(`1e число - ${a} - максимальное`);
}else if (a < b && b > c) {
    alert(`2e число - ${b} - максимальное`);
}else {
    alert(`3e число - ${c} - максимальное`);
}

//5
let a = +prompt('Введите 1ю длину');
let b = +prompt('Введите 2ю длину');
let c = +prompt('Введите 3ю длину');

if ((a + b <= c) || (b + c <= a) || (a + c <= b)) {
    console.log(`не получается`);
}else {
    console.log(`треугольник получится`);
}

