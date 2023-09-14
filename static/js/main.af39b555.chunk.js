(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,r,t){},8:function(e,r,t){e.exports=t(9)},9:function(e,r,t){"use strict";t.r(r);var n=t(1),s=t(2),a=t(4),i=t(3),c=t(5),u=t(0),o=t.n(u),h=t(7),l=t.n(h);t(15);function d(e){return o.a.createElement("div",{className:"product"},o.a.createElement("div",{className:"name",onClick:e.onClick},e.name),o.a.createElement("div",{className:"count"},e.count),o.a.createElement("div",{className:"size",onClick:e.onClick},e.size),o.a.createElement("div",{className:"price",onClick:e.onClick},e.price.toLocaleString("de-DE",{style:"currency",currency:"EUR"})),o.a.createElement("button",{className:"minus",onClick:e.onMinusClick},"-"))}function S(e){return o.a.createElement("div",{className:"product"},o.a.createElement("div",{className:"name"},e.name),o.a.createElement("input",{type:"number",className:"price",id:e.name,value:0===e.price?"":e.price,min:"0",max:"100",onChange:function(r){return e.onChange(r)}}),o.a.createElement("button",{className:"minus",onClick:e.onHandMinusClick},"-"))}navigator.serviceWorker.register("service-worker.js");var p=function(e){function r(){return Object(n.a)(this,r),Object(a.a)(this,Object(i.a)(r).apply(this,arguments))}return Object(c.a)(r,e),Object(s.a)(r,[{key:"renderSquare",value:function(e){var r=this,t=this.props.types[e],n=this.props.currentchoose;return o.a.createElement("div",null,"Hand"!==t&&t===n&&o.a.createElement(d,{count:this.props.counts[e],name:this.props.names[e],size:this.props.sizes[e],price:this.props.prices[e],type:this.props.types[e],onClick:function(){return r.props.onClick(e)},onMinusClick:function(){return r.props.onMinusClick(e)}}),"Hand"===t&&t===n&&o.a.createElement(S,{count:this.props.counts[e],name:this.props.names[e],size:this.props.sizes[e],price:this.props.prices[e],type:this.props.types[e],onChange:function(t){return r.props.onChange(t,e)},onHandMinusClick:function(){return r.props.onHandMinusClick(e)}}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2),this.renderSquare(3),this.renderSquare(4),this.renderSquare(5),this.renderSquare(6),this.renderSquare(7),this.renderSquare(8),this.renderSquare(9),this.renderSquare(10),this.renderSquare(11),this.renderSquare(12),this.renderSquare(13),this.renderSquare(14),this.renderSquare(15),this.renderSquare(16),this.renderSquare(17),this.renderSquare(18),this.renderSquare(19),this.renderSquare(20),this.renderSquare(21),this.renderSquare(22),this.renderSquare(23),this.renderSquare(24),this.renderSquare(25),this.renderSquare(26),this.renderSquare(27),this.renderSquare(28),this.renderSquare(29),this.renderSquare(30),this.renderSquare(31),this.renderSquare(32),this.renderSquare(33),this.renderSquare(34),this.renderSquare(35),this.renderSquare(36),this.renderSquare(37),this.renderSquare(38),this.renderSquare(39),this.renderSquare(40),this.renderSquare(41),this.renderSquare(42),this.renderSquare(43),this.renderSquare(44),this.renderSquare(45),this.renderSquare(46),this.renderSquare(47),this.renderSquare(48),this.renderSquare(49),this.renderSquare(50),this.renderSquare(51),this.renderSquare(52),this.renderSquare(53),this.renderSquare(54),this.renderSquare(55),this.renderSquare(56),this.renderSquare(57),this.renderSquare(58),this.renderSquare(59),this.renderSquare(60),this.renderSquare(61),this.renderSquare(62),this.renderSquare(63),this.renderSquare(64),this.renderSquare(65),this.renderSquare(66),this.renderSquare(67),this.renderSquare(68),this.renderSquare(69),this.renderSquare(70),this.renderSquare(71),this.renderSquare(72),this.renderSquare(73),this.renderSquare(74),this.renderSquare(75),this.renderSquare(76),this.renderSquare(77),this.renderSquare(78),this.renderSquare(79),this.renderSquare(80),this.renderSquare(81),this.renderSquare(82),this.renderSquare(83),this.renderSquare(84),this.renderSquare(85),this.renderSquare(86),this.renderSquare(87),this.renderSquare(88),this.renderSquare(89),this.renderSquare(90),this.renderSquare(91),this.renderSquare(92),this.renderSquare(93),this.renderSquare(94)))}}]),r}(o.a.Component),m=function(e){function r(){return Object(n.a)(this,r),Object(a.a)(this,Object(i.a)(r).apply(this,arguments))}return Object(c.a)(r,e),Object(s.a)(r,[{key:"renderChoose",value:function(e){var r=this;return o.a.createElement("button",{className:"choose",currentchoose:this.props.currentchoose,onClick:function(){return r.props.onClick(e)}},e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"chooseBox"},this.renderChoose("Brot"),this.renderChoose("Br\xf6tchen"),this.renderChoose("S\xfc\xdf"),this.renderChoose("Hand"),this.renderChoose("Huhn")))}}]),r}(o.a.Component),q=function(e){function r(e){var t;return Object(n.a)(this,r),(t=Object(a.a)(this,Object(i.a)(r).call(this,e))).state={history:[{squares:Array(95).fill(null),counts:Array(95).fill(0),prices:[3.7,5,4.4,3,13.2,3.1,4.4,3.1,2.7,3.3,4.8,4.5,4.4,3.7,4.9,5.3,1.85,2.5,2.2,1.5,2.2,1.55,2.4,1.65,2.2,2.25,1.85,2.65,0,0,.55,1.2,1.1,.7,1.1,.8,.95,.7,.9,1.05,1.3,.4,.9,1,0,0,1.25,0,4.6,3.3,1.3,2.5,1.9,2.7,2.3,3.4,6.75,3,6.75,1.3,6,2.7,2.1,2.3,2.4,6.5,3,3.6,3,3.5,3.5,0,0,0,0,0,0,0,0,0,0,0,4.9,9.8,2.8,3.5,2.8,3.5,2.2,2,.3,.4,1,1.8,1],names:["Winzer","HvB / Dinkel Gerste","Winzerbrot","Baguette / Ciabatta","Winzerbrot","Kastenwei\xdfbrot","AOK / Kasten VK","Focaccia","Heide / K\xfcmmel","Berches","Roggensaft","Walnuss / Toskana","K\xfcrbis-Haferkorn","Pf\xe4lzer Helles","Eiwei\xdf","Kastanie","Winzer 1/2","HvB / DiGe 1/2","Winzerbrot 1/2","Baguette / Ciab. 1/2","AOK / Kasten VK 1/2","Kastenwei\xdfbrot 1/2","Roggensaft 1/2","Berches 1/2","K\xfcrbis-Haferkorn 1/2","Walnuss / Toskana 1/2","Pf\xe4lzer Helles 1/2","Kastanie 1/2","---","---","Oma / Rosen","Taler","Doppel / Ring","Roggen / VK","Ciabattini / Wild","Knacki","Mach Fit","Milch / Mohn / Salz","Soja / Weizengras","K\xfcrbiskern","Pf Brezel/Kastanie","Konfekt","Laugenknoten / K\xe4se","Brezel","---","---","Party","---","6er Mix","6er Oma","Rosinen- Schoko","Zwiebel-T\xf6rtchen","Croissant","T\xf6rtchen","Schok/ Di-Croissant","Frankfurter / Herren","Marmorkuchen 1/4","Quetsche","Nu\xdf / Mohn-Stollen","Buchtel","Hefezopf 1/4","Nussecke","Schnecke / Tee","Topfenstrudel Mand.","Apfeltasche","Zwiebel 1/4","Granatsplitter","L\xf6ffel","Hefezopf 1/8","Nu\xdf/Mohnstollen 1/8","Marmor 1/8","---","---","---","---","---","Hand 1","Hand 2","Hand 3","Hand 4","Hand 5","Hand 6","halbes H\xe4hnchen","ganzes H\xe4hnchen","Pommes","7 Nuggets","8 Smileys","Cordon Bleu","Salat","Dose","Ketchup/Majo/Rem","S\xfc\xdfsauer/Barbecue","Dips","Pommes 1/2","Cocktail"],sizes:["750g","750g","1000g","400g","3000g","500g","750g","St\xfcck","500g","500g","1000g","400g","750g","750g","500g","750g","750g","750g","1000g","400g","750g","500g","1000g","500g","750g","400g","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","1/4","","1/4","","","","","","","","","","","","","","","","","","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","St\xfcck","","","","","","","","","","","",""],types:["Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Brot","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","Br\xf6tchen","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","S\xfc\xdf","Hand","Hand","Hand","Hand","Hand","Hand","Huhn","Huhn","Huhn","Huhn","Huhn","Huhn","Huhn","Huhn","Huhn","Huhn","Huhn","Huhn"]}],stepNumber:0,xIsNext:!0,currentchoose:"Brot"},t}return Object(c.a)(r,e),Object(s.a)(r,[{key:"handleChooseClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1],n=t.counts.slice(),s=t.prices.slice(),a=t.names.slice(),i=t.sizes.slice(),c=t.types.slice();this.setState({history:r.concat([{counts:n,prices:s,names:a,sizes:i,types:c}]),stepNumber:r.length,xIsNext:!this.state.xIsNext,currentchoose:e})}},{key:"handleMinusClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1],n=t.counts.slice(),s=t.prices.slice(),a=t.names.slice(),i=t.sizes.slice(),c=t.types.slice();n[e]>0&&(n[e]=n[e]-1),this.setState({history:r.concat([{counts:n,prices:s,names:a,sizes:i,types:c}]),stepNumber:r.length,xIsNext:!this.state.xIsNext})}},{key:"handleHandMinusClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1],n=t.counts.slice(),s=t.prices.slice(),a=t.names.slice(),i=t.sizes.slice(),c=t.types.slice();n[e]>0&&(n[e]=0),s[e]=0,this.setState({history:r.concat([{counts:n,prices:s,names:a,sizes:i,types:c}]),stepNumber:r.length,xIsNext:!this.state.xIsNext})}},{key:"handleClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1],n=t.counts.slice(),s=t.prices.slice(),a=t.names.slice(),i=t.sizes.slice(),c=t.types.slice();n[e]=n[e]+1,this.setState({history:r.concat([{counts:n,prices:s,names:a,sizes:i,types:c}]),stepNumber:r.length,xIsNext:!this.state.xIsNext})}},{key:"handleKeyPress",value:function(e,r){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1],s=n.counts.slice(),a=n.prices.slice(),i=n.names.slice(),c=n.sizes.slice(),u=n.types.slice(),o=e.target.value,h=0;0===h&&(o/=100,h++),s[r]=1,a[r]=o,"Enter"===e.key&&(s[r]=1),this.setState({history:t.concat([{counts:s,prices:a,names:i,sizes:c,types:u}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}},{key:"handleChange",value:function(e,r){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1],s=n.counts.slice(),a=n.prices.slice(),i=n.names.slice(),c=n.sizes.slice(),u=n.types.slice(),o=e.target.value;s[r]=1,a[r]=o,"Enter"===e.key&&(s[r]=1),this.setState({history:t.concat([{counts:s,prices:a,names:i,sizes:c,types:u}]),stepNumber:t.length,xIsNext:!this.state.xIsNext})}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e=this,r=this.state.history[this.state.stepNumber],t=y(r.counts,r.types,"Brot"),n=y(r.counts,r.types,"Br\xf6tchen"),s=y(r.counts,r.types,"S\xfc\xdf"),a=y(r.counts,r.types,"Hand"),i=function(e,r){var t=0,n=0,s=!0,a=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(s=(c=u.next()).done);s=!0){var o=c.value;t+=o*r[n],n++}}catch(h){a=!0,i=h}finally{try{s||null==u.return||u.return()}finally{if(a)throw i}}return t.toLocaleString("de-DE",{style:"currency",currency:"EUR"})}(r.counts,r.prices);return o.a.createElement("div",{className:"game"},o.a.createElement(m,{currentchoose:this.state.currentchoose,onClick:function(r){return e.handleChooseClick(r)}}),o.a.createElement("div",{className:"game-board"},o.a.createElement(p,{counts:r.counts,prices:r.prices,names:r.names,sizes:r.sizes,types:r.types,currentchoose:this.state.currentchoose,onChange:function(r,t){return e.handleChange(r,t)},onClick:function(r){return e.handleClick(r)},onMinusClick:function(r){return e.handleMinusClick(r)},onHandMinusClick:function(r){return e.handleHandMinusClick(r)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",{className:"info-left"},o.a.createElement("div",{className:"zahl"},"Brot:\xa0 ",t,", Br\xf6tchen: ",n,", S\xfc\xdf: ",s,", Hand: ",a),o.a.createElement("div",{className:"sum"},"Summe:  ",i)),o.a.createElement("div",{className:"info-right"},o.a.createElement("button",{className:"button",onClick:function(){return e.jumpTo(0)}},"C"))))}}]),r}(o.a.Component);function y(e,r,t){var n=0,s=0,a=!0,i=!1,c=void 0;try{for(var u,o=r[Symbol.iterator]();!(a=(u=o.next()).done);a=!0){u.value===t&&(n+=e[s]),s++}}catch(h){i=!0,c=h}finally{try{a||null==o.return||o.return()}finally{if(i)throw c}}return n}l.a.render(o.a.createElement(q,null),document.getElementById("root"))}},[[8,2,1]]]);
//# sourceMappingURL=main.af39b555.chunk.js.map