!function(a,b){"use strict";var c=function(){var a=document.createElement("div");return a.style.cssText="font-size: 1rem;",/rem/.test(a.style.fontSize)},d=function(){for(var a=document.getElementsByTagName("link"),b=[],c=0;c<a.length;c++)"stylesheet"===a[c].rel.toLowerCase()&&null===a[c].getAttribute("data-norem")&&b.push(a[c].href);return b},e=function(){for(var a=0;a<n.length;a++)k(n[a],f)},f=function(a,b){if(r.push(a.responseText),s.push(b),s.length===n.length){for(var c=0;c<s.length;c++)g(r[c],s[c]);(n=o.slice(0)).length>0?(s=[],r=[],o=[],e()):h()}},g=function(a,b){for(var c,d=l(a).replace(/\/\*[\s\S]*?\*\//g,""),e=/[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:!;,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!;,.'"*()]*\}/g,f=d.match(e),g=/\d*\.?\d+rem/g,h=d.match(g),i=/(.*\/)/,j=i.exec(b)[0],k=/@import (?:url\()?['"]?([^'\)"]*)['"]?\)?[^;]*/gm;null!==(c=k.exec(a));)o.push(j+c[1]);null!==f&&0!==f.length&&(p=p.concat(f),q=q.concat(h))},h=function(){for(var a=/[\w\d\s\-\/\\%#:,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!,.'"*()]*[;}]/g,b=0;b<p.length;b++){m+=p[b].substr(0,p[b].indexOf("{")+1);for(var c=p[b].match(a),d=0;d<c.length;d++)m+=c[d],d===c.length-1&&"}"!==m[m.length-1]&&(m+="\n}")}i()},i=function(){for(var a=0;a<q.length;a++)t[a]=Math.round(parseFloat(q[a].substr(0,q[a].length-3)*u))+"px";j()},j=function(){for(var a=0;a<t.length;a++)t[a]&&(m=m.replace(q[a],t[a]));var b=document.createElement("style");b.setAttribute("type","text/css"),b.id="remReplace",document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet?b.styleSheet.cssText=m:b.appendChild(document.createTextNode(m))},k=function(b,c){try{var d=a.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP")||new ActiveXObject("Msxml2.XMLHTTP"):new XMLHttpRequest;d.open("GET",b,!0),d.onreadystatechange=function(){4===d.readyState&&c(d,b)},d.send(null)}catch(e){if(a.XDomainRequest){var f=new XDomainRequest;f.open("get",b),f.onload=function(){c(f,b)},f.onerror=function(){return!1},f.send()}}},l=function(b){return a.matchMedia||a.msMatchMedia||(b=b.replace(/@media[\s\S]*?\}\s*\}/g,"")),b};if(!c()){var m="",n=d(),o=[],p=[],q=[],r=[],s=[],t=[],u="";u=function(){var a,b=document,c=b.documentElement,d=b.body||b.createElement("body"),e=!b.body,f=b.createElement("div"),g=d.style.fontSize;return e&&c.appendChild(d),f.style.cssText="width:1em; position:absolute; visibility:hidden; padding: 0;",d.style.fontSize="1em",d.appendChild(f),a=f.offsetWidth,e?c.removeChild(d):(d.removeChild(f),d.style.fontSize=g),a}(),e()}}(window);