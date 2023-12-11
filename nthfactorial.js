function calculate() {
    const n = parseInt(document.getElementById("n").value);
    let factorial = 1;
    let sum = 0;

    // Calculate factorial using a while loop
    let i = 1;
    while (i <= n) {
        factorial *= i;
        i++;
    }

    // Calculate sum of the first n numbers using a do-while loop
    i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);

    // Calculate average of the first n numbers using a for loop
    let average = 0;
    for (i = 1; i <= n; i++) {
        average += i;
    }
    average /= n;

    document.getElementById("result").innerHTML = `
        Factorial of ${n}: ${factorial}<br>
        Sum of the first ${n} numbers: ${sum}<br>
        Average of the first ${n} numbers: ${average.toFixed(2)}
    `;
}