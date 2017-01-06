<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <link href="/assets/css/main.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/reset.css" rel="stylesheet" type="text/css">
        <script src="/assets/js/pricecheck.js" type="text/javascript"></script>
        <script src="/assets/js/changefont.js" type="text/javascript"></script>
        <script src="/assets/js/jquery.color.min.js" type="text/javascript"></script>
        <script src="/assets/js/numfunc.js" type="text/javascript"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.4.0/introjs.css" type="text/css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.4.0/intro.js" type="text/javascript"></script>
        
    </head>
    <body onLoad="firstload();loadselects();" height="200vh">
        <div class="header">
            <div height="10%"><a href="https://bitcointalk.org/index.php?action=profile;u=523317"><img src=/assets/images/logo.png id="logo"></a></div>
            <div id="title" style="width:100vw;height:24px;transform: translateY(-22px);padding-top:5vh;text-align: center;">
                <div style="display:inline-block; padding:10px;" data-hint="Introducing BitPrice, the live bitcoin price ticker/converter. <br>Each of these tooltips that you just clicked will give you a little bit of information about a site element, it's features and how to use them. <br>Click the 'help' icon to hide these tooltips.">Live Bitcoin Price Ticker</div>
            </div>
            <div style="float:right" id="helptoggle"><a href="javascript:doToggle();"><img src=/assets/images/help.png id="help"></a></div>
        </div>
<div id="sub">
    <div id="focus">
        <div id="input" data-hint="<b>This is the cryptocurrency side.</b> <br>The left box is used to input an amount, and the right box is used to choose a denomination of bitcoin. <br>The value will automatically be output to the 'fiat' section.">
        <span contenteditable="true" id="leftseginput" class="inputin" onkeyup="updateoutput()" value="1" size="10"></span><button id="rightseginput">BTC</button>
        </div>
        <div style="display:inline;height:100%; vertical-align: middle;padding-bottom:50%"><img src=/assets/images/equals.png id="equals"></div>
        <div id="output" data-hint="<b>This is the fiat side. <br>This side returns how much of a currency your amount of bitcoin is worth.<br>You can edit this to do the reverse function.</b>">
        <span contenteditable="true" id="leftsegoutput" class="inputout" onkeyup="updateinput()" size="10"></span><button onClick="nextcurrency()" id="rightsegoutput">USD</button>
        
        <!---->
        </div>
        <script>
        $("#leftseginput,#leftsegoutput").ForceNumericOnly();
        $("#leftseginput").focus(function(){
            focusin()
        });
        $("#leftsegoutput").focus(function(){
            focusout()
        });
        </script>
    </div>

</div>
        </div>
        </body>
</html>


