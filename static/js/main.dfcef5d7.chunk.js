(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,function(e,a,n){e.exports=n.p+"static/media/logo-symbol.358d785a.svg"},,function(e,a,n){e.exports=n(12)},,,,,function(e,a,n){},function(e,a,n){"use strict";n.r(a);var l=n(0),t=n.n(l),r=n(3),o=n.n(r),u=(n(11),n(1)),m=n(5),i=function(e){var a=e.color,n=e.selectColor,l=e.style,r={cardContainer:{border:"1px solid ".concat(l.borderColor),borderRadius:"10px",boxShadow:"0 0 3px rgba(0, 0, 0, .3)",margin:"0 0 20px 0"},colorContainer:{backgroundColor:a.value,height:"80%",borderRadius:"10px 10px 0 0"},textContainer:{display:"flex",alignItems:"center",height:"20%"}};return t.a.createElement("div",{className:"card-container",style:Object(m.a)({},l,{},r.cardContainer),onClick:function(){return n(a)}},t.a.createElement("div",{style:r.colorContainer}),t.a.createElement("div",{className:"p-2 ml-2",style:r.textContainer},a.value.toLowerCase()))},c=function(e){var a=e.colors,n=e.selectColor,l=e.currentPage;return t.a.createElement("div",{className:"card-deck row row-cols-4",style:{width:"100%"}},a.map((function(e){return t.a.createElement("div",{key:e.value,className:"col mb-4"},t.a.createElement(i,{color:e,selectColor:n,currentPage:l,style:{width:"90%",height:240,borderColor:"white"}}))})))},d=n(4),f=n.n(d),v="#373B3C",s="#D6D8D7",g={navbar:{backgroundColor:v},logo:{margin:15}},b=function(){return t.a.createElement("nav",{style:g.navbar},t.a.createElement("a",{className:"ml-3",href:"httpw://my828.github.io/helpfulhuman-challenge"},t.a.createElement("img",{src:f.a,alt:"logo",width:"40",height:"40",style:g.logo})))},h=function(e){var a=e.text,n=e.action,l={padding:"10px 0px",width:"200px",border:"1px solid",borderRadius:"10px",fontWeight:"bold",color:v};return t.a.createElement("button",{onClick:function(){return n()},style:l},a)},p=function(e){var a=e.clear,n=e.arrColor,l=e.selectedColor,r=e.detailCardClick;return t.a.createElement("div",{style:{marginRight:"20px",textAlign:"center"}},t.a.createElement(i,{selectColor:r,color:l,style:{width:.7*window.innerWidth,height:440,borderColor:"black",fontSize:"25px"}}),t.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},console.log(n),n.map((function(e){return t.a.createElement(t.a.Fragment,null,t.a.createElement(i,{key:e.value,selectColor:r,color:e,style:{width:"17%",height:150,borderColor:"white",fontSize:"15px"}}))}))),t.a.createElement(h,{text:"Clear",action:a}))},y=function(e){for(var a=e.cardsPerPage,n=e.totalCards,r=e.paginate,o=Object(l.useState)(1),m=Object(u.a)(o,2),i=m[0],c=m[1],d=[],f=1;f<=Math.ceil(n/a);f++)d.push(f);return t.a.createElement("nav",null,t.a.createElement("ul",{className:"mx-auto",style:{display:"flex",listStyle:"none",justifyContent:"space-around",width:"50%"}},d.map((function(e){return t.a.createElement("li",{key:e,style:i===e?{borderBottom:"1.5px solid",fontWeight:"bold",width:"20px",textAlign:"center"}:{}},t.a.createElement("a",{onClick:function(){return function(e){c(e),r(e)}(e)}},e))}))))},w=function(e){var a=e.randomColors,n=e.generateRandom,l={container:{width:"25%",backgroundColor:s,height:window.outerHeight,textAlign:"center"},content:{paddingTop:"60px"}};return t.a.createElement("div",{style:l.container},t.a.createElement("div",{style:l.content},t.a.createElement(h,{text:"Random Color",action:n}),t.a.createElement("div",{style:{marginLeft:"15%",textAlign:"left"}},a.map((function(e){return t.a.createElement("div",{key:e,style:{marginTop:"20px",fontSize:"20px"}},e)})))))},k=[{name:"aqua",value:"#00ffff"},{name:"aquamarine",value:"#7fffd4"},{name:"bisque",value:"#ffe4c4"},{name:"blue",value:"#0000ff"},{name:"blueviolet",value:"#8a2be2"},{name:"brown",value:"#a52a2a"},{name:"burlywood",value:"#deb887"},{name:"cadetblue",value:"#5f9ea0"},{name:"chartreuse",value:"#7fff00"},{name:"chocolate",value:"#d2691e"},{name:"coral",value:"#ff7f50"},{name:"cornflowerblue",value:"#6495ed"},{name:"crimson",value:"#dc143c"},{name:"darkblue",value:"#00008b"},{name:"darkcyan",value:"#008b8b"},{name:"darkgoldenrod",value:"#b8860b"},{name:"darkgray",value:"#a9a9a9"},{name:"darkgreen",value:"#006400"},{name:"darkkhaki",value:"#bdb76b"},{name:"darkmagenta",value:"#8b008b"},{name:"darkolivegreen",value:"#556b2f"},{name:"darkorange",value:"#ff8c00"},{name:"darkorchid",value:"#9932cc"},{name:"darkred",value:"#8b0000"},{name:"darksalmon",value:"#e9967a"},{name:"darkseagreen",value:"#8fbc8f"},{name:"darkslateblue",value:"#483d8b"},{name:"darkslategray",value:"#2f4f4f"},{name:"darkturquoise",value:"#00ced1"},{name:"darkviolet",value:"#9400d3"},{name:"deeppink",value:"#ff1493"},{name:"deepskyblue",value:"#00bfff"},{name:"dimgray",value:"#696969"},{name:"dodgerblue",value:"#1e90ff"},{name:"firebrick",value:"#b22222"},{name:"forestgreen",value:"#228b22"},{name:"fuchsia",value:"#ff00ff"},{name:"goldenrod",value:"#daa520"},{name:"gold",value:"#ffd700"},{name:"gray",value:"#808080"},{name:"green",value:"#008000"},{name:"greenyellow",value:"#adff2f"},{name:"hotpink",value:"#ff69b4"},{name:"indianred",value:"#cd5c5c"},{name:"indigo",value:"#4b0082"},{name:"khaki",value:"#f0e68c"},{name:"lavenderblush",value:"#fff0f5"},{name:"lavender",value:"#e6e6fa"},{name:"lawngreen",value:"#7cfc00"},{name:"lemonchiffon",value:"#fffacd"},{name:"lightblue",value:"#add8e6"},{name:"lightcoral",value:"#f08080"},{name:"lightcyan",value:"#e0ffff"},{name:"lightgoldenrodyellow",value:"#fafad2"},{name:"lightgray",value:"#d3d3d3"},{name:"lightgreen",value:"#90ee90"},{name:"lightpink",value:"#ffb6c1"},{name:"lightsalmon",value:"#ffa07a"},{name:"lightseagreen",value:"#20b2aa"},{name:"lightskyblue",value:"#87cefa"},{name:"lightslategray",value:"#778899"},{name:"lightsteelblue",value:"#b0c4de"},{name:"lightyellow",value:"#ffffe0"},{name:"lime",value:"#00ff00"},{name:"limegreen",value:"#32cd32"},{name:"linen",value:"#faf0e6"},{name:"maroon",value:"#800000"},{name:"mediumaquamarine",value:"#66cdaa"},{name:"mediumblue",value:"#0000cd"},{name:"mediumorchid",value:"#ba55d3"},{name:"mediumpurple",value:"#9370db"},{name:"mediumseagreen",value:"#3cb371"},{name:"mediumslateblue",value:"#7b68ee"},{name:"mediumspringgreen",value:"#00fa9a"},{name:"mediumturquoise",value:"#48d1cc"},{name:"mediumvioletred",value:"#c71585"},{name:"midnightblue",value:"#191970"},{name:"mintcream",value:"#f5fffa"},{name:"mistyrose",value:"#ffe4e1"},{name:"moccasin",value:"#ffe4b5"},{name:"navajowhite",value:"#ffdead"},{name:"navy",value:"#000080"},{name:"oldlace",value:"#fdf5e6"},{name:"olive",value:"#808000"},{name:"olivedrab",value:"#6b8e23"},{name:"orange",value:"#ffa500"},{name:"orangered",value:"#ff4500"},{name:"orchid",value:"#da70d6"},{name:"palegoldenrod",value:"#eee8aa"},{name:"palegreen",value:"#98fb98"},{name:"paleturquoise",value:"#afeeee"},{name:"palevioletred",value:"#db7093"},{name:"peachpuff",value:"#ffdab9"},{name:"peru",value:"#cd853f"},{name:"pink",value:"#ffc0cb"},{name:"plum",value:"#dda0dd"},{name:"powderblue",value:"#b0e0e6"},{name:"purple",value:"#800080"},{name:"rebeccapurple",value:"#663399"},{name:"red",value:"#ff0000"},{name:"rosybrown",value:"#bc8f8f"},{name:"royalblue",value:"#4169e1"},{name:"saddlebrown",value:"#8b4513"},{name:"salmon",value:"#fa8072"},{name:"sandybrown",value:"#f4a460"},{name:"seagreen",value:"#2e8b57"},{name:"seashell",value:"#fff5ee"},{name:"sienna",value:"#a0522d"},{name:"silver",value:"#c0c0c0"},{name:"skyblue",value:"#87ceeb"},{name:"slateblue",value:"#6a5acd"},{name:"slategray",value:"#708090"},{name:"snow",value:"#fffafa"},{name:"springgreen",value:"#00ff7f"},{name:"steelblue",value:"#4682b4"},{name:"tan",value:"#d2b48c"},{name:"teal",value:"#008080"},{name:"thistle",value:"#d8bfd8"},{name:"tomato",value:"#ff6347"},{name:"turquoise",value:"#40e0d0"},{name:"violet",value:"#ee82ee"},{name:"wheat",value:"#f5deb3"},{name:"whitesmoke",value:"#f5f5f5"},{name:"yellow",value:"#ffff00"},{name:"yellowgreen",value:"#9acd32"}],C=["Red","Orange","Yellow","Blue","Purple","Brown","Gray"];function x(e,a){var n=parseInt(e.substring(1,3),16),l=parseInt(e.substring(3,5),16),t=parseInt(e.substring(5,7),16);return n=parseInt(n*(100+a)/100),l=(l=parseInt(l*(100+a)/100))<255?l:255,t=(t=parseInt(t*(100+a)/100))<255?t:255,"#"+(1===(n=n<255?n:255).toString(16).length?"0"+n.toString(16):n.toString(16))+(1===l.toString(16).length?"0"+l.toString(16):l.toString(16))+(1===t.toString(16).length?"0"+t.toString(16):t.toString(16))}function E(e){for(var a=[],n=-40;n<=40;n+=20){var l={};l.value=x(e.value,n),a.push(l)}return a}var S=function(){var e=Object(l.useState)(1),a=Object(u.a)(e,2),n=a[0],r=a[1],o=Object(l.useState)(12),m=Object(u.a)(o,2),i=m[0],d=(m[1],Object(l.useState)("")),f=Object(u.a)(d,2),v=f[0],s=f[1],g=n*i,h=g-i,x=k.slice(h,g),S=Object(l.useState)(!0),j=Object(u.a)(S,2),O=j[0],P=j[1],q=Object(l.useState)([]),I=Object(u.a)(q,2),R=I[0],B=I[1];return t.a.createElement("div",null,t.a.createElement(b,null),t.a.createElement("div",{style:{display:"flex"}},t.a.createElement(w,{randomColors:C,generateRandom:function(){var e=C[Math.floor(Math.random()*C.length)],a=k.find((function(a){return a.name===e.toLowerCase()}));B(E(a)),s(a),P(!1)}}),t.a.createElement("div",{style:{margin:"60px 0px 40px 40px"}},O?t.a.createElement("div",null,t.a.createElement(c,{colors:x,selectColor:function(e){s(e),B(E(e)),P(!1)},currentPage:n}),t.a.createElement(y,{cardsPerPage:i,totalCards:k.length,paginate:function(e){r(e)},currentPage:n})):t.a.createElement(p,{clear:function(){r(1),P(!0)},selectedColor:v,detailCardClick:function(e){s(e)},arrColor:R,currentPage:n}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(t.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.dfcef5d7.chunk.js.map