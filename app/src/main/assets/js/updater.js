/* ===== الفيلسوف v6.5.0 — Update Manager (silent + force + real progress) ===== */
(function(){
  'use strict';
  var CFG={
    url:'https://raw.githubusercontent.com/erfanex/alfaylasoof-updates/main/update.json',
    versionName:'6.5.0',
    versionCode:65,
    checkEveryMs:6*60*60*1000,
    storageKey:'faylasoof_update_state_v650'
  };
  var lastConfig=null;

  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});}
  function bridge(){return window.AndroidUpdater||null;}

  function setStatus(title,text){
    var a=document.getElementById('updateStatusTitle'),b=document.getElementById('updateStatusText');
    if(a)a.textContent=title||('الإصدار الحالي v'+CFG.versionName);
    if(b)b.textContent=text||'';
  }

  function ensureModal(){
    var m=document.getElementById('appUpdateModal');if(m)return m;
    m=document.createElement('div');m.id='appUpdateModal';m.className='update-modal';m.setAttribute('aria-hidden','true');
    m.innerHTML='<div class="update-box" role="dialog" aria-modal="true" aria-labelledby="updateTitle">'+
      '<div class="update-icon">𓂀</div><h2 id="updateTitle">تتوافر نسخة أحدث</h2>'+
      '<div id="updateVersion" class="update-version"></div><div id="updateMessage" class="update-message"></div>'+
      '<ul id="updateNotes" class="update-notes"></ul>'+
      '<div id="updateProgressWrap" class="update-progress-wrap" hidden>'+
        '<div id="updateProgressLabel" class="update-progress-label">جاري التنزيل...</div>'+
        '<div id="updateProgress" class="update-progress"><span></span></div>'+
        '<div id="updateProgressPct" class="update-progress-pct">0%</div>'+
      '</div>'+
      '<div id="updateError" class="update-error"></div>'+
      '<div class="update-actions">'+
        '<button id="updateLater" type="button" onclick="closeUpdateModal()">لاحقًا</button>'+
        '<button id="updateNow" class="update-primary" type="button" onclick="startAppUpdate()">⬇️ تحديث الآن</button>'+
      '</div></div>';
    document.body.appendChild(m);return m;
  }

  window.closeUpdateModal=function(){
    var m=document.getElementById('appUpdateModal');
    if(lastConfig&&lastConfig.forceUpdate)return; // إجبار — لا إغلاق
    if(m){m.classList.remove('show');m.setAttribute('aria-hidden','true');}
  };

  function showUpdate(cfg){
    lastConfig=cfg;var m=ensureModal();
    document.getElementById('updateTitle').textContent=cfg.forceUpdate?'يجب تحديث التطبيق':'تتوافر نسخة أحدث';
    document.getElementById('updateVersion').textContent='الإصدار '+esc(cfg.versionName||'الجديد');
    document.getElementById('updateMessage').textContent=cfg.message||'يتوفر إصدار أحدث من تطبيق الفيلسوف.';
    var notes=document.getElementById('updateNotes');
    notes.innerHTML='';
    (cfg.releaseNotes||[]).forEach(function(n){
      var li=document.createElement('li');li.textContent=n;notes.appendChild(li);
    });
    var later=document.getElementById('updateLater');
    if(later)later.style.display=cfg.forceUpdate?'none':'';
    var wrap=document.getElementById('updateProgressWrap');
    if(wrap)wrap.hidden=true;
    var err=document.getElementById('updateError');
    if(err){err.textContent='';err.classList.remove('show');}
    var btn=document.getElementById('updateNow');
    if(btn){btn.disabled=false;btn.textContent='⬇️ تحديث الآن';}
    m.classList.add('show');m.setAttribute('aria-hidden','false');
  }

  function isNewer(remote){
    var rc=parseInt(remote.versionCode,10);if(!isFinite(rc))rc=0;
    if(rc>CFG.versionCode)return true;
    if(rc===CFG.versionCode){
      var rv=String(remote.versionName||'').split('.').map(function(x){return parseInt(x,10)||0;});
      var cv=CFG.versionName.split('.').map(function(x){return parseInt(x,10)||0;});
      for(var i=0;i<Math.max(rv.length,cv.length);i++){
        var a=rv[i]||0,b=cv[i]||0;if(a>b)return true;if(a<b)return false;
      }
    }
    return false;
  }

  function normalize(d){
    return {
      versionName:String(d.versionName||''),
      versionCode:parseInt(d.versionCode,10)||0,
      minimumVersionCode:parseInt(d.minimumVersionCode,10)||0,
      forceUpdate:d.forceUpdate===true,
      title:String(d.title||'تتوافر نسخة أحدث'),
      message:String(d.message||''),
      releaseNotes:Array.isArray(d.releaseNotes)?d.releaseNotes:(d.changelog?[String(d.changelog)]:[]),
      downloadUrl:String(d.downloadUrl||d.apkUrl||'')
    };
  }

  /* فحص صامت 100% — لا تنبيهات للمستخدم إلا عند وجود تحديث */
  window.checkForAppUpdate=function(silent){
    silent = silent !== false; // default silent
    if(!silent) setStatus('الإصدار الحالي v'+CFG.versionName,'جاري فحص التحديث...');
    var btn=document.querySelector('.update-check-btn');
    if(btn&&!silent){btn.disabled=true;btn.textContent='⏳ فحص...';}
    var u=CFG.url+(CFG.url.indexOf('?')>=0?'&':'?')+'t='+Date.now();
    return fetch(u,{cache:'no-store',headers:{'Accept':'application/json'}}).then(function(r){
      if(!r.ok)throw new Error('HTTP '+r.status);return r.json();
    }).then(function(raw){
      var d=normalize(raw);
      lastConfig=d;
      if(isNewer(d)){
        if(!silent) setStatus('يتوفر إصدار '+d.versionName,'يوجد تحديث جديد');
        showUpdate(d);
        try{localStorage.setItem(CFG.storageKey,JSON.stringify({checkedAt:Date.now(),versionCode:d.versionCode}));}catch(e){}
        return d;
      }
      if(!silent){
        setStatus('الإصدار الحالي v'+CFG.versionName,'أنت على أحدث إصدار حالياً');
        alert('✅ تطبيق الفيلسوف محدث بالفعل إلى v'+CFG.versionName+'.');
      }
      try{localStorage.setItem(CFG.storageKey,JSON.stringify({checkedAt:Date.now(),versionCode:CFG.versionCode}));}catch(e){}
      return null;
    }).catch(function(){
      if(!silent){
        setStatus('الإصدار الحالي v'+CFG.versionName,'تعذر فحص التحديث الآن');
        alert('تعذر الاتصال بخادم التحديث. تأكد من الإنترنت وحاول مرة أخرى.');
      }
      return null;
    }).finally(function(){if(btn){btn.disabled=false;btn.textContent='🔄 فحص الآن';}});
  };

  function setErr(msg){
    var e=document.getElementById('updateError');
    if(e){e.textContent=msg;e.classList.add('show');}
  }

  /* يستدعيه الكود الأصلي من Kotlin أثناء التنزيل */
  window.__updateProgress=function(pct){
    var wrap=document.getElementById('updateProgressWrap');
    var bar=document.getElementById('updateProgress');
    var span=bar&&bar.querySelector('span');
    var lab=document.getElementById('updateProgressLabel');
    var pctEl=document.getElementById('updateProgressPct');
    if(wrap)wrap.hidden=false;
    if(span)span.style.width=Math.max(0,Math.min(100,pct))+'%';
    if(pctEl)pctEl.textContent=Math.round(pct)+'%';
    if(lab){
      if(pct>=100) lab.textContent='تم التنزيل — جاري فتح المثبّت...';
      else lab.textContent='جاري التنزيل...';
    }
  };

  window.__updateFailed=function(msg){
    setErr(msg||'تعذر تنزيل التحديث. حاول مرة أخرى.');
    var btn=document.getElementById('updateNow');
    if(btn){btn.disabled=false;btn.textContent='⬇️ إعادة المحاولة';}
  };

  window.startAppUpdate=function(){
    if(!lastConfig||!lastConfig.downloadUrl){setErr('رابط التحديث غير متاح حالياً.');return;}
    var url=lastConfig.downloadUrl,btn=document.getElementById('updateNow');
    if(btn){btn.disabled=true;btn.textContent='⏳ جاري التنزيل...';}
    var wrap=document.getElementById('updateProgressWrap');
    if(wrap)wrap.hidden=false;
    window.__updateProgress(0);
    // Native path with real progress
    if(window.AndroidUpdater&&typeof window.AndroidUpdater.downloadAndInstallApk==='function'){
      try{window.AndroidUpdater.downloadAndInstallApk(url);return;}catch(e){}
    }
    // Fallback
    try{
      var a=document.createElement('a');a.href=url;a.download='AlFaylasoof.apk';a.rel='noopener';a.style.display='none';
      document.body.appendChild(a);a.click();setTimeout(function(){a.remove();},1200);
      window.__updateProgress(100);
      setErr('تم إرسال ملف APK إلى مدير التنزيل. أكمل التثبيت من الإشعارات.');
      if(btn){btn.disabled=false;btn.textContent='⬇️ إعادة تنزيل التحديث';}
    }catch(e){
      if(btn){btn.disabled=false;btn.textContent='⬇️ تحديث الآن';}
      setErr('تعذر بدء تنزيل التحديث.');
    }
  };

  function autoCheck(){
    // دائماً صامت عند الفتح التلقائي
    setTimeout(function(){window.checkForAppUpdate(true);},2200);
  }

  document.addEventListener('DOMContentLoaded',function(){
    var v=document.getElementById('appVersionText');if(v)v.textContent='v'+CFG.versionName;
    setStatus('الإصدار الحالي v'+CFG.versionName,'');
    autoCheck();
  });
  window.addEventListener('focus',function(){
    // فحص صامت عند العودة للتطبيق كل 6 ساعات
    var state=null;try{state=JSON.parse(localStorage.getItem(CFG.storageKey)||'null')}catch(e){}
    if(!state||!state.checkedAt||Date.now()-state.checkedAt>CFG.checkEveryMs){
      window.checkForAppUpdate(true);
    }
  });
})();
