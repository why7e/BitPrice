global = {}

function firstload() {
        $('#leftseginput').html(1);
        $.get('/pulse/prices.json', function(prices) { // Download exchange rates
        global.prices = prices;
        var inputAmount = $('#leftseginput').html(); // Get the amount of altcoin
        var inputCurrency = $('#rightseginput').html(); // Find what altcoin (not in use atm)
        var key = $('#rightsegoutput').text();
        var exchangeRate = prices[key].last; // Get the value of altcoin in chosen currency
        var value = exchangeRate * inputAmount
        $('#leftsegoutput').html(value)
        });
        getprices()
}

function getprices() {
    setInterval(function() {
        $.get('/pulse/prices.json', function(data) {
            global.prices = data;
            updateoutput()
        });
    }, 5000);
}


function updateoutput() {
        var inputAmount = $('#leftseginput').html(); // Get the amount of altcoin
        var inputCurrency = $('#rightseginput').html(); // Find what altcoin (not in use atm)
        var key = $('#rightsegoutput').text();
        var exchangeRate = global.prices[key].last; // Get the value of altcoin in chosen currency
        var value = exchangeRate * inputAmount
        $('#leftsegoutput').html(+value.toFixed(2))
}


function updateinput() {
        var outputAmount = $('#leftsegoutput').html(); // Get the amount of currency
        var outputCurrency = $('#rightsegoutput').html(); // Find what currency (not in use atm)
        var key = $('#rightsegoutput').text();
        var exchangeRate = global.prices[key].last; // Get the value of altcoin in chosen currency
        var value = outputAmount / exchangeRate;
        $('#leftseginput').html(+value.toFixed(5))
}