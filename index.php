<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
    <script src="/semantic/dist/semantic.min.js"></script>
    <script type="text/javascript" src="Assets/JS/update.js"></script>
    <link href="/Assets/CSS/mainpage.css" rel="stylesheet" type="text/css">
    <link href="/semantic/dist/semantic.min.css" rel="stylesheet" type="text/css">
</head>
 <body>
    <div class="header">
        <div id="headertext">
        <p style="font-size:23px">Live Bitcoin Price Ticker</p>
    </div>
           </div>
    <div id="converter">
        <div class="leftbox">

<div class="ui massive right labeled input"  style="margin-right:122.05px;width:30%">
  <input type="text" value="1" class="input-element" id="leftbox">
  <div class="ui massive search dropdown label">
    <div class="text" id="inputCurrency">BTC</div>
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item">BTC</div>
      <div class="item">LTC</div>
      <div class="item">ETH</div>
    </div>
  </div>
</div>
        </div>
        <div id="equals">
          <c style="color:#808080">=</p>
        </div>

<div class="rightbox">
<div class="ui massive right labeled input"  style="margin-right:122.05px;width:30%;float:left">
  <input type="text" placeholder="..." class="input-element" id="rightbox">
  <div class="ui massive search dropdown label">
    <div class="text" id="outputCurrency">USD</div>
    <i class="dropdown icon"></i>
    <div class="menu">
      <div class="item">USD</div>
      <div class="item">EUR</div>
      <div class="item">GBP</div>
    </div>
  </div>
</div>
</div>
</div>
    </div>
    
<script>
$('.ui.search.dropdown.label')
  .dropdown()
;
</script>
<script>
      var inputEl = document.getElementById("theInput");

      function getWidthOfInput() {
        var tmp = document.createElement("span");
        tmp.className = "input-element tmp-element";
        tmp.innerHTML = inputEl.value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
        document.body.appendChild(tmp);
        var theWidth = tmp.getBoundingClientRect().width;
        document.body.removeChild(tmp);
        return theWidth;
      }

      function adjustWidthOfInput() {
        inputEl.style.width = getWidthOfInput() + "px";
      }

      adjustWidthOfInput();
      inputEl.onkeyup = adjustWidthOfInput;
</script>
</body>
</html>