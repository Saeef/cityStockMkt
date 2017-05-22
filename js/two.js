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
            var mainCss = '.enterEmail {float:left; display:inline-block; margin-right:15px; line-height:46px; vertical-align:middle; padding:15px 20px !important; height:46px !important; border-radius:3px !important; border:1px solid #e6e5e5 !important; width:55%; margin-top:.8em;} .cola {width:50%; float:left;} .cola.otra li {margin-bottom:2em;} .cta-btn.blue.cta-btn.green.APPEND_MARKETING_CID_COOKIE {margin:0 0 10px 0;} .ticon {float:left; }  .tlink {text-decoration:none; margin:0;} .tlink h4 {margin:0; display:inline-block; color:#000; font-weight:600;} .tlink p {margin:0; color:#202020; display:flex;} ul.bet {list-style:none;} ul.bet li {margin-bottom:3.5em;} .retrade {height:162px !important;} @media screen and (min-width:768px) { .beneton {display:none;} }  .bet {display:block;} .cola.otra p {display:flex; max-width:350px; margin:0;} .cola a {text-decoration:none;} ul {list-style:none;} img.spread {float:left; margin-right:15px;} .hero-two-section.hero__headline {margin:0 !important;} ul.pad-top-m {padding:0 !important;} .hero-two-section[data-is-page-title=true] .hero__headline, .hero-two-section[data-is-page-title=True] .hero__headline {font-size:2.2em; font-weight:600; margin-left:0;} .cola.otra h4 {line-height:10px; margin-bottom:5px; font-weight:bold;} .cola.otra p {line-height:18px;} .cola.otra h4:hover, .cola.otra p:hover, .cola.otra a:hover, .cola.otra:hover {color:#ffffff !important;} .section-wrapper.hero-two-section {background:rgba(0,0,0,.3) url(//cdn.optimizely.com/img/153957092/43b41322f92143c196e54e528458ee39.png) no-repeat top left; !important;  } .cola.otra ul {margin-top:10px;} .cola.otra li {margin-bottom:3em; } .isMobile {display:none !important} .isDesktop {display:block !important; float:left;}  ';


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
            div.innerHTML = ' <ul> <li> <img class="isDesktop" src="//cdn.optimizely.com/img/153957092/f309ecc40c3440958b63734178a32cdb.png" alt="Open an account"><img class="isMobile" src="//cdn.optimizely.com/img/153957092/99c0366f29874314813cc8735610e611.png" alt="Open an account"> <a href="#" title="Open an account"> <h4>Open an account</h4> <p>Fill in our short online application form. It only takes a few minutes.</p></a> </li><li> <img class="isDesktop" src="//cdn.optimizely.com/img/153957092/9d016b237bcb45f4b4e2acb21889fc19.png" alt="Fund your account"><img class="isMobile" src="//cdn.optimizely.com/img/153957092/bbd6f02b222c4e30b74bbd4341088233.png" alt="Fund your account"> <a href="#" title="Fund your account"> <h4>Fund your account</h4> <p>Once your account is open, transfer funds to be able to place your first trade.</p></a> </li><li> <img class="isDesktop" src="//cdn.optimizely.com/img/153957092/36b229c4acc645488e78751c2f0533f2.png" alt="Start trading"><img class="isMobile" src="//cdn.optimizely.com/img/153957092/c1f999668d8845eb8d455368f3fe544b.png" alt="Start trading"> <a href="#" title="Start trading"> <h4>Start trading</h4> <p>You\'re ready to place your first trade with us.</p></a> </li></ul> ';

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
            var under = document.
            querySelectorAll('.section-wrapper.multi-col-section')[1];
            under.parentElement.removeChild(under);
          
        },//rowTwo

        mobile: function() {
            console.info('%c mobile \u221a', 'background:blue;color:white;');
            var mainCss = '@media screen and (max-width:780px) { .enterEmail {float:none; margin-right:0; width:100%; margin-top:1.2em; margin-bottom:1em;} .desktop-only {display:block !important; margin-top:.3em; padding-bottom:1.2em;} ul.bet {padding:0; -webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0;}  .bet {display:none;} #beneton {background-color:transparent;} ul.beneton {-webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0; padding: 0 20px;} .beneton {display:block; margin-top:2em; margin-bottom:1.5em;} .beneton li {margin-bottom:1em; list-style:none;} .beneton li img {margin-right:10px;} .cola {width:100%;} .section-wrapper.hero-two-section {background-color:rgba(0,0,0,.9);} .section-wrapper.hero-two-section div.wrapper .cola.otra {display:none;} .beneton .cola {display:none;} .beneton .cola.otra {display:block;} .cola.otra h4 {color:#000;} .cola.otra p {color:#000;} .cola.otra ul {padding-left:0; margin:0 2em;} .cola.otra ul li:first-child {margin-top:1.25em;} input.enterEmail {margin-bottom:5px; width:100%;} .blue.APPEND_MARKETING_CID_COOKIE.cta-btn {width:100%;} .utility-nav__login .cta-btn {margin-right:30px;} .isDesktop {display:none !important;} .isMobile {display:block !important; float:left;}  }';
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
            //desk/mobile classes
            var desktop = document.querySelectorAll('.isDesktop');
            var mobile = document.querySelectorAll('.isMobile');
            if(window.innerWidth > 780) {
                mobile[3].style.display = 'none';
                mobile[4].style.display = 'none';
                mobile[5].style.display = 'none';
                for (var i=0; i < desktop.length; i++) {
                    desktop[i].style.display = 'block';
                }//for
            }//if over 780
            else if (window.innerWidth < 780) {
                for(var i=0; i < mobile.length; i++) {
                    mobile[i].style.display = 'block';
                }//for


            }//else under 780







        }//mobShuffle

       
       

       

            
    };

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeCityStockMkt.init();
        }, 50);

    })();




}.call(window.andRedEyelikeCityStockMkt || {}));