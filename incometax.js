function calculateTax() {
    // Get the taxable income entered by the user
    var income = parseFloat(document.getElementById('income').value);

    // Define the tax brackets and rates
    var taxBrackets = [
        { minIncome: 0, maxIncome: 250000, rate: 0.0 },
        { minIncome: 250000, maxIncome: 400000, rate: 0.20 },
        { minIncome: 400000, maxIncome: 800000, rate: 0.25 },
        { minIncome: 800000, maxIncome: 2000000, rate: 0.30 },
        { minIncome: 2000000, maxIncome: 8000000, rate: 0.32 },
        { minIncome: 8000000, maxIncome: Infinity, rate: 0.35 }
    ];

    // Calculate the income tax
    var tax = 0;
    for (var i = 0; i < taxBrackets.length; i++) {
        var bracket = taxBrackets[i];
        if (income > bracket.minIncome) {
            var taxableAmount = Math.min(income, bracket.maxIncome) - bracket.minIncome;
            tax += taxableAmount * bracket.rate;
        }
    }

    // Display the result with the ₱ symbol
    document.getElementById('result').innerHTML = 'Income Tax: &#8369; ' + tax.toFixed(2);
}