<html>
    <head>
        <script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
        <link href="/assets/css/main.css" rel="stylesheet" type="text/css">
        <link href="/assets/css/reset.css" rel="stylesheet" type="text/css">
        <script src="/assets/js/pricecheck.js" type="text/javascript"></script>
    </head>
    <body onLoad="firstload()">
        <div class="header">
            <div height="10%"><a href="https://bitcointalk.org/index.php?action=profile;u=523317"><img src=/assets/images/logo.png id="logo"></a></div>
            <div style="width:100vw;height:24px;transform: translateY(-12px);padding-top:5vh;text-align: center;">
                <p style="font-size:24px;transform: translateX(-11vh);">Live Bitcoin Price Ticker</p>
            </div>
        </div>
<div id="sub">
    <div id="focus">
        <div id="input">
        <span contenteditable="true" id="leftseginput" class="resize" onkeyup="updateoutput()" value="1" size="10"></span><button id="rightseginput" onfocus="if (!this.active) this.active = true; numFocus()" onmousedown="this.active = this.active || (doc.activeElement !== this)" onmouseup="var a = this.active; this.active = false; if (a) return false">BTC</button>
        </div>
        <span id="equals">=</span>
        <div id="output">
        <span contenteditable="true" id="leftsegoutput" onkeyup="updateinput()" size="10"></span><button id="rightsegoutput" onfocus="if (!this.active) this.active = true; numFocus()" onmousedown="this.active = this.active || (doc.activeElement !== this)" onmouseup="var a = this.active; this.active = false; if (a) return false">USD</button>
        </div>
    </div>
</div>
        </div>
        </body>
</html>