var global = {};

function firstload() {
        $.get('/pulse/prices.json', function(prices) { // Download exchange rates
        var inputAmount = $('#leftseginput').val(); // Get the amount of altcoin
        var inputCurrency = $('#rightseginput').text(); // Find what altcoin (not in use atm)
        var key = $('#rightsegoutput').text();
        var exchangeRate = prices[key].last; // Get the value of altcoin in chosen currency
        var value = exchangeRate * inputAmount
        $('#leftsegoutput').val(value)
        });
        getprices()
}

function getprices() {
    $.get('/pulse/prices.json', function(data) {
            global.prices = data;
        });
}


function updateoutput() {
        var inputAmount = $('#leftseginput').val(); // Get the amount of altcoin
        var inputCurrency = $('#rightseginput').text(); // Find what altcoin (not in use atm)
        var key = $('#rightsegoutput').text();
        var exchangeRate = global.prices[key].last; // Get the value of altcoin in chosen currency
        var value = exchangeRate * inputAmount
        $('#leftsegoutput').val(+value.toFixed(2))
}

function updateinput() {
        var outputAmount = $('#leftsegoutput').val(); // Get the amount of currency
        var outputCurrency = $('#rightsegoutput').text(); // Find what currency (not in use atm)
        var key = $('#rightsegoutput').text();
        var exchangeRate = global.prices[key].last; // Get the value of altcoin in chosen currency
        var value = outputAmount / exchangeRate;
        $('#leftseginput').val(+value.toFixed(5))
}