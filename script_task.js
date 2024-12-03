document.getElementById('calcForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const A = parseFloat(document.getElementById('numberA').value);
    let x;

    if (A > 100) {
        x = 0;
    } else if (A < 61) {
        x = A;
    } else {
        x = Math.pow(A, 4);
    }

    document.getElementById('result').textContent = x;
});
