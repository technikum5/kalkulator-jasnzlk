function calculate(operation) {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    if (isNaN(a) || isNaN(b)){
        alert('Proszę wprowadzić prawidłowe liczby.');
        return;
    }
    switch (operation) {
        case('dodaj'):
            result = a + b;
            break;
        case('odejmij'):
            result = a - b;
            break;
        case('pomnoz'):
            result = a * b;
            break;
        case('podziel'):
            if (a == 0){
                alert('Proszę nie dzielić przez 0.');
                return;
            }else{
                result = a / b;
            };
    }
    document.getElementById('result').textContent = result;
}
