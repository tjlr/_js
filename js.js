function _(el){return document.getElementById(el);}
function _q(el){return document.querySelector(el);}
function _a(el){return document.querySelectorAll(el);}
function _cr(el){return document.createElement(''+el+'');}
function _rm(el){el.parentNode.removeChild(el);}
function _ap(el,dest){dest.appendChild(el);}
function _pp(el,dest){dest.insertBefore(el,dest.firstChild);}
function _i(el,html){el.innerHTML=html;}
function _e(el){el.innerHTML='';}
function _sa(el,at,v){el.setAttribute(at,v);}
function _x(u,c) {var x=new XMLHttpRequest();x.open("GET",u,true);x.onreadystatechange=function(){if(x.readyState==4){c.call(x.responseText);}};x.send();}
function escapeHtml(s) { s=s.replace(/&/g,'&amp;'); s=s.replace(/</g,'&lt;'); s=s.replace(/>/g,'&gt;'); s=s.replace(/"/g,'&quot;'); s=s.replace(/'/g,'&#39;'); return s}
function notice(msg) { var nt=_cr('div'); _i(nt,msg); nt.className='notice'; _pp(nt,document.body); }
function clean() { [].forEach.call(_a('.notice'),function(e){_rm(e);}); }
