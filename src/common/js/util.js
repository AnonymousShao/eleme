export function urlParse() {
   let url = window.location.search;
   var reg = /([^?&=#]+)=([^?&=#]+)/g;
   var o = {};
   url.replace(reg, function() {
       o[arguments[1]] = arguments[2];
    });
    return o;
}
