let balance = 1000;
let currentPrice = 1.000
let position = 0; // This represents how much of the currency pair the user owns

// Randomly update the price every 3 seconds
setInterval(() => {
    const change = (Math.random() - 0.5) * 0.1; // Price change between -0.05 and 0.05
    currentPrice = Math.max(0.5, currentPrice + change); // Ensure price doesn't go below 0.5
    document.getElementById('price').textContent = currentPrice.toFixed(3);
}, 3000);

function buy() {
    const amount = 100; // Fixed amount to buy
    if (balance >= amount) {
        balance -= amount;
        position += amount / currentPrice;
        document.getElementById('balance').textContent = balance.toFixed(2);
        showMessage(`You bought ${amount / currentPrice.toFixed(2)} units at $${currentPrice.toFixed(3)}.`);
    } else {
        showMessage('Not enough balance to buy.');
    }
}

function sell() {
    if (position > 0) {
        const sellAmount = position * currentPrice;
        balance += sellAmount;
        position = 0; // Reset position after selling
        document.getElementById('balance').textContent = balance.toFixed(2);
        showMessage(`You sold your position for $${sellAmount.toFixed(2)}.`);
    } else {
        showMessage('You have no position to sell.');
    }
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
