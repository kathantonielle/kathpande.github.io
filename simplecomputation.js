function convert() {
    const inputValue = parseFloat(document.getElementById('value').value);
    if (isNaN(inputValue)) {
        alert('Please enter a valid number.');
        return;
    }

    const conversionType = parseInt(document.getElementById('conversionType').value);

    const result = performConversion(inputValue, conversionType);

    document.getElementById('result').textContent = 'Result: ' + result;
}

function performConversion(inputValue, conversionType) {
    switch (conversionType) {
        case 1:
            return (inputValue - 32) * 5/9 + ' Celcius';
        case 2:
            return (inputValue * 9/5) + 32 + ' Fahrenheit';
        case 3:
            return inputValue * 3.28084 + ' Feet';
        case 4:
            return inputValue * 0.3048 + ' Meters';
        default:
            return 'Invalid Conversion';
    }
}