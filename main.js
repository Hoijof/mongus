!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.renderUsers=t.confirm=t.renderUsername=t.getUserName=t.getCanvas=t.whenUserClicked=void 0;var i,s=function(e){return document.querySelector(e)},c=s("#userlist");t.whenUserClicked=function(e){i=e},t.getCanvas=function(){var e=s("canvas"),t=e.parentElement;return window.addEventListener("resize",n),n(),e;function n(){e.width=t.clientWidth,e.height=t.clientHeight}},t.getUserName=function(){return r(this,void 0,void 0,(function(){var e,t,n,r,i;return o(this,(function(o){return e="amongus:username",t=sessionStorage.getItem(e),s("#logout").addEventListener("click",(function(t){sessionStorage.removeItem(e),location.reload()})),t?[2,Promise.resolve(t)]:(n=s("#login"),r=n.querySelector("form"),i=null==r?void 0:r.querySelector("input[type=text]"),n.showModal(),[2,new Promise((function(t,n){r.addEventListener("submit",(function(n){var r=i.value.trim();sessionStorage.setItem(e,r),t(r)}))}))])}))}))},t.renderUsername=function(e){s("#username").innerHTML=e},t.confirm=function(e){var t=s("#confirm-dialog"),n=document.importNode(t.content,!0).firstElementChild;document.body.appendChild(n);var r=function(e){return n.querySelector(e)};return r(".question").innerHTML=e,new Promise((function(e){r(".yes").addEventListener("click",(function(){return e(!0)})),r(".no").addEventListener("click",(function(){return e(!1)})),n.showModal()})).then((function(e){return n.remove(),e}))},t.renderUsers=function e(t){var n=this;c.innerHTML="";for(var s=function(s){var a=document.createElement("div"),u=s.isCalling?"(llamando...)":"",l=document.createElement("button");l.innerHTML=s.name+" "+u,l.onclick=function(){return r(n,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,i(s)];case 1:return n.sent(),e(t),[2]}}))}))},a.appendChild(l),c.appendChild(a)},a=0,u=t;a<u.length;a++){s(u[a])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.refreshUserList=t.getUserList=t.userDisconnected=t.userConnected=t.setUserList=t.getUserByName=t.getUserById=void 0;var r=n(0),o=n(5),i=[];function s(e){return i.find((function(t){return t.id===e}))}function c(e){return new o.User(e)}function a(){r.renderUsers(i)}t.getUserById=s,t.getUserByName=function(e){return i.find((function(t){return t.name===e}))},t.setUserList=function(e){i=e.map(c).map((function(e){return s(e.id)||e})),a()},t.userConnected=function(e){console.log("CONNECTED",e),i.push(c(e)),a()},t.userDisconnected=function(e){console.log("DISCONNECTED",e),i=i.filter((function(t){return t.id!==e.id})),a()},t.getUserList=function(){return i},t.refreshUserList=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClientMessageType=void 0,function(e){e.ERROR="ERROR",e.LOGIN="LOGIN",e.LOGOUT="LOGOUT",e.SEND_TO_USER="SEND_TO_USER",e.SEND_TO_ROOM="SEND_TO_ROOM"}(t.ClientMessageType||(t.ClientMessageType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClientToClientMessageType=void 0,function(e){e.RPC_OFFER="SEND_OFFER",e.RPC_ANSWER="SEND_ANSWER",e.REJECT_OFFER="REJECT_OFFER"}(t.ClientToClientMessageType||(t.ClientToClientMessageType={}))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.playAudio=t.captureAudio=void 0,t.captureAudio=function(){return navigator.mediaDevices.getUserMedia({audio:!0})},t.playAudio=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,function(e){var t=document.createElement("audio");return t.srcObject=e,document.body.appendChild(t),t}(e).play()];case 1:return t.sent(),[2]}}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0;var r=function(){function e(e){this.position={x:0,y:0},this.connection=null,this.id=e.id,this.name=e.name}return Object.defineProperty(e.prototype,"isCalling",{get:function(){return Boolean(this.connection)},enumerable:!1,configurable:!0}),e.prototype.callStarted=function(e){this.connection=e},e.prototype.acceptAnswer=function(e){this.connection.acceptAnswer(e)},e.prototype.hangup=function(){var e;null===(e=this.connection)||void 0===e||e.end(),this.connection=null},e.prototype.dispose=function(){this.hangup()},e}();t.User=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.emitter=void 0,t.emitter=function(){const e=new Set;return t.emit=function(t){e.forEach(e=>e(t))},t;function t(t){return e.add(t),()=>e.delete(t)}}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),c=n(2),a=n(3),u=n(9),l=n(4),f=n(10),d=n(13),p=n(19),h=n(0),y=n(5),v=n(1),g=u.ServerMessageType,m=new p.Socket("ws://amongus.amatiasq.com");function O(e){var t=v.getUserById(e);if(t)return t;m.send({type:c.ClientMessageType.ERROR,message:"Received message from unknown user "+e})}h.whenUserClicked((function(e){return e.isCalling?e.hangup():function(e){return o(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return t=new d.PeerChannel(e,(function(e){return m.send(e)})),[4,l.captureAudio()];case 1:return(n=r.sent()).getTracks().forEach((function(e){return t.addTrack(e,n)})),t.sendOffer(),e.callStarted(t),[2,t]}}))}))}(e)})),m.onMessage(g.HANDSHAKE,(function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,h.getUserName()];case 1:return e=t.sent(),h.renderUsername(e),m.send({type:c.ClientMessageType.LOGIN,name:e}),[2]}}))}))})),m.onMessage(g.LOGIN_RESULT,(function(e){return function(e){if(e.type!==u.ServerMessageType.LOGIN_RESULT)return;if(!e.success)return alert(e.message),sessionStorage.clear(),void location.reload();v.setUserList(e.users),function(e){var t=new y.User({id:"me",name:e});function n(){var e=r({},t.position);f.runFrame(t),e.x===t.position.x&&e.y===t.position.y||m.send({type:c.ClientMessageType.SEND_TO_ROOM,message:{type:s.RoomMessageType.POSITION_CHANGED,position:t.position}}),requestAnimationFrame(n)}n()}(e.name)}(e)})),m.onMessage(g.USER_CONNECTED,(function(e){return v.userConnected(e.user)})),m.onMessage(g.USER_DISCONNECTED,(function(e){return v.userDisconnected(e.user)})),m.onMessage(g.MESSAGE_TO_ROOM,(function(e){var t=e.from,n=e.message,r=O(t);if(r)switch(n.type){case s.RoomMessageType.POSITION_CHANGED:return function(e,t){e.position=t}(r,n.position)}})),m.onMessage(g.MESSAGE_FROM_USER,(function(e){var t=e.from,n=e.message,r=O(t);if(r)switch(n.type){case a.ClientToClientMessageType.RPC_OFFER:return function(e,t){return o(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return console.log(e.name+" quiere iniciar una llamada"),[4,confirm(e.name+" quiere iniciar una llamada.<br>Contestar?")];case 1:return r.sent()?(console.log("Llamada de "+e.name+" aceptada"),(n=new d.PeerChannel(e,(function(e){return m.send(e)}))).acceptOffer(t),console.log("Enviando respuesta a "+e.name+"..."),e.callStarted(n),[2,n]):(console.log("Llamada de "+e.name+" rechazada"),m.send({type:c.ClientMessageType.SEND_TO_USER,to:e.id,message:{type:a.ClientToClientMessageType.REJECT_OFFER}}),[2])}}))}))}(r,n.offer);case a.ClientToClientMessageType.RPC_ANSWER:return r.acceptAnswer(n.answer);case a.ClientToClientMessageType.REJECT_OFFER:return r.hangup()}}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RoomMessageType=void 0,function(e){e.POSITION_CHANGED="POSITION_CHANGED"}(t.RoomMessageType||(t.RoomMessageType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ServerMessageType=void 0,function(e){e.ERROR="ERROR",e.HANDSHAKE="HANDSHAKE",e.LOGIN_RESULT="LOGIN_RESULT",e.USER_CONNECTED="USER_CONNECTED",e.USER_DISCONNECTED="USER_DISCONNECTED",e.MESSAGE_FROM_USER="MESSAGE_FROM_USER",e.MESSAGE_TO_ROOM="MESSAGE_TO_ROOM"}(t.ServerMessageType||(t.ServerMessageType={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.runFrame=void 0;var r=n(11),o=n(12),i=n(1);t.runFrame=function(e){!function(e){o.isPressed(o.Action.UP)&&(e.y-=5);o.isPressed(o.Action.DOWN)&&(e.y+=5);o.isPressed(o.Action.LEFT)&&(e.x-=5);o.isPressed(o.Action.RIGHT)&&(e.x+=5)}(e.position);var t=i.getUserList().map((function(e){return e.position}));r.render(e.position,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n(0).getCanvas(),o=r.getContext("2d");function i(e,t,n){o.fillStyle=n,o.beginPath(),o.arc(e,t,15,0,2*Math.PI),o.fill(),o.closePath()}t.render=function(e,t){o.fillRect(0,0,r.width,r.height),o.save(),o.translate(r.width/2,r.height/2),t.forEach((function(e){return i(e.x,e.y,"#FF8888")})),i(e.x,e.y,"#88ff88"),o.restore()}},function(e,t,n){"use strict";var r,o,i;Object.defineProperty(t,"__esModule",{value:!0}),t.isPressed=t.Action=void 0,function(e){e[e.UP=0]="UP",e[e.DOWN=1]="DOWN",e[e.LEFT=2]="LEFT",e[e.RIGHT=3]="RIGHT"}(o=t.Action||(t.Action={})),function(e){e.ARROW_UP="ArrowUp",e.ARROW_DOWN="ArrowDown",e.ARROW_LEFT="ArrowLeft",e.ARROW_RIGHT="ArrowRight"}(i||(i={}));var s=((r={})[i.ARROW_UP]=o.UP,r[i.ARROW_DOWN]=o.DOWN,r[i.ARROW_LEFT]=o.LEFT,r[i.ARROW_RIGHT]=o.RIGHT,r),c=new Set;document.addEventListener("keydown",(function(e){var t=e.key,n=s[t];c.add(n)})),document.addEventListener("keyup",(function(e){var t=e.key,n=s[t];c.delete(n)})),t.isPressed=function(e){return c.has(e)}},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.PeerChannel=void 0;var i=n(14),s=n(2),c=n(3),a=n(4),u=n(1),l=function(){function e(e,t){this.user=e,this.send=t,this.conn=this.createRtc()}return e.prototype.sendOffer=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,this.conn.createOffer({offerToReceiveAudio:!0})];case 1:return e=t.sent(),[4,this.send({type:s.ClientMessageType.SEND_TO_USER,to:this.user.id,message:{type:c.ClientToClientMessageType.RPC_OFFER,offer:e}})];case 2:return t.sent(),[2]}}))}))},e.prototype.acceptOffer=function(e){return r(this,void 0,void 0,(function(){var t,n;return o(this,(function(r){switch(r.label){case 0:return[4,a.captureAudio()];case 1:return t=r.sent(),this.conn.addStream(t),[4,this.conn.acceptOffer(e,{offerToReceiveAudio:!0})];case 2:return n=r.sent(),[4,this.send({type:s.ClientMessageType.SEND_TO_USER,to:this.user.id,message:{type:c.ClientToClientMessageType.RPC_ANSWER,answer:n}})];case 3:return r.sent(),[2]}}))}))},e.prototype.acceptAnswer=function(e){return this.conn.acceptAnswer(e)},e.prototype.addTrack=function(e,t){return console.log("Enviando audio a "+this.user.name+"."),this.conn.addTrack(e,t)},e.prototype.end=function(){this.conn.close()},e.prototype.createRtc=function(){var e=this,t=new i.PeerConnection;return t.onTrackReceived((function(t){console.log("Recibiendo audio de "+e.user.name+"."),a.playAudio(t.streams[0]),u.refreshUserList()})),t},e}();t.PeerChannel=l},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PeerConnection=void 0;const o=r(n(15)),i=n(6);t.PeerConnection=class{constructor(){this.rtc=this.createRtc(),this.onTrackReceived=i.emitter(),this.onDataChannel=i.emitter()}async createOffer(e={}){const t=await this.rtc.createOffer(e);return await this.rtc.setLocalDescription(t),await this.processIceCandidates(),this.rtc.localDescription}async acceptOffer(e,t={}){return await this.setRemoteDescription(e),this.createAnswer(t)}acceptAnswer(e){return this.setRemoteDescription(e)}addStream(e){e.getTracks().forEach(t=>this.addTrack(t,e))}addTrack(e,t){return this.rtc.addTrack(e,t)}reset(){this.rtc.close(),this.rtc=this.createRtc()}close(){this.rtc.close()}async createAnswer(e={}){const t=await this.rtc.createAnswer(e);return await this.rtc.setLocalDescription(t),await this.processIceCandidates(),this.rtc.localDescription}createRtc(){const e=new RTCPeerConnection({iceServers:o.default()});return e.ontrack=e=>this.onTrackReceived.emit(e),e.ondatachannel=e=>this.onDataChannel.emit(e),e}processIceCandidates(){return new Promise(e=>{this.rtc.onicecandidate=({candidate:t})=>null==t&&e()})}setRemoteDescription(e){return this.rtc.setRemoteDescription(new RTCSessionDescription(e))}}},function(e,t,n){"use strict";var r=n(16);e.exports=function(e){var t,o={stun:(e||{}).stun||n(17),turn:(e||{}).turn||n(18)},i=(e||{}).stunCount||2,s=(e||{}).turnCount||0;function c(e,t){for(var n,i=[],s=[].concat(o[e]);s.length&&i.length<t;)n=Math.random()*s.length|0,i=i.concat(s.splice(n,1));return i.map((function(t){return"string"==typeof t||t instanceof String?r(e+":"+t):t}))}return t=[].concat(c("stun",i)),s&&(t=t.concat(c("turn",s))),t}},function(e,t){var n=["stun:","turn:"];e.exports=function(e){var t,r,o=(e||{}).url||e,i={};return"string"==typeof o||o instanceof String?(o=o.trim(),(t=n[n.indexOf(o.slice(0,5))])?(r=(o=o.slice(5)).split("@"),i.username=e.username,i.credential=e.credential,r.length>1&&(o=r[1],r=r[0].split(":"),i.username=r[0],i.credential=(e||{}).credential||r[1]||""),i.url=t+o,i.urls=[i.url],i):e):e}},function(e){e.exports=JSON.parse('["stun.l.google.com:19302","stun1.l.google.com:19302","stun2.l.google.com:19302","stun3.l.google.com:19302","stun4.l.google.com:19302","stun.ekiga.net","stun.ideasip.com","stun.schlund.de","stun.stunprotocol.org:3478","stun.voiparound.com","stun.voipbuster.com","stun.voipstunt.com","stun.voxgratia.org"]')},function(e){e.exports=JSON.parse("[]")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Socket=void 0;var r=n(20),o=function(){function e(e){var t=this;this.uri=e,this.socket=new r.JsonSocket(this.uri),this.listeners=new Map,this.socket.onMessage((function(e){return t.processMessage(e)}))}return e.prototype.onMessage=function(e,t){this.listeners.has(e)?this.listeners.get(e).push(t):this.listeners.set(e,[t])},e.prototype.send=function(e){this.socket.send(e)},e.prototype.processMessage=function(e){var t=this.listeners.get(e.type);console.debug(e.type,e),t?t.forEach((function(t){return t(e)})):console.log("Unhandled message: "+e.type)},e}();t.Socket=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JsonSocket=void 0;const r=n(6);t.JsonSocket=class{constructor(e){this.uri=e,this.RECONNECTION_DELAY=100,this.MAX_RECONNECT_ATTEMPTS=14,this.reconnectionDelay=100,this.reconnectAttempts=0,this.isReconnecting=!1,this.onMessage=r.emitter(),this.ws=this.init()}init(){const e=new WebSocket(this.uri);return e.onmessage=e=>this.processMessage(e),e.onerror=()=>this.connectionLost(),e.onclose=()=>this.connectionLost(),e}send(e){this.ws.send(JSON.stringify(e))}processMessage(e){let t;this.reconnectionDelay=this.RECONNECTION_DELAY,this.reconnectAttempts=0;try{t=JSON.parse(e.data)}catch(t){return void console.error("Invalid JSON",e.data)}this.onMessage.emit(t)}connectionLost(){if(!this.isReconnecting){if(this.reconnectAttempts>this.MAX_RECONNECT_ATTEMPTS)return console.error(`Websocket aborted after ${this.reconnectAttempts} attempts`);this.isReconnecting=!0,console.warn(`Socket closed. Waiting ${this.reconnectionDelay/1e3}s`),setTimeout(()=>{console.warn("Reconnecting..."),this.reconnectionDelay*=2,this.reconnectAttempts++,this.isReconnecting=!1,this.ws=this.init()},this.reconnectionDelay)}}}}]);
//# sourceMappingURL=main.js.map