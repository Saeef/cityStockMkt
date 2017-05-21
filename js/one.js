(function(andRedEyelikeCityStockMkt, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeCityStockMkt = {
        init: function() {
            this.pgCssDesktop();
            this.rowOne();
            this.email();
            this.mobile();
            this.mobShuffle();
            
          
           
              

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.enterEmail {float:left; display:inline-block; margin-right:15px; line-height:46px; vertical-align:middle; padding:15px 20px !important; height:46px !important; border-radius:3px !important; border:1px solid #e6e5e5 !important; width:55%; margin-top:.8em;} .cola {width:50%; float:left;} .cola.otra li {margin-bottom:2em;} .cta-btn.blue.cta-btn.green.APPEND_MARKETING_CID_COOKIE {margin:0 0 10px 0;} .ticon {float:left; }  .tlink {text-decoration:none; margin:0;} .tlink h4 {margin:0; display:inline-block; color:#000; font-weight:600;} .tlink p {margin:0; color:#202020; display:flex;} ul.bet {list-style:none;} ul.bet li {margin-bottom:3.5em;} .retrade {height:162px !important;} @media screen and (min-width:768px) { .beneton {display:none;} }  .bet {display:block;} .cola.otra p {display:flex; max-width:350px; margin:0;} .cola a {text-decoration:none;} ul {list-style:none;} img.spread {float:left; margin-right:15px;} .hero-two-section.hero__headline {margin:0 !important;} ul.pad-top-m {padding:0 !important;} .hero-two-section[data-is-page-title=true] .hero__headline, .hero-two-section[data-is-page-title=True] .hero__headline {font-size:2.2em; font-weight:600; margin-left:0;} .cola.otra h4 {line-height:10px; margin-bottom:5px; font-weight:bold;} .cola.otra p {line-height:18px;} .cola.otra h4:hover, .cola.otra p:hover, .cola.otra a:hover, .cola.otra:hover {color:#ffffff !important;} .section-wrapper.hero-two-section {background:rgba(0,0,0,.3) url(//cdn.optimizely.com/img/153957092/43b41322f92143c196e54e528458ee39.png) no-repeat top left; !important;  } .cola.otra ul {margin-top:10px;} .cola.otra li {margin-bottom:1.25em; }  ';


            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);
        }, //pgCssDesktop
       
 
        rowOne: function() {
            console.info('%c rowOne \u221a', 'background:blue;color:white;');
            var cola = document.querySelectorAll('.col')[0];
            cola.className = 'cola';
            var xwrapper = document.querySelectorAll('.col-wrapper.wrapper')[0];
            //div
            var div = document.createElement('div');
            div.className = "cola otra";
            div.innerHTML = ' <ul> <li> <img class="spread" src="//cdn.optimizely.com/img/153957092/52b38d9275414c69afc689b528b09263.png" alt="Fixed 1 point spreads"> <a href="#" title="Fixed 1 point spreads"> <h4>Fixed 1 point spreads</h4> <p>On major indices in market hours including the UK 100 and Germany 30</p></a> </li><li> <img class="spread" src="//cdn.optimizely.com/img/153957092/254f7eeefefa487ea5f06e9a51c89027.png" alt="Tax-efficient trading"> <a href="#" title="Tax-efficient trading"> <h4>Tax-efficient trading</h4> <p>Pay no UK Capital Gains Tax on profits or stamp Duty when Spread Betting</p></a> </li><li> <img class="spread" src="//cdn.optimizely.com/img/153957092/e069819b59474dfb897d387efe1f6763.png" alt="Award Winning Platform"> <a href="#" title="Award Winning Platform"> <h4>Award Winning Platform</h4> <p>Voted Best Spread Betting Platform 2017 ADVFN</p></a> </li><li> <img class="spread" src="//cdn.optimizely.com/img/153957092/3407bd50e311448e8e822aa345ccdbbc.png" alt="Short the markets"> <a href="#" title="Short the markets"> <h4>Short the markets</h4> <p>Trade on falling markets (going short) as well as rising markets</p></a> </li></ul> ';

            xwrapper.appendChild(div);

            //leftside
            var ylef = document.querySelectorAll('.hero__headline')[0];
            ylef.innerText = 'Tight Spreads on UK, US, EU and Asian Stock Markets';
            var dlef = document.querySelectorAll('.hero__description')[0];
            dlef.innerText = "Speculate on price movement of thousands of global Stocks with a Spread Betting or CFD Trading account.";

           

        },//rowOne

        email: function() {
            console.info('%c email \u221a', 'background:blue;color:white;');
            var email = document.createElement('input');
            email.setAttribute('type', 'text');
            email.name = 'email';
            email.className = "enterEmail";
            email.setAttribute('placeholder', 'Enter your email address');
            var trade = document.
            querySelectorAll('.blue.APPEND_MARKETING_CID_COOKIE.cta-btn ')[0];
            trade.parentElement.insertBefore(email,trade);
            var demo = document.querySelectorAll('.APPEND_MARKETING_CID_COOKIE')[1];
            demo.style.textDecoration = 'underline';

            //undersires
            var under = document.querySelectorAll('.section-wrapper.multi-col-section')[0];
            under.parentElement.removeChild(under);
          
        },//rowTwo

        mobile: function() {
            console.info('%c mobile \u221a', 'background:blue;color:white;');
            var mainCss = '@media screen and (max-width:780px) { .enterEmail {float:none; margin-right:0; width:100%; margin-top:1.2em; margin-bottom:1em;} .desktop-only {display:block !important; margin-top:.3em; padding-bottom:1.2em;} ul.bet {padding:0; -webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0;}  .bet {display:none;} #beneton {background-color:transparent;} ul.beneton {-webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0; padding: 0 20px;} .beneton {display:block; margin-top:2em; margin-bottom:2.5em;} .beneton li {margin-bottom:1em; list-style:none;} .beneton li img {margin-right:10px;} .cola {width:100%;} .section-wrapper.hero-two-section {background-color:rgba(0,0,0,.9);} .section-wrapper.hero-two-section div.wrapper .cola.otra {display:none;} .beneton .cola {display:none;} .beneton .cola.otra {display:block;} .cola.otra h4 {color:#000;} .cola.otra p {color:#000;} .cola.otra ul {padding-left:0; margin:0 2em;} .cola.otra ul li:first-child {margin-top:1.25em;} input.enterEmail {margin-bottom:5px;} }';
            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);


        },//mobile

        mobShuffle: function() {
            console.info('%c mobShuffle \u221a', 'background:blue;color:white;');
            var clone = document.
            querySelectorAll('.section-wrapper.hero-two-section .wrapper')[0].cloneNode(true);
            var shuff = document.createElement('div');
            shuff.className = "beneton";
            shuff.appendChild(clone);
            var par = document.querySelectorAll('.page-content')[0];
            var han = document.querySelectorAll('.section-wrapper.hero-two-section')[0];
            par.insertBefore(shuff,han.nextSibling);




        }//mobShuffle

       
       

       

            
    };

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeCityStockMkt.init();
        }, 50);

    })();




}.call(window.andRedEyelikeCityStockMkt || {}));