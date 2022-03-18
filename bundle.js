(()=>{"use strict";var n={74:(n,e,t)=>{t(18);const i="selected",o="hide",s="VIDEO_ID_LIST",a="동영상 가져오기에 실패했습니다. 개발자에게 문의해주세요.",r="공백은 검색할 수 없습니다.",A="100개 이상 저장할 수 없습니다.";function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){d(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var h=new WeakSet;function m(){return JSON.parse(localStorage.getItem(s))||[]}function u(n,e,t){!function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n,e),e.set(n,t)}function p(n,e){var t=function(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}(n,e);return function(n,e){return e.get?e.get.call(n):e.value}(n,t)}var C=new WeakMap,E=new WeakMap;const f=n=>{var e,t,i;const o=new Date(n);return`${null!==(e=o.getFullYear())&&void 0!==e?e:"0000"}년 ${null!==(t=o.getMonth())&&void 0!==t?t:"00"}월 ${null!==(i=o.getDay())&&void 0!==i?i:"00"}일`},g=Array.from({length:12},(()=>'\n  <div class="skeleton">\n    <div class="image"></div>\n    <p class="line"></p>\n    <p class="line"></p>\n  </div>\n')).join(" "),b='\n  <section class="save-result save-result--no-result">\n    <h3 hidden>저장 목록</h3>\n    <div class="no-result">\n      <img src="./src/assets/images/empty_saved_video_list.png" alt="no result image" class="no-result__image"/>\n      <p class="no-result__description">\n        저장된 비디오가 없습니다\n      </p>\n    </div>\n  </section>\n',B=(n,e=document)=>e.querySelector(n),v=(n,e,t)=>n.addEventListener(e,t),w=(n,e,t)=>n.insertAdjacentHTML(e,t),k=({classList:n},e=!0)=>e?n.add(o):n.remove(o);function y(n,e){x(n,e),e.add(n)}function _(n,e,t){x(n,e),e.set(n,t)}function x(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function S(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return t}function j(n,e){var t=function(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return e.get(n)}(n,e);return function(n,e){return e.get?e.get.call(n):e.value}(n,t)}var L=new WeakMap,V=new WeakMap,T=new WeakMap,I=new WeakMap,z=new WeakMap,Y=new WeakMap,O=new WeakMap,R=new WeakSet,W=new WeakSet,M=new WeakSet,Z=new WeakSet,$=new WeakSet;function F(n){n.remove(),this.savedVideoListContainer.children.length||w(this.savedVideoListContainer,"afterbegin",b)}function P(n){if(k(this.skeletonListContainer),!n.length)return this.videoListContainer.replaceChildren(),void w(this.videoListContainer,"afterbegin",'\n  <section class="search-result search-result--no-result">\n    <h3 hidden>검색 결과</h3>\n    <div class="no-result">\n      <img src="./src/assets/images/not_found.png" alt="no result image" class="no-result__image"/>\n      <p class="no-result__description">\n        검색 결과가 없습니다<br />\n        다른 키워드로 검색해보세요\n      </p>\n    </div>\n  </section>\n');w(this.videoListContainer,"beforeend",n.map((n=>(({id:{videoId:n},snippet:{title:e,channelTitle:t,publishTime:i,thumbnails:{default:{url:o}}}},s)=>`\n  <li class="video-item" \n    data-video-id="${n}"\n    data-title="${e}"\n    data-channel-title="${t}"\n    data-publish-time="${i}"\n    data-thumbnails-url="${o}"\n  > \n    <img src="${o}" alt="video-item-thumbnail" class="video-item__thumbnail" loading="lazy"/>\n    <h4 class="video-item__title">${null!=e?e:"제목 없음"}</h4>\n    <p class="video-item__channel-name">${null!=t?t:"채널명 없음"}</p>\n    <p class="video-item__published-date">${f(i)}</p>\n    ${s?'<button type="button" class="video-item__save-button button" disabled >저장됨</button>':'<button type="button" class="video-item__save-button button">⬇ 저장</button>'}\n  </li>\n`)(n,this.saveVideo.saveVideoList.some((e=>e.videoId===n.id.videoId))))).join(" "))}function U(){k(this.skeletonListContainer,!1),this.skeletonListContainer.children.length>0||w(this.skeletonListContainer,"afterbegin",g)}async function q(){S(this,M,U).call(this);try{await this.searchVideo.handleSearchVideo(this.searchInput.value.trim()),S(this,W,P).call(this,this.searchVideo.searchResults)}catch(n){this.searchInput.value="",this.searchInput.focus(),this.videoListContainer.replaceChildren(),k(this.skeletonListContainer),this.searchVideo.initSearchVideo(),alert(n.message)}}function D(n=!0){return n?this.saveVideo.saveVideoList.filter((n=>n.isChecked)):this.saveVideo.saveVideoList.filter((n=>!n.isChecked))}new class{constructor(){y(this,$),y(this,Z),y(this,M),y(this,W),y(this,R),_(this,L,{writable:!0,value:({target:{id:n}})=>{const e={[this.unwatchedTabButton.id](){j(this,V).call(this,this.unwatchedTabButton,this.watchedTabButton,S(this,$,D).call(this,!1))},[this.watchedTabButton.id](){j(this,V).call(this,this.watchedTabButton,this.unwatchedTabButton,S(this,$,D).call(this))},"search-modal-button"(){k(this.modalContainer,!1)}};Object.keys(e).includes(n)&&e[n].call(this)}}),_(this,V,{writable:!0,value:(n,e,t)=>{n.classList.add(i),e.classList.remove(i),this.savedVideoListContainer.replaceChildren(),t.length?w(this.savedVideoListContainer,"afterbegin",t.map((n=>(({videoId:n,title:e,channelTitle:t,publishTime:i,thumbnailsUrl:o,isChecked:s})=>`\n  <li class="video-item"\n    data-video-id="${n}"\n    data-title="${e}"\n  > \n    <img src="${o}" alt="video-item-thumbnail" class="video-item__thumbnail" loading="lazy"/>\n    <h4 class="video-item__title">${null!=e?e:"제목 없음"}</h4>\n    <p class="video-item__channel-name">${null!=t?t:"채널명 없음"}</p>\n    <p class="video-item__published-date">${f(i)}</p>\n    ${s?'<button type="button" class="button video-item__check-button selected">✅ </button>':'<button type="button" class="button video-item__check-button">✅ </button>'}\n    <button type="button" class="button video-item__delete-button">🗑️</button> \n  </li>\n`)(n))).join(" ")):w(this.savedVideoListContainer,"afterbegin",b)}}),_(this,T,{writable:!0,value:({target:n})=>{const e=n.closest("li");if(e){if(n.classList.contains("video-item__check-button"))return this.saveVideo.toggleVideoIsCheckedFromStorage(e.dataset),void S(this,R,F).call(this,e);if(n.classList.contains("video-item__delete-button")&&confirm(`'${e.dataset.title}'을(를) 삭제하시겠습니까?`)){if(this.saveVideo.removeVideoFromStorage(e.dataset),S(this,R,F).call(this,e),!this.videoListContainer.children.length)return;const n=B(`[data-video-id="${e.dataset.videoId}"] > button`,this.videoListContainer);n&&n.replaceWith((new DOMParser).parseFromString('<button type="button" class="video-item__save-button button">⬇ 저장</button>',"text/html").body.childNodes[0])}}}}),_(this,I,{writable:!0,value:()=>{k(this.modalContainer),this.unwatchedTabButton.classList.contains(i)&&j(this,V).call(this,this.unwatchedTabButton,this.watchedTabButton,S(this,$,D).call(this,!1))}}),_(this,z,{writable:!0,value:n=>{n.preventDefault(),this.searchResultSection.scrollTop=0,this.searchInput.value.trim()&&this.searchVideo.prevSearchKeyword===this.searchInput.value.trim()||(this.searchVideo.initSearchVideo(),this.videoListContainer.replaceChildren(),S(this,Z,q).call(this))}}),_(this,Y,{writable:!0,value:()=>{!this.searchVideo.nextPageToken||Array.from(this.videoListContainer.children).length>=108||this.throttle||(this.throttle=setTimeout((()=>{this.throttle=null;const{scrollHeight:n,offsetHeight:e,scrollTop:t}=this.searchResultSection;n-e===t&&S(this,Z,q).call(this)}),300))}}),_(this,O,{writable:!0,value:({target:n})=>{const e=n.classList.contains("video-item__save-button");if(e&&this.saveVideo.saveVideoList.length<100)return this.saveVideo.saveVideoInformationToStorage(n.closest("li").dataset),n.textContent="저장됨",void(n.disabled=!0);e&&alert(A)}}),this.searchVideo=new class{constructor(){u(this,C,{writable:!0,value:async n=>{const e=new URL("youtube/v3/search","https://youtube-classroom-project.netlify.app"),t=new URLSearchParams({part:"snippet",type:"video",maxResults:12,regionCode:"kr",pageToken:this.nextPageToken,q:n});e.search=t.toString();try{const n=await fetch(e);if(!n.ok)throw new Error;const{items:t,nextPageToken:i}=await n.json();return this.nextPageToken=null!=i?i:"",t}catch(n){throw new Error(a)}}}),u(this,E,{writable:!0,value:n=>{if(!n)throw new Error(r)}}),this.initSearchVideo()}initSearchVideo(){this.prevSearchKeyword="",this.searchResults=[],this.nextPageToken=""}async handleSearchVideo(n){p(this,E).call(this,n),this.searchResults=await p(this,C).call(this,n),this.prevSearchKeyword=n}},this.saveVideo=new class{constructor(){var n,e;(function(n,e){if(e.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")})(n=this,e=h),e.add(n),this.saveVideoList=function(n,e,t){if(!e.has(n))throw new TypeError("attempted to get private field on non-instance");return t}(this,h,m).call(this)}saveVideoInformationToStorage(n){this.saveVideoList=[c(c({},n),{},{isChecked:!1}),...this.saveVideoList],localStorage.setItem(s,JSON.stringify(this.saveVideoList))}removeVideoFromStorage({videoId:n}){this.saveVideoList=this.saveVideoList.filter((e=>e.videoId!==n)),localStorage.setItem(s,JSON.stringify(this.saveVideoList))}toggleVideoIsCheckedFromStorage({videoId:n}){this.saveVideoList.some((e=>{if(e.videoId===n)return e.isChecked=!e.isChecked,!0})),localStorage.setItem(s,JSON.stringify(this.saveVideoList))}},this.navSection=B(".nav"),this.unwatchedTabButton=B("#unwatched-tab-button",this.navSection),this.watchedTabButton=B("#watched-tab-button",this.navSection),this.savedVideoListContainer=B(".saved-video-list"),this.modalContainer=B(".modal-container"),this.modalOutside=B(".dimmer",this.modalContainer),this.searchForm=B("#search-form",this.modalContainer),this.searchInput=B("#search-input-keyword",this.searchForm),this.searchResultSection=B(".search-result",this.modalContainer),this.videoListContainer=B(".video-list",this.searchResultSection),this.skeletonListContainer=B(".skeleton-list",this.searchResultSection),v(this.navSection,"click",j(this,L)),v(this.savedVideoListContainer,"click",j(this,T)),v(this.modalOutside,"click",j(this,I)),v(this.searchForm,"submit",j(this,z)),v(this.searchResultSection,"scroll",j(this,Y)),v(this.videoListContainer,"click",j(this,O)),j(this,V).call(this,this.unwatchedTabButton,this.watchedTabButton,S(this,$,D).call(this,!1)),this.throttle=null}}},71:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(537),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,"body {\n  padding: 4em 0;\n  font-size: 1rem;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: fit-content;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  margin-bottom: 4rem;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 0.25rem;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 0.875rem;\n  border: none;\n}\n\n.nav__button {\n  width: 5em;\n  height: 2.25em;\n\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.tab__button {\n  width: 8.6em;\n  margin: 0;\n  border: 1px solid #e0e0e0;\n  border-bottom: none;\n  border-radius: 4px 0 0 4px;\n}\n\n.tab__button.selected {\n  background-color: #00bcd41f;\n  border: 1px solid #00c8e25e;\n  border-bottom: none;\n}\n\n.filter-video-section {\n  font-size: 0;\n}\n\n.saved-result-section {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 2.5em;\n  padding: 1em 0;\n  box-shadow: 0 1em 1em -1em #00c8e246 inset;\n\n  height: 31em;\n}\n","",{version:3,sources:["webpack://./src/css/app.css"],names:[],mappings:"AAAA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;;EAEd,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,yBAAyB;EACzB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;EAC3B,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,cAAc;EACd,0CAA0C;;EAE1C,YAAY;AACd",sourcesContent:["body {\n  padding: 4em 0;\n  font-size: 1rem;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: fit-content;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  margin-bottom: 4rem;\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n}\n\n.button {\n  cursor: pointer;\n  border-radius: 0.25rem;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 0.875rem;\n  border: none;\n}\n\n.nav__button {\n  width: 5em;\n  height: 2.25em;\n\n  background: #f5f5f5;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n.tab__button {\n  width: 8.6em;\n  margin: 0;\n  border: 1px solid #e0e0e0;\n  border-bottom: none;\n  border-radius: 4px 0 0 4px;\n}\n\n.tab__button.selected {\n  background-color: #00bcd41f;\n  border: 1px solid #00c8e25e;\n  border-bottom: none;\n}\n\n.filter-video-section {\n  font-size: 0;\n}\n\n.saved-result-section {\n  display: flex;\n  justify-content: center;\n  margin: 0 0 2.5em;\n  padding: 1em 0;\n  box-shadow: 0 1em 1em -1em #00c8e246 inset;\n\n  height: 31em;\n}\n"],sourceRoot:""}]);const r=a},340:(n,e,t)=>{t.d(e,{Z:()=>h});var i=t(537),o=t.n(i),s=t(645),a=t.n(s),r=t(71),A=t(399),l=t(341),c=t(566),d=a()(o());d.i(r.Z),d.i(A.Z),d.i(l.Z),d.i(c.Z),d.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2 {\n  white-space: nowrap;\n}\n","",{version:3,sources:["webpack://./src/css/index.css"],names:[],mappings:"AAKA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;EAEE,mBAAmB;AACrB",sourcesContent:["@import './app.css';\n@import './modal.css';\n@import './skeleton.css';\n@import './video.css';\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\nh1,\nh2 {\n  white-space: nowrap;\n}\n"],sourceRoot:""}]);const h=d},399:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(537),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: fit-content;\n  height: 45.5em;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 3em 2em 2em;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2.5rem;\n}\n\n#search-form {\n  display: flex;\n  justify-content: space-between;\n}\n\n.search-input__keyword {\n  min-width: 20em;\n  height: 2.25em;\n  margin-right: 1.25em;\n  padding: 0.25em 0.5em;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 1rem;\n}\n\n.search-input__search-button {\n  width: 5.2em;\n  height: 2.58em;\n  background: #00bcd4;\n  color: #ffffff;\n}\n","",{version:3,sources:["webpack://./src/css/modal.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;EACd,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,cAAc;AAChB",sourcesContent:[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  position: relative;\n  width: fit-content;\n  height: 45.5em;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 3em 2em 2em;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  font-size: 2.25rem;\n  line-height: 2.25rem;\n  text-align: center;\n  margin-bottom: 2.5rem;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2.5rem;\n}\n\n#search-form {\n  display: flex;\n  justify-content: space-between;\n}\n\n.search-input__keyword {\n  min-width: 20em;\n  height: 2.25em;\n  margin-right: 1.25em;\n  padding: 0.25em 0.5em;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 1rem;\n}\n\n.search-input__search-button {\n  width: 5.2em;\n  height: 2.58em;\n  background: #00bcd4;\n  color: #ffffff;\n}\n"],sourceRoot:""}]);const r=a},341:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(537),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,".skeleton-list {\n  display: grid;\n  grid-template-columns: repeat(4, 15em);\n  gap: 2em 2em;\n}\n\n.skeleton-list.hide {\n  display: none;\n}\n\n.skeleton {\n  width: 15em;\n  height: 16em;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(90deg, #e0e0e0 0, #ededed 1.875em, #e0e0e0 3.75em);\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 8.44em;\n}\n\n.skeleton .line {\n  height: 1rem;\n}\n\n.line {\n  height: 1.5rem;\n  margin: 0.875em 0;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-6.25em);\n  }\n  40%,\n  100% {\n    background-position: 20em;\n  }\n}\n\n@media only screen and (max-width: 1280px) {\n  .skeleton-list {\n    grid-template-columns: repeat(3, 15em);\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .skeleton-list {\n    grid-template-columns: repeat(2, 15em);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .skeleton-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/skeleton.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,oFAAoF;EACpF,uCAAuC;AACzC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE;IACE,kCAAkC;EACpC;EACA;;IAEE,yBAAyB;EAC3B;AACF;;AAEA;EACE;IACE,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;AACF",sourcesContent:[".skeleton-list {\n  display: grid;\n  grid-template-columns: repeat(4, 15em);\n  gap: 2em 2em;\n}\n\n.skeleton-list.hide {\n  display: none;\n}\n\n.skeleton {\n  width: 15em;\n  height: 16em;\n}\n\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(90deg, #e0e0e0 0, #ededed 1.875em, #e0e0e0 3.75em);\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  height: 8.44em;\n}\n\n.skeleton .line {\n  height: 1rem;\n}\n\n.line {\n  height: 1.5rem;\n  margin: 0.875em 0;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-6.25em);\n  }\n  40%,\n  100% {\n    background-position: 20em;\n  }\n}\n\n@media only screen and (max-width: 1280px) {\n  .skeleton-list {\n    grid-template-columns: repeat(3, 15em);\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .skeleton-list {\n    grid-template-columns: repeat(2, 15em);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .skeleton-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n"],sourceRoot:""}]);const r=a},566:(n,e,t)=>{t.d(e,{Z:()=>r});var i=t(537),o=t.n(i),s=t(645),a=t.n(s)()(o());a.push([n.id,".video-list {\n  display: grid;\n  grid-template-columns: repeat(4, 15em);\n  gap: 2em 2em;\n}\n\n.video-item {\n  position: relative;\n  width: 15em;\n  height: 16em;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 8.44em;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.03rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  margin: 0.25rem 0;\n}\n\n.video-item__channel-name {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.03rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 0.75rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.03rem;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 5.7em;\n  height: 2.58em;\n  background: #f9f9f9;\n  margin-top: 0.29em;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n.video-item__save-button:disabled {\n  background-color: #f9f9f9;\n}\n\n.video-item__check-button {\n  position: absolute;\n  right: 3.14em;\n  width: 2.57em;\n  height: 2.57em;\n\n  background-color: #f5f5f5;\n  margin-top: 0.29em;\n}\n\n.video-item__check-button.selected {\n  background-color: #00bcd41f;\n}\n\n.video-item__delete-button {\n  position: absolute;\n  right: 0;\n  width: 2.57em;\n  height: 2.57em;\n\n  background-color: #f5f5f5;\n  margin-top: 0.29em;\n}\n\n.video-item__check-button:hover {\n  background: #efefef;\n}\n\n.video-item__delete-button:hover {\n  background: #efefef;\n}\n\n.saved-video-list {\n  overflow-y: scroll;\n}\n\n/* no Result Image */\n.save-result {\n  margin: auto;\n}\n\n.save-result.save-result--no-result {\n  justify-content: center;\n  align-items: center;\n  grid-column: 1 / -1;\n}\n\n.search-result {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  overflow-y: scroll;\n  height: 31em;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n  grid-column: 1 / -1;\n  overflow: hidden;\n}\n\n.no-result__image {\n  width: 11.875em;\n  height: 8.75em;\n  margin-bottom: 2em;\n}\n\n.no-result__description {\n  font-size: 1rem;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.03rem;\n}\n\n@media only screen and (max-width: 1280px) {\n  .video-list {\n    grid-template-columns: repeat(3, 15em);\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .video-list {\n    grid-template-columns: repeat(2, 15em);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .video-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n","",{version:3,sources:["webpack://./src/css/video.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;;EAEvB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,cAAc;;EAEd,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,cAAc;;EAEd,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,oBAAoB;AACpB;EACE,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE;IACE,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;AACF",sourcesContent:[".video-list {\n  display: grid;\n  grid-template-columns: repeat(4, 15em);\n  gap: 2em 2em;\n}\n\n.video-item {\n  position: relative;\n  width: 15em;\n  height: 16em;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 8.44em;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.03rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  margin: 0.25rem 0;\n}\n\n.video-item__channel-name {\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.03rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 0.75rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.03rem;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 5.7em;\n  height: 2.58em;\n  background: #f9f9f9;\n  margin-top: 0.29em;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n\n.video-item__save-button:disabled {\n  background-color: #f9f9f9;\n}\n\n.video-item__check-button {\n  position: absolute;\n  right: 3.14em;\n  width: 2.57em;\n  height: 2.57em;\n\n  background-color: #f5f5f5;\n  margin-top: 0.29em;\n}\n\n.video-item__check-button.selected {\n  background-color: #00bcd41f;\n}\n\n.video-item__delete-button {\n  position: absolute;\n  right: 0;\n  width: 2.57em;\n  height: 2.57em;\n\n  background-color: #f5f5f5;\n  margin-top: 0.29em;\n}\n\n.video-item__check-button:hover {\n  background: #efefef;\n}\n\n.video-item__delete-button:hover {\n  background: #efefef;\n}\n\n.saved-video-list {\n  overflow-y: scroll;\n}\n\n/* no Result Image */\n.save-result {\n  margin: auto;\n}\n\n.save-result.save-result--no-result {\n  justify-content: center;\n  align-items: center;\n  grid-column: 1 / -1;\n}\n\n.search-result {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  overflow-y: scroll;\n  height: 31em;\n}\n\n.search-result.search-result--no-result {\n  justify-content: center;\n  align-items: center;\n  grid-column: 1 / -1;\n  overflow: hidden;\n}\n\n.no-result__image {\n  width: 11.875em;\n  height: 8.75em;\n  margin-bottom: 2em;\n}\n\n.no-result__description {\n  font-size: 1rem;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.03rem;\n}\n\n@media only screen and (max-width: 1280px) {\n  .video-list {\n    grid-template-columns: repeat(3, 15em);\n  }\n}\n\n@media only screen and (max-width: 960px) {\n  .video-list {\n    grid-template-columns: repeat(2, 15em);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .video-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n"],sourceRoot:""}]);const r=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var A=this[r][0];null!=A&&(a[A]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);i&&a[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(o," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([s]).join("\n")}return[e].join("\n")}},18:(n,e,t)=>{var i=t(379),o=t.n(i),s=t(795),a=t.n(s),r=t(569),A=t.n(r),l=t(565),c=t.n(l),d=t(216),h=t.n(d),m=t(589),u=t.n(m),p=t(340),C={};C.styleTagTransform=u(),C.setAttributes=c(),C.insert=A().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=h(),o()(p.Z,C),p.Z&&p.Z.locals&&p.Z.locals},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var s={},a=[],r=0;r<n.length;r++){var A=n[r],l=i.base?A[0]+i.base:A[0],c=s[l]||0,d="".concat(l," ").concat(c);s[l]=c+1;var h=t(d),m={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var u=o(m,i);i.byIndex=r,e.splice(r,0,{identifier:d,updater:u,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var s=i(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<s.length;a++){var r=t(s[a]);e[r].references--}for(var A=i(n,o),l=0;l<s.length;l++){var c=t(s[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}s=A}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={id:i,exports:{}};return n[i](s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t(74),t(18)})();
//# sourceMappingURL=bundle.js.map