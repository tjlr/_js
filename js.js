function _(el) {return document.getElementById(el);}
function _q(el) {return document.querySelector(el);}
function _a(el) {return document.querySelectorAll(el);}
function _cr(el) {return document.createElement(''+el+'');}
function _ap(el,dest) {_q(''+dest+'').appendChild(el);}
function _pp(el,dest) {_q(''+dest+'').insertBefore(el,_q(''+dest+'').firstChild);}
function _i(el,str) {el.innerHTML=str;}
function _e(el) {$(el).innerHTML='';}
function escapeHtml(s) { s=s.replace(/&/g,'&amp;'); s=s.replace(/</g,'&lt;'); s=s.replace(/>/g,'&gt;'); s=s.replace(/"/g,'&quot;'); s=s.replace(/'/g,'&#39;'); return s}
