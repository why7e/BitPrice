<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <link href="/assets/css/main.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/reset.css" rel="stylesheet" type="text/css">
        <script src="/assets/js/pricecheck.js" type="text/javascript"></script>
        <script src="/assets/js/changefont.js" type="text/javascript"></script>
        <script src="/assets/js/jquery.color.min.js" type="text/javascript"></script>
        <script src="/assets/js/numfunc.js" type="text/javascript"></script>
    </head>
    <body onLoad="firstload();loadselects()">
        <div class="header">
            <div height="10%"><a href="https://bitcointalk.org/index.php?action=profile;u=523317"><img src=/assets/images/logo.png id="logo"></a></div>
            <div style="width:100vw;height:24px;transform: translateY(-12px);padding-top:5vh;text-align: center;">
                <p id="title">Live Bitcoin Price Ticker</p>
            </div>
        </div>
<div id="sub">
    <div id="focus">
        <span id="input">
        <span contenteditable="true" id="leftseginput" class="inputin" onkeypress="focusin()" onkeyup="updateoutput()" value="1" size="10"></span><button id="rightseginput">BTC</button>
        </span>
        <div style="display:inline;height:100%; vertical-align: middle;padding-bottom:50%"><img src=/assets/images/equals.png id="equals"></div>
        <span id="output">
        <span contenteditable="true" id="leftsegoutput" class="inputout" onkeypress="focusout()" onkeyup="updateinput()" size="10"></span><button onClick="nextcurrency()" id="rightsegoutput">USD</button>
        </span><script>$("#leftseginput,#leftsegoutput").ForceNumericOnly();</script>
    </div>
</div>
        </div>
        </body>
</html>


