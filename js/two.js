(function(andRedEyelikeCityIndex, undefined) {
    var $ = window.jQuery;
    var SL = {};
    SL.andRedEyelikeCityIndex = {
        init: function() {
            this.pgCssDesktop();
            this.rowOne();
            this.rowTwo();
            this.mobile();
            this.mobRescue();
          
           
              

        }, //init
        pgCssDesktop: function() {
            console.info('%c pgCssDesktop \u221a', 'background:blue;color:white;');
            var mainCss = '.enterEmail {float:left; display:inline-block; margin-right:15px; line-height:46px; vertical-align:middle; padding:15px 20px !important; height:46px !important; border-radius:3px !important; border:1px solid #e6e5e5 !important; width:55%; margin-top:-1px;} .cta-btn.blue.cta-btn.green.APPEND_MARKETING_CID_COOKIE {margin:0 0 10px 0;} .ticon {float:left; }  .tlink {text-decoration:none; margin:0;} .tlink h4 {margin:0; display:inline-block; color:#000; font-weight:600;} .tlink p {margin:0; color:#202020; display:flex;} ul.bet {list-style:none;} ul.bet li {margin-bottom:3.5em;} .retrade {height:162px !important;} @media screen and (min-width:768px) { .beneton {display:none;} }  .bet {display:block;} ';
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
            //bear
            var xbe = document.querySelectorAll('.col-wrapper.wrapper')[0].children[1];
            xbe.parentElement.removeChild(xbe);
            var xone = document.createElement('div');
            xone.className = 'col';
            xone.innerHTML = ' <ul class="bet"> <li> <img class="ticon" src="//cdn.optimizely.com/img/153957092/392492b278f74d9ea47973f696f2da4e.png" alt="APPLY"> <a class="tlink" href="#" title="APPLY"> <h4>APPLY</h4> <p>Complete our application form</p></a> </li><li> <img class="ticon" src="//cdn.optimizely.com/img/153957092/8eca96af181b43b9b0dc1131cf4f8673.png" alt="FUND"> <a class="tlink" href="#" title="FUND"> <h4>FUND</h4> <p>Using your card or bank transfer</p></a> </li><li> <img class="ticon" src="//cdn.optimizely.com/img/153957092/8779b71d3a0e4262a5b4be2a0563e576.png" alt="Award Winning Platform"> <a class="tlink" href="#" title=“TRADE"> <h4>TRADE</h4> <p>On our fast, reliable platforms</p></a> </li></ul> ';
            var ap = document.querySelectorAll('.col-wrapper.wrapper')[0];
            ap.appendChild(xone);

            //part2
            var email = document.createElement('input');
            email.setAttribute('type', 'text');
            email.name = 'email';
            email.className = "enterEmail";
            email.setAttribute('placeholder', 'Enter your email address');

            var rem = document.querySelectorAll('.cta-btn-group ')[0].children[1];
            rem.parentElement.removeChild(rem);
            var han = document.querySelectorAll('.cta-btn-group')[0].children[0];
            han.parentElement.insertBefore(email,han);

        },//rowOne

        rowTwo: function() {
            console.info('%c rowTwo \u221a', 'background:blue;color:white;');
            //titles
            var he = document.querySelectorAll('.multi-col__subtitle');
            var he1 = document.querySelectorAll('.multi-col__subtitle')[0];
            he1.innerText = "Open an account";
            var he2 = document.querySelectorAll('.multi-col__subtitle')[1];
            he2.innerText = "Fund your account";
            var he3 = document.querySelectorAll('.multi-col__subtitle')[2];
            he3.innerText = "Start trading";
            //desc
            var de = document.querySelectorAll('.multi-col__description');
            var de1 = document.querySelectorAll('.multi-col__description')[0];
            de1.innerText = "You can apply for an account right now by filling in our short online application form. It only takes a few minutes";
            var de2 = document.querySelectorAll('.multi-col__description')[1];
            de2.innerText = "Once your account is open, you need to transfer funds into it to be able to place your first trade.";
            var de3 = document.querySelectorAll('.multi-col__description')[2];
            de3.innerText = "You're ready to place your first trade with us.";

            //same height
            var xc = document.querySelectorAll('.col');
            var xcone = document.querySelectorAll('.col')[2];
            xcone.className += " retrade";
            var xctwo = document.querySelectorAll('.col')[3];
            xctwo.className += " retrade";
            var xcthree = document.querySelectorAll('.col')[4];
            xcthree.className += " retrade";

            //undesire out
            var ee = document.querySelectorAll('.section-wrapper.multi-col-section')[0]
            ee.parentElement.removeChild(ee);

        },//rowTwo

        mobile: function() {
            console.info('%c mobile \u221a', 'background:blue;color:white;');
            var mainCss = '@media screen and (max-width:780px) { .enterEmail {float:none; margin-right:0; width:100%; margin-top:1.2em; margin-bottom:1em;} .desktop-only {display:block !important; margin-top:.3em; padding-bottom:1.2em;} ul.bet {padding:0; -webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0;}  .bet {display:none;} #beneton {background-color:transparent;} ul.beneton {-webkit-padding-start:0; -moz-padding-start:0; -o-padding-start:0; -ms-padding-start:0; padding: 0 20px;} .beneton {display:block; margin-top:2em; margin-bottom:2.5em;} .beneton li {margin-bottom:1em; list-style:none;} .beneton li img {margin-right:10px;} }';
            var head = document.getElementsByTagName('head')[0];

            function addcss(css) {
                var s = document.createElement('style');
                s.setAttribute('type', 'text/css');
                s.appendChild(document.createTextNode(css));
                head.appendChild(s);
            }
            addcss(mainCss);





        },//mobile

        mobRescue: function() {
            console.info('%c mobRescue \u221a', 'background:blue;color:white;');
            var rescue = document.querySelectorAll('.col')[1];
            var resclone = rescue.cloneNode(true);
            var divclone = document.createElement('div');
            divclone.id = "beneton";
            divclone.className = "beneton";
            divclone.appendChild(resclone);
            //bet displaynone
            //hand
            var g = document.querySelectorAll('.section-wrapper.hero-two-section')[0];
            g.parentElement.insertBefore(divclone,g.nextSibling);
            var be = document.getElementById('beneton');
            be.children[0].children[0].className = "beneton";


        }//mobRescue

       

       

            
    };

    (function() {

        setTimeout(function() {
            SL.andRedEyelikeCityIndex.init();
        }, 10);

    })();




}.call(window.andRedEyelikeCityIndex || {}));