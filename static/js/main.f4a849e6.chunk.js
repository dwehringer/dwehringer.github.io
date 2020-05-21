(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r(2),a=r(4),i=r(3),c=r(5),o=r(0),u=r.n(o),h=r(7),l=r.n(h);r(15);function d(e){return u.a.createElement("div",{className:"product"},u.a.createElement("div",{className:"name",onClick:e.onClick},e.name),u.a.createElement("div",{className:"count"},e.count),u.a.createElement("div",{className:"size",onClick:e.onClick},e.size),u.a.createElement("div",{className:"price",onClick:e.onClick},e.price.toLocaleString("de-DE",{style:"currency",currency:"EUR"})),u.a.createElement("button",{className:"minus",onClick:e.onMinusClick},"-"))}function S(e){return u.a.createElement("div",{className:"product"},u.a.createElement("div",{className:"name"},e.name),u.a.createElement("input",{type:"number",className:"price",id:e.name,value:0===e.price?"":e.price,min:"0",max:"100",onChange:function(t){return e.onChange(t)}}),u.a.createElement("button",{className:"minus",onClick:e.onHandMinusClick},"-"))}navigator.serviceWorker.register("service-worker.js");var p=function(e){function t(){return Object(s.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"renderSquare",value:function(e){var t=this,r=this.props.types[e],s=this.props.currentchoose;return u.a.createElement("div",null,"Hand"!==r&&r===s&&u.a.createElement(d,{count:this.props.counts[e],name:this.props.names[e],size:this.props.sizes[e],price:this.props.prices[e],type:this.props.types[e],onClick:function(){return t.props.onClick(e)},onMinusClick:function(){return t.props.onMinusClick(e)}}),"Hand"===r&&r===s&&u.a.createElement(S,{count:this.props.counts[e],name:this.props.names[e],size:this.props.sizes[e],price:this.props.prices[e],type:this.props.types[e],onChange:function(r){return t.props.onChange(r,e)},onHandMinusClick:function(){return t.props.onHandMinusClick(e)}}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20),this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27),this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34),this.renderSquare(35),this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41),this.renderSquare(42),this.renderSquare(43),this.renderSquare(44),this.renderSquare(45),this.renderSquare(46),this.renderSquare(47),this.renderSquare(48),this.renderSquare(49),this.renderSquare(50),this.renderSquare(51),this.renderSquare(52),this.renderSquare(53),this.renderSquare(54),this.renderSquare(55),this.renderSquare(56),this.renderSquare(57),this.renderSquare(58),this.renderSquare(59),this.renderSquare(60),this.renderSquare(61),this.renderSquare(62),this.renderSquare(63),this.renderSquare(64),this.renderSquare(65),this.renderSquare(66),this.renderSquare(67),this.renderSquare(68),this.renderSquare(69),this.renderSquare(70),this.renderSquare(71),this.renderSquare(72),this.renderSquare(73),this.renderSquare(74),this.renderSquare(75),this.renderSquare(76),this.renderSquare(77)))}}]),t}(u.a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(a.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"renderChoose",value:function(e){var t=this;return u.a.createElement("button",{className:"choose",currentchoose:this.props.currentchoose,onClick:function(){return t.props.onClick(e)}},e)}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"chooseBox"},this.renderChoose("Brot"),this.renderChoose("Br\xf6tchen"),this.renderChoose("S\xfc\xdf"),this.renderChoose("Hand")))}}]),t}(u.a.Component),k=function(e){function t(e){var r;return Object(s.a)(this,t),(r=Object(a.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(78).fill(null),counts:Array(78).fill(0),prices:[3,4,3.5,2.5,10.5,2.5,3.5,2.5,2.1,2.7,3.9,3.9,3.5,3.1,5.3,0,0,0,1.5,2,1.75,1.25,1.75,1.25,1.95,1.35,1.75,1.95,1.55,2.65,.4,1,.9,.5,.75,.6,.75,.5,.75,.5,1.1,.35,.85,1,.8,1,.8,0,.95,2.8,1.4,2.3,1.8,1.8,1.9,5,1.15,4.5,2.2,4.5,1.8,1.9,4,0,0,0,2.25,2.25,1.8,5,8,3.5,0,0,0,0,0,0],names:["Winzer","HvB / Dinkel Gerste","Winzerbrot","Baguette / Ciabatta","Winzerbrot","Kastenwei\xdfbrot","Pf\xe4lzer VK / Kasten VK","Focaccia","Heide / K\xfcmmel","Berches","Roggensaft","Walnuss / Toskana","K\xfcrbis-Haferkorn","Pf\xe4lzer Helles","Hiddekeidel","---","---","---","Winzer 1/2","HvB / DiGe 1/2","Winzerbrot 1/2","Baguette / Ciab. 1/2","Pf. VK / Kasten VK 1/2","Kastenwei\xdfbrot 1/2","Roggensaft 1/2","Berches 1/2","K\xfcrbis-Haferkorn 1/2","Walnuss / Toskana 1/2","Pf\xe4lzer Helles 1/2","Hiddekeidel 1/2","Oma / Rosen","Taler","Doppelweck","Roggen-VK","Ciabattini","Knacki","Mach Fit","Milch / Mohn","Soja / Weizengras","Salz-K\xfcmmel","Pf\xe4lzer Brezel","Konfekt","K\xfcrbiskern","3er Konfekt","Laugenknoten","Wildburger","Brezel","---","Rosinen- Schoko","T\xf6rtchen Pflaume","Croissant","T\xf6rtchen andere","Schok/ VK Croissant","Marmorkuchen","Apfel/ Kirsch/ Schn.","Nu\xdf / Mohn-Stollen","Buchtel","Hefezopf","Nussecke","Rosinenbrot","Nu\xdf/Mohn/Zimtschn.","Topfenstrudel Mand.","Obstboden","---","---","----","Hefezopf 1/8","Rosinenbrot 1/2","Hase","Osterbrot","Lamm","Nusst\xf6rtchen","Hand 1","Hand 2","Hand 3","Hand 4","Hand 5","Hand 6"],sizes:["750g","750g","1000g","400g","3000g","500g","750g","St\xfcck","500g","500g","1000g","400g","750g","750g","1500g","-","-","-","750g","750g","1000g","400g","750g","500g","1000g","500g","750g","400g","750g","1500g","St\xfcck","St\xfcck","2er","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","3er","St\xfcck","St\xfcck","St\xfcck","-","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","1/4","St\xfcck","1/4","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","-","-","-","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck"],types:["Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","Hand","Hand","Hand","Hand","Hand","Hand"]}],stepNumber:0,xIsNext:!0,currentchoose:"Brot"},r}return Object(c.a)(t,e),Object(n.a)(t,[{key:"handleChooseClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],s=r.counts.slice(),n=r.prices.slice(),a=r.names.slice(),i=r.sizes.slice(),c=r.types.slice();this.setState({history:t.concat([{counts:s,prices:n,names:a,sizes:i,types:c}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,currentchoose:e})}},{key:"handleMinusClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],s=r.counts.slice(),n=r.prices.slice(),a=r.names.slice(),i=r.sizes.slice(),c=r.types.slice();s[e]>0&&(s[e]=s[e]-1),this.setState({history:t.concat([{counts:s,prices:n,names:a,sizes:i,types:c}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}},{key:"handleHandMinusClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],s=r.counts.slice(),n=r.prices.slice(),a=r.names.slice(),i=r.sizes.slice(),c=r.types.slice();s[e]>0&&(s[e]=0),n[e]=0,this.setState({history:t.concat([{counts:s,prices:n,names:a,sizes:i,types:c}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1],s=r.counts.slice(),n=r.prices.slice(),a=r.names.slice(),i=r.sizes.slice(),c=r.types.slice();s[e]=s[e]+1,this.setState({history:t.concat([{counts:s,prices:n,names:a,sizes:i,types:c}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}},{key:"handleKeyPress",value:function(e,t){var r=this.state.history.slice(0,this.state.stepNumber+1),s=r[r.length-1],n=s.counts.slice(),a=s.prices.slice(),i=s.names.slice(),c=s.sizes.slice(),o=s.types.slice(),u=e.target.value,h=0;0===h&&(u/=100,h++),n[t]=1,a[t]=u,"Enter"===e.key&&(n[t]=1),this.setState({history:r.concat([{counts:n,prices:a,names:i,sizes:c,types:o}]),stepNumber:r.length,xIsNext:!this.state.xIsNext})}},{key:"handleChange",value:function(e,t){var r=this.state.history.slice(0,this.state.stepNumber+1),s=r[r.length-1],n=s.counts.slice(),a=s.prices.slice(),i=s.names.slice(),c=s.sizes.slice(),o=s.types.slice(),u=e.target.value;n[t]=1,a[t]=u,"Enter"===e.key&&(n[t]=1),this.setState({history:r.concat([{counts:n,prices:a,names:i,sizes:c,types:o}]),stepNumber:r.length,xIsNext:!this.state.xIsNext})}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,t=this.state.history[this.state.stepNumber],r=q(t.counts,t.types,"Brot"),s=q(t.counts,t.types,"Br\xf6tchen"),n=q(t.counts,t.types,"S\xfc\xdf"),a=q(t.counts,t.types,"Hand"),i=function(e,t){var r=0,s=0,n=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var u=c.value;r+=u*t[s],s++}}catch(h){a=!0,i=h}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r.toLocaleString("de-DE",{style:"currency",currency:"EUR"})}(t.counts,t.prices);return u.a.createElement("div",{className:"game"},u.a.createElement(m,{currentchoose:this.state.currentchoose,onClick:function(t){return e.handleChooseClick(t)}}),u.a.createElement("div",{className:"game-board"},u.a.createElement(p,{counts:t.counts,prices:t.prices,names:t.names,sizes:t.sizes,types:t.types,currentchoose:this.state.currentchoose,onChange:function(t,r){return e.handleChange(t,r)},onClick:function(t){return e.handleClick(t)},onMinusClick:function(t){return e.handleMinusClick(t)},onHandMinusClick:function(t){return e.handleHandMinusClick(t)}})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",{className:"info-left"},u.a.createElement("div",{className:"zahl"},"Brot:\xa0 ",r,", Br\xf6tchen: ",s,", S\xfc\xdf: ",n,", Hand: ",a),u.a.createElement("div",{className:"sum"},"Summe:  ",i)),u.a.createElement("div",{className:"info-right"},u.a.createElement("button",{className:"button",onClick:function(){return e.jumpTo(0)}},"C"))))}}]),t}(u.a.Component);function q(e,t,r){var s=0,n=0,a=!0,i=!1,c=void 0;try{for(var o,u=t[Symbol.iterator]();!(a=(o=u.next()).done);a=!0){o.value===r&&(s+=e[n]),n++}}catch(h){i=!0,c=h}finally{try{a||null==u.return||u.return()}finally{if(i)throw c}}return s}l.a.render(u.a.createElement(k,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.f4a849e6.chunk.js.map