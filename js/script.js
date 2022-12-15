"use strict"
/*let someArray = [10, 20,5];
console.log( typeof someArray);
console.log(someArray);*/

//Готова функція, яка сортує правильно 
//числа
/*let arrTwo = [8, 22, 2];
console.log(arrTwo.sort());

function compareNumeric(a,b) {
	//розгорнутий варіант
	//console.log(`Порівнюємо ${a} i ${b}`);
	//if (a > b) return 1;
	//if (a == b) return 0;
	//if (a < b) return -1;
	замість м-на записати -
	return a - b
} 
або стрілочна функція
console.log(arrTwo.sort((a,b) => a - b));
console.log(arrTwo.sort(compareNumeric));

получение ширини окна браузера (въюпорта)
let windowWidth = window.innerWidth;
console.log(windowWidth);*/

//DOM

//const elemsOne = document.querySelectorAll('.link__text');
//console.log(elemsOne[0]);
//const elemsOne = document.querySelector('.item__link .link__text');
//const elemsOneContent = elemsOne.outerHTML;
//console.log(elemsOneContent);
/*const newElement = document.createElement('div');
newElement.innerHTML =
`<div data-say-hi="yes">Привіт!</div>`
console.log(newElement);*/
/*let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
let scrollWidth = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);*/
//====================================

//Домашнє завдання

//Функции в JAVASCRIPT. Стрелочные функции, 
//рекурсия, планирование: setTimeout и setInterval.
//Завдання №1
//Хто попадає в консоль першим -
//Вася чи Коля?
/*function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');
//Першим попадає в консоль Коля, так як віклик напряму
в консоль. У Василя setTimeout (0).*/

//Завдання №2
//Вірно задана функція 
showMessage();
function showMessage() {
	console.log('Повідомлення');
}
//Вірно. Виклик функції можна робити
//як до, так і після об'явлення функції

//Завдання №3
//Чи правильно вікликана функція
/*showMessageOne();
let showMessageOne = function () {
	console.log('Повідомлення');
}*/
//Не вірно. В данному випадку це функціональний 
//вираз ш виклик функції повинен буди після
// об'яви функції. В кітці, після } повинні бути ;
//Правильний запис -
let showMessageOne = function () {
	console.log('Повідомлення');
};
showMessageOne();

let showMessageThree;
if (2 > 1) {
		showMessageThree = function() {
			console.log('Повідомлення');
		};		
};
showMessageThree();

//Массивы в JAVASCRIPT. Методы массивов. 
//Редактирование, поиск, сортировка. 
//Уроки JavaScript с нуля

//Завдання №1
//Яке число (довжину) отримаємо?
let arr = ['Ваня', 'Іштван', 'Оля'];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);
// Отримаємо 4, тому що push додає єлемент в масив.

//Завдання №2
//створити масив users з елементом 'Ваня'і 'Іштван'
let usersNames = ['Ваня','Іштван'];
console.log(usersNames);
//додати 'Оля' в кінець
usersNames.push('Оля');
console.log(usersNames);
//змінити значення 'Іштван' на 'Петя'
/*usersNames[1] = 'Петя'; 1-й способ.
console.log(usersNames);*/
//Метод "splice"
usersNames.splice(1,1,'Петя');
console.log(usersNames);
//ваш код для пошуку значення повинен 
//працювати для масива любої довжини.
let resultName = usersNames.find(function (item, index, array) {
	return item === 'Петя';
});
console.log(resultName);

//видалити перший елемент масива і показати його
let removedName = usersNames.splice(0,1);
console.log(removedName);

//вставити 'Маша' і 'Паша' на початок масива
usersNames.unshift('Маша','Паша');
console.log(usersNames);

//завдання №3
//Видалити елемент "Іштван" і повернути його 
//в перемінну   
let arrOne = ['Ваня', 'Іштван', 'Оля'];
let removedArrOne = arrOne.splice(1,1);
console.log(removedArrOne);

//завдання №4
//Зробити з рядка масив
let string = 'Ваня, Іштван, Оля';
let arrTwo = string.split(',');
console.log(string);
console.log(arrTwo);

//Завдання №5
//Чому дорівнює previousValue на початку роботи метода?
let arrThree = [9, 2, 8];
let previousValue = arrThree.reduce(
	function (previousValue, item, index, array) {
	console.log(previousValue);
})
//На початку роботи метода previousValue = 9,
//тому, що не вказано початкове значення. 

//JavaScript Document object model (DOM) за час. Изменение HTML CSS. Атрибуты и свойства. Окружение.


//Завдання №1
//Отримати в перемінну елемент з атрибутом data-say-hi
//і прочитати значення цього атрибуту
let elemsOne = document.querySelector('.art');
elemsOne.getAttribute('data-sai-hi');
let atrSayHi = elemsOne.getAttribute('data-sai-hi'); 
console.log(atrSayHi);

//Завдання №2
//Отримати в перемінну елемент з текстом Йончи
/*<ul>
	<li>Корчи</li>
	<li>Йончи</li>
</ul>*/
//const elemsTwo = ;
//let subList =  document.querySelector('.item__sublink > li');
let elemsSubLink = document.querySelectorAll('.item__sublink>li');
let liYochi;
for (const li of elemsSubLink) {
	if (li.textContent == 'Йончи') {
		liYochi = li.textContent;
	}
}
console.log(liYochi);

//Завдання №3
//Отримати в перемінну колекцію єлементів з класом like
/*<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>*/
let elemLike = document.querySelectorAll('.like');
console.log(elemLike);


//Задання №4
//Де додасться <li>Текст</li>
//  JS
/*const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
	'beforeend',
	'<li>Текст</li>'
)
HTML
<ul>
<li>Пункт №1</li>
<li>Пункт №2</li>
</ul>*/

//JavaScript размеры прокрутка и координаты элементов на странице и окна браузера.

//Завдання №1
// Яка ширина прокрутки
let windowWidth = window.innerWidth;
let mainElement = document.documentElement;
let mainElementWidth = mainElement.clientWidth;
let resultWidthScroll =  windowWidth -  mainElementWidth;
console.log(`ширина прокрутки = ${resultWidthScroll}`);
//ширина вікна = 1821px, включаючі скрол.
//ширина екрана документа = 1798px.
//ширина прокрутки = 23px.
//Заданні №2
//Заставити браузет прокрутитися на 100px зверху
//згодом 1 секунди після відкриття сторінки
const bodyElement = setTimeout(setScrollTo,1000);
function setScrollTo() {
	window.scrollTo({
		top: 100,
      left: 0,
	   behavior: 'smooth',
	});
}

//Завдання №3
//Отримати координати любіх трьох єлементів на сторінці

const item = document.querySelector('.homework__title');
const getItemCoords = item.getBoundingClientRect().top;
const getItemTopDocumentCoords = getItemCoords + window.pageYOffset;
console.log(getItemCoords);
console.log(getItemTopDocumentCoords);





