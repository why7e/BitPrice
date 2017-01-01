global = {}

function firstload() {
        $('#leftseginput').html(1);
        $.get('/pulse/prices.json', function(prices) { // Download exchange rates
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
    $.get('/pulse/prices.json', function(data) {
            global.prices = data;
        });
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

function textWidth() {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').appendTo(document.body);
    var htmlText = text || this.val() || this.text();
    htmlText = $.fn.textWidth.fakeEl.text(htmlText).html(); //encode to Html
    htmlText = htmlText.replace(/\s/g, "&nbsp;"); //replace trailing and leading spaces
    $.fn.textWidth.fakeEl.html(htmlText).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};

$('#leftseginput').on('input', function() {
    $('leftseginput-width').html($(this).textWidth() + 'px');
}).trigger('input');