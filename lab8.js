function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');

    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = 'Дата и время для арабской локали: ' + today2.toLocaleString('ar-LB');
    
    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = 'Дата и время для белорусской локали: ' + today3.toLocaleString('be-BY');

    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = 'Дата и время для испанской локали: ' + today4.toLocaleString('ca-ES');

    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML = 'Дата и время для германской локали: ' + today5.toLocaleString('de-DE');
}

function showDaysCount() {
    let date = document.getElementById('date');

    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);

    date.innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function clear() {
    let date = document.getElementById('date');

    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);

    date.innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}

function showTIme() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTIme, 1000);