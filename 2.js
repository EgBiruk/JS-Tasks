//Задание 1
// Создать произвольную переменную, присвоить ей значение. C помощью if написать условие: если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

//let variable = "hidden";
//if (variable == "hidden") {
//    variable = "visible";
//} else {
//    variable = "hidden";
//}
//console.log(variable);


// Задание 2
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

//let a = Number(prompt("Введите число:"));
//if (a < 0) {
//    a = 'less then zero';
//} else if (a > 0) {
//    a = a * 10;
//} else {
//    a = 1;
//}
//console.log(a);


// Задание 3
// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5, 
//то результат будет '0', если больше -  '1'. Выведите результат в консоль.
// Выполните это задание, используя тернарный оператор (: ?)

//let a = Number(prompt("Введите число:"));
//let b = (a > 5) ? 1 : 0;
//console.log(b);


//Задание 4 !!!
//Попросить пользователя ввести одно число, следом - второе число. Вывести в консоль максимальное из чисел
//(наибольшее) с текстом: Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
//* предусмотреть вариант ввода одинаковых чисел


//let a = Number(prompt("Введите первое число:"));
//let b = Number(prompt("Введите второе число:"));
//let c = (a < b) ? b : a;
//if (a == b) {
//    c = "Числа одинаковы";
//}
//console.log(c);


//Задание 5
//Определить, является ли введенное пользователем число num1 кратным введенному числу num2.
//Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

//let num1 = Number(prompt("Введите первое число:"));
//let num2 = Number(prompt("Введите второе число:"));
//let remainder = (num1 % num2);
//let answer;
//if (remainder == 0) {
//answer = "Первое число кратно второму";
//} else {
//    answer = "Первое число не кратно второму";
//}
//console.log(answer);


//Задание 6
//Запросить у пользователя средний балл, записать в переменную.
//Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!",
// если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!" (можно другие фразы - по желанию).


//let a = Number(prompt("Введите ваш средний балл:"));
//if (a > 10) {
//   alert("Многовато");
//} else if (a < 1) {
//    alert("Маловато");
//} else if (a <= 4) {
//    alert("Двоечник, иди учись!");
//} else if (a <= 8) {
//    alert("Неплохо, но давай еще поднажмем!"); 
//} else if (a <= 10) {
//    alert("Ого, да ты настоящий отличник!"); 
//} 


//Задание 7
//Запросить у пользователя ответы на 2 вопроса:
//- балл за экзамен (от 0 до 100)
//- количество выполненных проектов (от 0 и больше)
//Вывести в консоль общий выпускной балл в соответствии с этими значениями:
//- 100, если балл за экзамен более 90 или количество проектов более 10.
//- 90, если балл за экзамен более 75 и количество проектов не менее 5.
//- 75, если балл за экзамен более 50 и количество проектов не менее 2.
//- 0 во всех других случаях.


//let ExamMark = Number(prompt('Введите ваш балл за экзамен:'));
//let ProjectCount = Number(prompt('Введите кол-во ваших проектов:'));
//if (ExamMark > 100 || ExamMark < 0) {
//   alert('Такого балла не может быть!')
//}
//if (ExamMark > 90 || ProjectCount > 10) {
//    alert('Ваш выпускной балл: 100');
//} else if (ExamMark > 75 && ProjectCount >= 5) {
//    alert('Ваш выпускной балл: 90');
//} else if (ExamMark > 50 && ProjectCount >= 2) {
//   alert('Ваш выпускной балл:75');
//} else {
//   alert('Ваш выпускной балл:0');
//}


//Задание 8
//День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете
// общую итоговую скидку $50. Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.
//Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt.
// Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

//let PaymentPerDay = 40;
//let DaysCount = Number(prompt('На сколько дней вы желаете арендовать машину?'));
//let Payment;
//if (DaysCount >= 7) {
//    Payment = (DaysCount * PaymentPerDay - 50)
//} else if (DaysCount >= 3) {
//    Payment = (DaysCount * PaymentPerDay - 20)
//} else {
//    Payment = (DaysCount * PaymentPerDay)
//}
//alert(Payment);


//Задание 9
//Создать переменную и записать в нее число, например 10.
//10 раз увеличивать значение этой переменной на 1. Результат вывести в консоль.


for (let a = 10; a < 21; a++) {
    console.log(a);
}


//Задание 10
//Увеличивая счетчик цикла на 2, нужно 5 раз:
//- запрашивать у пользователя ввод числа
//- проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

//for (let i = 0; i < 10; i += 2) {
//    let a = Number(prompt('Введите число:'));
//    if (a === 10) {
//        console.log('Равно 10')
//    } else {
//        console.log('Не равно 10')
//    }
//}


//Задание 11
//Вывести в консоль квадраты чисел от 0 до 100 (не включая 100) - т.е. вывести числа 0, 1, 4, 9, 16...
//* Задавать количество чисел, которые нужно вывести, при помощи функции prompt.


//for (let i = 0; i < 100; i++) {
//    console.log(i**2)
//}


//Задание 12
//Напишите программу, которая выводит в консоль числа от 1 до 100.
//При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz», 
// а вместо чисел, кратных пяти, — слово «Buzz». Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz»

//for (let i = 1; i < 100; i++) {
//    if (i % 3 != 0 && i % 5 != 0) {
//        console.log(i)
//}else if (i % 3 == 0) {
//    console.log('Fizz');
//} else if (i % 5 == 0) {
//    console.log('Buzz');
//} else if (i % 3 == 0 && i % 5 == 0) {
//   console.log('FizzBuzz');
//} 
//}