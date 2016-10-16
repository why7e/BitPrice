$(document).ready(function(){
    $("#leftbox").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();
        
        var inputCurrency = document.getElementById('inputCurrency');
        var inputText = inputCurrency.textContent;
        var inputLowerCase = inputText.toLowerCase();
        
        var outputCurrency = document.getElementById('outputCurrency');
        var outputText = outputCurrency.textContent
        var outputLowerCase = outputText.toLowerCase();
        
        var exchangerate = $.get('/api/' + inputLowerCase + '/' + outputLowerCase + '.php');
        
        // Setting the Div content
        var outputbox = document.getElementById("rightbox");
				outputbox.value = currentText * exchangerate;
    });
});