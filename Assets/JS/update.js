var global = {};

function reload() {
    var currentText = $('#leftbox').val();
    var output = global.prices * currentText
    $("#rightbox").val(output.toFixed(2));
}

function getprices() {
    var inputCurrency = document.getElementById('inputCurrency');
    var inputText = inputCurrency.textContent;
    var inputLowerCase = inputText.toLowerCase()
    
    var outputCurrency = document.getElementById('outputCurrency');
    var outputText = outputCurrency.textContent;
    var outputLowerCase = outputText.toLowerCase();
    
    $.get('/api/' + inputLowerCase + '/' + outputLowerCase + '.php', function(data) {
        global.prices = data;
    });
    
    reload()
    
}

function firstload() {
        var output = 0;
        var currentText = $('#leftbox').val();
        var inputCurrency = document.getElementById('inputCurrency');
        var inputText = inputCurrency.textContent;
        var inputLowerCase = inputText.toLowerCase()
        
        var outputCurrency = document.getElementById('outputCurrency');
        var outputText = outputCurrency.textContent;
        var outputLowerCase = outputText.toLowerCase();
        
        $.get('/api/' + inputLowerCase + '/' + outputLowerCase + '.php', function(data) {
            output = currentText * data;
    		$("#rightbox").val(output.toFixed(2));
        });
        
        getprices()
}
