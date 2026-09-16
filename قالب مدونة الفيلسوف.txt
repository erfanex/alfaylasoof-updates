<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<!-- Alfaylasoof PageSpeed template 2026-09-16: Termly/Ads idle, inline WebP logo, 400px cards, optional FA, deferred RSS/Unsplash --><html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' b:templateVersion='1.3.0' class='rtl' dir='rtl' expr:lang='data:blog.localeUnderscoreDelimited' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
  <head>
    <script type='text/javascript'>
//<![CDATA[
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 1500
});
window.alfWhenIdle = function (fn, wait) {
  wait = wait || 4500;
  var done = false;
  function run() {
    if (done) return;
    done = true;
    try { fn(); } catch (e) {}
  }
  function afterLoad() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(function () { setTimeout(run, 200); }, { timeout: wait });
    } else {
      setTimeout(run, wait);
    }
  }
  if (document.readyState === 'complete') afterLoad();
  else window.addEventListener('load', afterLoad);
  setTimeout(run, wait + 2000);
  ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, run, { once: true, passive: true });
  });
};
window.alfLoadScript = function (src, attrs) {
  var s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (attrs) {
    Object.keys(attrs).forEach(function (k) { s.setAttribute(k, attrs[k]); });
  }
  document.head.appendChild(s);
  return s;
};
//]]>
</script>
    <!-- =========================================================
         HEAD ORDER (AdSense / Core Web Vitals friendly):
         1) Consent defaults  2) Viewport  3) Fonts  4) FOUC theme
         5) AdSense library (once)  6) GTM
         ========================================================= -->
<meta content='width=device-width, initial-scale=1, viewport-fit=cover' name='viewport'/>

    <!-- MODULE: ARABIC FONTS (fast load) -->
    <link crossorigin='anonymous' href='https://fonts.gstatic.com' rel='preconnect'/>
<link as='style' href='https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&amp;display=swap' onload='this.onload=null;this.rel=&apos;stylesheet&apos;' rel='preload'/>
<noscript><link href='https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&amp;display=swap' rel='stylesheet'/></noscript>

    <script>
    // FOUC prevention &#8212; apply saved theme before paint
    (function(){try{var t=localStorage.getItem(&#39;alf-theme&#39;)===&#39;blue&#39;?&#39;blue&#39;:&#39;dark&#39;;document.documentElement.setAttribute(&#39;data-theme&#39;,t);}catch(e){document.documentElement.setAttribute(&#39;data-theme&#39;,&#39;dark&#39;);}})();
    </script>

    <!-- Third parties AFTER LCP: Termly + AdSense + GTM -->



    <!-- =========================================================
         MODULE: PHARAOH HEADER
         الهدف: هيدر واحد معزول &#8212; سطح المكتب أفقي / الهاتف قائمة منسدلة.
         لا يعتمد على JavaScript لتوليد CSS.
         ========================================================= -->
    <style id='alf-header-module'>
/* MODULE: ALFAYLASOOF HEADER v9 &#8212; Desktop logo top-right / Mobile one-row controls */
#alfHeader{position:relative;z-index:10000;width:100%;font-family:&#39;Noto Kufi Arabic&#39;,Tahoma,Arial,sans-serif;background:#0b0f14;border-bottom:1px solid rgba(212,175,55,.45);box-shadow:0 5px 20px rgba(0,0,0,.25)}
#alfHeader *{box-sizing:border-box}
.alf-header-inner{position:relative;width:100%;max-width:1200px;margin:0 auto;padding:8px 16px 10px}
.alf-header-logo{display:flex;justify-content:flex-end;align-items:center;min-height:45px;margin:0 0 8px}
.alf-header-logo a{display:block;line-height:0}
.alf-header-logo img{display:block;width:auto;height:45px;max-width:183px;object-fit:contain}
.alf-main-nav{display:flex;align-items:center;justify-content:flex-start;direction:rtl;gap:6px;width:100%;overflow:visible}
.alf-main-nav&gt;a,.alf-more-toggle{display:inline-flex;align-items:center;justify-content:center;gap:5px;min-height:40px;padding:7px 11px;border:1px solid rgba(56,189,248,.35);border-radius:9px;background:linear-gradient(180deg,#13263c,#0d1b2c);color:#eaf6ff;font-size:13px;font-weight:700;line-height:1.2;text-decoration:none;white-space:nowrap;cursor:pointer}
.alf-main-nav&gt;a:hover,.alf-main-nav&gt;a:focus,.alf-more-toggle:hover,.alf-more-toggle:focus{color:#fff;border-color:#38bdf8;background:linear-gradient(180deg,#17395a,#102945);outline:none}
.alf-more{position:relative;display:inline-flex;flex:0 0 auto}
.alf-more-toggle{color:#ffd84a;border-color:rgba(212,175,55,.65)}
.alf-more-panel{position:absolute;top:calc(100% + 7px);right:0;display:none;flex-direction:column;width:245px;padding:6px 0;background:#0b121b;border:1px solid rgba(212,175,55,.55);border-radius:12px;box-shadow:0 16px 36px rgba(0,0,0,.55);z-index:10001}
.alf-more.is-open&gt;.alf-more-panel{display:flex}
.alf-more-panel a{display:flex;align-items:center;width:100%;min-height:44px;padding:9px 15px;color:#eef7ff;background:transparent;border:0;border-bottom:1px solid rgba(148,163,184,.14);font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap;direction:rtl}
.alf-more-panel a:last-child{border-bottom:0}
.alf-more-panel a:hover,.alf-more-panel a:focus{color:#ffd84a;background:rgba(56,189,248,.10);outline:none}
.alf-header-controls-row{display:none}
.alf-mobile-nav{display:none}
.alf-header-actions{display:flex;align-items:center;gap:8px}
.alf-header-actions .theme-toggle-btn,.alf-header-actions .search-button-flex{width:42px!important;height:42px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;border:1px solid #d4af37!important;border-radius:10px!important;background:linear-gradient(145deg,#13263c,#0d1b2c)!important;color:#ffd700!important;flex:0 0 auto!important}
.alf-header-actions .theme-toggle-btn{appearance:none;-webkit-appearance:none;cursor:pointer}
.alf-header-actions .search-button-flex{font-size:0!important}
.alf-header-actions .search-button-flex:before{content:&#39;🔍&#39;;font-size:20px;line-height:1;display:block}
#alfHeader #search-flex{z-index:10002}
@media (max-width:699px){
 #alfHeader{box-shadow:none}
 .alf-header-inner{max-width:none;height:70px;padding:8px 12px}
 .alf-header-logo{position:absolute;top:8px;left:50%;transform:translateX(-50%);display:flex;justify-content:center;align-items:center;width:160px;height:42px;min-height:42px;margin:0;z-index:2}
 .alf-header-logo img{height:42px;max-width:160px}
 .alf-header-controls-row{display:flex;align-items:center;justify-content:space-between;direction:rtl;width:100%;height:54px;min-height:54px;position:relative;z-index:3}
 .alf-menu-toggle{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:42px;height:42px;padding:7px 13px;border:1px solid #d4af37;border-radius:10px;background:linear-gradient(145deg,#2a1f0e,#3d2e14);color:#ffd700;font-family:inherit;font-size:13px;font-weight:800;cursor:pointer;flex:0 0 auto}
 .alf-header-actions{direction:rtl;display:flex;align-items:center;gap:8px;flex:0 0 auto}
 .alf-header-actions .theme-toggle-btn,.alf-header-actions .search-button-flex{width:42px!important;height:42px!important}
 .alf-header-actions .search-button-flex:before{font-size:19px}
 .alf-main-nav{display:none}
 .alf-mobile-nav{display:none;position:absolute;top:100%;right:8px;left:8px;max-height:80vh;overflow:auto;flex-direction:column;align-items:stretch;padding:6px 0;background:#0c131c;border:1px solid rgba(56,189,248,.35);border-radius:0 0 14px 14px;box-shadow:0 16px 38px rgba(0,0,0,.58);z-index:10003;direction:rtl}
 .alf-mobile-nav.is-open{display:flex}
 .alf-mobile-nav&gt;a,.alf-mobile-nav .alf-more-toggle{display:flex;align-items:center;justify-content:flex-start;gap:10px;width:100%;min-height:48px;padding:11px 18px;border:0;border-bottom:1px solid rgba(56,189,248,.18);border-radius:0;background:transparent;color:#edf7ff;font-family:inherit;font-size:15px;font-weight:700;text-decoration:none;text-align:right;white-space:nowrap}
 .alf-mobile-nav&gt;a:hover,.alf-mobile-nav&gt;a:focus{background:rgba(56,189,248,.10);color:#fff;outline:none}
 .alf-mobile-nav .alf-more{display:flex;flex-direction:column;width:100%}
 .alf-mobile-nav .alf-more-toggle{justify-content:space-between;color:#ffd700;background:linear-gradient(145deg,#2a1f0e,#3d2e14)}
 .alf-mobile-nav .alf-more-panel{position:static;width:100%;display:none;border:0;border-radius:0;padding:0;background:#080d13;box-shadow:none}
 .alf-mobile-nav .alf-more.is-open&gt;.alf-more-panel{display:flex}
 .alf-mobile-nav .alf-more-panel a{min-height:46px;padding:10px 24px;font-size:14px}
}
@media (min-width:700px){
 .alf-menu-toggle,.alf-header-actions{display:none!important}
 .alf-header-controls-row{display:none!important}
 .alf-header-logo{justify-content:flex-end}
 .alf-main-nav{display:flex!important;flex-wrap:nowrap}
}
</style>


<meta content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' name='robots'/>
<b:if cond='data:view.isHomepage'>
  <title>الفيلسوف</title>
<b:else/>
  <title><data:view.title.escaped/></title>
</b:if>
<meta expr:content='&quot;text/html; charset=&quot; + data:blog.encoding' http-equiv='Content-Type'/>
<meta content='blogger' name='generator'/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='icon' type='image/x-icon'/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='icon' sizes='32x32'/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='icon' sizes='100x100'/>
<link expr:href='data:blog.blogspotFaviconUrl' rel='apple-touch-icon'/>
<meta expr:content='data:blog.blogspotFaviconUrl' name='msapplication-TileImage'/>
<meta expr:content='data:skin.vars.keycolor' name='theme-color'/>
<meta expr:content='data:skin.vars.keycolor' name='msapplication-navbutton-color'/>
<b:if cond='data:blog.adultContent'>
<meta content='adult' name='rating'/>
</b:if>
<link expr:href='data:view.url.canonical' rel='canonical'/>
<data:blog.feedLinks/><data:blog.meTag/>
<meta expr:content='data:view.description.escaped' name='description'/>
<!-- Metadata for Open Graph protocol available here http://ogp.me/. -->
<b:if cond='data:view.isHomepage'>
<meta content='website' property='og:type'/>
</b:if>
<b:if cond='data:view.isSingleItem'>
<meta content='article' property='og:type'/>
</b:if>
<b:if cond='data:view.isMultipleItems and not data:view.isHomepage'>
<meta content='website' property='og:type'/>
</b:if>
<meta expr:content='data:view.title.escaped' property='og:title'/>
<meta expr:content='data:view.url.canonical' property='og:url'/>
<meta expr:content='data:view.description.escaped' property='og:description'/>
<meta expr:content='data:blog.title.escaped' property='og:site_name'/>
<b:tag cond='data:view.isMultipleItems and data:widgets.Blog.first.posts[0].featuredImage' expr:content='data:widgets.Blog.first.posts[0].featuredImage' name='meta' property='og:image'/>
<b:if cond='data:view.featuredImage'>
<meta expr:content='data:view.featuredImage' property='og:image'/>
<meta expr:content='data:view.featuredImage' name='twitter:image'/>
</b:if>
<b:if cond='data:view.isHomepage'>
<meta expr:content='data:blog.title' property='og:title'/>
</b:if>
<b:if cond='data:view.isPost'>
<meta expr:content='data:blog.pageName' property='og:title'/>
</b:if>
<!-- لا نستخدم hreflang لأن الموقع إصدار عربي واحد وليس له نسخ لغوية متوازية. -->
<meta content='summary_large_image' name='twitter:card'/>
<meta expr:content='data:view.title.escaped' name='twitter:title'/>

<meta expr:content='data:view.description.escaped' name='twitter:description'/>

<meta content='ar_AR' property='og:locale'/>
<!-- English/ID og:locale:alternate removed -->
<b:if cond='data:view.isHomepage'>
<script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;WebSite&quot;,&quot;name&quot;:&quot;<data:view.title.escaped/>&quot;,&quot;url&quot;:&quot;<data:view.url.canonical/>&quot;,&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,&quot;target&quot;:&quot;<data:view.url.canonical/>search?q={search_term_string}&quot;,&quot;query-input&quot;:&quot;required name=search_term_string&quot;}}</script>
</b:if>
<link href='//www.blogger.com' rel='dns-prefetch'/>







<!-- Font Awesome loaded via woff2-only @font-face in skin (font-display:optional) -->
<b:if cond='!data:view.isLayoutMode'>
<!-- Template Style CSS -->
<b:skin version='1.3.0'><![CDATA[

/*-- Font Awesome Free 5.15.1 (woff2 only, font-display:optional) --*/
@font-face{font-family:"Font Awesome 5 Brands";font-style:normal;font-weight:400;font-display:optional;src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-brands-400.woff2) format("woff2")}.fab{font-family:"Font Awesome 5 Brands";font-weight:400}
@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:400;font-display:optional;src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-regular-400.woff2) format("woff2")}.far{font-family:"Font Awesome 5 Free";font-weight:400}
@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:900;font-display:optional;src:url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/webfonts/fa-solid-900.woff2) format("woff2")}.fa,.far,.fas{font-family:"Font Awesome 5 Free"}.fa,.fas{font-weight:900}
/*-- Reset CSS Start Here --*/

:root{
--body-font:'$(main.font.family)', Arial, sans-serif;
--title-font:'$(title.font.family)', Arial, sans-serif;
--meta-font:'$(meta.font.family)', Arial, sans-serif;
--text-font:'$(text.font.family)', Arial, sans-serif;
--text-font-color:$(text.post.inner);
--runs-solid-color:#c1bbbb;
--black-color:#404040;
--hero-color:#aaaaaa;
--main-menu-bg:#0b0f14;
--snippet-color:#aba4a4;
--solid-border:#ddd;
--top-bar:#0b0f14;
--featured-posts-title:$(featured.posts.title);
--button-bg-color:$(main.button.color);
--button-text-color:$(main.button.text.color);
--lables-buttons-color:$(lables.buttons.color);
--lables-text-color:$(lables.text.color);
--email-bg-color:$(email.bg.color);
--email-text-color:$(email.text.color);
--cloud-bg-color:$(cloud.bg.color);
--cloud-border-color:$(cloud.bg.color);
--list-text-color:$(list.text.color);
--theme-text-color:$(theme.text.color);
--featured-gadgets-title:$(featured.gadgets.title);
--placeholder-text-color:#3e3e3e;
--main-menu-text-color:$(main.menu.text.color);
--sub-menu-text-color:$(sub.menu.text.color);
--footer-title-color:$(footer.title.color);
--footer-copyright-bg:$(footer.copyright.bg);
--body-color-main:$(body.background);
--all-link-color:$(main.link.color);
--black-text:#343434;
--main-text-color:$(main.text.color);
--mobile-menu-bg:$(mobile.menu.bg.color);
--top-menu-text:$(top.bar.menufont);
--white-bg:#ffffff;
--block-bg:#ffffff;
--featured-posts-title-featured:#ffffff;
--white-label-color:#ffffff;
--bg-cards:#ffffff;
--bg-cards-video:#121212;
--bg-cards-shadow:0px 3px 3px 0 rgb(0 0 0 / 0.08);
--bt-breaking:rgba(0 0 0 / 0.08);
--bt-breaking-text:#626262;
--shadow-top:0 0 20px rgba(0,0,0,.15);
--shadow-top-fixed:5px 5px 8px 0px rgba(224 223 223 / 0.48);
--ads-bg:rgb(143 183 255 / 0.20);
--ads-text:#898989;
--buttons-category-text:#1d1d1d;
--snip-text-color:#eeeeee;
--search-bt-text:#626262;
--comments-dec:#333;
--sticky-bg:#f1f1f1;
--input-form:transparent;
--bt-home:#f2f7fb;
--cm-count:#555555;
--shadow-light:0px 2px 5px 1px rgb(0 0 0 / 0.10);
--navigation-runs-text:#4e4e4e;
--sticky-lists:#f7fcff;
--post-snip-data:#707070;
--post-snip-open:#383838;
--ico-relative:#e60000;
--ico-relative-hover:rgb(0 0 0 / 0.51);
--front-bg-lists:#fff;
--share-author-links:#585858;
--box-posts-share:#f1f1f1;
--title-share:#1c1c1c;
--title-share-fa:#5c5c5c;
--footer-text-color:$(footer.text.color);
--footer-about-text:$(footer.about.color);
--footer-bg-color:$(footer.background.color);
--footer-gadgets-title:$(footer.gadgets.title);
--main-logo-text-color:$(main.logo.text.color);
--submenu-bg-color:$(submenu.background.color);
--comment-content:#f6f6f6;
--comment-text:#5e5e5e;
--label-text-color:#2c2c2c;
--pager-text-color:$(body.text.color);
--back-top:rgb(90 90 90 / 0.18);
--box-shadows:rgb(102 102 102 / 0.13);
}
html[data-theme="dark"],
html:not([data-theme]){

--main-logo-text-color:#d4d4d4;
--all-link-color:rgba(255,255,255,.7);
--body-color-main:#111827;
--main-menu: #383838;
--text-font-color:#f0f3f7;
--shadow-top:none;
--top-bar:#1f2937;
--cloud-border-color:rgb(100 100 100 / 0.66);
--cloud-bg-color:#ffffff;
--mobile-menu-bg:#1f2937;
--input-form:rgb(112 112 112 / 0.34);
--shadow-top-fixed:none;
--white-label-color:#464646;
--search-bt-text:#b5b5b5;
--main-menu-text-color:#dadada;
--sub-menu-text-color:#dadada;
--title-share:#dddddd;
--black-color:#d9d9d9;
--title-share-fa:#dddddd;
--front-bg-lists:#111827;
--box-shadows:transparent;
--bt-home:#1f2937;
--sticky-lists:#1f2937;
--main-menu-bg:#1f2937;
--post-snip-open:#eee;
--footer-gadgets-title:#c3c3c3;
--top-menu-text:#ffffff;
--footer-title-color:#adadad;
--sticky-bg:#1f2937;
--placeholder-text-color:#dadada;
--theme-text-color:#dadada;
--featured-gadgets-title:#dadada;
--ads-bg:#1f2937;
--box-posts-share:#1f2937;
--submenu-bg-color:#1f2937;
--label-text-color:#a1a1a1;
--featured-posts-title: #c3c3c3;
--ads-text:#dadada;
--buttons-category-text:#dadada;
--bg-cards:#1f2937;
--block-bg:#1f2937;
--black-text:#f3f8fb;
--post-snip-data:#a5a5a5;
--comments-dec:#cecece;
--comment-content:#26313e;
--comment-text:#c1c1c1;
--footer-bg-color:#1f2937;
--footer-text-color:#E4E4E4;
--cm-count:#E4E4E4;
--main-text-color:#E4E4E4;
--navigation-runs-text:#c3c3c3;
--share-author-links:#E4E4E4;
--footer-copyright-bg:#111827;
}
a,abbr,acronym,address,applet,b,big,blockquote,body,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,var{padding:0;border:0;outline:0;vertical-align:baseline;background:0;text-decoration:none}
form,textarea,input,button{font-family:var(--body-font);-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;box-sizing:border-box}
.CSS_LIGHTBOX{z-index:999999!important}.CSS_LIGHTBOX_ATTRIBUTION_INDEX_CONTAINER .CSS_HCONT_CHILDREN_HOLDER > .CSS_LAYOUT_COMPONENT.CSS_HCONT_CHILD:first-child > .CSS_LAYOUT_COMPONENT{opacity:0}
input,textarea{outline:none}
/*! normalize.css v3.0.1 | MIT License | git.io/normalize */
dl,ul{list-style-position:inside;font-weight:400;list-style:none}
ul li{list-style:none}
caption,th{text-align:center}
html,body{text-size-adjust:none;-webkit-text-size-adjust:none;-moz-text-size-adjust:none;-ms-text-size-adjust:none}
.separator a{clear:none!important;float:none!important;margin-left:0!important;margin-right:0!important}
#Navbar1,#navbar-iframe,.widget-item-control,a.quickedit,.home-link,.feed-links{display:none!important}
.center{display:table;margin:0 auto;position:relative}
.widget > h2,.widget > h3{display:none}
.widget iframe,.widget img{max-width:100%}
.container{position:relative;max-width: 100%;width: 1145px;}
.center{display:table;margin:0 auto;position:relative}
img{border:0;position:relative;max-width:100%;height:auto;}
.post-filter-image{aspect-ratio:16/9;overflow:hidden;background:#111827}
.post-filter-image img,.snip-thumbnail{width:100%;height:100%;object-fit:cover;aspect-ratio:16/9}
body.home .grid-posts > .blog-post:nth-child(n+7){display:none!important}
a,a:visited{text-decoration:none}
.clearfix{clear:both}
.section,.widget,.widget ul{margin:0;padding:0}
a{color:var(--all-link-color)}
a img{border:0}
abbr{text-decoration:none}
.widget>h2,.widget>h3{display:none}
*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
/*-- CSS Variables --*/
body:before {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.05"><text x="10" y="30" font-size="20" fill="%23d4af37">𓂀</text><text x="60" y="70" font-size="25" fill="%23d4af37">𓁈</text><text x="30" y="80" font-size="18" fill="%23d4af37">𓃀</text></svg>');
  pointer-events: none;
  z-index: 0;
}
.no-items.section{display:none}
h1,h2,h3,h4,h5,h6{font-family:var(--title-font);font-weight:600}
body{position:relative;background:var(--body-color-main);font-family:var(--body-font);font-size:14px;font-weight:400;color:var(--black-text);word-wrap:break-word;margin:0;padding:0;font-style:normal;line-height:1.4em}
#outer-wrapper{position:relative;overflow:visible;width:100%;max-width:100%;margin:0 auto}
.outer-container{display: flex;justify-content: space-between;}
h1{font-size:26px;line-height:28px}
h3{font-size:22px;line-height:21px}
h4{font-size:20px;line-height:18px}
h5{font-size:16px;line-height:16px}
h6{font-size:13px;line-height:13px;margin-bottom:0;margin-top:0}
@media only screen and (min-width:1025px){h1{font-size:42px;line-height:46px}
h2{font-size:36px;line-height:40px}
h3{font-size:28px;line-height:35px}
h4{font-size:21px;line-height:26px}
}
.post-body h1{font-size:28px}
.post-body h2{font-size:24px}
.post-body h3{font-size:21px}
.post-body h4{font-size:18px}
.post-body h5{font-size:16px}
.post-body h6{font-size:13px}
html[data-theme="dark"] .post-body p, html:not([data-theme]) .post-body p{background:transparent!important;color:#fff!important}
.post-body pre{
display:block;
}
.post-body pre code{
position:relative;
display:block;
background:rgb(72 72 72 / 0.09);
font-family:Monospace;
font-size:14px;
color:var(--black-text);;
overflow-x: auto;
line-height:1.6em;
padding:15px;
border:0;
border-radius:4px;
text-align:left;
direction:ltr;
}
#center-container{position:relative;float:left;width:100%;overflow:hidden;padding:20px 0 0;margin:0}
#feed-view{position:relative;float:none;width:100%;max-width:100%;box-sizing:border-box;padding:0}
/* FULL-WIDTH layout — content 100%, no side column */
.outer-container{
  display:block;
  width:100%;
  max-width:100%;
  box-sizing:border-box;
}
#feed-view{
  position:relative;
  float:none;
  display:block;
  width:100% !important;
  max-width:100% !important;
  box-sizing:border-box;
  margin:0 auto;
  padding:0;
}
#sidebar-container{
  display:none !important;
  width:0 !important;
  max-width:0 !important;
  overflow:hidden !important;
  margin:0 !important;
  padding:0 !important;
  height:0 !important;
}
/* widgets that lived in sidebar remain available in footer sections */

.post-filter-image{position:relative;display:block;transition:transform .3s ease}
.snip-thumbnail{position:relative;width:100%;height:100%;display:block;object-fit:cover;object-position:center center;z-index:1;opacity:1;transition:opacity .15s ease,transform .30s ease}
.snip-thumbnail.lazy-img{opacity:1}
.row,.row-1{position:relative;}
.post-filter-link:hover .snip-thumbnail{filter: brightness(0.9);}
.background-layer:before{content:'';position:absolute;left:0;right:0;bottom:0;height:66%;background-image:linear-gradient(to bottom,transparent,rgb(4 12 62));-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:2;opacity:1;margin:0;transition:opacity .25s ease}
.colorful-ico a:before,.social a:before{display:inline-block;font-family:'Font Awesome 5 Brands';font-style:normal;font-weight:400}
.colorful-ico .blogger a:before,.social .blogger:before{content:"\f37d"}
.colorful-ico .behance a:before,.social .behance:before{content:"\f1b4"}
.colorful-ico .digg a:before,.social .digg:before{content:"\f1a6"}
.colorful-ico .instagram a:before,.social .instagram:before{content:"\f16d"}
.colorful-ico .pinterest a:before,.social .pinterest:before{content:"\f0d2"}
.colorful-ico .rss a:before,.social .rss:before{content:'\f09e';font-family:'Font Awesome 5 Free';font-weight:900}
.colorful-ico .google a:before,.social .google:before{content:"\f1a0"}
.colorful-ico .paypal a:before,.social .paypal:before{content:"\f1ed"}
.colorful-ico .microsoft a:before,.social .microsoft:before{content:"\f3ca"}
.colorful-ico .facebook a:before,.social .facebook:before{content:"\f09a"}
.colorful-ico .facebook-f a:before,.social .facebook-f:before{content:"\f09a"}
.colorful-ico .twitter a:before,.social .twitter:before{content:"\f099"}
.colorful-ico .youtube a:before,.social .youtube:before{content:"\f167"}
.colorful-ico .stack-overflow a:before,.social .stack-overflow:before{content:"\f16c"}
.colorful-ico .github a:before,.social .github:before{content:"\f09b"}
.colorful-ico .linkedin a:before,.social .linkedin:before{content:"\f0e1"}
.colorful-ico .skype a:before,.social .skype:before{content:"\f17e"}
.colorful-ico .stumbleupon a:before,.social .stumbleupon:before{content:"\f1a4"}
.colorful-ico .tumblr a:before,.social .tumblr:before{content:"\f173"}
.colorful-ico .vk a:before,.social .vk:before{content:"\f189"}
.colorful-ico .reddit a:before,.social .reddit:before{content:"\f1a1"}
.colorful-ico .whatsapp a:before,.social .whatsapp:before{content:"\f232"}
.colorful-ico .telegram a:before,.social .telegram:before{content:"\f2c6"}
.colorful-ico .dribbble a:before,.social .dribbble:before{content:"\f17d"}
.colorful-ico .soundcloud a:before,.social .soundcloud:before{content:"\f1be"}
.colorful-ico .twitch a:before,.social .twitch:before{content:"\f1e8"}
.colorful-ico .delicious a:before,.social .delicious:before{content:"\f1a5"}
.colorful-ico .codepen a:before,.social .codepen:before{content:"\f1cb"}
.colorful-ico .snapchat a:before,.social .snapchat:before{content:"\f2ac"}
.colorful-ico .email a:before,.social .email:before{content:'\f0e0';font-family:'Font Awesome 5 Free'}
.colorful-ico .external-link a:before,.social .external-link:before{content:'\f35d';font-family:'Font Awesome 5 Free';font-weight:900}
.colorful a:hover {opacity: 0.8;}
.colorful a.blogger{color:#ff5722}
.colorful a.facebook,.colorful a.facebook-f{color:#3b5999}
.colorful a.twitter{color:#00acee}
.colorful a.youtube{color:#f50000}
.colorful a.messenger{color:#0084ff}
.colorful a.snapchat{color:#ffe700}
.colorful a.telegram{color:#179cde}
.colorful a.instagram{color:#dd277b}
.colorful a.pinterest,.colorful a.pinterest-p{color:#ca2127}
.colorful a.google{color:#0165b4}
.colorful a.apple{color:#000000}
.colorful a.microsoft{color:#0165b4}
.colorful a.dribbble{color:#ea4c89}
.colorful a.linkedin{color:#0077b5}
.colorful a.stumbleupon{color:#eb4823}
.colorful a.vk{color:#4a76a8}
.colorful a.stack-overflow{color:#f48024}
.colorful a.github{color:#24292e}
.colorful a.soundcloud{background:linear-gradient(#ff7400,#ff3400)}
.colorful a.behance{color:#191919}
.colorful a.digg{color:#1b1a19}
.colorful a.delicious{color:#0076e8}
.colorful a.codepen{color:#000}
.colorful a.flipboard{color:#f52828}
.colorful a.reddit{color:#ff4500}
.colorful a.tumblr{color:#365069}
.colorful a.twitch{color:#6441a5}
.colorful a.rss{color:#ffc200}
.colorful a.skype{color:#00aff0}
.colorful a.whatsapp{color:#3fbb50}
.colorful a.discord{color:#7289da}
.colorful a.share{color:var(--hero-color)}
.colorful a.email{color:#888}
.colorful a.external-link{color:#3500e5}
.social-front-hover a.facebook,.social-front-hover a.facebook-f{background:#3b5999}
.social-front-hover a.twitter{background:#00acee}
.social-front-hover a.whatsapp{background:#3fbb50}
/* .Super-Menu-logo neutralized */
#top-menu .selectnav,.LSpeed-filter-logo{display:none}
.xvx-rox{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:space-between;align-items:center;align-content:center;}
.xvx-rox .social li{display:inline-block;list-style:none;line-height:40px}
.xvx-rox .social li a{display:block;width:25px;line-height:30px;margin: 0 7px;font-size:15px;text-align:center;color:var(--top-menu-text)}
.dark .post-body ol>li:before{color:#eee}
.ticker-pro .loading-icon{line-height:38px;}
.ticker-pro .widget .widget-content span.error-status{padding:0;line-height:30px;}
.ticker-pro .loading-icon:after{width:20px;height:20px;}
.ticker{position:relative;float:left;width:100%;margin:0;}
.ticker-pro{position:relative;margin:5px 10px 15px;overflow:hidden;background:var(--bg-cards);border-radius: 4px;box-shadow:var(--bg-cards-shadow);}
.ticker-pro .widget{display:block;height:30px;padding:5px 0;margin:0}
.ticker-pro .widget>.widget-title{display:block;position:relative;float:left;height:25px;line-height:25px;padding:0 10px;margin:0 10px 0 5px;border-right:1px solid rgba(0 0 0 / 0.18)}
.ticker-pro .widget>.widget-title>h3{display: flex;align-items: center;font-size:14px;font-weight:700;color:var(--theme-text-color);line-height:30px;margin:0}
.ticker-pro .widget>.widget-title>h3:before{content:'\f0e7';font-family:'Font Awesome 5 Free';float:left;font-size:9px;font-weight:900;margin:0 0 0 5px;text-align:center;width:16px;height:16px;border-radius:50%;background:var(--button-bg-color);color:var(--button-text-color);line-height:17px;}
.ticker-pro .widget-content{position:relative;justify-content:flex-end;flex:1;align-items:center;margin:0;display:none;height:30px;overflow:hidden;}
.breaking-ticker{position:relative;display:flex;box-sizing:border-box;justify-content:space-between;flex:1;margin:0;height:30px;}
.ticker-pro .open-iki,.ticker-pro .widget.PopularPosts .widget-content{display:flex!important}
.breaking-ticker .tickerNews .entry-title{height:30px;font-size:13px;font-weight:600;line-height:30px;margin:0;padding:0;overflow:hidden}
.breaking-ticker .tickerNews .entry-title a{position:relative;display:block;overflow:hidden;font-size:15px;}
.rtl .ticker-pro .widget>.widget-title{float: right;border-left: 1px solid rgba(0 0 0 / 0.18);border-right: unset;}
.breaking-ticker .active, .AflexNewsTested .active{opacity:1;visibility:visible;transform:translate3d(0,0,0);pointer-events:initial}
.mega-flex .section{width:50%;}
.tickerNews, .tickerPart{position:absolute;top:0;left:0;opacity:0;width: 100%;visibility:hidden;pointer-events:none;}
.tickerPart{transform:translate3d(80px,0,0);transition:all .80s cubic-bezier(0.68, -0.55, 0.27, 1.55)}
.tickerNews{transform:translate3d(10px,0,0);transition:all .80s ease}
.buttons-fix{display:flex;flex-direction:row-reverse;align-items:center;justify-content:space-around;margin:0;height:30px}
.buttons-fix>a{display:flex;width:20px;height:20px;line-height:20px;font-size:12px;text-align:center;margin:0 2px;padding:5px;cursor:pointer;color:var(--bt-breaking-text);background:var(--bt-breaking)}
.buttons-fix>a:hover{opacity:0.8;}
.buttons-fix .prev:before{content:'\f053'}
.buttons-fix .next:before{content:'\f054'}
.buttons-fix a:before{display:block;font-family:'Font Awesome 5 Free';margin:auto;text-align:center;font-weight:900}
.mega-mode{position:relative;padding:0 15px;margin-right:10px;text-align:center;border-radius:30px;display:inline-block;align-items:center;z-index:999}
.drop-down>a:after{content:'\f078';float:right;font-family:'Font Awesome 5 Free';font-size:9px;font-weight:900;margin:-1px 0 0 5px}
.xxcui8-bczxc{position:absolute;background-color:var(--block-bg);top:59px;opacity:0;visibility:hidden;width:100%;left:0;box-sizing:border-box;border-radius:4px;right:0;z-index:3333;color:var(--white-bg);height:auto;padding:20px;min-height:100px;box-shadow:0 10px 10px rgba(0,0,0,0.28);transition:all .3s ease;}
.xvc-bcb{width:calc((100% - 50px) / 5);box-sizing:border-box;float:left;overflow:hidden;position:relative}
.xvc-bcb:last-child{margin-right:0}
.xvc-bcb .post-filter-link{height:100%}
.xvc-bcbs{display:flex;justify-content:space-between;flex-wrap:wrap}
.xvc-bcbs .Mega-img-ui{height:180px;display:block;overflow:hidden;border-radius: 4px;}
.xvc-bcbs .entry-title{font-size:14px;font-weight:600;text-align: left;line-height:1.2em;margin:0}
.flex-section{display:flex;width:100%;float:left;align-items:center;justify-content:center;}
.flex-ft{display:flex;justify-content:center;padding: 0 10px;}
#top-ad-placeholder .widget > .widget-title,#bottom-ad-placeholder .widget > .widget-title{display:none}
#top-ad-placeholder,#bottom-ad-placeholder{margin:15px 0;padding:0;width:100%;overflow:hidden;}
.main-ads-pikihome{position:relative;margin:15px 5px}
.main-ads-pikihome .widget{position:relative;float:left;width:100%;line-height:0;margin:0 0 5px}
#post-placeholder{position:relative;box-sizing:border-box;width:100%;height:auto;padding:0 5px;margin:10px 0}
#post-placeholder .widget{position:relative;width:100%;line-height:0;height:auto}
.cbvx-cx{padding:20px;background:var(--footer-copyright-bg);}
.cbvx-cx .footer-copyright{position:relative;font-size:13px;margin:0}
.copyright-text{margin:0;color:var(--footer-text-color);}
.cbvx-cx .footer-copyright a{color:var(--footer-text-color)}
.cbvx-cx .footer-copyright a:hover{color:var(--footer-text-color)}
#xvxc-ccvb-mbcv{position:relative;display:block;margin:0}
.xvxc-ccvb-mbcv ul li{position:relative;float:right;margin:0}
.xvxc-ccvb-mbcv ul li a{float:right;font-size:14px;color:var(--footer-text-color);padding:0 5px;margin:0}
#xvxc-ccvb-mbcv ul li a:hover{opacity:0.8;}
.sharing-button .facebook a,.sharing-button .facebook-f a{background-color:#3b5999}
.sharing-button .twitter a,.sharing-button .twitter-square a{background-color:#00acee}
.sharing-button .reddit a{background-color:#ff4500}
.sharing-button .pinterest a,.sharing-button .pinterest-p a{background-color:#ca2127}
.sharing-button .linkedin a{background-color:#0077b5}
.sharing-button .whatsapp a{background-color:#3fbb50}
.sharing-button .email a{background-color:#888}
/* .Super-Menu .fa neutralized */
.xvx-rox img{display:block;width:auto;height:auto;max-height:45px;margin:0 10px 0 0;}
/* .show-menu-space neutralized */
.xvx-rox h1{display:block;font-size:25px;color:var(--main-logo-text-color);height:30px;line-height:30px;overflow:hidden;padding:0;margin:0}
.xvx-rox h1 a{color:var(--main-logo-text-color)}
#xvx-rox1{display:none;}
.xvx-rox .LinkList .widget-content{display:flex;justify-content:space-between;align-items:center;}
.xvx-rox .social{border-left:1px solid rgb(133 133 133 / 0.44);}
.rtl .xvx-rox .social{border-left:initial;border-right:1px solid rgb(133 133 133 / 0.44);}
.main-menu-wrap{position:static;height:56px;margin:0}
.loading-icon{width:100%;height:100%;display:flex ;justify-content:center;align-items:center;}
.raw-box .loading-icon{height:185px}
.loading-icon:after{content:"";width:40px;height:40px;border-radius:50%;border:2px solid var(--main-text-color);border-right:2px solid #c1c1c1;display:inline-block;animation:runload 0.6s infinite}
@-webkit-keyframes runload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}
}
@keyframes runload{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}
to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}
}
.loading-frame{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}
@keyframes fadeIn{from{opacity:0}
to{opacity:1}
}
.run-time{animation-name:fadeIn}
@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,5px,0)}
to{opacity:1;transform:translate3d(0,0,0)}
}
.load-time{animation-name:fadeInUp}
.overlay{visibility:hidden;opacity:0;position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;margin:0;transition:all .25s ease}
/* .show-menu-space:before neutralized */
.search-flex-container{display:flex !important;}

.social-mobile ul{margin: 0 15px 0 0;float: right;}
.post-inner-data.flex{display:flex;align-content:center;}


/* Super-Menu / fixed-nos / spring-open removed — active menu is #alfHeader only */
.search-flex-container{display:flex;justify-content:space-between;align-items:center;position:relative;float:right;width:100%;height:100%;background-color:rgba(0,0,0,0);overflow:hidden;margin:0;animation:animateSearch .30s ease}
.search-flex-container .search-form{position:relative;height:34px;background-color:rgb(139 139 139 / 0.16);flex:1;padding: 0 0 0 10px;border:0;border-radius: 0 4px 4px 0}
.search-flex-container .search-input{position:relative;width:100%;height:35px;background-color:rgba(0,0,0,0);font-size:14px;color:var(--search-bt-text);font-weight:400;padding:0 15px 0 0;border:0;}
.search-flex-container .search-input:focus,.search-flex-container .search-input::placeholder{color:var(--search-bt-text);outline:none}
.search-flex-container .search-input::placeholder{opacity:.70}
.search-hidden:after{content:'\f00d';font-family:'Font Awesome 5 Free';font-weight:900;margin:0;}
@-webkit-keyframes animateSearch{0%{transform:translateX(-100px);opacity:0}
100%{transform:translateX(0);opacity:1}}
.search-flex-close{width:34px;height:34px;border-radius:4px 0 0 4px;background:rgb(139 139 139 / 0.16);color:var(--search-bt-text);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:transform ease-out .2s;z-index:20;padding:0;margin:0;}
.search-flex-close:hover{opacity:0.8;}
input.search-input{background-color:transparent;border:0;text-align:start;font-size:35px;padding:20px;color:#fff;-webkit-transition:all .3s ease-out;-moz-transition:all .3s ease-out;-ms-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out}
input.search-input[type=text]{width:83%;height:60px;display:block}
.search-msg{text-align:center;font-size:18px;color:rgba(255,255,255,0.96);padding:5px 0;margin:10px 0;border-bottom:1px dashed rgba(255 255 255 / 0.36)}
.search-input{position:relative;padding:20px;padding-bottom:10px}
.search-input input{border-radius:5px;padding:5px 10px;width:98%;border:2px solid #eee}
/* #cookies-iki removed — Termly CMP handles consent */
#hidden-widget-container,.hide,.hidden-widgets{display:none;visibility:hidden}
.post-snip{color:var(--post-snip-data);font-size:12px;font-weight:400;padding:0}
span.post-author{font-weight: 500;margin:0}
span.post-author:not(.entery-category-fly span.post-author){color:var(--lables-buttons-color);}
.featured-box .post-snip:not(.bcxd-blocx .post-snip),.cvxc-gribv .post-snip,.xcxxc-secon .post-snip,.sidebar .PopularPosts .gaint .post-snip,.video-section .post-snip,.vdfgl-sectf .post-snip{--post-snip-data:var(--snip-text-color);--label-text-color:var(--snip-text-color);}
.entery-category-box{overflow:hidden;}
.block-box .entery-category-box, .sidebar .popular-post .entery-category-box{padding: 7px 0 0;}
span.post-tag{width:fit-content;display:inline-flex;align-items:center;height:auto;min-height:20px;background-color:var(--lables-buttons-color);font-size:11px;color:var(--lables-text-color);font-weight:700;text-transform:none;line-height:1.3;padding:3px 10px;border-radius:6px;z-index:3;}

.post-inner-username{display:flex;flex-direction:column;margin:0 0 0 10px;}
.all-flex{display:flex;justify-content:space-between;align-items:center;padding:0 0 12px;border-bottom:1px solid rgb(100 100 100 / 0.12)}
.post-inner-comments.flex{position:relative;overflow:hidden;margin:0 5px 0;display:flex;align-items:center;align-content:center;}
.post-times{position:relative;overflow:hidden;margin:4px 0 0;}


.rtl 
.post-times span.post-date{position:relative;font-size:12px;color:var(--post-snip-data);}
span#readTime{position:relative;font-size:12px;color:var(--post-snip-data);display:inline-block}
span#readTime:before{content:"\f017";font-family:'Font Awesome 5 Free';font-size:13px;margin:0 8px 0 3px;float:right}
.post-times span.post-date:before{content:"\f272";font-family:'Font Awesome 5 Free';font-size:13px;margin:0 0 0 5px;}
.post-snip .post-date:before{font-family:'Font Awesome 5 Free';font-weight:400;margin:0 3px 0 0}
.item .post-snip .post-author:before{content:'By -';margin:0 3px 0 0;font-weight:normal;}
.item  .post-snip .post-date:before{content:'\f017'}
.post-snip a{color:#333;transition:color .40s}

.piki-ads{display:block;overflow: hidden;background-color:var(--ads-bg);text-align:center;line-height:85px;font-size:13px;font-style:italic;color:var(--ads-text);border-radius:6px;}
.piki-ads-res{display:block;background-color:var(--ads-bg);text-align:center;line-height:205px;font-size:13px;font-style:italic;color:var(--ads-text);border-radius:6px;}
.post-filter .entry-title,.raw-box .entry-title,.crxx-blox .entry-title,.related-wrap-ui .entry-title,.Super-related .entry-title{display:block;width:100%;text-decoration:none;font-weight:700;line-height:1.3em;padding:5px 0;margin:0}
.post-filter .entry-title, .raw-box .cvxc-gribv  .entery-category-box .entry-title,.raw-box .entery-category .entry-title{font-size:17px;}
.raw-box .entery-category .entry-title{margin:10px 0;line-height: 18px;}
.raw-box .entery-category-box .entry-title{font-size:15px;line-height: 19px;}
.crxx-blox .bcxd-blocx .entry-title, .raw-box .entery-category-box .entry-title,.raw-box .entery-category .entry-title{height:34px;overflow:hidden;}
.Super-related .entry-title,.crxx-blox .entry-title,.related-wrap-ui .entry-title{font-size:14px;}
.entry-title a{display:block;color:var(--featured-posts-title)}
.entry-title a:hover{opacity:0.8}
.StickyBox{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transform: translate3d(0,72%,0);transition: all .2s ease;z-index:15151515;}
.show-share .StickyBox{opacity:1;visibility:visible;transform: translate3d(0,0,0);}
.StickyTab{display:flex;flex-direction:row;align-content:center;justify-content:space-between;align-items:center;width:100%;box-sizing:border-box;padding:0 0 20px;margin:0 0 10px;color:var(--title-share);border-bottom:1px solid rgb(92 92 92 / 0.17);}
.StickyType{position:relative;display:block;float:left;font-size:15px;font-weight: 700;}
.copy-section{width:100%;}
.copy-section .title{font-size:14px;font-weight:700;padding:0 20px;}
.copy-post{display:flex;align-items:center;align-content:center;box-sizing:border-box;position:relative;justify-content:center;margin:10px 20px 0;}
.copy-post:before{content:'\f0c1';font-weight:600;font-family:'Font Awesome 5 Free';position:absolute;left:12px;font-size:15px;color:var(--theme-text-color)}
.rtl .copy-post:before{left:initial;right:12px;}
.copy-post.copied:before{content:'\f560';color:#16c900;}
.copy-post input#showlink{color:#6b6b6b;background: transparent;width:100%;height:35px;padding:0 0 0 38px;border:1px solid rgb(133 133 133 / 0.20);border-radius:5px 0 0 5px;}
.rtl .copy-post input#showlink{padding:0 38px 0 0;border-radius:0 5px 5px 0;}
.copy-post button{background:var(--button-bg-color);color:var(--button-text-color);height:35px;width:80px;border:none;cursor:pointer;border-radius:0 5px 5px 0;}
.rtl .copy-post button{border-radius:5px 0 0 5px;}
.StickyTab label{position:relative;display:block;font-size:20px;cursor:pointer;color:var(--title-share)}
.StickyDemo{width:100%;max-width:500px;max-height:90%;display:flex;margin:0 auto;padding:20px 20px 35px;background-color:var(--bg-cards);border-radius:8px;overflow:hidden;position:relative;box-shadow:0 10px 8px -8px rgb(0 0 0 / 0.12);flex-direction:column;align-content:center;align-items:center;justify-content:space-between;}
.share-wrapper-icons.colorful-ico{display:flex;flex-wrap:wrap;list-style:none;margin:0 0 10px;padding:10px 0 20px;border-bottom:1px solid rgb(133 133 133 / 0.20);}
.share-wrapper-icons.colorful-ico li{list-style:none;width:25%;text-align:center;}
.share-wrapper-icons.colorful-ico li a{display:block;width:80px;height:40px;line-height:25px;font-size:11px;margin:6px auto;padding:15px 0;border-radius:2px;background:var(--box-posts-share);border:1px solid rgb(205 222 247 / 0.18);text-align:center;cursor:pointer;}
.share-wrapper-icons.colorful-ico li a:hover{opacity:0.8}
.messageDone span{position:absolute;left:0;right:0;bottom:-70px;font-size:12px;display:block;width:190px;margin:0 auto 20px;padding:8px;border-radius:3px;background-color:rgb(0 0 0 / 0.63);color:#fefefe;line-height:20px;text-align:center;opacity:0;-webkit-animation:slidein 2s ease forwards;animation:slidein 2s ease forwards;}
div#messageDone{display:block;padding:20px 0 0;}
.share-wrapper-icons.colorful-ico a:before{font-size:24px;text-align:center;margin:0 auto;display:block;}
.show-share .overlay{filter:blur(2.5px);background-color:rgba(27,27,37,0.5);z-index:151515;backdrop-filter:saturate(100%) blur(2.5px);visibility:visible;opacity:1;}
.featured-box.item0 .entry-title,.sidebar .PopularPosts .gaint h2.entry-title,.cvxc-gribv .entry-title a,.xcxxc-secon.item0 .entry-title a,.video-section.item0 .entry-title a,.post-filter .entry-title,.vdfgl-sectf.item0 .entry-title a{color:var(--featured-posts-title-featured)}
.xcxxc-secon.item0 .entry-title,.vdfgl-sectf.item0 .entry-title,.video-section.item0 .entry-title{font-size:23px;}
.erf3f-main-xxui8{display:flex;flex-wrap:wrap;justify-content:space-between;}
a.simple-viewmore:hover{opacity:0.8}
.xce4-main-xcgr5{display:grid;grid-template-columns:repeat(7,1fr);grid-gap:10px;}
.xcxxc-secon.fl.item0{grid-column:1/5;}
.block-box.fl{display:grid;grid-column:5/8;background:var(--bg-cards);box-shadow:var(--shadow-light);border:1px dashed #6e69ff;border-radius:4px;}
.cvxc-gribv{width:calc((100% - 45px) / 4);position:relative;margin:0;background: var(--bg-cards);overflow: hidden;border-radius: 4px;box-shadow: var(--shadow-light);}
.piki-hero .modal-image .post-filter-link{position:relative;width:100%;height:130px;display:block;overflow:hidden}
.cvxc-gribv .modal-image .post-filter-inner{position:relative;width:100%;height:274px;display:block;overflow:hidden}
.cvxc-gribv .entry-title{font-size: 18px;}
.xcxxc-secon .block-img{position:relative;float:left;width:100%;height:378px;overflow:hidden;box-sizing:border-box;border-radius: 5px;padding:0;margin:0}
.cvbxc-scpc{position:relative;float:right;padding:0 10px;overflow:hidden;border-bottom:1px dashed var(--button-bg-color);}
.cvbxc-scpc:last-child{border-bottom:none;}
.cvbxc-scpc .entery-category-box .entry-title:before{float:right;content:'\2022';color:var(--button-bg-color);font-weight:900;font-family:'Font Awesome 5 Free';font-size:22px;margin:0 0 0px 4px;}
.cv-flxcb{float:right;position:relative;margin:0 0 15px;padding:4px;width:100%;box-sizing:border-box;}
.cv-flxcb-hero{width:100%;display:flex;justify-content:space-between;flex-wrap:wrap}
.cv-flxcb .cv-flxcb-thumb{position:relative;display:block;overflow:hidden;border-radius:4px;float:right;width:230px;height:157px;margin:0 0 0 15px;}
.cv-flxcb .cv-flxcb-thumb .post-filter-link{float:right;width:100%;height:100%;box-sizing:border-box;}
.cv-flxcb .entery-category-box{background:var(--bg-cards);box-shadow:var(--shadow-light);padding:10px;border-radius:4px;}
.type-list1 .cv-flxcb .entry-title{font-size:20px;}
.video-step,.hall-step{position:relative;float:right;margin:0;padding:10px;overflow:hidden;background:var(--bg-cards);border-radius:4px;box-shadow:var(--shadow-light);}
.cvbxc-scpc .block-thumb{position:relative;float:left;width:125px;height:83px;overflow:hidden;box-sizing:border-box;padding:0;margin:0 12px 0 0;border-radius:4px;}
.video-step .vblock-thumb,.hall-step .hall-thumb{position:relative;float:left;width:100%;height:122px;overflow:hidden;box-sizing:border-box;border-radius: 4px;padding:0;margin:0;}
.video-step .entery-category-box,.hall-step .entery-category-box,.type-block2 .entery-category-box{float:right;}
.video-section, .vdfgl-sectf{position:relative;float:right;margin:0;border-radius:4px;overflow:hidden;background: var(--bg-cards);box-shadow: var(--shadow-light);}
.cvxc-gribv .modal-image{position:relative;display:block;overflow:hidden;}
.video-vg, .block-hall{display:flex;justify-content:space-between;margin:0}
.video-grid,.hall-grid{display:grid;margin:0;grid-gap:10px;grid-template-columns:repeat(2,1fr);}
.video-vg .vg-s, .block-hall .rv{width:calc((100% - 15px) / 2);}
.video-section .vblock-img, .vdfgl-sectf .hall-img{position:relative;float:right;width:100%;height:421px;overflow:hidden;box-sizing:border-box;padding:0;margin:0}
span.post-tag-fly{position:absolute;left:5px;bottom:5px;background-color:var(--lables-buttons-color);font-size:10px;color:var(--lables-text-color);font-weight:500;text-transform:uppercase;padding:1px 8px 0;border-radius:4px;z-index:2;}
.raw-box .type-megagrid{overflow:hidden;}
.raw-box .open-iki,.featured-post-pro .open-iki{display:block!important}
.entery-category-fly{position:absolute;left:0;bottom:0;z-index:11;width:100%;box-sizing:border-box;padding:5px 10px 10px}
.featured-grid-all .entery-category-fly{right:30px;width:85%;}
.recbvf-bbv-featured{position:relative;margin:0 0 30px;clear:both}
.BiggerRelated{display:flex;justify-content:space-between;flex-wrap:wrap;margin:10px 0 0;}
.related-runs{position:relative;margin:0 0 25px;clear:both;display:block;padding:15px;background:var(--bg-cards);box-shadow:var(--bg-cards-shadow);border-radius:4px;}
.Super-related .entry-title a{position:relative;display:block;font-size:14px;line-height:17px;}
.related-runs .recbvf-bbv{width:31%;position:relative;margin:0}
a.post-filter-inner.gaint{position:relative;display:block;overflow:hidden;}
.entery-category{position:relative;overflow:hidden;padding:10px;}
.recbvf-bbv-featured{position:relative;margin:0 0 30px;clear:both}
.recbvf-bbv{width:calc((100% - 10px) / 3);position:relative;margin:0}
.recbvf-bbv .recbvf-bbv-thumb .post-filter-link{position:relative;width:100%;height:100%;display:block;overflow:hidden}
.recbvf-bbv .recbvf-bbv-thumb{width:100%;height:130px;display:block;overflow:hidden;border-radius: 4px;}
.blog-posts .widget-title,.title-wrap,.related-runs .widget-title{display:flex;justify-content:space-between;align-items:center;}
.home .blog-posts .widget-title{background: var(--bg-cards);padding: 0 8px;box-shadow: var(--shadow-light);border-radius: 4px;}
a.simple-viewmore{color:var(--theme-text-color);font-size:13px;font-weight:600;}
.crxx-blox .widget{display:none;float: left;width: 100%;box-sizing: border-box;border-radius:4px;padding:7px;}
.crxx-blox .widget.PopularPosts,.crxx-blox .open-iki{display:block!important}
.crxx-blox .widget .widget-content{position:relative;float: left;width: 100%;display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:365px;}
.featured-box.item0 .entry-title{font-size:21px}
.featured-grid-all{position:relative;display:grid;width:100%;grid-template-columns:repeat(2,1fr);grid-gap:10px;margin:0 0 10px}
.crxx-blox .widget .featured-box.item0 .post-filter-inner{height:522px;}
.featured-box{position:relative;width:100%;background:var(--bg-cards);overflow: hidden;border-radius:10px;box-shadow: 0px 2px 5px 1px rgb(0 0 0 / 0.07);}
.bcxd-blocx{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:10px;margin: 0;}
.bcxd-blocx .featured-box.item1, .bcxd-blocx .featured-box.item2{grid-row:1/2;}
.bcxd-blocx .featured-box.item3, .bcxd-blocx .featured-box.item4{grid-row:2/3;}
.post-tag-color{display:block;color:var(--lables-buttons-color);font-size:13px;font-weight:600;}
div#room-box0{margin:15px 0 0;}
.crxx-blox .widget .post-filter-link{width:100%;height:100%;position:relative;display:block;overflow:hidden;}
.crxx-blox .widget .post-filter-inner{width:100%;height:140px;display:block;overflow:hidden;}
.raw-box .widget{float:right;width:100%;padding:15px;border-radius:4px;margin:15px 0;box-sizing:border-box;}
.raw-box .widget-title{display:flex;flex-direction:row;align-content:center;justify-content:space-between;align-items:center;background: var(--bg-cards);padding:0 8px;box-shadow: var(--shadow-light);border-radius:4px}
.raw-box .cvxc-gribv .modal-image .post-filter-link{height:100%;width:100%;display:block}
.blog-posts .widget-title,.raw-box .widget-title,.title-wrap,.sidebar .widget-title,.related-runs .widget-title{position:relative;float:none;width:100%;height:35px;box-sizing:border-box;margin:0 0 14px;}
.blog-posts .widget-title h3,.raw-box .widget-title h3,.sidebar .widget-title h3,.title-wrap h3,.related-runs .widget-title h3{position:relative;float:left;font-family:var(--title-font);height:32px;font-size:13px;color:var(--theme-text-color);text-transform:uppercase;font-weight:700;line-height:32px;padding:0 0 0 12px;margin:0;}
.blog-posts .widget-title h3:before, .raw-box .widget-title h3:before, .sidebar .widget-title h3:before, .title-wrap h3:before, .related-runs .widget-title h3:before{content: '';width:22px;float:right;height:22px;background:var(--button-bg-color);border:6px solid #cbd2ff;border-radius:50%;margin:4px 0 0 6px;}
.rtl .blog-posts .widget-title h3,.rtl .raw-box .widget-title h3,.rtl .sidebar .widget-title h3,.rtl .related-runs .widget-title h3{float:right;}
.sidebar .PopularPosts .gaint h2.entry-title{font-size:16px;}
.error-status{display:block;text-align:center;font-size:13px;color:var(--theme-text-color);padding:35px 0;font-weight:600}
.error-status b{font-weight:600}
.wait{font-size:14px;text-align:center;height:300px;line-height:300px;display:flex;justify-content:center;align-items:center}
.related-runs .recbvf-bbv{width:31%;position:relative;margin:0;}
.BiggerSidebarOk{position:relative;float:left;width:100%;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:20px;}
.BiggerSidebarOk .sidebarui-posts{position:relative;display:flex;flex-direction:column;}
.BiggerSidebarOk .sidebarui-posts .glax-img{position:relative;width:100%;height:85px;margin:0;overflow:hidden;border-radius:4px;}
.BiggerSidebarOk .sidebarui-posts .entry-title{font-size:14px;display:block;font-weight:600;line-height:1.3em;}
.featured-meta{position:relative;overflow:hidden;box-sizing:border-box;padding:5px 10px;}
.queryMessage{display:block;font-size:15px;font-weight:600;padding:0 0 0 10px;border-radius:4px;margin:0 0 5px;color:var(--theme-text-color);overflow:hidden;}
.queryMessage .query-info{margin:0 5px}
.queryMessage .search-query{font-weight:bold;text-transform:uppercase}
.queryMessage .query-info:before{content:'\f053';font-family:'Font Awesome 5 Free';float:right;font-size:11px;font-weight:900;margin:0 0 0 5px;}
.queryEmpty{font-size:13px;font-weight:500;text-align:center;padding:10px 0;margin:0 0 20px}
.dark table,.dark td{border-color:rgba(255,255,255,0.1)}
.share-top{position:relative;display:block;margin:0 10px;font-size:15px;color:var(--featured-posts-title);background:rgb(128 128 128 / 0.07);width:35px;height:28px;line-height:28px;text-align:center;cursor:pointer;border:1px solid rgb(129 129 129 / 0.19);border-radius:3px;}
.post-inner-area .post-snip{color:var(--theme-text-color);padding:10px 5px 10px;font-size:13px;border-bottom:1px solid #ccc}
.comment-bubble{margin-top:4px;color:var(--cm-count)}
.comment-bubble:before{content:"\f27a";font-family:'Font Awesome 5 Free';font-size:15px;font-weight:400;margin-right:5px}
.rtl .comment-bubble:before{margin:0 5px 0 0}
.post-inner-area{position:relative;float:left;width:100%;overflow:hidden;padding:15px 10px 20px;box-sizing:border-box;margin:0 0 10px;background:var(--bg-cards);box-shadow:var(--bg-cards-shadow);border-radius:4px;}
.post-filter-wrap{position:relative;float:right;display:block;padding:10px 0;border-radius:4px;box-sizing:border-box;overflow:hidden;}
.blog-post{display:block;word-wrap:break-word}
.post-filter-wrap .grid-posts{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:25px;margin:0;}
.post-filter-link.video-nos:after{content:"\f04b";font-family:'Font Awesome 5 Free';font-size:14px;width:58px;height:38px;line-height:38px;border-radius:11px;font-weight:900;background:var(--ico-relative);vertical-align:middle;color:#fff;opacity:.7;align-items:center;top:50%;right:50%;transform:translate(50%,-50%);position:absolute;z-index:111;padding:0 0 0 2px;margin:0;text-align:center;transition:background .30s ease}
.type-video .post-filter-link.video-nos:hover:after{background:#fe1111;}
.feat-posts .post-filter-link.video-nos:after,.PopularPosts .post:not(.post-0) .post-filter-link.video-nos:after,.cvxc-gribv .modal-image .post-filter-link.video-nos:after, .cvbxc-scpc .post-filter-link.video-nos:after,.video-step .post-filter-link.video-nos:after,.hall-step .post-filter-link.video-nos:after{transform: translate(50%,-50%) scale(.4);}
.type-video .post-filter-link.video-nos:after{opacity:1;border-radius:100%;height:58px;line-height:58px;}
.post-filter{position:relative;float:left;box-sizing:border-box;padding:8px;margin:10px 0;overflow:hidden;background:var(--bg-cards);border-radius:4px;box-shadow:var(--shadow-light);}
.post-filter .post-filter-image .post-filter-inner{position:relative;float:right;width:100%;height:100%;overflow:hidden;box-sizing:border-box;border-radius:4px;padding:0;margin:0 0 15px;}
.post-filter .post-filter-image .post-filter-link{position:relative;width:100%;height:200px;display:block;overflow:hidden;}
.post-filter .post-filter-image .snip-thumbnail{display:block;position:absolute;top:50%;left:50%;max-width:none;max-height:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}
.label-news-flex{color:var(--label-text-color);font-size:12px;line-height:15px;font-weight:400;white-space:nowrap;width:auto;overflow:hidden;padding:5px 0 0;margin:0;}
#feed-view #main{position:relative;overflow: hidden;box-sizing:border-box;margin:0 0 26px}
.fl-footer{display:flex;justify-content:space-between;flex-wrap: wrap;}
.cvcx-Fcxv{position:relative;display:flex;flex-direction:column;width:calc((100% - 90px) / 3);float:left;padding:25px 0;margin:0;}
.xxex-xcc3{position:relative;display:flex;flex-direction:row;padding:25px 0;margin:0;border-top:1px solid rgb(133 133 133 / 0.12);align-items:center;justify-content:space-between;}
.xxex-xcc3 .widget{position:relative;float:right;box-sizing:border-box;margin:0 auto}
.xxex-xcc3 .Image{width: calc(100% - 320px);padding:0 25px 0 0}
.xxex-xcc3 .Image .widget-content{position:relative;float:right;margin:0;width:100%}
.xxex-xcc3 .about-content .widget-title{position:relative;display:block;text-align: center;box-sizing:border-box;}
.xxex-xcc3 .about-content{display:flex;float:right;padding:0;box-sizing:border-box}
.xxex-xcc3 .Image .no-image .about-content{max-width:100%;padding:0 30px 0 0}
.xxex-xcc3 .Image .image-caption{float: left;font-size:13px;margin:0;color:var(--footer-about-text)}
.xxex-xcc3 .colorful-ico li, .social-mobile .colorful-ico li{float:right;margin:0 0 0 7px}
.xxex-xcc3 .colorful-ico li:last-child, .social-mobile .colorful-ico li:last-child{margin:0}
.xxex-xcc3 .colorful-ico li a, .social-mobile .colorful-ico li a{display:block;width:25px;height:25px;font-size:13px;background:rgb(153 153 153 / 0.08);border:1px solid rgb(117 117 117 / 0.30);border-radius: 4px;text-align:center;line-height:25px;margin:5px 0;}
.xxex-xcc3 .footer-logo{display:flex;margin:0 auto;align-items:center;justify-content:center;}
.xxex-xcc3 .footer-logo a{float:right;position:relative;margin:0 0 10px;}
.xxex-xcc3 .footer-logo img{width:auto;height:auto;max-height:40px;}
.cvcx-Fcxv.no-items{padding:0;border:0}
.cvcx-Fcxv .widget{position:relative;float:right;box-sizing:border-box;margin:0 0 15px}
.cvcx-Fcxv .widget-title > h3{position:relative;font-family:var(--title-font);line-height:30px;font-size:16px;font-weight:500;color:var(--footer-gadgets-title);margin:0 0 10px}
.cvcx-Fcxv .widget-title > h3:before{content:'';float:right;width:7px;height:7px;background-color:#ea3df9;margin:10px 0 0 6px;border-radius:50%;}
.bio-data{position:relative;float:left;width:70%;margin:0 15px;}
.bio-data h3{display:block;color:var(--footer-title-color);font-size:15px;line-height:20px;margin:0 0 5px;}
.xxex-xcc3 .Image .image-caption{float:left;font-size:13px;margin:0;color:var(--footer-about-text);}
.footer-sector{position:relative;float:right;margin:0 0 10px;}
.footer-sector-thumb{position:relative;display:block;float:right;width:100px;height:75px;margin:0 0 0 8px;border-radius:10px;overflow:hidden;}
.cvcx-cv .entery-category h2{position:relative;display:block;font-size:14px;font-weight:600;line-height:20px;margin:0;}
.cvcx-cv .entery-category h2 a{--featured-posts-title:var(--footer-title-color);}
.cvcx-Fcxv .popular-post{position:relative;display:block;box-sizing:border-box;padding:0 0 10px;margin:0 10px 11px 0;border-bottom:1px solid rgb(129 129 129 / 0.20);}
.cvcx-Fcxv .popular-post.post:hover:before{box-shadow:inset 0 0 0 6px var(--button-bg-color);border-color:rgb(34 127 255 / 0.19);}
.cvcx-Fcxv .popular-post.post:before{content:'';position:absolute;width:10px;height:10px;top:0px;right:-16px;border:2px solid rgba(155,155,155,0.05);border-radius:50%;transition:all .17s ease;box-shadow:inset 0 0 0 6px rgb(155 155 155 / 15%);}
.cvcx-Fcxv .popular-post h2{position:relative;display:block;font-size:14px;font-weight:600;line-height:20px;margin:0;}
.cvcx-Fcxv .popular-post h2 a{color:var(--footer-title-color);}
.cvcx-Fcxv .popular-post{color:var(--footer-about-text);}
.cvcx-Fcxv .sidebar-posts{position:relative;float:right;width:100%;border-right:2px solid rgb(143 143 143 / 0.14);}
.cvcx-Fcxv .popular-post.post:last-child{border:none;}
.cvcx-Fcxv.list .LinkList ul li,.cvcx-Fcxv.list .PageList ul li{position:relative;display:block;margin:10px 0;}
.cvcx-Fcxv.list .LinkList ul li a,.cvcx-Fcxv.list .PageList ul li a{font-size:14px;color:var(--footer-title-color);}
.cvcx-Fcxv.list .LinkList ul li a:before,.cvcx-Fcxv.list .PageList ul li a:before{content:"\f30b";font-family:'Font Awesome 5 Free';font-size:14px;font-weight:600;color:#767676;margin:0 8px 0 0;}
.cvcx-Fcxv .loading-icon{height:180px;}
.cvcx-Fcxv .LinkList{margin: 15px 0 0;}
.cvcx-Fcxv .LinkList .widget-content{float:left}
.social-mobile{float:left;width:100%;position:relative;box-sizing:border-box;}
.post-snippet{position:relative;color:var(--post-snip-data);float:left;font-size:13px;line-height:1.6em;font-weight:400;margin:0 0 12px}
a.read-more{display:inline-block;background:var(--button-bg-color);color:var(--button-text-color);padding:5px 15px;font-size:13px;font-weight:500;margin:15px 0 0;transition:color .30s ease}
a.read-more:hover{opacity:0.8}
.CSS_LAYOUT_COMPONENT{color:rgba(0,0,0,0)!important}
#breadcrumb{font-size:13px;font-weight:400;color:#aaa;margin:0 0 10px}
#breadcrumb a{color:#aaa;transition:color .40s}
#breadcrumb a:hover{opacity:0.8}
#breadcrumb a,#breadcrumb em{display:inline-block}
#breadcrumb .delimiter:after{content:'\f053';font-family:'Font Awesome 5 Free';font-size:8px;font-weight:900;font-style:normal;margin:0 5px}
.item-post h1.entry-title{color:var(--theme-text-color);text-align:right;font-size:25px;line-height:1.5em;font-weight:600;position:relative;display:block;margin:0 0 15px;padding:0}
.static_page .item-post h1.entry-title{margin:0;border-bottom:1px solid rgb(100 100 100 / 0.66)}
.item-post .post-body{width:100%;font-family:var(--text-font);color:var(--text-font-color);font-size:15px;line-height:1.8em;padding:0;margin:0}
.item-post .post-body img{max-width:100%}
.main .widget{margin:0}
.main .Blog{border-bottom-width:0}
.raw-box-content{position:relative;overflow:hidden;padding:0}
.comment-list{display:flex;flex-direction:column;}
.comment-list .comments-box{position:relative;width:100%;padding:0 0 15px;margin:0 0 15px;border-bottom:1px solid rgb(100 100 100 / 0.12);}
.comment-list .engine-link{display:flex;}
.comment-list .comment-image{width:35px;height:35px;z-index:1;margin:0 12px 0 0;border-radius:50%;}
.rtl .comment-list .comment-image{margin: 0 0 0 12px;}
.comment-image{display:block;position:relative;overflow:hidden;background-color:#eee;z-index:5;color:transparent!important;}
.comment-list .comment-hero{flex:1;}
.comment-list .entry-title{font-size:14px;color:var(--main-text-color);display:block;font-weight:600;line-height:1.3em;margin:0;}
.comment-list .comment-snippet{font-size:12px;color:var(--comments-dec);margin:5px 0 0;}
.post-footer{position:relative;float:left;width:100%;margin:0}
.label-container{overflow:hidden;height:auto;position:relative;margin:0 0 20px;padding:0}
.label-container a,.label-container span{float:right;height:19px;font-size:14px;line-height:19px;font-weight:600;margin:0;padding:0 5px}
.label-container span{color:var(--main-text-color)}
.label-container span:before{content:'\f02c';font-family:'Font Awesome 5 Free';font-weight:900;margin:0 0 0 5px;}
.label-container a{color:var(--theme-text-color);margin:0 5px 5px;transition:all .30s ease}
.label-container a:hover{opacity:0.8;border-radius: 4px;transition:all .20s ease;}
.rtl .label-container, .rtl .label-head.Label, .rtl .feed-share, .rtl .navigation-runs{float:right;}
ul.share-runs{position:relative}
.share-runs li{float:right;overflow:hidden;margin:5px 0 0 5px}
.share-runs li a{display:block;height:45px;line-height:45px;padding:0 10px;color:#fff;font-size:13px;font-weight:600;cursor:pointer;text-align:center;box-sizing:border-box;border:1px solid rgb(110 110 110 / 0.33);border-radius:3px}
ul.share-runs.colorful-ico.social-front-hover a:not(.show-hid a):before{font-size:18px;vertical-align:middle;margin: 0 5px 0 0;}
.rtl ul.share-runs.colorful-ico.social-front-hover a:not(.show-hid a):before{margin: 0 0 0 5px;}
ul.share-failed.colorful-ico.social-front-hover a:before{margin:0 5px 0 0;}
.share-runs li.share-icon span{position:relative;height:45px;line-height:45px;padding:0 5px;font-size:16px;color:var(--theme-text-color);cursor:auto;margin:0 5px 0 0}
.share-runs li.share-icon span:after{content:'شارك:';position:relative;height:6px;font-size:17px;font-weight:600}
.share-runs li a span{font-size:14px;padding:0 15px}
.share-runs li a:hover{opacity:.8;}
.share-runs .show-hid a{font-size:18px;color:var(--featured-posts-title);padding:0 14px;line-height:42px;}
.share-runs .show-hid a:before{content:'\f1e0';font-family:'Font Awesome 5 Free';font-weight:900}
.feed-share{position:relative;clear:both;overflow:hidden;line-height:0;margin:0 0 30px}
ul.navigation-runs{position:relative;box-sizing: border-box;width:100%;overflow:hidden;display:block;padding:0 10px;border-bottom:1px solid rgb(100 100 100 / 0.12);margin:0 0 30px}
.navigation-runs li{display:inline-block;width:50%}
.navigation-runs .post-prev{float:left;text-align:left;box-sizing:border-box;padding:0 0 5px}
.navigation-runs .post-next{float:right;text-align:right;box-sizing:border-box;border-left:1px solid rgb(100 100 100 / 0.12);padding:0 0 5px}
.navigation-runs li a{color:var(--theme-text-color);line-height:1.4em;display:block;overflow:hidden;transition:color .40s}
.navigation-runs li:hover a{opacity:0.8}
.navigation-runs li span{display:block;font-size:11px;color:#aaa;font-weight:600;text-transform:uppercase;padding:0 0 2px}
.navigation-runs .post-prev span:before{content:"\f053";float:left;font-family:'Font Awesome 5 Free';font-size:10px;font-weight:900;text-transform:none;margin:0 2px 0 0}
.navigation-runs .post-next span:after{content:"\f054";float:right;font-family:'Font Awesome 5 Free';font-size:10px;font-weight:900;text-transform:none;margin:0 0 0 2px}
.navigation-runs p{font-size:12px;font-weight:600;color:var(--navigation-runs-text);line-height:1.4em;margin:0}
.navigation-runs .post-MenuNews-open p{color:#aaa}
.post-body h1,.post-body h2,.post-body h3,.post-body h4,.post-body h5,.post-body h6{color:var(--theme-text-color);font-weight:600;margin:0 0 15px}
.author-name{overflow:visible;display:inline-block;font-size:18px;font-weight:600;line-height:20px;margin:1px 0 3px}
.author-name span{color:var(--theme-text-color)}
.author-name a{color:var(--main-text-color);transition:opacity .40s}
.author-name a:after{content:"\f058";float:right;font-family:'Font Awesome 5 Free';font-size:14px;line-height:21px;color:#0093e6;font-weight:900;text-transform:none;margin:0 0 0 4px;}
.author-name a:hover{opacity:.8}
.author-description{overflow:hidden}
.author-description span{display:block;overflow:hidden;font-size:13px;color:var(--black-text);font-weight:400;line-height:1.6em}
.author-description span br{display:none}
.author-description a{display:none;margin:0}
ul.description-links{display:none;padding:0 1px}
ul.description-links.show{display:block}
.description-links li{float:left;margin:12px 12px 0 0}
.description-links li a{display:block;font-size:20px;color:var(--share-author-links);line-height:1;box-sizing:border-box;padding:0}
.description-links li a:hover{opacity:0.8}


@-webkit-keyframes slidein{0%{opacity:0}
20%{opacity:1;bottom:0}
50%{opacity:1;bottom:0}
80%{opacity:1;bottom:0}
100%{opacity:0;bottom:-70px;visibility:hidden}
}
@keyframes slidein{0%{opacity:0}
20%{opacity:1;bottom:0}
50%{opacity:1;bottom:0}
80%{opacity:1;bottom:0}
100%{opacity:0;bottom:-70px;visibility:hidden}
}

.comments-section{overflow:hidden;padding:15px;margin:0 0 10px;box-sizing:border-box;background:var(--bg-cards);box-shadow:var(--bg-cards-shadow);border-radius:4px;}
.comments-msg-alert{position:relative;float:left;font-size:13px;font-weight:600;color:var(--cm-count);font-style:italic;margin:0 0 17px;}
.comments-section .comments-title{margin:0 0 20px}
.all-comments{float:right;position:relative;color:var(--cm-count)}
.comments-system-disqus .comments-title,.comments-system-facebook .comments-title{margin:0}
#comments{margin:0}
.comments{display:block;clear:both;margin:0;color:var(--theme-text-color)}
.comments .comment-thread>ol{padding:0}
.comments>h3{font-size:13px;font-weight:600;font-style:italic;padding-top:1px}
.comments .comments-content .comment{position:relative;list-style:none;padding:10px}
.comment-thread .comment{border:1px solid rgb(126 126 126 / 0.16);background:rgba(45 45 45 / 0.02);margin:10px 0 0;position:relative;}
.facebook-tab,.fb_iframe_widget_fluid span,.fb_iframe_widget iframe{width:100%!important}
.comments .item-control{position:static}
.comments .avatar-image-container{float:right;overflow:hidden;position:absolute}
.comments .avatar-image-container{height:35px;max-height:35px;width:35px;top:15px;right:15px;max-width:35px;border-radius:100%}
.comments .avatar-image-container img{width:100%;height:100%;}
.comments .comment-block,.comments .comments-content .comment-replies{margin:0 50px 0 0}
.comments .comments-content .inline-thread{padding:0}
.comments .comment-actions{float:left;width:100%;position:relative;margin:0}
.comments .comments-content .comment-header{font-size:15px;display:block;overflow:hidden;clear:both;margin:0 0 3px;padding:0 0 5px;}
.comments .comments-content .comment-header a{float:left;width:100%;color:var(--theme-text-color);transition:color .40s}
.comments .comments-content .comment-header a:hover{opacity:0.8}
.comments .comments-content .user{float:right;font-style:normal;font-weight:600}
.comments .comment .comment-actions a.comment-reply:before{content:"\f064";font-family:'Font Awesome 5 Free';font-size:10px;color:#838383;font-weight:600;text-transform:none;margin:0 0 0 5px;transform: rotate(180deg);display: inline-block;}
.comments .comments-content .icon.blog-author:after{content:"\f3ed";font-family:'Font Awesome 5 Free';font-size:14px;color:#0093e6;font-weight:900;text-transform:none;margin:0 0 0 4px}
.comments .comments-content .comment-content{float:right;font-family:var(--text-font);font-size:13px;color:var(--comment-text);font-weight:500;text-align:right;line-height:1.4em;width:100%;padding:20px 8px 20px 0;background:rgb(110 110 110 / 0.08);margin:5px 0 9px;border-radius:3px;}
.comment-content .video-frame{position:relative;width:100%;padding:0;padding-top:56%}
.comment-content .video-frame iframe{position:absolute;top:0;left:0;width:100%;height:100%}
.comments .comment .comment-actions a{margin-right:5px;padding:2px 5px;color:var(--main-text-color);font-weight:600;font-size:13px;transition:all .30s ease}
.comments .comment .comment-actions a:hover{color:#333;text-decoration:none}
.comments .comments-content .datetime{position:relative;padding:0 1px;margin:4px 0 0;display:block}
.comments .comments-content .datetime a{color:#888;font-size:11px;float:left;}
.comments .comments-content .datetime a:hover{color:#aaa}
.comments .thread-toggle{margin-bottom:4px}
.comments .thread-toggle .thread-arrow{height:7px;margin:0 3px 2px 0}
.comments .thread-count a,.comments .continue a{transition:opacity .40s}
.comments .thread-count a:hover,.comments .continue a:hover{opacity:.8}
.comments .thread-expanded{padding:5px 0 0}
.comments .thread-chrome.thread-collapsed{display:none}
.comments .continue.hidden, .comments .comment-replies .continue .comment-reply{display:none;}
.comments #top-continue a{float:left;width:100%;height:35px;line-height:35px;background-color:var(--button-bg-color);font-size:14px;color:var(--button-text-color);font-weight:400;text-align:center;padding:0;margin:25px 0 0;border-radius:4px;}
.thread-expanded .thread-count a,.loadmore{display:none;}
.comments .comments-content .comment-thread{margin:0}
.comments .comments-content .loadmore.loaded{margin:0;padding:0}
#show-comment-form,.comments #top-continue a{float:left;width:100%;height:36px;background-color:var(--button-bg-color);font-size:15px;color:#fbfbfb;font-weight:400;line-height:36px;text-align:center;box-sizing: border-box;padding:0 30px;margin:25px 0 0;}
.btn{position:relative;border:0;}
.comment-section-visible #show-comment-form{display:none}
.comments .comment-replybox-thread,.no-comments .comment-form{display:none;}
.comment-section-visible .comments .comment-replybox-thread,.comment-section-visible .no-comments .comment-form{display:block;}
.comments #top-ce.comment-replybox-thread,.comments.no-comments .comment-form{background-color:var(--widget-bg);padding:5px 16px;margin:20px 0 0;border-radius:4px;}
.comment-thread .comment .comment{background:var(--comment-content);border:0;}
.comments .comments-content .loadmore,.comments .comments-content .loadmore.loaded,.comments-section.comments-system-facebook .all-comments,.comments-section.comments-system-disqus .all-comments{display:none}
blockquote{position:relative;font-style:italic;float:left;color:var(--black-color);margin-left:0;padding:10px 15px;width:100%;box-sizing:border-box;background:rgb(72 72 72 / 0.09);border-top-left-radius:20px;border-bottom-right-radius:20px;}
blockquote:before{content:'\f10d';color:rgb(133 133 133 / 0.23);display:inline-block;font-family:'Font Awesome 5 Free';font-size:28px;position:absolute;font-style:normal;font-weight:900;}
blockquote:after{content:'\f10e';color:rgb(133 133 133 / 0.23);display:inline-block;font-family:'Font Awesome 5 Free';font-size:28px;position:absolute;font-style:normal;font-weight:900;}
.post-body ul{line-height:1.5em;font-weight:400;padding:0 0 0 15px;margin:10px 0}
.post-body li{margin:5px 0;padding:0;line-height:1.5em}
.post-body ol>li{counter-increment:piki;list-style:none}
.post-body ol>li:before{display:inline-block;content:counters(piki,'.')'.';margin:0 5px 0 0}
.post-body ol{counter-reset:piki;padding:0 0 0 15px;margin:10px 0}
.post-body ul li{list-style:disc inside}
.post-body u{text-decoration:underline}
.post-body table{width:100%;overflow-x:auto;text-align:left;margin:0;border-collapse:collapse;border:1px solid rgb(155 155 155 / 0.17);}
.post-body a{transition:color .30s ease}
.post-body strike{text-decoration:line-through}
.post-body .video-frame{position:relative;width:100%;padding:50% 0 0;}
.post-body .video-frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}
.widget .post-body li{margin:5px 0;padding:0;line-height:1.2}
.rtl .widget .post-body li{text-align:right;}
.contact-form{overflow:hidden}
div#bnfg-gx3s3 .contact-form-widget form{color:#fff;}
.contact-form .widget-title{display:none}
.contact-form .contact-form-name{width:calc(50% - 5px)}
.contact-form .contact-form-email{width:calc(50% - 5px);float:right}
.sidebar .widget{position:relative;overflow:hidden;box-sizing:border-box;padding:15px;margin:0 0px 25px;background:var(--bg-cards);box-shadow:var(--bg-cards-shadow);}
.sidebar .widget-content{float:left;width:100%;margin:0;box-sizing:border-box;padding:0}
div#footer-ads{margin:0;position:relative;overflow:hidden;}
ul.socialFilter{margin:0 -5px}
.socialFilter a:before{font-style:normal;line-height:40px;-webkit-font-smoothing:antialiased;margin-right:-12px;width:40px;height:40px;text-align:center;float:left;border-right:1px solid rgb(161 161 161 / 0.32);font-size:22px;vertical-align:middle}
.socialFilter li{float:left;width:50%;box-sizing:border-box;padding:0 5px;margin:10px 0 0}
.socialFilter li:nth-child(1),.socialFilter li:nth-child(2){margin-top:0}
.socialFilter li a{display:block;height:40px;color:var(--share-author-links);background:var(--bg-cards);box-shadow:var(--shadow-light);font-size:12px;font-weight:600;text-align:center;line-height:40px;border-radius:4px;text-transform:capitalize;}
.list-label li{position:relative;display:block;padding:7px 0;}
.list-label li a{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--list-text-color);font-size:12px;font-weight:600;text-transform:capitalize;transition:all .30s ease}
.list-label li a:hover{opacity:0.8;padding-right:25px;transition:all .30s ease}
.Text .widget-content{font-family:var(--text-font);font-size:14px;color:var(--main-text-color);margin:0}
.list-label .label-count{position:relative;float:left;color:var(--theme-text-color);font-size:11px;font-weight:600;text-align:center;line-height:16px}
.cvcx-Fcxv .list-label .label-count{--theme-text-color:var(--footer-about-text)}
.cvcx-Fcxv .list-label li a{--list-text-color:var(--footer-title-color)}
.cloud-label li{position:relative;float:right;margin:0 0 5px 5px}
.cloud-label li a{display:block;height:26px;color:var(--cloud-bg-color);font-size:12px;border-radius:4px;line-height:26px;font-weight:600;padding:0 10px;border:1px solid var(--cloud-border-color);transition:all .30s ease}
.cloud-label li a:hover{background-color:rgb(96 96 96 / 0.14);color:#585858;border-color:rgb(52 52 52 / 0.24);transition:all .20s ease;}
.cloud-label .label-count{display:none}
.sibForm .widget-content{position:relative;text-align:center;font-weight:400;box-sizing:border-box;border-radius:2px;border:1px solid rgb(217 227 253 / 38%)}
.sibForm .follow-by-email-caption{font-size:13px;letter-spacing: 1px;color: var(--post-snip-data);line-height:1.5em;margin:0 0 15px;display:block;padding:0 10px;overflow:hidden}
.sibForm .follow-by-email-inner{position:relative}
.sibForm{clear:both}
.sibForm:before{content:'';display:block;position:absolute;top:0;left:0;width:100px;height:100px;opacity:0.10;background:var(--button-bg-color);border-radius:100px 0 0;transform:rotate(180deg);}
.sibForm:after{content:'';display:block;position:absolute;bottom:0;right:0;width:100px;height:100px;opacity:0.10;background:var(--button-bg-color);border-radius:100px 0 0}
.follow-by-email-title{font-size:17px; font-weight:700; padding:7px ;margin:15px 0px;color:var(--black-text-color)}
.sibForm .follow-by-email-inner .follow-by-email-address{width:100%;height:32px;color:var(--black-text-color);background:var(--input-form);font-size:12px;font-family:inherit;padding:0 10px;margin:0 0 10px;box-sizing:border-box;border:1px solid rgb(122 122 122 / 0.53);transition:ease .40s}
.sibForm .follow-by-email-inner .follow-by-email-address:focus{border:1px solid var(--email-bg-color);}
.sibForm .follow-by-email-inner .follow-by-email-address::placeholder{color:var(--black-text-color);opacity:0.67;}
.sibForm .follow-by-email-inner .follow-by-email-submit{width:100%;height:32px;font-family:inherit;border-radius:15px;font-size:11px;color:#fff;background-color:var(--email-bg-color);text-transform:uppercase;text-align:center;font-weight:500;cursor:pointer;margin:0;border:0;transition:opacity .30s ease}
.sibForm .follow-by-email-inner .follow-by-email-submit:hover{opacity:.85;background:var(--email-bg-color)}
.Follow-by-alert{position:relative;display:block;color:var(--post-snip-data);font-size:12px;margin:10px 0 0;text-align:center;}
.rtl .Follow-by-alert, .rtl .comments-msg-alert{float:right}
#ArchiveList ul.flat li{color:var(--theme-text-color);font-size:13px;font-weight:400;padding:7px 0;border-bottom:1px dotted #eaeaea}
#ArchiveList ul.flat li:first-child{padding-top:0}
#ArchiveList ul.flat li:last-child{padding-bottom:0;border-bottom:0}
#ArchiveList .flat li>a{display:block;color:var(--theme-text-color);transition:color .40s}
#ArchiveList .flat li>a:hover{opacity:0.8}
#ArchiveList .flat li>a:before{content:"\f054";font-family:'Font Awesome 5 Free';float:left;color:#161619;font-size:7px;font-weight:400;margin:5px 2px 0 0;display:inline-block;transition:color .30s}
#ArchiveList .flat li>a>span{position:relative;background-color:var(--main-text-color);color:#fff;float:right;width:16px;height:16px;font-size:10px;font-weight:400;text-align:center;line-height:15px}
.sidebar .PopularPosts .post{position: relative;overflow:hidden;margin:0 0 12px;counter-increment:piki-count;}
.sidebar .PopularPosts .post:before{content:counter(piki-count);position:absolute;right:4px;border-radius:50%;border:2px solid #fff;padding:4px;width:28px;height:28px;line-height:14px;text-align:center;font-size:16px;color:#ffffff;background:var(--button-bg-color);z-index:2;}
.sidebar .PopularPosts .post-filter-inner{position:relative;display:block;width:90px;height:90px;float:right;border-radius:50%;overflow:hidden;margin:0 0 0 12px}
.sidebar .PopularPosts .entry-title{overflow:hidden;font-size:13px;font-weight:700;position:relative;line-height:1.4em;margin:0}
.sidebar .PopularPosts .entery-category-box .entry-title{height: 38px;overflow: hidden;}
.sidebar .PopularPosts .entry-title a{display:block;padding:0;transition:color .40s}
.PopularPosts .post-date:before{font-size:10px}
.FeaturedPost .post-filter-link{display:block;position:relative;width:100%;height:170px;overflow:hidden;margin:0 0 10px;}
.FeaturedPost .entry-title{font-size:14px;font-weight:600;overflow:hidden;line-height:1.2em;margin:0}
.FeaturedPost .entry-title a{color:var(--theme-text-color);display:block;transition:color .30s ease}
.contact-form-widget form{font-weight:600;margin:15px}
.contact-form-name{float:left;width:100%;height:30px;font-family:inherit;color: var(--theme-text-color);background: rgb(217 217 217 / 0.07);font-size:13px;line-height:30px;box-sizing:border-box;padding:5px 10px;margin:0 0 10px;border:1px solid rgb(139 139 139 / 0.32);border-radius:2px}
.contact-form-email{float:left;width:100%;height:30px;font-family:inherit;color: var(--theme-text-color);background: rgb(217 217 217 / 0.07);font-size:13px;line-height:30px;box-sizing:border-box;padding:5px 10px;margin:0 0 10px;border:1px solid rgb(139 139 139 / 0.32);border-radius:2px}
.contact-form-email-message{float:left;width:100%;font-family:inherit;color: var(--theme-text-color);background: rgb(217 217 217 / 0.07);font-size:13px;box-sizing:border-box;padding:5px 10px;margin:0 0 10px;border:1px solid rgb(139 139 139 / 0.32);border-radius:2px}
.contact-form-button-submit{float:left;width:100%;height:30px;background-color:var(--button-bg-color);font-size:13px;color:var(--button-text-color);line-height:30px;cursor:pointer;box-sizing:border-box;padding:0 10px;margin:10px 0;border:0;border-radius:2px;transition:background .30s ease}
.contact-form-button-submit:hover{opacity:0.8}
.contact-form-error-message-with-border{float:left;width:100%;background-color:#fbe5e5;font-size:11px;text-align:center;line-height:11px;padding:3px 0;margin:10px 0;box-sizing:border-box;border:1px solid #fc6262}
.contact-form-success-message-with-border{float:left;width:100%;background-color:#eaf6ff;font-size:11px;text-align:center;line-height:11px;padding:3px 0;margin:10px 0;box-sizing:border-box;border:1px solid #5ab6f9}
.contact-form-cross{margin:0 0 0 3px}
.contact-form-error-message,.contact-form-success-message{margin:0}
.BlogSearch .search-form{display:flex;padding:0;border-radius:4px;}
.BlogSearch .search-input{float:left;width:75%;height:40px;background-color:rgb(153 153 153 / 0.13);color:var(--theme-text-color);font-weight:400;font-size:13px;line-height:30px;border-radius: 4px 0 0 4px;box-sizing:border-box;padding:5px 10px}
.rtl .BlogSearch .search-input{border-radius: 0 4px 4px 0;}
.rtl .BlogSearch .search-action{border-radius: 4px 0 0 4px;}
.BlogSearch .search-action{float:right;width:25%;height:40px;font-family:inherit;font-size:13px;line-height:40px;cursor:pointer;box-sizing:border-box;background-color:var(--button-bg-color);color:var(--button-text-color);padding:0 5px;border:0;border-radius:0 4px 4px 0;transition:background .30s ease}
.BlogSearch .search-action:hover{opacity:0.8}
.cvcx-Fcxv .BlogSearch .search-input{--theme-text-color:var(--footer-title-color);}
.Profile .profile-img{float:left;width:70px;height:70px;margin:0 15px 0 0;border-radius:50%;transition:all .30s ease}
.team-member{position:relative;display:block;overflow:hidden;float:left;width:100%;box-sizing:border-box;margin:0 0 15px;}
.team-member .team-member-img{position:relative;display:block;float:left;margin:0;}
.team-flex,.profile-datablock{position:relative;display:block;overflow:hidden;}
.team-flex a,.profile-datablock a{position:relative;display:block;font-size:14px;font-weight:600;color:var(--main-menu-text-color);margin:0;}
.profile-textblock{position:relative;display:block;font-size:12px;color:var(--post-snip-data)}


.profile-data.location:before{content:"\f3c5";font-family:'Font Awesome 5 Free';font-size:15px;font-weight:600;vertical-align:middle;}
a.user-image{position:relative;display:block;overflow:hidden;float:left;z-index:1;}
.profile-data.location{position:relative;font-size:13px;color:var(--button-bg-color);text-align:center;margin:10px auto 0;float:left;width:100%;box-sizing:border-box;}
.LinkList .widget-control ul li,.PageList .widget-control ul li{width:calc(50% - 5px);padding:7px 0 0}
#bnfg-gx3s3 .widget-control .PopularPosts{border:none}
.TextList .widget-content ul li,.LinkList .widget-control ul li a,.PageList .widget-control ul li a{color:#000000;font-size:13px;font-weight:500;background:rgb(203 203 203 / 0.52);border-radius:4px;width:100%;float:left;margin:4px 0;padding:3px 5px;white-space:nowrap;display:block;overflow:hidden;text-overflow:ellipsis;transition:color .30s ease;}
.LinkList .widget-control ul li:nth-child(odd),.PageList .widget-control ul li:nth-child(odd){float:left}
.LinkList .widget-control ul li:nth-child(even),.PageList .widget-control ul li:nth-child(even){float:right}
.LinkList .widget-control ul li a,.PageList .widget-control ul li a{color:#000000;font-size:13px;font-weight:500;background:rgb(203 203 203 / 0.52);border-radius: 4px;width:auto;padding:3px 5px;margin:auto;white-space:nowrap;display:block;overflow:hidden;text-overflow:ellipsis;transition:color .30s ease;}
.LinkList .widget-control ul li a:before,.PageList .widget-control ul li a:before{content:"\2022";float:left;color:#000;font-weight:900;font-family:'Font Awesome 5 Free';font-size:12px;margin:0 4px 0 0}
.LinkList .widget-control ul li a:hover,.PageList .widget-control ul li a:hover{opacity:0.8;border-radius:4px}
.LinkList .widget-control ul li:first-child,.LinkList .widget-control ul li:nth-child(2),.PageList .widget-control ul li:first-child,.PageList .widget-control ul li:nth-child(2){padding:0}
.flex-footer{display:flex;flex-direction:column;}
#bnfg-gx3s3{position:relative;float:left;width:100%;}
#bnfg-gx3s3 .footer-data{background-color:var(--footer-bg-color);}
#bnfg-gx3s3 .footer{display:inline-block;float:left;width:33.33333333%;box-sizing:border-box;padding:0 15px}
#bnfg-gx3s3 .footer .widget{float:left;width:100%;padding:5px 0;margin:10px 0 0}
#bnfg-gx3s3 .footer .Text{margin:10px 0 0}
#bnfg-gx3s3 .footer .widget:first-child{margin:0}
.footer-outer{display:flex;justify-content:space-between;align-items:center;align-content:center;}
.error404 #feed-view{width:100%!important;margin:0!important}
.error404 #sidebar-container{display:none}
.errorPage{color:var(--theme-text-color);text-align:center;padding:80px 0 100px}
.errorPage h3{font-size:160px;line-height:1;margin:0 0 30px}
.errorPage h4{font-size:25px;margin:0 0 20px}
.errorPage p{margin:0 0 10px}
.errorPage a{display:block;color:var(--main-text-color);padding:10px 0 0}
.errorPage a i{font-size:20px}
.errorPage a:hover{text-decoration:underline}
.firstword{float:left;color:#7a5a5a;font-size:70px;line-height:60px;padding-top:3px;padding-right:8px;padding-left:3px}
table{border-collapse:collapse;table-layout:fixed;width:100%!important;}
.code-box input#showlink{line-height:0;margin:0;padding:0;outline:0;border:0;width:1px;height:0;opacity:0;}
button.tune{position:absolute;top:0;right:0;display:block;border:none;margin:0;color:#fff;background:#1499ff;font-size:12px;padding:2px 13px;}
.rtl button.tune{right:initial;left:0;}
button.tune:hover{opacity:0.8;}
.tg{border-collapse:collapse;border-spacing:0}
.tg td{font-family:'Open Sans',sans-serif;font-size:14px;border:1px solid #000;background-color:#fff}
.main-button{display:inline-block;color:var(--button-text-color);background:var(--button-bg-color);font-size:14px;font-weight:600;padding:5px 12px;margin:5px;text-align:center;border:0;cursor:pointer;border-radius:4px;text-decoration:none;}
.main-button:before{font-family:'Font Awesome 5 Free';font-size:16px;font-weight:900;color:#fff;display:inline-block;margin:0 5px 0 0}
.rtl .main-button:before{margin:0 0 0 5px}
.main-button:not(a.main-button.button.sp-bt):hover, span.bt-info:hover{opacity:0.8;}
.l-bt{padding:16px 35px;}
a.main-button.button.sp-bt{display:inline-flex;align-items:flex-start;background:rgba(131 131 131 / 0.15);color:var(--text-font-color);padding:18px 17px;font-size:15px;position:relative;margin:auto;box-sizing:border-box;max-width:460px;width:100%;pointer-events:none;justify-content:flex-start;}
a.main-button.button.sp-bt:before{color:#333;background:rgb(183 183 183 / 0.72);font-size:14px;padding:5px 12px;border-radius:4px;line-height:23px;margin:0 15px 0 0;}
.rtl a.main-button.button.sp-bt:before{margin: 0 0 0 15px;}
a.main-button.button.sp-bt:before{content:"\f1c6";}
a.main-button.button.sp-bt.buy:before,.buy:before{content:"\f291";}
a.main-button.button.sp-bt.demo:before,.demo:before{content:"\f07c";}
a.main-button.button.sp-bt.share:before,.share:before{content:"\f1e0";}
a.main-button.button.sp-bt.paypal:before{content:"\f1ed";font-family:'FONT AWESOME 5 BRANDS';font-weight:400;}
a.main-button.button.sp-bt.whatsapp:before{content:"\f40c";font-family:'FONT AWESOME 5 BRANDS';font-weight:400;}
a.main-button.button.sp-bt.gift:before{content:"\f06b";}
a.main-button.button.sp-bt.telegram:before{content:"\f3fe";font-family:'FONT AWESOME 5 BRANDS';font-weight:400;}
span.bt-info{position:absolute;right:15px;display:inline-block;padding:2px 12px;font-size:13px;margin:0 0 0 100px;background:#a518c0;border-radius:4px;color:#fff;pointer-events:all;white-space:nowrap;max-width:180px;}
.rtl span.bt-info{right:initial;left:15px;margin:0 100px 0 0;}
span.bt-info:before{font-family:'Font Awesome 5 Free';font-size:14px;font-weight:900;color:#fff;display:inline-block;margin:0 5px 0 0;}
.rtl span.bt-info:before{margin:0 0 0 5px;}
a.main-button.button.sp-bt.download span.bt-info:before,.download:before{content:"\f381";}
a.main-button.button.sp-bt.buy span.bt-info:before{content:"\f07a";}
a.main-button.button.sp-bt.paypal span.bt-info:before{content:"\f1f4";font-family:'FONT AWESOME 5 BRANDS';font-weight:400;}
a.main-button.button.sp-bt.whatsapp span.bt-info:before{content:"\f232";font-family:'FONT AWESOME 5 BRANDS';font-weight:400;}
a.main-button.button.sp-bt.gift span.bt-info:before{content:"\f79c";}
a.main-button.button.sp-bt.contact span.bt-info:before{content:"\f2b9";}
a.main-button.button.sp-bt.link span.bt-info:before,.link:before{content:"\f35d";}
a.main-button.button.sp-bt.cart span.bt-info:before,.cart:before{content:"\f217";}
a.main-button.button.sp-bt.demo span.bt-info:before{content:"\f06e";}
a.main-button.button.sp-bt.share span.bt-info:before{content:"\f1e0";}
a.main-button.button.sp-bt.info span.bt-info:before,.info:before{content:"\f05a";}
a.main-button.button.sp-bt.telegram span.bt-info:before{content:"\f2c6";font-family:'FONT AWESOME 5 BRANDS';font-weight:400;}
a.main-button.button.sp-bt.facebook span.bt-info:before{content:"\f09a";font-family:'FONT AWESOME 5 BRANDS';font-weight:400;}
span.bt-text{position:absolute;font-size:12px;bottom:10px;left:71px;}
.rtl span.bt-text{left:initial;right:71px;}
.alert-message{position:relative;clear:both;display:inline-block;background-color:#293dc9;padding:20px;margin:20px 0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;color:#2978c9;border:1px solid #ec6868}
.alert-message.success:before{content:"\f058";color:#13d864}
.alert-message:before{font-family:'Font Awesome 5 Free';font-size:16px;font-weight:600;display:inline-block;margin:0 5px 0 0}
.alert-message.passed:before{content:"\f1e3";color:#1984ce}
.alert-message.warning:before{content:"\f071";color:#c58519}
.alert-message.error:before{content:"\f06a";color:#d02615}
.alert-message.success{background-color:#f1f9f7;border-color:#e0f1e9;color:#1d9d74}
.alert-message.passed{background-color:#f5fbff;border:1px solid #7ebbe4}
.alert-message.alert{background-color:#daefff;border-color:#8ed2ff;color:#378fff}
.alert-message.warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}
.alert-message.error{background-color:#ffd7d2;border-color:#ff9494;color:#f55d5d}
.code-box{position:relative;display:block;color:#eaeaea;background-color:#0d1642;font-family:Monospace;font-size:13px;white-space:pre-wrap;line-height:1.4em;padding:15px 10px 10px;margin:0;border:1px solid rgba(155,155,155,0.3);border-radius:2px}
@media screen and (max-width:1178px){#outer-wrapper{max-width:100%}
#center-container{box-sizing:border-box;padding:0;margin:10px 0 0}
}
@media screen and (max-width:1080px){
.cvbxc-scpc .block-thumb{width:100px;height:85px;}
.featured-grid-all, .bcxd-blocx, .block-box.fl{grid-gap: 5px;}
.entery-category {padding: 6px;}
}
@media screen and (max-width:880px){
#outer-wrapper .flex-section .outer-container {flex-direction: column;}
.BiggerSidebarOk .sidebarui-posts .glax-img{height:232px;}

.post-filter{margin: 5px 0;}
.post-filter-wrap .grid-posts {grid-column-gap: 10px;}
.featured-grid-all .entery-category-fly{left:0;width:100%;}
.ticker-pro .widget-content{margin:10px;}
.ticker-pro .widget,.ticker-pro .widget-content,.tickerNews .entry-title{height:initial;}
.ticker-pro .widget>.widget-title{float:none;display:inline-block;}
.rtl .ticker-pro .widget>.widget-title{float:none;}
.breaking-ticker .active{position:relative;}
.breaking-ticker .tickerNews .entry-title, .breaking-ticker{height:initial}
.cvxc-gribv{width:calc((100% - 10px) / 2);margin:0 0 10px;}
div#Header1{position:relative;display:flex;align-items:center;height:100%;margin:0;}
/* #xvx-rox1 block neutralized */
.outer-container{justify-content:center;flex-direction:column;align-items:center;}
/* .show-menu-space flex neutralized */
/* Super-Menu-logo mobile block neutralized */
#feed-view,#sidebar-container{width:100%;}
ul.share-runs.colorful-ico.social-front-hover a:not(a.facebook):before{margin: 0;}
.rtl ul.share-runs.colorful-ico.social-front-hover a.facebook:before{margin: 0 0 0 5px;}
.overlay{display:block;transition:all .5s cubic-bezier(.79,.14,.15,.86)} /* #menu-space removed */
/* .spring-open .overlay neutralized */
body.active-search{overflow:visible;left:initial;right:initial}
.cvcx-Fcxv{width:100%;}
.xxex-xcc3 .LinkList{display:flex;justify-content:center;align-items:center;align-content:center;width:100%;margin:15px auto 0;}
.xxex-xcc3 .about-content{align-items:center;justify-content:center;align-content:center;flex-direction:column;}
.xxex-xcc3{flex-wrap:wrap;}
.bio-data{width:100%;text-align:center;}
.xxex-xcc3{flex-direction:column;}
.xxex-xcc3 .Image{width:100%;}
.footer-outer{flex-direction:column-reverse;}
}
@media screen and (max-width:768px){
.author-name{text-align:center}
.author-name a:after{float:none}
.author-description{text-align:center}
.description-links li{float:none;display:inline-block}
.post-footer{margin:0}
.BiggerSidebarOk{grid-gap: 7px;}
.block-hall .rv{width:100%;margin:10px 0 0;}
ul.navigation-runs{padding:5px}
.featured-grid-all{display:block;grid-template-columns:initial;grid-gap;initial}
.featured-box.item0{margin:0 0 5px;}
.raw-box .widget,.post-filter-wrap{padding:15px 5px;}
#bnfg-gx3s3 .footer{width:100%;margin-right:0}
.pikiList .featured-meta{margin:0;}
.cvcx-Fcxv .LinkList,.cvcx-Fcxv .LinkList .widget-content{width:100%}
.cvcx-Fcxv .LinkList{margin:30px 0 0}
.cvcx-Fcxv .LinkList .widget-content .widget-title>h3{margin:0 0 20px}
#menu-footer,#bnfg-gx3s3 .copyright-area{width:100%;height:auto;line-height:1.7em;text-align:center}
#menu-footer{margin:10px 0 0}
#bnfg-gx3s3 .copyright-area{margin:10px 0 5px}
#xvxc-ccvb-mbcv,.cbvx-cx .footer-copyright{text-align:center;margin:0 auto;}
#xvxc-ccvb-mbcv ul li{display:inline-block;float:none;margin:0}
#xvxc-ccvb-mbcv ul li a{margin:0 7px}
.cbvx-cx .footer-copyright .widget{float:left;width:100%;margin: 10px 0 0;}
}
@media screen and (max-width:680px){
 .crxx-blox .widget .widget-content{min-height:228px;}
.video-vg .vg-s, .block-hall{width:100%;}
.video-vg .vg-s{margin:10px 0 0;}
.video-vg{flex-direction:column;}
.cv-flxcb .cv-flxcb-thumb{width:160px;height:105px;}
.type-list1 .cv-flxcb .entry-title{font-size:15px;}
.block-hall{flex-direction:column;}
.video-section .vblock-img,.vdfgl-sectf .hall-img{height:285px;}
.post-snippet{display:none;}
.crxx-blox .widget .featured-box.item0 .post-filter-inner{height:310px;}
.xcxxc-secon.fl.item0,.block-box.fl{grid-column:1/8;}
.post-filter-wrap .grid-posts{grid-column-gap:5px;}
.post-filter .post-filter-image{margin:0;}
.piki-slider{display:block}

@media screen and (max-width:640px){
.xvx-rox img{max-height:40px;}
.search-msg{font-size:14px}
.mega-mode{padding:0 5px;margin:0px}
.search-msg{font-size:14px}
.post-filter-wrap .grid-posts{grid-template-columns:1fr;}
ul.share-failed.colorful-ico.social-front-hover a:before{margin:0;}
ul.share-failed.colorful-ico.social-front-hover a.facebook:before{margin:0 5px 0 0;}
.post-filter{margin:5px 0}
.xcxxc-secon.item0 .entry-title,.video-section.item0 .entry-title,.vdfgl-sectf.item0 .entry-title{font-size:15px;}
.related-post .piki-hero,.raw-box .piki-hero,.raw-box .raw-main{width:100%;clear:both}
.raw-box .raw-main .raw-main-sum{display:block!important}
.raw-box .raw-main .raw-main-box h3 a{font-size:initial!important}
.rtl .post-inner-comments.flex{left:0;right:unset;}
.StickyDemo{margin:0 4px;}
.share-wrapper-icons.colorful-ico li{width:33%;}
.share-wrapper-icons.colorful-ico a:before{font-size:19px;}
.share-wrapper-icons.colorful-ico li a{height:30px;line-height:20px;}
.share-wrapper-icons.colorful-ico{padding:10px 0px 20px;}
.StickyTab label, .share-runs li a{cursor: unset;}
.social-front-hover a.twitter,.social-front-hover a.whatsapp{width:47px;overflow:hidden;}
input.search-input{font-size:20px}
.raw-box-content {padding:0}
#feed-view #main{margin:0}
.cvxc-gribv .modal-image .post-filter-inner{height:236px;}
.post-filter .entry-title,.raw-box .entery-category-box .entry-title,.type-list1 .cv-flxcb .entry-title,.raw-box .cvxc-gribv .entery-category-box .entry-title,.raw-box .entery-category .entry-title{font-size:14px;}
.raw-box .entery-category .entry-title{margin:5px 0;}
.xcxxc-secon .block-img{height:290px;}
.related-runs .recbvf-bbv{width:100%;clear:both}
.related-runs .recbvf-bbv .recbvf-bbv-thumb{height:250px}
.post-snip .post-date{margin:10px 10px 0 0;}
}
@media screen and (max-width:480px){
a.main-button.button.sp-bt{padding:25px 12px;word-break:break-all;line-height:13px;justify-content:space-between;}
a.main-button.button.sp-bt:before{padding:5px 12px;margin:0 5px 0 0;}
span.bt-info{position:static;display:inline-flex;padding:7px 12px;font-size:0;margin:0 0 0 7px;line-height:20px;}
span.bt-info:before{margin:0;}
span.bt-text{left:0;right:0;}
.crxx-blox .widget .post-filter-inner,.video-step .vblock-thumb,.hall-step .hall-thumb {height: 95px;}
.cv-flxcb .cv-flxcb-thumb{width:120px;}
.BiggerSidebarOk .sidebarui-posts .glax-img{height: 125px;}
.item-post h1.entry-title{font-size:24px}
.cvxc-gribv .entry-title{font-size:15px}
.description-links li{float:none;display:inline-block;margin:10px}
.errorPage{padding:70px 0 100px}
.errorPage h3{font-size:120px}
#comments ol{padding:0}
}
@media screen and (max-width:380px){
.item .comment-bubble, .share-runs li.share-icon{display:none}
.share-top {margin: 0;}
}
.cookie-choices-info{display:none;visibility:hidden;opacity:0}

/* ============================================================
   PHARAONIC + JOURNAL THEME ENHANCEMENTS
   Clean, AdSense-safe, responsive, no cloaking
   ============================================================ */

/* --- 3. Body background: sand / gold subtle gradient --- */
body {
  background: linear-gradient(165deg, #0f0c09 0%, #1a140f 40%, #12100c 100%) !important;
}
body:not(.dark) {
  background: linear-gradient(165deg, #f7f0e4 0%, #efe6d5 45%, #f5efe3 100%) !important;
}
body:not(.dark) {
  --bg-cards: #fffdf8;
  --block-bg: #fffdf8;
  --front-bg-lists: #fffdf8;
}

/* --- Journal / Newspaper isolation (cards with elegant borders) --- */
.post-filter,
.raw-box .widget,
.related-runs,
.post-inner-area,
.comments-section,
.ticker-pro,
.cvxc-gribv,
.featured-box,
.cvcx-Fcxv .widget,
.sidebar .widget,
#feed-view #main,
.item-post {
  background: var(--bg-cards) !important;
  border: 1px solid rgba(184, 134, 11, 0.28) !important;
  border-radius: 10px !important;
  box-shadow:
    0 2px 8px rgba(0,0,0,0.06),
    0 0 0 1px rgba(255, 215, 0, 0.04) !important;
  position: relative;
  overflow: hidden;
}

/* Cartouche-style corner accents on major cards */
.post-filter::before,
.related-runs::before,
.post-inner-area::before,
.comments-section::before {
  content: "𓋹";
  position: absolute;
  top: 8px;
  left: 10px;
  font-size: 11px;
  color: rgba(184, 134, 11, 0.45);
  z-index: 2;
  pointer-events: none;
}
.rtl .post-filter::before,
.rtl .related-runs::before,
.rtl .post-inner-area::before,
.rtl .comments-section::before {
  left: auto;
  right: 10px;
}

/* Section titles with hieroglyph + gold underline */
.blog-posts .widget-title h3,
.raw-box .widget-title h3,
.sidebar .widget-title h3,
.title-wrap h3,
.related-runs .widget-title h3,
.comments-section .comments-title {
  position: relative;
  padding-bottom: 8px !important;
}
.blog-posts .widget-title h3::after,
.raw-box .widget-title h3::after,
.sidebar .widget-title h3::after,
.related-runs .widget-title h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, #ffd700, transparent);
  border-radius: 2px;
}
.rtl .blog-posts .widget-title h3::after,
.rtl .raw-box .widget-title h3::after,
.rtl .sidebar .widget-title h3::after,
.rtl .related-runs .widget-title h3::after {
  right: auto;
  left: 0;
  background: linear-gradient(270deg, #ffd700, transparent);
}
a.read-more:hover,
.cookies-bt:hover,
.copy-post button:hover {
  box-shadow: 0 4px 14px rgba(184, 134, 11, 0.35) !important;
  transform: translateY(-1px);
}
a.read-more::after,
.cookies-bt::after {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  transition: left 0.45s ease;
  pointer-events: none;
}
a.read-more:hover::after,
.cookies-bt:hover::after {
  left: 130%;
}

/* --- 5. Pyramid-like soft shadows --- */
.post-filter,
.featured-box,
.cvxc-gribv {
  box-shadow:
    0 3px 10px rgba(0,0,0,0.08),
    0 8px 20px rgba(40, 25, 10, 0.06) !important;
}

/* --- 8. Image hover: gold border + slight zoom --- */
.post-filter-link,
.snip-thumbnail,
.modal-image img,
.recbvf-bbv-thumb img,
.post-filter-inner img {
  transition: transform 0.4s ease, filter 0.3s ease !important;
}
.post-filter-link:hover .snip-thumbnail,
.modal-image:hover img,
.recbvf-bbv-thumb:hover img {
  transform: scale(1.04);
  filter: brightness(1.05);
}
.post-filter-image,
.modal-image,
.recbvf-bbv-thumb,
.cv-flxcb-thumb,
.vblock-thumb,
.hall-thumb {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(184, 134, 11, 0.2);
}

/* --- 7. Card entrance animation (light, CSS only) --- */
@keyframes pharaohFadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.post-filter,
.cvxc-gribv,
.featured-box,
.related-runs .recbvf-bbv {
  animation: pharaohFadeUp 0.5s ease both;
}
.post-filter:nth-child(2),
.cvxc-gribv:nth-child(2) { animation-delay: 0.06s; }
.post-filter:nth-child(3),
.cvxc-gribv:nth-child(3) { animation-delay: 0.12s; }
.post-filter:nth-child(4),
.cvxc-gribv:nth-child(4) { animation-delay: 0.18s; }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .post-filter, .cvxc-gribv, .featured-box, .related-runs .recbvf-bbv {
    animation: none !important;
  }
  a.read-more::after, .cookies-bt::after { display: none; }
}

/* --- 9. Footer Pharaonic --- */
#bnfg-gx3s3,
.flex-footer {
  border-top: 3px solid #b8860b !important;
  background: linear-gradient(180deg, #16130e 0%, #0e0c09 100%) !important;
}
.cbvx-cx {
  border-top: 1px solid rgba(184, 134, 11, 0.35) !important;
}
.cvcx-Fcxv .widget-title > h3:before {
  background-color: #ffd700 !important;
  box-shadow: 0 0 6px rgba(255, 215, 0, 0.4);
}
.copyright-text a {
  color: #ffd700 !important;
}

/* --- 10. Dark mode refined gold --- */
html[data-theme="dark"],
html:not([data-theme]) {
  --main-text-color: #e8dcc8;
  --featured-posts-title: #f0e6d2;
  --theme-text-color: #e0c87c;
  --all-link-color: #d4af37;
  --bg-cards: #1a1612;
  --block-bg: #1a1612;
  --main-menu-bg: #1f1914;
  --submenu-bg-color: #1f1914;
  --footer-bg-color: #12100c;
}
html[data-theme="dark"] .post-filter,
html:not([data-theme]) .post-filter,
html[data-theme="dark"] .related-runs,
html:not([data-theme]) .related-runs,
html[data-theme="dark"] .post-inner-area,
html:not([data-theme]) .post-inner-area,
html[data-theme="dark"] .comments-section,
html:not([data-theme]) .comments-section,
html[data-theme="dark"] .ticker-pro,
html:not([data-theme]) .ticker-pro {
  border-color: rgba(184, 134, 11, 0.35) !important;
  background: #1a1612 !important;
}

/* --- Entry title gold accent on single post --- */
.item-post h1.entry-title {
  border-right: 3px solid #b8860b;
  padding-right: 12px;
}
.rtl .item-post h1.entry-title {
  border-right: none;
  border-left: 3px solid #b8860b;
  padding-right: 0;
  padding-left: 12px;
}

/* --- Comment form Pharaonic style --- */
.comments-section,
#comments,
.comment-form {
  border: 1px solid rgba(184, 134, 11, 0.3) !important;
  border-radius: 10px !important;
  padding: 16px !important;
  background: var(--bg-cards) !important;
}
.comment-form input,
.comment-form textarea,
.contact-form-name,
.contact-form-email,
.contact-form-email-message {
  border: 1px solid rgba(184, 134, 11, 0.35) !important;
  border-radius: 6px !important;
  background: rgba(184, 134, 11, 0.04) !important;
  padding: 10px 12px !important;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.comment-form input:focus,
.comment-form textarea:focus {
  border-color: #b8860b !important;
  box-shadow: 0 0 0 3px rgba(184, 134, 11, 0.15) !important;
  outline: none !important;
}
.contact-form-button,
.comment-form .contact-form-button-submit,
a[href*="comment"],
#comments .comment-reply {
  background: linear-gradient(135deg, #b8860b, #d4af37) !important;
  color: #1a120b !important;
  border: none !important;
  border-radius: 6px !important;
  font-weight: 600 !important;
  padding: 10px 18px !important;
  cursor: pointer !important;
  transition: transform 0.2s ease, box-shadow 0.25s ease !important;
}
.contact-form-button:hover,
.comment-form .contact-form-button-submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(184, 134, 11, 0.4) !important;
}

/* Comment button in post footer area */
.post-footer .comment-link,
.comment-bubble,
a.comment-link {
  cursor: pointer;
}

/* Decorative separator between sections (journal style) */
.flex-section + .flex-section,
#room-box0,
#room-box1,
#room-box2 {
  margin-top: 20px;
}
.raw-box.container {
  border: 1px solid rgba(184, 134, 11, 0.2);
  border-radius: 12px;
  padding: 12px;
  background: rgba(255, 253, 248, 0.5);
}
html[data-theme="dark"] .raw-box.container,
html:not([data-theme]) .raw-box.container {
  background: rgba(26, 22, 18, 0.6);
}

/* Labels / tags gold style */
span.post-tag,
span.post-tag-fly {
  background: linear-gradient(135deg, #b8860b, #9a7209) !important;
  color: #fff !important;
  border-radius: 3px !important;
  letter-spacing: 0.3px;
}

/* Responsive tweaks */
@media screen and (max-width: 880px) {
  .post-filter,
  .related-runs,
  .post-inner-area,
  .comments-section {
    border-radius: 8px !important;
    margin-left: 4px;
    margin-right: 4px;
  }
  .item-post h1.entry-title {
    font-size: 20px !important;
    line-height: 1.45 !important;
  }
}
@media screen and (max-width: 480px) {
  .post-filter::before,
  .related-runs::before,
  .post-inner-area::before {
    font-size: 10px;
  }
}

/* Share / social buttons slight gold hover */
.share-runs li a:hover,
.colorful-ico a:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}


/* ===== Fix post images visibility ===== */
.snip-thumbnail {
  opacity: 1 !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  max-height: none !important;
  object-fit: cover !important;
  transform: none !important;
  display: block !important;
}
.post-filter .post-filter-image .post-filter-link {
  height: 200px !important;
  background: #1a1510;
}
.post-filter-link {
  cursor: pointer !important;
}

/* Hide "الفيلسوف / عرض المزيد" section header on homepage posts */
.home #Blog1 > .widget-title,
.home .blog-posts > .widget-title,
#Blog1 .widget > .widget-title {
  display: none !important;
}
#blog-pager,
.blog-pager,

#blog-pager .load-more,

#blog-pager .no-more,

.page-num,
#blog-pager a.page-num,

.page-num:hover,

.page-num.current,

.page-num.prev,


@media (max-width: 480px) {

}


/* ===== AdSense / SEO / A11y helpers (no ads injected) ===== */
.ads-slot, .piki-ads, .piki-ads-res {
  min-height: 0;
  overflow: hidden;
  text-align: center;
}
/* Do not disguise ads as content buttons */

.skip-link{display:none!important;}
/* Readable content measure on posts */
.item-post .post-body {
  max-width: 100%;
  overflow-wrap: break-word;
}
.item-post .post-body p {
  margin: 0 0 1em;
}
/* Reduce layout shift for images */
.post-filter-link, .snip-thumbnail {
  background-color: #1a1510;
}


/* ===== DESKTOP LAYOUT FIX (organized, responsive) ===== */
@media screen and (min-width: 881px) {
  .outer-container {
    display: flex !important;
    flex-direction: row-reverse !important; /* RTL: content first visually on right, sidebar left - wait */
    flex-wrap: nowrap !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
    gap: 20px !important;
    max-width: 1178px !important;
    margin: 0 auto !important;
    width: 100% !important;
    box-sizing: border-box !important;
    padding: 0 12px !important;
  }
  /* For RTL Arabic: main content on the right side of screen, sidebar on the left is common.
     dir=rtl with flex-direction:row puts first DOM child on the right.
     DOM order is usually feed then sidebar, so row = feed on right, sidebar on left. Good. */
  .outer-container {
    flex-direction: row !important;
  }
  #feed-view {
    float: none !important;
    width: auto !important;
    flex: 1 1 0 !important;
    max-width: calc(100% - 340px) !important;
    min-width: 0 !important;
  }
  #sidebar-container {
    float: none !important;
    width: 320px !important;
    flex: 0 0 320px !important;
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
  }
  #sidebar-container .sidebar .widget {
    position: relative !important;
    left: auto !important;
    right: auto !important;
    width: 100% !important;
    margin-bottom: 18px !important;
  }
  /* Social widget: normal block under sidebar, NOT stuck to screen edge */
  #LinkList77, .sidebar .LinkList, ul.socialFilter {
    position: relative !important;
    float: none !important;
    left: auto !important;
    right: auto !important;
    width: 100% !important;
  }
  ul.socialFilter li {
    float: none !important;
    display: inline-block !important;
    width: calc(50% - 6px) !important;
    vertical-align: top !important;
  }
  /* Post page content full readable width */
  .item .outer-container #feed-view,
  .item-post {
    max-width: 100% !important;
  }
  .post-inner-area {
    width: 100% !important;
    box-sizing: border-box !important;
  }
  /* Homepage feature sections full width below */
  .flex-section .container {
    max-width: 1178px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .raw-box.container,
  .gt-sports-mega-container,
  .wn-universe-container {
    max-width: 100% !important;
    box-sizing: border-box !important;
  }
}

@media screen and (min-width: 881px) and (max-width: 1100px) {
  #sidebar-container {
    width: 280px !important;
    flex: 0 0 280px !important;
  }
  #feed-view {
    max-width: calc(100% - 300px) !important;
  }
}

/* Mobile: sidebar below content, social full width */
@media screen and (max-width: 880px) {
  .outer-container {
    display: flex !important;
    flex-direction: column !important;
  }
  #feed-view, #sidebar-container {
    width: 100% !important;
    float: none !important;
    max-width: 100% !important;
    flex: none !important;
  }
  #sidebar-container {
    order: 2;
    margin-top: 16px;
  }
  ul.socialFilter li {
    width: calc(50% - 6px) !important;
  }
}


/* ===== COMMENTS: hidden until user clicks ===== */
.comments .comment-replybox-thread,
.no-comments .comment-form,
.comments .comment-form,
#comments .comment-form,
div.comment-form {
  display: none !important;
}
body.comment-section-visible .comments .comment-replybox-thread,
body.comment-section-visible .no-comments .comment-form,
body.comment-section-visible .comments .comment-form,
body.comment-section-visible #comments .comment-form,
body.comment-section-visible div.comment-form {
  display: block !important;
}
#comment-editor {
  min-height: 200px !important;
  width: 100% !important;
  max-width: 100% !important;
  border: 1px solid rgba(184,134,11,0.35) !important;
  border-radius: 10px !important;
  background: rgba(255,255,255,0.04) !important;
  box-sizing: border-box !important;
}
#show-comment-form,
a#show-comment-form {
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  max-width: 280px !important;
  margin: 16px auto !important;
  background: linear-gradient(135deg, #b8860b, #d4af37) !important;
  color: #1a120b !important;
  font-weight: 700 !important;
  border-radius: 10px !important;
  cursor: pointer !important;
  height: auto !important;
  padding: 14px 18px !important;
  line-height: 1.3 !important;
  text-decoration: none !important;
  border: none !important;
  box-shadow: 0 4px 14px rgba(184,134,11,0.25) !important;
}
body.comment-section-visible #show-comment-form {
  display: none !important;
}


/* ===== MODERN FEATURES PACK (new only) ===== */
#read-progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:99998;pointer-events:none}
#read-progress>span{display:block;height:100%;width:0;background:linear-gradient(90deg,#b8860b,#ffd700);box-shadow:0 0 8px rgba(255,215,0,.45)}
body.font-lg .item-post .post-body{font-size:18px!important;line-height:1.9!important}
body.font-sm .item-post .post-body{font-size:14px!important}
body.reading-mode #feed-view{max-width:780px!important;width:100%!important;margin:0 auto!important;float:none!important}
body.reading-mode .outer-container{display:block!important}
.item-post .post-body blockquote{border-right:3px solid #b8860b;margin:18px 0;padding:12px 16px;background:rgba(184,134,11,.08);border-radius:0 10px 10px 0;font-style:italic}
.faq-item{border:1px solid rgba(184,134,11,.25);border-radius:10px;margin:0 0 10px;overflow:hidden}
.faq-item summary{cursor:pointer;padding:12px 14px;font-weight:700;list-style:none;background:rgba(184,134,11,.07);color:var(--theme-text-color)}
.faq-item .faq-body{padding:12px 14px;font-size:14px;line-height:1.7}
/* ===== قرأت مؤخراً — Professional Card ===== */
#recently-read{
  position:relative;
  margin:0 0 20px;
  padding:16px 16px 14px;
  border-radius:14px;
  background:linear-gradient(160deg, rgba(26,18,11,.92) 0%, rgba(35,26,18,.95) 100%);
  border:1px solid rgba(212,175,55,.35);
  box-shadow:
    0 4px 18px rgba(0,0,0,.22),
    inset 0 1px 0 rgba(255,215,0,.08);
  overflow:hidden;
  transition:border-color .25s ease, box-shadow .25s ease;
}
#recently-read::before{
  content:'';
  position:absolute;
  top:0; right:0; left:0;
  height:3px;
  background:linear-gradient(90deg, transparent, #d4af37, #f0d060, #d4af37, transparent);
  opacity:.85;
}
#recently-read:hover{
  border-color:rgba(212,175,55,.55);
  box-shadow:
    0 6px 24px rgba(0,0,0,.28),
    0 0 0 1px rgba(212,175,55,.12),
    inset 0 1px 0 rgba(255,215,0,.12);
}
#recently-read .rr-header{
  display:flex;
  align-items:center;
  gap:8px;
  margin:0 0 12px;
  padding-bottom:10px;
  border-bottom:1px solid rgba(212,175,55,.18);
}
#recently-read .rr-header h4{
  margin:0;
  font-size:14px;
  font-weight:700;
  letter-spacing:.3px;
  color:#e8c547;
  display:flex;
  align-items:center;
  gap:7px;
}
#recently-read .rr-header h4::before{
  content:'\f017';
  font-family:'Font Awesome 5 Free';
  font-weight:900;
  font-size:13px;
  color:#d4af37;
  opacity:.9;
}
#recently-read .rr-list{
  display:flex;
  flex-direction:column;
  gap:2px;
  margin:0;
  padding:0;
  list-style:none;
}
#recently-read .rr-item{
  margin:0;
  padding:0;
}
#recently-read .rr-item a{
  display:flex;
  align-items:flex-start;
  gap:10px;
  padding:8px 6px;
  border-radius:8px;
  font-size:13px;
  line-height:1.45;
  color:#d6d0c4;
  text-decoration:none;
  transition:background .2s ease, color .2s ease, transform .2s ease;
}
#recently-read .rr-item a:hover{
  background:rgba(212,175,55,.1);
  color:#f5e6a3;
  transform:translateX(-3px);
}
#recently-read .rr-num{
  flex-shrink:0;
  width:20px;
  height:20px;
  margin-top:1px;
  border-radius:6px;
  background:rgba(212,175,55,.15);
  border:1px solid rgba(212,175,55,.3);
  color:#d4af37;
  font-size:11px;
  font-weight:700;
  display:flex;
  align-items:center;
  justify-content:center;
  line-height:1;
}
#recently-read .rr-title{
  flex:1;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
  overflow:hidden;
}
body:not(.dark) #recently-read{
  background:linear-gradient(160deg, #1a120b 0%, #231a12 100%);
}
@media (max-width:600px){
  #recently-read{padding:14px 12px 12px; border-radius:12px}
  #recently-read .rr-header h4{font-size:13px}
  #recently-read .rr-item a{font-size:12.5px; padding:7px 4px}
}
@media(min-width:1025px){.sticky-share-rail{position:fixed;top:40%;right:18px;z-index:50;display:flex;flex-direction:column;gap:8px}.sticky-share-rail a{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(184,134,11,.15);border:1px solid #b8860b;color:#ffd700;text-decoration:none}}
@media(max-width:1024px){.sticky-share-rail{display:none!important}}
.in-brief{margin:0 0 18px;padding:14px 16px;border-radius:12px;border:1px solid rgba(184,134,11,.35);background:linear-gradient(135deg,rgba(184,134,11,.1),rgba(0,0,0,.05))}
.post-disclaimer{margin:16px 0;padding:12px 14px;border-radius:10px;font-size:13px;border:1px solid rgba(220,80,60,.45);background:rgba(220,80,60,.08)}
#copy-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:#1a120b;color:#ffd700;border:1px solid #b8860b;padding:10px 16px;border-radius:8px;opacity:0;pointer-events:none;transition:.25s;z-index:99999;font-size:13px}
#copy-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.post-filter{transition:transform .25s ease,box-shadow .25s ease}
.post-filter:hover{transform:translateY(-3px)}
html{scroll-behavior:smooth}


/* Social LinkList77 restored — shown in sidebar */

/* keep footer social icons visible */
.flex-footer ul.colorful-ico,
.xxex-xcc3 ul.colorful-ico,
.cbvx-cx .colorful-ico {
  display: flex !important;
  visibility: visible !important;
  height: auto !important;
  position: relative !important;
  left: auto !important;
}


#read-progress{display:block!important;position:fixed!important;top:0!important;left:0!important;right:0!important;height:3px!important;z-index:2147483647!important;pointer-events:none!important}
#read-progress>span{display:block!important;height:100%!important;background:linear-gradient(90deg,#b8860b,#ffd700)!important}


/* ============================================================
   DESKTOP RESPONSIVE FIX — keep journal borders, fix layout
   ============================================================ */

*, *::before, *::after { box-sizing: border-box; }

/* Main page shell */
#outer-wrapper {
  width: 100% !important;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

/* Desktop: two-column main + sidebar */
@media screen and (min-width: 992px) {
  .outer-container {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: flex-start !important;
    justify-content: space-between !important;
    gap: 24px !important;
    width: 100% !important;
    max-width: 1178px !important;
    margin: 0 auto !important;
    padding: 0 16px !important;
    box-sizing: border-box !important;
  }

  #feed-view {
    float: none !important;
    flex: 1 1 0 !important;
    width: auto !important;
    max-width: none !important;
    min-width: 0 !important; /* critical so bordered cards don't blow flex */
  }

  #sidebar-container {
    float: none !important;
    flex: 0 0 300px !important;
    width: 300px !important;
    max-width: 300px !important;
    min-width: 280px !important;
    position: relative !important;
    left: auto !important;
    right: auto !important;
  }

  /* Bordered cards inside main column */
  #feed-view .post-filter,
  #feed-view .post-inner-area,
  #feed-view .related-runs,
  #feed-view .comments-section,
  #feed-view #Blog1,
  #feed-view .widget {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Sidebar widgets with borders stay inside column */
  #sidebar-container .widget,
  #sidebar-container .sidebar .widget {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* Full-width sections BELOW (sports / news / tech) */
  .flex-section,
  .raw-box.container,
  .gt-sports-mega-container,
  .wn-universe-container,
  .raw-box,
  #room-box0, #room-box1, #room-box2 {
    width: 100% !important;
    max-width: 1178px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    box-sizing: border-box !important;
  }

  .raw-box.container,
  .gt-sports-mega-container,
  .wn-universe-container {
    overflow: hidden !important;
  }

  /* Grids inside bordered sections */
  .post-filter-wrap .grid-posts {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 20px !important;
    width: 100% !important;
  }

  /* Feature / magazine cards */
  .post-filter {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Social widget allowed in sidebar */
}

/* Large desktop */
@media screen and (min-width: 1200px) {
  .outer-container,
  .flex-section,
  .raw-box.container,
  .gt-sports-mega-container,
  .wn-universe-container {
    max-width: 1178px !important;
  }
  #sidebar-container {
    flex: 0 0 320px !important;
    width: 320px !important;
    max-width: 320px !important;
  }
}

/* Tablet */
@media screen and (min-width: 881px) and (max-width: 991px) {
  .outer-container {
    display: flex !important;
    flex-direction: row !important;
    gap: 16px !important;
    padding: 0 12px !important;
    max-width: 100% !important;
  }
  #feed-view {
    flex: 1 1 0 !important;
    min-width: 0 !important;
    float: none !important;
  }
  #sidebar-container {
    flex: 0 0 260px !important;
    width: 260px !important;
    float: none !important;
  }
  .post-filter-wrap .grid-posts {
    grid-template-columns: 1fr 1fr !important;
  }
}

/* Mobile: stack, borders kept */
@media screen and (max-width: 880px) {
  .outer-container {
    display: flex !important;
    flex-direction: column !important;
    padding: 0 10px !important;
    gap: 12px !important;
  }
  #feed-view,
  #sidebar-container {
    width: 100% !important;
    max-width: 100% !important;
    float: none !important;
    flex: none !important;
  }
  .post-filter-wrap .grid-posts {
    grid-template-columns: 1fr !important;
  }
  .post-filter,
  .related-runs,
  .post-inner-area,
  .comments-section,
  .raw-box .widget {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

/* Journal borders: never overflow parent */
.post-filter,
.related-runs,
.post-inner-area,
.comments-section,
.ticker-pro,
.cvxc-gribv,
.featured-box,
.cvcx-Fcxv .widget,
.sidebar .widget,
.raw-box .widget,
.gt-sports-mega-container,
.wn-universe-container {
  max-width: 100% !important;
  box-sizing: border-box !important;
  overflow: hidden !important;
}

/* Images inside bordered cards */
.post-filter-image,
.post-filter-link,
.snip-thumbnail {
  max-width: 100% !important;
}

/* Fix section titles row on desktop */
.blog-posts .widget-title,
.raw-box .widget-title,
.title-wrap {
  width: 100% !important;
  box-sizing: border-box !important;
}


/* ============================================================
   FULL WIDTH DESKTOP — sections use full available width
   ============================================================ */

@media screen and (min-width: 881px) {
  /* Page center container */
  #outer-wrapper,
  .main-wrapper,
  body > .main {
    width: 100% !important;
  }

  /* On homepage: no empty sidebar gap — content full width */
  body.home .outer-container,
  body.index .outer-container,
  .home .outer-container {
    display: block !important;
    width: 100% !important;
    max-width: 1100px !important;
    margin: 0 auto !important;
    padding: 0 20px !important;
  }

  body.home #feed-view,
  body.index #feed-view,
  .home #feed-view {
    float: none !important;
    width: 100% !important;
    max-width: 100% !important;
    flex: none !important;
  }

  /* Hide empty sidebar on homepage to remove left/right gap */
  body.home #sidebar-container,
  body.index #sidebar-container,
  .home #sidebar-container {
    display: none !important;
  }

  /* Post page: keep sidebar but main uses remaining space fully */
  body.item .outer-container,
  body.static_page .outer-container {
    display: flex !important;
    flex-direction: row !important;
    max-width: 1100px !important;
    margin: 0 auto !important;
    padding: 0 20px !important;
    gap: 24px !important;
  }
  body.item #feed-view {
    flex: 1 1 auto !important;
    width: auto !important;
    max-width: 100% !important;
    min-width: 0 !important;
    float: none !important;
  }
  body.item #sidebar-container {
    display: block !important;
    flex: 0 0 300px !important;
    width: 300px !important;
  }

  /* ALL section blocks full width of container */
  .flex-section,
  .raw-box,
  .raw-box.container,
  .gt-sports-mega-container,
  .wn-universe-container,
  #room-box0, #room-box1, #room-box2,
  .post-filter-wrap,
  #blog-pager,

/* Sports / news inner content stretch */
  .gt-sports-mega-container > *,
  .wn-universe-container > *,
  .raw-box .widget,
  .raw-box .widget-content {
    width: 100% !important;
    max-width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Posts grid: 2 columns full width */
  .home .post-filter-wrap .grid-posts,
  .index .post-filter-wrap .grid-posts {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 22px !important;
    width: 100% !important;
  }

  /* Single post card on home when only one post */
  .post-filter {
    width: 100% !important;
    max-width: 100% !important;
  }

  /* Menu dropdown full usable width under header */
/* body.spring-open #menu-space removed */
}

/* Very wide screens */
@media screen and (min-width: 1280px) {
  body.home .outer-container,
  body.item .outer-container,
  .flex-section,
  .raw-box.container,
  .gt-sports-mega-container,
  .wn-universe-container {
    max-width: 1200px !important;
  }
}

/* Mobile unchanged: full width stacked */
@media screen and (max-width: 880px) {
  .outer-container,
  #feed-view,
  #sidebar-container,
  .flex-section,
  .raw-box.container,
  .gt-sports-mega-container,
  .wn-universe-container {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  body.home #sidebar-container {
    display: block !important; /* show sidebar widgets under content on mobile if any remain */
  }
}


/* ============================================================
   POSTS FULL WIDTH — single/multiple posts fill container
   ============================================================ */

/* Homepage posts area always full width of container */
.home #feed-view,
.home #Blog1,
.home .blog-posts,
.home .post-filter-wrap,
.home #Blog1 .widget-content {
  width: 100% !important;
  max-width: 100% !important;
  float: none !important;
  box-sizing: border-box !important;
}

/* Grid: auto-fit so 1 post = full width, 2+ share row */
.home .post-filter-wrap .grid-posts,
.index .post-filter-wrap .grid-posts,
.post-filter-wrap .grid-posts {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)) !important;
  gap: 20px !important;
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  box-sizing: border-box !important;
}

/* Each post card stretches */
.home .post-filter,
.index .post-filter,
.post-filter-wrap .post-filter {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box !important;
  margin: 0 !important;
}

/* Image area full width of card */
.home .post-filter .post-filter-image,
.home .post-filter .post-filter-inner,
.home .post-filter .post-filter-link {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.home .post-filter .post-filter-link {
  height: 240px !important;
}

@media screen and (min-width: 881px) {
  .home .post-filter .post-filter-link {
    height: 280px !important;
  }
  /* When only one child, force full width explicitly */
  .post-filter-wrap .grid-posts > .post-filter:only-child,
  .post-filter-wrap .grid-posts > article:only-child,
  .post-filter-wrap .grid-posts > div:only-child {
    grid-column: 1 / -1 !important;
    width: 100% !important;
    max-width: 100% !important;
  }
}

@media screen and (max-width: 880px) {
  .post-filter-wrap .grid-posts {
    grid-template-columns: 1fr !important;
  }
  .home .post-filter .post-filter-link {
    height: 200px !important;
  }
}

/* Pager under posts full width */
.home #blog-pager,

/* ============================================================
   الفيلسوف — Responsive Layout + Unified Pharaonic Header Menu
   مستقل عن أي قالب خارجي
   ============================================================ */

/* ============================================================
   SECTION: Global Layout & Overflow Protection
   ------------------------------------------------------------
   منع التمرير الأفقي وضبط الحاويات الأساسية.
   ============================================================ */
html{width:100%;max-width:100%;overflow-x:hidden;}
body{width:100%;max-width:100%;overflow-x:hidden;}
*,*:before,*:after{box-sizing:border-box;}
img,video,iframe,table{max-width:100%;}
img{height:auto;}
#outer-wrapper{width:100%!important;max-width:100%!important;overflow-x:clip!important;}
.container{width:100%!important;max-width:1178px!important;margin-left:auto!important;margin-right:auto!important;padding-left:16px!important;padding-right:16px!important;box-sizing:border-box!important;}
.flex-section{width:100%!important;max-width:100%!important;}
#center-container{width:100%!important;max-width:100%!important;padding:18px 0 0!important;margin:0!important;}
#center-container>.container.outer-container{width:100%!important;max-width:1178px!important;margin:0 auto!important;}
/* #xvx-rox1 !important neutralized */
.pharaoh-eye{font-size:16px!important;line-height:1!important;opacity:.95!important;}
.pharaoh-menu-label{letter-spacing:.2px!important;}
/* Professional chevron instead of ugly triangle */
.pharaoh-arrow{
  display:inline-block!important;width:8px!important;height:8px!important;
  border-right:2px solid currentColor!important;border-bottom:2px solid currentColor!important;
  transform:rotate(45deg)!important;margin-top:-4px!important;
  font-size:0!important;line-height:0!important;transition:transform .25s ease!important;
  opacity:.85!important;
}
.pharaoh-info-symbol{font-size:15px!important;opacity:.95!important;}
.pharaoh-info-label{letter-spacing:.2px!important;}
.pharaoh-info-arrow{
  display:inline-block!important;width:8px!important;height:8px!important;
  border-right:2px solid currentColor!important;border-bottom:2px solid currentColor!important;
  transform:rotate(45deg)!important;margin-top:-4px!important;
  font-size:0!important;line-height:0!important;transition:transform .25s ease!important;
  opacity:.85!important;
}
.pharaoh-info-content{
  position:absolute!important;top:calc(100% + 10px)!important;right:0!important;left:auto!important;
  width:min(280px,calc(100vw - 20px))!important;max-height:0!important;overflow:hidden!important;
  opacity:0!important;visibility:hidden!important;pointer-events:none!important;
  background:linear-gradient(165deg,#1a120b 0%,#241a10 100%)!important;
  border:1px solid rgba(212,175,55,.4)!important;border-radius:14px!important;
  box-shadow:0 16px 40px rgba(0,0,0,.45), 0 0 0 1px rgba(212,175,55,.08)!important;
  transform:translateY(-6px)!important;
  transition:max-height .28s ease,opacity .2s ease,transform .25s ease,visibility .2s ease!important;
  padding:6px 0!important;
}
.pharaoh-info-content a{
  display:flex!important;align-items:center!important;gap:10px!important;width:100%!important;min-height:42px!important;
  padding:8px 14px!important;color:#e8dfc8!important;text-decoration:none!important;
  border-bottom:1px solid rgba(212,175,55,.1)!important;font-size:13px!important;font-weight:600!important;
  transition:background .18s ease,color .18s ease,padding .18s ease!important;
}
.pharaoh-info-content a:last-child{border-bottom:0!important;}
.pharaoh-info-content a:hover,.pharaoh-info-content a:focus{
  background:rgba(212,175,55,.12)!important;color:#f0d060!important;padding-right:18px!important;
}
@media screen and (max-width:880px){
}
@media screen and (max-width:380px){
  .pharaoh-info-symbol,.pharaoh-eye{font-size:14px!important;}
}


/* ============================================================
   DESKTOP HORIZONTAL NAV (professional, like reference site)
   On desktop: show category links as clean horizontal bar.
   Dropdown buttons stay for mobile only.
   ============================================================ */
@media screen and (min-width:992px){
  .pharaoh-info-content a{
    font-size:12px!important;
    color:#c9b87a!important;
    min-height:30px!important;
    padding:4px 10px!important;
  }
  .pharaoh-info-content a:hover{
    color:#f0d060!important;
  }
}

/* Mobile: keep dropdown, force hide triangle text, use CSS chevron */
@media screen and (max-width:991px){
  .pharaoh-arrow,
  .pharaoh-info-arrow{
    font-size:0!important;
    line-height:0!important;
    color:transparent!important;
    text-indent:-999px!important;
    overflow:hidden!important;
    width:8px!important;height:8px!important;
    border-right:2px solid #f0d060!important;
    border-bottom:2px solid #f0d060!important;
    border-top:0!important;border-left:0!important;
    transform:rotate(45deg)!important;
    margin-top:-3px!important;
    display:inline-block!important;
    background:none!important;
  }
}
.mega-mode{padding:0!important;margin:0!important;}

/* Main desktop layout */
@media screen and (min-width:992px){
  .outer-container{
    display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-items:flex-start!important;
    justify-content:space-between!important;gap:24px!important;padding:0 16px!important;
    width:100%!important;max-width:1178px!important;margin:0 auto!important;
  }
  #feed-view{
    float:none!important;width:auto!important;max-width:none!important;min-width:0!important;
    flex:1 1 auto!important;order:1!important;
  }
  #sidebar-container{
    float:none!important;width:300px!important;max-width:300px!important;min-width:300px!important;
    flex:0 0 300px!important;order:2!important;position:relative!important;
  }
  .post-filter-wrap{width:100%!important;float:none!important;}
  .post-filter-wrap .grid-posts{width:100%!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:20px!important;}
}

/* Medium desktop/tablet */
@media screen and (min-width:881px) and (max-width:991px){
  .outer-container{display:flex!important;flex-direction:row!important;gap:16px!important;padding:0 12px!important;}
  #feed-view{float:none!important;min-width:0!important;flex:1 1 auto!important;width:auto!important;}
  #sidebar-container{float:none!important;width:250px!important;min-width:250px!important;flex:0 0 250px!important;}
  .post-filter-wrap .grid-posts{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:12px!important;}
}

/* Phone: full width, no narrow bordered column */
@media screen and (max-width:880px){
  .container,#center-container>.container.outer-container{width:100%!important;max-width:100%!important;padding-left:8px!important;padding-right:8px!important;}
  #center-container{padding-top:10px!important;}
  .outer-container{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:12px!important;padding-left:0!important;padding-right:0!important;}
  #feed-view,#sidebar-container{width:100%!important;max-width:100%!important;min-width:0!important;float:none!important;flex:none!important;}
  #sidebar-container{order:2!important;margin-top:0!important;}
  .post-filter-wrap .grid-posts{display:grid!important;grid-template-columns:1fr!important;gap:12px!important;width:100%!important;}
  .post-filter,.post-inner-area,.related-runs,.comments-section,.raw-box,.raw-box .widget,.sidebar .widget,.ticker-pro,.featured-box,.cvxc-gribv,.gt-sports-mega-container,.wn-universe-container{
    width:100%!important;max-width:100%!important;margin-left:0!important;margin-right:0!important;
  }
  .post-filter{padding:7px!important;margin-top:6px!important;margin-bottom:6px!important;}
  .post-filter .post-filter-image .post-filter-link{height:auto!important;aspect-ratio:16/9!important;}
  .post-inner-area{padding:12px 8px 16px!important;}
  .raw-box .widget{padding-left:0!important;padding-right:0!important;}
  .ticker-pro{margin-left:0!important;margin-right:0!important;}
}

/* Very small phones */
@media screen and (max-width:380px){
  .container,#center-container>.container.outer-container{padding-left:5px!important;padding-right:5px!important;}
  .pharaoh-eye{font-size:15px!important;}
}

/* Content cards and images never exceed their parent */
#feed-view .post-filter,
#feed-view .post-inner-area,
#feed-view .related-runs,
#feed-view .comments-section,
#feed-view .widget,
#feed-view .raw-box,
#sidebar-container .widget{
  box-sizing:border-box!important;max-width:100%!important;
}
#feed-view img,.post-filter img,.post-inner-area img,.sidebar img{max-width:100%!important;height:auto!important;}
.post-filter .post-filter-image,.post-filter .post-filter-link{max-width:100%!important;overflow:hidden!important;}

/* ============================================================
   الفيلسوف — Extra Professional Features Pack (AdSense-safe)
   1 Last Updated | 2 Key Takeaways | 3 Inline Share
   4 Same Category | 5 Print | 6 Views | 7 Daily Quote
   8 Author Box Pro | 9 Sticky TOC | 10 Skeleton Loading
   ============================================================ */

/* 1. Last Updated badge */
.post-updated-badge{
  display:inline-flex;
  align-items:center;
  gap:6px;
  margin:8px 0 14px;
  padding:5px 12px;
  border-radius:20px;
  font-size:12px;
  font-weight:600;
  color:#d4af37;
  background:rgba(212,175,55,.1);
  border:1px solid rgba(212,175,55,.28);
}
.post-updated-badge i{font-size:11px}

/* 2. Key Takeaways box */
.key-takeaways{
  margin:0 0 22px;
  padding:16px 18px;
  border-radius:14px;
  background:linear-gradient(145deg,rgba(212,175,55,.09),rgba(0,0,0,.04));
  border:1px solid rgba(212,175,55,.32);
  box-shadow:0 4px 14px rgba(0,0,0,.08);
}
.key-takeaways .kt-title{
  display:flex;
  align-items:center;
  gap:8px;
  margin:0 0 12px;
  font-size:15px;
  font-weight:700;
  color:#e8c547;
}
.key-takeaways .kt-title::before{
  content:'\f0eb';
  font-family:'Font Awesome 5 Free';
  font-weight:900;
  color:#d4af37;
}
.key-takeaways ul{
  margin:0;
  padding:0 0 0 4px;
  list-style:none;
}
.key-takeaways li{
  position:relative;
  padding:6px 0 6px 22px;
  font-size:14px;
  line-height:1.55;
  color:var(--main-text-color);
}
.key-takeaways li::before{
  content:'\f058';
  font-family:'Font Awesome 5 Free';
  font-weight:900;
  position:absolute;
  right:0;
  top:7px;
  font-size:12px;
  color:#d4af37;
}
.rtl .key-takeaways li{padding:6px 22px 6px 0}
.rtl .key-takeaways li::before{right:auto;left:0}

@media print{
  #feed-view, .item-post, .post-body{
    width:100% !important; max-width:100% !important; float:none !important;
  }
  body{background:#fff !important; color:#111 !important}
}


/* 7. Daily Quote box (sidebar) */
.daily-quote-box{
  position:relative;
  margin:0 0 20px;
  padding:18px 16px 16px;
  border-radius:14px;
  background:linear-gradient(160deg, rgba(26,18,11,.95), rgba(40,28,18,.97));
  border:1px solid rgba(212,175,55,.35);
  box-shadow:0 4px 18px rgba(0,0,0,.2);
  overflow:hidden;
}
.daily-quote-box::before{
  content:'';
  position:absolute;
  top:0; right:0; left:0;
  height:3px;
  background:linear-gradient(90deg, transparent, #d4af37, #f0d060, #d4af37, transparent);
}
.daily-quote-box .dq-label{
  display:flex;
  align-items:center;
  gap:7px;
  margin:0 0 10px;
  font-size:13px;
  font-weight:700;
  color:#e8c547;
}
.daily-quote-box .dq-label::before{
  content:'\f10d';
  font-family:'Font Awesome 5 Free';
  font-weight:900;
  color:#d4af37;
  font-size:12px;
}
.daily-quote-box .dq-text{
  font-size:13.5px;
  line-height:1.7;
  color:#d6d0c4;
  font-style:italic;
  margin:0 0 8px;
}
.daily-quote-box .dq-author{
  display:block;
  text-align:left;
  font-size:12px;
  font-weight:600;
  color:#d4af37;
}


/* 10. Skeleton loading for images */
.snip-thumbnail.skeleton,
img.skeleton{
  background:linear-gradient(90deg,
    rgba(212,175,55,.06) 25%,
    rgba(212,175,55,.14) 50%,
    rgba(212,175,55,.06) 75%);
  background-size:200% 100%;
  animation:skeleton-shine 1.4s ease-in-out infinite;
  min-height:120px;
}
@keyframes skeleton-shine{
  0%{background-position:200% 0}
  100%{background-position:-200% 0}
}
.snip-thumbnail.lazy-img,
img.lazy-img{
  animation:none;
  background:none;
}

/* Shared polish for new elements */
.pro-feature-fade{
  animation:proFadeIn .4s ease;
}
@keyframes proFadeIn{
  from{opacity:0; transform:translateY(8px)}
  to{opacity:1; transform:translateY(0)}
}


/* Always kill ugly unicode triangle in menu buttons */
.pharaoh-arrow,
.pharaoh-info-arrow{
  font-size:0!important;line-height:0!important;color:transparent!important;
  width:8px!important;height:8px!important;
  border-right:2px solid currentColor!important;
  border-bottom:2px solid currentColor!important;
  border-top:none!important;border-left:none!important;
  display:inline-block!important;
  transform:rotate(45deg)!important;
  margin-top:-3px!important;
  vertical-align:middle!important;
  background:transparent!important;
  overflow:hidden!important;
}
/* ============================================================
   إصلاح الهيدر + Sticky + أزرار المقال (Desktop + Mobile)
   ============================================================ */

/* ---------- 1) لون خلفية الهيدر (بدل البني) ---------- */
:root {
  --main-menu-bg: #0f1419 !important;
  --top-bar: #0f1419 !important;
}

/* على سطح المكتب: القائمة أفقية في سطر واحد */
@media screen and (min-width: 992px) {
  .pharaoh-info-content a {
    font-size: 12px !important;
    color: #c9b87a !important;
    min-height: 32px !important;
    padding: 4px 9px !important;
  }
}

/* الموبايل: يفضل الأزرار المنسدلة زي ما هي */
@media screen and (max-width: 991px) {
}

/* ============================================================
   إصلاحات الفيلسوف — هيدر + أزرار + ترقيم + زر صعود واحد
   (يوضع قبل نهاية b:skin)
   ============================================================ */

/* لون خلفية الهيدر الجديد (بدل البني) */
:root {
  --main-menu-bg: #0b0f14 !important;
  --top-bar: #0b0f14 !important;
}

/* سطح المكتب: قائمة أفقية */
@media screen and (min-width: 992px) {
  .pharaoh-info-content a {
    font-size: 12.5px !important;
    color: #c9b87a !important;
    min-height: 32px !important;
    padding: 5px 10px !important;
  }
}

/* الموبايل: أزرار منسدلة نظيفة */
@media screen and (max-width: 991px) {
}


#blog-pager,
.blog-pager,
#blog-pager-ok,
#blog-pager-nav,
#blog-pager-next,

#blog-pager .load-more,
#blog-pager-ok .load-more,

.page-num,
#blog-pager a.page-num,
#blog-pager span.page-num,
.blog-pager a.page-num,

.page-num:hover,
#blog-pager a.page-num:hover,

.page-num.current,
#blog-pager span.page-num.current,

.page-num.prev,

@media (max-width: 480px) {

}
.home #blog-pager,
.home .blog-pager,
.home #blog-pager-nav,
.home #blog-pager-next,

.home .blog-pager .blog-pager-newer-link,

/* ============================================================
   الفيلسوف — هيدر FIXED حقيقي v3
   الهيدر خارج #outer-wrapper + position:fixed
   ============================================================ */

.skip-link,
a.skip-link {
  display: none !important;
  visibility: hidden !important;
  pointer-events: none !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  position: absolute !important;
  left: -9999px !important;
}

body {
  padding-top: 72px !important;
}

#outer-wrapper {
  overflow: visible !important;
  overflow-x: hidden !important;
}

/* ----- Desktop: DISABLED horizontal menu — نفس سلوك الموبايل (زر قائمة) ----- */
@media screen and (min-width: 900px) {
}

/* ----- موبايل: أزرار فقط، الروابط جوه القائمة ----- */
@media screen and (max-width: 899px) {
  body { padding-top: 64px !important; }
}


/* ============================================================
   CLEAN OVERRIDE 2026-09-05 — Pharaoh Header + Pagination
============================================================ */
body { padding-top: 0 !important; }
.pharaoh-eye { font-size: 16px !important; line-height: 1 !important; opacity: .95 !important; }
.pharaoh-arrow { display: inline-block !important; width: 0 !important; height: 0 !important; border-left: 5px solid transparent !important; border-right: 5px solid transparent !important; border-top: 6px solid #f0d060 !important; transition: transform .25s ease !important; margin-right: 2px !important; }
@media screen and (max-width: 480px) {
}


/* ============================================================
   FINAL FORCE 2026-09-05b — Desktop = same dropdown as mobile
============================================================ */
@media screen and (min-width: 1px) {
  /* إخفاء أزرار التكبير/التصغير A+ A- */
  .post-tools-bar .font-btns {
    display: none !important;
  }
  body { padding-top: 0 !important; }
}
html body .post-tools-bar .font-btns,
html body span.font-btns {
  display: none !important;
  visibility: hidden !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
}

  background: linear-gradient(135deg, #7c3aed, #c4b5fd) !important;
}
@media screen and (max-width: 520px) {
}
html body #blog-pager,
html body #blog-pager-ok,
html body #blog-pager-index,
html body #blog-pager-nav,
html body #blog-pager-next,

html body #blog-pager .page-num,
html body #blog-pager a.page-num,
html body #blog-pager span.page-num,
html body .blog-pager .page-num,
html body a.page-num,

html body #blog-pager span.page-num.current,

html body #blog-pager .load-more,

/* ============================================================
   V11 — header fixed + no top gap + cards + pager
============================================================ */

/* شيل أي padding/margin فوق الصفحة */
html, body {
  margin: 0 !important;
  padding: 0 !important;
  padding-top: 0 !important;
}
html body #page-wrap,
html body .page-wrap,
html body #outer-wrapper,
html body .outer-wrapper,
html body #content-wrapper,
html body .main-wrap,
html body #main-wrapper,
html body .site-main,
html body #content,
html body #main,
html body .main {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
@media (max-width: 520px) {
}
html body #blog-pager,
html body #blog-pager-nav,
html body #blog-pager-next,


/* شبكة المقالات */
html body .grid-posts {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 18px 20px !important;
  margin: 0 !important;
  padding: 0 !important;
  min-height: 0 !important;
}
@media (max-width: 680px) {
  html body .grid-posts { grid-template-columns: 1fr !important; gap: 14px !important; }
}
html body .blog-posts,
html body .post-filter-wrap {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
  min-height: 0 !important;
}
html body .queryEmpty { display: none !important; }

/* بطاقات من الفيد — صور ظاهرة فوراً */
html body .grid-posts .post-filter-image {
  position: relative !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  background: #121820 !important;
}
html body .grid-posts .post-filter-inner,
html body .grid-posts .post-filter-link {
  display: block !important;
  width: 100% !important;
  height: 180px !important;
  overflow: hidden !important;
}
html body .grid-posts .snip-thumbnail,
html body .snip-thumbnail.lazy-img {
  opacity: 1 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
}
html body .grid-posts .piki-hero-flow {
  padding: 8px 4px 2px !important;
  display: block !important;
  position: relative !important;
}
html body .grid-posts .post-tag {
  display: inline-block !important;
  background: linear-gradient(135deg, #b8860b, #d4af37) !important;
  color: #1a120b !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  padding: 2px 8px !important;
  border-radius: 6px !important;
  margin-bottom: 4px !important;
}
html body .grid-posts .entry-title {
  display: block !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  line-height: 1.35 !important;
  margin: 0 !important;
  padding: 0 !important;
  height: auto !important;
  overflow: visible !important;
}
html body .grid-posts .entry-title a {
  color: #e0c87c !important;
  text-decoration: none !important;
}
html body .post-tools-bar .font-btns { display: none !important; }


/* V12 fixes */
html body .grid-posts .post-filter-image {
  overflow: visible !important;
}
html body .grid-posts .piki-hero-flow {
  overflow: visible !important;
  position: relative !important;
  z-index: 2 !important;
  padding: 10px 6px 8px !important;
  min-height: auto !important;
}
html body .grid-posts .post-tag,
html body .post-filter .post-tag {
  display: inline-block !important;
  position: relative !important;
  z-index: 3 !important;
  background: linear-gradient(135deg, #b8860b, #d4af37) !important;
  color: #1a120b !important;
  font-size: 11px !important;
  font-weight: 700 !important;
  padding: 3px 10px !important;
  border-radius: 6px !important;
  margin: 0 0 6px 0 !important;
  max-width: 100% !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
html body .grid-posts .entry-title {
  overflow: visible !important;
  height: auto !important;
  max-height: none !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
}
html body .grid-posts .post-filter-inner,
html body .grid-posts .post-filter-link {
  height: 200px !important;
  border-radius: 12px !important;
  overflow: hidden !important;
}
html body .grid-posts .snip-thumbnail {
  opacity: 1 !important;
  image-rendering: auto !important;
}

/* شريط الأخبار تحت الهيدر مش تحتيه */
html body .breaking-ticker,
html body #breaking-news,
html body .ticker-wrap,
html body .news-ticker,
html body .alfaylasoof-news {
  position: relative !important;
  z-index: 1 !important;
  margin-top: 0 !important;
}


/* ============================================================
   V14 — أسماء التصنيف كاملة تحت كل المقالات (كل الصفحات)
============================================================ */
html body span.post-tag,
html body .post-tag,
html body .post-filter .post-tag,
html body .grid-posts .post-tag,
html body .piki-hero-flow .post-tag,
html body .blog-post .post-tag {
  display: inline-flex !important;
  align-items: center !important;
  width: auto !important;
  max-width: 100% !important;
  height: auto !important;
  min-height: 22px !important;
  line-height: 1.35 !important;
  padding: 4px 12px !important;
  margin: 0 0 8px 0 !important;
  border-radius: 8px !important;
  font-size: 12px !important;
  font-weight: 700 !important;
  text-transform: none !important;
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: clip !important;
  word-break: break-word !important;
  z-index: 5 !important;
  position: relative !important;
  box-sizing: border-box !important;
  background: linear-gradient(135deg, #b8860b, #d4af37) !important;
  color: #1a120b !important;
}

/* منطقة العنوان + التصنيف تحت الصورة */
html body .piki-hero-flow,
html body .post-filter .piki-hero-flow,
html body .grid-posts .piki-hero-flow {
  position: relative !important;
  display: block !important;
  overflow: visible !important;
  height: auto !important;
  max-height: none !important;
  padding: 10px 6px 12px !important;
  margin: 0 !important;
  z-index: 4 !important;
}

/* العنوان تحت التصنيف كامل */
html body .post-filter .entry-title,
html body .grid-posts .entry-title,
html body .piki-hero-flow .entry-title {
  display: block !important;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
  line-height: 1.4 !important;
  margin: 0 !important;
  padding: 0 !important;
  font-size: 14px !important;
  font-weight: 700 !important;
}

html body .post-filter .entry-title a,
html body .grid-posts .entry-title a {
  display: block !important;
  color: #e0c87c !important;
  text-decoration: none !important;
  white-space: normal !important;
  overflow: visible !important;
}

/* الصورة متقصّشش التصنيف */
html body .post-filter .post-filter-image,
html body .grid-posts .post-filter-image {
  overflow: visible !important;
  height: auto !important;
}
html body .post-filter .post-filter-image .post-filter-inner,
html body .grid-posts .post-filter-inner {
  overflow: hidden !important;
  border-radius: 12px !important;
  margin-bottom: 0 !important;
  height: 200px !important;
  float: none !important;
  width: 100% !important;
}
html body .post-filter .post-filter-link,
html body .grid-posts .post-filter-link {
  height: 200px !important;
  display: block !important;
  overflow: hidden !important;
}

@media (max-width: 680px) {
  html body .post-filter .post-filter-image .post-filter-inner,
  html body .grid-posts .post-filter-inner,
  html body .post-filter .post-filter-link,
  html body .grid-posts .post-filter-link {
    height: 180px !important;
  }
  html body span.post-tag,
  html body .post-tag {
    font-size: 11px !important;
    padding: 3px 10px !important;
  }
  html body .post-filter .entry-title,
  html body .grid-posts .entry-title {
    font-size: 13px !important;
  }
}

@media (min-width: 992px) {
  html body .post-filter .post-filter-image .post-filter-inner,
  html body .grid-posts .post-filter-inner,
  html body .post-filter .post-filter-link,
  html body .grid-posts .post-filter-link {
    height: 210px !important;
  }
  html body .post-filter .entry-title,
  html body .grid-posts .entry-title {
    font-size: 15px !important;
  }
}


/* قرأت مؤخراً تحت شبكة المقالات */
html body #recently-read.rr-below-posts,
html body #recently-read {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
  margin: 18px 0 24px !important;
  clear: both !important;
}
html body #feed-view #recently-read,
html body .blog-posts + #recently-read,
html body .grid-posts + #recently-read,

/* أداء الصور */
html body img.snip-thumbnail,
html body .snip-thumbnail.lazy-img {
  opacity: 1 !important;
  content-visibility: auto;
  background: #121820;
}
html body .grid-posts .blog-post,
html body .post-filter {
  content-visibility: auto;
  contain-intrinsic-size: 280px;
}


/* ============================================================
   V18 — سطح المكتب: قائمة أفقية تحت الهيدر + إخفاء شارة المدونة
   الموبايل: بدون تغيير
============================================================ */
@media (min-width: 992px) {
}

/* الموبايل: إبقاء السلوك الرأسي كما هو — لا تغيير */
@media (max-width: 991px) {
}


/* V20 — قائمة أفقية تابلت/سطح مكتب */
@media (min-width: 700px) {
}


/* V21 — عناصر القائمة داخل الهيدر أفقياً (تابلت/سطح مكتب) */
@media (min-width: 700px) {
}


/* جودة صور صفحات الترقيم */
html body .grid-posts .snip-thumbnail,
html body .grid-posts img.snip-thumbnail {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  object-position: center !important;
  image-rendering: auto !important;
}
html body .grid-posts .post-filter-link,
html body .grid-posts .post-filter-inner {
  overflow: hidden !important;
}
/* ===== إصلاح الفراغ في AppMint / WebView ===== */
html body {
  padding-top: 56px !important;
  margin-top: 0 !important;
}
#outer-wrapper,
.outer-wrapper,
#content-wrapper,
#main-wrapper,
#content,
#main,
#center-container,
#feed-view,
.grid-posts,
.blog-posts,
#Blog1 {
  margin-top: 0 !important;
  padding-top: 0 !important;
}


  .reaction-burst-root{display:none!important;}
}

/* حاويات محتوى المقال: نفس عرض الإطار الخارجي بدون بوردر داخلي ضاغط. */
.item-post .post-body > div,
.item-post .post-body > section,
.item-post .post-body > article{
  width:100%!important;max-width:none!important;box-sizing:border-box!important;
  margin-left:0!important;margin-right:0!important;
}
.item-post .post-body > div[style*='max-width'],
.item-post .post-body > section[style*='max-width'],
.item-post .post-body > article[style*='max-width']{max-width:none!important;}

/* ============================================================
   عناوين الويدجت — عنوان مختصر داخل إطار + خط ملاصق أسفله
   ============================================================ */
.sidebar .widget-title,.raw-box .widget-title,.blog-posts .widget-title,.related-runs .widget-title,.title-wrap{
  position:relative!important;display:block!important;width:100%!important;height:auto!important;box-sizing:border-box!important;
  margin:0 0 14px!important;padding:0!important;border:1px solid rgba(184,134,11,.36)!important;border-radius:11px 11px 0 0!important;
  background:rgba(212,175,55,.035)!important;overflow:visible!important;
}
.sidebar .widget-title h3,.raw-box .widget-title h3,.blog-posts .widget-title h3,.related-runs .widget-title h3,.title-wrap h3{
  position:relative!important;display:inline-flex!important;align-items:center!important;width:auto!important;min-height:36px!important;
  box-sizing:border-box!important;margin:0!important;padding:6px 14px!important;border:0!important;border-radius:9px 9px 0 0!important;
  background:linear-gradient(145deg,rgba(212,175,55,.16),rgba(212,175,55,.05))!important;
  color:#9a7618!important;font-size:15px!important;line-height:1.45!important;font-weight:900!important;
  text-transform:none!important;float:none!important;
}
.sidebar .widget-title h3:after,.raw-box .widget-title h3:after,.blog-posts .widget-title h3:after,.related-runs .widget-title h3:after,.title-wrap h3:after{
  content:''!important;position:absolute!important;right:0!important;left:auto!important;bottom:-3px!important;width:100%!important;height:3px!important;
  background:linear-gradient(90deg,#ffd700,#b8860b,transparent)!important;border-radius:3px!important;
}
.rtl .sidebar .widget-title h3:after,.rtl .raw-box .widget-title h3:after,.rtl .blog-posts .widget-title h3:after,.rtl .related-runs .widget-title h3:after,.rtl .title-wrap h3:after{
  right:auto!important;left:0!important;background:linear-gradient(270deg,#ffd700,#b8860b,transparent)!important;
}
.sidebar .widget-title:after,.raw-box .widget-title:after,.blog-posts .widget-title:after,.related-runs .widget-title:after,.title-wrap:after{
  content:''!important;position:absolute!important;right:0!important;left:0!important;bottom:-1px!important;height:1px!important;background:rgba(184,134,11,.24)!important;
}

/* إجمالي المشاهدات — عداد + الرسم البياني بدون الرموز الزائدة */
#Stats1 .widget-title h3{font-size:15px!important;}
#Stats1 .widget-content{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;min-height:70px!important;padding:12px 14px!important;}
#Stats1 .counter-wrapper{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;min-width:120px!important;min-height:46px!important;padding:7px 14px!important;box-sizing:border-box!important;border-radius:11px!important;background:linear-gradient(145deg,#18263d,#274f82)!important;color:#fff!important;border:1px solid #5f94dc!important;font-size:21px!important;font-weight:900!important;line-height:1.2!important;}
#Stats1 .counter-wrapper:before{content:'👁'!important;margin:0!important;font-size:17px!important;line-height:1!important;}
#Stats1 [id$='_sparklinespan']{display:inline-block!important;flex:1 1 auto!important;min-width:90px!important;width:170px!important;height:42px!important;overflow:hidden!important;}
#Stats1 [id$='_sparklinespan'] > div{max-width:100%!important;}

/* تفاعلات المقال — ثابتة بدون وميض ضوئي */
.ph-reactions-box{box-shadow:none!important;animation:none!important;}
.ph-reaction,.ph-reaction:hover,.ph-reaction.selected{box-shadow:none!important;}

/* مسافات المقال: لا نضغط النص على الشاشات الصغيرة */


/* ============================================================
   SAFE FIXES v4 — بدون حذف أقسام | صفحة واحدة | ألوان موحّدة
   ============================================================ */

/* إخفاء السايدبار فقط (القسم يبقى في التنسيق) */
#sidebar-container,
aside#sidebar-container {
  display: none !important;
  width: 0 !important;
  max-width: 0 !important;
  min-width: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  flex: 0 0 0 !important;
}

/* المحتوى بعرض كامل */
#feed-view {
  float: none !important;
  width: 100% !important;
  max-width: 100% !important;
  flex: 1 1 100% !important;
}
.outer-container,
#center-container > .container.outer-container {
  display: block !important;
  width: 100% !important;
  max-width: 1178px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
  box-sizing: border-box !important;
}
@media screen and (min-width: 881px) {
  .outer-container {
    display: block !important;
  }
  #feed-view {
    width: 100% !important;
    max-width: 100% !important;
    float: none !important;
  }
  #sidebar-container {
    display: none !important;
  }
}

/* الوضع الفاتح — خفيف وآمن */
html[data-theme="light"] body {
  background: #f5f0e6 !important;
  color: #1a120b !important;
}
html[data-theme="light"] .post-filter,
html[data-theme="light"] .blog-post,
html[data-theme="light"] .post-inner-area {
  background: #fff !important;
  color: #1a120b !important;
  border-color: rgba(184,134,11,.3) !important;
}
html[data-theme="light"] .post-filter .entry-title a,
html[data-theme="light"] .entry-title a {
  color: #1a120b !important;
}


/* ============================================================
   v5 FIXES — هيدر سطح المكتب | توحيد الموبايل | أزرق احترافي | ترقيم سريع
   ============================================================ */

/* ----- 2) هيدر سطح المكتب: لوجو وسط + قائمة يمين داخل بوردر واحد ----- */
@media screen and (min-width: 700px) {
}

/* موبايل: زر القائمة يظهر، الروابط منسدلة */
@media screen and (max-width: 699px) {
}

/* ----- 3) ترقيم الصفحات أسرع وأكثر سلاسة ----- */
.alf-dynamic-pager {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-wrap: wrap !important;
  gap: 6px !important;
  margin: 20px auto 16px !important;
  padding: 6px !important;
  transition: opacity .15s ease !important;
}
.alf-dynamic-pager a,
.alf-dynamic-pager span {
  min-width: 38px !important;
  height: 38px !important;
  border-radius: 10px !important;
  font-weight: 700 !important;
  transition: background .12s ease, color .12s ease, transform .12s ease !important;
  will-change: transform !important;
}
.alf-dynamic-pager a:active {
  transform: scale(0.92) !important;
}
.alf-dynamic-pager a:hover {
  background: #d4af37 !important;
  color: #111 !important;
}
html body .grid-posts {
  transition: opacity .12s ease !important;
}

/* ----- 5) الوضع «المظلم» = ثيم أزرق احترافي ----- */
html[data-theme="blue"] {
  --ph-bg: #0a1628;
  --ph-bg-2: #0c1a2e;
  --ph-surface: #12233a;
  --ph-card: #152a45;
  --ph-card-border: rgba(56, 189, 248, 0.35);
  --ph-gold: #38bdf8;
  --ph-gold-bright: #7dd3fc;
  --ph-text: #e2e8f0;
  --ph-text-muted: #94a3b8;
  --ph-header: #0a1628;
  --ph-header-border: rgba(56, 189, 248, 0.45);
}
html[data-theme="blue"] body,
html[data-theme="blue"] #outer-wrapper {
  background: #0c1a2e !important;
  color: #e2e8f0 !important;
}
html[data-theme="blue"] .post-filter,
html[data-theme="blue"] .blog-post,
html[data-theme="blue"] .post-inner-area {
  background: #152a45 !important;
  border-color: rgba(56, 189, 248, 0.3) !important;
  color: #e2e8f0 !important;
}
html[data-theme="blue"] .post-filter .entry-title a,
html[data-theme="blue"] .entry-title a {
  color: #e2e8f0 !important;
}
html[data-theme="blue"] .post-tag {
  background: linear-gradient(135deg, #0369a1, #0ea5e9) !important;
  color: #fff !important;
}
html[data-theme="blue"] .alf-dynamic-pager a,
html[data-theme="blue"] .alf-dynamic-pager span {
  border-color: #38bdf8 !important;
  background: #12233a !important;
  color: #e2e8f0 !important;
}
html[data-theme="blue"] .alf-dynamic-pager a:hover,
html[data-theme="blue"] .alf-dynamic-pager .current {
  background: #0ea5e9 !important;
  color: #0a1628 !important;
}
html[data-theme="blue"] body.item #outer-wrapper,
html[data-theme="blue"] body.item-view #outer-wrapper {
  background: #0c1a2e !important;
}
html[data-theme="blue"] body.item .post-inner-area,
html[data-theme="blue"] body.item-view .post-inner-area {
  background: #152a45 !important;
  color: #e2e8f0 !important;
  border-color: rgba(56, 189, 248, 0.3) !important;
}
html[data-theme="blue"] body.item .post-body,
html[data-theme="blue"] body.item .post-body p {
  color: #e2e8f0 !important;
}
html[data-theme="blue"] body.item h1.entry-title {
  color: #7dd3fc !important;
}
@media screen and (min-width: 700px) {
}
/* إخفاء سايدبار مع الإبقاء في التنسيق */
#sidebar-container { display: none !important; }
body#layout #sidebar-container,
body#layout #sidebar {
  display: block !important;
  width: 30% !important;
  max-width: 320px !important;
  height: auto !important;
  visibility: visible !important;
  overflow: visible !important;
}


/* ============================================================
   MODULE: ARTICLE UI — DESKTOP = MOBILE
   نفس التصميم في كل المقاسات؛ الهاتف يغيّر القياسات فقط.
   ============================================================ */
.article-head-frame{width:100%!important;max-width:100%!important;box-sizing:border-box!important;margin:0 0 18px!important;padding:0!important;border:0!important;background:transparent!important;}
.post-tools-bar{width:100%!important;box-sizing:border-box!important;display:flex!important;flex-direction:column!important;gap:9px!important;align-items:stretch!important;margin:0 0 18px!important;padding:10px!important;border:1px solid rgba(212,175,55,.38)!important;border-radius:12px!important;background:linear-gradient(145deg,#101720,#0b1016)!important;box-shadow:0 3px 14px rgba(0,0,0,.18)!important;direction:rtl!important;}
.post-tools-head{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:8px!important;flex-wrap:wrap!important;width:100%!important;}
.post-tools-bar .read-time,.post-tools-bar .post-views-badge{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;min-height:34px!important;padding:6px 10px!important;box-sizing:border-box!important;border:1px solid rgba(212,175,55,.38)!important;border-radius:9px!important;background:rgba(212,175,55,.10)!important;color:#f0d060!important;font-size:12px!important;font-weight:800!important;white-space:nowrap!important;}
.post-tools-actions{display:flex!important;align-items:stretch!important;justify-content:center!important;gap:7px!important;width:100%!important;flex-wrap:wrap!important;direction:rtl!important;}
.post-tools-actions>button{flex:1 1 150px!important;min-width:110px!important;height:38px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;padding:6px 10px!important;box-sizing:border-box!important;border:1px solid rgba(212,175,55,.38)!important;border-radius:9px!important;font:700 12px/1 inherit!important;cursor:pointer!important;transition:transform .18s ease,filter .18s ease!important;}
.post-tools-actions>button:hover{transform:translateY(-1px)!important;filter:brightness(1.07)!important;}
.post-tools-actions .reading-mode-btn{background:linear-gradient(135deg,#1769d1,#2563eb)!important;color:#fff!important;border-color:#5a9cff!important;}
.post-tools-actions #copy-post-link{background:linear-gradient(135deg,#6d28d9,#8b5cf6)!important;color:#fff!important;border-color:#b9a0ff!important;}
.post-tools-actions .save-post-btn,.post-tools-actions #save-later-btn{background:linear-gradient(135deg,#047857,#10b981)!important;color:#fff!important;border-color:#42e6ae!important;}
.post-tools-actions .save-post-btn.saved,.post-tools-actions #save-later-btn.saved{background:linear-gradient(135deg,#b8860b,#d4af37)!important;color:#1a120b!important;border-color:#f5d66b!important;}
.inline-share-bar{width:100%!important;box-sizing:border-box!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;flex-wrap:wrap!important;direction:rtl!important;margin:12px 0!important;padding:9px!important;border:1px solid rgba(212,175,55,.30)!important;border-radius:10px!important;background:linear-gradient(145deg,#f7f0e4,#fffaf0)!important;}
.inline-share-bar .isb-label{display:inline-flex!important;align-items:center!important;justify-content:center!important;color:#6b5318!important;font-size:11px!important;font-weight:900!important;padding:0 5px!important;}
.inline-share-bar a,.inline-share-bar button{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:5px!important;min-width:34px!important;height:34px!important;padding:5px 9px!important;box-sizing:border-box!important;border:1px solid rgba(212,175,55,.30)!important;border-radius:8px!important;cursor:pointer!important;font:700 10px/1 inherit!important;text-decoration:none!important;transition:transform .18s ease,filter .18s ease!important;}
.inline-share-bar a:hover,.inline-share-bar button:hover{transform:translateY(-1px)!important;filter:brightness(1.05)!important;}
html[data-theme="blue"] .post-tools-bar{background:#12233a!important;border-color:rgba(56,189,248,.35)!important;}
html[data-theme="blue"] .post-tools-bar .read-time,html[data-theme="blue"] .post-tools-bar .post-views-badge{background:#0f2744!important;color:#e2e8f0!important;border-color:rgba(56,189,248,.35)!important;}
html[data-theme="blue"] .inline-share-bar{background:#12233a!important;border-color:rgba(56,189,248,.35)!important;}
html[data-theme="blue"] .inline-share-bar .isb-label{color:#7dd3fc!important;}
@media screen and (max-width:520px){
 .post-tools-bar{padding:9px!important;}
 .post-tools-actions>button{flex:1 1 calc(33.333% - 5px)!important;min-width:0!important;height:36px!important;font-size:10.5px!important;padding:5px 6px!important;}
 .post-tools-actions>button i{font-size:11px!important;}
 .post-tools-bar .read-time,.post-tools-bar .post-views-badge{font-size:10.5px!important;padding:5px 8px!important;}
 .inline-share-bar a,.inline-share-bar button{height:33px!important;font-size:9.5px!important;padding:4px 7px!important;}
}
@media (prefers-reduced-motion:reduce){.post-tools-actions>button,.inline-share-bar a,.inline-share-bar button{transition:none!important}.post-tools-actions>button:hover,.inline-share-bar a:hover,.inline-share-bar button:hover{transform:none!important;}}

/* تفاعل المقال موحّد */
html body .ph-reactions-box button,
html body .ph-reaction {
  border-radius: 8px !important;
}


/* ===== بطاقة المؤلف — بوردر متحرك ===== */
@keyframes phAuthorBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}


/* ============================================================
 MODULE: FINAL UI CONSISTENCY 2026-09-16
 ============================================================ */
@media screen and (min-width:700px){
}
/* Article tools — identical visual language on desktop/mobile */
html body .post-tools-bar{width:100%!important;box-sizing:border-box!important;margin:14px 0 18px!important;padding:10px!important;border:1px solid rgba(212,175,55,.42)!important;border-radius:12px!important;background:linear-gradient(145deg,#10161d,#171d24)!important;box-shadow:0 4px 16px rgba(0,0,0,.14)!important;}
html body .post-tools-head{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:8px!important;flex-wrap:wrap!important;direction:rtl!important;margin:0 0 8px!important;}
html body .post-tools-bar .read-time,html body .post-tools-bar .post-views-badge{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:30px!important;padding:5px 9px!important;border:1px solid rgba(212,175,55,.35)!important;border-radius:8px!important;background:#1b2027!important;color:#e8dfc8!important;font-size:12px!important;line-height:1.2!important;white-space:nowrap!important;}
html body .post-tools-actions{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:7px!important;direction:rtl!important;width:100%!important;}
html body .post-tools-actions>button{width:100%!important;min-width:0!important;height:38px!important;margin:0!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;padding:6px 8px!important;border:1px solid rgba(212,175,55,.38)!important;border-radius:9px!important;font-size:12px!important;line-height:1.2!important;box-sizing:border-box!important;}
html body .post-tools-actions .reading-mode-btn{background:linear-gradient(135deg,#1769d1,#2563eb)!important;color:#fff!important;}html body .post-tools-actions #copy-post-link{background:linear-gradient(135deg,#7c2ee8,#8b3dff)!important;color:#fff!important;}html body .post-tools-actions .save-post-btn{background:linear-gradient(135deg,#00a874,#11c48a)!important;color:#fff!important;}
@media screen and (max-width:520px){html body .post-tools-bar{margin:12px 0 16px!important;padding:9px!important;}html body .post-tools-actions>button{height:36px!important;font-size:10.5px!important;}html body .post-tools-bar .read-time,html body .post-tools-bar .post-views-badge{font-size:10.5px!important;}}
/* Quick summary — auto height from actual content */
html body .key-takeaways{width:100%!important;max-width:100%!important;min-height:0!important;height:auto!important;max-height:none!important;box-sizing:border-box!important;overflow:visible!important;margin:14px 0 22px!important;padding:16px 18px!important;border:1px solid rgba(212,175,55,.42)!important;border-radius:14px!important;}
html body .key-takeaways ul,html body .key-takeaways li{height:auto!important;max-height:none!important;overflow:visible!important;}html body .key-takeaways li{white-space:normal!important;overflow-wrap:anywhere!important;}
/* Author card — replaces Blogger Profile on article pages */

html body .ph-article-author{position:relative!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important;margin:18px 0 24px!important;padding:20px 18px 18px!important;border-radius:16px!important;border:2px solid transparent!important;background:linear-gradient(#17110b,#251a0f),linear-gradient(120deg,#b8860b,#ffd700,#f0d060,#b8860b,#ffd700)!important;background-origin:border-box!important;background-clip:padding-box,border-box!important;background-size:100% 100%,300% 300%!important;animation:phAuthorBorder 7s linear infinite!important;box-shadow:0 8px 26px rgba(0,0,0,.16)!important;text-align:center!important;direction:rtl!important;}
html body .ph-article-author .ph-author-label{display:block!important;width:100%!important;text-align:right!important;color:#d4af37!important;font-size:13px!important;font-weight:800!important;margin:0 0 8px!important;}
html body .ph-article-author .ph-author-name{display:block!important;margin:0 0 8px!important;color:#f0d060!important;font-family:'Noto Kufi Arabic','Amiri',serif!important;font-size:22px!important;font-weight:900!important;letter-spacing:.5px!important;}
html body .ph-article-author .ph-author-quote{display:block!important;margin:0!important;color:#eee5d0!important;font-size:14px!important;line-height:1.9!important;}
@media screen and (max-width:520px){html body .ph-article-author{padding:18px 14px 16px!important;}html body .ph-article-author .ph-author-name{font-size:19px!important;}html body .ph-article-author .ph-author-quote{font-size:13px!important;}}
/* News + sports containers — proportional and content-driven */
html body .gt-sports-mega-container,html body .wn-universe-container{width:100%!important;max-width:1145px!important;box-sizing:border-box!important;margin-left:auto!important;margin-right:auto!important;}html body .gt-sports-mega-container{height:auto!important;max-height:none!important;overflow:hidden!important;}html body .gt-photo-stream-viewport,html body .gt-ticker-news-viewport{max-width:100%!important;box-sizing:border-box!important;}@media screen and (max-width:699px){html body .gt-sports-mega-container,html body .wn-universe-container{width:calc(100% - 18px)!important;max-width:100%!important;}html body .gt-photo-stream-viewport{max-height:180px!important;overflow:hidden!important;}}
/* Blue theme — readable global text */
html[data-theme="blue"] body,html[data-theme="blue"] #outer-wrapper,html[data-theme="blue"] #content-wrapper,html[data-theme="blue"] #main-wrapper,html[data-theme="blue"] #feed-view,html[data-theme="blue"] .post-body,html[data-theme="blue"] .entry-content,html[data-theme="blue"] .post-snippet,html[data-theme="blue"] p,html[data-theme="blue"] li,html[data-theme="blue"] label{color:#e2e8f0!important;}html[data-theme="blue"] a{color:#7dd3fc!important;}html[data-theme="blue"] .entry-title a,html[data-theme="blue"] h1,html[data-theme="blue"] h2,html[data-theme="blue"] h3,html[data-theme="blue"] h4,html[data-theme="blue"] h5,html[data-theme="blue"] h6{color:#f1f5f9!important;}html[data-theme="blue"] .ph-article-author{background-image:linear-gradient(#0f1d30,#152a45),linear-gradient(120deg,#38bdf8,#7dd3fc,#d4af37,#38bdf8)!important;}html[data-theme="blue"] .ph-article-author .ph-author-name{color:#7dd3fc!important;}html[data-theme="blue"] .ph-article-author .ph-author-label{color:#38bdf8!important;}html[data-theme="blue"] .key-takeaways{background:linear-gradient(145deg,#12233a,#152a45)!important;border-color:rgba(56,189,248,.4)!important;}
/* ============================================================
   MODULE: DESKTOP HEADER A — PRIMARY MENU
   القائمة الرئيسية لسطح المكتب داخل Desktop Header (A) فقط.
   ============================================================ */
@media screen and (min-width:700px){
}
@media screen and (max-width:699px){}

/* ============================================================
   MODULE: DESKTOP HEADER A — HORIZONTAL NAVIGATION
   اللوجو يمين، والأقسام كلها في صف أفقي، والمزيد فقط Dropdown.
   ============================================================ */
@media screen and (min-width:700px){
}
@media screen and (max-width:699px){}

/* ============================================================
   MODULE: BLUE THEME — HIGH CONTRAST TEXT
   ============================================================ */
html[data-theme="blue"] body,html[data-theme="blue"] body *{text-shadow:none!important;}
html[data-theme="blue"] body,html[data-theme="blue"] #outer-wrapper,html[data-theme="blue"] #content-wrapper,html[data-theme="blue"] #main-wrapper,html[data-theme="blue"] #feed-view,html[data-theme="blue"] .post-body,html[data-theme="blue"] .post-body p,html[data-theme="blue"] .post-body div,html[data-theme="blue"] .post-body li,html[data-theme="blue"] .post-body span,html[data-theme="blue"] .post-body td,html[data-theme="blue"] .post-body dd,html[data-theme="blue"] .post-body dt,html[data-theme="blue"] .entry-content,html[data-theme="blue"] .post-snippet,html[data-theme="blue"] .widget-content,html[data-theme="blue"] .widget-content p,html[data-theme="blue"] .widget-content li{color:#eef4fb!important;}
html[data-theme="blue"] a,html[data-theme="blue"] .post-body a,html[data-theme="blue"] .widget-content a{color:#7dd3fc!important;}
html[data-theme="blue"] h1,html[data-theme="blue"] h2,html[data-theme="blue"] h3,html[data-theme="blue"] h4,html[data-theme="blue"] h5,html[data-theme="blue"] h6,html[data-theme="blue"] .entry-title,html[data-theme="blue"] .entry-title a,html[data-theme="blue"] .post-title,html[data-theme="blue"] .post-title a{color:#ffffff!important;}
html[data-theme="blue"] .post-meta,html[data-theme="blue"] .post-snippet,html[data-theme="blue"] .post-snip,html[data-theme="blue"] .author-info,html[data-theme="blue"] small{color:#cbd5e1!important;}
html[data-theme="blue"] .post-tools-bar .read-time,html[data-theme="blue"] .post-tools-bar .post-views-badge{color:#f8fafc!important;background:#10243c!important;border-color:rgba(125,211,252,.45)!important;}
html[data-theme="blue"] .key-takeaways,html[data-theme="blue"] .quick-summary,html[data-theme="blue"] .summary-box,html[data-theme="blue"] .key-takeaways *{color:#eef4fb!important;}


/* ============================================================
   FINAL DESKTOP HEADER A — LOGO ABOVE / NAV BELOW
   v7.5 — هذا القسم يعزل هيدر سطح المكتب عن هيدر الهاتف.
   الشكل المطلوب:
   الشعار أعلى اليمين
   ثم صف أفقي: الرئيسية ← أخبار ← رياضة ← سينما ومسرح ←
   أدب ← صحة ← تكنولوجيا ← علوم ← المزيد ▼
   ============================================================ */
@media screen and (min-width: 992px){

  /* Desktop spacing for the page below the two-row Header A */
  html body{padding-top:0!important;}
}

/* Mobile keeps its own Header B; Desktop Header A is completely hidden. */
@media screen and (max-width:991px){
}


/* Legacy menu remnants neutralized (Pharaoh #alfHeader is the only menu) */
.Super-Menu,.Super-Menu-logo,.show-menu-space,#menu-space,.Super-FlexMenu,#Super-FlexMenu,
#xvx-rox1,.LSpeed-filter-logo,#top-menu .selectnav{display:none!important;height:0!important;overflow:hidden!important;visibility:hidden!important}


/* xvx-rox legacy neutralized — logo/nav live in #alfHeader */
.xvx-rox,#xvx-rox1,.xvx-rox h1,.xvx-rox .social,.xvx-rox img{display:none!important;height:0!important;overflow:hidden!important;margin:0!important;padding:0!important}
#top-menu .selectnav,.LSpeed-filter-logo{display:none!important}

/* ===== PHASE CLEANUP: full-width + single menu (#alfHeader) + Termly + single scroll-top widget ===== */

/* full-width container assist */
.container,.raw-box.container{
  width:100%;
  max-width:1145px;
  margin-left:auto;
  margin-right:auto;
  box-sizing:border-box;
}
@media (max-width:1180px){
  .container,.raw-box.container{max-width:100%;padding-left:12px;padding-right:12px}
}

/* ===== AdSense safety (policy-friendly spacing) ===== */
.adsbygoogle{
  display:block !important;
  margin:16px auto !important;
  max-width:100% !important;
  clear:both !important;
}
/* keep scroll-to-top clear of sticky bottom ads on mobile */
#scroll-to-top{z-index:9000;}

/* =========================================================
   FIX 2026-09-16: search hide + post text contrast + size scale
   ========================================================= */

/* 1) البحث مخفي إلا عند الضغط */
#search-flex{
  display:none !important;
  position:fixed !important;
  inset:0 !important;
  z-index:10050 !important;
  width:100% !important;
  height:100% !important;
  background:rgba(5,8,12,.88) !important;
  padding:70px 14px 20px !important;
  box-sizing:border-box !important;
  align-items:flex-start !important;
  justify-content:center !important;
}
#search-flex.is-open,
#search-flex[style*="display: flex"],
#search-flex[style*="display:flex"]{
  display:flex !important;
}
#search-flex .search-flex-container{
  width:100%;
  max-width:520px;
  height:auto !important;
  min-height:48px;
  margin:0 auto;
  float:none !important;
  background:#121820 !important;
  border:1px solid rgba(212,175,55,.45);
  border-radius:12px;
  padding:10px 12px;
  box-shadow:0 12px 40px rgba(0,0,0,.45);
}
#search-flex .search-form{
  background:rgba(139,139,139,.12) !important;
  border-radius:8px !important;
  height:42px !important;
}
#search-flex .search-input,
#search-flex input.search-input,
#search-flex input.search-input[type=text],
#search-flex input.search-input[type=search]{
  width:100% !important;
  height:42px !important;
  font-size:15px !important;
  color:#f2f5f9 !important;
  padding:0 12px !important;
  background:transparent !important;
}
#search-flex .search-flex-close{
  width:42px !important;
  height:42px !important;
  border-radius:8px !important;
  color:#f2f5f9 !important;
}

/* 2) نص المقال واضح — تناسق ألوان الثيم الداكن */
html[data-theme="dark"] .item-post .post-body,
html:not([data-theme="blue"]) .item-post .post-body,
html[data-theme="dark"] .post-body,
html:not([data-theme="blue"]) .post-body{
  color:#f0f3f7 !important;
  background:transparent !important;
}
html[data-theme="dark"] .post-body p,
html[data-theme="dark"] .post-body span,
html[data-theme="dark"] .post-body div,
html[data-theme="dark"] .post-body li,
html[data-theme="dark"] .post-body td,
html:not([data-theme="blue"]) .post-body p,
html:not([data-theme="blue"]) .post-body span,
html:not([data-theme="blue"]) .post-body div,
html:not([data-theme="blue"]) .post-body li{
  color:#f0f3f7 !important;
}
html[data-theme="dark"] .post-body h1,
html[data-theme="dark"] .post-body h2,
html[data-theme="dark"] .post-body h3,
html[data-theme="dark"] .post-body h4,
html:not([data-theme="blue"]) .post-body h1,
html:not([data-theme="blue"]) .post-body h2,
html:not([data-theme="blue"]) .post-body h3{
  color:#e0c15a !important;
  background:transparent !important;
}
html[data-theme="dark"] .post-body a,
html:not([data-theme="blue"]) .post-body a{
  color:#d4af37 !important;
}

/* صناديق فاتحة داخل المقال (محتوى قديم) → خلفية داكنة ونص واضح */
html[data-theme="dark"] .post-body [style*="background:#fff"],
html[data-theme="dark"] .post-body [style*="background: #fff"],
html[data-theme="dark"] .post-body [style*="background:#ffffff"],
html[data-theme="dark"] .post-body [style*="background:white"],
html[data-theme="dark"] .post-body [style*="background-color:#fff"],
html[data-theme="dark"] .post-body [style*="background-color: #fff"],
html[data-theme="dark"] .post-body [style*="background:#fef"],
html[data-theme="dark"] .post-body [style*="background:#fffef"],
html[data-theme="dark"] .post-body [style*="background:#fff8"],
html[data-theme="dark"] .post-body [style*="background:#fffef5"],
html[data-theme="dark"] .post-body [style*="background:#f5"],
html[data-theme="dark"] .post-body [style*="background:#faf"],
html[data-theme="dark"] .post-body [style*="background:#fc"],
html:not([data-theme="blue"]) .post-body [style*="background:#fff"],
html:not([data-theme="blue"]) .post-body [style*="background: #fff"],
html:not([data-theme="blue"]) .post-body [style*="background:#ffffff"],
html:not([data-theme="blue"]) .post-body [style*="background:white"],
html:not([data-theme="blue"]) .post-body [style*="background-color:#fff"],
html:not([data-theme="blue"]) .post-body [style*="background-color: #fff"]{
  background:#1a222d !important;
  color:#f0f3f7 !important;
  border-color:rgba(212,175,55,.35) !important;
}
html[data-theme="dark"] .post-body [style*="color:#fff"],
html[data-theme="dark"] .post-body [style*="color: #fff"],
html[data-theme="dark"] .post-body [style*="color:white"],
html[data-theme="dark"] .post-body [style*="color:#eee"],
html[data-theme="dark"] .post-body [style*="color:#f5f"],
html:not([data-theme="blue"]) .post-body [style*="color:#fff"],
html:not([data-theme="blue"]) .post-body [style*="color: #fff"]{
  color:#f0f3f7 !important;
}
/* صناديق cream شائعة في المقالات */
html[data-theme="dark"] .post-body div[style*="background"],
html:not([data-theme="blue"]) .post-body div[style*="background"]{
  background-color:#1c2430 !important;
  color:#f0f3f7 !important;
}
html[data-theme="dark"] .post-body blockquote,
html:not([data-theme="blue"]) .post-body blockquote{
  background:#1c2430 !important;
  color:#f0f3f7 !important;
  border-right:3px solid #d4af37;
}

/* blue theme readable too */
html[data-theme="blue"] .post-body,
html[data-theme="blue"] .post-body p,
html[data-theme="blue"] .post-body span,
html[data-theme="blue"] .post-body div,
html[data-theme="blue"] .post-body li{
  color:#eef6ff !important;
}
html[data-theme="blue"] .post-body h2,
html[data-theme="blue"] .post-body h3{color:#7dd3fc !important}

/* 3) مقياس أحجام موحّد */
:root{
  --ph-fs-sm:13px;
  --ph-fs:15px;
  --ph-fs-md:16px;
  --ph-fs-lg:18px;
  --ph-pad:14px;
  --ph-btn:42px;
}
.item-post .post-body{font-size:var(--ph-fs-md)!important;line-height:1.85!important}
.item-post h1.entry-title{font-size:clamp(20px,4.5vw,26px)!important;line-height:1.4!important}
.ph-article-tools .ph-tool-btn,
.ph-tools-actions .ph-tool-btn{min-height:var(--ph-btn);font-size:var(--ph-fs-sm)}
.key-takeaways,.ph-article-author,.ph-reactions-box,.inline-share-bar{
  font-size:var(--ph-fs);
}
.key-takeaways a{font-size:var(--ph-fs-sm)!important;line-height:1.5}
@media(max-width:699px){
  .item-post .post-body{font-size:var(--ph-fs)!important;padding:12px 10px!important}
  .item-post h1.entry-title{font-size:clamp(18px,5vw,22px)!important}
  .key-takeaways,.ph-article-author{padding:12px!important}
}

/* تحسين تباين بطاقة المؤلف والملخص */
.ph-article-author{color:#f0f3f7}
.ph-author-name{color:#d4af37!important}
.ph-author-quote{color:#c5ced8!important}
.key-takeaways .kt-title{color:#d4af37!important}
.key-takeaways a{color:#eef2f7!important}


/* IMAGE QUALITY OPTIMIZATION MODULE */
.snip-thumbnail{
  image-rendering:auto;
  object-position:center center;
}
.post-filter-image,.post-filter-link{
  overflow:hidden;
}
img.snip-thumbnail{
  max-width:100%;
  height:auto;
}
]]></b:skin>
</b:if>
<b:if cond='data:view.isLayoutMode'>
<b:template-skin>
<![CDATA[
html,body#layout #outer-wrapper,body#layout .outer-container{width:auto;padding:0;}
body#layout{position:relative;width:auto;max-width:100%;background:#ffffff;padding:95px 5px 0;margin:1px;border:1px solid #def2ff;}
body#layout:before{content:"الفيلسوف";font-family:Arial;position:absolute;top:20px;right:20px;z-index:1;padding:6px 14px;font-size:17px;border-radius:2px;font-weight:bold;color:#636363;background:#fdfdfd;border:1px solid #cac9c9 !important;}
body#layout div.section{display:block;background-color:#f3f3f3!important;margin:0 5px 10px!important;padding:16px 16px 18px!important;border-color:#009bde;border:0;}
body#layout .section h4{font-size:14px;margin:0;!important;}
body#layout .section h4:after{text-transform:initial;color:#6b6b6b;font-weight:400}
body#layout .section h4,body#layout div.layout-title{display:-webkit-box}
body#layout .widget-content{width:auto;max-width:none;max-height:none;margin:0;border:1px solid #3363ff;}
body#layout .widget .widget-content a.editlink{border-radius:2px}
body#layout .visibility .editlink{background:#3363ff url(https://1.bp.blogspot.com/-yggSg-F-GrY/YJbChcKAXNI/AAAAAAAABmk/hn1KE7b_qtEeu4EYEDnejdq17f0xZjz4QCLcBGAsYHQ/s20/edit-icon-iki.png) no-repeat center !important;}
body#layout .visibility .editlink:hover{background-color:#029000 !important}
body#layout .draggable-widget .widget-wrap2{background:#3363ff url(https://1.bp.blogspot.com/-hMi3I2lPKLQ/XcVHiWtl6GI/AAAAAAAAAPQ/M2XKqrvMItIH7dQdiEyH9cQ35lvkW36FgCNcBGAsYHQ/s1600/drag_gadgets_pikitemplates.png) no-repeat 4px 50%!important}
body#layout .draggable-widget .widget-wrap1 .widget-wrap2{background-color:#3363ff!important}
body#layout .visibility .layout-widget-state.visible{background-image:url(https://1.bp.blogspot.com/-uYbp0hXEKwo/XcVGwr7W7-I/AAAAAAAAAPI/lihmCldvuy0c0J54DHpqaZnQ9sZ-qv4zgCNcBGAsYHQ/s1600/Eye_Focus_by_pikitemplates.png)!important}
body#layout .visibility .layout-widget-state.not-visible{background-image:url(https://1.bp.blogspot.com/-zsoXuAqK0Rs/YSrwXcPcFOI/AAAAAAAACHU/kJA24Ue423YlPX2svO7hSJEGNMcdcn-eACLcBGAsYHQ/s48/hidden.png)!important;background-size:24px!important;background-repeat:no-repeat;opacity:1;}
body#layout .add_widget a{display:flex;color:#4385f5!important;!important;}
body#layout .layout-widget-description{display:none}
body#layout #custom-ads-placeholder{display:flex!important}
body#layout #custom-ads-placeholder .section{width:49%}
body#layout .row{display:flex}
body#layout .show-menu-space,body#layout .search-toggle,body#layout #nav-search{display:none}
body#layout .header-left{display:flex;}
/* body#layout old menu width hint removed */
body#layout #mega-wrap .widget, .rtl body#layout .add_widget a{display:block}
body#layout .search-toggle,body#layout .section-sticky{display:none}
body#layout #mega-wrap .widget{display:block}
body#layout #center-container{margin:0}
body#layout #center-container>.container{display:flex;margin:auto}
body#layout #feed-view{width:68.66%;padding:0}
body#layout #sidebar-container{width:33.33%;padding:0;display:block}
body#layout .sidebar .widget,body#layout .sidebar .widget-content{float:none;overflow:visible}
body#layout .fl-footer, body#layout .footer-outer{display:flex;}
body#layout .cvcx-Fcxv, body#layout div#xvxc-ccvb-mbcv,body#layout div#footer-copyright{overflow:hidden!important;width:100%}
body#layout .xxex-xcc3{overflow:hidden !important;}
body#layout .xxex-xcc3 div.widget{float:left !important;width:49% !important;}
body#layout div#LinkList7{margin-left:1% !important;}
body#layout .section > h4:after{font-size:12px;font-size:12px;font-weight:400;}
/* xvx-rox desktop logo hint removed — logo is in #alfHeader */
/* xvx-rox1 mobile logo hint removed */
/* Super-FlexMenu layout hint removed — use #alfHeader */
body#layout #hot-posts > h4:after{content:' - Trending/Popular Section'}
body#layout #room-box > h4:after{content:' - Main Featured Posts Section(A)'}
body#layout #room-box1 > h4:after{content:' - Bottom Featured Posts Section(A)'}
body#layout #room-box2 > h4:after{content:' - Bottom Featured Posts Section(B)'}
body#layout #ft-post > h4:after{content:' - Feature and Popular Posts both Gadgets'}
body#layout #main-ads1 > h4:after{content:' - Ads Section place ad code here'}
body#layout #room-box0 > h4:after{content:' - Featured Post Section'}
body#layout #main > h4:after{content:' - Recent Posts,Comments,no. of Posts etc.'}
body#layout #upper-ad > h4:after{content:' - Post Inside top ads section (responsive)'}
body#layout #lower-ad > h4:after{content:' - Post Inside botttom ads section (responsive)'}
body#layout #main-ads-below > h4:after{content:' - Below recent Posts ads section (responsive)'}
body#layout #main-ads2 > h4:after{content:' - Bottom Footer Ads Section (responsive)'}
body#layout #cvcx-Fcxv3 > h4:after{content:' - Change footer logo and caption'}
body#layout .cvcx-Fcxv > h4:after{content:' - Use this Section for footer widgets '}
body#layout #xvxc-ccvb-mbcv > h4:after{content:' - Footer Pages Links'}
body#layout #footer-copyright > h4:after{content:' - Footer Copyright Link'}
body#layout #sidebar > h4:after{content:' - Sidebar widgets'}
/* cookies layout hint removed — Termly CMP */

]]></b:template-skin>
</b:if>
<!-- Global Variables -->
<script defer='defer' type='text/javascript'>
//<![CDATA[
// Global variables with content. "Available for Edit"
noThumb = "",
relatedPostsNum = 3,
postPerPage= 7,
pageOfText = ["Page", "of"],
fixedSidebar = true;
//]]>
</script>
<b:defaultmarkups>
<b:defaultmarkup type='Common'>
    <b:includable id='widget-title'>
      <b:if cond='data:defaultTitle or data:title'>
        <b:if cond='data:widget.sectionId not in [&quot;ft-post&quot;, &quot;main-ads-below&quot;, &quot;main-ads2&quot;]'>
          <div class='widget-title'><h3 class='title'><data:title/></h3></div>
        </b:if>
      </b:if>
    </b:includable>
    <b:includable id='translate'>
      <b:switch var='data:blog.locale.language'>
        <b:case value='en'/>
        <b:include name='customLang'/>
        <b:default/>
        <b:include name='customLang'/>
      </b:switch>
    </b:includable>
    <b:includable id='theme-js'>
    <b:tag name='script' type='text/javascript'>var pikiMessages ={showMore:&quot;<data:messages.showMore/>&quot;,noTitle:&quot;<data:messages.noTitle/>&quot;,noResults:&quot;<data:messages.noResultsFound/>&quot;,}</b:tag>
  </b:includable>
    <b:includable id='customLang'>
      <b:switch var='data:message'>
        <b:case value='relatedPostsText'/>
        <b:if cond='data:blog.locale.language == &quot;en&quot;'>
          <data:messages.youMayLikeThesePosts/>
        </b:if>
        <b:case value='loadMorePosts'/>
        <b:if cond='data:blog.locale.language == &quot;en&quot;'>Load More
          <b:else/>
          <data:messages.loadMorePosts/>
        </b:if>
      </b:switch>
    </b:includable>
    <b:includable id='textlist-content'>
        <b:if cond='data:widget.sectionId == &quot;admin&quot;'>
            <b:loop values='data:items' var='item'>
              <script async='async' crossorigin='anonymous' defer='defer' expr:src='data:item'/>
            </b:loop>
            <b:else/>
            <div class='widget-content'>
            <ul><b:loop values='data:items' var='item'><li><data:item/></li></b:loop></ul>
            </div>
        </b:if>
    </b:includable>
  <b:includable id='popular-content'>
        <div>
            <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
           <b:class name='tickerNews'/>
              <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
                <b:class name='featured-box'/><b:else/>
                <b:class name='popular-post post'/>
            </b:if>
            <b:class expr:name='&quot;item&quot;+data:i'/>
            <b:if cond='data:widget.sectionId in [&quot;ft-post&quot;]'>
                <b:tag class='post-filter-inner gaint' cond='data:i == 0 and (data:widget.sectionId == &quot;ft-post&quot;)' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle' name='a'>
                 <b:tag class='post-filter-inner' cond='data:widget.sectionId != &quot;ft-post&quot; or (data:i != 0 and (data:widget.sectionId == &quot;ft-post&quot;))' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle' name='a'>
                    <b:tag expr:class='data:i == 0 and (data:widget.sectionId == &quot;ft-post&quot;) ? &quot;post-filter-link background-layer&quot; : &quot;post-filter-link&quot;' name='span'>
                        <b:if cond='data:post.featuredImage'><img class='snip-thumbnail lazy-img' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:data-src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' height='225' loading='lazy' width='400'/>
                            <b:else/>
                            <img class='snip-thumbnail lazy-img' data-src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' loading='lazy' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
                        </b:if>
                        <b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
                    </b:tag>
                    </b:tag>
                  <b:tag expr:class='data:i == 0 and (data:widget.sectionId == &quot;ft-post&quot;) ? &quot;entery-category-fly&quot; : &quot;entery-category&quot;' name='div'>
                        <span class='post-tag'><data:post.labels.first.name/></span>
                        <h2 class='entry-title vcard'><b:tag cond='data:widget.sectionId != &quot;ft-post&quot; or (data:i != 0 and (data:widget.sectionId == &quot;ft-post&quot;))' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle' name='a'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></b:tag></h2>
                        <div class='post-snip'>
                            
                            <span class='post-date' expr:datetime='data:post.date.iso8601'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span>
                        </div>
                  </b:tag>
                  </b:tag>
            </b:if>
            <b:if cond='data:widget.sectionId in [&quot;sidebar&quot;]'>
            <b:tag class='post-filter-inner' expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle' name='a'>
                  <b:if cond='data:post.featuredImage'>
                      <img class='snip-thumbnail lazy-img' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:data-src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' height='225' loading='lazy' width='400'/>
                      <b:else/><img class='snip-thumbnail lazy-img' data-src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' loading='lazy' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
                  </b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
            </b:tag>
            <b:tag class='entery-category-box' name='div'>
              <span class='post-tag'><data:post.labels.first.name/></span>
              <h2 class='entry-title vcard'><b:tag expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle' name='a'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></b:tag></h2>
              <div class='post-snip'>
                 <span class='post-date'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span>
              </div>
            </b:tag>
            </b:if>
            <b:if cond='data:widget.sectionId not in [&quot;ft-post&quot;,&quot;sidebar&quot;]'>
            <h2 class='entry-title vcard'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
            <b:if cond='data:widget.sectionId not in [&quot;hot-posts&quot;]'>
            <span class='post-date'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span>
            </b:if>
            </b:if>
        </div>
    </b:includable>
<b:includable id='share-box'>
    <div class='StickyBox'>
        <div class='StickyDemo'>
            <div class='StickyTab'>
                <div class='StickyType'><data:messages.shareToOtherApps/></div>
                <label class='close-check'><i class='far fa-window-close'/></label>
            </div>
            <div class='share-wrapper-icons colorful colorful-ico'>
            <li class='facebook-f'><a class='facebook window-piki' data-height='650' data-width='550' expr:data-url='&quot;https://www.facebook.com/sharer.php?u=&quot; + data:view.url.canonical' href='javascript:;' rel='nofollow' title='Facebook'>فيسبوك</a></li>
            <li class='twitter'><a class='twitter window-piki' data-height='460' data-width='550' expr:data-url='&quot;https://twitter.com/intent/tweet?url=&quot; + data:view.url.canonical + &quot;&amp;text=&quot; + data:view.title.jsEscaped' href='javascript:;' rel='nofollow' title='Twitter'>تويتر</a></li>
            <li class='whatsapp'><a class='whatsapp window-piki' data-height='650' data-width='550' expr:data-url='&quot;https://api.whatsapp.com/send?text=&quot; + data:view.title.jsEscaped + &quot; | &quot; + data:post.url' href='javascript:;' rel='nofollow' target='_blank' title='Whatsapp'>واتساب</a></li>
            <li class='telegram'><a class='telegram window-piki' data-height='460' data-width='550' expr:data-url='&quot;https://telegram.me/share/url?url=&quot; + data:view.url.canonical + &quot;&amp;text=&quot; + data:view.title.jsEscaped' href='javascript:;' rel='nofollow' title='Telegram'>تيليجرام</a></li>
            <li class='pinterest'><a class='pinterest window-piki' data-height='750' data-width='735' expr:data-url='&quot;https://www.pinterest.com/pin/create/button/?url=&quot; + data:view.url.canonical + &quot;&amp;media=&quot; + data:post.featuredImage + &quot;&amp;description=&quot; + data:view.title.jsEscaped' href='javascript:;' rel='nofollow' title='Pinterest'>بنترست</a></li>
            <li class='linkedin'><a class='linkedin window-piki' data-height='700' data-width='1000' expr:data-url='&quot;https://www.linkedin.com/shareArticle?url=&quot; + data:view.url.canonical' href='javascript:;' rel='nofollow' title='LinkedIn'>LinkedIn</a></li>
            <li class='reddit'><a class='reddit window-piki' data-height='460' data-width='550' expr:data-url='&quot;https://reddit.com/submit?url=&quot; + data:view.url.canonical + &quot;&amp;title=&quot; + data:view.title.jsEscaped' href='javascript:;' rel='nofollow' title='Reddit'>رديت</a></li>
            <li class='tumblr'><a class='tumblr window-piki' data-height='460' data-width='550' expr:data-url='&quot;https://www.tumblr.com/share/link?url=&quot; + data:view.url.canonical + &quot;&amp;title=&quot; + data:view.title.jsEscaped' href='javascript:;' rel='nofollow' title='Tumblr'>تمبلر</a></li>
            </div>
            <div class='copy-section'>
                <span class='title'>نسخ رابط المقال</span>
                <div class='copy-post'>
                    <input expr:value='data:blog.url.canonical' id='showlink' readonly='readonly'/><button aria-label='Copy'>نسخ</button>
                    <div class='messageDone' id='messageDone'/>
                </div>
            </div>
        </div>
    </div>
</b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Blog'>
  <b:includable id='main' var='this'>
    <b:include name='searchMessage'/>
    <div class='blog-posts hfeed container'>
      <b:class cond='data:view.isMultipleItems' name='post-filter-wrap'/>
      <b:class cond='data:view.isSingleItem' name='item-post-wrap'/>
      <b:if cond='data:view.isHomepage'>
        <div class='widget-title'>
          <h3 class='title'><span><data:blog.jumpLinkMessage/></span></h3><a class='simple-viewmore' href='https://alfaylasooof.blogspot.com/'>عرض المزيد</a></div>
      </b:if>
      <b:if cond='data:view.isMultipleItems and data:posts.empty'>
      <div class='queryEmpty'><data:messages.noResultsFound/></div>
      </b:if>
      <b:tag class='grid-posts' cond='data:view.isMultipleItems' name='div'>
        <b:loop index='i' values='data:posts' var='post'><b:include data='post' name='postCommentsAndAd'/></b:loop>
      </b:tag>
              <nav aria-label='ترقيم المقالات' class='alf-dynamic-pager' dir='ltr' id='alf-dynamic-pager-1'/>
    </div>
    <b:include name='feedLinks'/>
  </b:includable>
  
  <b:includable id='addComments'>
  <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'><b:message name='messages.postAComment'/></a>
  </b:includable>
  <b:includable id='backLinks' var='post'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='blogThisShare'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='bylineByName' var='byline'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='bylineRegion' var='regionItems'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='commentAuthorAvatar'>
  <div class='avatar-image-container'><img class='author-avatar' decoding='async' expr:src='data:comment.authorAvatarSrc' height='45' loading='lazy' width='45'/></div>
  </b:includable>
  <b:includable id='commentDeleteIcon' var='comment'>
    <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
      <b:if cond='data:showCmtPopup'>
        <div class='goog-toggle-button'>
          <div class='goog-inline-block comment-action-icon'/>
        </div>
        <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'><img decoding='async' loading='lazy' src='https://resources.blogblog.com/img/icon_delete13.gif'/></a>
      </b:if>
    </span>
  </b:includable>
  <b:includable id='commentForm' var='post'>
    <div class='comment-form'>
      <a name='comment-form'/>
      <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
      <p><data:this.messages.blogComment/></p>
      </b:if>
      <b:include data='post' name='commentFormIframeSrc'/>
      <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='90px' id='comment-editor' name='comment-editor' src='' width='100%'/>
      <data:post.cmtfpIframe/>
      <script type='text/javascript'> BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
      </script>
    </div>
  </b:includable>
  <b:includable id='commentFormIframeSrc' var='post'>
    <a expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=soho&quot;' id='comment-editor-src'/>
  </b:includable>
  <b:includable id='commentItem' var='comment'>
    <div class='comment' expr:id='&quot;c&quot; + data:comment.id'>
      <b:include cond='data:blog.enabledCommentProfileImages' name='commentAuthorAvatar'/>
      <div class='comment-block'>
        <div class='comment-author'>
          <b:if cond='data:comment.authorUrl'>
            <b:message name='messages.authorSaidWithLink'>
              <b:param expr:value='data:comment.author' name='authorName'/>
              <b:param expr:value='data:comment.authorUrl' name='authorUrl'/>
            </b:message>
            <b:else/>
            <b:message name='messages.authorSaid'>
              <b:param expr:value='data:comment.author' name='authorName'/>
            </b:message>
          </b:if>
        </div>
        <div expr:class='&quot;comment-body&quot; + (data:comment.isDeleted ? &quot; deleted&quot; : &quot;&quot;)'><data:comment.body/></div>
        <div class='comment-footer'>
      <span class='comment-timestamp'><a expr:href='data:comment.url' title='comment permalink'><data:comment.timestamp/></a><b:include data='comment' name='commentDeleteIcon'/></span>
        </div>
      </div>
    </div>
  </b:includable>
  <b:includable id='commentList' var='comments'>
  <div id='comments-block'><b:loop values='data:comments' var='comment'><b:include data='comment' name='commentItem'/></b:loop></div>
  </b:includable>
  <b:includable id='commentPicker' var='post'>
    <b:if cond='data:post.allowComments'>
    <!-- Post Commments Title -->
      <div class='title-wrap comments-title'>
      <h3><data:messages.postAComment/></h3>
      <a class='all-comments'><data:post.numberOfComments/> <data:messages.comments/></a>
      </div>
    </b:if>
    <div class='comments-msg-alert'>* Please Don&#39;t Spam Here. All the Comments are Reviewed by Admin.</div>
    <b:if cond='data:view.isSingleItem and data:post.allowComments'>
      <b:include data='post' name='comments'/>
    </b:if>
  </b:includable>
  <b:includable id='comments' var='post'>
    <section class='comments threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
      <b:class cond='data:post.numberOfComments != 0' name='has-comments'/>
      <b:class cond='data:post.numberOfComments == 0' name='no-comments'/>
      <a name='comments'/>
      <b:if cond='data:post.embedCommentForm'>
        <b:include name='commentsTitle'/>
        <b:if cond='data:post.numberOfComments != 0'>
          <div class='comments-content'>
          <div id='comment-holder'><data:post.commentHtml/></div>
          </div>
        </b:if>
        <b:if cond='data:post.allowNewComments'>
          <b:include data='post' name='commentForm'/>
        </b:if>
      <b:if cond='data:post.allowNewComments'><a class='btn' href='javascript:;' id='show-comment-form'><data:messages.postAComment/><b:if cond='data:post.numberOfComments == 0'> (<data:post.numberOfComments/>)</b:if></a></b:if>
        <b:if cond='!data:post.allowNewComments'>
          <b:if cond='data:post.noNewCommentsText and (data:post.numberOfComments != 0)'>
          <p class='comments-message no-new-comments'><data:post.noNewCommentsText/><em>*</em></p>
          </b:if>
        </b:if>
        <b:else/>
        <p class='comments-message'>Please Select Embedded Mode To show the Comment System.<em>*</em></p>
      </b:if>
    </section>
  </b:includable>
  <b:includable id='commentsLink'>
    <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
      <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'><b:param expr:value='data:post.numberOfComments' name='numComments'/></b:message>
      <b:else/><data:messages.postAComment/></b:if>
    </a>
  </b:includable>
  <b:includable id='commentsLinkIframe'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numberOfComments' expr:data-onclick='data:post.commentsUrlOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'> </span>
  </b:includable>
  <b:includable id='commentsTitle'>
    <!-- Comments Title -->
    <b:if cond='data:post.allowNewComments'>
    <b:if cond='data:this.messages.blogComment'><p class='comments-message'><data:this.messages.blogComment/></p></b:if>
      <b:else/>
      <b:if cond='data:post.noNewCommentsText and (data:post.numberOfComments == 0)'>
        <p class='comments-message no-new-comments'><data:post.noNewCommentsText/><em>*</em></p>
      </b:if>
    </b:if>
  </b:includable>
  <b:includable id='defaultAdUnit'>
    <!-- ADSENSE: default fluid unit &#8212; rendered only where Blogger injects post ads -->
    <ins class='adsbygoogle' data-ad-format='fluid' data-ad-layout-key='-6t+ed+2i-1n-4w' data-full-width-responsive='false' expr:data-ad-client='data:adClientId ?: data:blog.adsenseClientId' expr:data-ad-host='data:blog.adsenseHostId' expr:data-analytics-uacct='data:blog.analyticsAccountNumber' expr:style='data:style ?: &quot;display: block;margin: auto&quot;' style='display:block;margin:auto;'/>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </b:includable>
  <b:includable id='emailPostIcon'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='facebookShare'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='feedLinks'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='feedLinksBody' var='links'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='footerBylines' var='post'>
    <!-- Post Footer Extras -->
    <b:include data='post' name='postLabels'/>
    <b:include data='post' name='postNavigation'/>
  </b:includable>
  <b:includable id='googlePlusShare'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='headerByline' var='post'>
    <!-- Post Header Meta: Blogger profile name/photo removed; timestamp retained. -->
    <div class='post-snip'><b:include data='post' name='postTimestamp'/></div>
  </b:includable>
  <b:includable id='homePageLink'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='iframeComments' var='post'><b:comment>Replaced</b:comment></b:includable>
  <b:includable id='indexPost' var='post'>
      <!-- Index Post Content -->
      <b:include data='post' name='postFeaturedImage'/>
  </b:includable>
  <b:includable id='inlineAd' var='post'>
    <b:if cond='!data:view.isPreview'>
      <b:if cond='data:i != 0'>
        <b:if cond='data:post.includeAd and data:post.adNumber'>
          <b:if cond='data:this.adCode or data:this.adClientId or data:blog.adsenseClientId'>
            <div expr:class='&quot;index-post post-ad-type post-ad-&quot; + data:i'>
            <div class='inline-ad-wrap'><div class='inline-ad'><b:if cond='data:this.adCode != &quot;&quot;'><data:this.adCode/><b:else/><b:if cond='data:this.adClientId or data:blog.adsenseClientId'><b:include name='defaultAdUnit'/></b:if></b:if></div></div>
            </div>
          </b:if>
        </b:if>
      </b:if>
    </b:if>
  </b:includable>
  <b:includable id='itemPost' var='post'>
    <!-- Item Post Content -->
    <div class='post-inner-area'>
      <b:include data='post' name='postMeta'/>
      <b:include data='post' name='postHeader'/>
      <b:include data='post' name='postBody'/>
      <b:include cond='data:view.isPost' data='post' name='footerBylines'/>
    </div>
    <b:include cond='data:view.isPost' data='post' name='postFooter'/>
  </b:includable>
  <b:includable id='linkShare'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='manageComments'>
  <a expr:href='data:post.manageCommentsUrl' expr:onclick='data:post.manageCommentsUrlOnclick'><b:message name='messages.manageComments'/></a>
  </b:includable>
  <b:includable id='nextPageLink'>
  <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:messages.olderPosts'><data:messages.olderPosts/></a>
  </b:includable>
  <b:includable id='otherSharingButton'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='platformShare'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='post' var='post'>
    <!-- Post Index -->
    <b:if cond='data:view.isMultipleItems'><b:include data='post' name='indexPost'/></b:if>
    <!-- Post Item -->
    <b:if cond='data:view.isSingleItem'><b:include data='post' name='itemPost'/></b:if>
  </b:includable>
  
  
  <b:includable id='postBody' var='post'>
    <!-- Post Body Entry Content-->
    <div class='post-body entry-content' id='postBody'>
      <!-- Ads before post content, if post page. -->
      <b:if cond='data:view.isPost'><div id='top-ad-placeholder'/>
      </b:if><data:post.body/>
    </div>
    <!-- Ads after post content, if post page. -->
    <b:if cond='data:view.isPost'><div id='bottom-ad-placeholder'/>
    </b:if>
  </b:includable>
  <b:includable id='postBodySnippet' var='post'>
    <b:include data='post' name='postBody'/>
  </b:includable>
  <b:includable id='postBreadcrumbs' var='post'>
    <!-- Post Breadcrumbs -->
    <nav id='breadcrumb'><a expr:href='data:blog.homepageUrl'>
        <data:messages.home/></a>
      <b:if cond='data:post.labels'><em class='delimiter'/><a class='b-label' expr:href='data:post.labels.last.url'><data:post.labels.last.name/></a></b:if><em class='delimiter'/><span class='current'>
        <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></span>
    </nav>
    <script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;, &quot;@type&quot;: &quot;BreadcrumbList&quot;, &quot;@id&quot;: &quot;#Breadcrumb&quot;, &quot;itemListElement&quot;: [{ &quot;@type&quot;: &quot;ListItem&quot;, &quot;position&quot;: 1, &quot;item&quot;: { &quot;name&quot;: &quot;<data:messages.home/>&quot;, &quot;@id&quot;: &quot;<data:blog.homepageUrl.jsonEscaped/>&quot; } },{ &quot;@type&quot;: &quot;ListItem&quot;, &quot;position&quot;: 2, &quot;item&quot;: { &quot;name&quot;: &quot;<b:if cond='data:post.labels'><data:post.labels.last.name/></b:if>&quot;, &quot;@id&quot;: &quot;<data:post.labels.last.url.jsonEscaped/>&quot; } },{ &quot;@type&quot;: &quot;ListItem&quot;, &quot;position&quot;: 3, &quot;item&quot;: { &quot;name&quot;: &quot;<data:post.title/>&quot;, &quot;@id&quot;: &quot;<data:post.url.jsonEscaped/>&quot; } }] }
    </script>
  </b:includable>
  <b:includable id='postCommentsAndAd' var='post'>
    <!-- Post Content Index and Item -->
    <article class='blog-post hentry' itemscope='itemscope' itemtype='https://schema.org/CreativeWork'>
      <b:class cond='data:view.isMultipleItems' expr:name='&quot;post-filter post-&quot; + data:i'/>
      <b:class cond='data:view.isSingleItem' name='item-post'/>
      <b:include data='post' name='post'/>
    </article>
    <b:include cond='data:view.isPost' data='post' name='scriptTime'/>
    <!-- Comments -->
    <b:if cond='data:view.isSingleItem and data:post.allowComments'>
      <div class='comments-section'>
        <b:include data='post' name='threadedCommentsDisqus'/>
        <b:include data='post' name='commentPicker'/>
      </div>
    </b:if>
  </b:includable>
  <b:includable id='postCommentsLink'>
    <b:if cond='data:view.isMultipleItems'>
      <span class='byline post-comment-link container'>
        <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
        <b:include cond='data:post.commentSource == 1' name='commentsLinkIframe'/>
      </span>
    </b:if>
  </b:includable>
  <b:includable id='postFeaturedImage' var='post'>
  <!-- Post Featured Image on Index -->
  <div class='post-filter-image' itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
      <a class='post-filter-inner' expr:href='data:post.url'>
      <span class='post-filter-link'>
      <b:if cond='data:post.featuredImage'>
          <img class='snip-thumbnail lazy-img' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:data-src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' height='225' itemprop='url' loading='lazy' width='400'/>
          <b:else/>
          <img class='snip-thumbnail lazy-img' data-src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' loading='lazy' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
      </b:if>
      </span>
      <b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
      </a>
      <div class='piki-hero-flow'>
      <span class='post-tag'><data:post.labels.last.name/></span>
        <b:include data='post' name='postHeader'/>
        <b:include cond='data:view.isMultipleItems' data='post' name='headerByline'/>
      </div>
  </div>
  </b:includable>
  <b:includable id='postFooter' var='post'>
    <!-- Post Footer Itens -->
    <div class='post-footer'>
      <!-- Post Labels, Reactions, Share, Navigation, About Author an Related Posts -->
      <b:include cond='data:view.isPost' data='post' name='postInnerAds'/>
    </div>
  </b:includable>
  <b:includable id='postFooterAuthorProfile' var='post'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='postHeader' var='post'>
    <b:include cond='data:view.isPost' data='post' name='postBreadcrumbs'/>
    <b:include data='post' name='postTitle'/>
    <b:include cond='data:view.isPost' data='post' name='postsByline'/>
  </b:includable>
  <b:includable id='postInnerAds' var='post'>
  <b:if cond='data:view.isPost'><div id='post-placeholder'/></b:if>
  </b:includable>
  <b:includable id='postJumpLink' var='post'>
  <b:if cond='data:view.isMultipleItems'><a class='read-more' expr:href='data:post.url'><data:blog.jumpLinkMessage/></a></b:if>
  </b:includable>
  <b:includable id='postLabels' var='post'>
    <b:if cond='data:allBylineItems.labels'>
      <b:if cond='data:post.labels'>
        <div class='label-container'>
        <span><data:allBylineItems.labels.label/></span>
        <div class='label-head Label'>
        <b:loop values='data:post.labels' var='label'><a class='label-link' expr:href='data:label.url' rel='tag'><data:label.name/></a></b:loop>
        </div>
        </div>
      </b:if>
    </b:if>
  </b:includable>
  <b:includable id='postLocation'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='postMeta' var='post'>
    <b:if cond='!data:view.isPage'>
    <script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;NewsArticle&quot;,&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,&quot;@id&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;},&quot;headline&quot;:&quot;<data:post.title.jsonEscaped/>&quot;,&quot;description&quot;:&quot;<data:post.snippets.short.jsonEscaped/>&quot;,&quot;image&quot;:[&quot;<data:post.featuredImage.jsonEscaped/>&quot;],&quot;datePublished&quot;:&quot;<data:post.date.iso8601.jsonEscaped/>&quot;,&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601.jsonEscaped/>&quot;,&quot;author&quot;:{&quot;@type&quot;:&quot;Person&quot;,&quot;name&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;},&quot;publisher&quot;:{&quot;@type&quot;:&quot;Organization&quot;,&quot;name&quot;:&quot;<data:blog.title/>&quot;,&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,&quot;url&quot;:&quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,&quot;width&quot;:206,&quot;height&quot;:60}}}</script>
    </b:if>
  </b:includable>
  <b:includable id='postMetadataJSONImage'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='postMetadataJSONPublisher'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='postNavigation' var='post'>
    <!-- Post Navigation Item -->
    <ul class='navigation-runs'>
      <li class='post-next'>
        <b:if cond='data:newerPageUrl'>
          <a class='next-post-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' rel='next'><div class='navigation-posts'><span><data:messages.newer/></span><p/></div></a>
          <b:else/>
        <a rel='next'><div class='navigation-posts post-MenuNews-open'><span><data:messages.newer/></span><p><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></p></div></a>
        </b:if>
      </li>
      <li class='post-prev'>
        <b:if cond='data:olderPageUrl'>
        <a class='prev-post-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' rel='previous'><div class='navigation-posts'><span><data:messages.older/></span><p/></div></a>
          <b:else/>
        <a rel='previous'><div class='navigation-posts post-MenuNews-open'><span><data:messages.older/></span><p><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></p></div></a>
        </b:if>
      </li>
    </ul>
  </b:includable>
  <b:includable id='postReactions'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='postRelated' var='post'><b:comment>Disabled &#8212; removed by requested article layout.</b:comment></b:includable>
  <b:includable id='postShareButtons' var='post'><b:comment>Disabled &#8212; custom article share bar is rendered below the post body.</b:comment></b:includable>
  <b:includable id='postShortMeta'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='postSummary' var='post'>
    <!-- Post Summary -->
  <p class='post-snippet'><b:eval expr='data:post.snippets.short snippet { length: 120 }'/></p>
  </b:includable>
  <b:includable id='postTimestamp' var='post'>
    <!-- Post Timestamp -->
  <b:if cond='data:allBylineItems.timestamp'><span class='post-date published' expr:datetime='data:post.date.iso8601'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span></b:if>
  </b:includable>
  <b:includable id='postTitle' var='post'>
    <!-- Post Title Index and Item -->
    <b:if cond='data:view.isMultipleItems'>
      <h2 class='entry-title vcard' itemprop='mainEntityOfPage' itemtype='https://schema.org/mainEntityOfPage'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
    </b:if>
    <b:if cond='data:view.isSingleItem'>
    <h1 class='entry-title'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></h1>
    </b:if>
  </b:includable>
  <b:includable id='postsByline' var='post'>
    <!-- Blogger profile photo/name intentionally omitted. -->
    <div class='all-flex'>
      <div class='post-inner-data flex'>
        <div class='post-inner-username'>
          <b:if cond='data:allBylineItems.timestamp'>
            <div class='post-times'><span class='post-date published' expr:datetime='data:post.date.iso8601'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span><span id='readTime'/></div>
          </b:if>
        </div>
      </div>
      <div class='post-inner-comments flex'>
        <b:if cond='data:post.allowComments'><span class='comment-bubble show'><data:post.numberOfComments/></span></b:if>
        <b:if cond='data:view.isPost'><div class='share-top'><i class='fas fa-share-alt'/></div></b:if>
      </div>
    </div>
  </b:includable>
  <b:includable id='previousPageLink'>
  <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:messages.newerPosts'> <data:messages.newerPosts/></a>
  </b:includable>
  <b:includable id='scriptTime' var='post'>
    <b:if cond='data:view.isPost and data:widgets.Blog.first.allBylineItems.timestamp'>
      <script> /*<![CDATA[*/ (function(){try{var el=document.getElementById("postBody")||document.querySelector(".post-body,.item-post .post-body");var rt=document.getElementById("readTime");if(!el||!rt)return;function get_text(e){var ret="";if(!e)return ret;for(var t=e.childNodes.length,n=0;n<t;n++){var o=e.childNodes[n];if(8!=o.nodeType)ret+=1!=o.nodeType?o.nodeValue:get_text(o)}return ret}var words=(get_text(el)||"").replace(/\s+/g," ").trim();var count=words?words.split(" ").length:0;var maincount=Math.max(1,Math.round(count/200));rt.textContent=maincount+" دقيقة قراءة";}catch(e){}})(); /*]]>*/</script>
    </b:if>
  </b:includable>
  <b:includable id='searchMessage'>
    <!-- Search Message -->
    <b:if cond='data:view.search.query'>
      <div class='queryMessage'>
      <b:if cond='data:posts.empty'><span class='query-info query-error'>&quot;<data:view.search.query/>&quot;</span><b:else/><span class='query-info query-success'>&quot;<data:view.search.query/>&quot;</span></b:if>
      </div>
    </b:if>
    <b:if cond='data:view.search.label'>
      <div class='queryMessage'>
      <b:if cond='data:posts.empty'><span class='query-info query-error'><data:view.search.label/></span><b:else/><span class='query-info query-success'><data:view.search.label/></span></b:if>
      </div>
    </b:if>
    <b:if cond='data:view.isArchive'>
      <div class='queryMessage'>
      <b:if cond='data:posts.empty'><span class='query-info query-error'><data:view.archive.rangeMessage/></span><b:else/><span class='query-info query-success'><data:view.archive.rangeMessage/></span></b:if>
      </div>
    </b:if>
      <b:if cond='data:view.isError'><div class='errorPage'>
  <h3>404</h3>
  <h4>الصفحة غير موجودة</h4>
  <p>ربما تم نقل الرابط أو حذفه. يمكنك العودة للرئيسية أو تصفح الأقسام.</p>
  <p style='margin:16px 0;'>
    <a class='homepage' expr:href='data:blog.homepageUrl' style='display:inline-block;margin:6px;padding:10px 18px;background:linear-gradient(135deg,#b8860b,#d4af37);color:#1a120b;border-radius:8px;font-weight:700;text-decoration:none;'>الصفحة الرئيسية</a>
  </p>
  <p style='font-size:14px;opacity:.85;'>
    <a expr:href='data:blog.homepageUrl + &quot;/p/blog-page_228.html&quot;'>من نحن</a> &#183;
    <a expr:href='data:blog.homepageUrl + &quot;/p/blog-page_968.html&quot;'>اتصل بنا</a> &#183;
    <a expr:href='data:blog.homepageUrl + &quot;/p/blog-page_30.html&quot;'>سياسة الخصوصية</a>
  </p>
</div></b:if>
  </b:includable>
  <b:includable id='sharingButton'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='sharingButtonContent'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='sharingButtons'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='sharingButtonsMenu'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='sharingPlatformIcon'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='snippetedPostByline'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='snippetedPostContent'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='snippetedPostThumbnail'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='snippetedPostTitle'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='snippetedPosts'><b:comment>Disabled</b:comment></b:includable>
  <b:includable id='threadedCommentForm' var='post'>
    <div class='comment-form'>
      <a name='comment-form'/>
      <b:if cond='data:this.messages.blogComment != &quot;&quot;'><p><data:this.messages.blogComment/></p></b:if>
      <b:include data='post' name='commentFormIframeSrc'/>
      <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?:&quot;90px&quot;' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
      <data:post.cmtfpIframe/>
      <script type='text/javascript'>BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);</script>
    </div>
  </b:includable>
  <b:includable id='threadedCommentJs' var='post'>
    <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
    <b:template-script inline='true' name='threaded_comments'/>
    <script type='text/javascript'>blogger.widgets.blog.initThreadedComments(<data:post.commentJso/>,<data:post.commentMsgs/>,<data:post.commentConfig/>);</script>
  </b:includable>
  <b:includable id='threadedComments' var='post'>
    <section class='comments threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
      <a name='comments'/>
      <div class='comments-content'>
      <b:if cond='data:post.embedCommentForm'><b:include data='post' name='threadedCommentJs'/></b:if>
      <div id='comment-holder'><data:post.commentHtml/></div>
      </div>
      <p class='comment-footer'><b:if cond='data:post.allowNewComments'><b:include data='post' name='threadedCommentForm'/><b:else/><data:post.noNewCommentsText/></b:if></p>
      <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'><iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'/></div>
      </b:if>
    </section>
  </b:includable>
  <b:includable id='threadedCommentsDisqus' var='post'>
    <script type='text/javascript'>
      var disqus_blogger_current_url = &quot;<data:blog.canonicalUrl/>&quot;;
        if (!disqus_blogger_current_url.length) { disqus_blogger_current_url = &quot;<data:blog.url/>&quot;; }
        var disqus_blogger_homepage_url = &quot;<data:blog.homepageUrl/>&quot;;
        var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
    </script>
  </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='PopularPosts'>
    <b:includable id='main' var='this'>
        <b:include name='widget-title'/>
        <div class='widget-content'>
            <b:if cond='data:widget.sectionId == &quot;hot-posts&quot;'>
              <div class='breaking-ticker'><b:loop index='i' values='data:posts' var='post'><b:include data='post' name='content'/></b:loop></div>
                <b:elseif cond='data:widget.sectionId == &quot;ft-post&quot;'/>
                <div class='featured-grid-all'><b:loop index='i' values='data:posts' var='post'><b:include cond='data:i in [0]' data='post' name='content'/></b:loop>
                    <div class='bcxd-blocx'><b:loop index='i' values='data:posts' var='post'><b:include cond='data:i in [1,2,3,4]' data='post' name='content'/></b:loop></div>
                </div>
                <b:else/><b:class name='sidebar-posts'/>
                <b:loop index='i' values='data:posts' var='post'><b:include data='post' name='content'/></b:loop>
            </b:if>
        </div>
    </b:includable>
<b:includable id='blogThisShare'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='bylineByName' var='byline'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='bylineRegion' var='regionItems'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='commentsLink'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='commentsLinkIframe'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='content' var='post'>
<b:include name='popular-content'/>
</b:includable>
<b:includable id='snippetedPostThumbnail'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='emailPostIcon'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='facebookShare'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='footerBylines'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='googlePlusShare'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='headerByline'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='linkShare'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='otherSharingButton'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='platformShare'><b:comment>Replaced</b:comment></b:includable>

<b:includable id='postCommentsLink'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='postJumpLink' var='post'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='postLabels'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='postLocation'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='postReactions'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='postShareButtons'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='postTimestamp'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='sharingButton'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='sharingButtonContent'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='sharingButtons'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='sharingButtonsMenu'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='sharingPlatformIcon'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='snippetedPostByline'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='snippetedPostContent'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='snippetedPostTitle'><b:comment>Replaced</b:comment></b:includable>
<b:includable id='snippetedPosts'><b:comment>Replaced</b:comment></b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='Header'>
<b:includable id='main' var='this'>
    <div class='header-widget'>
    <b:include cond='data:imagePlacement in {&quot;REPLACE&quot;, &quot;BEFORE_DESCRIPTION&quot;}' name='image'/>
    <b:include cond='data:imagePlacement == &quot;BEHIND&quot;' name='title'/>
    </div>
</b:includable>
<b:includable id='image'>
    <a class='header-image-wrapper' expr:href='data:blog.homepageUrl'>
    <img decoding='async' expr:alt='data:blog.title.escaped' expr:data-height='data:height' expr:data-width='data:width' expr:src='data:image' loading='lazy'/>
    </a>
</b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='FeaturedPost'>
    <b:includable id='main' var='this'>
        <b:include name='widget-title'/>
        <div class='widget-content'>
         <b:loop values='data:posts' var='post'><b:include data='post' name='postContent'/></b:loop>
        </div>
    </b:includable>
    <b:includable id='blogThisShare'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='bylineByName' var='byline'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='bylineRegion' var='regionItems'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='commentsLink'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='commentsLinkIframe'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='emailPostIcon'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='facebookShare'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='footerBylines'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='googlePlusShare'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='headerByline'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='linkShare'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='otherSharingButton'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='platformShare'><b:comment>Replaced</b:comment></b:includable>
    
    <b:includable id='postCommentsLink'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postJumpLink' var='post'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postLabels'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postLocation'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postReactions'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postShareButtons'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postTimestamp'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingButton'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingButtonContent'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingButtons'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingButtonsMenu'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='sharingPlatformIcon'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='snippetedPostByline'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='snippetedPostContent'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='snippetedPostThumbnail'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='snippetedPostTitle'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='snippetedPosts'><b:comment>Replaced</b:comment></b:includable>
    <b:includable id='postContent' var='post'>
        <div class='post-content'>
            <a class='post-filter-link' expr:href='data:post.url'>
                <b:if cond='data:post.featuredImage'><img class='snip-thumbnail lazy-img' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:data-src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' height='225' loading='lazy' width='400'/>
                    <b:else/><img class='snip-thumbnail lazy-img' data-src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' loading='lazy' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
                </b:if><b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
            </a>
            <div class='entery-category'>
                <span class='label-news-flex'><data:post.labels.first.name/></span>
                <h2 class='entry-title vcard'><a expr:href='data:post.url' expr:title='data:post.title' rel='bookmark'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
                <p class='post-snippet'><b:eval expr='data:post.snippets.short snippet { length: 120 }'/></p>
                <div class='post-snip'><span class='post-date'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span><span class='post-comments'><data:post.numberOfComments/> <i class='far fa-comment-alt'/></span></div>
            </div>
        </div>
    </b:includable>
</b:defaultmarkup>
 <b:defaultmarkup type='Label'>
  <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
  </b:includable>
  <b:includable id='cloud'>
      <b:loop values='data:labels' var='label'>
          <span class='label-size'>
              <b:class expr:name='&quot;label-size-&quot; + data:label.cssSize'/>
              <a class='label-name' expr:href='data:label.url'><data:label.name/><b:if cond='data:this.showFreqNumbers'><span class='label-count'><data:label.count/></span></b:if></a>
          </span>
      </b:loop>
  </b:includable>
  <b:includable id='content'>
  <div class='widget-content'><b:class expr:name='data:this.display + &quot;-label&quot;'/><b:include cond='data:this.display == &quot;list&quot;' name='list'/><b:include cond='data:this.display == &quot;cloud&quot;' name='list'/></div>
  </b:includable>
  <b:includable id='list'>
      <ul><b:loop values='data:labels' var='label'>
          <li><a class='label-name' expr:href='data:label.url'><data:label.name/><b:if cond='data:this.showFreqNumbers'><span class='label-count'>(<data:label.count/>)</span></b:if></a></li>
          </b:loop>
      </ul>
  </b:includable>
  </b:defaultmarkup>
  <b:defaultmarkup type='BlogSearch'>
  <b:includable id='main' var='this'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content' role='search'>
        <form class='search-form' expr:action='data:blog.searchUrl'>
          <b:attr cond='not data:view.isPreview' name='target' value='_top'/>
          <b:include name='urlParamsAsFormInput'/>
          <input autocomplete='off' class='search-input' expr:aria-label='data:messages.searchThisBlog' expr:placeholder='data:messages.searchThisBlog' expr:value='data:view.isSearch ? data:view.search.query.escaped : &quot;&quot;' name='q'/>
          <input class='search-action' expr:value='data:messages.search.escaped' type='submit'/>
        </form>
      </div>
    </b:includable>
    <b:includable id='searchForm'><b:comment>Disabled</b:comment></b:includable>
    <b:includable id='searchSubmit'><b:comment>Disabled</b:comment></b:includable>
    </b:includable>
  </b:defaultmarkup>
<b:defaultmarkup type='BlogArchive'>
    <b:includable id='main' var='this'>
      <b:include name='widget-title'/>
      <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
      <div class='widget-content'>
        <div id='ArchiveList'>
          <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
            <b:include cond='data:this.style in {&quot;FLAT&quot;, &quot;MENU&quot;, &quot;HIERARCHY&quot;}' name='flat'/>
          </div>
        </div>
      </div>
    </b:includable>
    <b:includable id='flat'>
      <ul class='flat'>
        <b:loop values='data:data' var='i'>
        <li class='archivedate'><a expr:href='data:i.url'><data:i.name/><span class='post-count'><data:i.post-count/></span></a></li>
        </b:loop>
      </ul>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='TextList'>
    <b:includable id='main' var='this'>
        <b:include name='widget-title'/>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <b:include name='textlist-content'/>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='LinkList'>
    <b:includable id='main'>
        <b:include name='widget-title'/>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content widget-control'>
            <ul><b:loop values='data:links' var='link'><li><a expr:href='data:link.target'><data:link.name/></a></li></b:loop></ul>
        </div>
    </b:includable>
</b:defaultmarkup>
<b:defaultmarkup type='PageList'>
    <b:includable id='main'>
        <b:include name='widget-title'/>
        <b:include name='content'/>
    </b:includable>
    <b:includable id='content'>
        <div class='widget-content widget-control'>
            <ul><b:loop values='data:links' var='link'><li><a expr:href='data:link.target'><data:link.name/></a></li></b:loop></ul>
        </div>
    </b:includable>
</b:defaultmarkup>
</b:defaultmarkups>
<b:if cond='data:blog.analyticsAccountNumber'>
  <!-- Google Analytics -->
  <b:include data='blog' name='google-analytics'/>
</b:if>
    <script type='text/javascript'>cookieChoices = {};</script>
<!-- Phase 2 UX / content-first safeguards -->
<style type='text/css'>
html,body{overflow-x:hidden!important;}
#feed-view{min-width:0!important;}
.item-post .post-body{font-size:16px!important;line-height:1.85!important;overflow-wrap:anywhere!important;}
.item-post .post-body img,.item-post .post-body video,.item-post .post-body iframe{max-width:100%!important;}
.item-post .post-body p{margin:0 0 1.15em!important;}
.item-post .post-body h2,.item-post .post-body h3,.item-post .post-body h4{margin-top:1.35em!important;margin-bottom:.65em!important;line-height:1.45!important;}
.blog-posts,.grid-posts{min-width:0!important;}
@media(max-width:880px){
  .item-post .post-body{font-size:16px!important;line-height:1.9!important;}
  .item-post .post-inner-area{padding-left:12px!important;padding-right:12px!important;}


}
</style>

<!-- Phase 2 pagination styles -->

<style id='alf-author-profile-guard'>
</style>
<style id='alf-author-profile-guard'>
/* MODULE: ARTICLE AUTHOR PROFILE &#8212; permanently disabled */
.item-post .post-inner-user,.item-post .author-image,.item-post .post-author-times,.item-post .about-author,.item-post .author-profile,.item-post .profile-info{display:none!important;}
</style>

<style id='pagespeed-ultra-plus'>
/* PageSpeed 2026-09-16: no global content-visibility on img (it delayed LCP). */
.widget iframe{content-visibility:auto;}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition:none!important}
}
</style>
</head>
<body expr:class='data:blog.pageType' id='mainContent'>
  <!-- مدير علامات جوجل (بدون سكريبت) --> <noscript><iframe height='0' src='https://www.googletagmanager.com/ns.html?id=GTM-P5MJ5L2L' style='display:none;visibility:hidden' width='0'/></noscript> <!-- نهاية مدير علامات جوجل (بدون سكريبت) -->
  <!-- لا توجد وحدة إعلان قبل محتوى الصفحة لتجنب حجز مساحة أو دفع المحتوى لأسفل. -->
  <b:class cond='data:view.isHomepage' name='home'/>
  <b:class cond='data:view.isPage' name='item-view'/>
  <b:class cond='data:view.isMultipleItems' name='feed-view'/>
  <b:class cond='data:view.isSingleItem' name='item-view'/>
  <b:class cond='data:view.isArchive' name='archive-view'/>
  <b:class cond='data:view.isLabelSearch' name='label-view'/>
  <b:class cond='data:view.isSearch and !data:view.isLabelSearch' name='search-view'/>
  <b:class cond='data:view.isError' name='error-view'/>
<!-- Theme defaults (replaced Admin Panel) -->
<script type='text/javascript'>
//<![CDATA[
var noThumb = "";
var commentsSystem = "blogger";
var disqusShortname = "";
var relatedPostsNum = 3;
var relatedPostsText = "You May Like";
var loadMorePosts = "Load More";
var fixedSidebar = true;
var fixedMenu = true;
var showMoreText = "عرض المزيد";
//]]>
</script>

<!-- =========================================================
     MODULE: ALFAYLASOOF HEADER v8
     Desktop: logo top-right, navigation below in one row.
     Mobile: menu button on the right, menu opens on demand.
     More is the only secondary dropdown.
     ========================================================= -->
<header id='alfHeader' itemscope='itemscope' itemtype='https://schema.org/WPHeader' role='banner'>
  <div class='alf-header-inner'>
    <div class='alf-header-logo'>
      <a aria-label='مدونة الفيلسوف' expr:href='data:blog.homepageUrl.canonical'>
        <img alt='الفيلسوف' decoding='async' fetchpriority='high' height='45' loading='eager' src='https://blogger.googleusercontent.com/img/a/AVvXsEhN1f_Kcb_b5v5k6L_8F_WYS8pycwp0qJwK6F6UvVgkZSUoubobJInBtSvqe29RzoRenCZPtsOT7nQNtSLy_CBAl8hds3HP94FeXKFcVrDGQJ8lD0m9lOyKGE-nMqLGDW1NCBzi_LEtgXQl9vh24PrTMDHK9NdfeswZWtiZoXdRgCe0olnmZGjEVtB54LM=s187' width='183'/>
      </a>
    </div>

    <div class='alf-header-controls-row'>
      <button aria-controls='alfMobileNav' aria-expanded='false' class='alf-menu-toggle' id='alfMenuToggle' type='button'><span aria-hidden='true'>&#9776;</span><span>القائمة</span></button>
      <div class='alf-header-actions'>
        <button aria-label='تفعيل الثيم الأزرق الاحترافي' class='theme-toggle-btn' id='themeToggleBtn' title='تفعيل الثيم الأزرق الاحترافي' type='button'><i aria-hidden='false' class='fas fa-moon'/></button>
        <div class='search-wrap'><b:tag class='search-button-flex' expr:title='data:messages.search' href='javascript:;' name='a' role='button'/></div>
      </div>
    </div>

    <nav aria-label='القائمة الرئيسية' class='alf-main-nav' id='alfDesktopNav'>
      <a href='https://alfaylasooof.blogspot.com'><span aria-hidden='true'>&#8962;</span> الرئيسية</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1'><span aria-hidden='true'>📰</span> أخبار</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9'><span aria-hidden='true'>&#9917;</span> رياضة</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B3%D9%8A%D9%86%D9%85%D8%A7%20%D9%88%D9%85%D8%B3%D8%B1%D8%AD'><span aria-hidden='true'>🎬</span> سينما ومسرح</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AF%D8%A8'><span aria-hidden='true'>📚</span> أدب</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B5%D8%AD%D8%A9'><span aria-hidden='true'>💝</span> صحة</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7'><span aria-hidden='true'>💻</span> تكنولوجيا</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B9%D9%84%D9%88%D9%85'><span aria-hidden='true'>🔬</span> علوم</a>
      <div class='alf-more' id='alfDesktopMore'>
        <button aria-controls='alfDesktopMorePanel' aria-expanded='false' class='alf-more-toggle' id='alfDesktopMoreToggle' type='button'>المزيد <span aria-hidden='true'>&#9660;</span></button>
        <div aria-hidden='true' class='alf-more-panel' id='alfDesktopMorePanel'>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_228.html'>𓅄 من نحن</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_968.html'>𓆃 اتصل بنا</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_300.html'>&#10175; اتفاقية المستخدم</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_30.html'>𓎬 سياسة الخصوصية</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_17.html'>𓋚 سياسة ملفات تعريف الارتباط</a>
        </div>
      </div>
    </nav>

    <nav aria-label='قائمة الهاتف' class='alf-mobile-nav' hidden='hidden' id='alfMobileNav'>
      <a href='https://alfaylasooof.blogspot.com'><span>&#8962;</span> الرئيسية</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1'><span>📰</span> أخبار</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9'><span>&#9917;</span> رياضة</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B3%D9%8A%D9%86%D9%85%D8%A7%20%D9%88%D9%85%D8%B3%D8%B1%D8%AD'><span>🎬</span> سينما ومسرح</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AF%D8%A8'><span>📚</span> أدب</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B5%D8%AD%D8%A9'><span>💝</span> صحة</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7'><span>💻</span> تكنولوجيا</a>
      <a href='https://alfaylasooof.blogspot.com/search/label/%D8%B9%D9%84%D9%88%D9%85'><span>🔬</span> علوم</a>
      <div class='alf-more' id='alfMobileMore'>
        <button aria-controls='alfMobileMorePanel' aria-expanded='false' class='alf-more-toggle' id='alfMobileMoreToggle' type='button'>المزيد <span aria-hidden='true'>&#9660;</span></button>
        <div aria-hidden='true' class='alf-more-panel' id='alfMobileMorePanel'>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_228.html'>𓅄 من نحن</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_968.html'>𓆃 اتصل بنا</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_300.html'>&#10175; اتفاقية المستخدم</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_30.html'>𓎬 سياسة الخصوصية</a>
          <a href='https://alfaylasooof.blogspot.com/p/blog-page_17.html'>𓋚 سياسة ملفات تعريف الارتباط</a>
        </div>
      </div>
    </nav>

    <div id='search-flex'>
      <div class='search-flex-container'>
        <form class='search-form' expr:action='data:blog.searchUrl' role='search'>
          <input autocomplete='off' class='search-input' expr:placeholder='data:messages.search' name='q' spellcheck='false' type='search' value=''/>
        </form>
        <b:tag class='search-flex-close search-hidden' expr:title='data:messages.search' href='javascript:;' name='a' role='button'/>
      </div>
    </div>
  </div>
</header>
<!-- MODULE: ALFAYLASOOF HEADER BEHAVIOR &#8212; reliable menu + More dropdown -->
<script type='text/javascript'>
//<![CDATA[
(function(){
  'use strict';
  function initAlfHeader(){
    var menuBtn=document.getElementById('alfMenuToggle'),mobileNav=document.getElementById('alfMobileNav');
    var desktopMore=document.getElementById('alfDesktopMore'),mobileMore=document.getElementById('alfMobileMore');
    if(!menuBtn||!mobileNav)return;
    function setMore(box,open){if(!box)return;box.classList.toggle('is-open',open);var b=box.querySelector('.alf-more-toggle'),p=box.querySelector('.alf-more-panel');if(b)b.setAttribute('aria-expanded',open?'true':'false');if(p)p.setAttribute('aria-hidden',open?'false':'true');}
    function toggleMore(box){if(!box)return;var open=!box.classList.contains('is-open');setMore(box,open);if(box===desktopMore)setMore(mobileMore,false);if(box===mobileMore)setMore(desktopMore,false);}
    function closeMobile(){mobileNav.classList.remove('is-open');mobileNav.setAttribute('hidden','hidden');menuBtn.setAttribute('aria-expanded','false');setMore(mobileMore,false);}
    menuBtn.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();var open=!mobileNav.classList.contains('is-open');if(open){mobileNav.removeAttribute('hidden');mobileNav.classList.add('is-open');}else closeMobile();menuBtn.setAttribute('aria-expanded',open?'true':'false');});
    var d=document.getElementById('alfDesktopMoreToggle'),m=document.getElementById('alfMobileMoreToggle');
    if(d)d.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();toggleMore(desktopMore);});
    if(m)m.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();toggleMore(mobileMore);});
    mobileNav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){closeMobile();});});
    document.addEventListener('click',function(e){if(!e.target.closest('#alfHeader')){closeMobile();setMore(desktopMore,false);}});
    window.addEventListener('resize',function(){if(window.innerWidth>=700)closeMobile();});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initAlfHeader);else initAlfHeader();
})();
//]]>
</script>

<!-- Outer Wrapper -->
<div id='outer-wrapper'>
  <!-- الأقسام المحذوفة من أعلى Center Feature Posts حسب طلب المستخدم:
       Trending Posts / Ads Placement / Top Feature Section / Top Feature Posts -->
  <div class='flex-section' id='center-container'>
  <div class='container outer-container'>
    <main id='feed-view'>
      <b:if cond='data:view.isHomepage'>
      <!-- Featured Wrapper -->
        <div class='raw-box-content'>
          <b:section class='raw-box' id='room-box' maxwidgets='6' name='Center Feature Posts' showaddelement='yes'>
            <b:widget id='HTML5' locked='false' title='' type='HTML' visible='true'>
              <b:widget-settings>
                <b:widget-setting name='content'><![CDATA[<!-- =========================================================
     شريط أخبار الفيلسوف
     عاجل + مكبر صوت CSS
     بدون أي صور خارجية
     ========================================================= -->

<div id="ALFAYLASOOF-TV-NEWS"></div>

<script>
(function () {

  "use strict";

  var HOST_ID = "ALFAYLASOOF-TV-NEWS";
  var host = document.getElementById(HOST_ID);

  if (!host) return;
  if (host.getAttribute("data-loaded") === "1") return;

  host.setAttribute("data-loaded", "1");

  var shadow = host.attachShadow({ mode: "open" });

  shadow.innerHTML = `
    <style>

      :host {
        display: block !important;
        width: 100% !important;
        height: 56px !important;
        margin: 0 !important;
        padding: 0 !important;
        position: relative !important;
        z-index: 5 !important;
        contain: layout style paint !important;
        isolation: isolate !important;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      /* ================================
         الشريط
         ================================ */

      .tvbar {
        position: relative;
        width: 100%;
        height: 56px;
        overflow: hidden;
        direction: ltr;

        background:
          linear-gradient(
            90deg,
            #071321 0%,
            #0b1d32 30%,
            #102d4b 55%,
            #0b1d32 80%,
            #071321 100%
          );

        border-top: 1px solid #214f7c;
        border-bottom: 1px solid #08192b;

        box-shadow:
          0 3px 15px rgba(0,0,0,.38);

        font-family:
          "Segoe UI",
          Tahoma,
          Arial,
          sans-serif;
      }


      /* ================================
         الساعة
         ================================ */

      .clock {
        position: absolute;
        left: 0;
        top: 0;

        width: 84px;
        height: 56px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #dff6ff;

        background:
          linear-gradient(
            180deg,
            #102b48,
            #071321
          );

        border-right: 1px solid #214f7c;

        font-size: 15px;
        font-weight: 600;

        letter-spacing: .5px;

        direction: ltr;

        z-index: 30;

        text-shadow:
          0 0 8px rgba(56,189,248,.2);
      }


      /* ================================
         منطقة الأخبار
         ================================ */

      .news-area {
        position: absolute;

        left: 84px;
        right: 125px;

        top: 0;

        height: 56px;

        overflow: hidden;
      }


      /* ================================
         مسار الأخبار
         ================================ */

      .news-track {

        position: absolute;

        left: 0;
        top: 0;

        height: 56px;

        display: flex;
        align-items: center;

        width: max-content;

        white-space: nowrap;

        will-change: transform;

        animation:
          newsLoop 115s linear infinite;
      }


      .news-area:hover .news-track {
        animation-play-state: paused;
      }


      .news-group {

        display: flex;
        align-items: center;

        height: 56px;

        width: max-content;

        flex-shrink: 0;
      }


      /* ================================
         الخبر
         ================================ */

      .news-item {

        display: inline-flex;

        align-items: center;

        direction: rtl;

        height: 56px;

        margin-right: 52px;

        color: #e4f5ff;

        text-decoration: none;

        font-size: 14.5px;

        font-weight: 500;

        white-space: nowrap;

        transition:
          color .25s ease;
      }


      .news-item:hover {
        color: #38bdf8;
      }


      /* ================================
         نقطة الخبر
         ================================ */

      .dot {

        width: 7px;
        height: 7px;

        min-width: 7px;

        margin-left: 10px;

        border-radius: 50%;

        background: #38bdf8;

        box-shadow:
          0 0 7px rgba(56,189,248,.75);

        animation:
          blink 1.8s ease-in-out infinite;
      }


      /* ================================
         منطقة عاجل
         ================================ */

      .breaking {

        position: absolute;

        right: 0;
        top: 0;

        width: 125px;
        height: 56px;

        display: flex;
        align-items: center;
        justify-content: center;

        gap: 8px;

        direction: rtl;

        background:
          linear-gradient(
            180deg,
            #b91c1c,
            #7f1111
          );

        border-left: 1px solid #ef4444;

        box-shadow:
          -4px 0 15px rgba(0,0,0,.2);

        z-index: 40;

        overflow: hidden;
      }


      /* ================================
         تأثير عاجل
         ================================ */

      .breaking::before {

        content: "";

        position: absolute;

        top: 0;
        left: 0;

        width: 60px;
        height: 100%;

        background:
          linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.16),
            transparent
          );

        transform: skewX(-20deg) translateX(-80px);

        animation:
          shine 4s ease-in-out infinite;
        will-change: transform;
      }


      /* ================================
         مكبر الصوت CSS
         ================================ */

      .speaker {

        position: relative;

        width: 25px;
        height: 22px;

        flex-shrink: 0;
      }


      /* جسم السماعة */

      .speaker::before {

        content: "";

        position: absolute;

        left: 0;
        top: 7px;

        width: 8px;
        height: 9px;

        background: #fff;

        border-radius: 2px;
      }


      /* مخروط السماعة */

      .speaker::after {

        content: "";

        position: absolute;

        left: 6px;
        top: 3px;

        width: 0;
        height: 0;

        border-top: 9px solid transparent;
        border-bottom: 9px solid transparent;
        border-right: 15px solid #fff;
      }


      /* موجات الصوت */

      .sound-wave {

        position: absolute;

        right: -2px;
        top: 3px;

        width: 11px;
        height: 16px;

        border-right: 2px solid #fff;

        border-radius: 0 50% 50% 0;
      }


      .sound-wave::after {

        content: "";

        position: absolute;

        right: 3px;
        top: 3px;

        width: 6px;
        height: 10px;

        border-right: 2px solid rgba(255,255,255,.85);

        border-radius: 0 50% 50% 0;
      }


      /* ================================
         نص عاجل
         ================================ */

      .breaking-text {

        position: relative;

        color: #fff;

        font-size: 15px;

        font-weight: 800;

        letter-spacing: .3px;

        white-space: nowrap;

        text-shadow:
          0 1px 2px rgba(0,0,0,.25);
      }


      /* ================================
         الحركة
         ================================ */

      @keyframes newsLoop {

        from {
          transform: translateX(-50%);
        }

        to {
          transform: translateX(0);
        }

      }


      @keyframes blink {

        0%,
        45% {
          opacity: 1;
        }

        50%,
        100% {
          opacity: .3;
        }

      }


      @keyframes shine {

        0% {
          transform: skewX(-20deg) translateX(-80px);
        }

        25% {
          transform: skewX(-20deg) translateX(150px);
        }

        100% {
          transform: skewX(-20deg) translateX(150px);
        }

      }


      /* ================================
         Tablet
         ================================ */

      @media (max-width: 900px) {

        :host {
          height: 52px !important;
        }

        .tvbar {
          height: 52px;
        }

        .clock {
          width: 72px;
          height: 52px;
          font-size: 13.5px;
        }

        .news-area {
          left: 72px;
          right: 110px;
          height: 52px;
        }

        .news-track,
        .news-group {
          height: 52px;
        }

        .news-item {
          height: 52px;
          font-size: 13.5px;
          margin-right: 42px;
        }

        .breaking {
          width: 110px;
          height: 52px;
        }

        .breaking-text {
          font-size: 14px;
        }

      }


      /* ================================
         Mobile
         ================================ */

      @media (max-width: 600px) {

        :host {
          height: 50px !important;
        }

        .tvbar {
          height: 50px;
        }

        .clock {
          width: 64px;
          height: 50px;
          font-size: 12.5px;
        }

        .news-area {
          left: 64px;
          right: 91px;
          height: 50px;
        }

        .news-track,
        .news-group {
          height: 50px;
        }

        .news-item {
          height: 50px;
          font-size: 13px;
          margin-right: 35px;
        }

        .breaking {
          width: 91px;
          height: 50px;
          gap: 5px;
        }

        .breaking-text {
          font-size: 12px;
        }

        .speaker {
          transform: scale(.82);
        }

      }


      /* ================================
         موبايلات صغيرة
         ================================ */

      @media (max-width: 380px) {

        :host {
          height: 48px !important;
        }

        .tvbar {
          height: 48px;
        }

        .clock {
          width: 58px;
          height: 48px;
          font-size: 11.5px;
        }

        .news-area {
          left: 58px;
          right: 82px;
          height: 48px;
        }

        .news-track,
        .news-group {
          height: 48px;
        }

        .news-item {
          height: 48px;
          font-size: 12.5px;
          margin-right: 30px;
        }

        .breaking {
          width: 82px;
          height: 48px;
        }

        .breaking-text {
          font-size: 11px;
        }

        .speaker {
          transform: scale(.72);
        }

      }

    </style>


    <!-- ================================
         الشريط
         ================================ -->

    <div class="tvbar">


      <!-- الساعة -->

      <div
        class="clock"
        id="clock"
      >
        00:00:00
      </div>


      <!-- الأخبار -->

      <div
        class="news-area"
        id="newsArea"
      >

        <div
          class="news-track"
          id="newsTrack"
        >

          <div class="news-group">

            <div
              style="
                color:#94a3b8;
                font-size:13px;
                direction:rtl;
                padding:0 18px;
              "
            >
               الأخبار...
            </div>

          </div>

        </div>

      </div>


      <!-- ================================
           عاجل + مكبر الصوت
           ================================ -->

      <div class="breaking">

        <div class="speaker">
          <div class="sound-wave"></div>
        </div>

        <div class="breaking-text">
          خبر عاجل
        </div>

      </div>


    </div>
  `;


  /* =====================================================
     الساعة
     ===================================================== */

  var clock =
    shadow.getElementById("clock");


  function updateClock() {

    var now = new Date();

    var h =
      String(now.getHours())
      .padStart(2, "0");

    var m =
      String(now.getMinutes())
      .padStart(2, "0");

    var s =
      String(now.getSeconds())
      .padStart(2, "0");

    clock.textContent =
      h + ":" + m + ":" + s;
  }


  updateClock();

  setInterval(
    updateClock,
    1000
  );


  /* =====================================================
     تحميل الأخبار من Blogger
     ===================================================== */

  var track =
    shadow.getElementById("newsTrack");

  var NEWS_LIMIT = 10;


  var callbackName =
    "__AlfaylasoofNews_" +
    Date.now() +
    "_" +
    Math.floor(
      Math.random() * 999999
    );


  var blogURL =
    window.location.origin;


  var feedURL =
    blogURL +
    "/feeds/posts/default" +
    "?alt=json-in-script" +
    "&max-results=" +
    NEWS_LIMIT +
    "&callback=" +
    callbackName;


  /* =====================================================
     استقبال الأخبار
     ===================================================== */

  window[callbackName] =
    function (data) {

      try {

        if (
          !data ||
          !data.feed ||
          !data.feed.entry ||
          !data.feed.entry.length
        ) {

          showMessage(
            "لا توجد أخبار منشورة حاليًا"
          );

          return;
        }


        var entries =
          data.feed.entry;


        var group =
          document.createElement("div");

        group.className =
          "news-group";


        for (
          var i = 0;
          i < entries.length;
          i++
        ) {

          var entry =
            entries[i];


          var title =
            (
              entry.title &&
              entry.title.$t
            )
              ? entry.title.$t
              : "خبر جديد";


          var link = "#";


          if (entry.link) {

            for (
              var j = 0;
              j < entry.link.length;
              j++
            ) {

              if (
                entry.link[j].rel ===
                "alternate"
              ) {

                link =
                  entry.link[j].href;

                break;
              }

            }

          }


          var item =
            document.createElement("a");


          item.className =
            "news-item";


          item.href =
            link;


          item.target =
            "_self";


          item.rel =
            "noopener";


          var dot =
            document.createElement("span");

          dot.className =
            "dot";


          var text =
            document.createElement("span");

          text.textContent =
            title;


          item.appendChild(dot);
          item.appendChild(text);

          group.appendChild(item);

        }


        /* تكرار الأخبار */

        var group1 =
          group;

        var group2 =
          group1.cloneNode(true);


        track.innerHTML = "";


        track.appendChild(group1);
        track.appendChild(group2);


        /* ================================
           السرعة
           ================================ */

        var duration =
          Math.max(
            110,
            entries.length * 4.8
          );


        track.style.animationDuration =
          duration + "s";


      } catch (error) {

        showMessage(
          "حدث خطأ أثناء تحميل الأخبار"
        );

        console.error(
          "TV NEWS:",
          error
        );

      }

    };


  /* =====================================================
     رسالة الخطأ
     ===================================================== */

  function showMessage(message) {

    track.innerHTML = "";

    var group =
      document.createElement("div");

    group.className =
      "news-group";


    var text =
      document.createElement("div");


    text.style.cssText =
      "color:#94a3b8;" +
      "font-size:13px;" +
      "direction:rtl;" +
      "padding:0 18px;";


    text.textContent =
      message;


    group.appendChild(text);

    track.appendChild(group);

  }


  /* =====================================================
     تحميل Feed
     ===================================================== */

  var script =
    document.createElement("script");


  script.src =
    feedURL;


  script.async =
    true;


  script.onerror =
    function () {

      showMessage(
        "تعذر تحميل أخبار المدونة"
      );

    };


  if (window.alfWhenIdle) {
    window.alfWhenIdle(function () { document.head.appendChild(script); }, 3500);
  } else {
    setTimeout(function () { document.head.appendChild(script); }, 3500);
  }


  /* تنظيف السكربت */

  setTimeout(
    function () {

      if (
        script &&
        script.parentNode
      ) {

        script.parentNode
          .removeChild(script);

      }

    },
    30000
  );


})();
</script>]]></b:widget-setting>
              </b:widget-settings>
              <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
            </b:widget>
          </b:section>
        </div>
      </b:if><!-- القائمة الفرعونية أصبحت جزءا&#1611; من الهيدر. -->
<!-- ========================================================== -->
      <!-- Main Wrapper -->
      <b:section class='main' id='main' maxwidgets='1' name='Main Recent Posts' showaddelement='yes'>
        <b:widget id='Blog1' locked='true' title='رسائل المدونة الإلكترونية' type='Blog' version='2' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='commentLabel'>comments</b:widget-setting>
            <b:widget-setting name='showShareButtons'>false</b:widget-setting>
            <b:widget-setting name='authorLabel'>الفيلسوف</b:widget-setting>
            <b:widget-setting name='style.unittype'>TextAndImage</b:widget-setting>
            <b:widget-setting name='timestampLabel'/>
            <b:widget-setting name='reactionsLabel'/>
            <b:widget-setting name='showAuthorProfile'>false</b:widget-setting>
            <b:widget-setting name='style.layout'>1x1</b:widget-setting>
            <b:widget-setting name='showLocation'>false</b:widget-setting>
            <b:widget-setting name='showTimestamp'>false</b:widget-setting>
            <b:widget-setting name='postsPerAd'>1</b:widget-setting>
            <b:widget-setting name='style.bordercolor'>#ffffff</b:widget-setting>
            <b:widget-setting name='showDateHeader'>false</b:widget-setting>
            <b:widget-setting name='style.textcolor'>#ffffff</b:widget-setting>
            <b:widget-setting name='showCommentLink'>true</b:widget-setting>
            <b:widget-setting name='style.urlcolor'>#ffffff</b:widget-setting>
            <b:widget-setting name='postLocationLabel'>Location:</b:widget-setting>
            <b:widget-setting name='showAuthor'>false</b:widget-setting>
            <b:widget-setting name='style.linkcolor'>#ffffff</b:widget-setting>
            <b:widget-setting name='style.bgcolor'>#ffffff</b:widget-setting>
            <b:widget-setting name='showLabels'>true</b:widget-setting>
            <b:widget-setting name='postLabelsLabel'>التصنيفات:</b:widget-setting>
            <b:widget-setting name='showBacklinks'>false</b:widget-setting>
            <b:widget-setting name='showInlineAds'>false</b:widget-setting>
            <b:widget-setting name='showReactions'>false</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main' var='this'>
            <b:include name='searchMessage'/>
            <div class='blog-posts hfeed container'>
              <b:class cond='data:view.isMultipleItems' name='post-filter-wrap'/>
              <b:class cond='data:view.isSingleItem' name='item-post-wrap'/>
              <b:if cond='data:view.isHomepage'>
                <div class='widget-title'>
                  <h3 class='title'><span><data:blog.jumpLinkMessage/></span></h3><a class='simple-viewmore' href='https://alfaylasooof.blogspot.com/'>عرض المزيد</a></div>
              </b:if>
              <b:if cond='data:view.isMultipleItems and data:posts.empty'>
              <div class='queryEmpty'><data:messages.noResultsFound/></div>
              </b:if>
              <b:tag class='grid-posts' cond='data:view.isMultipleItems' name='div'>
                <b:loop index='i' values='data:posts' var='post'><b:include data='post' name='postCommentsAndAd'/></b:loop>
              </b:tag>
              <nav aria-label='ترقيم المقالات' class='alf-dynamic-pager' dir='ltr' id='alf-dynamic-pager-2'/>
            </div>
            <b:include name='feedLinks'/>
          </b:includable>
          <b:includable id='aboutPostAuthor'>
  <div class='author-name'>
    <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
      <span>
        <data:post.author.name/>
      </span>
    </a>
  </div>
  <div>
    <span class='author-desc'>
      <data:post.author.aboutMe/>
    </span>
  </div>
</b:includable>
          <b:includable id='addComments'>
  <a expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'><b:message name='messages.postAComment'/></a>
  </b:includable>
          <b:includable id='backLinks' var='post'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='blogThisShare'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='bylineByName' var='byline'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='bylineRegion' var='regionItems'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='commentAuthorAvatar'>
  <div class='avatar-image-container'><img class='author-avatar' decoding='async' expr:src='data:comment.authorAvatarSrc' height='45' loading='lazy' width='45'/></div>
  </b:includable>
          <b:includable id='commentDeleteIcon' var='comment'>
    <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
      <b:if cond='data:showCmtPopup'>
        <div class='goog-toggle-button'>
          <div class='goog-inline-block comment-action-icon'/>
        </div>
        <b:else/>
      <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:messages.deleteComment'><img decoding='async' loading='lazy' src='https://resources.blogblog.com/img/icon_delete13.gif'/></a>
      </b:if>
    </span>
  </b:includable>
          <b:includable id='commentForm' var='post'>
    <div class='comment-form'>
      <a name='comment-form'/>
      <b:if cond='data:this.messages.blogComment != &quot;&quot;'>
      <p><data:this.messages.blogComment/></p>
      </b:if>
      <b:include data='post' name='commentFormIframeSrc'/>
      <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='90px' id='comment-editor' name='comment-editor' src='' width='100%'/>
      <data:post.cmtfpIframe/>
      <script type='text/javascript'> BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);
      </script>
    </div>
  </b:includable>
          <b:includable id='commentFormIframeSrc' var='post'>
    <a expr:href='data:post.commentFormIframeSrc + &quot;&amp;skin=soho&quot;' id='comment-editor-src'/>
  </b:includable>
          <b:includable id='commentItem' var='comment'>
    <div class='comment' expr:id='&quot;c&quot; + data:comment.id'>
      <b:include cond='data:blog.enabledCommentProfileImages' name='commentAuthorAvatar'/>
      <div class='comment-block'>
        <div class='comment-author'>
          <b:if cond='data:comment.authorUrl'>
            <b:message name='messages.authorSaidWithLink'>
              <b:param expr:value='data:comment.author' name='authorName'/>
              <b:param expr:value='data:comment.authorUrl' name='authorUrl'/>
            </b:message>
            <b:else/>
            <b:message name='messages.authorSaid'>
              <b:param expr:value='data:comment.author' name='authorName'/>
            </b:message>
          </b:if>
        </div>
        <div expr:class='&quot;comment-body&quot; + (data:comment.isDeleted ? &quot; deleted&quot; : &quot;&quot;)'><data:comment.body/></div>
        <div class='comment-footer'>
      <span class='comment-timestamp'><a expr:href='data:comment.url' title='comment permalink'><data:comment.timestamp/></a><b:include data='comment' name='commentDeleteIcon'/></span>
        </div>
      </div>
    </div>
  </b:includable>
          <b:includable id='commentList' var='comments'>
  <div id='comments-block'><b:loop values='data:comments' var='comment'><b:include data='comment' name='commentItem'/></b:loop></div>
  </b:includable>
          <b:includable id='commentPicker' var='post'>
    <b:if cond='data:post.allowComments'>
    <!-- Post Commments Title -->
      <div class='title-wrap comments-title'>
      <h3><data:messages.postAComment/></h3>
      <a class='all-comments'><data:post.numberOfComments/> <data:messages.comments/></a>
      </div>
    </b:if>
    <div class='comments-msg-alert'>* Please Don&#39;t Spam Here. All the Comments are Reviewed by Admin.</div>
    <b:if cond='data:view.isSingleItem and data:post.allowComments'>
      <b:include data='post' name='comments'/>
    </b:if>
  </b:includable>
          <b:includable id='comments' var='post'>
    <section class='comments threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
      <b:class cond='data:post.numberOfComments != 0' name='has-comments'/>
      <b:class cond='data:post.numberOfComments == 0' name='no-comments'/>
      <a name='comments'/>
      <b:if cond='data:post.embedCommentForm'>
        <b:include name='commentsTitle'/>
        <b:if cond='data:post.numberOfComments != 0'>
          <div class='comments-content'>
          <div id='comment-holder'><data:post.commentHtml/></div>
          </div>
        </b:if>
        <b:if cond='data:post.allowNewComments'>
          <b:include data='post' name='commentForm'/>
        </b:if>
      <b:if cond='data:post.allowNewComments'><a class='btn' href='javascript:;' id='show-comment-form'><data:messages.postAComment/><b:if cond='data:post.numberOfComments == 0'> (<data:post.numberOfComments/>)</b:if></a></b:if>
        <b:if cond='!data:post.allowNewComments'>
          <b:if cond='data:post.noNewCommentsText and (data:post.numberOfComments != 0)'>
          <p class='comments-message no-new-comments'><data:post.noNewCommentsText/><em>*</em></p>
          </b:if>
        </b:if>
        <b:else/>
        <p class='comments-message'>Please Select Embedded Mode To show the Comment System.<em>*</em></p>
      </b:if>
    </section>
  </b:includable>
          <b:includable id='commentsLink'>
    <a class='comment-link' expr:href='data:post.commentsUrl' expr:onclick='data:post.commentsUrlOnclick'>
      <b:if cond='data:post.numberOfComments &gt; 0'>
      <b:message name='messages.numberOfComments'><b:param expr:value='data:post.numberOfComments' name='numComments'/></b:message>
      <b:else/><data:messages.postAComment/></b:if>
    </a>
  </b:includable>
          <b:includable id='commentsLinkIframe'>
    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numberOfComments' expr:data-onclick='data:post.commentsUrlOnclick' expr:data-post-url='data:post.url' expr:data-url='data:post.url.canonical.http'> </span>
  </b:includable>
          <b:includable id='commentsTitle'>
    <!-- Comments Title -->
    <b:if cond='data:post.allowNewComments'>
    <b:if cond='data:this.messages.blogComment'><p class='comments-message'><data:this.messages.blogComment/></p></b:if>
      <b:else/>
      <b:if cond='data:post.noNewCommentsText and (data:post.numberOfComments == 0)'>
        <p class='comments-message no-new-comments'><data:post.noNewCommentsText/><em>*</em></p>
      </b:if>
    </b:if>
  </b:includable>
          <b:includable id='defaultAdUnit'>
    <ins class='adsbygoogle' data-ad-format='fluid' data-ad-layout-key='-6t+ed+2i-1n-4w' data-full-width-responsive='false' expr:data-ad-client='data:adClientId ?: data:blog.adsenseClientId' expr:data-ad-host='data:blog.adsenseHostId' expr:data-analytics-uacct='data:blog.analyticsAccountNumber' expr:style='data:style ?: &quot;display: block;margin: auto&quot;' style='display:block;margin:auto;'/>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </b:includable>
          <b:includable id='emailPostIcon'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='facebookShare'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='feedLinks'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='feedLinksBody' var='links'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='footerBylines' var='post'>
    <!-- Post Footer Extras -->
    <b:include data='post' name='postLabels'/>
    <b:include data='post' name='postNavigation'/>
  </b:includable>
          <b:includable id='googlePlusShare'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='headerByline' var='post'>
    <!-- Post Header Meta: Blogger profile name/photo removed; timestamp retained. -->
    <div class='post-snip'><b:include data='post' name='postTimestamp'/></div>
  </b:includable>
          <b:includable id='homePageLink'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='iframeComments' var='post'><b:comment>Replaced</b:comment></b:includable>
          <b:includable id='indexPost' var='post'>
      <!-- Index Post Content -->
      <b:include data='post' name='postFeaturedImage'/>
  </b:includable>
          <b:includable id='inlineAd' var='post'>
    <b:if cond='!data:view.isPreview'>
      <b:if cond='data:i != 0'>
        <b:if cond='data:post.includeAd and data:post.adNumber'>
          <b:if cond='data:this.adCode or data:this.adClientId or data:blog.adsenseClientId'>
            <div expr:class='&quot;index-post post-ad-type post-ad-&quot; + data:i'>
            <div class='inline-ad-wrap'><div class='inline-ad'><b:if cond='data:this.adCode != &quot;&quot;'><data:this.adCode/><b:else/><b:if cond='data:this.adClientId or data:blog.adsenseClientId'><b:include name='defaultAdUnit'/></b:if></b:if></div></div>
            </div>
          </b:if>
        </b:if>
      </b:if>
    </b:if>
  </b:includable>
          <b:includable id='itemPost' var='post'>
    <!-- Item Post Content -->
    <div class='post-inner-area'>
      <b:include data='post' name='postMeta'/>
      <b:include data='post' name='postHeader'/>
      <b:include data='post' name='postBody'/>
      <b:include cond='data:view.isPost' data='post' name='footerBylines'/>
    </div>
    <b:include cond='data:view.isPost' data='post' name='postFooter'/>
  </b:includable>
          <b:includable id='linkShare'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='manageComments'>
  <a expr:href='data:post.manageCommentsUrl' expr:onclick='data:post.manageCommentsUrlOnclick'><b:message name='messages.manageComments'/></a>
  </b:includable>
          <b:includable id='nextPageLink'>
  <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:messages.olderPosts'><data:messages.olderPosts/></a>
  </b:includable>
          <b:includable id='otherSharingButton'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='platformShare'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='post' var='post'>
    <!-- Post Index -->
    <b:if cond='data:view.isMultipleItems'><b:include data='post' name='indexPost'/></b:if>
    <!-- Post Item -->
    <b:if cond='data:view.isSingleItem'><b:include data='post' name='itemPost'/></b:if>
  </b:includable>
          <b:includable id='postAuthor'>
  <span class='byline post-author vcard'>
    <span class='post-author-label'>
      <data:byline.label/>
    </span>
    <span class='fn'>
      <b:if cond='data:post.author.profileUrl'>
        <meta expr:content='data:post.author.profileUrl'/>
        <a class='g-profile' expr:href='data:post.author.profileUrl' rel='author' title='author profile'>
          <span><data:post.author.name/></span>
        </a>
      <b:else/>
        <span><data:post.author.name/></span>
      </b:if>
    </span>
  </span>
</b:includable>
          <b:includable id='postBody' var='post'>
    <!-- Post Body Entry Content-->
    <div class='post-body entry-content' id='postBody'>
      <!-- Ads before post content, if post page. -->
      <b:if cond='data:view.isPost'><div id='top-ad-placeholder'/>
      </b:if><data:post.body/>
    </div>
    <!-- Ads after post content, if post page. -->
    <b:if cond='data:view.isPost'><div id='bottom-ad-placeholder'/>
    </b:if>
  </b:includable>
          <b:includable id='postBodySnippet' var='post'>
    <b:include data='post' name='postBody'/>
  </b:includable>
          <b:includable id='postBreadcrumbs' var='post'>
    <!-- Post Breadcrumbs -->
    <nav id='breadcrumb'><a expr:href='data:blog.homepageUrl'>
        <data:messages.home/></a>
      <b:if cond='data:post.labels'><em class='delimiter'/><a class='b-label' expr:href='data:post.labels.last.url'><data:post.labels.last.name/></a></b:if><em class='delimiter'/><span class='current'>
        <b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></span>
    </nav>
    <script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;, &quot;@type&quot;: &quot;BreadcrumbList&quot;, &quot;@id&quot;: &quot;#Breadcrumb&quot;, &quot;itemListElement&quot;: [{ &quot;@type&quot;: &quot;ListItem&quot;, &quot;position&quot;: 1, &quot;item&quot;: { &quot;name&quot;: &quot;<data:messages.home/>&quot;, &quot;@id&quot;: &quot;<data:blog.homepageUrl.jsonEscaped/>&quot; } },{ &quot;@type&quot;: &quot;ListItem&quot;, &quot;position&quot;: 2, &quot;item&quot;: { &quot;name&quot;: &quot;<b:if cond='data:post.labels'><data:post.labels.last.name/></b:if>&quot;, &quot;@id&quot;: &quot;<data:post.labels.last.url.jsonEscaped/>&quot; } },{ &quot;@type&quot;: &quot;ListItem&quot;, &quot;position&quot;: 3, &quot;item&quot;: { &quot;name&quot;: &quot;<data:post.title/>&quot;, &quot;@id&quot;: &quot;<data:post.url.jsonEscaped/>&quot; } }] }
    </script>
  </b:includable>
          <b:includable id='postCommentsAndAd' var='post'>
    <!-- Post Content Index and Item -->
    <article class='blog-post hentry' itemscope='itemscope' itemtype='https://schema.org/CreativeWork'>
      <b:class cond='data:view.isMultipleItems' expr:name='&quot;post-filter post-&quot; + data:i'/>
      <b:class cond='data:view.isSingleItem' name='item-post'/>
      <b:include data='post' name='post'/>
    </article>
    <b:include cond='data:view.isPost' data='post' name='scriptTime'/>
    <!-- Comments -->
    <b:if cond='data:view.isSingleItem and data:post.allowComments'>
      <div class='comments-section'>
        <b:include data='post' name='threadedCommentsDisqus'/>
        <b:include data='post' name='commentPicker'/>
      </div>
    </b:if>
  </b:includable>
          <b:includable id='postCommentsLink'>
    <b:if cond='data:view.isMultipleItems'>
      <span class='byline post-comment-link container'>
        <b:include cond='data:post.commentSource != 1' name='commentsLink'/>
        <b:include cond='data:post.commentSource == 1' name='commentsLinkIframe'/>
      </span>
    </b:if>
  </b:includable>
          <b:includable id='postFeaturedImage' var='post'>
  <!-- Post Featured Image on Index -->
  <div class='post-filter-image' itemprop='image' itemscope='itemscope' itemtype='https://schema.org/ImageObject'>
      <a class='post-filter-inner' expr:href='data:post.url'>
      <span class='post-filter-link'>
      <b:if cond='data:post.featuredImage'>
          <img class='snip-thumbnail lazy-img' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' expr:data-src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' expr:src='data:post.featuredImage.isYouTube ? resizeImage(data:post.featuredImage.youtubeMaxResDefaultUrl.jsonEscaped , 400, &quot;16:9&quot;) : resizeImage(data:post.featuredImage , 400, &quot;16:9&quot;)' height='225' itemprop='url' loading='lazy' width='400'/>
          <b:else/>
          <img class='snip-thumbnail lazy-img' data-src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png' decoding='async' expr:alt='data:post.title ? data:post.title : data:messages.noTitle' loading='lazy' src='https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w680/nth.png'/>
      </b:if>
      </span>
      <b:class expr:name='data:post.featuredImage.isYouTube ? &quot;video-nos&quot; : &quot;image-nos&quot;'/>
      </a>
      <div class='piki-hero-flow'>
      <span class='post-tag'><data:post.labels.last.name/></span>
        <b:include data='post' name='postHeader'/>
        <b:include cond='data:view.isMultipleItems' data='post' name='headerByline'/>
      </div>
  </div>
  </b:includable>
          <b:includable id='postFooter' var='post'>
    <!-- Post Footer Itens -->
    <div class='post-footer'>
      <!-- Post Labels, Reactions, Share, Navigation, About Author an Related Posts -->
      <b:include cond='data:view.isPost' data='post' name='postInnerAds'/>
    </div>
  </b:includable>
          <b:includable id='postFooterAuthorProfile' var='post'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='postHeader' var='post'>
    <b:include cond='data:view.isPost' data='post' name='postBreadcrumbs'/>
    <b:include data='post' name='postTitle'/>
    <b:include cond='data:view.isPost' data='post' name='postsByline'/>
  </b:includable>
          <b:includable id='postInnerAds' var='post'>
  <b:if cond='data:view.isPost'><div id='post-placeholder'/></b:if>
  </b:includable>
          <b:includable id='postJumpLink' var='post'>
  <b:if cond='data:view.isMultipleItems'><a class='read-more' expr:href='data:post.url'><data:blog.jumpLinkMessage/></a></b:if>
  </b:includable>
          <b:includable id='postLabels' var='post'>
    <b:if cond='data:allBylineItems.labels'>
      <b:if cond='data:post.labels'>
        <div class='label-container'>
        <span><data:allBylineItems.labels.label/></span>
        <div class='label-head Label'>
        <b:loop values='data:post.labels' var='label'><a class='label-link' expr:href='data:label.url' rel='tag'><data:label.name/></a></b:loop>
        </div>
        </div>
      </b:if>
    </b:if>
  </b:includable>
          <b:includable id='postLocation'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='postMeta' var='post'>
    <b:if cond='!data:view.isPage'>
    <script type='application/ld+json'>{&quot;@context&quot;:&quot;https://schema.org&quot;,&quot;@type&quot;:&quot;NewsArticle&quot;,&quot;mainEntityOfPage&quot;:{&quot;@type&quot;:&quot;WebPage&quot;,&quot;@id&quot;:&quot;<data:post.url.canonical.jsonEscaped/>&quot;},&quot;headline&quot;:&quot;<data:post.title.jsonEscaped/>&quot;,&quot;description&quot;:&quot;<data:post.snippets.short.jsonEscaped/>&quot;,&quot;image&quot;:[&quot;<data:post.featuredImage.jsonEscaped/>&quot;],&quot;datePublished&quot;:&quot;<data:post.date.iso8601.jsonEscaped/>&quot;,&quot;dateModified&quot;:&quot;<data:post.lastUpdated.iso8601.jsonEscaped/>&quot;,&quot;author&quot;:{&quot;@type&quot;:&quot;Person&quot;,&quot;name&quot;:&quot;<data:post.author.name.jsonEscaped/>&quot;},&quot;publisher&quot;:{&quot;@type&quot;:&quot;Organization&quot;,&quot;name&quot;:&quot;<data:blog.title/>&quot;,&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,&quot;url&quot;:&quot;https://lh3.googleusercontent.com/ULB6iBuCeTVvSjjjU1A-O8e9ZpVba6uvyhtiWRti_rBAs9yMYOFBujxriJRZ-A=h60&quot;,&quot;width&quot;:206,&quot;height&quot;:60}}}</script>
    </b:if>
  </b:includable>
          <b:includable id='postMetadataJSONImage'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='postMetadataJSONPublisher'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='postNavigation' var='post'>
    <!-- Post Navigation Item -->
    <ul class='navigation-runs'>
      <li class='post-next'>
        <b:if cond='data:newerPageUrl'>
          <a class='next-post-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' rel='next'><div class='navigation-posts'><span><data:messages.newer/></span><p/></div></a>
          <b:else/>
        <a rel='next'><div class='navigation-posts post-MenuNews-open'><span><data:messages.newer/></span><p><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></p></div></a>
        </b:if>
      </li>
      <li class='post-prev'>
        <b:if cond='data:olderPageUrl'>
        <a class='prev-post-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' rel='previous'><div class='navigation-posts'><span><data:messages.older/></span><p/></div></a>
          <b:else/>
        <a rel='previous'><div class='navigation-posts post-MenuNews-open'><span><data:messages.older/></span><p><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></p></div></a>
        </b:if>
      </li>
    </ul>
  </b:includable>
          <b:includable id='postPagination'>
  <div class='blog-pager container' id='blog-pager'>
    <b:include cond='data:newerPageUrl' name='previousPageLink'/>
    <b:include cond='data:olderPageUrl' name='nextPageLink'/>
    <b:include cond='data:view.url != data:blog.homepageUrl' name='homePageLink'/>
  </div>
</b:includable>
          <b:includable id='postReactions'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='postRelated' var='post'><b:comment>Disabled &#8212; removed by requested article layout.</b:comment></b:includable>
          <b:includable id='postShareButtons' var='post'><b:comment>Disabled &#8212; custom article share bar is rendered below the post body.</b:comment></b:includable>
          <b:includable id='postShortMeta'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='postSummary' var='post'>
    <!-- Post Summary -->
  <p class='post-snippet'><b:eval expr='data:post.snippets.short snippet { length: 120 }'/></p>
  </b:includable>
          <b:includable id='postTimestamp' var='post'>
    <!-- Post Timestamp -->
  <b:if cond='data:allBylineItems.timestamp'><span class='post-date published' expr:datetime='data:post.date.iso8601'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span></b:if>
  </b:includable>
          <b:includable id='postTitle' var='post'>
    <!-- Post Title Index and Item -->
    <b:if cond='data:view.isMultipleItems'>
      <h2 class='entry-title vcard' itemprop='mainEntityOfPage' itemtype='https://schema.org/mainEntityOfPage'><a expr:href='data:post.url.canonical' expr:title='data:post.title ? data:post.title : data:messages.noTitle'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></a></h2>
    </b:if>
    <b:if cond='data:view.isSingleItem'>
    <h1 class='entry-title'><b:eval expr='data:post.title ? data:post.title : data:messages.noTitle'/></h1>
    </b:if>
  </b:includable>
          <b:includable id='postsByline' var='post'>
    <!-- Blogger profile photo/name intentionally omitted. -->
    <div class='all-flex'>
      <div class='post-inner-data flex'>
        <div class='post-inner-username'>
          <b:if cond='data:allBylineItems.timestamp'>
            <div class='post-times'><span class='post-date published' expr:datetime='data:post.date.iso8601'><b:eval expr='format(data:post.date, &quot;EEEE d MMMM YYYY&quot;)'/></span><span id='readTime'/></div>
          </b:if>
        </div>
      </div>
      <div class='post-inner-comments flex'>
        <b:if cond='data:post.allowComments'><span class='comment-bubble show'><data:post.numberOfComments/></span></b:if>
        <b:if cond='data:view.isPost'><div class='share-top'><i class='fas fa-share-alt'/></div></b:if>
      </div>
    </div>
  </b:includable>
          <b:includable id='previousPageLink'>
  <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:messages.newerPosts'> <data:messages.newerPosts/></a>
  </b:includable>
          <b:includable id='scriptTime' var='post'>
    <b:if cond='data:view.isPost and data:widgets.Blog.first.allBylineItems.timestamp'>
      <script> /*<![CDATA[*/ (function(){try{var el=document.getElementById("postBody")||document.querySelector(".post-body,.item-post .post-body");var rt=document.getElementById("readTime");if(!el||!rt)return;function get_text(e){var ret="";if(!e)return ret;for(var t=e.childNodes.length,n=0;n<t;n++){var o=e.childNodes[n];if(8!=o.nodeType)ret+=1!=o.nodeType?o.nodeValue:get_text(o)}return ret}var words=(get_text(el)||"").replace(/\s+/g," ").trim();var count=words?words.split(" ").length:0;var maincount=Math.max(1,Math.round(count/200));rt.textContent=maincount+" دقيقة قراءة";}catch(e){}})(); /*]]>*/</script>
    </b:if>
  </b:includable>
          <b:includable id='searchMessage'>
    <!-- Search Message -->
    <b:if cond='data:view.search.query'>
      <div class='queryMessage'>
      <b:if cond='data:posts.empty'><span class='query-info query-error'>&quot;<data:view.search.query/>&quot;</span><b:else/><span class='query-info query-success'>&quot;<data:view.search.query/>&quot;</span></b:if>
      </div>
    </b:if>
    <b:if cond='data:view.search.label'>
      <div class='queryMessage'>
      <b:if cond='data:posts.empty'><span class='query-info query-error'><data:view.search.label/></span><b:else/><span class='query-info query-success'><data:view.search.label/></span></b:if>
      </div>
    </b:if>
    <b:if cond='data:view.isArchive'>
      <div class='queryMessage'>
      <b:if cond='data:posts.empty'><span class='query-info query-error'><data:view.archive.rangeMessage/></span><b:else/><span class='query-info query-success'><data:view.archive.rangeMessage/></span></b:if>
      </div>
    </b:if>
      <b:if cond='data:view.isError'><div class='errorPage'>
  <h3>404</h3>
  <h4>الصفحة غير موجودة</h4>
  <p>ربما تم نقل الرابط أو حذفه. يمكنك العودة للرئيسية أو تصفح الأقسام.</p>
  <p style='margin:16px 0;'>
    <a class='homepage' expr:href='data:blog.homepageUrl' style='display:inline-block;margin:6px;padding:10px 18px;background:linear-gradient(135deg,#b8860b,#d4af37);color:#1a120b;border-radius:8px;font-weight:700;text-decoration:none;'>الصفحة الرئيسية</a>
  </p>
  <p style='font-size:14px;opacity:.85;'>
    <a expr:href='data:blog.homepageUrl + &quot;/p/blog-page_228.html&quot;'>من نحن</a> &#183;
    <a expr:href='data:blog.homepageUrl + &quot;/p/blog-page_968.html&quot;'>اتصل بنا</a> &#183;
    <a expr:href='data:blog.homepageUrl + &quot;/p/blog-page_30.html&quot;'>سياسة الخصوصية</a>
  </p>
</div></b:if>
  </b:includable>
          <b:includable id='sharingButton'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='sharingButtonContent'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='sharingButtons'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='sharingButtonsMenu'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='sharingPlatformIcon'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='snippetedPostByline'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='snippetedPostContent'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='snippetedPostThumbnail'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='snippetedPostTitle'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='snippetedPosts'><b:comment>Disabled</b:comment></b:includable>
          <b:includable id='threadedCommentForm' var='post'>
    <div class='comment-form'>
      <a name='comment-form'/>
      <b:if cond='data:this.messages.blogComment != &quot;&quot;'><p><data:this.messages.blogComment/></p></b:if>
      <b:include data='post' name='commentFormIframeSrc'/>
      <iframe allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' expr:height='data:cmtIframeInitialHeight ?:&quot;90px&quot;' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'/>
      <data:post.cmtfpIframe/>
      <script type='text/javascript'>BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;);</script>
    </div>
  </b:includable>
          <b:includable id='threadedCommentJs' var='post'>
    <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
    <b:template-script inline='true' name='threaded_comments'/>
    <script type='text/javascript'>blogger.widgets.blog.initThreadedComments(<data:post.commentJso/>,<data:post.commentMsgs/>,<data:post.commentConfig/>);</script>
  </b:includable>
          <b:includable id='threadedComments' var='post'>
    <section class='comments threaded' expr:data-embed='data:post.embedCommentForm' expr:data-num-comments='data:post.numberOfComments' id='comments'>
      <a name='comments'/>
      <div class='comments-content'>
      <b:if cond='data:post.embedCommentForm'><b:include data='post' name='threadedCommentJs'/></b:if>
      <div id='comment-holder'><data:post.commentHtml/></div>
      </div>
      <p class='comment-footer'><b:if cond='data:post.allowNewComments'><b:include data='post' name='threadedCommentForm'/><b:else/><data:post.noNewCommentsText/></b:if></p>
      <b:if cond='data:showCmtPopup'>
      <div id='comment-popup'><iframe allowtransparency='allowtransparency' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'/></div>
      </b:if>
    </section>
  </b:includable>
          <b:includable id='threadedCommentsDisqus' var='post'>
    <script type='text/javascript'>
      var disqus_blogger_current_url = &quot;<data:blog.canonicalUrl/>&quot;;
        if (!disqus_blogger_current_url.length) { disqus_blogger_current_url = &quot;<data:blog.url/>&quot;; }
        var disqus_blogger_homepage_url = &quot;<data:blog.homepageUrl/>&quot;;
        var disqus_blogger_canonical_homepage_url = &quot;<data:blog.canonicalHomepageUrl/>&quot;;
    </script>
  </b:includable>
          <b:includable id='tooltipCss'>
  <!-- LINT.IfChange -->
  <style>
    .post-body a.b-tooltip-container {
      position: relative;
      display: inline-block;
    }

    .post-body a.b-tooltip-container .b-tooltip {
      display: block !important;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-20%, 1px);
      visibility: hidden;
      opacity: 0;
      z-index: 1;
      transition: opacity 0.2s ease-in-out;
    }

    .post-body a.b-tooltip-container .b-tooltip iframe {
      width: 200px;
      height: 198px;
      max-width: none;
      border: none;
      border-radius: 20px;
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    }

    @media (hover: hover) {
      .post-body a.b-tooltip-container:hover .b-tooltip {
        visibility: visible;
        opacity: 1;
      }
    }
  </style>
  <!-- LINT.ThenChange(//depot/google3/java/com/google/blogger/b2/layouts/widgets/v2-style.css) -->
</b:includable>
        </b:widget>
      </b:section>
      <div id='custom-ads-placeholder'>
        <b:section cond='data:view.isPost' id='upper-ad' maxwidgets='1' name='Inside Post Ads' showaddelement='no'>
          <b:widget id='HTML8' locked='true' title='إعلان أعلى كل موضوع' type='HTML' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'/>
            </b:widget-settings>
            <b:includable id='main'>
            <div class='widget-content'><data:content/></div>
            </b:includable>
          </b:widget>
        </b:section>
        <b:section cond='data:view.isPost' id='lower-ad' maxwidgets='1' name='Inside Post Ads' showaddelement='no'>
          <b:widget id='HTML9' locked='true' title='إعلان أسفل كل موضوع' type='HTML' version='2' visible='false'>
            <b:widget-settings>
              <b:widget-setting name='content'/>
            </b:widget-settings>
            <b:includable id='main'>
              <div class='widget-content'><data:content/></div>
            </b:includable>
          </b:widget>
        </b:section>
      </div>
      <b:if cond='data:view.isPost or data:view.isLayoutMode'>
        <div id='main-ads-post'>
          <b:section class='main-ads-pikihome' id='main-ads-below' maxwidgets='2' name='Ads Placement' showaddelement='yes'>
            <b:widget id='HTML7' locked='true' title='إعلان' type='HTML' version='2' visible='false'>
              <b:widget-settings>
                <b:widget-setting name='content'/>
              </b:widget-settings>
              <b:includable id='main'>
               <div class='widget-content'><data:content/></div>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
      </b:if>
      <b:if cond='data:view.isHomepage'>
    <div class='flex-section' id='footer-hall'>
      <b:section class='raw-box container' id='room-box1' maxwidgets='1' name='Bottom Feature Posts (A)' showaddelement='yes'>
        <b:widget id='HTML2' locked='false' title='' type='HTML' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='content'><![CDATA[<!-- ==========================================================
     ويدجت الفيلسوف - فكرة تستحق القراءة
     نفس ألوان ويدجت الفيلسوف + ضبط الهاتف
     ========================================================== -->

<style>
.alf-idea-widget,
.alf-idea-widget *,
.alf-idea-widget *::before,
.alf-idea-widget *::after {
  box-sizing: border-box;
}

.alf-idea-widget {
  --idea-bg-main: #0b0d12;
  --idea-bg-card: #11151d;
  --idea-gold: #c9a227;
  --idea-gold-light: #f4d35e;
  --idea-text: #eee7d2;

  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  direction: rtl;
  font-family: "Segoe UI", Tahoma, Arial, sans-serif;
  color: var(--idea-text);
}

.alf-idea-box {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 18px;
  background: linear-gradient(
    145deg,
    #11151d 0%,
    #0b0d12 55%,
    #15120b 100%
  );
  border: 1px solid rgba(201,162,39,.45);
  border-radius: 16px;
  box-shadow:
    0 10px 30px rgba(0,0,0,.35),
    inset 0 1px 0 rgba(255,255,255,.03);
  overflow: hidden;
}

.alf-idea-title {
  margin: 0 0 12px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 7px;
  color: var(--idea-gold-light);
  font-size: 15px;
  line-height: 1.5;
  font-weight: 700;
}

.alf-idea-title::before {
  content: "💡";
  font-size: 15px;
  flex: 0 0 auto;
}

/* الإطار الداخلي */
.alf-idea-inner {
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 1px;
  border-radius: 13px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    #c9a227,
    #f4d35e,
    #7f681b,
    #c9a227
  );
  background-size: 100% 100%;
}

@keyframes alfIdeaBorder {
  0% { transform: translateX(0); }
  100% { transform: translateX(0); }
}

.alf-idea-content {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 15px;
  border-radius: 12px;
  background: linear-gradient(
    145deg,
    #11151d 0%,
    #0b0d12 100%
  );
  overflow: hidden;
}

.alf-idea-image {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 220px;
  object-fit: cover;
  margin: 0 0 13px;
  border-radius: 10px;
  border: 1px solid rgba(201,162,39,.30);
}

.alf-idea-post-title {
  margin: 0 0 9px;
  color: var(--idea-gold-light);
  font-size: 17px;
  line-height: 1.7;
  font-weight: 700;
  overflow-wrap: anywhere;
  word-break: normal;
}

.alf-idea-description {
  margin: 0 0 14px;
  color: #d5cebc;
  font-size: 14px;
  line-height: 1.9;
  overflow-wrap: anywhere;
  word-break: normal;
}

.alf-idea-read {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  min-height: 44px;
  padding: 9px 13px;
  border: 1px solid rgba(201,162,39,.70);
  border-radius: 10px;
  background: linear-gradient(
    145deg,
    #27231a 0%,
    #17150f 50%,
    #0e0e0c 100%
  );
  color: var(--idea-gold-light);
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;
  box-shadow:
    0 4px 13px rgba(0,0,0,.25),
    inset 0 1px 0 rgba(255,215,0,.08);
  transition:
    transform .2s ease,
    border-color .2s ease,
    box-shadow .2s ease;
}

.alf-idea-read:hover {
  transform: translateY(-1px);
  border-color: var(--idea-gold-light);
  box-shadow:
    0 6px 18px rgba(0,0,0,.35),
    0 0 13px rgba(201,162,39,.18);
}

.alf-idea-read:active {
  transform: translateY(0);
}

/* ==========================================================
   الهاتف
   ========================================================== */

@media (max-width: 600px) {

  .alf-idea-box {
    padding: 13px;
    border-radius: 14px;
  }

  .alf-idea-title {
    margin-bottom: 10px;
    font-size: 14px;
    gap: 6px;
  }

  .alf-idea-inner {
    border-radius: 11px;
  }

  .alf-idea-content {
    padding: 12px;
    border-radius: 10px;
  }

  .alf-idea-image {
    max-height: 180px;
    margin-bottom: 11px;
    border-radius: 8px;
  }

  .alf-idea-post-title {
    margin-bottom: 7px;
    font-size: 15px;
    line-height: 1.65;
  }

  .alf-idea-description {
    margin-bottom: 12px;
    font-size: 13px;
    line-height: 1.8;
  }

  .alf-idea-read {
    min-height: 42px;
    padding: 8px 11px;
    font-size: 13px;
    border-radius: 9px;
  }
}

/* شاشات الهاتف الضيقة جدًا */
@media (max-width: 360px) {

  .alf-idea-box {
    padding: 10px;
  }

  .alf-idea-content {
    padding: 10px;
  }

  .alf-idea-post-title {
    font-size: 14px;
  }

  .alf-idea-description {
    font-size: 12.5px;
  }
}
</style>

<!-- ==========================================================
     MODULE: IDEA WIDGET
     ========================================================== -->

<div class="alf-idea-widget" dir="rtl">
  <div class="alf-idea-box">

    <h3 class="alf-idea-title">فكرة تستحق القراءة</h3>

    <div class="alf-idea-inner">
      <div class="alf-idea-content" id="alfIdeaContent">
        جاري تحميل الفكرة...
      </div>
    </div>

  </div>
</div>

<script>
(function () {
  "use strict";

  var feedUrl =
    "https://alfaylasooof.blogspot.com/feeds/posts/default" +
    "?max-results=50&orderby=published&alt=json-in-script&callback=alfIdeaFeed";

  window.alfIdeaFeed = function (data) {

    var entries =
      data &&
      data.feed &&
      data.feed.entry
        ? data.feed.entry
        : [];

    var content =
      document.getElementById("alfIdeaContent");

    if (!content || !entries.length) {
      if (content) {
        content.innerHTML =
          "لا توجد مقالات متاحة حاليًا.";
      }
      return;
    }

    var candidates = [];

    var keywords = [
      "فلسفة",
      "فكر",
      "فكرة",
      "تحليل",
      "تحليلي",
      "رأي",
      "آراء",
      "قراءة",
      "ثقافة",
      "مجتمع",
      "تاريخ",
      "تأمل",
      "قضية",
      "وجهة نظر"
    ];

    entries.forEach(function (entry) {

      var title =
        entry.title &&
        entry.title.$t
          ? entry.title.$t
          : "";

      var url = "";

      if (entry.link) {
        entry.link.some(function (link) {
          if (link.rel === "alternate") {
            url = link.href;
            return true;
          }
          return false;
        });
      }

      var labels = "";

      if (entry.category) {
        labels = entry.category
          .map(function (cat) {
            return cat.term || "";
          })
          .join(" ");
      }

      var searchable =
        (title + " " + labels).toLowerCase();

      var matched = keywords.some(function (keyword) {
        return searchable.indexOf(
          keyword.toLowerCase()
        ) !== -1;
      });

      if (matched && url) {
        candidates.push(entry);
      }
    });

    /* في حالة عدم وجود مقالات مطابقة */
    if (!candidates.length) {
      candidates = entries.filter(function (entry) {
        return entry.link;
      });
    }

    if (!candidates.length) {
      content.innerHTML =
        "لا توجد مقالات متاحة حاليًا.";
      return;
    }

    /* اختيار مختلف حسب اليوم */
    var today = new Date();

    var dayKey =
      today.getFullYear() +
      today.getMonth() +
      today.getDate();

    var index =
      Math.abs(dayKey) % candidates.length;

    var post = candidates[index];

    var title =
      post.title && post.title.$t
        ? post.title.$t
        : "فكرة تستحق القراءة";

    var url = "";

    if (post.link) {
      post.link.some(function (link) {
        if (link.rel === "alternate") {
          url = link.href;
          return true;
        }
        return false;
      });
    }

    var description = "";

    if (
      post.summary &&
      post.summary.$t
    ) {
      description = post.summary.$t;
    } else if (
      post.content &&
      post.content.$t
    ) {
      description = post.content.$t;
    }

    /* إزالة HTML من الوصف */
    var temp =
      document.createElement("div");

    temp.innerHTML = description;

    description =
      temp.textContent ||
      temp.innerText ||
      "";

    description =
      description
        .replace(/\s+/g, " ")
        .trim();

    if (description.length > 180) {
      description =
        description.substring(0, 180) + "…";
    }

    /* الصورة */
    var image = "";

    if (
      post.media$thumbnail &&
      post.media$thumbnail.url
    ) {
      image =
        post.media$thumbnail.url
          .replace(/\/s72-c\//, "/s600/");
    }

    if (image) {

      content.innerHTML =
        '<img class="alf-idea-image" ' +
        'src="' + image + '" ' +
        'alt="' + escapeHtml(title) + '" ' +
        'loading="lazy" decoding="async"' +

        '<h4 class="alf-idea-post-title">' +
        escapeHtml(title) +
        '</h4>' +

        '<p class="alf-idea-description">' +
        escapeHtml(description) +
        '</p>' +

        '<a class="alf-idea-read" ' +
        'href="' + url + '">' +
        'اقرأ المقال ←' +
        '</a>';

    } else {

      content.innerHTML =
        '<h4 class="alf-idea-post-title">' +
        escapeHtml(title) +
        '</h4>' +

        '<p class="alf-idea-description">' +
        escapeHtml(description) +
        '</p>' +

        '<a class="alf-idea-read" ' +
        'href="' + url + '">' +
        'اقرأ المقال ←' +
        '</a>';
    }
  };

  function escapeHtml(text) {

    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  var script =
    document.createElement("script");

  script.src = feedUrl;

  document.body.appendChild(script);

})();
</script>]]></b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
        </b:widget>
      </b:section>
    </div>
    </b:if>
    </main>
    <!-- Sidebar Wrapper -->
    <aside id='sidebar-container' itemscope='itemscope' itemtype='https://schema.org/WPSideBar' role='banner'>
      <b:section class='sidebar' id='sidebar' name='Sidebar Right' showaddelement='yes'>
        <b:widget id='LinkList77' locked='true' title='وسائل التواصل الاجتماعي' type='LinkList' version='2' visible='true'>
          <b:widget-settings>
            <b:widget-setting name='shownum'>3</b:widget-setting>
            <b:widget-setting name='sorting'>NONE</b:widget-setting>
            <b:widget-setting name='text-1'>whatsapp</b:widget-setting>
            <b:widget-setting name='link-1'>https://wa.me/qr/B5HTFWKX2LZDE1</b:widget-setting>
            <b:widget-setting name='text-0'>facebook</b:widget-setting>
            <b:widget-setting name='link-2'> https://youtube.com/@erfan_hamed?si=uVO6lyXcsGfcht5X</b:widget-setting>
            <b:widget-setting name='link-0'>https://www.facebook.com/zezoaboerfan</b:widget-setting>
            <b:widget-setting name='text-2'>youtube</b:widget-setting>
          </b:widget-settings>
          <b:includable id='main'>
            <b:include name='widget-title'/>
            <b:include name='content'/>
          </b:includable>
          <b:includable id='content'>
            <div class='widget-content'>
              <ul class='socialFilter colorful social'>
                <b:loop values='data:links' var='link'>
                <li><a expr:aria-label='data:link.name' expr:class='data:link.name' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'><data:link.name/></a></li>
                </b:loop>
              </ul>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </aside>
  </div>
</div>
<b:if cond='data:view.isHomepage'>
    <div class='flex-section' id='footer-room'>
    <b:section class='raw-box container' id='room-box2' maxwidgets='1' name='Bottom Feature Posts (B)' showaddelement='yes'/>
    </div>
    <div class='flex-section' id='footer-ads'>
      <b:section class='main-ads-pikihome container' id='main-ads2' maxwidgets='2' name='Ads Placement' showaddelement='yes'>
        <b:widget id='HTML15' locked='false' title='Ads' type='HTML' version='2' visible='false'>
          <b:widget-settings>
            <b:widget-setting name='content'/>
          </b:widget-settings>
          <b:includable id='main'>
              <div class='widget-content'><data:content/></div>
              </b:includable>
        </b:widget>
      </b:section>
    </div>
    </b:if>
<div class='flex-footer' id='bnfg-gx3s3' itemscope='itemscope' itemtype='https://schema.org/WPFooter' role='banner'>
    <div class='flex-ft footer-data'>
        <div class='container'>
        <div class='fl-footer'>
            <b:section class='cvcx-Fcxv' id='cvcx-Fcxv' maxwidgets='3' name='Footer Section (A)' showaddelement='yes'>
              <b:widget id='HTML1' locked='false' title='' type='HTML' visible='true'>
                <b:widget-settings>
                  <b:widget-setting name='content'><![CDATA[<!-- ========================================================== -->
<!-- =========================================================
     MODULE: BACK TO TOP
     ========================================================= -->
<!-- ====== زر الصعود لأعلى الفرعوني المتوافق مع أدسنس ====== -->
<!-- ========================================================== -->
<style>
  #scroll-to-top {
    position: fixed;
    /* مسافة أمان مرتفعة للأعلى (85px) لعدم التداخل مع إعلانات أدسنس السفلية في الموبايل */
    bottom: 85px; 
    right: 25px;
    width: 50px;
    height: 50px;
    /* خلفية متناسقة مع التدرج الفرعوني لمدونتك */
    background: linear-gradient(135deg, #0a1f3d, #0d2a4a);
    /* إطار ذهبي فرعوني ينبض */
    border: 2px solid #c9a227;
    border-radius: 50%;
    color: #ffd700;
    font-size: 24px;
    cursor: pointer;
    z-index: 99990; /* أقل بمرتبة من النوافذ المنبثقة لمنع التداخل */
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    /* تأثير اختفاء افتراضي */
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
  }

  @keyframes pharaohScrollPulse {
    0% { opacity: .88; }
    100% { opacity: 1; }
  }

  /* عند ظهور الزر بنجاح */
  #scroll-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  /* تأثير تمرير الماوس */
  #scroll-to-top:hover {
    background: linear-gradient(135deg, #4da6ff, #0066cc);
    border-color: #ffd700;
    transform: scale(1.1);
  }

  /* تحسينات متوافقة مع الموبايل والشاشات الصغيرة لحماية إعلانات أدسنس */
  @media (max-width: 480px) {
    #scroll-to-top {
      bottom: 90px; /* زيادة المساحة في الموبايل لأن إعلانات أدسنس الملتصقة تأخذ مساحة أكبر */
      right: 15px;
      width: 45px;
      height: 45px;
      font-size: 20px;
    }
  }
</style>

<!-- الزر الفرعوني (استخدام رمز السهم الفرعوني المتجه لأعلى 𓂻 أو سهم أنيق 🛕 أو ▲) -->
<button id="scroll-to-top" type="button" title="الصعود للأعلى" aria-label="الصعود إلى أعلى الصفحة">▲</button>

<script>
(function() {
  const scrollBtn = document.getElementById('scroll-to-top');

  // مراقبة التمرير لإظهار أو إخفاء الزر
  window.addEventListener('scroll', () => {
    // يظهر الزر فقط بعد نزول المستخدم 400 بكسل لأسفل الصفحة (تجربة مستخدم مثالية لأدسنس)
    if (window.scrollY > 400) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  // كود الصعود السلس للأعلى عند الضغط
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // صعود سلس ومريح للعين
    });
  });
})();
</script>
<!-- ========================================================== -->]]></b:widget-setting>
                </b:widget-settings>
                <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
              </b:widget>
            </b:section>
            <b:section class='cvcx-Fcxv list' id='FooterChecks-Service1' maxwidgets='3' name='Footer Section (B)' showaddelement='yes'/>
               <b:section class='cvcx-Fcxv list' id='FooterChecks-Service' maxwidgets='3' name='Footer Section (C)' showaddelement='yes'/>
        </div>
        <b:section class='xxex-xcc3' id='cvcx-Fcxv3' maxwidgets='3' name='Footer About Us' showaddelement='yes'>
          <b:widget id='Text1' locked='false' title='' type='Text' visible='true'>
            <b:includable id='main'>
  <b:include name='widget-title'/>
  <div class='widget-content'>
    <data:content/>
  </div>
</b:includable>
          </b:widget>
          <b:widget id='Profile1' locked='false' title='' type='Profile' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='showaboutme'>true</b:widget-setting>
              <b:widget-setting name='showlocation'>false</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main' var='this'>
  <b:include name='widget-title'/>
  <b:include name='content'/>
</b:includable>
            <b:includable id='authorProfileImage'>
  <img class='profile-img' expr:alt='data:messages.myPhoto' expr:height='data:authorPhoto.height' expr:src='data:authorPhoto.image' expr:width='data:authorPhoto.width'/>
</b:includable>
            <b:includable id='content'>
  <b:if cond='data:team'>
    <div class='widget-content team'>
      <b:include name='teamProfile'/>
    </div>
  <b:else/>
    <div class='widget-content individual'>
      <b:include name='userProfile'/>
    </div>
  </b:if>
</b:includable>
            <b:includable id='defaultProfileImage'>
  <div class='default-avatar'/>
</b:includable>
            <b:includable id='profileImage'>
  <b:if cond='data:authorPhoto.image'>
    <b:include name='authorProfileImage'/>
  <b:else/>
    <b:include name='defaultProfileImage'/>
  </b:if>
</b:includable>
            <b:includable id='teamProfile'>
  <ul>
    <b:loop values='data:authors' var='author'>
      <li>
        <div class='team-member'>
          <b:include data='author' name='teamProfileLink'/>
        </div>
      </li>
    </b:loop>
  </ul>
</b:includable>
            <b:includable id='teamProfileLink'>
  <a class='profile-link g-profile' expr:href='data:userUrl' rel='nofollow'>
    <b:include name='profileImage'/>
    <span class='profile-name'><data:display-name/></span>
  </a>
</b:includable>
            <b:includable id='userLocation'>
  <dd class='profile-data location'><data:location/></dd>
</b:includable>
            <b:includable id='userProfile'>
  <b:include name='userProfileImage'/>
  <b:include name='userProfileInfo'/>
</b:includable>
            <b:includable id='userProfileData'>
  <dt class='profile-data'>
    <a class='profile-link g-profile' expr:href='data:userUrl' rel='author nofollow'>
      <data:displayname/>
    </a>
  </dt>
</b:includable>
            <b:includable id='userProfileImage'>
  <a expr:href='data:userUrl' rel='nofollow'>
    <b:include name='profileImage'/>
  </a>
</b:includable>
            <b:includable id='userProfileInfo'>
  <div class='profile-info'>
    <dl class='profile-datablock'>
      <b:class cond='data:showlocation and data:location != &quot;&quot;' name='has-location'/>

      <b:include name='userProfileData'/>
      <b:include cond='data:showlocation and data:location != &quot;&quot;' name='userLocation'/>
      <b:include cond='data:aboutme != &quot;&quot;' name='userProfileText'/>
    </dl>
    <b:include name='viewProfileLink'/>
  </div>
</b:includable>
            <b:includable id='userProfileText'>
  <dd class='profile-textblock'>
    <data:aboutme/>
  </dd>
</b:includable>
            <b:includable id='viewProfileLink'>
  <a class='profile-link' expr:href='data:userUrl' rel='author nofollow'>
    <data:messages.viewMyCompleteProfile/>
  </a>
</b:includable>
          </b:widget>
          <b:widget id='LinkList7' locked='true' title='تابعنا' type='LinkList' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='sorting'>NONE</b:widget-setting>
              <b:widget-setting name='text-1'>youtube</b:widget-setting>
              <b:widget-setting name='link-1'>https://youtube.com/@erfan_hamed?si=uVO6lyXcsGfcht5X</b:widget-setting>
              <b:widget-setting name='text-0'>facebook-f</b:widget-setting>
              <b:widget-setting name='link-2'>https://wa.me/qr/B5HTFWKX2LZDE1</b:widget-setting>
              <b:widget-setting name='link-0'>https://www.facebook.com/zezoaboerfan</b:widget-setting>
              <b:widget-setting name='text-2'>whatsapp</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
            <b:include name='content'/>
            </b:includable>
            <b:includable id='content'>
            <div class='widget-content'>
                <ul class='colorful-ico colorful'>
                <b:loop values='data:links' var='link'><li expr:class='data:link.name'><a expr:aria-label='data:link.name' expr:class='data:link.name' expr:href='data:link.target' expr:title='data:link.name' rel='noopener noreferrer' target='_blank'/></li></b:loop>
                </ul>
            </div>
            </b:includable>
          </b:widget>
        </b:section>
       </div>
      </div>
    <div class='flex-ft cbvx-cx'>
        <div class='container footer-outer'>
        <b:section class='footer-copyright' id='footer-copyright' maxwidgets='1' name='Footer Attribution' showaddelement='no'>
          <b:widget id='HTML33' locked='true' title='Footer Copyright' type='HTML' version='2' visible='true'>
            <b:widget-settings>
              <b:widget-setting name='content'><![CDATA[<!-- =========================================================
     ودجت حقوق الطبع والنشر - تصميم مُصلح بدون شريط
     ========================================================= -->

<!-- =========================================================
     MODULE: FOOTER COPYRIGHT
     ========================================================= -->
<div class="ph-copyright-widget">
  <span class="copyright-text widget">
    © <span id="ph-current-year"></span> جميع الحقوق محفوظة لـ 
    <a href="https://www.facebook.com/zezoaboerfan" rel="nofollow" target="_blank" class="ph-author-link">Abdelazez Erfan</a>
  </span>
</div>

<style>
  .ph-copyright-widget {
    width: 100%;
    padding: 10px 0;
    margin: 0 auto;
    background: transparent !important;
    text-align: center;
    direction: rtl;
    box-sizing: border-box;
  }

  .ph-copyright-widget .copyright-text {
    font-size: 13px;
    color: #94a3b8;
    line-height: 1.6;
    display: inline-block;
    background: none !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    box-shadow: none !important;
  }

  .ph-copyright-widget .ph-author-link {
    color: #eab308 !important;
    text-decoration: none !important;
    font-weight: 700;
    transition: color 0.2s ease, text-shadow 0.2s ease;
    display: inline-block;
  }

  .ph-copyright-widget .ph-author-link:hover {
    color: #ffffff !important;
    text-shadow: 0 0 8px #eab308;
  }

  @media (max-width: 600px) {
    .ph-copyright-widget .copyright-text {
      font-size: 12px;
    }
  }
</style>

<script>
  (function() {
    var yearSpan = document.getElementById('ph-current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  })();
</script>]]></b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
                    <div class='widget-content'><data:content/></div>
                    </b:includable>
          </b:widget>
        </b:section>
            <b:section class='xvxc-ccvb-mbcv' id='xvxc-ccvb-mbcv' maxwidgets='1' name='Footer Menu' showaddelement='no'>
              <b:widget id='LinkList8' locked='true' title='Link List' type='LinkList' version='2' visible='false'>
                <b:includable id='main'>
                      <b:include name='content'/>
                    </b:includable>
                <b:includable id='content'>
                        <div class='widget-content'>
                        <ul><b:loop values='data:links' var='link'><li><a expr:href='data:link.target'><data:link.name/></a></li></b:loop></ul>
                        </div>
                    </b:includable>
              </b:widget>
            </b:section>
        </div>
    </div>
</div>
<!-- Cookie banner removed: Termly CMP is the site's consent-management system. -->
<b:if cond='data:view.isSingleItem'>
    <!-- Hidden Widgets -->
    <div id='hidden-widget-container' style='display:none'>
        <b:section class='hidden-widgets' deleted='true' id='hidden-widgets' maxwidgets='2' showaddelement='no'>
          <b:widget id='ContactForm1' locked='true' title='Contact form' type='ContactForm' version='2' visible='true'>
            <b:includable id='main'>
                    <b:include name='widget-title'/>
                    <b:include name='content'/>
                </b:includable>
            <b:includable id='content'>
                    <div class='contact-form-widget'>
                        <div class='form'>
                        <form name='contact-form'>
                        <input class='contact-form-name' expr:id='data:widget.instanceId + &quot;_contact-form-name&quot;' expr:placeholder='data:contactFormNameMsg' name='name' size='30' type='text' value=''/>
                        <input class='contact-form-email' expr:id='data:widget.instanceId + &quot;_contact-form-email&quot;' expr:placeholder='data:contactFormEmailMsg + &quot;*&quot;' name='email' size='30' type='text' value=''/>
                        <textarea class='contact-form-email-message' cols='25' expr:id='data:widget.instanceId + &quot;_contact-form-email-message&quot;' expr:placeholder='data:contactFormMessageMsg + &quot;*&quot;' name='email-message' rows='5'/>
                        <input class='contact-form-button contact-form-button-submit' expr:id='data:widget.instanceId + &quot;_contact-form-submit&quot;' expr:value='data:contactFormSendMsg' type='button'/>
                        <p class='contact-form-error-message' expr:id='data:widget.instanceId + &quot;_contact-form-error-message&quot;'/>
                        <p class='contact-form-success-message' expr:id='data:widget.instanceId + &quot;_contact-form-success-message&quot;'/>
                    </form>
                    </div>
                </div>
                </b:includable>
          </b:widget>
        </b:section>
  </div>
</b:if>
</div>
<b:include cond='data:view.isPost' name='share-box'/>
<div aria-hidden='true' class='overlay'/>

<!-- External plugins -->
<!-- =========================================================
     MODULE: JQUERY RUNTIME DEPENDENCY
     يستخدم فقط بواسطة وظائف القالب التي تعتمد على jQuery.
     ========================================================= -->

<script type='text/javascript'>
//<![CDATA[
(function(){
  var map={
    'facebook-f':'فيسبوك','facebook':'فيسبوك','youtube':'يوتيوب',
    'whatsapp':'واتساب','twitter':'إكس','instagram':'إنستغرام','telegram':'تيليغرام'
  };
  function apply(){
    document.querySelectorAll('ul.colorful-ico a, ul.social a').forEach(function(a){
      var k=((a.getAttribute('class')||'')+' '+(a.getAttribute('title')||'')).trim().split(/\s+/)[0];
      var label=map[k]||k;
      if(label) a.setAttribute('aria-label', label);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
//]]>
</script>
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'/>
<b:include name='theme-js'/>
<!-- إضافات القالب الأساسية فقط: القائمة والقارئ المتحرك -->
<script type='text/javascript'>
//<![CDATA[

/* شريط الأخبار المتحرك */
$(function(n){n.fn.lazyticker=function(){return this.each(function(){var n,t=0,e=$(".breaking-ticker .tickerNews");function i(){null!=n&&(clearInterval(n),n=null)}function c(){n=setInterval(function(){a(1)},5e3)}function a(n){var i,c,a;e.not(t).removeClass("active"),i=t,c=n,a=e.length,t=(i+c+a)%a,e.eq(t).addClass("active")}$(this).find(".widget-content").append('<div class="buttons-fix"><a class="prev" href="javascript:;" role="button"/><a class="next" href="javascript:;" role="button"/>'),jQuery(function(){e.first().addClass("active"),c(),$(".next").click(function(n){i(),a(1),c()}),$(".prev").click(function(n){i(),a(-1),c()})})})}});
/* تم حذف الإضافات غير المستخدمة لتقليل زمن التحميل وحجم القالب */
 //]]>
</script>

<!-- جافاسكربت القالب الأساسي &#8212; منظم وبدون eval أو ضغط/تشفير مبهم -->
<script type='text/javascript'>
//<![CDATA[
/**
 * الفيلسوف — Theme core (clean rewrite)
 * Replaces obfuscated packer/eval block.
 * يعتمد على jQuery وإضافتي القائمة وشريط الأخبار فقط
 */
(function ($) {
  "use strict";

  if (window.__alfaylasooofThemeLoaded) return;
  window.__alfaylasooofThemeLoaded = true;

  var CFG = {
    relatedPostsNum: (typeof relatedPostsNum === "number" ? relatedPostsNum : 3),
    postPerPage: (typeof postPerPage === "number" ? postPerPage : 7),
    noThumb: (typeof noThumb === "string" ? noThumb : "")
  };

  /* ---------- Helpers ---------- */
  function feedUrl(label, max) {
    var base = "/feeds/posts/summary";
    if (label && label !== "recent") {
      base = "/feeds/posts/summary/-/" + encodeURIComponent(label);
    }
    return base + "?alt=json&max-results=" + (max || CFG.relatedPostsNum);
  }

  function entryTitle(entry) {
    return entry.title && entry.title.$t ? entry.title.$t : "";
  }

  function entryUrl(entry) {
    var links = entry.link || [];
    for (var i = 0; i < links.length; i++) {
      if (links[i].rel === "alternate") return links[i].href;
    }
    return "#";
  }

  function entryThumb(entry) {
    if (entry.media$thumbnail && entry.media$thumbnail.url) {
      return entry.media$thumbnail.url.replace(/\/s72-c\//, "/s320-c/").replace(/=s72-c$/, "=s320-c");
    }
    if (entry.content && entry.content.$t) {
      var m = entry.content.$t.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (m) return m[1];
    }
    if (entry.summary && entry.summary.$t) {
      var m2 = entry.summary.$t.match(/<img[^>]+src=["']([^"']+)["']/i);
      if (m2) return m2[1];
    }
    return CFG.noThumb || "";
  }

  function entryDate(entry) {
    if (!entry.published || !entry.published.$t) return "";
    try {
      var d = new Date(entry.published.$t);
      if (isNaN(d.getTime())) return entry.published.$t.slice(0, 10);
      return d.toLocaleDateString("ar-EG", { year: "numeric", month: "short", day: "numeric" });
    } catch (e) {
      return "";
    }
  }

  /* ---------- Label feed loader (simple, label-aware) ---------- */
  function loadRelated($box) {
    if (!$box.length) return;
    var label = $box.attr("data-label") || "recent";
    var max = parseInt($box.attr("data-count"), 10) || CFG.relatedPostsNum;
    $box.html('<div class="loading-icon" aria-hidden="true"></div>');
    $.ajax({
      type: "GET",
      url: feedUrl(label, max + 2),
      dataType: "json",
      timeout: 8000,
      success: function (data) {
        var entries = (data.feed && data.feed.entry) || [];
        var current = window.location.pathname;
        var html = "";
        var n = 0;
        for (var i = 0; i < entries.length && n < max; i++) {
          var url = entryUrl(entries[i]);
          if (url.indexOf(current) !== -1 && current.length > 1) continue;
          var thumb = entryThumb(entries[i]);
          var title = entryTitle(entries[i]);
          var date = entryDate(entries[i]);
          html += '<div class="recbvf-bbv">';
          if (thumb) {
            html += '<a class="recbvf-bbv-thumb post-filter-link" href="' + url + '">' +
              '<img class="snip-thumbnail lazy-img" src="' + thumb + '" alt="" loading="lazy"/ decoding="async"</a>';
          }
          html += '<h2 class="entry-title"><a href="' + url + '">' + title + "</a></h2>";
          if (date) html += '<span class="post-date">' + date + "</span>";
          html += "</div>";
          n++;
        }
        if (!html) {
          $box.html('<div class="error-status">لا توجد نتائج</div>');
        } else {
          $box.html(html);
        }
      },
      error: function () {
        $box.html('<div class="error-status">تعذر تحميل المواضيع</div>');
      }
    });
  }

  /* ---------- Share popup windows ---------- */
  function bindShareWindows() {
    $(document).on("click", "a.window-piki, .window-piki", function (e) {
      var url = $(this).attr("data-url") || $(this).attr("href");
      if (!url || url === "#" || url.indexOf("javascript:") === 0) return;
      e.preventDefault();
      var w = parseInt($(this).attr("data-width"), 10) || 600;
      var h = parseInt($(this).attr("data-height"), 10) || 500;
      var left = Math.max(0, (screen.width - w) / 2);
      var top = Math.max(0, (screen.height - h) / 2);
      window.open(
        url,
        "share",
        "toolbar=0,status=0,width=" + w + ",height=" + h + ",top=" + top + ",left=" + left
      );
    });
  }


  /* ---------- Copy post link ---------- */
  function bindCopyLink() {
    $(document).on("click", ".copy-post button, #copy-btn", function (e) {
      e.preventDefault();
      var $input = $("#showlink");
      if (!$input.length) return;
      var val = $input.val();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(val);
      } else {
        $input[0].select();
        try { document.execCommand("copy"); } catch (err) {}
      }
      var $wrap = $(this).closest(".copy-post");
      $wrap.addClass("copied");
      setTimeout(function () { $wrap.removeClass("copied"); }, 1600);
    });
  }


  /* ---------- Ticker ---------- */
  function initTicker() {
    if (typeof $.fn.lazyticker === "function") {
      try { $(".ticker-pro, .breaking-ticker").lazyticker(); } catch (e) {}
    }
  }

  /* ---------- تحسين تحميل الصور ---------- */
  function initLazy() {
    var imgs=document.querySelectorAll("img[data-src]");
    if ("IntersectionObserver" in window) {
      var observer=new IntersectionObserver(function(entries,obs){
        entries.forEach(function(entry){
          if(!entry.isIntersecting)return;
          var img=entry.target,src=img.getAttribute("data-src");
          if(src){
            img.src=src;
            img.removeAttribute("data-src");
          }
          img.loading="lazy";
          img.decoding="async";
          obs.unobserve(img);
        });
      },{rootMargin:"300px 0px"});
      Array.prototype.forEach.call(imgs,function(img){observer.observe(img);});
    } else {
      Array.prototype.forEach.call(imgs,function(img){
        var src=img.getAttribute("data-src");
        if(src)img.src=src;
        img.removeAttribute("data-src");
        img.loading="lazy";
        img.decoding="async";
      });
    }
    $("img:not([loading])").attr("loading","lazy").attr("decoding","async");
  }


  /* ---------- Featured / raw-box label feeds (optional widgets) ---------- */
  function initLabelFeeds() {
    $(".raw-box[data-label], .crxx-blox[data-label], [data-feed-label]").each(function () {
      var $el = $(this);
      if ($el.data("feed-loaded")) return;
      $el.data("feed-loaded", true);
      var label = $el.attr("data-label") || $el.attr("data-feed-label") || "recent";
      var $target = $el.find(".widget-content, .BiggerRelated, .recbvf-bbv-featured").first();
      if (!$target.length) $target = $el;
      loadRelated($target.attr("data-label", label));
    });

  }

  /* ---------- Boot ---------- */
  $(function () {
        initTicker();
    initLazy();
    bindShareWindows();
    bindCopyLink();
    // Defer non-critical feed calls slightly
    setTimeout(initLabelFeeds, 200);
  });

})(jQuery);
//]]>
</script>

<!-- =========================================================
     FOOTER SCRIPTS ORDER (AdSense-safe, no eval/document.write)
     1) jQuery  2) lazyticker  3) theme-core  4) search
     5) comments UX  6) article tools  7) read-progress
     8) dynamic pager  9) theme toggle
     ========================================================= -->
<!-- SECTION: Search (Pharaoh header) -->
<script type='text/javascript'>
//<![CDATA[
(function($){
  $(function(){

    /* ===== Search ===== */
    $(document).on('click', '.search-button-flex', function(e){
      e.preventDefault();
      e.stopPropagation();
      var $box = $('#search-flex');
      $box.addClass('is-open').css('display','flex').hide().fadeIn(180);
      $box.find('.search-input').focus();
    });
    $(document).on('click', '.search-flex-close, .search-hidden', function(e){
      e.preventDefault();
      $('#search-flex').fadeOut(120, function(){ $(this).removeClass('is-open').css('display','none'); });
    });
    $(document).on('keydown', function(e){
      if(e.key === 'Escape' || e.keyCode === 27){
        $('#search-flex').fadeOut(120, function(){ $(this).removeClass('is-open').css('display','none'); });
      }
    });
    /* إغلاق عند الضغط خارج الصندوق */
    $(document).on('click', '#search-flex', function(e){
      if(e.target === this){
        $('#search-flex').fadeOut(120, function(){ $(this).removeClass('is-open').css('display','none'); });
      }
    });

  });
})(jQuery);
//]]>
</script>


<!-- Comment button fix + scroll to form (AdSense safe) -->
<script type='text/javascript'>
//<![CDATA[
(function($){
  $(function(){
    // Scroll to comments / open form when clicking comment buttons
    function scrollToComments(e){
      var $target = $('#comments, .comments-section, #comment-editor, .comment-form, a[name="comments"], a[name="comment-form"]').first();
      if($target.length){
        if(e) e.preventDefault();
        $('html, body').animate({ scrollTop: $target.offset().top - 70 }, 450);
        // try focus iframe / form
        setTimeout(function(){
          var $iframe = $('#comment-editor');
          if($iframe.length) $iframe.focus();
        }, 500);
      }
    }
    $(document).on('click', '.comment-bubble, a.comment-link, .post-comment-link, a[href*="#comment"], a[href*="#comments"], .comments-link, [data-action="comment"]', scrollToComments);

    // Blogger sometimes uses a button that says إرسال تعليق
    $(document).on('click', 'a:contains("إرسال تعليق"), button:contains("إرسال تعليق"), .comment-reply', function(e){
      var href = $(this).attr('href') || '';
      if(href.indexOf('#') === 0 || !href || href === 'javascript:;'){
        scrollToComments(e);
      }
    });

    // Ensure comment iframe is visible when present
    if($('#comment-editor').length){
      $('#comment-editor').css({ minHeight: '120px', width: '100%' });
    }
  });
})(jQuery);
//]]>
</script>


<!-- Cookie consent is handled by Termly CMP; no duplicate localStorage consent banner is used. -->
<!-- Comments: show form only on button click -->
<script type='text/javascript'>
//<![CDATA[
(function($){
  function openComments(e){
    if(e){ e.preventDefault(); e.stopPropagation(); }
    $('body').addClass('comment-section-visible');
    var $iframe = $('#comment-editor');
    var src = $('#comment-editor-src').attr('href') || '';
    if($iframe.length && src){
      $iframe.css({display:'block', width:'100%', minHeight:'200px'});
      if(!$iframe.attr('src') || $iframe.attr('src')==='' || $iframe.attr('src')==='about:blank'){
        $iframe.attr('src', src);
      }
    }
    setTimeout(function(){
      var $t = $('#comment-editor, .comment-form, a[name="comment-form"]').filter(':visible').first();
      if($t.length){
        $('html,body').animate({scrollTop: $t.offset().top - 90}, 350);
      }
    }, 150);
  }
  $(function(){
    $('body').removeClass('comment-section-visible');
    $(document).on('click', '#show-comment-form', openComments);
    $(document).on('click', 'a, button, .btn', function(e){
      var t = (($(this).text()||'')+'').replace(/\s+/g,' ').trim();
      if(/إرسال تعليق|إضافة تعليق|Post a Comment|Leave a comment/i.test(t)){
        var href = $(this).attr('href')||'';
        if(!href || href==='#' || href.indexOf('javascript:')===0 || href.indexOf('#comment')===0){
          openComments(e);
        }
      }
    });
  });
})(jQuery);
//]]>
</script>


<!-- Modern article features &#8212; requested mobile article layout -->
<script type='text/javascript'>
//<![CDATA[
(function($){
  $(function(){
    var $article = $('.item-post').first();
    if(!$article.length) return;

    var $body = $article.find('.post-body').first();
    var $title = $article.find('h1.entry-title').first();
    if(!$body.length) return;

    /* تحسين صور المقال: أول صورة عالية الأولوية، والباقي تحميل كسول */
    (function optimizeArticleImages(){
      var imgs=$body.find('img');
      if(!imgs.length)return;
      imgs.each(function(i){
        var img=this;
        img.decoding='async';
        if(i===0){
          img.loading='eager';
          try{img.fetchPriority='high';}catch(e){}
        }else{
          img.loading='lazy';
        }
        img.style.maxWidth='100%';
        img.style.height='auto';
      });
    })();

    var canonical = $('link[rel="canonical"]').attr('href') || location.href.split('#')[0].split('?')[0];
    var url = canonical;
    var title = $title.text().trim() || document.title;

    function esc(s){
      return $('<div>').text(String(s || '')).html();
    }
    function toast(msg){
      var $t=$('#copy-toast');
      if(!$t.length){ $t=$('<div id="copy-toast"></div>').appendTo('body'); }
      $t.text(msg).addClass('show');
      clearTimeout(window.__phToast);
      window.__phToast=setTimeout(function(){ $t.removeClass('show'); },1700);
    }
    function copyText(text){
      if(navigator.clipboard && window.isSecureContext){
        navigator.clipboard.writeText(text).then(function(){toast('تم نسخ الرابط');});
      }else{
        var i=document.createElement('input');
        i.value=text;document.body.appendChild(i);i.select();
        try{document.execCommand('copy');toast('تم نسخ الرابط');}catch(e){}
        document.body.removeChild(i);
      }
    }

    /* ===== 1. Article tools: above title ===== */
    var text = $body.text().replace(/\s+/g,' ').trim();
    var words = text ? text.split(' ').length : 0;
    var mins = Math.max(1, Math.round(words / 180));

    var $tools=$('.post-tools-bar').first();
    if(!$tools.length){
      var tools = $(
        '<div class="post-tools-bar" aria-label="أدوات المقال">' +
          '<div class="post-tools-head">' +
            '<span class="read-time"><i class="far fa-clock"></i> وقت القراءة: '+mins+' دقيقة</span>' +
            '<span class="post-views-badge" id="post-views-badge" aria-live="polite"><i class="far fa-eye"></i><span class="views-number">0</span> مشاهدة</span>' +
          '</div>' +
          '<div class="post-tools-actions" role="group" aria-label="أدوات المقال">' +
            '<button type="button" class="reading-mode-btn"><i class="fas fa-book-open"></i><span>وضع القراءة</span></button>' +
            '<button type="button" id="copy-post-link"><i class="fas fa-link"></i><span>نسخ</span></button>' +
            '<button type="button" class="save-post-btn" id="save-later-btn"><i class="far fa-bookmark"></i><span>حفظ المقال</span></button>' +
          '</div>' +
        '</div>'
      );
      if($title.length) $title.after(tools); else $article.prepend(tools);
      $tools=tools;
    }

    /* ===== 1.5. Article header frame: breadcrumb -> title -> reading tools ===== */
    var $crumb=$article.find('#breadcrumb').first();
    if($crumb.length && $title.length){
      var $frame=$article.find('.article-head-frame').first();
      if(!$frame.length){
        $frame=$('<div class="article-head-frame"></div>');
        $crumb.before($frame);
        $frame.append($crumb);
        $frame.append($title);
        $frame.append($tools);
      }
    }

    var $tools=$('.post-tools-bar').first();
    $tools.off('click.phRead').on('click.phRead','.reading-mode-btn',function(){
      $('body').toggleClass('reading-mode');
      var active=$('body').hasClass('reading-mode');
      $(this).find('span').text(active?'إنهاء القراءة':'وضع القراءة');
      $(this).attr('aria-pressed',active?'true':'false');
    });

    $tools.off('click.phCopy').on('click.phCopy','#copy-post-link',function(){ copyText(url); });

    var savedKey='savedPosts';
    function getSaved(){try{return JSON.parse(localStorage.getItem(savedKey)||'[]');}catch(e){return[];}}
    function isSaved(){return getSaved().some(function(x){return x.url===url;});}
    function renderSave(){
      var saved=isSaved();
      $('#save-later-btn').toggleClass('saved',saved).find('span').text(saved?'محفوظ':'حفظ المقال');
      $('#save-later-btn i').attr('class',saved?'fas fa-bookmark':'far fa-bookmark');
    }
    renderSave();
    $tools.off('click.phSave').on('click.phSave','#save-later-btn',function(){
      var list=getSaved().filter(function(x){return x.url!==url;});
      if(!isSaved()) list.unshift({url:url,title:title,t:Date.now()});
      try{localStorage.setItem(savedKey,JSON.stringify(list.slice(0,20)));}catch(e){}
      renderSave();
    });

    /* Eye blink animation is CSS-only; count itself is remote, not local. */
    function showViews(n){
      var $v=$('#post-views-badge');
      if(!$v.length) return;
      if(n==='—'){ $v.find('.views-number').text('—'); return; }
      $v.find('.views-number').text(Number(n||0).toLocaleString('ar-EG'));
    }

    /* ===== 2. Google Sheets backend: shared views + reactions via JSONP ===== */
    var STATS_API='https://script.google.com/macros/s/AKfycbw49cmORzfcRR8sIABgApwlyV9x77Wc8ms5bCPeG1LZWVeswn88UP798NkjmGQNEatu/exec';
    var statsReady=false;
    var statsStarted=false;
    var statsTimer=null;
    var statsCallbackId=0;
    var reactionNames=['like','love','angry','support'];
    var statsCacheKey='ph-stats-cache-v2:'+url;

    function readStatsCache(){
      try{
        var raw=localStorage.getItem(statsCacheKey);
        if(!raw)return null;
        var d=JSON.parse(raw);
        return d&&typeof d==='object'?d:null;
      }catch(e){return null;}
    }
    function saveStatsCache(d){
      try{
        if(d&&d.success===true)localStorage.setItem(statsCacheKey,JSON.stringify({views:Number(d.views||0),like:Number(d.like||0),love:Number(d.love||0),angry:Number(d.angry||0),support:Number(d.support||0)}));
      }catch(e){}
    }

    function validStatsApi(){
      return /^https:\/\/[^\s]+$/i.test(STATS_API);
    }
    function setReactionCounts(d){
      reactionNames.forEach(function(name){
        var el=document.querySelector('.ph-reaction[data-reaction="'+name+'"] .reaction-count');
        if(el) el.textContent=Number((d && d[name])||0).toLocaleString('ar-EG');
      });
    }
    function showStatsUnavailable(){
      /* لا نعرض شرطات أو أحرف مؤقتة؛ تبقى الأرقام 0 حتى تصل القيمة الحقيقية. */
      showViews(0);
      $('.reaction-count').each(function(){if(!$(this).text().trim())$(this).text('0');});
      $('.ph-reaction').prop('disabled',false).removeAttr('aria-disabled');
    }
    function applyStats(d){
      if(!d || d.success!==true) return false;
      statsReady=true;
      showViews(Number(d.views||0));
      setReactionCounts(d);
      saveStatsCache(d);
      $('.ph-reaction').prop('disabled',false).removeAttr('aria-disabled');
      return true;
    }
    function statsRequest(action,reaction){
      return new Promise(function(resolve,reject){
        if(!validStatsApi()){reject(new Error('stats api not configured'));return;}
        var cb='phStatsCb'+(++statsCallbackId)+'_'+Date.now();
        var script=document.createElement('script');
        var done=false;
        var timer=setTimeout(function(){finish(new Error('stats timeout'));},5000);
        function finish(err,data){
          if(done)return;done=true;clearTimeout(timer);
          try{delete window[cb];}catch(e){window[cb]=undefined;}
          if(script.parentNode)script.parentNode.removeChild(script);
          err?reject(err):resolve(data);
        }
        window[cb]=function(data){finish(null,data);};
        var q='?action='+encodeURIComponent(action)+'&article='+encodeURIComponent(url)+'&callback='+encodeURIComponent(cb);
        if(reaction)q+='&reaction='+encodeURIComponent(reaction);
        script.async=true;
        script.src=STATS_API.replace(/\/$/,'')+q;
        script.onerror=function(){finish(new Error('stats network error'));};
        document.head.appendChild(script);
      });
    }
    function refreshStats(){
      return statsRequest('stats').then(function(d){
        if(!applyStats(d))throw new Error('invalid stats response');
        return d;
      });
    }
    function startStatsPolling(){
      clearInterval(statsTimer);
      statsTimer=setInterval(function(){
        /* لا نرسل طلبات أثناء إخفاء التبويب */
        if(document.hidden)return;
        refreshStats().catch(function(){});
      },10000);
    }
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){
        clearInterval(statsTimer);
      }else if(statsStarted && statsReady){
        refreshStats().catch(function(){});
        startStatsPolling();
      }
    });
    function initStats(){
      if(statsStarted)return;
      statsStarted=true;
      /* إظهار آخر قيمة صحيحة محفوظة فوراً، ثم مزامنتها مع Google Sheets. */
      var cached=readStatsCache();
      if(cached){
        showViews(Number(cached.views||0));
        setReactionCounts(cached);
      }else{
        showViews(0);
      }
      $('.ph-reaction').prop('disabled',false).removeAttr('aria-disabled');
      if(!validStatsApi()){showStatsUnavailable();return;}

      /* نرسل طلب المشاهدة مباشرة عند فتح المقال؛ كل فتح/تحديث = +1 على الخادم. */
      statsRequest('view').then(function(d){
        if(!applyStats(d))throw new Error('invalid view response');
        startStatsPolling();
      }).catch(function(err){
        console.warn('الفيلسوف: تعذر الاتصال بعدادات Google Sheets.',err);
        /* لا نغيّر الرقم الظاهر ولا نعطل التفاعل عند فشل الشبكة. */
      });

      $('.ph-reaction').off('click.phVote').on('click.phVote',function(){
        var reaction=$(this).attr('data-reaction');
        if(reactionNames.indexOf(reaction)===-1)return;
        var btn=this;
        /* كل ضغطة مستقلة تُسجَّل، مع تحديث بصري فوري ثم مزامنة القيمة الحقيقية. */
        $(btn).addClass('selected');
        var $count=$(btn).find('.reaction-count');
        var localCount=parseInt(($count.text()||'0').replace(/[^0-9]/g,''),10)||0;
        $count.text((localCount+1).toLocaleString('ar-EG'));
        playReactionSound(reaction);
        reactionBurst(btn,reaction);
        statsRequest('reaction',reaction).then(function(d){
          if(!applyStats(d))throw new Error('invalid reaction response');
        }).catch(function(err){
          console.warn('الفيلسوف: تعذر تسجيل التفاعل.',err);
        });
      });
    }

    function playReactionSound(type){
      try{
        var C=window.AudioContext||window.webkitAudioContext;
        if(!C)return;
        var c=window.__phAudioCtx||(window.__phAudioCtx=new C());
        if(c.state==='suspended')c.resume();
        var now=c.currentTime;
        var cfg={
          like:{tones:[{f:520,t:0,d:.08},{f:780,t:.07,d:.13}],wave:'sine'},
          love:{tones:[{f:440,t:0,d:.09},{f:660,t:.08,d:.12},{f:880,t:.16,d:.18}],wave:'sine'},
          angry:{tones:[{f:150,t:0,d:.10},{f:105,t:.07,d:.15},{f:190,t:.16,d:.12}],wave:'sawtooth'},
          support:{tones:[{f:330,t:0,d:.09},{f:495,t:.08,d:.12},{f:660,t:.16,d:.18}],wave:'triangle'}
        }[type]||null;
        if(!cfg)return;
        cfg.tones.forEach(function(x){
          var o=c.createOscillator(),g=c.createGain();
          o.type=cfg.wave;o.frequency.setValueAtTime(x.f,now+x.t);
          g.gain.setValueAtTime(.0001,now+x.t);
          g.gain.exponentialRampToValueAtTime(type==='angry'?.045:.055,now+x.t+.015);
          g.gain.exponentialRampToValueAtTime(.0001,now+x.t+x.d);
          o.connect(g);g.connect(c.destination);o.start(now+x.t);o.stop(now+x.t+x.d+.02);
        });
      }catch(e){}
    }
    function reactionBurst(btn,type){
      var rect=btn.getBoundingClientRect();
      var root=document.createElement('div');
      root.className='reaction-burst-root burst-'+type;
      root.style.left=(rect.left+rect.width/2)+'px';
      root.style.top=(rect.top+rect.height/2+window.scrollY)+'px';
      var main=document.createElement('span');
      main.className='reaction-burst-main';
      main.textContent={like:'👍',love:'❤️',angry:'😡',support:'🥰'}[type];
      root.appendChild(main);
      var pieces={like:'👍',love:'❤',angry:'💥',support:'🥰'}[type];
      for(var i=0;i<10;i++){
        var p=document.createElement('span');p.className='reaction-particle';p.textContent=pieces;
        var angle=(Math.PI*2*i/10)+(Math.random()-.5)*.25;
        var dist=55+Math.random()*75;
        p.style.setProperty('--dx',(Math.cos(angle)*dist)+'px');
        p.style.setProperty('--dy',(Math.sin(angle)*dist-20)+'px');
        p.style.setProperty('--delay',(Math.random()*.08)+'s');
        p.style.setProperty('--rot',(Math.random()*80-40)+'deg');
        root.appendChild(p);
      }
      document.body.appendChild(root);
      setTimeout(function(){root.remove();},1200);
    }

    /* ===== 3. Last updated: keep it below title/byline ===== */
    try{
      var modMeta=$('meta[property="article:modified_time"],meta[itemprop="dateModified"]').attr('content')||$('time[itemprop="dateModified"]').attr('datetime');
      var pubMeta=$('meta[property="article:published_time"],meta[itemprop="datePublished"]').attr('content')||$('time[itemprop="datePublished"]').attr('datetime');
      var showDate=modMeta||pubMeta;
      if(showDate){
        var d=new Date(showDate);
        if(!isNaN(d.getTime())){
          var label=modMeta?'آخر تحديث':'نُشر في';
          var formatted=d.toLocaleDateString('ar-EG',{year:'numeric',month:'long',day:'numeric'});
          var badge=$('<div class="post-updated-badge"><i class="fas fa-clock"></i> '+label+': '+formatted+'</div>');
          $body.before(badge);
        }
      }
    }catch(e){}

    /* ===== 1.6. Article author card ===== */
      if(!$article.find('.ph-article-author').length && $tools.length){
        var authorCard=$('<section class="ph-article-author" aria-label="المؤلف"><div class="ph-author-label">المؤلف</div><div class="ph-author-name">الفيلسوف</div><p class="ph-author-quote">المعرفة نورٌ، والكلمة أمانة، والقارئ شريكٌ في الرحلة.</p></section>');
        $tools.after(authorCard);
      }

      /* ===== 4. Quick summary: clickable links to real H2/H3 sections ===== */
    if(!$('.key-takeaways').length){
      var heads=[];
      $body.find('h2,h3').each(function(i){
        if(heads.length>=5) return false;
        var t=$(this).text().replace(/\s+/g,' ').trim();
        if(t.length>3){
          var id='ph-section-'+(heads.length+1);
          $(this).attr('id',id);
          heads.push({id:id,text:t});
        }
      });
      if(heads.length>=2){
        var kt=$('<div class="key-takeaways"><div class="kt-title"><i class="fas fa-lightbulb"></i> ملخص سريع</div><ul></ul></div>');
        heads.forEach(function(x){
          kt.find('ul').append('<li><a href="#'+x.id+'">'+esc(x.text)+'</a></li>');
        });
        $body.before(kt);
      }
    }

    /* ===== 5. Share bar: directly after the article body ===== */
    if(!$('.inline-share-bar').length){
      var u=encodeURIComponent(url),t=encodeURIComponent(title);
      var shareBar=$('<div class="inline-share-bar" aria-label="مشاركة المقال">' +
        '<span class="isb-label">شارك المقال</span>' +
        '<a href="https://www.facebook.com/sharer/sharer.php?u='+u+'" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i><span>فيسبوك</span></a>' +
        '<a href="https://twitter.com/intent/tweet?url='+u+'&amp;text='+t+'" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i><span>X</span></a>' +
        '<a href="https://api.whatsapp.com/send?text='+t+'%20'+u+'" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i><span>واتساب</span></a>' +
        '<button type="button" id="inline-copy-link"><i class="fas fa-link"></i><span>نسخ</span></button>' +
      '</div>');
      $body.after(shareBar);
      shareBar.on('click','#inline-copy-link',function(){copyText(url);});
    }

    /* ===== 6. Reactions after comments ===== */
    function ensureReactions(){
      if($('.ph-reactions-box').length) return;
      var html='<section class="ph-reactions-box" aria-label="تفاعل القراء">' +
        '<div class="ph-reactions-title"><i class="fas fa-heart"></i> تفاعل مع المقال</div>' +
        '<div class="ph-reactions-row">' +
        '<button type="button" class="ph-reaction" data-reaction="like"><span class="reaction-emoji">👍</span><span class="reaction-label">أعجبني</span><span class="reaction-count">0</span></button>' +
        '<button type="button" class="ph-reaction" data-reaction="love"><span class="reaction-emoji">❤️</span><span class="reaction-label">أحببته</span><span class="reaction-count">0</span></button>' +
        '<button type="button" class="ph-reaction" data-reaction="angry"><span class="reaction-emoji">😡</span><span class="reaction-label">أغضبني</span><span class="reaction-count">0</span></button>' +
        '<button type="button" class="ph-reaction" data-reaction="support"><span class="reaction-emoji">🥰</span><span class="reaction-label">أدعمه</span><span class="reaction-count">0</span></button>' +
        '</div></section>';
      var $r=$(html);
      /* التفاعلات أصبحت جزءاً من نهاية المقال مباشرة. */
      $body.after($r);
      var $share=$('.inline-share-bar').first();
      if($share.length) $r.after($share);
      initStats();
    }
    ensureReactions();

    /* ===== 7. Labels + older/newer navigation directly after reactions ===== */
    function placeFooterParts(){
      var $r=$('.ph-reactions-box').first();
      if(!$r.length) return;
      var $share=$article.find('.inline-share-bar').first();
      if($share.length){$r.after($share);$r=$share;}
      var $labels=$article.find('.label-container').first();
      var $nav=$article.find('.navigation-runs').first();
      if($labels.length){$r.after($labels);$r=$labels;}
      if($nav.length){$r.after($nav);}
      $('.label-container').first().addClass('ph-label-box');
      $('.navigation-runs').first().addClass('ph-navigation-box');
      fillNavigationTitles();
    }

    function fillNavigationTitles(){
      $('.ph-navigation-box a').each(function(){
        var a=this, $p=$(a).find('p').first();
        if(!$p.length || $p.text().trim()) return;
        var href=a.getAttribute('href');
        if(!href || href==='#') return;
        $.ajax({url:href,method:'GET',dataType:'html',timeout:5000}).done(function(html){
          try{
            var doc=document.implementation.createHTMLDocument('x');
            doc.documentElement.innerHTML=html;
            var tt=doc.querySelector('h1.entry-title');
            var txt=tt?tt.textContent.trim():'';
            if(!txt){var mt=doc.querySelector('meta[property="og:title"]');txt=mt?mt.getAttribute('content')||'':'';}
            if(txt)$p.text(txt);
          }catch(e){}
        });
      });
    }
    setTimeout(placeFooterParts,300);

    /* ===== 8. Existing non-invasive extras retained ===== */
    try{
      var rr=JSON.parse(localStorage.getItem('recentRead')||'[]').filter(function(x){return x.url!==url;});
      rr.unshift({url:url,title:title});localStorage.setItem('recentRead',JSON.stringify(rr.slice(0,8)));
    }catch(e){}

    try{
      var rr2=JSON.parse(localStorage.getItem('recentRead')||'[]');
      if(rr2.length && !$('#recently-read').length){
        var h='<div id="recently-read" class="pro-feature-fade rr-below-posts"><div class="rr-header"><h4>قرأت مؤخراً</h4></div><ul class="rr-list">';
        rr2.slice(0,5).forEach(function(x,i){
          var st=esc(x.title);h+='<li class="rr-item"><a href="'+esc(x.url)+'"><span class="rr-num">'+(i+1)+'</span><span class="rr-title">'+st+'</span></a></li>';
        });
        h+='</ul></div>';
        var $anchor=$('.alf-dynamic-pager').first();
        if($anchor.length)$anchor.after(h);
      }
    }catch(e){}

    /* MODULE: ARTICLE AUTHOR PROFILE — enhancement removed. */

    try{
      if($('#sidebar-container .sidebar').length && !$('.daily-quote-box').length && !$('.ph-title,#ph-quote-text,.ph-card-text').length){
        var quotes=[
          {t:'الجهل يؤدي إلى الخوف، والخوف يؤدي إلى الكراهية، والكراهية تؤدي إلى العنف.',a:'ابن رشد'},
          {t:'إن أعظم إنجاز للعقل البشري هو قدرته على الشك.',a:'فولتير'},
          {t:'الحياة التي لا تُمتحن لا تستحق أن تُعاش.',a:'سقراط'},
          {t:'الفلسفة تبدأ بالدهشة.',a:'أرسطو'},
          {t:'اعرف نفسك.',a:'سقراط'},
          {t:'العقل الحر هو الذي لا يقبل شيئاً بدون دليل.',a:'ابن سينا'},
          {t:'ليست المشكلة في أن نخطئ، بل في أن نصر على الخطأ.',a:'الغزالي'},
          {t:'من لم يتعلم من التاريخ محكوم عليه أن يكرره.',a:'جورج سانتايانا'}
        ];
        var q=quotes[Math.floor(Date.now()/86400000)%quotes.length];
        $('#sidebar-container .sidebar').prepend('<div class="daily-quote-box pro-feature-fade"><div class="dq-label">حكمة اليوم</div><p class="dq-text">"'+esc(q.t)+'"</p><span class="dq-author">— '+esc(q.a)+'</span></div>');
      }
    }catch(e){}

    try{
      $('img[data-src],.snip-thumbnail:not(.lazy-img)').addClass('skeleton');
      $(document).on('load','img',function(){$(this).removeClass('skeleton').addClass('lazy-img');});
      setTimeout(function(){$('.skeleton').removeClass('skeleton');},4000);
    }catch(e){}

    if(!$('.sticky-share-rail').length){
      var u2=encodeURIComponent(url),t2=encodeURIComponent(title);
      var rail=$('<div class="sticky-share-rail"></div>');
      rail.append('<a href="https://www.facebook.com/sharer/sharer.php?u='+u2+'" target="_blank" rel="noopener">f</a>');
      rail.append('<a href="https://twitter.com/intent/tweet?url='+u2+'&amp;text='+t2+'" target="_blank" rel="noopener">X</a>');
      rail.append('<a href="https://api.whatsapp.com/send?text='+t2+'%20'+u2+'" target="_blank" rel="noopener">W</a>');
      $('body').append(rail);
    }
  });
})(jQuery);
//]]>
</script>


<script type='text/javascript'>
//<![CDATA[
(function(){
  function ensureProgress(){
    var p = document.getElementById('read-progress');
    if(!p){
      p = document.createElement('div');
      p.id = 'read-progress';
      p.innerHTML = '<span></span>';
      document.body.appendChild(p);
    }
    var span = p.querySelector('span');
    function update(){
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var w = max > 0 ? (window.scrollY / max) * 100 : 0;
      if(span) span.style.width = Math.min(100, Math.max(0, w)) + '%';
    }
    window.addEventListener('scroll', update, {passive:true});
    update();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ensureProgress);
  else ensureProgress();
})();
//]]>
</script>


<!-- Unified Pharaonic Header Menu (Clean 2026-09-05) -->


<!-- MODULE: DYNAMIC PAGINATION CSS -->
<style id='alf-dynamic-pager-style'>
.alf-dynamic-pager{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;width:100%;min-height:54px;margin:24px auto 18px;padding:8px;box-sizing:border-box;clear:both;direction:ltr;position:relative;z-index:50}
.alf-dynamic-pager a,.alf-dynamic-pager span{display:inline-flex!important;align-items:center;justify-content:center;min-width:40px;height:40px;padding:0 11px;border:1px solid #d4af37;border-radius:9px;background:#151515;color:#e8dfc8;text-decoration:none;font-weight:700;line-height:1;box-sizing:border-box;cursor:pointer}
.alf-dynamic-pager a:hover{background:#d4af37;color:#111}
.alf-dynamic-pager .current{background:#d4af37;color:#111;pointer-events:none}
@media(max-width:680px){.alf-dynamic-pager{gap:5px;margin:18px auto 14px;padding:6px}.alf-dynamic-pager a,.alf-dynamic-pager span{min-width:34px;height:34px;padding:0 7px;font-size:13px}}
</style>
<!-- =========================================================
     MODULE: DYNAMIC PAGINATION &#8212; 6 POSTS / PAGE
     ========================================================= -->
<script id='alf-dynamic-pager-script' type='text/javascript'>
//<![CDATA[
(function(){
'use strict';
var PER_PAGE=6,FEED_LIMIT=150;
function mobile(){return /[?&]m=1(?:&|$)/.test(location.search);}
function page(){var m=(location.search||'').match(/[?&]page=(\d+)/);return m?Math.max(1,parseInt(m[1],10)||1):1;}
function pageUrl(n){if(n<=1)return mobile()?'/?m=1':'/';return mobile()?'/?page='+n+'&m=1':'/?page='+n;}
function visible(sel){return [].slice.call(document.querySelectorAll(sel)).filter(function(x){return !!(x.offsetWidth||x.offsetHeight||x.getClientRects().length);});}
function grid(){var a=visible('.grid-posts');return a[0]||document.querySelector('.grid-posts');}
function feed(url,done){var x=new XMLHttpRequest();x.open('GET',url,true);x.onreadystatechange=function(){if(x.readyState!==4)return;if(x.status<200||x.status>=300){done(null);return;}try{done(JSON.parse(x.responseText));}catch(e){done(null);}};x.send();}
function entries(d){return d&&d.feed&&d.feed.entry?d.feed.entry:[];}
function total(d){try{return parseInt(d.feed.openSearch$totalResults.$t,10)||0;}catch(e){return 0;}}
function link(e){var a=e.link||[];for(var i=0;i<a.length;i++)if(a[i].rel==='alternate')return a[i].href;return '#';}
function thumb(e){var u=e.media$thumbnail&&e.media$thumbnail.url;if(!u){var h=(e.content&&e.content.$t)||(e.summary&&e.summary.$t)||'',m=h.match(/<img[^>]+src=["']([^"']+)["']/i);u=m&&m[1];}return u?u.replace(/\/s[0-9]+(-c)?\//,'/s320-c/').replace(/=s[0-9]+(-c)?/,'=s320-c'):'';}
function label(e){var c=e.category||[];for(var i=0;i<c.length;i++){var t=c[i].term;if(t&&t.indexOf('http')!==0)return t;}return '';}
function render(g,a){g.innerHTML='';a.forEach(function(e,i){var title=e.title&&e.title.$t||'',href=link(e),u=thumb(e),art=document.createElement('article'),wrap=document.createElement('div'),an=document.createElement('a'),sp=document.createElement('span'),flow=document.createElement('div'),h=document.createElement('h2'),ta=document.createElement('a');art.className='blog-post hentry post-filter';wrap.className='post-filter-image';an.className='post-filter-inner';an.href=href;sp.className='post-filter-link image-nos';if(u){var im=document.createElement('img');im.className='snip-thumbnail';im.src=u;im.alt=title;im.loading=i<2?'eager':'lazy';im.decoding='async';sp.appendChild(im);}an.appendChild(sp);wrap.appendChild(an);flow.className='piki-hero-flow';var lab=label(e);if(lab){var tg=document.createElement('span');tg.className='post-tag';tg.textContent=lab;flow.appendChild(tg);}h.className='entry-title post-title';ta.href=href;ta.textContent=title;h.appendChild(ta);flow.appendChild(h);wrap.appendChild(flow);art.appendChild(wrap);g.appendChild(art);});}
function draw(ps,count,cur){var pages=Math.max(1,Math.ceil(count/PER_PAGE));ps.forEach(function(p){p.innerHTML='';if(pages<2){p.style.display='none';return;}p.style.display='flex';function add(t,u,active,label){var x=document.createElement(active?'span':'a');x.textContent=t;x.setAttribute('aria-label',label);if(active)x.className='current';else x.href=u;p.appendChild(x);}if(cur>1)add('←',pageUrl(cur-1),false,'الصفحة السابقة');for(var n=1;n<=pages;n++)add(String(n),pageUrl(n),n===cur,n===cur?'الصفحة الحالية '+n:'الصفحة '+n);if(cur<pages)add('→',pageUrl(cur+1),false,'الصفحة التالية');});}
function init(){if(document.querySelector('.item-post-wrap'))return;var g=grid(),ps=visible('.alf-dynamic-pager');if(!g||!ps.length)return;var cur=page();feed('/feeds/posts/summary?alt=json&orderby=published&max-results=1&_alfpager_total='+Date.now(),function(d){var count=total(d);function finish(a){if(!count)count=a.length;var pages=Math.max(1,Math.ceil(count/PER_PAGE));if(cur>pages){location.replace(pageUrl(pages));return;}if(cur===1){[].slice.call(g.querySelectorAll('.blog-post')).forEach(function(p,i){p.style.display=i<PER_PAGE?'':'none';});}else{render(g,a);window.scrollTo({top:0,behavior:'instant'});}draw(ps,count,cur);}if(count){if(cur===1)finish([]);else feed('/feeds/posts/summary?alt=json&orderby=published&start-index='+(((cur-1)*PER_PAGE)+1)+'&max-results='+PER_PAGE+'&_alfpager_page='+Date.now(),function(x){finish(entries(x));});}else feed('/feeds/posts/summary?alt=json&orderby=published&max-results='+FEED_LIMIT+'&_alfpager_fallback='+Date.now(),function(x){finish(entries(x));});});}
if(window.alfWhenIdle)window.alfWhenIdle(init,2500);else if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
//]]>
</script>


<script type='text/javascript'> //<![CDATA[
/* MODULE: THEME TOGGLE — unified data-theme (dark | blue) */
(function(){'use strict';var KEY='alf-theme';
function current(){try{return localStorage.getItem(KEY)==='blue'?'blue':'dark';}catch(e){return 'dark';}}
function apply(theme){
  theme = theme === 'blue' ? 'blue' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  // keep body class for any residual CSS compatibility
  document.body.classList.toggle('dark', theme === 'dark');
  document.body.classList.toggle('theme-blue', theme === 'blue');
  try{localStorage.setItem(KEY, theme);}catch(e){}
  var b = document.getElementById('themeToggleBtn');
  if(b){
    var i = b.querySelector('i');
    var n = theme === 'blue' ? 'العودة للثيم الأصلي' : 'تفعيل الثيم الأزرق الاحترافي';
    b.setAttribute('aria-label', n);
    b.setAttribute('title', n);
    b.setAttribute('aria-pressed', theme === 'blue' ? 'true' : 'false');
    if(i) i.className = theme === 'blue' ? 'fas fa-sun' : 'fas fa-moon';
  }
}
function bind(){
  var b = document.getElementById('themeToggleBtn');
  if(!b || b._alfThemeBound) return;
  b._alfThemeBound = true;
  b.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    apply(current() === 'blue' ? 'dark' : 'blue');
  });
}
// apply ASAP to avoid FOUC
try{
  var t = localStorage.getItem(KEY) === 'blue' ? 'blue' : 'dark';
  document.documentElement.setAttribute('data-theme', t);
}catch(e){document.documentElement.setAttribute('data-theme','dark');}
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', function(){ apply(current()); bind(); });
}else{ apply(current()); bind(); }
})();
//]]> </script>

</body>
</html>
