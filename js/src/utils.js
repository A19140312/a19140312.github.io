NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each(function(){var e=$(this);var i=e.attr("title");var t=e.parent("a");if(t.size()<1){var a=e.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");t=e.wrap('<a href="'+a+'"></a>').parent("a")}t.addClass("fancybox fancybox.image");t.attr("rel","group");if(i){t.append('<p class="image-caption">'+i+"</p>");t.attr("title",i)}});$(".fancybox").fancybox({helpers:{overlay:{locked:false}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var i=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var e=location.hash;if(e!==""){$(i+'li:has(a[href="'+e+'"])').addClass("active").siblings().removeClass("active");$(e).addClass("active").siblings().removeClass("active")}}).trigger("hashchange")});$(i+".tab").on("click",function(e){e.preventDefault();if(!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var i=$(this).find("a").attr("href");$(i).addClass("active").siblings().removeClass("active");if(location.hash!==""){history.pushState("",document.title,window.location.pathname+window.location.search)}}})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){var i=e.which===27&&$(".search-popup").is(":visible");if(i){$(".search-popup").hide();$(".search-popup-overlay").remove();$("body").css("overflow","")}})},registerBackToTop:function(){var s=50;var o=$(".back-to-top");$(window).on("scroll",function(){o.toggleClass("back-to-top-on",window.pageYOffset>s);var e=$(window).scrollTop();var i=NexT.utils.getContentVisibilityHeight();var t=e/i;var a=Math.round(t*100);var n=a>100?100:a;$("#scrollpercent>span").html(n)});o.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe");var i=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"];var c=new RegExp(i.join("|"));e.each(function(){var e=this;var i=$(this);var t=d(i);var a;if(this.src.search(c)>0){var n=h(t.width,t.height);i.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var s=document.createElement("div");s.className="fluid-vids";s.style.position="relative";s.style.marginBottom="20px";s.style.width="100%";s.style.paddingTop=n+"%";s.style.paddingTop===""&&(s.style.paddingTop="50%");var o=e.parentNode;o.insertBefore(s,e);s.appendChild(e);if(this.src.search("music.163.com")>0){a=d(i);var r=a.width>t.width||a.height<t.height;if(r){s.style.paddingTop=h(a.width,t.height)+"%"}}}});function d(e){return{width:e.width(),height:e.height()}}function h(e,i){return i/e*100}},addActiveClassToMenuItem:function(){var e=window.location.pathname;e=e==="/"?e:e.substring(0,e.length-1);$('.menu-item a[href^="'+e+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator;var i=e.userAgent;var t=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return t.test(i)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){if(!this.isDesktop()||this.isPisces()||this.isGemini()){return}$(".sidebar-toggle").trigger("click")},isMist:function(){return CONFIG.scheme==="Mist"},isPisces:function(){return CONFIG.scheme==="Pisces"},isGemini:function(){return CONFIG.scheme==="Gemini"},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body");var i=e[0];var t=i.offsetWidth-i.clientWidth;e.remove();return t},getContentVisibilityHeight:function(){var e=$("#content").height(),i=$(window).height(),t=e>i?e-i:$(document).height()-i;return t},getSidebarb2tHeight:function(){var e=CONFIG.sidebar.b2t?$(".back-to-top").height():0;return e},getSidebarSchemePadding:function(){var e=$(".sidebar-nav").css("display")=="block"?$(".sidebar-nav").outerHeight(true):0,i=$(".sidebar-inner"),t=i.innerWidth()-i.width(),a=this.isPisces()||this.isGemini()?t*2+e+CONFIG.sidebar.offset*2+this.getSidebarb2tHeight():t*2+e/2;return a}};$(document).ready(function(){e();function e(){var e;$(window).on("resize",function(){e&&clearTimeout(e);e=setTimeout(function(){var e=document.body.clientHeight-NexT.utils.getSidebarSchemePadding();t(e)},0)});var i=NexT.utils.getScrollbarWidth();if($(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".site-overview").css("width","calc(100% + "+i+"px)")}if($(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()){$(".post-toc").css("width","calc(100% + "+i+"px)")}t(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}function t(e){e=e||"auto";$(".site-overview, .post-toc").css("max-height",e)}});