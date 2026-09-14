# بناء تطبيق الفيلسوف v6.2.0

## على Termux (موصى به)

```bash
# تثبيت المتطلبات مرة واحدة
pkg update && pkg install openjdk-17 android-sdk aapt2 wget unzip -y

# فك الضغط
cd ~
unzip alfaylasoof-v6.2.0.zip -d alfaylasoof-v6.2.0
cd alfaylasoof-v6.2.0

# ضبط SDK (عدّل المسار إن لزم)
echo "sdk.dir=$PREFIX/share/android-sdk" > local.properties
# أو:
# export ANDROID_HOME=$PREFIX/share/android-sdk

# البناء
chmod +x gradlew
./gradlew --no-daemon assembleRelease
```

APK الناتج:
`app/build/outputs/apk/release/app-release.apk`

## على الكمبيوتر (Windows / Linux / Mac)

1. ثبّت [Android Studio](https://developer.android.com/studio) أو Android SDK Command-line Tools
2. افتح المجلد كمشروع Android
3. Build → Generate Signed Bundle / APK → APK
4. أو من الطرفية:

```bash
./gradlew assembleRelease
```

## التوقيع

- ملف: `alfaylasoof-release.jks`
- Alias: `alfaylasoof`
- كلمة المرور الافتراضية في `app/build.gradle.kts`: `alfaylasoof`
  (غيّرها عبر متغيرات البيئة `KEYSTORE_PASSWORD` و `KEY_PASSWORD` إن أردت)

## ملاحظات

- versionName: **6.2.0**
- versionCode: **62**
- applicationId: `com.alfaylasoof.app`
