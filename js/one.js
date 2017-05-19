(function(andRedEyelikeCityIndex, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeCityIndex = {
        init: function() {
            this.pgCssDesktop();
            this.rowOne();
            
          
           
              

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.cola {width:50%; float:left;} .cola.otra li {margin-bottom:2em;} .cola.otra p {display:flex; max-width:350px; margin:0;} .cola a {text-decoration:none;} ul {list-style:none;} img.spread {float:left; margin-right:15px;} .hero-two-section.hero__headline {margin:0 !important;} ul.pad-top-m {padding:0 !important;} .hero-two-section[data-is-page-title=true] .hero__headline, .hero-two-section[data-is-page-title=True] .hero__headline {font-size:2.5em; font-weight:600;}';
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
            div.innerHTML = ' <ul> <li> <img class="spread" src="//cdn.optimizely.com/img/153957092/c84d833286fd4611b66e587611edc8a4.png" alt="Fixed 1 point spreads"> <a href="#" title="Fixed 1 point spreads"> <h4>Fixed 1 point spreads</h4> <p>On major indices in market hours including the UK 100 and Germany 30</p></a> </li><li> <img class="spread" src="//cdn.optimizely.com/img/153957092/254f7eeefefa487ea5f06e9a51c89027.png" alt="Tax-efficient trading"> <a href="#" title="Tax-efficient trading"> <h4>Tax-efficient trading</h4> <p>Pay no UK Capital Gains Tax on profits or stamp Duty when Spread Betting</p></a> </li><li> <img class="spread" src="//cdn.optimizely.com/img/153957092/e069819b59474dfb897d387efe1f6763.png" alt="Award Winning Platform"> <a href="#" title="Award Winning Platform"> <h4>Award Winning Platform</h4> <p>Voted Best Spread Betting Platform 2017 ADVFN</p></a> </li><li> <img class="spread" src="//cdn.optimizely.com/img/153957092/3407bd50e311448e8e822aa345ccdbbc.png" alt="Short the markets"> <a href="#" title="Short the markets"> <h4>Short the markets</h4> <p>Trade on falling markets (going short) as well as rising markets</p></a> </li></ul> ';

            xwrapper.appendChild(div);

            //leftside
            var ylef = document.querySelectorAll('.hero__headline')[0];
            ylef.innerText = 'Tight Spreads on UK, US, EU and Asian Stock Markets';
            var dlef = document.querySelectorAll('.hero__description')[0];
            dlef.innerText = "Speculate on price movement of thousands of global Stocks with a Spread Betting or CFD Trading account.";

           

        },//rowOne

        rowTwo: function() {
            console.info('%c rowTwo \u221a', 'background:blue;color:white;');
          
        },//rowTwo

        mobile: function() {
            console.info('%c mobile \u221a', 'background:blue;color:white;');
            




        },//mobile

        mobRescue: function() {
            console.info('%c mobRescue \u221a', 'background:blue;color:white;');
           


        }//mobRescue

       

       

            
    };

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeCityIndex.init();
        }, 10);

    })();




}.call(window.andRedEyelikeCityIndex || {}));