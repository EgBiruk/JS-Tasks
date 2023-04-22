// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)

console.log(`На компьютере с ОС ${navigator.appVersion} с помощью браузера ${navigator.vendor} я открыл страничку ${location}`);


// Задание 2
// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).
// ПОДСКАЗКИ
// 1) C помощью метода document.querySelectorAll найдите 
// на странице все пункты списка (li) и запишите в переменную.
//  У вас получится html-коллекция (массив). 
// 2) Обойдите коллекцию с помощью forEach и для каждого 
// li вывкдите в консоль текстовое содержимое (innerText)


let lis = document.querySelectorAll('#list li');
lis.forEach(item => {
    console.log(item.innerText);
})


// Задание 3
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)


// Задание 4
// Создать с помощью js абзац (тег p). Добавить в
//  него контент. Добавить к нему стили: размер 36px,
//   жирный шрифт. Добавить абзац с текстом на страницу.

let p = document.createElement('p');
p.innerText = 'lorem ipsum dolor sit amet';
document.body.appendChild(p);
document.querySelector('p').style.fontSize = "36px";
document.querySelector('p').style.fontWeight = "bold";



// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.


let time = new Date().toLocaleString('ru-RU');
console.log(time)
 let date = document.createElement('p');
 date.innerText = time;
 document.querySelector('.date').appendChild(date);


//  Задание 6
// Написать функцию, которая принимает на вход 3 параметра:
//  название тега, название цвета, содержимое. Функция должна
//   сформировать необходимый тег, добавить необходимый стиль с цветом и внести 
//   содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем
//    отправить их на страницу.

function formir(name, color, content){
let tag = document.createElement(name);
tag.innerText = content;
tag.style.color = color;
document.body.appendChild(tag);
}
formir('p', 'blue', 'Привет');
formir('h3', 'red', 'Привет');


// Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js
//  (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
 
for (let i = 1960; i < 2021; i++){
    let years = document.createElement('option');
    years.innerText = i;
    document.querySelector('#year').appendChild(years);
}


// Задание 8
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", 
// где имя - свойство объекта (а объект здесь - это текущая ячейка массива), 
// статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
    ]

clients.forEach(item => {
    let status = item.order ? 'оплатил' : 'отменил';
    let li = document.createElement('li');
    li.innerText = `Клиент ${item.name} ${status} заказ`;
    document.querySelector('.orders').appendChild(li);
})


// Задание 9
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/',
//  'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из 
// элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный 
// DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке 
// (атрибут target="_blank")
// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому 
// назначаем атрибут, name - атрибут, который нужно добавить, value - его значение.
//  Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую:
//  напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY


let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/',  'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
console.log(linksArr)
let newDiv = document.createElement('div');
newDiv.style.backgroundColor = 'grey';
newDiv.style.paddingBottom = '50px';
document.body.appendChild(newDiv);

linksArr.forEach(item => {
let link = document.createElement('a');
link.innerText = item;
 link.setAttribute('href', item);
link.setAttribute('target', '_blank');
link.style.paddingLeft = '50px';
newDiv.appendChild(link);
});



// Задание 10
// Добавить к нескольким тегам на странице класс "forRemove".
//  Далее написать JS код, который найдет в HTML все элементы с
//   классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод 
// element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li

let element = document.querySelector('.forRemove');
element.remove()


// Задание 11*
// Создать массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива,
//  в одной колонке будут имена, во второй возраст. Имена
//   должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) 
// внутри этих строк. Строк должно создаваться столько, сколько
//  объектов внутри массива, и их количество может быть любым.

const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},
{name:'Den', age: 43}
]

users.forEach(item => {
    let tr = document.createElement('tr');
    tr.setAttribute('class', 'firstTr')
    document.querySelector('.agesTable').appendChild(tr);
    let firstTh = document.createElement('th');
    firstTh.innerText = item.name;
    firstTh.style.color="red";
    tr.appendChild(firstTh);

    let twoTh = document.createElement('th');
    twoTh.innerText = item.age;
    twoTh.style.color="blue";
    tr.appendChild(twoTh)
})
