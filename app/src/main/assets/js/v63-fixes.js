/* ===== الفيلسوف v6.5.0 — إصلاحات حاسمة ===== */
(function () {
  'use strict';
  APP.version = '6.5.0';

  /* ---------- 1) تصنيفات المدونة + شريط أخبار ---------- */
  window.BLOG_CATEGORIES = [
    { name: 'أخبار', icon: '📰', label: 'أخبار', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1' },
    { name: 'علوم', icon: '🔬', label: 'علوم', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B9%D9%84%D9%88%D9%85' },
    { name: 'تكنولوجيا', icon: '💻', label: 'تكنولوجيا', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7' },
    { name: 'رياضة', icon: '⚽', label: 'رياضة', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9' },
    { name: 'أدب', icon: '📚', label: 'أدب', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AF%D8%A8' },
    { name: 'سينما ومسرح', icon: '🎬', label: 'سينما ومسرح', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B3%D9%8A%D9%86%D9%85%D8%A7%20%D9%88%D9%85%D8%B3%D8%B1%D8%AD' },
    { name: 'صحة', icon: '💊', label: 'صحة', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B5%D8%AD%D8%A9' }
  ];

  function esc(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escAttr(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  window.blogJsonp = function (label, callback) {
    var cb = 'fyFeed_' + Date.now() + '_' + Math.floor(Math.random() * 9999);
    var script = document.createElement('script');
    var done = false;
    var t = setTimeout(function () { finish([]); }, 9000);
    function finish(entries) {
      if (done) return;
      done = true;
      clearTimeout(t);
      try { delete window[cb]; } catch (e) {}
      if (script.parentNode) script.parentNode.removeChild(script);
      try { callback(entries || []); } catch (e) {}
    }
    window[cb] = function (data) {
      finish((data && data.feed && data.feed.entry) || []);
    };
    // summary feed = lighter + has media$thumbnail
    var base = 'https://alfaylasooof.blogspot.com/feeds/posts/summary';
    var path = label ? (base + '/-/' + encodeURIComponent(label)) : base;
    script.src = path + '?alt=json-in-script&max-results=10&orderby=published&callback=' + cb;
    script.onerror = function () { finish([]); };
    document.head.appendChild(script);
  };

  window.entryInfo = function (entry) {
    var href = '', title = (entry.title && entry.title.$t) || 'مقال', img = '';
    (entry.link || []).some(function (x) {
      if (x.rel === 'alternate') { href = x.href; return true; }
      return false;
    });
    if (entry.media$thumbnail && entry.media$thumbnail.url) {
      img = entry.media$thumbnail.url
        .replace(/\/s\d+(-c)?\//, '/s400-c/')
        .replace(/=s\d+(-c)?/, '=s400-c');
    }
    if (!img) {
      var html = (entry.content && entry.content.$t) || (entry.summary && entry.summary.$t) || '';
      var m = html.match(/src=["']([^"']+)["']/i);
      if (m) img = m[1];
    }
    return { title: title, url: href, image: img };
  };

  window.renderCategories = function () {
    var grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = BLOG_CATEGORIES.map(function (c, i) {
      return (
        '<section class="cat-section" id="catSec-' + i + '">' +
          '<div class="cat-head"><span class="cat-ico">' + (c.icon || '📁') + '</span><span class="cat-title">' + esc(c.name) + '</span></div>' +
          '<div class="cat-ticker" id="categoryPosts-' + i + '"><div class="cat-loading">جاري التحميل…</div></div>' +
        '</section>'
      );
    }).join('');
    BLOG_CATEGORIES.forEach(function (c, i) {
      blogJsonp(c.label, function (entries) {
        renderCategoryPosts(i, entries);
      });
    });
  };

  window.renderCategoryPosts = function (i, entries) {
    var c = BLOG_CATEGORIES[i];
    var host = document.getElementById('categoryPosts-' + i);
    if (!host || !c) return;
    var posts = (entries || []).map(entryInfo).filter(function (x) { return x.url; }).slice(0, 10);
    if (!posts.length) {
      host.innerHTML = '<button class="cat-fallback" onclick="openBlogInApp(\'' + escAttr(c.url) + '\',\'' + escAttr(c.name) + '\')">فتح ' + esc(c.name) + ' في المدونة</button>';
      return;
    }
    // duplicate for seamless loop
    var cards = posts.concat(posts).map(function (p) {
      var thumb = p.image
        ? '<img src="' + escAttr(p.image) + '" alt="" loading="lazy" decoding="async" onerror="this.parentNode.classList.add(\'no-img\')">'
        : '<div class="card-ph">' + (c.icon || '📄') + '</div>';
      return (
        '<button type="button" class="news-card" onclick=\'openArticleNative(' +
        JSON.stringify(p.url) + ',' + JSON.stringify(p.title) + ',' + JSON.stringify(p.image || '') +
        ')\'>' + thumb + '<span class="news-card-title">' + esc(p.title) + '</span></button>'
      );
    }).join('');
    host.innerHTML = '<div class="news-track">' + cards + '</div>';
  };

  /* ---------- 2) قارئ مقالات خفيف (بدل iframe المدونة الثقيل) ---------- */
  window.openArticleNative = function (url, title, image) {
    playClick();
    // try fetch via JSON feed by searching posts
    var modal = document.getElementById('blogModal');
    var frame = document.getElementById('blogFrame');
    var titleEl = document.getElementById('blogTitle');
    if (!modal) return;
    if (titleEl) titleEl.textContent = title || 'المقال';
    // push history
    if (!APP.blogHistoryActive) {
      APP.blogHistoryActive = true;
      try { history.pushState({ page: APP.currentPage || 'home', blog: true }, '', '#blog'); } catch (e) {}
    }
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('blog-open');
    document.body.style.overflow = 'hidden';

    // Show loading in a native reader layer
    var wrap = document.getElementById('blogWrap');
    if (!wrap) return;
    // Create native reader if not exists
    var reader = document.getElementById('nativeArticleReader');
    if (!reader) {
      reader = document.createElement('div');
      reader.id = 'nativeArticleReader';
      reader.className = 'native-article-reader';
      wrap.appendChild(reader);
    }
    if (frame) frame.style.display = 'none';
    reader.style.display = 'block';
    reader.innerHTML = '<div class="nar-loading">جاري تحميل المقال…</div>';

    // Fetch full post via feed (match by alternate link)
    fetchPostByUrl(url, function (post) {
      if (!post) {
        // fallback to mobile blogger page
        reader.style.display = 'none';
        if (frame) {
          frame.style.display = 'block';
          frame.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'm=1';
        }
        return;
      }
      var imgHtml = post.image
        ? '<img class="nar-hero" src="' + escAttr(post.image) + '" alt="">'
        : '';
      reader.innerHTML =
        '<article class="nar-article">' +
        imgHtml +
        '<h1 class="nar-title">' + esc(post.title) + '</h1>' +
        '<div class="nar-meta">' + esc(post.published || '') + '</div>' +
        '<div class="nar-body">' + (post.content || '') + '</div>' +
        '<div class="nar-actions">' +
        '<button type="button" onclick="saveArticleFav(' + JSON.stringify(url) + ',' + JSON.stringify(post.title) + ',' + JSON.stringify(post.image || '') + ')">★ حفظ</button>' +
        '<button type="button" onclick="shareAppNative()">↗ مشاركة</button>' +
        '</div></article>';
    });
  };

  function fetchPostByUrl(url, cb) {
    // Use full content feed and find matching link
    var cbName = 'fyPost_' + Date.now();
    var script = document.createElement('script');
    var done = false;
    var t = setTimeout(function () { finish(null); }, 10000);
    function finish(post) {
      if (done) return;
      done = true;
      clearTimeout(t);
      try { delete window[cbName]; } catch (e) {}
      if (script.parentNode) script.parentNode.removeChild(script);
      cb(post);
    }
    window[cbName] = function (data) {
      var entries = (data && data.feed && data.feed.entry) || [];
      var found = null;
      var target = (url || '').replace(/\?.*$/, '').replace(/\/$/, '');
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        var links = e.link || [];
        for (var j = 0; j < links.length; j++) {
          if (links[j].rel === 'alternate') {
            var href = (links[j].href || '').replace(/\?.*$/, '').replace(/\/$/, '');
            if (href === target || href.indexOf(target) >= 0 || target.indexOf(href) >= 0) {
              found = e;
              break;
            }
          }
        }
        if (found) break;
      }
      if (!found && entries.length) {
        // last resort: open first matching title isn't reliable; return null for iframe fallback
        finish(null);
        return;
      }
      if (!found) { finish(null); return; }
      var title = (found.title && found.title.$t) || '';
      var content = (found.content && found.content.$t) || (found.summary && found.summary.$t) || '';
      var published = (found.published && found.published.$t) || '';
      try {
        if (published) published = new Date(published).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
      } catch (e) {}
      var img = '';
      if (found.media$thumbnail) img = found.media$thumbnail.url;
      if (!img) {
        var m = content.match(/src=["']([^"']+)["']/i);
        if (m) img = m[1];
      }
      // clean content images for mobile
      content = content.replace(/src="(https:\/\/blogger\.googleusercontent\.com[^"]+)"/g, function (_, src) {
        return 'src="' + src.replace(/\/s\d+(-c)?\//, '/s800/').replace(/=s\d+(-c)?/, '=s800') + '" loading="lazy"';
      });
      finish({ title: title, content: content, published: published, image: img });
    };
    // pull recent full posts
    script.src = 'https://alfaylasooof.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=30&orderby=published&callback=' + cbName;
    script.onerror = function () { finish(null); };
    document.head.appendChild(script);
  }

  window.openBlogInApp = function (url, title) {
    playClick();
    url = String(url || 'https://alfaylasooof.blogspot.com');
    // Normalize relative / partial URLs to the real blog
    if (url.indexOf('http') !== 0) {
      if (url.charAt(0) === '/') url = 'https://alfaylasooof.blogspot.com' + url;
      else url = 'https://alfaylasooof.blogspot.com/' + url;
    }
    // Force mobile-friendly blogger view when possible
    if (url.indexOf('alfaylasooof.blogspot.com') >= 0 && url.indexOf('m=1') < 0 && url.indexOf('/feeds/') < 0) {
      url += (url.indexOf('?') >= 0 ? '&' : '?') + 'm=1';
    }

    var isHomeOrLabel = /alfaylasooof\.blogspot\.com\/?(\?|$)/.test(url.replace(/\?m=1/,''))
      || url.indexOf('/search/label/') >= 0
      || url.indexOf('/search?') >= 0
      || /blogspot\.com\/?(\?m=1)?$/.test(url.split('#')[0]);

    // Homepage / labels / search → iframe to real blog
    // Single post URLs → try lightweight native reader first
    if (isHomeOrLabel || !/\/20\d{2}\//.test(url)) {
      var modal = document.getElementById('blogModal');
      var frame = document.getElementById('blogFrame');
      var titleEl = document.getElementById('blogTitle');
      var reader = document.getElementById('nativeArticleReader');
      if (!modal) return;
      if (titleEl) titleEl.textContent = title || 'مدونة الفيلسوف';
      if (!APP.blogHistoryActive) {
        APP.blogHistoryActive = true;
        try { history.pushState({ page: APP.currentPage || 'home', blog: true }, '', '#blog'); } catch (e) {}
      }
      if (reader) { reader.style.display = 'none'; reader.innerHTML = ''; }
      if (frame) {
        frame.style.display = 'block';
        frame.src = 'about:blank';
        setTimeout(function () { frame.src = url; }, 40);
      }
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('blog-open');
      document.body.style.overflow = 'hidden';
      return;
    }
    openArticleNative(url, title || 'المدونة', '');
  };

  window.closeBlogInApp = function () {
    playClick();
    var modal = document.getElementById('blogModal');
    var frame = document.getElementById('blogFrame');
    var reader = document.getElementById('nativeArticleReader');
    if (frame) { frame.src = 'about:blank'; frame.style.display = 'block'; }
    if (reader) { reader.style.display = 'none'; reader.innerHTML = ''; }
    if (modal) { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); }
    document.body.classList.remove('blog-open');
    document.body.style.overflow = '';
    APP.blogHistoryActive = false;
  };

  window.saveArticleFav = function (url, title, image) {
    playClick();
    try {
      var list = JSON.parse(localStorage.getItem('faylasoof_fav_articles') || '[]') || [];
      if (list.some(function (x) { return x.url === url; })) {
        alert('المقال محفوظ مسبقاً');
        return;
      }
      list.unshift({ url: url, title: title, image: image || '' });
      localStorage.setItem('faylasoof_fav_articles', JSON.stringify(list.slice(0, 100)));
      if (typeof updateFavBadges === 'function') updateFavBadges();
      alert('تم الحفظ في المفضلة');
    } catch (e) {}
  };

  /* ---------- 3) مشغل فيديو يعمل داخل التطبيق ---------- */
  window.openVideoInApp = function (id, title) {
    playClick();
    if (!id) return;
    try {
      APP.lastMovie = { id: id, title: title || 'مشاهدة', cat: APP.cinemaCat };
      if (typeof saveCinemaState === 'function') saveCinemaState();
    } catch (e) {}

    var modal = document.getElementById('videoModal');
    var wrap = document.getElementById('videoWrap');
    var titleEl = document.getElementById('videoTitle');
    if (!modal || !wrap) return;
    if (titleEl) titleEl.textContent = title || 'مشاهدة';

    // Rebuild player fresh each time (avoids stuck error state)
    wrap.innerHTML =
      '<div class="vplayer">' +
        '<iframe id="videoFrame" ' +
          'src="https://www.youtube.com/embed/' + encodeURIComponent(id) +
          '?autoplay=1&playsinline=1&rel=0&modestbranding=1&controls=1&fs=1&iv_load_policy=3&enablejsapi=1" ' +
          'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" ' +
          'allowfullscreen playsinline webkit-playsinline referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
        '<div class="vplayer-fallback">' +
          '<p>إذا لم يعمل المشغل:</p>' +
          '<button type="button" onclick="retryVideo(\'' + escAttr(id) + '\')">إعادة المحاولة</button>' +
          '<button type="button" onclick="openVideoExternal(\'' + escAttr(id) + '\')">فتح في يوتيوب</button>' +
        '</div>' +
      '</div>';

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  };

  window.retryVideo = function (id) {
    playClick();
    var frame = document.getElementById('videoFrame');
    if (!frame) return;
    // alternate embed domain
    frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
      '?autoplay=1&playsinline=1&rel=0&modestbranding=1&controls=1&fs=1';
  };

  window.openVideoExternal = function (id) {
    playClick();
    var url = 'https://www.youtube.com/watch?v=' + encodeURIComponent(id);
    try {
      if (window.AndroidNative && AndroidNative.openExternal) {
        AndroidNative.openExternal(url);
        return;
      }
    } catch (e) {}
    window.open(url, '_blank');
  };

  window.closeVideo = function (silent) {
    if (!silent) playClick();
    var modal = document.getElementById('videoModal');
    var wrap = document.getElementById('videoWrap');
    if (wrap) wrap.innerHTML = '';
    if (modal) modal.classList.remove('show');
    document.body.style.overflow = '';
  };

  /* ---------- 4) أصوات النقر لكل الأزرار ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('button, .nav-item, .qa-btn, .side-item, .cat-tab, .news-card, .movie-card, .fav-section-card, .preset-btn, .toggle');
    if (t && typeof playClick === 'function') {
      try { playClick(); } catch (err) {}
    }
  }, true);

  /* ---------- 5) Boot ---------- */
  function bootV63() {

  /* v6.5: force pharaonic theme, kill light mode */
  try {
    document.body.classList.remove('light-mode');
    localStorage.setItem('faylasoof_mode', 'dark');
    if (!localStorage.getItem('faylasoof_theme')) {
      localStorage.setItem('faylasoof_theme', 'gold');
    }
    if (typeof setTheme === 'function') setTheme(localStorage.getItem('faylasoof_theme') || 'gold');
  } catch (e) {}

    try {
      var ver = document.getElementById('appVersionText');
      if (ver) ver.textContent = 'v6.5.0';
    } catch (e) {}
    setTimeout(function () {
      try { renderCategories(); } catch (e) { console.error('cats', e); }
    }, 300);
    // refresh categories periodically so new posts appear
    setInterval(function () {
      if (APP.currentPage === 'home') {
        try { renderCategories(); } catch (e) {}
      }
    }, 5 * 60 * 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootV63);
  } else {
    setTimeout(bootV63, 50);
  }

  console.log('AlFaylasoof v6.5.0 critical fixes loaded');
})();
