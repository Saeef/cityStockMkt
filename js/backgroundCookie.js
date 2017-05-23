(function() {
    var $ = window.jQuery;

    var LPHE = {
        init: function() {
            this.start();
        },
        docCookies: {
            getItem: function(sKey) {
                if (!sKey) { return null; }
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            },
            removeItem: function(name) {
              this.setItem(name,"",-1);
            }
        },
        start: function(){

            var cookieVal = LPHE.docCookies.getItem('emailSaved');
            console.log(cookieVal);
            if(cookieVal !== null){
                if (cookieVal.indexOf('@') > -1){
                    $('.control-group.input-email input[id*="txtEmailAddress"]').attr('value', cookieVal);
                    $('.control-group.input-email input[id*="txtEmailAddress"]').blur();
                    LPHE.docCookies.removeItem('emailSaved');
                  	document.cookie = 'emailSaved=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=cityindex.co.uk;';
                }
            }
            
        }
    };

    (function pollForjQuery() {
        if (window.jQuery !== undefined) {
            try {
                LPHE.init();
            } catch (err) {
                console.log('TRY ERROR: '+ err);
            }
        } else {
            setTimeout(pollForjQuery, 25);
        }
    })();

})();