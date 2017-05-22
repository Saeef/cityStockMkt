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
            this.onResize();
            
          
           
              

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.enterEmail {float:left; display:inline-block; margin-right:15px; line-height:46px; vertical-align:middle; padding:15px 20px !important; height:46px !important; border-radius:3px !important; border:1px solid #e6e5e5 !important; width:55%; margin-top:.8em;} .cola {width:50%; float:left;} .cola.otra li {margin-bottom:2em;} .cta-btn.blue.cta-btn.green.APPEND_MARKETING_CID_COOKIE {margin:0 0 10px 0;} .ticon {float:left; }  .tlink {text-decoration:none; margin:0;} .tlink h4 {margin:0; display:inline-block; color:#000; font-weight:600;} .tlink p {margin:0; color:#202020; display:flex;} ul.bet {list-style:none;} ul.bet li {margin-bottom:3.5em;} .retrade {height:162px !important;} @media screen and (min-width:768px) { .beneton {display:none;} }  .bet {display:block;} .cola.otra p {display:flex; max-width:350px; margin:0;} .cola a {text-decoration:none;} ul {list-style:none;} img.spread {float:left; margin-right:15px;} .hero-two-section.hero__headline {margin:0 !important;} ul.pad-top-m {padding:0 !important;} .hero-two-section[data-is-page-title=true] .hero__headline, .hero-two-section[data-is-page-title=True] .hero__headline {font-size:2.2em; font-weight:600; margin-left:0;} .cola.otra h4 {line-height:10px; margin-bottom:5px; font-weight:bold;} .cola.otra p {line-height:18px;} .cola.otra h4:hover, .cola.otra p:hover, .cola.otra a:hover, .cola.otra:hover {color:#ffffff !important;} .section-wrapper.hero-two-section {background:rgba(0,0,0,.3) url(//cdn.optimizely.com/img/153957092/1c40074a684348068ca89dcf367bc60e.png) no-repeat top right; !important;  } .cola.otra ul {margin-top:10px;} .cola.otra li {margin-bottom:1.25em; } .cola.otra img {display:block;}   ';


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
            div.innerHTML = ' <ul> <li> <img class="spread one" src="//cdn.optimizely.com/img/153957092/41fea2b6e74a4711a2a9a2f45290048e.png" alt="Fixed 1 point spreads"> <a href="#" title="Fixed 1 point spreads"> <h4>Fixed 1 point spreads</h4> <p>On major indices in market hours including the UK 100 and Germany 30</p></a> </li><li> <img class="spread two" src="//cdn.optimizely.com/img/153957092/0b33aca738fd47f490c798183fc7a984.png" alt="Tax-efficient trading"> <a href="#" title="Tax-efficient trading"> <h4>Tax-efficient trading</h4> <p>Pay no UK Capital Gains Tax on profits or stamp Duty when Spread Betting</p></a> </li><li> <img class="spread three" src="//cdn.optimizely.com/img/153957092/f6ae213c213747ba8b8a398c6c515e33.png" alt="Award Winning Platform"> <a href="#" title="Award Winning Platform"> <h4>Award Winning Platform</h4> <p>Voted Best Spread Betting Platform 2017 ADVFN</p></a> </li><li> <img class="spread four" src="//cdn.optimizely.com/img/153957092/1e90bd60f0ce4183be574f9aac8fca39.png" alt="Short the markets"> <a href="#" title="Short the markets"> <h4>Short the markets</h4> <p>Trade on falling markets (going short) as well as rising markets</p></a> </li></ul> ';

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
            var mainCss = '@media screen and (max-width:780px) { .enterEmail {float:none; margin-right:0; width:100%; margin-top:1.2em; margin-bottom:1em;} .desktop-only {display:block !important; margin-top:.3em; padding-bottom:1.2em;} ul.bet {padding:0; -webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0;}  .bet {display:none;} #beneton {background-color:transparent;} ul.beneton {-webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0; padding: 0 20px;} .beneton {display:block; margin-top:2em; margin-bottom:2.5em;} .beneton li {margin-bottom:1em; list-style:none;} .beneton li img {margin-right:10px;} .cola {width:100%;} .section-wrapper.hero-two-section {background-color:rgba(0,0,0,.9);} .section-wrapper.hero-two-section div.wrapper .cola.otra {display:none;} .beneton .cola {display:none;} .beneton .cola.otra {display:block;} .cola.otra h4 {color:#000;} .cola.otra p {color:#000;} .cola.otra ul {padding-left:0; margin:0 2em;} .cola.otra ul li:first-child {margin-top:1.25em;} input.enterEmail {margin-bottom:5px; width:100%;} .blue.APPEND_MARKETING_CID_COOKIE.cta-btn {width:100%;} .utility-nav__login .cta-btn {margin-right:30px;} .cola.otra img {display:none;} .cola.otra ul li {margin-bottom:2em;}  }';
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

        },//mobShuffle

        onResize: function() {
               
                // var im = document.querySelectorAll('.cola.otra img');
                // switch(window.innerWidth < 780) {
                //     case document.querySelectorAll('.cola.otra img')[0]:
                //         im.style.display = 'none';
                //         break;
                //     case im[1]:
                //         im.style.display = 'none';
                //         break;
                //     case im[2]:
                //         im.style.display = 'none';
                //         break;
                //     case im[3]:
                //         im.style.display = 'none';
                //         break;    
                //     case document.querySelectorAll('.cola.otra img')[4]:
                //         im.style.display = 'block';
                //         im.setAttribute('src','//cdn.optimizely.com/img/153957092/6c6635ea91b84ad59de31096802c2a22.png');
                //         break;
                //     case im[5]:
                //         im.style.display = 'block';
                //         im.setAttribute('src','//cdn.optimizely.com/img/153957092/6c6635ea91b84ad59de31096802c2a22.png');
                //         break;
                //     case im[6]:
                //         im.style.display = 'block';
                //         im.setAttribute('src','//cdn.optimizely.com/img/153957092/6c6635ea91b84ad59de31096802c2a22.png');
                //         break;
                //     case im[7]:
                //         im.style.display = 'block';
                //         im.setAttribute('src','//cdn.optimizely.com/img/153957092/6c6635ea91b84ad59de31096802c2a22.png');
                //         break;

                
                // }//switch

                window.addEventListener('resize', toggle,false);       

                function toggle() {

                        if (window.innerWidth < 780) {
                            var im = document.querySelectorAll('.cola.otra img');
                            for (var i=0; i < im.length; i++) {
                                if (i >= 0 && i <= 3) {
                                    im[i].style.display = "none";     
                                }//if
                                else if( i == 3) {
                                    im[i].style.display = "block";
                                    im[i].setAttribute('src','//cdn.optimizely.com/img/153957092/6c6635ea91b84ad59de31096802c2a22.png')
                                }//elseif
                                else if( i == 4) {
                                    im[i].style.display = "block";
                                    im[i].setAttribute('src','//cdn.optimizely.com/img/153957092/6c6635ea91b84ad59de31096802c2a22.png')
                                }//elseif
                                else if( i == 5) {
                                    im[i].style.display = "block";
                                    im[i].setAttribute('src','//cdn.optimizely.com/img/153957092/5939d0f734ba47a0ad3375781a114f55.png')
                                }//elseif
                                else if( i == 6) {
                                    im[i].style.display = "block";
                                    im[i].setAttribute('src','//cdn.optimizely.com/img/153957092/d65679de6cf6430c9faa040df6191eda.png')
                                }//elseif
                                else if( i == 7) {
                                    im[i].style.display = "block";
                                    im[i].setAttribute('src','//cdn.optimizely.com/img/153957092/28b16ba1dbc142788f6b58a9a624888c.png')
                                }//elseif
                            }//for  
                        }//if 780

                        else if (window.innerWidth > 780) {
                            var im = document.querySelectorAll('.cola.otra img');
                            for (var i=0; i < im.length; i++) {
                                if(i>=0 && i <=3) {
                                    im[i].style.display = 'block';
                                }
                            }//for



                        }      
                
                } toggle();//toggle   

                 
                

        }//onResize

       
       

       

            
    };

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeCityStockMkt.init();
        }, 120);

    })();




}.call(window.andRedEyelikeCityStockMkt || {}));