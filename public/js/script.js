

function calculaPacoteDisney() {
    let passagemAdulto = 1350
    let passagemKids = 1050
    let diaria = 530
    var days = document.getElementById('days');
    var daysNum = parseInt(days.value);
    var adults = document.getElementById('adults');
    var adultsNum = parseInt(adults.value);
    var kids = document.getElementById('kids');
    var kidsNum = parseInt(kids.value);
    var valor = (daysNum * diaria) + (adultsNum * passagemAdulto) + (kidsNum * passagemKids);
    valor = valor.toFixed(2)
    var p = document.getElementById('resultado');
    p.innerHTML = 'Valor do seu pacote R$: ' + valor
}


function calculaPacoteDubai() {
    let passagemAdulto = 2100
    let passagemKids = 1700
    let diaria = 820
    var days = document.getElementById('days');
    var daysNum = parseInt(days.value);
    var adults = document.getElementById('adults');
    var adultsNum = parseInt(adults.value);
    var kids = document.getElementById('kids');
    var kidsNum = parseInt(kids.value);
    var valor = (daysNum * diaria) + (adultsNum * passagemAdulto) + (kidsNum * passagemKids);
    valor = valor.toFixed(2)
    var p = document.getElementById('resultado');
    p.innerHTML = 'Valor do seu pacote R$: ' + valor
}

function calculaPacoteNatal() {
    let passagemAdulto = 950
    let passagemKids = 720
    let diaria = 350
    var days = document.getElementById('days');
    var daysNum = parseInt(days.value);
    var adults = document.getElementById('adults');
    var adultsNum = parseInt(adults.value);
    var kids = document.getElementById('kids');
    var kidsNum = parseInt(kids.value);
    var valor = (daysNum * diaria) + (adultsNum * passagemAdulto) + (kidsNum * passagemKids);
    valor = valor.toFixed(2)
    var p = document.getElementById('resultado');
    p.innerHTML = 'Valor do seu pacote R$: ' + valor
}

function calculaPacoteMachu() {
    let passagemAdulto = 1100
    let passagemKids = 875
    let diaria = 450
    var days = document.getElementById('days');
    var daysNum = parseInt(days.value);
    var adults = document.getElementById('adults');
    var adultsNum = parseInt(adults.value);
    var kids = document.getElementById('kids');
    var kidsNum = parseInt(kids.value);
    var valor = (daysNum * diaria) + (adultsNum * passagemAdulto) + (kidsNum * passagemKids);
    valor = valor.toFixed(2)
    var p = document.getElementById('resultado');
    p.innerHTML = 'Valor do seu pacote R$: ' + valor
}