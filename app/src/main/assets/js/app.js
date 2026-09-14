// ===== الفيلسوف App v3 =====
const APP = {
  soundEnabled: true,
  volume: 0.5,
  soundPack: 'classic',
  theme: 'gold',
  bg: 'default',
  currentPage: 'home',
  cinemaCat: 'arabic',
  clickCount: 0,
  lastClick: 0,
  wisdomIndex: 0,
  wisdomTimer: null,
  history: ['home'],
  blogHistoryActive: false,
  closingBlogFromHistory: false,
  movieViewCounts: {},
  movieFavorites: [],
  lastMovie: null,
  movieTitles: {}
};

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('alfaylasoof_settings') || '{}');
    Object.assign(APP, s);
    applyTheme();
    applyBg();
    updateSettingsUI();
  } catch (e) {}
}

function saveSettings() {
  localStorage.setItem('alfaylasoof_settings', JSON.stringify({
    soundEnabled: APP.soundEnabled,
    volume: APP.volume,
    soundPack: APP.soundPack,
    theme: APP.theme,
    bg: APP.bg
  }));
}

let audioCtx = null;
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playClick() {
  if (!APP.soundEnabled) return;
  try {
    const ctx = getAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    gain.gain.value = APP.volume * 0.3;
    const packs = {
      classic: { type: 'sine', f: 800, d: 0.08 },
      soft: { type: 'triangle', f: 600, d: 0.12 },
      digital: { type: 'square', f: 1200, d: 0.05 },
      pop: { type: 'sine', f: 400, d: 0.1 },
      click: { type: 'square', f: 950, d: 0.06 },
      deep: { type: 'sine', f: 240, d: 0.14 }
    };
    const p = packs[APP.soundPack] || packs.classic;
    osc.type = p.type;
    osc.frequency.setValueAtTime(p.f, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(p.f * 0.5, ctx.currentTime + p.d);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + p.d);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + p.d + 0.02);
  } catch (e) {}
}

function playSuccess() {
  if (!APP.soundEnabled) return;
  try {
    const ctx = getAudio();
    [523, 659, 784].forEach(function(f, i) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = f;
      gain.gain.value = APP.volume * 0.2;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + 0.35 + i * 0.08);
    });
  } catch (e) {}
}

function showPage(pageId, pushHistory) {
  if (pushHistory === undefined) pushHistory = true;
  playClick();

  // close video if open
  closeVideo(true);

  document.querySelectorAll('.app-page').forEach(function(p) { p.classList.remove('active'); });
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');

  document.querySelectorAll('.nav-item').forEach(function(n) { n.classList.remove('active'); });
  const nav = document.querySelector('.nav-item[data-page="' + pageId + '"]');
  if (nav) nav.classList.add('active');

  document.querySelectorAll('.side-item').forEach(function(n) { n.classList.remove('active'); });
  const side = document.querySelector('.side-item[data-page="' + pageId + '"]');
  if (side) side.classList.add('active');

  if (pushHistory && APP.currentPage !== pageId) {
    APP.history.push(pageId);
    try { history.pushState({ page: pageId }, '', '#' + pageId); } catch(e) {}
  }
  APP.currentPage = pageId;
  closeMenu();

  if (pageId === 'cinema') renderMovies(APP.cinemaCat);
  if (pageId === 'luck') showLuckOnce();
  if (pageId === 'home') startWisdomRotate();
}

function goBack() {
  // if blog viewer is open, close it first
  const blogModal = document.getElementById('blogModal');
  if (blogModal && blogModal.classList.contains('show')) {
    closeBlogInApp(false, false);
    return true;
  }
  // if video open, close it first
  const modal = document.getElementById('videoModal');
  if (modal && modal.classList.contains('show')) {
    closeVideo();
    return true;
  }
  const addModal = document.getElementById('addWisdomModal');
  if (addModal && addModal.classList.contains('show')) {
    closeAddWisdom();
    return true;
  }
  if (APP.history.length > 1) {
    APP.history.pop();
    const prev = APP.history[APP.history.length - 1];
    showPage(prev, false);
    return true;
  }
  return false;
}

function openMenu() {
  playClick();
  document.getElementById('sideMenu').classList.add('open');
  document.getElementById('sideOverlay').classList.add('show');
}

function closeMenu() {
  document.getElementById('sideMenu').classList.remove('open');
  document.getElementById('sideOverlay').classList.remove('show');
}

function applyTheme() {
  document.body.className = document.body.className.replace(/theme-\w+/g, '').replace(/bg-\w+/g, '').trim();
  if (APP.theme !== 'gold') document.body.classList.add('theme-' + APP.theme);
  applyBg();
}

function applyBg() {
  document.body.classList.remove('bg-gradient', 'bg-stars', 'bg-pyramid', 'bg-sand', 'bg-night', 'bg-goldfog', 'bg-forest', 'bg-royal', 'bg-sky', 'bg-mint', 'bg-lavender', 'bg-rose', 'bg-ocean');
  if (APP.bg && APP.bg !== 'default') document.body.classList.add('bg-' + APP.bg);
}

function setTheme(t) {
  playClick();
  APP.theme = t;
  applyTheme();
  saveSettings();
  updateSettingsUI();
}

function setBg(b) {
  playClick();
  APP.bg = b;
  applyBg();
  saveSettings();
  updateSettingsUI();
}

function setSoundPack(p) {
  playClick();
  APP.soundPack = p;
  saveSettings();
  updateSettingsUI();
  setTimeout(playClick, 120);
}

function toggleSound() {
  APP.soundEnabled = !APP.soundEnabled;
  saveSettings();
  updateSettingsUI();
  if (APP.soundEnabled) playClick();
}

function setVolume(v) {
  APP.volume = parseFloat(v);
  saveSettings();
}

function updateSettingsUI() {
  const soundToggle = document.getElementById('soundToggle');
  if (soundToggle) soundToggle.classList.toggle('on', APP.soundEnabled);
  const vol = document.getElementById('volumeSlider');
  if (vol) vol.value = APP.volume;
  document.querySelectorAll('.color-preset').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.theme === APP.theme);
  });
  document.querySelectorAll('.bg-preset').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.bg === APP.bg);
  });
  document.querySelectorAll('.sound-preset').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.pack === APP.soundPack);
  });
}

function switchCat(cat) {
  playClick();
  APP.cinemaCat = cat;
  document.querySelectorAll('.cat-tab').forEach(function(t) {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  renderMovies(cat);
}

function getCinemaItems(){
  var all=[];
  [['arabic',ARABIC_MOVIES,'فيلم عربي'],['foreign',FOREIGN_MOVIES,'فيلم أجنبي مترجم'],['plays',PLAYS,'مسرحية']].forEach(function(group){
    group[1].forEach(function(id,i){var fallback=group[2]+' — رقم '+(i+1); all.push({id:id,cat:group[0],label:group[2],title:APP.movieTitles[id]||fallback,index:i});});
  });
  return all;
}
function movieKey(id){return 'movie_'+id;}
function getMovieMeta(id){
  var meta={views:0,rating:0,ratingCount:0};
  try{var x=JSON.parse(localStorage.getItem(movieKey(id))||'null');if(x)meta=x;}catch(e){}
  return meta;
}
function saveMovieMeta(id,meta){try{localStorage.setItem(movieKey(id),JSON.stringify(meta));}catch(e){}}
function loadCinemaState(){
  try{APP.movieTitles=JSON.parse(localStorage.getItem('faylasoof_movie_titles')||'{}')||{};}catch(e){APP.movieTitles={};}
  try{APP.movieViewCounts=JSON.parse(localStorage.getItem('faylasoof_movie_views')||'{}')||{};}catch(e){APP.movieViewCounts={};}
  try{APP.movieFavorites=JSON.parse(localStorage.getItem('faylasoof_movie_favorites')||'[]')||[];}catch(e){APP.movieFavorites=[];}
  try{APP.lastMovie=JSON.parse(localStorage.getItem('faylasoof_last_movie')||'null');}catch(e){APP.lastMovie=null;}
}
function saveCinemaState(){
  try{localStorage.setItem('faylasoof_movie_views',JSON.stringify(APP.movieViewCounts));localStorage.setItem('faylasoof_movie_favorites',JSON.stringify(APP.movieFavorites));if(APP.lastMovie)localStorage.setItem('faylasoof_last_movie',JSON.stringify(APP.lastMovie));}catch(e){}
}
function isMovieFavorite(id){return APP.movieFavorites.indexOf(id)>=0;}
function toggleMovieFavorite(id){
  playClick();
  var i=APP.movieFavorites.indexOf(id);
  if(i>=0) APP.movieFavorites.splice(i,1); else APP.movieFavorites.unshift(id);
  APP.movieFavorites=APP.movieFavorites.slice(0,200); saveCinemaState();
  renderMovies(APP.cinemaCat);
}
function rateMovie(id,rating){
  playClick();
  var meta=getMovieMeta(id); meta.rating=rating; meta.ratingCount=Math.max(1,meta.ratingCount||0); saveMovieMeta(id,meta);
  alert('تم حفظ تقييمك ⭐ '+rating+'/5'); renderMovies(APP.cinemaCat);
}
function openMovieByItem(item){
  if(!item)return;
  APP.movieViewCounts[item.id]=(APP.movieViewCounts[item.id]||0)+1;
  APP.lastMovie={id:item.id,cat:item.cat,title:item.title};
  var meta=getMovieMeta(item.id); meta.views=APP.movieViewCounts[item.id]; saveMovieMeta(item.id,meta); saveCinemaState();
  openVideoInApp(item.id,item.title);
}
function movieCard(item, compact){
  var fav=isMovieFavorite(item.id), views=APP.movieViewCounts[item.id]||0, meta=getMovieMeta(item.id), rating=meta.rating||0;
  return '<div class="movie-card '+(compact?'compact-card':'')+'" data-movie-id="'+item.id+'">'+
    '<div class="movie-thumb-wrap" onclick="openMovieByItem('+JSON.stringify(item).replace(/"/g,'&quot;')+')"><img src="https://img.youtube.com/vi/'+item.id+'/hqdefault.jpg" alt="'+escapeHtml(item.title)+'" loading="lazy" onerror="this.onerror=null;this.src=\'https://img.youtube.com/vi/'+item.id+'/mqdefault.jpg\'"><span class="movie-badge">'+item.label+'</span></div>'+
    '<h3>'+escapeHtml(item.title)+'</h3>'+
    '<div class="movie-meta"><span>👁️ '+views+'</span><span>⭐ '+(rating?rating+'/5':'جديد')+'</span></div>'+
    '<div class="movie-actions"><button onclick="toggleMovieFavorite(\''+item.id+'\')" title="المفضلة">'+(fav?'❤️':'🤍')+'</button><button onclick="openMovieByItem('+JSON.stringify(item).replace(/"/g,'&quot;')+')">▶️ مشاهدة</button><button onclick="showMovieRating(\''+item.id+'\')">⭐</button></div>'+
    '</div>';
}
function showMovieRating(id){
  var old=document.getElementById('movieRatingModal'); if(old)old.remove();
  var m=getMovieMeta(id); var item=getCinemaItems().find(function(x){return x.id===id;});
  var box=document.createElement('div');box.id='movieRatingModal';box.className='modal-overlay show';
  box.innerHTML='<div class="modal-box movie-rating-box"><h3>⭐ تقييم '+escapeHtml(item?item.title:'الفيلم')+'</h3><p>اختر تقييمك</p><div class="rating-stars">'+[1,2,3,4,5].map(function(n){return '<button onclick="rateMovie(\''+id+'\','+n+');document.getElementById(\'movieRatingModal\').remove()">'+(n<=(m.rating||0)?'★':'☆')+'</button>';}).join('')+'</div><button class="btn-cancel" onclick="document.getElementById(\'movieRatingModal\').remove()">إلغاء</button></div>';
  document.body.appendChild(box);
}
function resumeLastMovie(){
  if(!APP.lastMovie){alert('لا يوجد فيديو لم تستكمل مشاهدته بعد.');return;}
  var item=getCinemaItems().find(function(x){return x.id===APP.lastMovie.id;}); if(item)openMovieByItem(item); else alert('المحتوى لم يعد متاحًا.');
}
function randomMovie(){
  playClick(); var all=getCinemaItems(); if(!all.length)return; var item=all[Math.floor(Math.random()*all.length)]; showPage('cinema'); setTimeout(function(){openMovieByItem(item);},120);
}
function showMovieFavorites(){
  var all=getCinemaItems().filter(function(x){return isMovieFavorite(x.id);});
  var grid=document.getElementById('moviesGrid'); if(!grid)return;
  document.querySelectorAll('.cat-tab').forEach(function(t){t.classList.remove('active');});
  grid.innerHTML=all.length?'<div class="cinema-subtitle">❤️ المفضلة السينمائية</div>'+all.map(function(x){return movieCard(x);}).join(''):'<div class="empty-state" style="grid-column:1/-1"><div style="font-size:3rem">🎞️</div><p>لا توجد أفلام محفوظة. اضغط 🤍 على أي فيلم لإضافته.</p></div>';
}
function showMostWatched(){
  var all=getCinemaItems().sort(function(a,b){return (APP.movieViewCounts[b.id]||0)-(APP.movieViewCounts[a.id]||0);}).slice(0,12);
  var grid=document.getElementById('moviesGrid'); if(!grid)return;
  grid.innerHTML='<div class="cinema-subtitle">🔥 الأكثر مشاهدة</div>'+all.map(function(x){return movieCard(x);}).join('');
}
function showNewMovies(){
  var all=getCinemaItems().slice(0,15), grid=document.getElementById('moviesGrid'); if(!grid)return;
  grid.innerHTML='<div class="cinema-subtitle">🆕 مضاف حديثًا</div>'+all.map(function(x){return movieCard(x);}).join('');
}
function renderMovies(cat) {
  var grid=document.getElementById('moviesGrid'); if(!grid)return;
  var list=cat==='arabic'?ARABIC_MOVIES:(cat==='foreign'?FOREIGN_MOVIES:PLAYS);
  var label=cat==='arabic'?'فيلم عربي':(cat==='foreign'?'فيلم أجنبي مترجم':'مسرحية');
  var valid=getPlayableMovieIds(cat,list);
  var max=Math.min(valid.length,30);
  grid.innerHTML=valid.slice(0,max).map(function(id,i){return movieCard({id:id,cat:cat,label:label,title:APP.movieTitles[id]||label+' '+(i+1),index:i});}).join('');
  if(!max)grid.innerHTML='<div class="empty-state" style="grid-column:1/-1"><p>لا توجد فيديوهات متاحة حاليًا في هذا القسم.</p></div>';
  if(valid.length>max)grid.innerHTML+='<div class="empty-state" style="grid-column:1/-1"><p>عرض '+max+' فيديو متاح من أصل '+valid.length+'</p></div>';
  setTimeout(function(){hydrateVisibleMovieTitles();validateVisibleMovies();},30);
}
function getPlayableMovieIds(cat,list){
  try{var saved=JSON.parse(localStorage.getItem('faylasoof_playable_'+cat)||'null');if(Array.isArray(saved)&&saved.length)return list.filter(function(id){return saved.indexOf(id)>=0;});}catch(e){}
  return list;
}
function validateVisibleMovies(){
  document.querySelectorAll('#moviesGrid .movie-card[data-movie-id]').forEach(function(card){
    var id=card.getAttribute('data-movie-id'); if(!id||card.dataset.checked==='1')return; card.dataset.checked='1';
    fetch('https://www.youtube.com/oembed?url='+encodeURIComponent('https://www.youtube.com/watch?v='+id)+'&format=json',{cache:'force-cache'}).then(function(r){
      if(!r.ok)throw new Error('unavailable'); return r.json();
    }).then(function(d){if(!d||!d.title)throw new Error('unavailable');
      APP.movieTitles[id]=d.title;try{localStorage.setItem('faylasoof_movie_titles',JSON.stringify(APP.movieTitles));}catch(e){}
    }).catch(function(){
      card.remove();
      ['arabic','foreign','plays'].forEach(function(cat){try{var k='faylasoof_playable_'+cat,arr=JSON.parse(localStorage.getItem(k)||'null');if(Array.isArray(arr)){arr=arr.filter(function(x){return x!==id;});localStorage.setItem(k,JSON.stringify(arr));}}catch(e){}});
    });
  });
}

function openVideoInApp(id, title) {
  playClick();
  try { APP.lastMovie = {id:id,title:title||'مشاهدة',cat:APP.cinemaCat}; saveCinemaState(); } catch(e) {}
  var modal = document.getElementById('videoModal');
  var frame = document.getElementById('videoFrame');
  var titleEl = document.getElementById('videoTitle');
  if (!modal || !frame) return;
  titleEl.textContent = title || 'مشاهدة';
  // clear first then set to avoid black glitch
  frame.src = '';
  setTimeout(function() {
    frame.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&playsinline=1&rel=0&modestbranding=1&fs=1&enablejsapi=1';
  }, 50);
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeVideo(silent) {
  if (!silent) playClick();
  var modal = document.getElementById('videoModal');
  var frame = document.getElementById('videoFrame');
  if (frame) {
    frame.src = '';
    frame.removeAttribute('src');
  }
  if (modal) modal.classList.remove('show');
  document.body.style.overflow = '';
  // ensure we stay on cinema page
  if (APP.currentPage === 'cinema') {
    var cinemaPage = document.getElementById('page-cinema');
    if (cinemaPage) {
      document.querySelectorAll('.app-page').forEach(function(p) { p.classList.remove('active'); });
      cinemaPage.classList.add('active');
    }
  }
}

function toggleFullscreenVideo() {
  playClick();
  var wrap = document.getElementById('videoWrap');
  if (!wrap) return;
  if (!document.fullscreenElement) {
    (wrap.requestFullscreen || wrap.webkitRequestFullscreen || function(){}).call(wrap);
  } else {
    (document.exitFullscreen || document.webkitExitFullscreen || function(){}).call(document);
  }
}

function popcornClick() {
  var now = Date.now();
  if (now - APP.lastClick > 1500) APP.clickCount = 0;
  APP.clickCount++;
  APP.lastClick = now;
  var display = document.getElementById('clickCount');
  if (display) { display.textContent = APP.clickCount; display.classList.add('show'); }
  var bag = document.querySelector('.popcorn-bag');
  if (bag) { bag.style.transform = 'scale(0.88)'; setTimeout(function(){ bag.style.transform = ''; }, 100); }
  playClick();
  if (APP.clickCount >= 5) {
    explodePopcorn();
    APP.clickCount = 0;
    if (display) display.classList.remove('show');
  }
}

function explodePopcorn() {
  playSuccess();
  var msg = document.createElement('div');
  msg.className = 'boom-msg';
  msg.textContent = '💥 فرقعة فشار!';
  document.body.appendChild(msg);
  setTimeout(function(){ msg.remove(); }, 1500);
  for (var i = 0; i < 40; i++) {
    setTimeout(function(){
      var pop = document.createElement('div');
      pop.className = 'flying-popcorn';
      pop.textContent = '🍿';
      pop.style.left = (40 + Math.random() * 50) + 'px';
      pop.style.top = (window.innerHeight - 140) + 'px';
      var angle = (Math.random() * 140 - 70) * Math.PI / 180;
      var dist = 200 + Math.random() * 400;
      pop.style.setProperty('--tx', Math.sin(angle) * dist + 'px');
      pop.style.setProperty('--ty', (-Math.cos(angle) * dist - Math.random() * 180) + 'px');
      pop.style.setProperty('--rot', ((Math.random() - 0.5) * 720) + 'deg');
      document.body.appendChild(pop);
      setTimeout(function(){ pop.remove(); }, 2100);
    }, i * 20);
  }
}

function getAllWisdoms() {
  var user = JSON.parse(localStorage.getItem('user_wisdoms') || '[]');
  var builtin = (typeof BUILTIN_WISDOMS !== 'undefined') ? BUILTIN_WISDOMS : [];
  var list = user.map(function(u){ return u.text + (u.name ? ' — ' + u.name : ''); }).concat(builtin);
  return list.length ? list : ['أضف حكمتك الأولى من القائمة!'];
}

function startWisdomRotate() {
  if (APP.wisdomTimer) clearInterval(APP.wisdomTimer);
  showCurrentWisdom();
  APP.wisdomTimer = setInterval(function(){
    var list = getAllWisdoms();
    APP.wisdomIndex = (APP.wisdomIndex + 1) % list.length;
    showCurrentWisdom();
  }, 4000);
}

function showCurrentWisdom() {
  var list = getAllWisdoms();
  var el = document.getElementById('wisdomText');
  if (!el || !list.length) return;
  el.style.opacity = '0';
  setTimeout(function(){
    el.textContent = '"' + list[APP.wisdomIndex % list.length] + '"';
    el.style.opacity = '1';
  }, 250);
}

function openAddWisdom() {
  playClick();
  closeMenu();
  document.getElementById('addWisdomModal').classList.add('show');
  document.getElementById('wisdomName').value = '';
  document.getElementById('wisdomBody').value = '';
}

function closeAddWisdom() {
  document.getElementById('addWisdomModal').classList.remove('show');
}

function saveUserWisdom() {
  playClick();
  var name = (document.getElementById('wisdomName').value || '').trim() || 'مجهول';
  var text = (document.getElementById('wisdomBody').value || '').trim();
  if (!text || text.length < 5) { alert('اكتب حكمة أطول قليلاً'); return; }
  var list = JSON.parse(localStorage.getItem('user_wisdoms') || '[]');
  list.unshift({ name: name, text: text, date: new Date().toISOString() });
  if (list.length > 50) list.length = 50;
  localStorage.setItem('user_wisdoms', JSON.stringify(list));
  closeAddWisdom();
  playSuccess();
  APP.wisdomIndex = 0;
  startWisdomRotate();
  alert('تم إضافة حكمتك بنجاح!');
}

function todayKey() {
  var d = new Date();
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}

function showLuckOnce() {
  var key = 'luck_' + todayKey();
  var saved = localStorage.getItem(key);
  var card = document.getElementById('luckContent');
  var btn = document.getElementById('luckBtn');
  if (saved) {
    try {
      var l = JSON.parse(saved);
      card.innerHTML = '<div class="emoji">' + l.emoji + '</div><h2>حظك اليوم</h2><p>' + l.text + '</p><p style="font-size:0.8rem;color:var(--text-secondary);margin-top:12px">يظهر مرة واحدة يومياً</p>';
    } catch(e) {
      card.innerHTML = '<div class="emoji">✨</div><h2>حظك محفوظ لليوم</h2>';
    }
    if (btn) btn.style.display = 'none';
  } else {
    card.innerHTML = '<div class="emoji">✨</div><h2>اضغط لمعرفة حظك</h2><p>رسالة واحدة فقط كل يوم</p>';
    if (btn) btn.style.display = 'inline-block';
  }
}

function generateLuck() {
  playClick();
  var key = 'luck_' + todayKey();
  if (localStorage.getItem(key)) { showLuckOnce(); return; }
  var list = (typeof BUILTIN_LUCKS !== 'undefined') ? BUILTIN_LUCKS : [{ emoji: '🌟', text: 'يوم مبارك!' }];
  var l = list[Math.floor(Math.random() * list.length)];
  localStorage.setItem(key, JSON.stringify(l));
  var card = document.getElementById('luckContent');
  if (card) card.innerHTML = '<div class="emoji">' + l.emoji + '</div><h2>حظك اليوم</h2><p>' + l.text + '</p>';
  var btn = document.getElementById('luckBtn');
  if (btn) btn.style.display = 'none';
  playSuccess();
}

// Blog categories for home
var BLOG_CATEGORIES = [
  { name: 'أخبار', icon: '📰', label: 'أخبار', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1', color: '#eab308' },
  { name: 'علوم', icon: '🔬', label: 'علوم', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B9%D9%84%D9%88%D9%85', color: '#eab308' },
  { name: 'تكنولوجيا', icon: '💻', label: 'تكنولوجيا', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7', color: '#eab308' },
  { name: 'رياضة', icon: '⚽', label: 'رياضة', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9', color: '#eab308' },
];

function blogJsonp(label, callback) {
  var cb='faylasoofFeed_'+Date.now()+'_'+Math.floor(Math.random()*10000);
  var script=document.createElement('script');
  var timeout=setTimeout(function(){cleanup();callback([]);},7000);
  function cleanup(){clearTimeout(timeout);try{delete window[cb];}catch(e){}if(script.parentNode)script.parentNode.removeChild(script);}
  window[cb]=function(data){try{callback((data&&data.feed&&data.feed.entry)||[]);}finally{cleanup();}};
  var base='https://alfaylasooof.blogspot.com/feeds/posts/default/';
  var url=label?(base+'/-/'+encodeURIComponent(label)) : base;
  script.src=url+'?alt=json-in-script&max-results=8&callback='+cb;
  script.onerror=function(){cleanup();callback([]);};
  document.head.appendChild(script);
}
function entryInfo(entry){
  var links=entry.link||[], href='';
  links.some(function(x){if(x.rel==='alternate'){href=x.href;return true;}return false;});
  var title=(entry.title&&entry.title.$t)||'مقال من الفيلسوف';
  var html=(entry.content&&entry.content.$t)||(entry.summary&&entry.summary.$t)||'';
  var img='';var m=html.match(/<img[^>]+src=["']([^"']+)["']/i);if(m)img=m[1];
  if(!img && entry.media$thumbnail)img=entry.media$thumbnail.url;
  return {title:title,url:href,image:img};
}
function renderCategoryPosts(i, entries){
  var c=BLOG_CATEGORIES[i], host=document.getElementById('categoryPosts-'+i);if(!host||!c)return;
  var posts=entries.map(entryInfo).filter(function(x){return x.url;}).slice(0,8);
  if(!posts.length){host.innerHTML='<button class="category-fallback" onclick="openCategoryLatest('+i+')">فتح '+escapeHtml(c.name)+' داخل المدونة</button>';return;}
  var cards=posts.concat(posts).map(function(p){
    return '<button class="blog-post-card" onclick=\'openBlogInApp('+JSON.stringify(p.url)+','+JSON.stringify(p.title)+')\'><img src="'+escapeAttr(p.image||'images/app_icon.png')+'" alt="" loading="lazy" onerror="this.src=\'images/app_icon.png\'"><span>'+escapeHtml(p.title)+'</span></button>';
  }).join('');
  host.innerHTML='<div class="news-ticker-track">'+cards+'</div>';
}
function renderCategories(){
  var grid=document.getElementById('categoriesGrid'); if(!grid)return;
  grid.innerHTML=BLOG_CATEGORIES.map(function(c,i){
    return '<section class="category-section" style="--cat-color:'+c.color+'">'+
      '<button class="category-title" onclick="openCategoryHub('+i+')"><span>'+c.icon+'</span><b>'+c.name+'</b></button>'+
      '<div class="category-posts" id="categoryPosts-'+i+'"><div class="category-loading">جاري تحميل المقالات...</div></div></section>';
  }).join('');
  BLOG_CATEGORIES.forEach(function(c,i){ if(c.label) blogJsonp(c.label,function(entries){renderCategoryPosts(i,entries);}); else blogJsonp('',function(entries){renderCategoryPosts(i,entries);}); });
}
function openCategoryHub(i){
  playClick(); var c=BLOG_CATEGORIES[i]; if(!c)return;
  var box=document.getElementById('categoryHub'), content=document.getElementById('categoryHubContent'); if(!box||!content)return;
  content.innerHTML='<div class="category-hub-icon">'+c.icon+'</div><h2>'+escapeHtml(c.name)+'</h2><p>اختر ما تريد</p><div class="category-hub-grid">'+
    '<button onclick="openCategoryLatest('+i+')">🆕 أحدث المقالات</button>'+
    '<button onclick="openCategoryMostRead('+i+')">🔥 الأكثر قراءة</button>'+
    '<button onclick="showPage(\'favorites\');closeCategoryHub()">★ المفضلة</button>'+
    '<button onclick="openCategoryRandom('+i+')">🎯 مقال عشوائي</button></div>';
  box.classList.add('show');box.setAttribute('aria-hidden','false');
}
function closeCategoryHub(){var b=document.getElementById('categoryHub');if(b){b.classList.remove('show');b.setAttribute('aria-hidden','true');}}
function openCategoryLatest(i){var c=BLOG_CATEGORIES[i];if(!c)return;closeCategoryHub();openBlogInApp(c.url,c.name+' — أحدث المقالات');}
function openCategoryMostRead(i){var c=BLOG_CATEGORIES[i];if(!c)return;closeCategoryHub();openBlogInApp((c.label?'https://alfaylasooof.blogspot.com/search/label/'+encodeURIComponent(c.label):'https://alfaylasooof.blogspot.com/?m=1')+'?sort=popular','🔥 '+c.name+' — الأكثر قراءة');}
function openCategoryRandom(i){
  var c=BLOG_CATEGORIES[i];if(!c)return;closeCategoryHub();
  blogJsonp(c.label||'',function(entries){var posts=entries.map(entryInfo).filter(function(x){return x.url;});var p=posts.length?posts[Math.floor(Math.random()*posts.length)]:null;if(p)openBlogInApp(p.url,'🎯 '+c.name+' — مقال عشوائي');else openBlogInApp(c.url+'?random='+Date.now(),'🎯 '+c.name+' — مقال عشوائي');});
}
function openLatestArticles(){openBlogInApp('https://alfaylasooof.blogspot.com/?m=1','🆕 آخر المقالات');}
function openMostReadToday(){openBlogInApp('https://alfaylasooof.blogspot.com/?m=1#popular','🔥 الأكثر قراءة اليوم');}
function openRandomArticle(){openCategoryRandom(Math.floor(Math.random()*BLOG_CATEGORIES.length));}
function openLastArticle(){try{var x=JSON.parse(localStorage.getItem('faylasoof_last_page')||'null');if(x&&x.url){openBlogInApp(x.url,x.title||'آخر ما قرأت');return;}}catch(e){}alert('لم يتم حفظ مقال سابق بعد. افتح أي مقال وسيظهر هنا لاحقًا.');}

function openBlogExternal() {
  playClick();
  openBlogInApp('https://alfaylasooof.blogspot.com/?m=1', 'المدونة الأصلية');
}

function openBlogInApp(url, title) {
  playClick();
  var modal = document.getElementById('blogModal');
  var frame = document.getElementById('blogFrame');
  var titleEl = document.getElementById('blogTitle');
  if (!modal || !frame) {
    window.open(url, '_blank');
    return;
  }

  // ضع علامة في سجل الصفحة حتى زر الرجوع في أندرويد يرجع من المدونة
  // إلى التطبيق بدل أن يخرج من الـWebView أو يترك شاشة بيضاء.
  if (!APP.blogHistoryActive) {
    APP.blogHistoryActive = true;
    try {
      history.pushState({ page: APP.currentPage || 'home', blog: true }, '', '#blog');
    } catch(e) {}
  }

  if (titleEl) titleEl.textContent = title || 'المدونة';
  frame.src = 'about:blank';
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('blog-open');
  document.body.style.overflow = 'hidden';
  mountBottomNav();
  setTimeout(function(){
    try { frame.src = url; } catch(e) {}
  }, 30);
}

function closeBlogInApp(silent, fromHistory) {
  if (!silent) playClick();
  var modal = document.getElementById('blogModal');
  var frame = document.getElementById('blogFrame');
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch(e) {}
  }
  if (frame) { frame.src = 'about:blank'; frame.removeAttribute('src'); }
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
  document.body.classList.remove('blog-open');
  document.body.style.overflow = '';
  APP.blogHistoryActive = false;
  mountBottomNav();

  // زر الرجوع داخل المدونة: ارجع في سجل التطبيق مرة واحدة فقط.
  if (!fromHistory && !APP.closingBlogFromHistory) {
    try {
      APP.closingBlogFromHistory = true;
      history.back();
      setTimeout(function(){ APP.closingBlogFromHistory = false; }, 100);
    } catch(e) {
      APP.closingBlogFromHistory = false;
    }
  }
}

function toggleFullscreenBlog() {
  playClick();
  var modal = document.getElementById('blogModal');
  if (!modal) return;
  try {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      var fn = modal.requestFullscreen || modal.webkitRequestFullscreen;
      if (fn) fn.call(modal);
    } else {
      var exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) exit.call(document);
    }
  } catch(e) {}
}

function openSearch(){showPage('search');setTimeout(function(){var i=document.getElementById('searchInput');if(i)i.focus();},80);}
function doSearch() {
  playClick();
  var input=document.getElementById('searchInput'); var q=(input&&input.value||'').trim();
  if (!q) return;
  saveRecentSearch(q);
  openBlogInApp('https://alfaylasooof.blogspot.com/search?q='+encodeURIComponent(q),'🔎 نتائج البحث: '+q);
}

// Hardware back button (Android WebView)
document.addEventListener('backbutton', function(e) {
  if (goBack()) {
    e.preventDefault();
  }
}, false);


// Also capture Android back via history
window.addEventListener('load', function() {
  try {
    var initialPage = APP.currentPage || 'home';
    history.replaceState({ page: initialPage }, '', '#' + initialPage);
  } catch(e) {}
});

// رجوع أندرويد/المتصفح: ارجع داخل صفحات التطبيق أولًا بدل إعادة تحميل الصفحة.
window.addEventListener('popstate', function(e) {
  // لو المدونة مفتوحة، أول ضغطة رجوع تخص المدونة نفسها فقط.
  // لا تسمح للـWebView بالوصول إلى صفحة فارغة.
  var blogOpen = document.getElementById('blogModal')?.classList.contains('show');
  if (blogOpen || APP.blogHistoryActive) {
    APP.closingBlogFromHistory = true;
    closeBlogInApp(true, true);
    setTimeout(function(){ APP.closingBlogFromHistory = false; }, 50);
    return;
  }

  var statePage = e && e.state && e.state.page;
  var hash = location.hash || '';
  var page = statePage || (hash.charAt(0) === '#' ? hash.slice(1) : '');
  if (!page || !document.getElementById('page-' + page)) page = 'home';

  if (APP.history.length > 1) {
    var idx = APP.history.lastIndexOf(page);
    if (idx >= 0) APP.history = APP.history.slice(0, idx + 1);
    else APP.history = ['home', page];
  } else {
    APP.history = ['home'];
  }
  showPage(page, false);
});

function mountBottomNav() {
  var nav = document.querySelector('.bottom-nav');
  if (!nav) return;

  // مهم جدًا: عند فتح المدونة/المقال داخل الـiframe لا نثبت شريط التطبيق فوق المحتوى.
  // هذا الشرط مقصود أن يسبق أي style يتم وضعه بالـJS لأن الدالة تُستدعى دوريًا.
  if (document.body && document.body.classList.contains('blog-open')) {
    nav.style.setProperty('display', 'none', 'important');
    nav.style.setProperty('visibility', 'hidden', 'important');
    nav.style.setProperty('pointer-events', 'none', 'important');
    nav.style.setProperty('opacity', '0', 'important');
    return;
  }

  // إخراج الشريط من أي حاوية قد تجعل position:fixed يتحول إلى شريط داخل المحتوى في بعض WebView.
  if (nav.parentElement !== document.body) document.body.appendChild(nav);
  nav.style.setProperty('position', 'fixed', 'important');
  nav.style.setProperty('top', 'auto', 'important');
  nav.style.setProperty('bottom', '0px', 'important');
  nav.style.setProperty('left', '0px', 'important');
  nav.style.setProperty('right', '0px', 'important');
  nav.style.setProperty('width', '100%', 'important');
  nav.style.setProperty('z-index', '2147483000', 'important');
  nav.style.setProperty('display', 'flex', 'important');
  nav.style.setProperty('visibility', 'visible', 'important');
  nav.style.setProperty('pointer-events', 'auto', 'important');
  nav.style.setProperty('opacity', '1', 'important');
}

function ensurePageVisible() {
  var root = document.getElementById('faylasoofRoot');
  var pages = document.querySelectorAll('.app-page');
  var wanted = document.getElementById('page-' + (APP.currentPage || 'home')) || document.getElementById('page-home');
  if (!pages.length || !wanted) return;

  // App builders sometimes inject generic rules such as .page {display:none}.
  // Keep our app under a unique class and force the selected screen visible.
  if (root) {
    root.style.setProperty('display', 'block', 'important');
    root.style.setProperty('visibility', 'visible', 'important');
    root.style.setProperty('opacity', '1', 'important');
    root.style.setProperty('width', '100%', 'important');
    root.style.setProperty('min-height', '100vh', 'important');
  }

  pages.forEach(function(p) {
    var isWanted = p === wanted;
    p.classList.toggle('active', isWanted);
    p.style.setProperty('display', isWanted ? 'block' : 'none', 'important');
    p.style.setProperty('visibility', isWanted ? 'visible' : 'hidden', 'important');
    p.style.setProperty('opacity', isWanted ? '1' : '0', 'important');
    p.style.setProperty('position', 'relative', 'important');
    p.style.setProperty('z-index', '2', 'important');
  });
}


/* ===== الفيلسوف v4 additions: persistence, offline, deep links, safe blog ===== */
APP.version = '6.5.0';
APP.notifyEnabled = false;
APP.lastBlogUrl = '';
APP.blogLoadTimer = null;

function getSaved(key){ try{return JSON.parse(localStorage.getItem(key)||'[]')}catch(e){return[]} }
function setSaved(key,list){ localStorage.setItem(key,JSON.stringify(list)); }
function saveArticle(kind,title,url,image){
  if(!url) return;
  var key=kind==='later'?'saved_later':'favorites';
  var list=getSaved(key);
  if(!list.some(function(x){return x.url===url;})) list.unshift({title:title||'مقال من الفيلسوف',url:url,image:image||'',date:Date.now()});
  setSaved(key,list.slice(0,200)); renderSaved();
}
function removeSaved(kind,url){var key=kind==='later'?'saved_later':'favorites';setSaved(key,getSaved(key).filter(function(x){return x.url!==url;}));renderSaved();}
function clearSaved(kind){if(!confirm(kind==='later'?'مسح كل عناصر قراءة لاحقًا؟':'مسح كل المفضلة؟'))return;setSaved(kind==='later'?'saved_later':'favorites',[]);renderSaved();}
function renderSaved(){
  [['favorites','favoritesList','favorites'],['later','laterList','later']].forEach(function(x){
    var el=document.getElementById(x[1]); if(!el)return;
    var list=getSaved(x[2]);
    if(!list.length){el.innerHTML='<div class="empty-state"><div style="font-size:2.5rem">'+(x[0]==='favorites'?'⭐':'📖')+'</div><p>'+(x[0]==='favorites'?'لا توجد مقالات محفوظة حتى الآن. ابدأ بإضافة المقالات التي تريد الرجوع إليها.':'لا توجد مقالات محفوظة للقراءة لاحقًا.')+'</p></div>';return;}
    el.innerHTML=list.map(function(a){return '<div class="saved-card"><h3>'+escapeHtml(a.title)+'</h3><p>'+escapeHtml(a.url)+'</p><div class="saved-actions"><button class="small-btn" onclick="openBlogInApp(\''+escapeAttr(a.url)+'\',\''+escapeAttr(a.title)+'\')">فتح المقال</button><button class="danger-btn" onclick="removeSaved(\''+x[0]+'\',\''+escapeAttr(a.url)+'\')">حذف</button></div></div>';}).join('');
  });
}
function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});}
function escapeAttr(s){return String(s||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\n/g,' ')}
function openSocial(url){playClick();try{if(window.AndroidFaylasoof&&AndroidFaylasoof.openExternal)AndroidFaylasoof.openExternal(url);else window.open(url,'_blank');}catch(e){window.location.href=url;}}
function toggleDarkMode(){document.body.classList.remove('light-mode');localStorage.setItem('faylasoof_mode','dark');updateSettingsUI();}
function setLightMode(){document.body.classList.remove('light-mode');localStorage.setItem('faylasoof_mode','dark');updateSettingsUI();}
function toggleNotifications(){
  APP.notifyEnabled=!APP.notifyEnabled;localStorage.setItem('faylasoof_notifications',APP.notifyEnabled?'1':'0');
  if(APP.notifyEnabled && 'Notification' in window && Notification.permission==='default'){try{Notification.requestPermission();}catch(e){}}
  updateSettingsUI();
}
function clearAppCache(){
  try{if(window.caches)caches.keys().then(function(keys){return Promise.all(keys.map(function(k){return caches.delete(k)}));});}catch(e){}
  localStorage.removeItem('faylasoof_blog_cache'); alert('تم طلب مسح الكاش. أعد تحميل المدونة لتحديث المحتوى.');
}
function clearLocalData(){
  if(!confirm('سيتم حذف المفضلة وقراءة لاحقًا والحكم المضافة وإعدادات التطبيق. هل أنت متأكد؟'))return;
  ['favorites','saved_later','user_wisdoms','faylasoof_settings','faylasoof_notifications','faylasoof_mode'].forEach(function(k){localStorage.removeItem(k)});
  location.reload();
}
function updateSettingsUI_v4(){
  var n=document.getElementById('notifyToggle'); if(n)n.classList.toggle('on',APP.notifyEnabled);
  var d=document.getElementById('darkToggle'); if(d)d.classList.toggle('on',!document.body.classList.contains('light-mode'));
  var v=document.getElementById('appVersionText');if(v)v.textContent='v'+APP.version;
}
var _oldUpdateSettingsUI=updateSettingsUI;
updateSettingsUI=function(){_oldUpdateSettingsUI();updateSettingsUI_v4();};

function blogLoading(on){var m=document.getElementById('blogModal');if(m)m.classList.toggle('is-loading',!!on);}
function showBlogError(msg){
  var e=document.getElementById('blogError');if(e){e.hidden=false;var t=document.getElementById('blogErrorText');if(t)t.textContent=msg||'تعذر تحميل المدونة. تحقق من الاتصال ثم أعد المحاولة.';}
}
function hideBlogError(){var e=document.getElementById('blogError');if(e)e.hidden=true;}
function retryBlog(){hideBlogError();if(APP.lastBlogUrl)openBlogInApp(APP.lastBlogUrl,document.getElementById('blogTitle')?.textContent||'المدونة');}
function refreshBlog(){if(!APP.lastBlogUrl)return;var f=document.getElementById('blogFrame');blogLoading(true);hideBlogError();if(f){f.src='about:blank';setTimeout(function(){f.src=APP.lastBlogUrl;},60);}}
function checkConnection(){
  if(!navigator.onLine){var o=document.getElementById('blogOffline');if(o)o.hidden=false;return false;}
  var o=document.getElementById('blogOffline');if(o)o.hidden=true;return true;
}
function parseDeepLink(){
  var qs=new URLSearchParams(location.search);
  var article=qs.get('article')||qs.get('url');
  if(article && /^https?:\/\//i.test(article)){setTimeout(function(){openBlogInApp(article,'المقال');},250);return;}
  var h=location.hash||''; if(h.indexOf('#article=')===0){var u=decodeURIComponent(h.slice(9));if(/^https?:\/\//i.test(u))setTimeout(function(){openBlogInApp(u,'المقال');},250);}
}
function doSearch(){
  playClick();var q=(document.getElementById('searchInput')?.value||'').trim();if(!q)return;
  var url='https://alfaylasooof.blogspot.com/search?q='+encodeURIComponent(q);
  var r=document.getElementById('searchResults');if(r)r.innerHTML='<div class="search-result">🔎 جاري فتح نتائج البحث داخل المدونة...</div>';
  openBlogInApp(url,'نتائج البحث: '+q);
}
function announceNative(type,payload){
  try{if(window.AndroidFaylasoof&&AndroidFaylasoof[type])AndroidFaylasoof[type](JSON.stringify(payload||{}));}catch(e){}
  try{window.postMessage({source:'faylasoof',type:type,payload:payload||{}},'*');}catch(e){}
}
function shareText(title,url,text){
  var data={title:title||'الفيلسوف',text:text||title||'الفيلسوف',url:url||''};
  if(navigator.share){navigator.share(data).catch(function(){});}
  else if(navigator.clipboard){navigator.clipboard.writeText((data.text+' '+data.url).trim()).then(function(){alert('تم نسخ المحتوى للمشاركة');});}
  else alert((data.text+' '+data.url).trim());
}
function shareWisdom(text){shareText('حكمة من الفيلسوف','',text+'\n— الفيلسوف');}
function shareArticle(title,url){shareText(title,url,title+'\n'+url);}

function startArticleWatcher(){
  if(!APP.notifyEnabled)return;
  try{
    fetch('https://alfaylasooof.blogspot.com/feeds/posts/default?alt=json&max-results=1',{cache:'no-store'})
    .then(function(r){if(!r.ok)throw 0;return r.json();})
    .then(function(d){
      var e=d.feed&&d.feed.entry&&d.feed.entry[0];if(!e)return;
      var id=(e.id&&e.id.$t)||'';var last=localStorage.getItem('last_blog_article_id');
      if(last && last!==id){
        var title=(e.title&&e.title.$t)||'مقال جديد';
        var link=((e.link||[]).find(function(l){return l.rel==='alternate';})||{}).href||'https://alfaylasooof.blogspot.com/';
        if('Notification' in window && Notification.permission==='granted'){try{new Notification('الفيلسوف',{body:title,icon:'https://www.google.com/s2/favicons?domain=alfaylasooof.blogspot.com'});}catch(x){}}
        announceNative('notifyNewArticle',{title:title,url:link});
      }
      localStorage.setItem('last_blog_article_id',id);
    }).catch(function(){});
  }catch(e){}
}
function checkCinemaCatalogUpdate(){
  try{
    var all=getCinemaItems(); var sig=all.map(function(x){return x.id;}).join('|');
    var old=localStorage.getItem('faylasoof_cinema_catalog_sig');
    if(old && old!==sig && APP.notifyEnabled){
      var added=all.filter(function(x){return old.indexOf(x.id)<0;})[0];
      if(added){
        if('Notification' in window && Notification.permission==='granted'){try{new Notification('الفيلسوف 🎬',{body:'تمت إضافة '+added.title});}catch(e){}}
        announceNative('notifyNewMovie',{title:'فيلم جديد: '+added.title,id:added.id});
      }
    }
    localStorage.setItem('faylasoof_cinema_catalog_sig',sig);
  }catch(e){}
}

function initOfflineSupport(){
  try{
    window.addEventListener('offline',function(){var o=document.getElementById('blogOffline');if(o)o.hidden=false;});
    window.addEventListener('online',function(){var o=document.getElementById('blogOffline');if(o)o.hidden=true;});
  }catch(e){}
}

var _oldOpenBlogInApp=openBlogInApp;
openBlogInApp=function(url,title){
  APP.lastBlogUrl=url; hideBlogError(); blogLoading(true); checkConnection();
  try{localStorage.setItem('faylasoof_last_page',JSON.stringify({url:url,title:title||'المدونة',time:Date.now()}));}catch(e){}
  _oldOpenBlogInApp(url,title);
};
var _oldCloseBlogInApp=closeBlogInApp;
closeBlogInApp=function(silent){blogLoading(false);_oldCloseBlogInApp(silent);};

document.addEventListener('DOMContentLoaded',function(){
  var f=document.getElementById('blogFrame');
  if(f){
    f.addEventListener('load',function(){blogLoading(false);hideBlogError();});
    f.addEventListener('error',function(){blogLoading(false);showBlogError();});
  }
  var mode=localStorage.getItem('faylasoof_mode');if(mode==='light')document.body.classList.add('light-mode');
  APP.notifyEnabled=localStorage.getItem('faylasoof_notifications')==='1';
  loadCinemaState(); renderSaved();updateSettingsUI_v4();initOfflineSupport(); checkCinemaCatalogUpdate();
  setTimeout(parseDeepLink,300);setTimeout(startArticleWatcher,5000);setInterval(startArticleWatcher,10*60*1000);
});

window.addEventListener('beforeunload',function(){
  try{localStorage.setItem('faylasoof_last_page',JSON.stringify({page:APP.currentPage,time:Date.now()}));}catch(e){}
});

function bootApp() {
  try { mountBottomNav(); } catch(e) {}
  try { loadSettings(); } catch(e) {}
  try { renderCategories(); } catch(e) {}
  try { startWisdomRotate(); } catch(e) {}
  // Always establish a visible page, even if the host WebView fires extra navigation events.
  document.querySelectorAll('.app-page').forEach(function(p){ p.classList.remove('active'); });
  var home = document.getElementById('page-home');
  if (home) home.classList.add('active');
  APP.currentPage = 'home';
  ensurePageVisible();
  try {
    var savedPage = JSON.parse(localStorage.getItem('faylasoof_last_page') || 'null');
    if(savedPage && savedPage.page && document.getElementById('page-'+savedPage.page) && savedPage.page !== 'home') showPage(savedPage.page,false);
  } catch(e) {}

  var vol = document.getElementById('volumeSlider');
  if (vol) vol.addEventListener('input', function(e){ setVolume(e.target.value); });
  renderSaved(); updateSettingsUI_v4();
  setTimeout(function(){
    var s=document.getElementById('appSplash');
    if(s){s.classList.add('hide');setTimeout(function(){s.remove();},300);}
  }, 650);

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootApp, {once:true});
} else {
  bootApp();
}

// AppMint/Android WebViews can briefly re-layout the document after startup.
// Keep the actual app page mounted instead of allowing a blank background.
setInterval(function(){ ensurePageVisible(); mountBottomNav(); }, 250);
try {
  var pageKeeper = new MutationObserver(function(){ ensurePageVisible(); });
  pageKeeper.observe(document.documentElement, {subtree:true, attributes:true, attributeFilter:['class','style','hidden']});
} catch(e) {}
window.addEventListener('pageshow', function(){ ensurePageVisible(); mountBottomNav(); });
window.addEventListener('visibilitychange', function(){ if (!document.hidden) ensurePageVisible(); });


/* ===== الفيلسوف v5.7: all remaining content & UX upgrades ===== */
APP.version = '6.5.0';
APP.savedTab = 'articles';
APP.dataSaver = false;
APP.notifyTypes = {blog:true, cinema:true};

function loadV57State(){
  try{APP.dataSaver=localStorage.getItem('faylasoof_data_saver')==='1';}catch(e){}
  try{APP.notifyTypes=Object.assign({blog:true,cinema:true},JSON.parse(localStorage.getItem('faylasoof_notify_types')||'{}'));}catch(e){APP.notifyTypes={blog:true,cinema:true};}
  try{var fs=parseFloat(localStorage.getItem('faylasoof_font_scale')); if(fs) document.documentElement.style.setProperty('--font-scale',fs);}catch(e){}
  try{renderRecentSearches();}catch(e){}
  try{renderWisdomFavorites();}catch(e){}
}
function saveV57(){try{localStorage.setItem('faylasoof_data_saver',APP.dataSaver?'1':'0');localStorage.setItem('faylasoof_notify_types',JSON.stringify(APP.notifyTypes));}catch(e){}}
function todaySeed(){var d=new Date();return parseInt(''+d.getFullYear()+String(d.getMonth()+1).padStart(2,'0')+String(d.getDate()).padStart(2,'0'),10);}
function seeded(seed){var x=Math.sin(seed)*10000;return x-Math.floor(x);}

/* v6.1 keeps the feed-based category renderer defined above. */
/* ===== v6.1.0 final UX overrides ===== */
APP.version = '6.5.0';
function openBlogInApp(url,title){
  playClick();var modal=document.getElementById('blogModal'),frame=document.getElementById('blogFrame'),titleEl=document.getElementById('blogTitle');
  if(!modal||!frame){return;}
  if(!APP.blogHistoryActive){APP.blogHistoryActive=true;try{history.pushState({page:APP.currentPage||'home',blog:true},'', '#blog');}catch(e){}}
  if(titleEl)titleEl.textContent=title||'المدونة';
  APP.lastBlogUrl=url;try{localStorage.setItem('faylasoof_last_page',JSON.stringify({url:url,title:title||'المدونة',page:APP.currentPage||'home'}));}catch(e){}
  blogLoading(true);hideBlogError();modal.classList.add('show');modal.setAttribute('aria-hidden','false');document.body.classList.add('blog-open');document.body.style.overflow='hidden';
  frame.loading='lazy';frame.src='about:blank';
  setTimeout(function(){try{frame.src=url+(url.indexOf('?')>=0?'&':'?')+'m=1';}catch(e){}},80);
}
function openVideoInApp(id,title){
  playClick();if(!id)return;APP.lastMovie={id:id,title:title||'مشاهدة',cat:APP.cinemaCat};saveCinemaState();
  var modal=document.getElementById('videoModal'),frame=document.getElementById('videoFrame'),titleEl=document.getElementById('videoTitle');if(!modal||!frame)return;
  if(titleEl)titleEl.textContent=title||'مشاهدة';frame.src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&playsinline=1&rel=0&modestbranding=1&fs=1';modal.classList.add('show');
}
function bootV610(){
  try{loadV57State();updateV57UI();renderRecentSearches();renderWisdomFavorites();loadCinemaState();initV58Luck();renderCategories();}catch(e){}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootV610,{once:false});else setTimeout(bootV610,0);

/* ===== v6.1.1 requested UX overrides ===== */
APP.version = '6.5.0';
function v611Back(){return goBack();}
function openRandomMovie(){
  try{var all=getCinemaItems();if(all&&all.length){var x=all[Math.floor(Math.random()*all.length)];showPage('cinema');setTimeout(function(){openMovieByItem(x);},120);return;}}catch(e){}
  showPage('cinema');
}
function renderAddedWisdoms(){
  var box=document.getElementById('addedWisdomList');if(!box)return;
  var a=[];try{a=JSON.parse(localStorage.getItem('user_wisdoms')||'[]')}catch(e){}
  box.hidden=false;box.innerHTML=a.length?a.map(function(x,i){return '<div class="saved-card"><div><strong>'+escapeHtml(x.name||'مجهول')+'</strong><p>'+escapeHtml(x.text||x.body||'')+'</p></div><button onclick="deleteUserWisdom('+i+')">✕</button></div>';}).join(''):'<div class="empty-state">لا توجد حكم مضافة بعد.</div>';
}
function deleteUserWisdom(i){try{var a=JSON.parse(localStorage.getItem('user_wisdoms')||'[]');a.splice(i,1);localStorage.setItem('user_wisdoms',JSON.stringify(a));renderAddedWisdoms();startWisdomRotate();}catch(e){}}
function toggleDarkMode(){
  try{var dark=document.body.classList.toggle('light-mode')?false:true;localStorage.setItem('faylasoof_dark',dark?'1':'0');}catch(e){}
}
function requestNativePermissions(){
  try{
    if(window.AndroidNative&&AndroidNative.requestPermissions){
      AndroidNative.requestPermissions();
      alert('افتح إعدادات الهاتف واسمح بالإشعارات والتخزين لتفعيل كل الميزات.');
      return;
    }
  }catch(e){}
  alert('من إعدادات الهاتف → التطبيقات → الفيلسوف → الأذونات، فعّل الإشعارات والتخزين.');
}catch(e){}}
function shareAppNative(){try{if(window.AndroidNative&&AndroidNative.shareText)AndroidNative.shareText('تطبيق الفيلسوف','https://alfaylasooof.blogspot.com');else if(navigator.share)navigator.share({title:'الفيلسوف',text:'تطبيق الفيلسوف',url:'https://alfaylasooof.blogspot.com'});}catch(e){}}
function makeLuckCard(){
  var w=420,h=620,canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;var ctx=canvas.getContext('2d');
  var g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,'#10131f');g.addColorStop(1,'#24160b');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  var symbols=['✦','✨','🌟','🍀','💫','⭐','🔮','🎲'];for(var i=0;i<18;i++){ctx.globalAlpha=.18;ctx.font=(18+Math.random()*25)+'px sans-serif';ctx.fillStyle='#f0c14b';ctx.fillText(symbols[i%symbols.length],Math.random()*w,Math.random()*h);}
  var list=window.BUILTIN_LUCKS||[];var item=list.length?list[Math.floor(Math.random()*list.length)]:{emoji:'🍀',text:'يوم يحمل لك فرصة جديدة. خذ الأمور بهدوء واستمتع بيومك.'};
  ctx.globalAlpha=1;ctx.fillStyle='#f0c14b';ctx.font='bold 30px sans-serif';ctx.textAlign='center';ctx.fillText('حظك اليوم '+item.emoji,w/2,100);
  ctx.fillStyle='#fff';ctx.font='bold 23px sans-serif';var words=String(item.text).split(' '),line='',y=210;for(var k=0;k<words.length;k++){var test=line+words[k]+' ';if(ctx.measureText(test).width>340){ctx.fillText(line,w/2,y);line=words[k]+' ';y+=42}else line=test;}if(line)ctx.fillText(line,w/2,y);
  ctx.fillStyle='#c9a07a';ctx.font='16px sans-serif';ctx.fillText('قراءة ترفيهية عامة',w/2,h-45);return canvas.toDataURL('image/png');
}
function saveLuckCard(){try{var d=makeLuckCard();if(window.AndroidNative&&AndroidNative.saveImage)AndroidNative.saveImage(d,'faylasoof_luck_'+Date.now()+'.png');else alert('الحفظ متاح داخل تطبيق أندرويد.');}catch(e){alert('تعذر حفظ البطاقة.');}}
function shareLuckCardNative(){try{var d=makeLuckCard();if(window.AndroidNative&&AndroidNative.shareImage)AndroidNative.shareImage(d,'بطاقة حظ من الفيلسوف');}catch(e){}}
(function(){
  try{var d=localStorage.getItem('faylasoof_dark');if(d==='0')document.body.classList.add('light-mode');}catch(e){}
  setTimeout(requestNativePermissions,700);
  var old=window.openSocial;window.openSocial=function(url){try{if(window.AndroidNative&&AndroidNative.openExternal)AndroidNative.openExternal(url);else old&&old(url);}catch(e){}};
  var sideShare=document.querySelector('.side-item[onclick*="navigator.share"]');if(sideShare)sideShare.onclick=function(){shareAppNative();};
  setTimeout(function(){var luck=document.querySelector('#page-luck .luck-actions');if(luck){luck.innerHTML='<button onclick="showLuckOnce();saveLuckCard()">💾 حفظ بطاقة الحظ</button><button onclick="shareLuckCardNative()">📤 مشاركة</button><button onclick="openZodiacInsideLuck()">♈ الأبراج</button>';}} ,400);
})();

/* ===== v6.1.1 FINAL REQUESTED IMPLEMENTATION ===== */
(function(){
  'use strict';
  APP.version = '6.5.0';
  APP.cinemaCat=APP.cinemaCat||'arabic';
  APP.cinemaOpen=false;
  APP.lastCinemaIndex=0;

  /* ---------- Blogger categories: independent ticker per category ---------- */
  function blogAllJsonp(callback){
    var cb='faylasoofAll_'+Date.now()+'_'+Math.floor(Math.random()*10000), script=document.createElement('script');
    var done=false;
    var timer=setTimeout(function(){if(done)return;done=true;try{delete window[cb]}catch(e){}if(script.parentNode)script.parentNode.removeChild(script);callback([]);},10000);
    window[cb]=function(data){if(done)return;done=true;clearTimeout(timer);try{delete window[cb]}catch(e){}if(script.parentNode)script.parentNode.removeChild(script);callback((data&&data.feed&&data.feed.entry)||[]);};
    script.onerror=function(){if(done)return;done=true;clearTimeout(timer);try{delete window[cb]}catch(e){}if(script.parentNode)script.parentNode.removeChild(script);callback([]);};
    script.src='https://alfaylasooof.blogspot.com/feeds/posts/default?alt=json-in-script&max-results=60&callback='+cb;
    document.head.appendChild(script);
  }
  function buildCategoryList(entries){
    var base=(window.BLOG_CATEGORIES||[]).map(function(c){return Object.assign({},c);});
    var seen={};base.forEach(function(c){seen[c.name]=1;});
    entries.forEach(function(e){
      (e.category||[]).forEach(function(cat){
        var n=cat.term||'';if(!n||seen[n]||n==='المواضيع'||n==='تاريخ وحضارات')return;
        seen[n]=1;base.push({name:n,icon:categoryIcon(n),label:n,url:'https://alfaylasooof.blogspot.com/search/label/'+encodeURIComponent(n),color:'#d4a017'});
      });
    });
    return base.filter(function(c){return c.name!=='المواضيع'&&c.name!=='تاريخ وحضارات';});
  }
  function categoryIcon(n){var x=String(n);if(/رياض/.test(x))return '⚽';if(/علوم/.test(x))return '🔬';if(/تكنولوجيا|تقنية/.test(x))return '💻';if(/صحة/.test(x))return '🩺';if(/سينما|فيلم|مسرح/.test(x))return '🎬';if(/أدب|كتب/.test(x))return '📚';if(/ثقافة/.test(x))return '🧠';if(/اقتصاد|مال/.test(x))return '💰';if(/سياسة/.test(x))return '🏛️';return '📰';}
  function renderCategoryTicker(i,entries){
    var c=BLOG_CATEGORIES[i],host=document.getElementById('categoryPosts-'+i);if(!c||!host)return;
    var posts=entries.map(entryInfo).filter(function(x){return x.url;});
    if(!posts.length){host.innerHTML='<button class="category-fallback" onclick="openCategoryLatest('+i+')">فتح '+escapeHtml(c.name)+' داخل المدونة</button>';return;}
    var cards=posts.concat(posts).map(function(p){return '<button class="blog-post-card" onclick="openBlogInApp('+JSON.stringify(p.url)+','+JSON.stringify(p.title)+')"><img src="'+escapeAttr(p.image||'https://i.top4top.io/p_3908gteua2.png')+'" alt="" loading="lazy"><span>'+escapeHtml(p.title)+'</span></button>';}).join('');
    host.innerHTML='<div class="news-ticker-track">'+cards+'</div>';
  }
  window.renderCategories=function(){
    var grid=document.getElementById('categoriesGrid');if(!grid)return;
    grid.innerHTML='<div class="category-loading">جاري تحميل تصنيفات المدونة...</div>';
    blogAllJsonp(function(entries){
      var cats=buildCategoryList(entries);BLOG_CATEGORIES=cats;
      grid.innerHTML=cats.map(function(c,i){return '<section class="category-section" style="--cat-color:'+c.color+'"><div class="category-head"><button class="category-title" onclick="openCategoryHub('+i+')"><span>'+c.icon+'</span><b>'+escapeHtml(c.name)+'</b></button><button class="category-all" onclick="openCategoryHub('+i+')">عرض الكل 🔽</button></div><div class="category-posts" id="categoryPosts-'+i+'"><div class="category-loading">جاري تحميل المقالات...</div></div></section>';}).join('');
      cats.forEach(function(c,i){blogJsonp(c.label||'',function(es){renderCategoryTicker(i,es);});});
    });
  };
  window.openCategoryHub=function(i){var c=BLOG_CATEGORIES[i];if(!c)return;playClick();openBlogInApp(c.url,c.name+' — كل المقالات');};
  window.openCategoryLatest=function(i){var c=BLOG_CATEGORIES[i];if(c)openBlogInApp(c.url,c.name+' — كل المقالات');};
  window.openCategoryMostRead=function(i){var c=BLOG_CATEGORIES[i];if(c)openBlogInApp(c.url,c.name);};
  window.openCategoryRandom=function(i){var c=BLOG_CATEGORIES[i];if(!c)return;blogJsonp(c.label||'',function(es){var p=es.map(entryInfo).filter(function(x){return x.url;});p=p.length?p[Math.floor(Math.random()*p.length)]:null;if(p)openBlogInApp(p.url,p.title);else openBlogInApp(c.url,c.name);});};
  window.openRandomArticle=function(){if(!BLOG_CATEGORIES.length){openBlogInApp('https://alfaylasooof.blogspot.com/?m=1','مقال عشوائي');return;}openCategoryRandom(Math.floor(Math.random()*BLOG_CATEGORIES.length));};

  /* ---------- Cinema ---------- */
  function catList(cat){return cat==='arabic'?ARABIC_MOVIES:(cat==='foreign'?FOREIGN_MOVIES:PLAYS);}
  function catLabel(cat){return cat==='arabic'?'🎞️ أفلام عربي':cat==='foreign'?'🎬 أفلام أجنبي':'🎭 مسرحيات';}
  function catDescription(cat){return cat==='arabic'?'أفلام عربية داخل التطبيق':cat==='foreign'?'أفلام أجنبية مترجمة داخل التطبيق':'مسرحيات داخل التطبيق';}
  function cinemaItem(cat,id,i){return {id:id,cat:cat,label:catLabel(cat),title:APP.movieTitles[id]||catLabel(cat)+' — '+(i+1),index:i};}
  window.openCinemaCategory=function(cat){
    playClick();APP.cinemaCat=cat;APP.cinemaOpen=true;document.querySelectorAll('.cat-tab').forEach(function(t){t.classList.toggle('active',t.dataset.cat===cat);});
    renderMovies(cat);
  };
  window.switchCat=window.openCinemaCategory;
  window.renderMovies=function(cat){
    var grid=document.getElementById('moviesGrid'),box=document.getElementById('cinemaCategoryContent');if(!grid)return;
    APP.cinemaCat=cat;var list=catList(cat)||[];var items=list.slice(0,1000).map(function(id,i){return cinemaItem(cat,id,i);});
    var last=APP.lastMovie&&APP.lastMovie.cat===cat?APP.lastMovie:null;
    if(box)box.innerHTML='<div class="cinema-open-title">'+catLabel(cat)+'<small style="display:block;color:var(--text-secondary);margin-top:5px">'+catDescription(cat)+'</small></div>'+(last?'<div class="continue-box"><button class="small-btn" onclick="continueLastMovie()">📺 استكمال المشاهدة — '+escapeHtml(last.title||'آخر فيديو')+'</button></div>':'');
    grid.innerHTML=items.map(function(item){
      return '<article class="movie-card" data-movie-id="'+item.id+'"><div class="movie-thumb-wrap" onclick="openMovieByItem('+JSON.stringify(item).replace(/"/g,'&quot;')+')"><img src="https://img.youtube.com/vi/'+encodeURIComponent(item.id)+'/hqdefault.jpg" alt="'+escapeAttr(item.title)+'" loading="lazy"><span class="movie-badge">'+item.label+'</span></div><h3>'+escapeHtml(item.title)+'</h3><div class="movie-description">شاهد الفيديو داخل التطبيق</div><div class="movie-controls"><button onclick="movieNav(\''+escapeAttr(item.id)+'\',-1);event.stopPropagation()">⏪</button><button onclick="openMovieByItem('+JSON.stringify(item).replace(/"/g,'&quot;')+');event.stopPropagation()">⏸️</button><button onclick="movieNav(\''+escapeAttr(item.id)+'\',1);event.stopPropagation()">⏩</button><button onclick="toggleMovieFavorite(\''+escapeAttr(item.id)+'\');event.stopPropagation()">'+(isMovieFavorite(item.id)?'⭐':'☆')+'</button></div></article>';
    }).join('');
    if(!items.length)grid.innerHTML='<div class="empty-state"><p>لا توجد فيديوهات في هذا القسم حاليًا.</p></div>';
    setTimeout(validateVisibleMovies,50);
  };
  window.continueLastMovie=function(){if(APP.lastMovie)openVideoInApp(APP.lastMovie.id,APP.lastMovie.title);};
  window.movieNav=function(id,dir){var list=catList(APP.cinemaCat)||[],idx=list.indexOf(id);if(idx<0)return;var ni=(idx+dir+list.length)%list.length;var item=cinemaItem(APP.cinemaCat,list[ni],ni);openMovieByItem(item);};
  window.openVideoInApp=function(id,title){
    playClick();if(!id)return;APP.lastMovie={id:id,title:title||'مشاهدة',cat:APP.cinemaCat};saveCinemaState();
    var modal=document.getElementById('videoModal'),frame=document.getElementById('videoFrame'),titleEl=document.getElementById('videoTitle'),wrap=document.getElementById('videoWrap');if(!modal||!frame)return;
    if(titleEl)titleEl.textContent=title||'مشاهدة';
    wrap.innerHTML='<div class="video-wrap-inner"><div class="video-side-tools"><button onclick="rotateVideo()">↻</button><button onclick="toggleVideoPlay()">⏯</button><button onclick="closeVideo()">✕</button></div><iframe id="videoFrame" src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'?autoplay=1&playsinline=1&rel=0&modestbranding=1&fs=1&enablejsapi=1&origin=file%3A%2F%2Fandroid_asset" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen playsinline></iframe></div>';
    modal.classList.add('show');document.body.style.overflow='hidden';
  };
  window.toggleVideoPlay=function(){var f=document.getElementById('videoFrame');if(!f||!f.contentWindow)return;try{f.contentWindow.postMessage(JSON.stringify({event:'command',func:'pauseVideo',args:[]}), 'https://www.youtube-nocookie.com');}catch(e){}};
  window.rotateVideo=function(){try{if(screen.orientation&&screen.orientation.lock){screen.orientation.lock('landscape').catch(function(){});}var w=document.querySelector('.video-wrap-inner');if(w&&w.requestFullscreen)w.requestFullscreen();}catch(e){}};

  /* ---------- Luck: once per 12 hours + save/share ---------- */
  function luckRecord(){
    var list=(typeof BUILTIN_LUCKS!=='undefined'&&BUILTIN_LUCKS.length)?BUILTIN_LUCKS:[{emoji:'✨',text:'خذ يومك بهدوء وامنح نفسك فرصة لبداية جميلة.'}];
    return list[Math.floor(Math.random()*list.length)];
  }
  function makeLuckCardFinal(){
    var w=900,h=1300,c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d');
    var g=x.createLinearGradient(0,0,w,h);g.addColorStop(0,'#07152b');g.addColorStop(.55,'#18223a');g.addColorStop(1,'#4b2a0d');x.fillStyle=g;x.fillRect(0,0,w,h);
    var sy=['✦','✨','🌟','🍀','💫','⭐','🔮','🎲'];x.textAlign='center';for(var i=0;i<30;i++){x.globalAlpha=.16;x.fillStyle='#f4c34e';x.font=(28+Math.random()*38)+'px sans-serif';x.fillText(sy[i%sy.length],Math.random()*w,Math.random()*h);}x.globalAlpha=1;
    var r=luckRecord();x.fillStyle='#f4c34e';x.font='bold 60px sans-serif';x.fillText('حظك اليوم '+(r.emoji||'✨'),w/2,170);x.fillStyle='#fff';x.font='bold 42px sans-serif';
    var words=String(r.text||'').split(/\s+/),line='',y=480;for(var j=0;j<words.length;j++){var t=line+words[j]+' ';if(x.measureText(t).width>720){x.fillText(line,w/2,y);y+=70;line=words[j]+' ';}else line=t;}if(line)x.fillText(line,w/2,y);
    x.fillStyle='#d9bd8b';x.font='24px sans-serif';x.fillText('الفيلسوف',w/2,h-70);return c.toDataURL('image/png');
  }
  window.openLuckCard=function(){
    var last=parseInt(localStorage.getItem('faylasoof_luck_12h')||'0',10),now=Date.now();if(now-last<12*60*60*1000){var saved=localStorage.getItem('faylasoof_luck_card');if(saved){document.getElementById('luckResultImage').src=saved;}document.getElementById('luckOverlay').classList.add('show');return;}
    var d=makeLuckCardFinal();localStorage.setItem('faylasoof_luck_12h',String(now));localStorage.setItem('faylasoof_luck_card',d);document.getElementById('luckResultImage').src=d;document.getElementById('luckOverlay').classList.add('show');
  };
  window.closeLuckOverlay=function(){document.getElementById('luckOverlay').classList.remove('show');};
  window.saveLuckCard=function(){var d=localStorage.getItem('faylasoof_luck_card')||makeLuckCardFinal();if(window.AndroidNative&&AndroidNative.saveImage)AndroidNative.saveImage(d,'faylasoof_luck_'+Date.now()+'.png');};
  window.shareLuckCardNative=function(){var d=localStorage.getItem('faylasoof_luck_card')||makeLuckCardFinal();if(window.AndroidNative&&AndroidNative.shareImage)AndroidNative.shareImage(d,'بطاقة حظ من الفيلسوف');};

  /* ---------- Zodiac: 12 signs, local generated 500 readings per sign ---------- */
  function zodiacReadings(z){
    var out=[];var starts=['اليوم قد تجد مساحة جديدة للتفكير','اليوم قد يكون مناسبًا لترتيب أولوياتك','رسالة اليوم لك أن تمنح نفسك وقتًا هادئًا','قد تلاحظ اليوم فرصة صغيرة تستحق الانتباه','من الجميل اليوم أن تبدأ بخطوة بسيطة','اليوم ركّز على ما تستطيع إنجازه الآن','قد يحمل اليوم فكرة تساعدك على رؤية الأمور بوضوح','رسالتك اليوم هي التوازن بين الحماس والهدوء','اليوم حاول أن تجعل قراراتك أكثر وضوحًا','قد يكون اليوم مناسبًا لمراجعة هدف قريب'];var ends=['واستفد من التفاصيل دون استعجال.','وحافظ على هدوئك أثناء الاختيار.','واجعل خطوتك التالية بسيطة وواضحة.','وتذكّر أن التقدم يأتي خطوة خطوة.','واستمع لوجهات النظر المختلفة.','واترك مساحة للتجربة والتعلم.','وحوّل الفكرة إلى خطوة عملية صغيرة.','وابتعد عن التسرع في الحكم.','واستمتع بما تتعلمه خلال اليوم.','واجعل وقتك موزعًا بين ما يهمك.'];for(var i=0;i<500;i++)out.push(starts[i%starts.length]+' '+z.name+'، '+ends[(i*7)%ends.length]);return out;
  }
  function zodiacImageData(z,text){var w=900,h=1100,c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d');var g=x.createLinearGradient(0,0,w,h);g.addColorStop(0,'#07152b');g.addColorStop(1,'#5b2a0c');x.fillStyle=g;x.fillRect(0,0,w,h);x.fillStyle='#f4c34e';x.textAlign='center';x.font='bold 110px sans-serif';x.fillText(z.symbol,w/2,170);x.font='bold 58px sans-serif';x.fillText(z.name,w/2,260);x.fillStyle='#fff';x.font='bold 36px sans-serif';var words=String(text).split(/\s+/),line='',y=460;for(var i=0;i<words.length;i++){var t=line+words[i]+' ';if(x.measureText(t).width>720){x.fillText(line,w/2,y);y+=62;line=words[i]+' ';}else line=t;}if(line)x.fillText(line,w/2,y);x.fillStyle='#d9bd8b';x.font='24px sans-serif';x.fillText(z.dates,w/2,h-70);return c.toDataURL('image/png');}
  window.openZodiacList=function(){var ov=document.getElementById('zodiacOverlay');var grid=document.getElementById('zodiacGrid');var detail=document.getElementById('zodiacDetailView'),list=document.getElementById('zodiacListView');if(!ov||!grid)return;list.hidden=false;detail.hidden=true;grid.innerHTML=(typeof ZODIAC_DB!=='undefined'?ZODIAC_DB:[]).map(function(z,i){return '<button class="zodiac-item" onclick="showZodiacDetail('+i+')"><span class="zsym">'+z.symbol+'</span><strong>'+escapeHtml(z.name)+'</strong><small>'+escapeHtml(z.dates)+'</small></button>';}).join('');ov.classList.add('show');};
  window.closeZodiacList=function(){document.getElementById('zodiacOverlay').classList.remove('show');};
  window.showZodiacDetail=function(i){var z=ZODIAC_DB[i];if(!z)return;var readings=zodiacReadings(z),text=readings[Math.floor(Math.random()*readings.length)],compat=ZODIAC_DB.filter(function(x){return x.name!==z.name})[Math.floor(Math.random()*(ZODIAC_DB.length-1))],pct=(60+Math.random()*39).toFixed(1),img=zodiacImageData(z,text),list=document.getElementById('zodiacListView'),detail=document.getElementById('zodiacDetailView');list.hidden=true;detail.hidden=false;detail.innerHTML='<div class="zodiac-detail-card"><button class="small-btn" onclick="openZodiacList()">↩ القائمة</button><h2>'+z.symbol+' '+escapeHtml(z.name)+'</h2><p>'+escapeHtml(z.dates)+'</p><img class="zodiac-art" src="'+img+'" alt="'+escapeAttr(z.name)+'"><p>'+escapeHtml(z.traits)+'</p><h3>أهم ٣ صفات</h3><p>'+escapeHtml(z.traits)+'</p><h3>أهم ٣ مميزات</h3><p>الثقة، المرونة، القدرة على التعلم.</p><h3>٣ عيوب</h3><p>التسرع أحيانًا، التردد أحيانًا، الانشغال بالتفاصيل.</p><h3>التوافق</h3><p>'+z.symbol+' '+escapeHtml(z.name)+' ♥️ '+escapeHtml(compat.name)+' <span class="compat-heart">'+pct+'%</span></p><h3>ماذا يقول لك برجك اليوم</h3><p>'+escapeHtml(text)+'</p><div class="zodiac-detail-actions"><button onclick="saveZodiacImage('+i+')">💾 حفظ</button><button onclick="shareZodiacImage('+i+')">📤 مشاركة</button></div></div>';detail.dataset.image=img;detail.dataset.index=i;};
  window.saveZodiacImage=function(i){var d=document.querySelector('#zodiacDetailView').dataset.image;if(d&&window.AndroidNative&&AndroidNative.saveImage)AndroidNative.saveImage(d,'faylasoof_zodiac_'+i+'.png');};
  window.shareZodiacImage=function(i){var d=document.querySelector('#zodiacDetailView').dataset.image;if(d&&window.AndroidNative&&AndroidNative.shareImage)AndroidNative.shareImage(d,'برج '+ZODIAC_DB[i].name);};
  window.openZodiacInsideLuck=window.openZodiacList;

  /* ---------- Settings ---------- */
  window.setTheme=function(t){playClick();APP.theme=t;applyTheme();saveSettings();updateSettingsUI();};
  window.setBg=function(b){playClick();APP.bg=b;applyBg();saveSettings();updateSettingsUI();};
  function bindSliders(){var f=document.getElementById('fontSizeSlider'),d=document.getElementById('displayScaleSlider');if(f)f.oninput=function(){document.documentElement.style.setProperty('--font-scale',this.value);localStorage.setItem('faylasoof_font_scale',this.value);};if(d)d.oninput=function(){document.documentElement.style.setProperty('--display-scale',this.value);localStorage.setItem('faylasoof_display_scale',this.value);};}
  function loadSliders(){var f=localStorage.getItem('faylasoof_font_scale'),d=localStorage.getItem('faylasoof_display_scale');if(f)document.documentElement.style.setProperty('--font-scale',f);if(d)document.documentElement.style.setProperty('--display-scale',d);bindSliders();}

  /* ---------- Android back: modal -> movie -> cinema -> home ---------- */
  var oldGoBack=window.goBack;
  window.goBack=function(){
    var lm=document.getElementById('luckOverlay'),zo=document.getElementById('zodiacOverlay'),vm=document.getElementById('videoModal'),bm=document.getElementById('blogModal');
    if(lm&&lm.classList.contains('show')){closeLuckOverlay();return true;}if(zo&&zo.classList.contains('show')){closeZodiacList();return true;}if(vm&&vm.classList.contains('show')){closeVideo();return true;}if(bm&&bm.classList.contains('show')){closeBlogInApp(false,false);return true;}
    if(APP.currentPage==='cinema'&&APP.cinemaOpen){APP.cinemaOpen=false;showPage('cinema',false);showPage('home',true);return true;}
    return oldGoBack();
  };

  /* ---------- Boot: permissions, categories, sliders, external image URLs ---------- */
  function firstLaunch(){if(!localStorage.getItem('faylasoof_first_permissions')){localStorage.setItem('faylasoof_first_permissions','1');setTimeout(requestNativePermissions,900);}}
  function bootFinal(){try{loadSliders();firstLaunch();renderCategories();openCinemaCategory(APP.cinemaCat);showPage('home',false);}catch(e){console.error(e);}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bootFinal,{once:false});else setTimeout(bootFinal,200);
})();

/* ===== v6.2.0 Full Requested Features ===== */
APP.version = '6.5.0';

// All blog categories from feed
BLOG_CATEGORIES = [
  { name: 'أخبار', icon: '📰', label: 'أخبار', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1', color: '#eab308' },
  { name: 'علوم', icon: '🔬', label: 'علوم', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B9%D9%84%D9%88%D9%85', color: '#22c55e' },
  { name: 'تكنولوجيا', icon: '💻', label: 'تكنولوجيا', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7', color: '#3b82f6' },
  { name: 'رياضة', icon: '⚽', label: 'رياضة', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9', color: '#f97316' },
  { name: 'أدب', icon: '📚', label: 'أدب', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%A3%D8%AF%D8%A8', color: '#a855f7' },
  { name: 'سينما ومسرح', icon: '🎬', label: 'سينما ومسرح', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B3%D9%8A%D9%86%D9%85%D8%A7%20%D9%88%D9%85%D8%B3%D8%B1%D8%AD', color: '#ef4444' },
  { name: 'صحة', icon: '💊', label: 'صحة', url: 'https://alfaylasooof.blogspot.com/search/label/%D8%B5%D8%AD%D8%A9', color: '#14b8a6' }
];

// Improved category renderer with horizontal news ticker
window.renderCategories = function() {
  var grid = document.getElementById('categoriesGrid');
  if (!grid) return;
  grid.innerHTML = BLOG_CATEGORIES.map(function(c, i) {
    return '<div class="category-block" id="catBlock-' + i + '">' +
      '<div class="cat-name"><span>' + (c.icon || '📁') + '</span> ' + escapeHtml(c.name) + '</div>' +
      '<div class="category-posts" id="categoryPosts-' + i + '"><div class="loading-posts">جاري تحميل المقالات...</div></div>' +
      '</div>';
  }).join('');
  BLOG_CATEGORIES.forEach(function(c, i) {
    blogJsonp(c.label || '', function(entries) {
      renderCategoryPosts(i, entries);
    });
  });
};

window.renderCategoryPosts = function(i, entries) {
  var c = BLOG_CATEGORIES[i], host = document.getElementById('categoryPosts-' + i);
  if (!host || !c) return;
  var posts = (entries || []).map(entryInfo).filter(function(x) { return x.url; }).slice(0, 8);
  if (!posts.length) {
    host.innerHTML = '<button class="category-fallback" onclick="openCategoryLatest(' + i + ')">فتح ' + escapeHtml(c.name) + ' داخل المدونة</button>';
    return;
  }
  var cards = posts.concat(posts).map(function(p) {
    var img = p.image ? '<img src="' + escapeAttr(p.image) + '" alt="" loading="lazy" onerror="this.style.display=\'none\'">' : '<div style="height:88px;background:#1a1a1a;display:flex;align-items:center;justify-content:center;font-size:2rem">' + (c.icon || '📄') + '</div>';
    return '<button class="blog-post-card" onclick=\'openBlogInApp(' + JSON.stringify(p.url) + ',' + JSON.stringify(p.title) + ')\'>' +
      img + '<span>' + escapeHtml(p.title) + '</span></button>';
  }).join('');
  host.innerHTML = '<div class="news-ticker-track">' + cards + '</div>';
};

// Fix video player - use nocookie + proper params
window.openVideoInApp = function(id, title) {
  playClick();
  if (!id) return;
  try {
    APP.lastMovie = { id: id, title: title || 'مشاهدة', cat: APP.cinemaCat };
    saveCinemaState();
  } catch (e) {}
  var modal = document.getElementById('videoModal');
  var frame = document.getElementById('videoFrame');
  var titleEl = document.getElementById('videoTitle');
  if (!modal || !frame) return;
  if (titleEl) titleEl.textContent = title || 'مشاهدة';
  frame.src = '';
  setTimeout(function() {
    frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
      '?autoplay=1&playsinline=1&rel=0&modestbranding=1&fs=1&enablejsapi=1&origin=' + encodeURIComponent(location.origin || 'https://alfaylasooof.blogspot.com');
  }, 80);
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
};

// Theme purple support
var oldSetTheme = window.setTheme;
window.setTheme = function(t) {
  playClick();
  APP.theme = t;
  document.body.className = document.body.className.replace(/theme-\w+/g, '');
  if (t && t !== 'gold') document.body.classList.add('theme-' + t);
  document.querySelectorAll('.color-swatch').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-theme') === t);
  });
  saveSettings();
  if (typeof applyTheme === 'function') applyTheme();
};

window.setBg = function(bg) {
  playClick();
  APP.bg = bg;
  document.body.className = document.body.className.replace(/bg-\w+/g, '');
  if (bg && bg !== 'default') document.body.classList.add('bg-' + bg);
  document.querySelectorAll('.bg-visual-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('data-bg') === bg);
  });
  saveSettings();
  if (typeof applyBg === 'function') applyBg();
};

// Favorites UI with badges and expandable sections
window.toggleFavSection = function(type) {
  playClick();
  var map = {
    cinema: 'cinemaFavoritesList',
    articles: 'favoritesList',
    wisdom: 'wisdomFavoritesList',
    added: 'addedWisdomList'
  };
  var id = map[type];
  if (!id) return;
  var el = document.getElementById(id);
  if (!el) return;
  var wasHidden = el.hidden;
  // close others
  Object.keys(map).forEach(function(k) {
    var e = document.getElementById(map[k]);
    if (e) e.hidden = true;
  });
  if (wasHidden) {
    el.hidden = false;
    if (type === 'cinema') renderCinemaFavoritesV62();
    else if (type === 'articles') renderArticleFavoritesV62();
    else if (type === 'wisdom') renderWisdomFavoritesV62();
    else if (type === 'added') renderAddedWisdomsV62();
  }
  updateFavBadges();
};

function updateFavBadges() {
  try {
    var cinema = (APP.movieFavorites || []).length;
    var articles = 0;
    try { articles = (JSON.parse(localStorage.getItem('faylasoof_fav_articles') || '[]') || []).length; } catch (e) {}
    var wisdom = 0;
    try { wisdom = (JSON.parse(localStorage.getItem('faylasoof_fav_wisdom') || '[]') || []).length; } catch (e) {}
    var added = 0;
    try { added = (JSON.parse(localStorage.getItem('user_wisdoms') || '[]') || []).length; } catch (e) {}
    var el;
    if ((el = document.getElementById('favCinemaCount'))) el.textContent = cinema;
    if ((el = document.getElementById('favArticlesCount'))) el.textContent = articles;
    if ((el = document.getElementById('favWisdomCount'))) el.textContent = wisdom;
    if ((el = document.getElementById('favAddedCount'))) el.textContent = added;
  } catch (e) {}
}

window.renderCinemaFavoritesV62 = function() {
  var box = document.getElementById('cinemaFavoritesList');
  if (!box) return;
  loadCinemaState();
  var all = getCinemaItems().filter(function(x) { return isMovieFavorite(x.id); });
  if (!all.length) {
    box.innerHTML = '<div class="empty-state">لا توجد فيديوهات محفوظة بعد.</div>';
    return;
  }
  box.innerHTML = all.map(function(item) {
    return '<div class="fav-item-card">' +
      '<img src="https://img.youtube.com/vi/' + encodeURIComponent(item.id) + '/mqdefault.jpg" alt="" loading="lazy">' +
      '<div class="fav-item-info"><strong>' + escapeHtml(item.title || item.label) + '</strong></div>' +
      '<button class="fav-del" onclick="event.stopPropagation();toggleMovieFavorite(\'' + item.id + '\');renderCinemaFavoritesV62();updateFavBadges();" title="حذف">❌</button>' +
      '</div>';
  }).join('');
};

window.renderArticleFavoritesV62 = function() {
  var box = document.getElementById('favoritesList');
  if (!box) return;
  var list = [];
  try { list = JSON.parse(localStorage.getItem('faylasoof_fav_articles') || '[]') || []; } catch (e) {}
  if (!list.length) {
    box.innerHTML = '<div class="empty-state">لا توجد مقالات محفوظة بعد.</div>';
    return;
  }
  box.innerHTML = list.map(function(a, i) {
    return '<div class="fav-item-card">' +
      (a.image ? '<img src="' + escapeAttr(a.image) + '" alt="" loading="lazy">' : '<div style="width:72px;height:48px;background:#222;border-radius:8px;display:flex;align-items:center;justify-content:center">📰</div>') +
      '<div class="fav-item-info"><strong onclick=\'openBlogInApp(' + JSON.stringify(a.url || '') + ',' + JSON.stringify(a.title || '') + ')\'>' + escapeHtml(a.title || 'مقال') + '</strong></div>' +
      '<button class="fav-del" onclick="event.stopPropagation();removeFavArticle(' + i + ')" title="حذف">❌</button>' +
      '</div>';
  }).join('');
};

window.removeFavArticle = function(i) {
  playClick();
  try {
    var list = JSON.parse(localStorage.getItem('faylasoof_fav_articles') || '[]') || [];
    list.splice(i, 1);
    localStorage.setItem('faylasoof_fav_articles', JSON.stringify(list));
    renderArticleFavoritesV62();
    updateFavBadges();
  } catch (e) {}
};

window.renderWisdomFavoritesV62 = function() {
  var box = document.getElementById('wisdomFavoritesList');
  if (!box) return;
  var list = [];
  try { list = JSON.parse(localStorage.getItem('faylasoof_fav_wisdom') || '[]') || []; } catch (e) {}
  if (!list.length) {
    box.innerHTML = '<div class="empty-state">لا توجد حكم محفوظة بعد.</div>';
    return;
  }
  box.innerHTML = list.map(function(w, i) {
    return '<div class="fav-item-card">' +
      '<div class="fav-item-info"><strong>' + escapeHtml(w.text || w) + '</strong></div>' +
      '<button class="fav-del" onclick="event.stopPropagation();removeFavWisdom(' + i + ')" title="حذف">❌</button>' +
      '</div>';
  }).join('');
};

window.removeFavWisdom = function(i) {
  playClick();
  try {
    var list = JSON.parse(localStorage.getItem('faylasoof_fav_wisdom') || '[]') || [];
    list.splice(i, 1);
    localStorage.setItem('faylasoof_fav_wisdom', JSON.stringify(list));
    renderWisdomFavoritesV62();
    updateFavBadges();
  } catch (e) {}
};

window.renderAddedWisdomsV62 = function() {
  var box = document.getElementById('addedWisdomList');
  if (!box) return;
  var a = [];
  try { a = JSON.parse(localStorage.getItem('user_wisdoms') || '[]') || []; } catch (e) {}
  if (!a.length) {
    box.innerHTML = '<div class="empty-state">لا توجد حكم مضافة بعد. اضغط إضافة حكمة من القائمة.</div>';
    return;
  }
  box.innerHTML = a.map(function(x, i) {
    return '<div class="fav-item-card">' +
      '<div class="fav-item-info"><strong>' + escapeHtml(x.name || 'مجهول') + '</strong><p style="margin:4px 0 0;font-size:.8rem;opacity:.85">' + escapeHtml(x.text || x.body || '') + '</p></div>' +
      '<button class="fav-del" onclick="event.stopPropagation();editUserWisdom(' + i + ')" title="تعديل" style="color:var(--accent)">✏️</button>' +
      '<button class="fav-del" onclick="event.stopPropagation();deleteUserWisdom(' + i + ');renderAddedWisdomsV62();updateFavBadges();" title="حذف">❌</button>' +
      '</div>';
  }).join('');
};

window.editUserWisdom = function(i) {
  playClick();
  try {
    var a = JSON.parse(localStorage.getItem('user_wisdoms') || '[]') || [];
    var item = a[i];
    if (!item) return;
    var newText = prompt('تعديل الحكمة:', item.text || item.body || '');
    if (newText === null) return;
    a[i].text = newText;
    a[i].body = newText;
    localStorage.setItem('user_wisdoms', JSON.stringify(a));
    renderAddedWisdomsV62();
    if (typeof startWisdomRotate === 'function') startWisdomRotate();
  } catch (e) {}
};

// Share app via Android Native
window.shareAppNative = function() {
  playClick();
  var text = 'تطبيق الفيلسوف — منصة المعرفة والرأي\nhttps://alfaylasooof.blogspot.com';
  try {
    if (window.AndroidNative && AndroidNative.shareText) {
      AndroidNative.shareText('تطبيق الفيلسوف', text);
      return;
    }
  } catch (e) {}
  try {
    if (navigator.share) {
      navigator.share({ title: 'الفيلسوف', text: text, url: 'https://alfaylasooof.blogspot.com' });
      return;
    }
  } catch (e) {}
  try {
    navigator.clipboard.writeText(text);
    alert('تم نسخ رابط التطبيق');
  } catch (e) {
    alert(text);
  }
};

// First launch: request permissions
function firstLaunchV62() {
  try {
    if (!localStorage.getItem('faylasoof_perm_asked')) {
      localStorage.setItem('faylasoof_perm_asked', '1');
      setTimeout(function() {
        try {
          if (window.AndroidNative && AndroidNative.requestPermissions) {
            AndroidNative.requestPermissions();
          }
        } catch (e) {}
      }, 2000);
    }
  } catch (e) {}
}

// Update version text
function setVersionText() {
  var el = document.getElementById('appVersionText');
  if (el) el.textContent = 'v6.2.0';
}

// Boot enhancements
(function bootV62() {
  try {
    firstLaunchV62();
    setVersionText();
    setTimeout(function() {
      try { renderCategories(); } catch (e) {}
      try { updateFavBadges(); } catch (e) {}
      try {
        if (APP.theme) setTheme(APP.theme);
        if (APP.bg) setBg(APP.bg);
      } catch (e) {}
    }, 400);
  } catch (e) {}
})();

// Ensure showPage updates fav badges
var _origShowPage = window.showPage;
window.showPage = function(pageId, pushHistory) {
  if (typeof _origShowPage === 'function') _origShowPage(pageId, pushHistory);
  if (pageId === 'favorites') {
    setTimeout(updateFavBadges, 100);
  }
  // visual active on bottom nav
  document.querySelectorAll('.bottom-nav .nav-item').forEach(function(n) {
    n.classList.toggle('active', n.getAttribute('data-page') === pageId);
  });
};

// Ensure goBack works step by step including overlays
var _origGoBack = window.goBack;
window.goBack = function() {
  playClick();
  // luck overlay
  var luck = document.getElementById('luckOverlay');
  if (luck && luck.classList.contains('show')) {
    closeLuckOverlay();
    return true;
  }
  // zodiac overlay
  var zod = document.getElementById('zodiacOverlay');
  if (zod && !zod.hasAttribute('hidden') && zod.getAttribute('aria-hidden') !== 'true') {
    try { closeZodiacList(); } catch (e) {}
    return true;
  }
  if (typeof _origGoBack === 'function') return _origGoBack();
  return false;
};

console.log('AlFaylasoof v6.2.0 loaded');
