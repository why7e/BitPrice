function update(n) {
    if (n == 0) {
        crypto_input = $("#crypto").val();
        $("#fiat").val(bitcoinprices(crypto_input));
    } else {
        fiat_input = $("#fiat").val();
        $("#crypto_input").val(bitcoinprices(fiat_input));
    }
}