#!/data/data/com.termux/files/usr/bin/bash
set -e
BASE="app/src/main/assets/images"
mkdir -p "$BASE"
curl -L --fail --retry 3 "https://g.top4top.io/p_3908h49kh0.png" -o "$BASE/app_icon.png"
curl -L --fail --retry 3 "https://h.top4top.io/p_3908modo01.png" -o "$BASE/splash.png"
curl -L --fail --retry 3 "https://i.top4top.io/p_3908gteua2.png" -o "$BASE/hydra_logo.png"
mkdir -p app/src/main/res/drawable
rm -f app/src/main/res/drawable/ic_launcher.xml
cp "$BASE/app_icon.png" app/src/main/res/drawable/ic_launcher.png
echo "تم تنزيل أصول v6.1.0."
