(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n(30)},22:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(12),o=n.n(a),i=(n(22),n(4)),u=n(5),l=n(7),s=n(6),f=n(1),p=n(2),d=n(3);function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}function b(){var t=Object(p.a)(["\n  margin: 10px auto;\n  width: 300px;\n  padding: 10px;\n  border: 2px solid #000;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n"]);return b=function(){return t},t}var y=d.a.div(b()),x=function(t){Object(l.a)(n,t);var e=h(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.createElement(y,null,this.props.children)}}]),n}(r.Component);function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}function g(){var t=Object(p.a)(["\n  padding: 5px;\n  [data-display] {\n    border-radius: 5px;\n    border: 2px solid #000;\n    height: 60px;\n    line-height: 60px;\n    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n    text-align: left;\n    font-size: 18px;\n    font-weight: bold;\n    padding: 0 15px;\n    color: #000;\n  }\n"]);return g=function(){return t},t}var m=d.a.div(g()),O=function(t){Object(l.a)(n,t);var e=v(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.createElement(m,null,r.createElement("div",{"data-testid":"display","data-display":!0},this.props.displayValue))}}]),n}(r.Component);function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}function E(){var t=Object(p.a)(['\n  :after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n']);return E=function(){return t},t}var R=d.a.div(E()),w=function(t){Object(l.a)(n,t);var e=j(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).handleClick=function(e){t.props.onClickButton(e.target.textContent)},t}return Object(u.a)(n,[{key:"render",value:function(){return r.createElement(R,{onClick:this.handleClick},this.props.children)}}]),n}(r.Component);function z(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}function k(){var t=Object(p.a)(["\n  float: left;\n  width: ",'%;\n  padding: 5px;\n  button {\n    :focus {\n      outline: none;\n    }\n    :hover {\n      background: #eee;\n    }\n    :active {\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    color: #000;\n    font-size: 20px;\n    line-height: 40px;\n    font-weight: bold;\n    cursor: pointer;\n    width: 100%;\n    background: transparent;\n    border-radius: 5px;\n    border: 2px solid #000;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n\n    &[data-color="gray"] {\n      background: #eee;\n      :hover {\n        background: #ccc;\n      }\n    }\n  }\n']);return k=function(){return t},t}var S=d.a.div(k(),function(t){return t.size/4*100}),C=function(t){Object(l.a)(n,t);var e=z(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.size,n=void 0===e?1:e,c=t.color,a=t.children;return r.createElement(S,{size:n},r.createElement("button",{"data-color":c},a))}}]),n}(r.Component);function V(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}function D(){var t=Object(p.a)(["\n  width: 300px;\n  height: 374px;\n  padding: 10px;\n  margin: 20px auto;\n  border: 2px solid #000;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n  overflow-y: scroll;\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n  ::-webkit-scrollbar {\n    display: none; /* Chrome, Safari, Opera*/\n  }\n"]);return D=function(){return t},t}var B=d.a.div(D());r.Component;function P(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}function A(){var t=Object(p.a)(["\n  display: inline-block;\n  width: 270px;\n  height: 65px;\n  padding: 10px;\n  border: 2px solid #000;\n  border-radius: 5px;\n  text-align: right;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n  margin-bottom: 10px;\n  cursor: pointer;\n  h3 {\n    margin: 0px;\n  }\n"]);return A=function(){return t},t}function F(){var t=Object(p.a)(["\n  margin: 30px auto;\n  text-align: center;\n"]);return F=function(){return t},t}var I=d.a.div(F()),q=(d.a.div(A()),function t(e){if("\u221a"==e.substr(0,1)){var n=e.lastIndexOf(")"),r=e.substr(2,n-2);return r=Math.sqrt(t(r)),new Function("return ("+r+e.substr(n+1,e.length)+")")()}return new Function("return ("+e+")")()}),J=function(t){Object(l.a)(n,t);var e=P(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=e.call.apply(e,[this].concat(c))).histcount=0,t.state={displayValue:"",historyList:[]},t.onClickButton=function(e){var n=t.state.displayValue,r=void 0===n?"":n,c=(r=""+r).substr(r.length-1),a=["\xf7","\xd7","-","+"],o={AC:function(){t.setState({displayValue:""})},BS:function(){r.length>0&&(r=r.substr(0,r.length-1)),t.setState({displayValue:r})},"\u221a":function(){""!==c&&a.includes(c)?r=r.substr(0,r.length-1):""!==c&&(r=(r=r.replace(/\xd7/gi,"*")).replace(/\xf7/gi,"/"),r=Math.sqrt(q(r))),t.setState({displayValue:r})},"\xf7":function(){""===c||a.includes(c)||t.setState({displayValue:r+"\xf7"})},"\xd7":function(){""===c||a.includes(c)||t.setState({displayValue:r+"\xd7"})},"-":function(){""===c||a.includes(c)||t.setState({displayValue:r+"-"})},"+":function(){""===c||a.includes(c)||t.setState({displayValue:r+"+"})},"=":function(){""!==c&&a.includes(c)?r=r.substr(0,r.length-1):""!==c&&(r=(r=r.replace(/\xd7/gi,"*")).replace(/\xf7/gi,"/"),r=q(r)),t.setState({displayValue:r})},".":function(){var e=r+".",n=0,c=-1;do{-1!=(c=e.indexOf(".",c+1))&&n++}while(-1!=c);n>1?t.setState({displayValue:r}):t.setState({displayValue:e})},0:function(){0!==Number(r)&&(r+="0",t.setState({displayValue:r}))}};o[e]?o[e]():t.setState({displayValue:r+e})},t}return Object(u.a)(n,[{key:"render",value:function(){return r.createElement(I,null,r.createElement(x,null,r.createElement(O,{displayValue:this.state.displayValue}),r.createElement(w,{onClickButton:this.onClickButton},r.createElement(C,{size:1,color:"gray"},"AC"),r.createElement(C,{size:1,color:"gray"},"BS"),r.createElement(C,{size:1,color:"gray"},"\u221a"),r.createElement(C,{size:1,color:"gray"},"\xf7"),r.createElement(C,{size:1},"7"),r.createElement(C,{size:1},"8"),r.createElement(C,{size:1},"9"),r.createElement(C,{size:1,color:"gray"},"\xd7"),r.createElement(C,{size:1},"4"),r.createElement(C,{size:1},"5"),r.createElement(C,{size:1},"6"),r.createElement(C,{size:1,color:"gray"},"-"),r.createElement(C,{size:1},"1"),r.createElement(C,{size:1},"2"),r.createElement(C,{size:1},"3"),r.createElement(C,{size:1,color:"gray"},"+"),r.createElement(C,{size:2},"0"),r.createElement(C,{size:1},"."),r.createElement(C,{size:1,color:"gray"},"="))))}}]),n}(r.Component);o.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.e8b106b4.chunk.js.map