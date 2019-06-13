var btn = document.querySelector('button'), // Главная кнопка
    modal = document.querySelector('.modal'), // Модальное окно
    closeBtn = document.querySelector('.closeBtn'); // Кнопка, закрывающая модальное окно

// Открытие модального окна
btn.addEventListener('click', function () {
    modal.style.display = 'flex';
})
// Закрытие модального окна при клике на кнопку
closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
})

//Пробелы в инпуте номера карты
var a=0;
forma.mytext.onkeypress=function(){
    if(a==4){
        a=0;
        forma.mytext.value+=" ";
    }
    a++;
}
