(()=>{window.addComment=function(m){var u,p,f,c=m.document,o={commentReplyClass:"comment-reply-link",commentReplyTitleId:"reply-title",cancelReplyId:"cancel-comment-reply-link",commentFormId:"commentform",temporaryFormId:"wp-temp-form-div",parentIdFieldId:"comment_parent",postIdFieldId:"comment_post_ID"},k=m.MutationObserver||m.WebKitMutationObserver||m.MozMutationObserver,N="querySelector"in c&&"addEventListener"in m,D=!!c.documentElement.dataset;function x(){F(),k&&new k(O).observe(c.body,{childList:!0,subtree:!0})}function F(r){if(N&&(u=i(o.cancelReplyId),p=i(o.commentFormId),u)){let d=function(n){if((n.metaKey||n.ctrlKey)&&n.keyCode===13)return p.removeEventListener("keydown",d),n.preventDefault(),p.submit.click(),!1};var l=d;u.addEventListener("touchstart",L),u.addEventListener("click",L),p&&p.addEventListener("keydown",d);for(var t,a=function(n){var I=o.commentReplyClass;return n&&n.childNodes||(n=c),n=c.getElementsByClassName?n.getElementsByClassName(I):n.querySelectorAll("."+I),n}(r),e=0,y=a.length;e<y;e++)(t=a[e]).addEventListener("touchstart",S),t.addEventListener("click",S)}}function L(r){var t,a,e=i(o.temporaryFormId);e&&f&&(i(o.parentIdFieldId).value="0",t=e.textContent,e.parentNode.replaceChild(f,e),this.style.display="none",a=(e=(e=i(o.commentReplyTitleId))&&e.firstChild)&&e.nextSibling,e&&e.nodeType===Node.TEXT_NODE&&t&&(a&&a.nodeName==="A"&&a.id!==o.cancelReplyId&&(a.style.display=""),e.textContent=t),r.preventDefault())}function S(r){var t=i(o.commentReplyTitleId),t=t&&t.firstChild.textContent,d=this,a=C(d,"belowelement"),e=C(d,"commentid"),y=C(d,"respondelement"),l=C(d,"postid"),d=C(d,"replyto")||t;a&&e&&y&&l&&m.addComment.moveForm(a,e,y,l,d)===!1&&r.preventDefault()}function O(r){for(var t=r.length;t--;)if(r[t].addedNodes.length)return void F()}function C(r,t){return D?r.dataset[t]:r.getAttribute("data-"+t)}function i(r){return c.getElementById(r)}return N&&c.readyState!=="loading"?x():N&&m.addEventListener("DOMContentLoaded",x,!1),{init:F,moveForm:function(h,t,b,e,y){var l,d,n,I,R,v,E,h=i(h),b=(f=i(b),i(o.parentIdFieldId)),w=i(o.postIdFieldId),s=i(o.commentReplyTitleId),g=(s=s&&s.firstChild)&&s.nextSibling;if(h&&f&&b){y===void 0&&(y=s&&s.textContent),I=f,R=o.temporaryFormId,v=i(R),E=(E=i(o.commentReplyTitleId))?E.firstChild.textContent:"",v||((v=c.createElement("div")).id=R,v.style.display="none",v.textContent=E,I.parentNode.insertBefore(v,I)),e&&w&&(w.value=e),b.value=t,u.style.display="",h.parentNode.insertBefore(f,h.nextSibling),s&&s.nodeType===Node.TEXT_NODE&&(g&&g.nodeName==="A"&&g.id!==o.cancelReplyId&&(g.style.display="none"),s.textContent=y),u.onclick=function(){return!1};try{for(var T=0;T<p.elements.length;T++)if(l=p.elements[T],d=!1,"getComputedStyle"in m?n=m.getComputedStyle(l):c.documentElement.currentStyle&&(n=l.currentStyle),(l.offsetWidth<=0&&l.offsetHeight<=0||n.visibility==="hidden")&&(d=!0),l.type!=="hidden"&&!l.disabled&&!d){l.focus();break}}catch{}return!1}}}}(window);})();
/*! This file is auto-generated */

;
(()=>{var d=class{ver;type;finished;paged;genre_list;subjects;genre;baseAPI=window.dbAPIBase;token;constructor(e){this.ver="1.0.1",this.type="movie",this.finished=!1,this.paged=1,this.genre_list=[],this.genre=[],this.subjects=[],this.token=e.token,this._create()}on(e,t,s){var a=document.querySelectorAll(t);a.forEach(n=>{n.addEventListener(e,s)})}_fetchGenres(){document.querySelector(".db--genres").innerHTML="",fetch(this.baseAPI+"genres?token="+this.token+"&type="+this.type).then(e=>e.json()).then(e=>{e.data.length&&(this.genre_list=e.data,this._renderGenre())})}_handleGenreClick(){this.on("click",".db--genreItem",e=>{let t=e.currentTarget;if(t.classList.contains("is-active")){let s=this.genre.indexOf(t.innerText);t.classList.remove("is-active"),this.genre.splice(s,1),this.paged=1,this.finished=!1,this.subjects=[],this._fetchData();return}document.querySelector(".db--list").innerHTML="",document.querySelector(".lds-ripple").classList.remove("u-hide"),t.classList.add("is-active"),this.genre.push(t.innerText),this.paged=1,this.finished=!1,this.subjects=[],this._fetchData()})}_renderGenre(){document.querySelector(".db--genres").innerHTML=this.genre_list.map(e=>`<span class="db--genreItem${this.genre_list.includes(e.name)?" is-active":""}">${e.name}</span>`).join(""),this._handleGenreClick()}_fetchData(){fetch(this.baseAPI+"list?paged="+this.paged+"&type="+this.type).then(e=>e.json()).then(e=>{console.log(e.results),e.results.length?(document.querySelector(".db--list").classList.contains("db--list__card")?(this.subjects=[...this.subjects,...e.results],this._randerDateTemplate()):(this.subjects=[...this.subjects,...e.results],this._randerListTemplate()),document.querySelector(".lds-ripple").classList.add("u-hide")):(this.finished=!0,document.querySelector(".lds-ripple").classList.add("u-hide"))})}_randerDateTemplate(){let e=this.subjects.reduce((s,a)=>{let n=new Date(a.create_time),i=n.getFullYear(),r=n.getMonth()+1,l=`${i}-${r.toString().padStart(2,"0")}`;return Object.prototype.hasOwnProperty.call(s,l)?s[l].push(a):s[l]=[a],s},{}),t="";for(let s in e){let a=s.split("-");t+=`<div class="db--listBydate"><div class="db--titleDate "><div class="db--titleDate__day">${a[1]}</div><div class="db--titleDate__month">${a[0]}</div></div><div class="db--dateList__card">`,t+=e[s].map(n=>`<div class="db--item">${n.is_top250?'<span class="top250">Top 250</span>':""}<img src="${n.poster}" referrerpolicy="no-referrer" class="db--image"><div class="db--score ">${n.douban_score>0?'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>'+n.douban_score:""}${n.year>0?" \xB7 "+n.year:""}</div><div class="db--title"><a href="${n.link}" target="_blank">${n.name}</a></div></div>`).join(""),t+="</div></div>"}document.querySelector(".db--list").innerHTML=t}_randerListTemplate(){document.querySelector(".db--list").innerHTML=this.subjects.map(e=>`<div class="db--item">${e.is_top250?'<span class="top250">Top 250</span>':""}<img src="${e.poster}" referrerpolicy="no-referrer" class="db--image"><div class="ipc-signpost ">${e.create_time}</div><div class="db--score ">${e.douban_score>0?'<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" ><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>'+e.douban_score:""}${e.year>0?" \xB7 "+e.year:""}</div><div class="db--title"><a href="${e.link}" target="_blank">${e.name}</a></div>
                </div>
                </div>`).join("")}_handleScroll(){window.addEventListener("scroll",()=>{var e=window.scrollY||window.pageYOffset;document.querySelector(".block-more").offsetTop+-window.innerHeight<e&&document.querySelector(".lds-ripple").classList.contains("u-hide")&&!this.finished&&(document.querySelector(".lds-ripple").classList.remove("u-hide"),this.paged++,this._fetchData())})}_handleNavClick(){this.on("click",".db--navItem",e=>{if(e.currentTarget.classList.contains("current"))return;this.genre=[],this.type=e.currentTarget.dataset.type,document.querySelector(".db--list").innerHTML="",document.querySelector(".lds-ripple").classList.remove("u-hide"),document.querySelector(".db--navItem.current").classList.remove("current"),e.target.classList.add("current"),this.paged=1,this.finished=!1,this.subjects=[],this._fetchData()})}_create(){if(document.querySelector(".db--container")){let e=document.querySelector(".db--container");if(e.dataset.token)this.token=e.dataset.token;else return;let t=document.querySelector(".db--navItem.current");t instanceof HTMLElement&&(this.type=t.dataset.type);let s=document.querySelector(".db--list");s.dataset.type&&(this.type=s.dataset.type),this.type=="movie"&&document.querySelector(".db--genres").classList.remove("u-hide"),this._fetchData(),this._handleScroll(),this._handleNavClick()}document.querySelector(".js-db")&&document.querySelectorAll(".js-db").forEach(e=>{let t=e,s=t.dataset.id,a=t.dataset.type,n=t.parentNode;fetch(this.baseAPI+`${a}/${s}?token=${this.token}`).then(i=>{i.json().then(r=>{if(r.data){let l=r.data,c=document.createElement("div");c.classList.add("doulist-item"),c.innerHTML=`<div class="doulist-subject">
                            <div class="doulist-post"><img decoding="async" referrerpolicy="no-referrer" src="${l.poster}"></div>
                            <div class="doulist-content">
                            <div class="doulist-title"><a href="${l.link}" class="cute" target="_blank" rel="external nofollow">${l.name}</a></div>
                            <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:55%"></span></span><span class="rating_nums"> ${l.douban_score} </span></div>
                            <div class="abstract">${l.card_subtitle}</div>
                            </div>
                            </div>`,n.replaceWith(c)}})})}),document.querySelector(".db--collection")&&document.querySelectorAll(".db--collection").forEach(e=>{this._fetchCollection(e)})}_fetchCollection(e){let t=e.dataset.style?e.dataset.style:"card";fetch(obvInit.api+"v1/movies?type="+e.dataset.type+"&paged=1&genre=&start_time="+e.dataset.start+"&end_time="+e.dataset.end).then(s=>s.json()).then(s=>{if(s.length)if(t=="card")e.innerHTML+=s.map(a=>`<div class="doulist-item">
                            <div class="doulist-subject">
                            <div class="db--viewTime ">Marked ${a.create_time}</div>
                            <div class="doulist-post"><img referrerpolicy="no-referrer" src="${a.poster}"></div><div class="doulist-content"><div class="doulist-title"><a href="${a.link}" class="cute" target="_blank" rel="external nofollow">${a.name}</a></div><div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${a.douban_score}</span></div><div class="abstract">${a.remark||a.card_subtitle}</div></div></div></div>`).join("");else{let a=s.reduce((i,r)=>(Object.prototype.hasOwnProperty.call(i,r.create_time)?i[r.create_time].push(r):i[r.create_time]=[r],i),{}),n="";for(let i in a)n+=`<div class="db--date">${i}</div><div class="db--dateList">`,n+=a[i].map(r=>`<div class="db--card__list"">
                                    <img referrerpolicy="no-referrer" src="${r.poster}">
                                    <div>
                                    <div class="title"><a href="${r.link}" class="cute" target="_blank" rel="external nofollow">${r.name}</a></div>
                                    <div class="rating"><span class="allstardark"><span class="allstarlight" style="width:75%"></span></span><span class="rating_nums">${r.douban_score}</span></div>
                                    ${r.remark||r.card_subtitle}
                                    </div>
                                    </div>`).join(""),n+="</div>";e.innerHTML=n}})}};new d({token:window.WPD_TOKEN});})();

;
(()=>{var c=class{getCookie(e){if(0<document.cookie.length){var o=document.cookie.indexOf(e+"=");if(o!=-1){o=o+e.length+1;var t=document.cookie.indexOf(";",o);return t==-1&&(t=document.cookie.length),document.cookie.substring(o,t)}}return""}setCookie(e,o,t){var s=new Date;s.setTime(s.getTime()+24*t*60*60*1e3);var i="expires="+s.toUTCString();document.cookie=e+"="+o+";"+i+";path=/"}showNotice(e,o="success"){let t=`<div class="notice--wrapper">${e}</div>`;document.querySelector("body").insertAdjacentHTML("beforeend",t),document.querySelector(".notice--wrapper").classList.add("is-active"),setTimeout(()=>{document.querySelector(".notice--wrapper").remove()},3e3)}};var u=class{selector;timeFormat={second:"second ago",seconds:"seconds ago",minute:"minute ago",minutes:"minutes ago",hour:"hour ago",hours:"hours ago",day:"day ago",days:"days ago",week:"week ago",weeks:"weeks ago",month:"month ago",months:"months ago",year:"year ago",years:"years ago"};doms=[];constructor(e){this.selector=e.selector,e.timeFormat&&(this.timeFormat=e.timeFormat),this.init(),setTimeout(()=>{this.refresh()},1e3*5)}init(){this.doms=Array.from(document.querySelectorAll(this.selector)),this.doms.forEach(e=>{e.innerText=this.humanize_time_ago(e.attributes.datetime.value)})}humanize_time_ago(e){let o=new Date(e),t=Date.now()/1e3-Number(o.getTime()/1e3);return t<3600?`${Math.ceil(t/60)} ${Math.ceil(t/60)==1?this.timeFormat.second:this.timeFormat.seconds}`:t<86400?`${Math.ceil(t/3600)} ${Math.ceil(t/3660)==1?this.timeFormat.hour:this.timeFormat.hours}`:t<86400*30?`${Math.ceil(t/86400)} ${Math.ceil(t/86400)==1?this.timeFormat.day:this.timeFormat.days}`:t<86400*30*12?`${Math.ceil(t/(86400*30))} ${Math.ceil(t/(86400*30))==1?this.timeFormat.month:this.timeFormat.months}`:o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate()}refresh(){this.doms.forEach(e=>{e.innerText=this.humanize_time_ago(e.attributes.datetime.value)})}},f=u;var p=class extends c{singleSelector=".post--single";likeButtonSelctor=".like-btn";articleSelector=".post--item";viewSelector=".article--views";actionDomain;text="";likeButton=null;post_id;is_single=!1;constructor(e){if(super(),this.singleSelector=e.singleSelector??this.singleSelector,this.likeButtonSelctor=e.likeButtonSelctor??this.likeButtonSelctor,this.articleSelector=e.articleSelector??this.articleSelector,this.viewSelector=e.viewSelector??this.viewSelector,this.actionDomain=e.actionDomain,this.text=e.text??this.text,this.is_single=!!document.querySelector(this.singleSelector),this.is_single){let o=document.querySelector(this.singleSelector);this.post_id=o.dataset.id??"",this.initArticleLike(),this.initArticleView()}else this.initArticlesView()}initArticleView(){fetch(this.actionDomain+"post/"+this.post_id+"/view",{method:"post"}).then(e=>{e.json().then(o=>{document.querySelector(this.viewSelector).innerText=o.views+this.text})})}initArticlesView(){let e=Array.from(document.querySelectorAll(this.articleSelector));if(e.length===0)return;let o=[];e.forEach(s=>o.push(s.dataset.id));let t=o.join(",");fetch(this.actionDomain+"post/views?post_ids="+t).then(s=>{s.json().then(i=>{let a=i.results;e.forEach(n=>{n.querySelector(this.viewSelector)&&(n.querySelector(this.viewSelector).innerText=(a.find(r=>r.post_id==n.dataset.id)?a.find(r=>r.post_id==n.dataset.id).views:0)+this.text)})})})}initArticleLike(){this.likeButton=document.querySelector(this.likeButtonSelctor),this.likeButton&&(fetch(this.actionDomain+"post/"+this.post_id+"/like").then(e=>{e.json().then(o=>{this.likeButton.querySelector(".count").innerText=o.likes})}),this.likeButton.addEventListener("click",()=>{this.handleLike()}),this.getCookie("like_"+this.post_id)&&this.likeButton.classList.add("is-active"))}handleLike(){if(this.getCookie("like_"+this.post_id))return this.showNotice("You have already liked this post");if(this.likeButton){let e=this.actionDomain+"post/"+this.post_id+"/like";fetch(e,{method:"post"}).then(o=>o.json()).then(o=>{this.showNotice("Thanks for your like");let t=this.likeButton?.querySelector(".count");t&&(t.innerText=o.likes),this.setCookie("like_"+this.post_id,"1",1)}),this.likeButton?.classList.add("is-active")}}},S=p;var d=class{loading=!1;post_id;total=0;total_paged=1;paged=1;constructor(){document.querySelector(".post--ingle__comments")&&(this.post_id=document.querySelector(".post--ingle__comments").dataset.id,this.fetchComments(),this.init())}fetchComments(){fetch(window.commentDomain+"/post/"+this.post_id+"/comments?paged="+this.paged).then(e=>{e.json().then(o=>{let t=o.payload.comments;this.total=o.payload.total,this.total_paged=o.payload.total_paged,this.total_paged>1&&this.randerNav(),document.querySelector(".comments--title .count").innerHTML=this.total;let s=t.map(i=>{let a="";return i.children&&(a=`<ol class="children">${i.children.map(n=>`<li class="comment" itemtype="http://schema.org/Comment" data-id="${n.id}" itemscope="" itemprop="comment" id="comment-${n.id}">
                                    <div class="comment-body">
                                    <div class="comment-meta">
                                    <div class="comment--avatar">
                                    ${n.avatar}
                                    </div>
                                    <div class="comment--meta">
                                    <div class="comment--author" itemprop="author">${n.comment_author}<span class="dot"></span>
                                    <div class="comment--time humane--time" itemprop="datePublished" datetime="2023-09-22T08:24:25+00:00">${n.comment_time}</div>
                                    <span class="comment-reply-link u-cursorPointer " onclick="return addComment.moveForm('comment-${n.id}', '${n.id}', 'respond', '${document.querySelector(".post--ingle__comments").dataset.id}')"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" class=""><g><path d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"></path></g></svg></span>                            </div>
                            </div>
                        </div>
                        <div class="comment-content" itemprop="description">
                            ${n.comment_text}
                        </div>
                    </div>
        </li>`).join("")}</ol>`),`<li class="comment parent" itemtype="http://schema.org/Comment" data-id="${i.id}" itemscope="" itemprop="comment" id="comment-${i.id}">
                            <div class="comment-body">
                                <div class="comment-meta">
                                    <div class="comment--avatar">
                                        ${i.avatar}
                                    </div>
                                    <div class="comment--meta">
                                        <div class="comment--author" itemprop="author">${i.comment_author}<span class="dot"></span>
                                            <div class="comment--time humane--time" itemprop="datePublished" datetime="2023-09-22T08:24:25+00:00">${i.comment_time}</div>
                                            <span class="comment-reply-link u-cursorPointer " onclick="return addComment.moveForm('comment-${i.id}', '${i.id}', 'respond', '${document.querySelector(".post--ingle__comments").dataset.id}')"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" class=""><g><path d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"></path></g></svg></span>                            </div>
                                    </div>
                                </div>
                                <div class="comment-content" itemprop="description">
                                    ${i.comment_text}
                                </div>
                            </div>
                            ${a}
                </li>`}).join("");document.querySelector(".commentlist ").innerHTML=s})})}randerNav(){let e=this.paged==1?"disabled":"",t=`<span class="cnav-item ${this.paged==this.total_paged?"disabled":""}" data-action="pre">
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M13.402 16.957l-6.478-6.479L13.402 4l.799.71-5.768 5.768 5.768 5.77z" fill-rule="evenodd">
        </path></svg> Older Comments</span><span class="chartPage-verticalDivider"></span><span class="cnav-item ${e}" data-action="next">Newer Comments
        <svg class="svgIcon" width="21" height="21" viewBox="0 0 21 21">
        <path d="M8.3 4.2l6.4 6.3-6.4 6.3-.8-.8 5.5-5.5L7.5 5" fill-rule="evenodd">
        </path></svg>
        </span>`;document.querySelector(".commentnav").innerHTML=t,document.querySelectorAll(".cnav-item").forEach(s=>{s.addEventListener("click",i=>{if(s.classList.contains("disabled"))return;console.log(s);let a=s.attributes["data-action"].value;console.log(a),a=="pre"?this.paged+=1:this.paged-=1,this.fetchComments()})})}init(){document.querySelector(".comment-form")&&document.querySelector(".comment-form")?.addEventListener("submit",e=>{if(e.preventDefault(),this.loading)return;let o=document.querySelector(".comment-form"),t=new FormData(o),s={};t.forEach((i,a)=>s[a]=i),this.loading=!0,fetch(window.commentDomain+"/post/"+this.post_id+"/comment",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{if(this.loading=!1,i.status!=200)return;let a=document.getElementById("cancel-comment-reply-link"),n=document.getElementById("respond"),r=document.getElementById("wp-temp-form-div"),l=i.data,g=`<li class="comment" id="comment-${l.comment_ID}">
                        <div class="comment-body comment-body__fresh">
                            <footer class="comment-meta">
                                <div class="comment--avatar">
                                    ${l.avatar}
                                </div>
                                <div class="comment--meta">
                                    <div class="comment--author">${l.comment_author}<span class="dot"></span>
                                    <time>\u521A\u521A</time>
                                    </div>
                                </div>
                            </footer>
                            <div class="comment-content">
                                ${l.comment_text}
                            </div>
                        </div>
                    </li>`,h=document.querySelector("#comment_parent")?.value;a.style.display="none",a.onclick=null,document.getElementById("comment_parent").value="0",r&&n&&r.parentNode&&r.parentNode.removeChild(r),document.querySelector(".comment-body__fresh")&&document.querySelector(".comment-body__fresh")?.classList.remove("comment-body__fresh"),document.getElementById("comment").value="",h!="0"?(document.querySelector("#comment-"+h)?.insertAdjacentHTML("beforeend",'<ol class="children">'+g+"</ol>"),console.log(h)):(document.querySelector(".no--comment")&&document.querySelector(".no--comment")?.remove(),document.querySelector(".commentlist")?.insertAdjacentHTML("beforeend",g));let y=document.querySelector(`#comment-${l.comment_ID}`);y&&y.scrollIntoView({behavior:"smooth"})})})}};var v=class extends c{is_single=!1;post_id=0;is_archive=!1;VERSION="0.4.1";like_btn;selctor=".like-btn";actionDomain=window.actionDomain;constructor(){super(),this.initCopyright(),this.initThemeSwitch(),this.initBack2Top(),this.initSearch()}initSearch(){document.querySelector('[data-action="show-search"]').addEventListener("click",()=>{document.querySelector(".site--header__center .inner").classList.toggle("search--active")})}initBack2Top(){if(document.querySelector(".backToTop")){let e=document.querySelector(".backToTop");window.addEventListener("scroll",()=>{(window.scrollY||window.pageYOffset)>200?e.classList.add("is-active"):e.classList.remove("is-active")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}}initCopyright(){let e=`<div class="site--footer__info">
        Theme <a href="https://fatesinger.com/101971" target="_blank">farallon</a> by bigfa / version ${this.VERSION}
    </div>`;document.querySelector(".site--footer__content").insertAdjacentHTML("afterend",e),document.querySelector(".icon--copryrights").addEventListener("click",()=>{document.querySelector(".site--footer__info").classList.toggle("active")})}initThemeSwitch(){let e=localStorage.getItem("theme")?localStorage.getItem("theme"):"auto",o=`<div class="fixed--theme">
        <span class="${e=="dark"?"is-active":""}" data-action-value="dark">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
        </span>
        <span class="${e=="light"?"is-active":""}" data-action-value="light">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2"></path>
                <path d="M12 21v2"></path>
                <path d="M4.22 4.22l1.42 1.42"></path>
                <path d="M18.36 18.36l1.42 1.42"></path>
                <path d="M1 12h2"></path>
                <path d="M21 12h2"></path>
                <path d="M4.22 19.78l1.42-1.42"></path>
                <path d="M18.36 5.64l1.42-1.42"></path>
            </svg>
        </span>
        <span class="${e=="auto"?"is-active":""}"  data-action-value="auto">
            <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                style="color: currentcolor; width: 16px; height: 16px;">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
            </svg>
        </span>
    </div>`;document.querySelector("body").insertAdjacentHTML("beforeend",o),document.querySelectorAll(".fixed--theme span").forEach(t=>{t.addEventListener("click",()=>{t.classList.contains("is-active")||(document.querySelectorAll(".fixed--theme span").forEach(s=>{s.classList.remove("is-active")}),t.dataset.actionValue=="dark"?(localStorage.setItem("theme","dark"),document.querySelector("body").classList.remove("auto"),document.querySelector("body").classList.add("dark"),t.classList.add("is-active")):t.dataset.actionValue=="light"?(localStorage.setItem("theme","light"),document.querySelector("body").classList.remove("auto"),document.querySelector("body").classList.remove("dark"),t.classList.add("is-active")):t.dataset.actionValue=="auto"&&(localStorage.setItem("theme","auto"),document.querySelector("body").classList.remove("dark"),document.querySelector("body").classList.add("auto"),t.classList.add("is-active")))})})}};new S({singleSelector:".post--single",articleSelector:".post--item",likeButtonSelctor:".like-btn",actionDomain:window.actionDomain});new v;new f({selector:".humane--time",timeFormat:window.timeFormat});new d;})();
