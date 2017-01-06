global = {}
global.fcounter = 0
global.fkeys = ["USD", "EUR", "GBP", "AUD", "NZD", "CAD", "CNY", "JPY"]

function nextcurrency() {
    global.fcounter += 1
    fkey = global.fkeys[global.fcounter]
    $('button#rightsegoutput').text(fkey)
    $('#leftseginput').html(1);
    var inputAmount = $('#leftseginput').html(); // Get the amount of altcoin
    var inputCurrency = $('#rightseginput').html(); // Find what altcoin (not in use atm)
    global.key = $('#rightsegoutput').text();
    var exchangeRate = global.prices[global.key].last; // Get the value of altcoin in chosen currency
    var value = exchangeRate * inputAmount
    $('#leftsegoutput').html(+value.toFixed(2))
    document.title = value + " " + global.key;
    if (global.fcounter > 6) {
        global.fcounter = -1
    }
    else {
        return;
    }
}

function loadselects() {
    document.querySelector('.inputin').onfocus = function(e) {
        var el = this;
        requestAnimationFrame(function() {
            selectElementContents(el);
        });
    };
    
    document.querySelector('.inputout').onfocus = function(e) {
        var el = this;
        requestAnimationFrame(function() {
            selectElementContents(el);
        });
    };
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

function selectallin() {
    var el = $("#leftseginput")[0];
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
};

function selectallout() {
    var el = $("#leftsegoutput")[0];
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
};

function firstload() {
        $('#leftseginput').html(1);
        $.get('/pulse/prices.json', function(prices) { // Download exchange rates
        global.prices = prices;
        var inputAmount = $('#leftseginput').html(); // Get the amount of altcoin
        var inputCurrency = $('#rightseginput').html(); // Find what altcoin (not in use atm)
        global.key = $('#rightsegoutput').text();
        var exchangeRate = prices[global.key].last; // Get the value of altcoin in chosen currency
        var value = exchangeRate * inputAmount
        document.title = value + " " + global.key;
        $('#leftsegoutput').html(value)
        });
        getprices()
}

function getprices() {
    setInterval(function() {
        $.get('/pulse/prices.json', function(data) {
            global.prices = data;
            if ($('#leftsegoutput').is(":focus")) {
                return;
            }
            else {
                updateoutput()
            }
        });
    }, 5000);
}


function updateoutput() {
        var inputAmount = $('#leftseginput').html(); // Get the amount of altcoin
        var inputCurrency = $('#rightseginput').html(); // Find what altcoin (not in use atm)
        global.key = $('#rightsegoutput').text();
        var exchangeRate = global.prices[global.key].last; // Get the value of altcoin in chosen currency
        var value = exchangeRate * inputAmount
        $('#leftsegoutput').html(+value.toFixed(2))
        $('#leftsegoutput').stop().css('color','#f4f4f4');
        $('#leftsegoutput').animate({color:'#101010'},250);
}


function updateinput() {
        var outputAmount = $('#leftsegoutput').html(); // Get the amount of currency
        var outputCurrency = $('#rightsegoutput').html(); // Find what currency (not in use atm)
        global.key = $('#rightsegoutput').text();
        var exchangeRate = global.prices[global.key].last; // Get the value of altcoin in chosen currency
        var value = outputAmount / exchangeRate;
        $('#leftseginput').html(+value.toFixed(2))
        $('#leftseginput').stop().css('color','#f4f4f4');
        $('#leftseginput').animate({color:'#101010'},250);
}

global.toggleSelection = [hintson, hintsoff];

function doToggle() {
    if (global.toggleCounter == null) {
        console.log(global.toggleCounter)
        global.toggleCounter = 1
        hintson()
    }
    else {
        console.log(global.toggleCounter)
        global.toggleCounter = null
        hintsoff()
    }
}
    
function hintson(){
   javascript:introJs().addHints();
}
function hintsoff(){
   javascript:introJs().hideHints();
}