# الفيلسوف v6.0.0 — مشروع البناء

هذا المشروع هو غلاف Android مستقل لتشغيل ملفات الفيلسوف المرجعية داخل WebView، بدون AppMint.

## المواصفات
- applicationId: com.alfaylasoof.app
- versionName: 6.0.0
- versionCode: 60
- minSdk: 26
- targetSdk: 35
- compileSdk: 35

## البناء على Termux
```bash
cd ~/alfaylasoof-v6.0.0
chmod +x gradlew
./gradlew --no-daemon assembleRelease
```

إذا لم يوجد Android SDK، اضبط `sdk.dir` في `local.properties` أو `ANDROID_HOME` قبل البناء.

## التوقيع
استخدم ملف التوقيع الخاص بك `alfaylasoof-release.jks` وalias `alfaylasoof`. لا يتم تضمين مفتاح التوقيع داخل المشروع.

## التحديث
ملف `assets/js/updater.js` يفحص:
https://raw.githubusercontent.com/erfanex/alfaylasoof-updates/main/update.json

وعند توفر APK أحدث يستدعي الجسر الأصلي `AndroidUpdater` لفتح مُثبّت أندرويد بعد تنزيل APK، بدل اعتماد AppMint.
