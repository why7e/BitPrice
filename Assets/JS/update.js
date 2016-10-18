function reload() {
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
    		$("#rightbox").val(output);
        });
}

function getprices() {
        var inputCurrency = document.getElementById('inputCurrency');
        var inputText = inputCurrency.textContent;
        var inputLowerCase = inputText.toLowerCase()
        
        var outputCurrency = document.getElementById('outputCurrency');
        var outputText = outputCurrency.textContent;
        var outputLowerCase = outputText.toLowerCase();
        
        $.get('/api/' + inputLowerCase + '/' + outputLowerCase + '.php', function(data) {
            var prices = data;
        });
}
