(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"en-US":{"loading":"Loading...","change_language":"Vers\xe3o em portugu\xeas","about-label":"About","subtitle":"Make your references time-proof!","style":"Select a style","editor":"Copy references from your work and paste here","btn":"Convert my references","no_style_selected":"Please select a style","restart":"Start again","about":"<p>Citation of electronic documents is a valuable resource for scientific production. However, content published in internet can be changed or go offline. The <wm>Wayback Machine</wm> service, provided by <ia>Internet Archive</ia>, helps to solve that problem by saving web pages and making them available for public access.</p><p><strong>Wayback References</strong> gets URLs used in user references list and checks whether they were archived by Wayback Machine, replacing them with a link to snapshot. As the service periodically saves pages, the app also gets the access date from each reference and looks for the archived snapshot with the closest timestamp to that date.</p><p>For references using <doi>DOI</doi>, URL is not changed because DOI system makes sure the link will always direct to the right document.</p>","created-by":"Created by","github":"See on GitHub","results":"Found {TR} reference(s). {RWU} have URL ({RWD} have DOI) and {RWOU} don\'t have.","copy":"Copy references to clipboard","copied":"Successfully copied"},"pt-BR":{"loading":"Carregando...","change_language":"English version","about-label":"Sobre","subtitle":"Torne as suas refer\xeancias \xe0 prova do tempo!","style":"Selecione um estilo","editor":"Copie as refer\xeancias do arquivo do seu trabalho e cole aqui","btn":"Converter minhas refer\xeancias","no_style_selected":"Por favor, selecione um estilo","restart":"Voltar para o in\xedcio","about":"<p>A cita\xe7\xe3o de documentos eletr\xf4nicos \xe9 um recurso valioso para a produ\xe7\xe3o cient\xedfica. Por\xe9m, conte\xfados publicados na internet podem ser alterados ou sair do ar. O servi\xe7o <wm>Wayback Machine</wm>, mantido pelo <ia>Internet Archive</ia>, ajuda a resolver esse problema salvando p\xe1ginas web e disponibilizando-as para consulta p\xfablica.</p><p>O <strong>Wayback References</strong> obt\xe9m as URLs utilizadas na lista de refer\xeancias do usu\xe1rio e verifica se foram arquivadas pelo Wayback Machine, substituindo-as pelo link para uma c\xf3pia. Como o servi\xe7o salva p\xe1ginas periodicamente, o aplicativo tamb\xe9m obt\xe9m a data de acesso de cada refer\xeancia e procura pela c\xf3pia que tenha sido arquivada no momento mais pr\xf3ximo \xe0quela data.</p><p>No caso das refer\xeancias que utilizam <doi>DOI</doi>, a URL n\xe3o \xe9 alterada, pois o sistema DOI garante que o endere\xe7o ser\xe1 sempre direcionado para o documento correto.</p>","created-by":"Criado por","github":"Veja no GitHub","results":"{TR} refer\xeancia(s) encontrada(s), sendo {RWU} com URL ({RWD} com DOI) e {RWOU} sem URL.","copy":"Copiar refer\xeancias","copied":"Copiado com sucesso"}}')},110:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(60),s=a.n(r),o=(a(110),a(22)),i=a.n(o),l=a(48),d=a(16),u=a(100);function b(e){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(i.a.mark((function e(t){var a,n,c,r,s,o,l,b,p,j,h,f,O,m,v,g,x,y,k,S,R,w,C=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=C.length>1&&void 0!==C[1]?C[1]:navigator.language,n=C.length>2&&void 0!==C[2]?C[2]:"ABNT",c=C.length>3&&void 0!==C[3]&&C[3],(r=function(e){return c&&console.log(e)})("Loading..."),a||(a="en-US"),r("locale = "+a),s=t.split(/\r?\n/).filter((function(e){return e.match(/[^ ]+/)})),o=[],r("Found ".concat(s.length," reference(s).")),l=0,b=0,p=0,j=Object(u.a)(s),e.prev=14,j.s();case 16:if((h=j.n()).done){e.next=51;break}if(f=h.value,O=void 0,m=/https?:\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?/i.exec(f),v=/doi.org/.exec(m),!m||v){e.next=47;break}if(g=m[0].slice(0,-1),l++,x=void 0,"ABNT"==n&&(x=f.match(/\d{1,2}\s+\w+\.?\s+\d{4}/gi),a="pt-BR"),"APA"==n&&(x=f.match(/\d{4},?\s+\w+\s+\d{1,2}/gi)),"ISO"==n&&(x=f.match(/\d{1,2}\s+\w+\s+\d{4}/gi)),"Chicago"==n&&(x=f.match(/\w+\s+\d{1,2},?\s+\d{4}/gi)),y=void 0,!x){e.next=35;break}return e.delegateYield(i.a.mark((function e(){var t,n,c,r,s,o,l,u,b,p,j,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.map((function(e){return e})).pop().toString(),n=t.split(/\s+/),c=Object(d.a)(n,3),r=c[0],s=c[1],o=c[2],l=s.substr(0,3),(u=[])["pt-BR"]=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],u["en-US"]=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],b=u[a].findIndex((function(e){return e==l}))+1,p=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.map((function(e){return("0"+e).slice(-2)}))}(b,r),j=Object(d.a)(p,2),b=j[0],r=j[1],h="".concat(o).concat(b).concat(r),e.next=15,fetch("https://archive.org/wayback/available?url=".concat(g,"&timestamp=").concat(h));case 15:y=e.sent;case 16:case"end":return e.stop()}}),e)}))(),"t0",33);case 33:e.next=38;break;case 35:return e.next=37,fetch("https://archive.org/wayback/available?url=".concat(g));case 37:y=e.sent;case 38:return e.next=40,y.json();case 40:k=e.sent,S=k.archived_snapshots,R=0!==Object.keys(S).length?S.closest.url:g,w=JSON.parse(JSON.stringify(f)),O=w.replace(g,R),e.next=48;break;case 47:v?(l++,b++,O=f):(p++,O=f);case 48:o.push(O);case 49:e.next=16;break;case 51:e.next=56;break;case 53:e.prev=53,e.t1=e.catch(14),j.e(e.t1);case 56:return e.prev=56,j.f(),e.finish(56);case 59:return r("".concat(l," reference(s) have URL.")),r("".concat(p," reference(s) have no URL.")),e.abrupt("return",{refs:o.join("<p>&nbsp;</p>"),TR:s.length,RWU:l,RWD:b,RWOU:p});case 62:case"end":return e.stop()}}),e,null,[[14,53,56,59]])})))).apply(this,arguments)}var j=a(215),h=a(8),f=a(216),O=a(49),m=a(101),v=a(27),g=(a(207),a(103)),x=a(0),y=Object(x.jsx)(j.a,{id:"editor"});function k(){var e=Object(n.useState)((function(){return v.EditorState.createEmpty()})),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(n.useRef)(null),s=Object(n.useState)(""),o=Object(d.a)(s,2),u=o[0],p=o[1],k=Object(n.useState)(""),S=Object(d.a)(k,2),R=S[0],w=S[1],C=Object(n.useState)(navigator.language),U=Object(d.a)(C,2),N=U[0],W=U[1],D=Object(n.useState)(""),L=Object(d.a)(D,2),q=L[0],A=L[1],I=Object(n.useState)("btn disabled"),T=Object(d.a)(I,2),_=T[0],B=T[1],E=Object(n.useState)(!1),M=Object(d.a)(E,2),P=M[0],F=M[1],H=Object(n.useState)(!0),J=Object(d.a)(H,2),z=J[0],V=J[1];Object(n.useEffect)((function(){V(!a.getCurrentContent().getPlainText()),B(z?"btn disabled":"btn")}),[a]),Object(n.useEffect)((function(){return F(!1)}),[R]);var G=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=18;break}if(u){e.next=6;break}A(Object(x.jsx)(j.a,{id:"no_style_selected"})),document.querySelector(".editor").style.borderColor="red",e.next=18;break;case 6:return document.querySelector("#first-step").style.display="none",document.querySelector("#second-step").style.display="block",n=a.getCurrentContent(),r=Object(g.a)(n),c((function(){return v.EditorState.createEmpty()})),V(!0),A(""),F(!0),e.next=16,b(r,N,u);case 16:s=e.sent,w(Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"status",children:Object(x.jsx)(j.a,{id:"results",values:{TR:s.TR,RWU:s.RWU,RWD:s.RWD,RWOU:s.RWOU}})}),Object(x.jsx)("div",{id:"results",className:"editor",dangerouslySetInnerHTML:{__html:s.refs}})]}));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=Object(h.c)(),K=Object(f.a)({locale:N,defaultLocale:"en-US",messages:m[N]},Y);return Object(x.jsx)(O.b,{value:K,children:Object(x.jsxs)("div",{children:[Object(x.jsx)("header",{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"Wayback References"}),Object(x.jsxs)("div",{className:"menu",children:[Object(x.jsx)("span",{onClick:function(e){W("pt-BR"==N?"en-US":"pt-BR")},children:Object(x.jsx)(j.a,{id:"change_language"})}),Object(x.jsx)("a",{href:"#about",onClick:function(e){e.preventDefault(),document.querySelector("#about").scrollIntoView({behavior:"smooth"})},children:Object(x.jsx)(j.a,{id:"about-label"})})]})]})}),Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{id:"first-step",children:[Object(x.jsx)("h2",{children:Object(x.jsx)(j.a,{id:"subtitle"})}),Object(x.jsx)("div",{className:"editor",onClick:function(e){return r.current.focus()},children:Object(x.jsx)(v.Editor,{ref:r,editorState:a,onChange:c,placeholder:y})}),Object(x.jsxs)("p",{children:[Object(x.jsx)(j.a,{id:"style"}),":",Object(x.jsxs)("select",{onChange:function(e){return p(e.target.value)},children:[Object(x.jsx)("option",{value:""}),Object(x.jsx)("option",{value:"ABNT",children:"ABNT"}),Object(x.jsx)("option",{value:"APA",children:"APA"}),Object(x.jsx)("option",{value:"Chicago",children:"Chicago"}),Object(x.jsx)("option",{value:"ISO",children:"ISO"})]}),Object(x.jsx)("span",{className:"error",children:q})]}),Object(x.jsx)("div",{className:"btn-parent",children:Object(x.jsx)("span",{className:_,onClick:G,children:Object(x.jsx)(j.a,{id:"btn"})})})]}),Object(x.jsxs)("div",{id:"second-step",children:[P&&Object(x.jsxs)("div",{className:"loading",children:[Object(x.jsx)("div",{id:"loader"}),Object(x.jsx)("p",{children:Object(x.jsx)(j.a,{id:"loading"})})]}),R,Object(x.jsxs)("div",{className:"btn-parent",children:[!P&&Object(x.jsx)("span",{className:"btn",onClick:function(e){var t=document.querySelector("#results").innerHTML;function a(e){e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",t),e.preventDefault()}document.addEventListener("copy",a),document.execCommand("copy"),document.removeEventListener("copy",a),alert(K.formatMessage({id:"copied"}))},children:Object(x.jsx)(j.a,{id:"copy"})}),Object(x.jsx)("span",{className:"btn",onClick:function(e){document.querySelector("#first-step").style.display="block",document.querySelector("#second-step").style.display="none",document.querySelector(".editor").style.borderColor="#ccc",w("")},children:Object(x.jsx)(j.a,{id:"restart"})})]})]})]})}),Object(x.jsx)("section",{id:"about",children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("hr",{}),Object(x.jsx)(j.a,{id:"about",values:{p:function(e){return Object(x.jsx)("p",{children:e})},strong:function(e){return Object(x.jsx)("strong",{children:e})},wm:function(e){return Object(x.jsx)("a",{href:"https://web.archive.org/",target:"_blank",children:e})},ia:function(e){return Object(x.jsx)("a",{href:"https://archive.org/",target:"_blank",children:e})},doi:function(e){return Object(x.jsx)("a",{href:"https://www.doi.org/",target:"_blank",children:e})}}}),Object(x.jsx)("hr",{})]})}),Object(x.jsx)("footer",{children:Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("p",{children:[Object(x.jsx)(j.a,{id:"created-by"})," ",Object(x.jsx)("a",{href:"https://fsaldanha.com.br/",target:"_blank",children:"Felipe Saldanha"})]}),Object(x.jsx)("p",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)(j.a,{id:"github"})})})]})})]})})}var S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,217)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),S()}},[[211,1,2]]]);
//# sourceMappingURL=main.df81daec.chunk.js.map