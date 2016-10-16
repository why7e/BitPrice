$(document).ready(function() {
    $("#leftbox").keyup(function() {
        // Getting the current value of textarea
        var currentText = $(this).val();
        
        var inputCurrency = document.getElementById('#inputCurrency');
        var inputText = inputCurrency.textContent;
        var inputLowerCase = inputText.toLowerCase();
        
        var outputCurrency = document.getElementById('outputCurrency');
        var outputText = outputCurrency.textContent;
        var outputLowerCase = outputText.toLowerCase();
        
        $.get('/api/' + inputLowerCase + '/' + outputLowerCase + '.php', function(data) {
            output = currentText * data;
    		$("#rightbox").val(output);
        });
    });
});

