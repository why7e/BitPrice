function chfont() {
    $('#leftseginput,#leftsegoutput').focus(
    function(){
        $(this).css({'font-family' : 'Lato'});
    });

    $('#leftseginput,#leftsegoutput').blur(
    function(){
        $(this).css({'font-family' : 'Open Sans'});
    });
};

function inchfont() {
    $('#leftsegoutput').css({'font-family' : 'Open Sans'});
    $('#leftseginput').css({'font-family' : 'Lato'});
}

function outchfont() {
    $('#leftseginput').css({'font-family' : 'Open Sans'});
    $('#leftsegoutput').css({'font-family' : 'Lato'});
}

