(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e){e.exports=JSON.parse('{"en-US":{"loading":"Loading...","change_language":"Vers\xe3o em portugu\xeas","about-label":"About","subtitle":"Do not let your online references go offline.{br}Just 3 steps to make them last forever!","step1":"Copy your reference list from your Word file.","step2":"Paste your list and click on \u201cImmortalize my references\u201d.","step3":"Your list was updated. Now your references last forever!","show_explanation":"Show explanation","hide_explanation":"Hide explantion","style":"Select a style","editor":"Copy references from your work and paste here","btn":"Immortalize my references","no_style_selected":"Please select a style","restart":"Start again","about":"<p>Citation of electronic documents is a valuable resource for scientific production. However, content published in internet can be changed or go offline. The <wm>Wayback Machine</wm> service, provided by <ia>Internet Archive</ia>, helps to solve that problem by saving web pages and making them available for public access.</p><p><strong>Wayback References</strong> gets URLs used in user reference list and checks whether they were archived by Wayback Machine, replacing them with a link to a snapshot (if there is any). Since the service periodically saves pages, the app also gets the access date from each reference and looks for the archived snapshot with the closest timestamp to that date.</p><p>For references using <doi>DOI</doi>, URL is not changed because DOI system makes sure the link will always direct to the right document.</p>","created-by":"Created by","github":"See on GitHub","results":"Found {TR} reference(s). {RWU} have URL ({RWD} have DOI) and {RWOU} don\'t have.","copy":"Copy references to clipboard","copied":"Successfully copied"},"pt-BR":{"loading":"Carregando...","change_language":"English version","about-label":"Sobre","subtitle":"N\xe3o deixe suas refer\xeancias online sa\xedrem do ar.{br}Em 3 passos, elas v\xe3o durar para sempre!","step1":"Copie a lista de refer\xeancias do seu arquivo em Word.","step2":"Cole sua lista e clique em \u201cImortalizar minhas refer\xeancias\u201d.","step3":"Copie e cole de volta no Word. Agora suas refer\xeancias duram para sempre!","show_explanation":"Mostrar explica\xe7\xe3o","hide_explanation":"Ocultar explica\xe7\xe3o","style":"Selecione um estilo","editor":"Copie as refer\xeancias do arquivo do seu trabalho e cole aqui","btn":"Imortalizar minhas refer\xeancias","no_style_selected":"Por favor, selecione um estilo","restart":"Voltar para o in\xedcio","about":"<p>A cita\xe7\xe3o de documentos eletr\xf4nicos \xe9 um recurso valioso para a produ\xe7\xe3o cient\xedfica. Por\xe9m, conte\xfados publicados na internet podem ser alterados ou sair do ar. O servi\xe7o <wm>Wayback Machine</wm>, mantido pelo <ia>Internet Archive</ia>, ajuda a resolver esse problema salvando p\xe1ginas web e disponibilizando-as para consulta p\xfablica.</p><p>O <strong>Wayback References</strong> obt\xe9m as URLs utilizadas na lista de refer\xeancias do usu\xe1rio e verifica se foram arquivadas pelo Wayback Machine, substituindo-as pelo link para uma c\xf3pia (se houver). Como o servi\xe7o salva p\xe1ginas periodicamente, o aplicativo tamb\xe9m obt\xe9m a data de acesso de cada refer\xeancia e procura pela c\xf3pia que tenha sido arquivada no momento mais pr\xf3ximo \xe0quela data.</p><p>No caso das refer\xeancias que utilizam <doi>DOI</doi>, a URL n\xe3o \xe9 alterada, pois o sistema DOI garante que o endere\xe7o ser\xe1 sempre direcionado para o documento correto.</p>","created-by":"Criado por","github":"Veja no GitHub","results":"{TR} refer\xeancia(s) encontrada(s), sendo {RWU} com URL ({RWD} com DOI) e {RWOU} sem URL.","copy":"Copiar para \xe1rea de transfer\xeancia","copied":"Copiado com sucesso"}}')},110:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),n=a(60),s=a.n(n),i=(a(110),a(22)),o=a.n(i),l=a(48),d=a(14),u=a(100);function h(e){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(o.a.mark((function e(t){var a,c,r,n,s,i,l,h,b,p,j,m,v,f,O,x,g,y,w,k,S,R,E=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=E.length>1&&void 0!==E[1]?E[1]:navigator.language,c=E.length>2&&void 0!==E[2]?E[2]:"ABNT",r=E.length>3&&void 0!==E[3]&&E[3],(n=function(e){return r&&console.log(e)})("Loading..."),a||(a="en-US"),n("locale = "+a),s=t.split(/\r?\n/).filter((function(e){return e.match(/[^ ]+/)})),i=[],n("Found ".concat(s.length," reference(s).")),l=0,h=0,b=0,p=Object(u.a)(s),e.prev=14,p.s();case 16:if((j=p.n()).done){e.next=51;break}if(m=j.value,v=void 0,f=/https?:\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?/i.exec(m),O=/doi.org/.exec(f),!f||O){e.next=47;break}if(x=f[0].slice(0,-1),l++,g=void 0,"ABNT"==c&&(g=m.match(/\d{1,2}\s+\w+\.?\s+\d{4}/gi),a="pt-BR"),"APA"==c&&(g=m.match(/\d{4},?\s+\w+\s+\d{1,2}/gi)),"ISO"==c&&(g=m.match(/\d{1,2}\s+\w+\s+\d{4}/gi)),"Chicago"==c&&(g=m.match(/\w+\s+\d{1,2},?\s+\d{4}/gi)),y=void 0,!g){e.next=35;break}return e.delegateYield(o.a.mark((function e(){var t,c,r,n,s,i,l,u,h,b,p,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g.map((function(e){return e})).pop().toString(),c=t.split(/\s+/),r=Object(d.a)(c,3),n=r[0],s=r[1],i=r[2],l=s.substr(0,3),(u=[])["pt-BR"]=["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],u["en-US"]=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],h=u[a].findIndex((function(e){return e==l}))+1,b=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.map((function(e){return("0"+e).slice(-2)}))}(h,n),p=Object(d.a)(b,2),h=p[0],n=p[1],j="".concat(i).concat(h).concat(n),e.next=15,fetch("https://archive.org/wayback/available?url=".concat(x,"&timestamp=").concat(j));case 15:y=e.sent;case 16:case"end":return e.stop()}}),e)}))(),"t0",33);case 33:e.next=38;break;case 35:return e.next=37,fetch("https://archive.org/wayback/available?url=".concat(x));case 37:y=e.sent;case 38:return e.next=40,y.json();case 40:w=e.sent,k=w.archived_snapshots,S=0!==Object.keys(k).length?k.closest.url:x,R=JSON.parse(JSON.stringify(m)),v=R.replace(x,S),e.next=48;break;case 47:O?(l++,h++,v=m):(b++,v=m);case 48:i.push(v);case 49:e.next=16;break;case 51:e.next=56;break;case 53:e.prev=53,e.t1=e.catch(14),p.e(e.t1);case 56:return e.prev=56,p.f(),e.finish(56);case 59:return n("".concat(l," reference(s) have URL.")),n("".concat(b," reference(s) have no URL.")),e.abrupt("return",{refs:i.join("<p>&nbsp;</p>"),TR:s.length,RWU:l,RWD:h,RWOU:b});case 62:case"end":return e.stop()}}),e,null,[[14,53,56,59]])})))).apply(this,arguments)}var p=a(215),j=a(8),m=a(216),v=a(49),f=a(101),O=a(27),x=(a(207),a(103));function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var w=c.createElement("g",null,c.createElement("path",{d:"m459.687 67.861-60.109-60.108c-5-4.999-11.647-7.753-18.719-7.753h-194.261c-14.597 0-26.472 11.875-26.472 26.472v58.293h-101.12c-14.597 0-26.472 11.875-26.472 26.472v169.736c0 12.858 20 12.84 20 0v-169.737c0-3.568 2.903-6.472 6.472-6.472h190.02v44.703c0 14.597 11.876 26.472 26.473 26.472h44.351v297.563c0 3.568-2.903 6.472-6.472 6.472h-254.372c-3.568 0-6.472-2.903-6.472-6.472v-110.658c0-12.858-20-12.84-20 0v110.658c0 14.597 11.875 26.472 26.472 26.472h254.371c14.597 0 26.472-11.875 26.472-26.472v-58.293h101.119c14.597 0 26.472-11.875 26.472-26.472v-302.157c-.001-7.071-2.754-13.719-7.753-18.719zm-24.971 3.315h-31.627c-3.568 0-6.472-2.903-6.472-6.473v-31.626zm-165.691 78.292v-31.627l38.098 38.098h-31.625c-3.569 0-6.473-2.903-6.473-6.471zm171.943 245.741h-101.119v-223.864c0-7.072-2.754-13.72-7.754-18.719l-60.107-60.108c-5-4.999-11.647-7.753-18.719-7.753h-73.143v-58.293c0-3.568 2.903-6.472 6.472-6.472h190.02v44.703c0 14.597 11.875 26.473 26.472 26.473h44.351v297.562c-.002 3.568-2.905 6.471-6.473 6.471z"}),c.createElement("path",{d:"m99.411 213.327h69.067c12.84 0 12.858-20 0-20h-69.067c-12.84 0-12.858 20 0 20z"}),c.createElement("path",{d:"m99.411 255.219h172.466c12.84 0 12.858-20 0-20h-172.466c-12.84 0-12.858 20 0 20z"}),c.createElement("path",{d:"m99.411 299.717h172.466c12.84 0 12.858-20 0-20h-172.466c-12.84 0-12.858 20 0 20z"}),c.createElement("path",{d:"m99.411 342.911h172.466c12.84 0 12.858-20 0-20h-172.466c-12.84 0-12.858 20 0 20z"}),c.createElement("path",{d:"m99.411 386.105h172.466c12.84 0 12.858-20 0-20h-172.466c-12.84 0-12.858 20 0 20z"}),c.createElement("path",{d:"m42.533 331.718c4.902 0 9.15-3.701 9.887-8.533 1.403-9.198-10.063-15.099-16.779-8.705-6.397 6.089-1.947 17.238 6.892 17.238z"}));function k(e,t){var a=e.title,r=e.titleId,n=y(e,["title","titleId"]);return c.createElement("svg",g({id:"Capa_1",enableBackground:"new 0 0 499.974 499.974",height:512,viewBox:"0 0 499.974 499.974",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),a?c.createElement("title",{id:r},a):null,w)}var S=c.forwardRef(k);a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var C=c.createElement("g",null,c.createElement("path",{d:"m425.529 53.349c3.926 0 7.228-3.056 7.478-7.028l2.015-31.984c.26-4.134-2.88-7.696-7.014-7.957-4.13-.239-7.696 2.881-7.957 7.014l-2.015 31.984c-.287 4.3 3.185 7.99 7.493 7.971z"}),c.createElement("path",{d:"m486.247 26.101c1.401 1.162 3.099 1.729 4.788 1.729 2.153 0 4.291-.923 5.774-2.709l10.653-12.829c2.646-3.187 2.208-7.915-.979-10.562-3.187-2.644-7.916-2.208-10.562.979l-10.652 12.831c-2.646 3.186-2.208 7.915.978 10.561z"}),c.createElement("path",{d:"m450.949 68.612c1.4 1.163 3.098 1.729 4.787 1.729 2.153 0 4.291-.923 5.774-2.709l12.466-15.014c2.646-3.187 2.208-7.915-.979-10.562-3.186-2.646-7.915-2.207-10.561.979l-12.466 15.015c-2.646 3.187-2.208 7.916.979 10.562z"}),c.createElement("path",{d:"m470.727 91.019c.987 3.231 3.958 5.312 7.171 5.312.725 0 1.463-.106 2.192-.329l26.189-7.996c3.962-1.209 6.193-5.401 4.983-9.363s-5.403-6.192-9.363-4.982l-26.189 7.996c-3.962 1.208-6.193 5.4-4.983 9.362z"}),c.createElement("path",{d:"m86.541 321.862c-4.121-.236-7.696 2.88-7.957 7.014l-2.014 31.984c-.287 4.3 3.184 7.99 7.493 7.972 3.927 0 7.228-3.055 7.478-7.028l2.014-31.984c.26-4.135-2.88-7.697-7.014-7.958z"}),c.createElement("path",{d:"m60.642 306.585c-3.186-2.646-7.915-2.208-10.561.979l-45.951 55.34c-2.646 3.187-2.208 7.915.979 10.562 1.4 1.163 3.098 1.729 4.787 1.729 2.153 0 4.291-.923 5.774-2.709l45.951-55.34c2.646-3.186 2.208-7.915-.979-10.561z"}),c.createElement("path",{d:"m9.692 301.537 26.189-7.996c3.962-1.209 6.193-5.401 4.983-9.363s-5.402-6.192-9.363-4.982l-26.189 7.996c-3.962 1.209-6.193 5.401-4.983 9.363.987 3.231 3.958 5.312 7.171 5.312.725-.001 1.463-.108 2.192-.33z"}),c.createElement("path",{d:"m477.172 346.614c-7.463 0-14.379 2.367-20.054 6.379-1.985-17.815-17.308-31.722-35.862-31.722-8.102 0-15.587 2.65-21.617 7.12-1.196-7.024-4.485-13.352-9.202-18.349h5.874c36.334 1.896 74.949-36.863 72.469-73.172v-94.547c0-40.072-32.464-72.673-72.368-72.673h-278.21c-39.904 0-72.369 32.601-72.369 72.673v94.564c-2.419 36.502 36.225 75.016 72.469 73.154h19.404c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-19.324c-29.094 1.164-59.273-29.215-57.55-58.172v-94.547c0-31.801 25.735-57.673 57.369-57.673h278.21c31.633 0 57.368 25.872 57.368 57.673v94.529c1.718 29.13-28.605 59.362-57.55 58.189h-52.26v-19.938h42.203c23.755 1.738 48.247-23.063 46.795-46.319v-76.473c0-25.688-21.098-46.588-47.03-46.588h-212.319c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h212.319c17.662 0 32.03 14.17 32.03 31.588v76.433c.855 15.989-15.712 32.484-31.73 31.361h-42.267v-33.42c0-19.655-16.188-35.646-36.086-35.646s-36.086 15.991-36.086 35.646v33.688h-145.117c-17.662 0-32.03-14.17-32.03-31.588v-76.474c0-17.418 14.369-31.588 32.03-31.588h11.042c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-11.042c-25.933 0-47.03 20.899-47.03 46.588v76.475c0 25.688 21.098 46.588 47.03 46.588h145.117v19.67h-99.092c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h99.092v103.03l-28.331-27.896c-14.047-13.831-36.903-13.831-50.952 0-14.018 13.244-14.059 37.119-.087 50.407l58.319 61.173c8.647 9.413 20.177 14.915 32.685 15.244h126.071c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-125.935c-8.26.19-18.251-5.879-21.913-10.541l-58.448-61.308c-8.267-7.658-8.363-21.543-.166-29.288 8.244-8.117 21.658-8.117 29.902 0l41.093 40.462c2.155 2.122 5.372 2.742 8.159 1.574 2.788-1.168 4.603-3.896 4.603-6.918 0-48.631.007-156.805 0-204.299 0-11.385 9.459-20.646 21.086-20.646s21.086 9.262 21.086 20.646v159.871c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-58.461c2.754-8.525 10.876-14.413 20.083-14.413 11.627 0 21.086 9.262 21.086 20.656l.031 22.59v.007.008l.1 29.638c.014 4.134 3.369 7.475 7.5 7.475h.026c4.142-.014 7.488-3.383 7.475-7.525l-.1-29.614c.001-11.384 9.459-20.645 21.086-20.645s21.086 9.262 21.086 20.646v24.527 5.283c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-5.283c0-10.935 8.896-19.831 19.83-19.831s19.83 8.896 19.83 19.831c.007 18.294-.01 76.033 0 94.91 0 11.385-9.459 20.646-21.086 20.646h-30.505c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h30.505c19.898 0 36.086-15.991 36.085-35.709-.009-18.981.007-76.548 0-94.848 0-19.203-15.624-34.828-34.83-34.828z"}));function I(e,t){var a=e.title,r=e.titleId,n=E(e,["title","titleId"]);return c.createElement("svg",R({id:"Capa_1",enableBackground:"new 0 0 512.004 512.004",height:512,viewBox:"0 0 512.004 512.004",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),a?c.createElement("title",{id:r},a):null,C)}var z=c.forwardRef(I);a.p;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var W=c.createElement("path",{d:"m505.506 264.86c-4.111-.562-7.895 2.316-8.456 6.425-3.624 26.54-16.758 50.954-36.984 68.743-20.408 17.949-46.631 27.834-73.842 27.834-14.805 0-29.185-2.844-42.741-8.454-.225-.093-.485-.184-.719-.255-.159-.048-16.156-5.045-39.975-23.953-3.249-2.579-7.972-2.035-10.551 1.213-2.578 3.249-2.035 7.972 1.213 10.551 24.436 19.396 41.604 25.482 44.597 26.449 15.295 6.282 31.501 9.468 48.176 9.468 30.863 0 60.61-11.214 83.761-31.575 22.937-20.173 37.833-47.87 41.946-77.988.56-4.111-2.316-7.897-6.425-8.458z"}),U=c.createElement("path",{d:"m324.771 307.98c15.938 14.208 35.76 28.732 61.956 28.731h.026c44.487-.017 80.679-36.223 80.679-80.711 0-44.504-36.206-80.71-80.71-80.71-.002 0 0 0-.001 0-30.684 0-51.602 17.818-66.395 33.34-21.646 22.714-70.736 80.957-72.52 83.214-47.065 59.567-75.018 66.74-76.548 67.091-.638.083-1.027.218-1.637.471-12.092 5.004-24.896 7.816-38.054 8.357l-4.763.096c-30.004-.02-58.169-11.757-79.311-33.054-21.158-21.313-32.69-49.597-32.47-79.643.217-29.791 12.127-57.786 33.535-78.827 21.152-20.79 48.927-32.197 78.329-32.197.376 0 .756.002 1.132.005 13.914.139 27.465 2.8 40.282 7.912.791.315 1.582.625 2.38.924 3.909 1.462 38.367 15.38 77.154 64.616 0 0-16.665 20.353-20.519 24.929-7.561-8.237-21.807-23.194-38.982-38.505-15.938-14.208-35.759-28.731-61.954-28.731-.008 0-.02 0-.027 0-2.678 0-5.383.134-8.038.398-4.127.411-7.14 4.088-6.73 8.215s4.096 7.136 8.215 6.73c2.165-.215 4.37-.325 6.557-.325h.028c11.872 0 27.33 2.97 51.955 24.922 17.506 15.607 32.174 31.172 39.132 38.797-10.999 12.653-22.775 25.559-35.566 38.98-18.905 19.837-36.029 28.684-55.524 28.684-36.222 0-65.692-29.47-65.692-65.692 0-22.019 10.954-42.468 29.302-54.702 3.451-2.301 4.383-6.963 2.082-10.414-2.3-3.45-6.962-4.382-10.414-2.082-22.535 15.029-35.989 40.15-35.989 67.201 0 44.503 36.206 80.71 80.71 80.711 30.687 0 51.603-17.818 66.396-33.341 21.646-22.714 73.856-84.901 73.856-84.901.032-.038.063-.077.094-.115 46.203-57.919 73.607-64.943 75.118-65.29.638-.082 1.026-.218 1.637-.471 12.092-5.004 24.895-7.816 38.054-8.358l4.761-.096c26.799.018 52.712 9.655 72.973 27.141 20.074 17.324 33.377 41.207 37.459 67.25.642 4.097 4.484 6.895 8.582 6.256 4.097-.643 6.898-4.485 6.256-8.582-4.633-29.553-19.72-56.647-42.484-76.293-23.006-19.855-52.432-30.79-82.859-30.79-.05 0-.101 0-.152.001l-4.917.099c-.051.001-.102.002-.153.005-14.706.596-29.025 3.693-42.574 9.207-6.283 1.4-34.814 10.605-80.83 67.311-39.585-49.277-74.741-64.244-81.658-66.83-.698-.261-1.391-.533-2.08-.808-14.544-5.801-29.917-8.822-45.693-8.979-33.863-.354-65.849 12.625-90.138 36.498-24.274 23.86-37.779 55.62-38.026 89.43-.248 34.078 12.831 66.158 36.83 90.333 24.001 24.177 55.98 37.492 90.046 37.492.05 0 .101 0 .152-.001l4.917-.099c.051-.001.102-.002.153-.005 14.705-.596 29.025-3.693 42.573-9.207 6.207-1.381 34.049-10.358 78.963-65.024 4.292 4.904 8.646 9.625 13.002 14.084 2.898 2.966 7.652 3.022 10.619.125 2.967-2.898 3.023-7.652.125-10.619-4.728-4.84-9.461-10.004-14.11-15.391 3.944-4.759 18.659-22.693 22.515-27.271 7.558 8.235 21.809 23.197 38.983 38.508zm6.427-88.988c18.905-19.838 36.029-28.684 55.524-28.683 36.222 0 65.692 29.469 65.692 65.692 0 36.209-29.458 65.678-65.667 65.692-.009 0-.017 0-.026 0-11.872 0-27.332-2.97-51.957-24.923-17.509-15.61-32.178-31.178-39.133-38.802 10.998-12.65 22.778-25.557 35.567-38.976z"});function q(e,t){var a=e.title,r=e.titleId,n=_(e,["title","titleId"]);return c.createElement("svg",N({id:"Capa_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},n),a?c.createElement("title",{id:r},a):null,W,U)}var D=c.forwardRef(q),P=(a.p,a(0)),A=Object(P.jsx)(p.a,{id:"editor"});function B(){var e=Object(c.useState)((function(){return O.EditorState.createEmpty()})),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useRef)(null),s=Object(c.useState)(""),i=Object(d.a)(s,2),u=i[0],b=i[1],g=Object(c.useState)(""),y=Object(d.a)(g,2),w=y[0],k=y[1],R=Object(c.useState)(navigator.language),E=Object(d.a)(R,2),C=E[0],I=E[1],N=Object(c.useState)(""),_=Object(d.a)(N,2),W=_[0],U=_[1],q=Object(c.useState)("btn disabled"),B=Object(d.a)(q,2),L=B[0],T=B[1],M=Object(c.useState)(!1),V=Object(d.a)(M,2),F=V[0],H=V[1],J=Object(c.useState)(!0),G=Object(d.a)(J,2),Y=G[0],K=G[1],Q=Object(c.useState)("visible"),X=Object(d.a)(Q,2),Z=X[0],$=X[1];Object(c.useEffect)((function(){K(!a.getCurrentContent().getPlainText()),T(Y?"btn disabled":"btn")}),[a]),Object(c.useEffect)((function(){return H(!1)}),[w]);var ee=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y){e.next=22;break}if(u){e.next=6;break}U(Object(P.jsx)(p.a,{id:"no_style_selected"})),document.querySelector(".editor").style.borderColor="red",e.next=22;break;case 6:return document.querySelector("main").scrollIntoView({behavior:"smooth"}),localStorage.explanationIsVisible="hidden",$("hidden"),document.querySelector("#introduction").style.display="none",document.querySelector("#first-step").style.display="none",document.querySelector("#second-step").style.display="block",c=a.getCurrentContent(),n=Object(x.a)(c),r((function(){return O.EditorState.createEmpty()})),K(!0),U(""),H(!0),e.next=20,h(n,C,u);case 20:s=e.sent,k(Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{className:"status",children:Object(P.jsx)(p.a,{id:"results",values:{TR:s.TR,RWU:s.RWU,RWD:s.RWD,RWOU:s.RWOU}})}),Object(P.jsx)("div",{id:"results",className:"editor",dangerouslySetInnerHTML:{__html:s.refs}})]}));case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=Object(j.c)(),ae=Object(m.a)({locale:C,defaultLocale:"en-US",messages:f[C]},te);localStorage.getItem("explanationIsVisible")||(localStorage.explanationIsVisible="visible");var ce=function(e){var t;$(t="visible"==Z?"hidden":"visible"),localStorage.explanationIsVisible=t};return Object(P.jsx)(v.b,{value:ae,children:Object(P.jsxs)("div",{children:[Object(P.jsx)("header",{children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("h1",{children:"Wayback References"}),Object(P.jsxs)("div",{className:"menu",children:[Object(P.jsx)("span",{onClick:function(e){I("pt-BR"==C?"en-US":"pt-BR")},children:Object(P.jsx)(p.a,{id:"change_language"})}),Object(P.jsx)("a",{href:"#about",onClick:function(e){e.preventDefault(),document.querySelector("#about").scrollIntoView({behavior:"smooth"})},children:Object(P.jsx)(p.a,{id:"about-label"})})]})]})}),Object(P.jsx)("main",{children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsxs)("div",{id:"introduction",children:[Object(P.jsx)("h2",{children:Object(P.jsx)(p.a,{id:"subtitle",values:{br:Object(P.jsx)("br",{})}})}),"visible"==Z&&Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)("div",{id:"toggle",onClick:ce,children:[Object(P.jsx)(p.a,{id:"hide_explanation"})," \u25b2"]}),Object(P.jsxs)("div",{id:"three-steps",children:[Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"icon",children:Object(P.jsx)(S,{})}),Object(P.jsxs)("p",{children:[Object(P.jsx)("b",{children:"1."})," ",Object(P.jsx)(p.a,{id:"step1"})]})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"icon",children:Object(P.jsx)(z,{})}),Object(P.jsxs)("p",{children:[Object(P.jsx)("b",{children:"2."})," ",Object(P.jsx)(p.a,{id:"step2"})]})]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"icon",children:Object(P.jsx)(D,{})}),Object(P.jsxs)("p",{children:[Object(P.jsx)("b",{children:"3."})," ",Object(P.jsx)(p.a,{id:"step3"})]})]})]})]}),"hidden"==Z&&Object(P.jsxs)("div",{id:"toggle",onClick:ce,children:[Object(P.jsx)(p.a,{id:"show_explanation"})," \u25bc"]})]}),Object(P.jsxs)("div",{id:"first-step",children:[Object(P.jsx)("div",{className:"editor",onClick:function(e){return n.current.focus()},children:Object(P.jsx)(O.Editor,{ref:n,editorState:a,onChange:r,placeholder:A})}),Object(P.jsxs)("p",{children:[Object(P.jsx)(p.a,{id:"style"}),":",Object(P.jsxs)("select",{onChange:function(e){return b(e.target.value)},children:[Object(P.jsx)("option",{value:""}),Object(P.jsx)("option",{value:"ABNT",children:"ABNT"}),Object(P.jsx)("option",{value:"APA",children:"APA"}),Object(P.jsx)("option",{value:"Chicago",children:"Chicago"}),Object(P.jsx)("option",{value:"ISO",children:"ISO"})]}),Object(P.jsx)("span",{className:"error",children:W})]}),Object(P.jsx)("div",{className:"btn-parent",children:Object(P.jsx)("span",{className:L,onClick:ee,children:Object(P.jsx)(p.a,{id:"btn"})})})]}),Object(P.jsxs)("div",{id:"second-step",children:[F&&Object(P.jsxs)("div",{className:"loading",children:[Object(P.jsx)("div",{id:"loader"}),Object(P.jsx)("p",{children:Object(P.jsx)(p.a,{id:"loading"})})]}),w,Object(P.jsxs)("div",{className:"btn-parent",children:[!F&&Object(P.jsx)("span",{className:"btn",onClick:function(e){var t=document.querySelector("#results").innerHTML;function a(e){e.clipboardData.setData("text/html",t),e.clipboardData.setData("text/plain",t),e.preventDefault()}document.addEventListener("copy",a),document.execCommand("copy"),document.removeEventListener("copy",a),alert(ae.formatMessage({id:"copied"}))},children:Object(P.jsx)(p.a,{id:"copy"})}),Object(P.jsx)("span",{className:"btn",onClick:function(e){document.querySelector("#introduction").style.display="block",document.querySelector("#first-step").style.display="block",document.querySelector("#second-step").style.display="none",document.querySelector(".editor").style.borderColor="#ccc",k("")},children:Object(P.jsx)(p.a,{id:"restart"})})]})]})]})}),Object(P.jsx)("section",{id:"about",children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("hr",{}),Object(P.jsx)(p.a,{id:"about",values:{p:function(e){return Object(P.jsx)("p",{children:e})},strong:function(e){return Object(P.jsx)("strong",{children:e})},wm:function(e){return Object(P.jsx)("a",{href:"https://web.archive.org/",target:"_blank",children:e})},ia:function(e){return Object(P.jsx)("a",{href:"https://archive.org/",target:"_blank",children:e})},doi:function(e){return Object(P.jsx)("a",{href:"https://www.doi.org/",target:"_blank",children:e})}}}),Object(P.jsx)("hr",{})]})}),Object(P.jsx)("footer",{children:Object(P.jsxs)("div",{className:"container",children:[Object(P.jsxs)("p",{children:[Object(P.jsx)(p.a,{id:"created-by"})," ",Object(P.jsx)("a",{href:"https://fsaldanha.com.br/",target:"_blank",children:"Felipe Saldanha"}),". Icons by ",Object(P.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",target:"_blank",children:"Freepik"}),"."]}),Object(P.jsx)("p",{children:Object(P.jsx)("a",{href:"https://github.com/FSaldanha/waybackref",target:"_blank",children:Object(P.jsx)(p.a,{id:"github"})})})]})})]})})}s.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(B,{})}),document.getElementById("root"))}},[[211,1,2]]]);
//# sourceMappingURL=main.fddcfbaa.chunk.js.map