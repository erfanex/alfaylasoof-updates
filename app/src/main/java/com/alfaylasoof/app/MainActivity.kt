package com.alfaylasoof.app

import android.annotation.SuppressLint
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.os.Build
import android.content.pm.PackageManager
import android.graphics.Color
import android.util.Base64
import android.provider.MediaStore
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.AlarmManager
import android.app.PendingIntent
import androidx.core.app.ActivityCompat
import android.provider.Settings
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.CookieManager
import android.webkit.PermissionRequest
import android.widget.Toast
import android.view.View
import android.view.WindowManager
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.content.FileProvider
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat
import java.io.File
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.Executors

class MainActivity : ComponentActivity() {
    private val permissionRequestCode = 611
    private lateinit var webView: WebView
    private val executor = Executors.newSingleThreadExecutor()

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        WindowCompat.setDecorFitsSystemWindows(window, false)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        webView = WebView(this)
        setContentView(webView)
        enterImmersiveMode()

        ViewCompat.setOnApplyWindowInsetsListener(webView) { view, insets ->
            val bars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            view.setPadding(0, 0, 0, 0)
            val safe = bars.bottom.toString()
            webView.evaluateJavascript(
                "document.documentElement.style.setProperty('--android-bottom-inset','${safe}px');",
                null
            )
            insets
        }

        
        // YouTube embeds need cookies in WebView
        try {
            val cm = CookieManager.getInstance()
            cm.setAcceptCookie(true)
            if (Build.VERSION.SDK_INT >= 21) cm.setAcceptThirdPartyCookies(webView, true)
        } catch (_: Exception) {}

        webView.settings.javaScriptEnabled = true
        webView.settings.domStorageEnabled = true
        webView.settings.mediaPlaybackRequiresUserGesture = false
        webView.settings.allowFileAccess = true
        webView.settings.allowContentAccess = true
        webView.settings.cacheMode = WebSettings.LOAD_DEFAULT
        webView.settings.loadsImagesAutomatically = true
        webView.settings.blockNetworkImage = false
        webView.settings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        webView.settings.userAgentString = webView.settings.userAgentString + " AlFaylasoof/6.5.0"
        webView.settings.builtInZoomControls = false
        webView.settings.displayZoomControls = false
        webView.settings.setSupportMultipleWindows(false)
        webView.settings.javaScriptCanOpenWindowsAutomatically = true
        if (Build.VERSION.SDK_INT >= 26) {
            webView.settings.safeBrowsingEnabled = true
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onPermissionRequest(request: PermissionRequest?) {
                request?.grant(request.resources)
            }
            override fun onShowCustomView(view: View?, callback: CustomViewCallback?) {
                super.onShowCustomView(view, callback)
            }
            override fun onHideCustomView() {
                super.onHideCustomView()
            }
        }
webView.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                val url = request.url?.toString() ?: return false
                // Keep YouTube / Google / blogspot / image CDNs inside WebView
                if (url.startsWith("http") &&
                    !url.contains("youtube") &&
                    !url.contains("youtu.be") &&
                    !url.contains("blogspot") &&
                    !url.contains("google") &&
                    !url.contains("ggpht") &&
                    !url.contains("ytimg") &&
                    !url.contains("top4top") &&
                    !url.contains("com.alfaylasoof.app")
                ) {
                    try {
                        startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url)))
                        return true
                    } catch (_: Exception) {}
                }
                return false
            }

            // Serve local assets when page is loaded via https base URL (needed for YouTube Origin/Referer)
            override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? {
                val url = request.url?.toString() ?: return super.shouldInterceptRequest(view, request)
                try {
                    // Map https://com.alfaylasoof.app/... → assets/...
                    if (url.startsWith("https://com.alfaylasoof.app/")) {
                        var path = url.removePrefix("https://com.alfaylasoof.app/").substringBefore("?").substringBefore("#")
                        if (path.isEmpty() || path == "/" || path == "index.html") {
                            // main document is already provided via loadDataWithBaseURL
                            return super.shouldInterceptRequest(view, request)
                        }
                        // strip leading slash
                        if (path.startsWith("/")) path = path.substring(1)
                        val mime = when {
                            path.endsWith(".css") -> "text/css"
                            path.endsWith(".js") -> "application/javascript"
                            path.endsWith(".png") -> "image/png"
                            path.endsWith(".jpg") || path.endsWith(".jpeg") -> "image/jpeg"
                            path.endsWith(".webp") -> "image/webp"
                            path.endsWith(".svg") -> "image/svg+xml"
                            path.endsWith(".html") -> "text/html"
                            path.endsWith(".json") -> "application/json"
                            path.endsWith(".woff2") -> "font/woff2"
                            path.endsWith(".woff") -> "font/woff"
                            path.endsWith(".ttf") -> "font/ttf"
                            else -> "application/octet-stream"
                        }
                        val stream = assets.open(path)
                        return WebResourceResponse(mime, "UTF-8", stream)
                    }
                    // Also handle file:///android_asset/ just in case
                    if (url.startsWith("file:///android_asset/")) {
                        val path = url.removePrefix("file:///android_asset/")
                        val mime = when {
                            path.endsWith(".css") -> "text/css"
                            path.endsWith(".js") -> "application/javascript"
                            path.endsWith(".png") -> "image/png"
                            path.endsWith(".jpg") || path.endsWith(".jpeg") -> "image/jpeg"
                            else -> "application/octet-stream"
                        }
                        return WebResourceResponse(mime, "UTF-8", assets.open(path))
                    }
                } catch (_: Exception) {
                    // fall through
                }
                return super.shouldInterceptRequest(view, request)
            }
        }
        webView.addJavascriptInterface(AndroidUpdaterBridge(), "AndroidUpdater")
        webView.addJavascriptInterface(AndroidNativeBridge(), "AndroidNative")
        // Load with HTTPS base URL so YouTube embeds get a valid Origin/Referer (fixes Error 153)
        try {
            val html = assets.open("index.html").bufferedReader(Charsets.UTF_8).use { it.readText() }
            webView.loadDataWithBaseURL(
                "https://com.alfaylasoof.app/",
                html,
                "text/html",
                "UTF-8",
                null
            )
        } catch (e: Exception) {
            webView.loadUrl("file:///android_asset/index.html")
        }

        if (Build.VERSION.SDK_INT >= 33) createNotificationChannel()
        scheduleNotifications()

        // طلب الأذونات عند أول فتح
        webView.postDelayed({ requestAppPermissions() }, 2500)

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                webView.evaluateJavascript(
                    "(function(){try{if(typeof goBack==='function'&&goBack())return true;if(typeof v611Back==='function'&&v611Back())return true;}catch(e){}return false;})();"
                ) { result ->
                    if (result == "false" || result == null) {
                        if (webView.canGoBack()) webView.goBack()
                        else {
                            isEnabled = false
                            onBackPressedDispatcher.onBackPressed()
                        }
                    }
                }
            }
        })
    }

    private fun enterImmersiveMode() {
        WindowCompat.setDecorFitsSystemWindows(window, false)
        val controller = WindowInsetsControllerCompat(window, window.decorView)
        controller.hide(WindowInsetsCompat.Type.statusBars() or WindowInsetsCompat.Type.navigationBars())
        controller.systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        if (Build.VERSION.SDK_INT >= 21) {
            window.statusBarColor = Color.TRANSPARENT
            window.navigationBarColor = Color.TRANSPARENT
        }
        if (Build.VERSION.SDK_INT < 30) {
            @Suppress("DEPRECATION")
            window.decorView.systemUiVisibility = (
                View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
                View.SYSTEM_UI_FLAG_FULLSCREEN or
                View.SYSTEM_UI_FLAG_HIDE_NAVIGATION or
                View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or
                View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            )
        }
    }

    private fun scheduleNotifications() {
        val am = getSystemService(ALARM_SERVICE) as AlarmManager
        val actions = listOf(
            NotificationReceiver.ACTION_BLOG to 6 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_LUCK to 12 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_ZODIAC to 24 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_CINEMA to 24 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_UPDATE to 24 * 60 * 60 * 1000L
        )
        actions.forEachIndexed { index, pair ->
            val intent = Intent(this, NotificationReceiver::class.java).apply { action = pair.first }
            val pi = PendingIntent.getBroadcast(this, 6110 + index, intent, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
            am.setInexactRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis() + 30_000L + index * 5_000L, pair.second, pi)
        }
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= 26) {
            val ch = NotificationChannel("faylasoof", "الفيلسوف", NotificationManager.IMPORTANCE_DEFAULT)
            getSystemService(NotificationManager::class.java).createNotificationChannel(ch)
        }
    }

    private fun requestAppPermissions() {
        val p = mutableListOf<String>()
        if (Build.VERSION.SDK_INT >= 33) {
            if (checkSelfPermission("android.permission.POST_NOTIFICATIONS") != PackageManager.PERMISSION_GRANTED)
                p.add("android.permission.POST_NOTIFICATIONS")
            if (checkSelfPermission("android.permission.READ_MEDIA_IMAGES") != PackageManager.PERMISSION_GRANTED)
                p.add("android.permission.READ_MEDIA_IMAGES")
            if (checkSelfPermission("android.permission.READ_MEDIA_VIDEO") != PackageManager.PERMISSION_GRANTED)
                p.add("android.permission.READ_MEDIA_VIDEO")
        }
        if (Build.VERSION.SDK_INT <= 32) {
            if (checkSelfPermission("android.permission.WRITE_EXTERNAL_STORAGE") != PackageManager.PERMISSION_GRANTED)
                p.add("android.permission.WRITE_EXTERNAL_STORAGE")
            if (checkSelfPermission("android.permission.READ_EXTERNAL_STORAGE") != PackageManager.PERMISSION_GRANTED)
                p.add("android.permission.READ_EXTERNAL_STORAGE")
        }
        if (p.isNotEmpty()) ActivityCompat.requestPermissions(this, p.toTypedArray(), permissionRequestCode)
    }

    inner class AndroidNativeBridge {
        @JavascriptInterface fun requestPermissions() { runOnUiThread { requestAppPermissions() } }
        @JavascriptInterface fun shareText(title: String, text: String) {
            val i = Intent(Intent.ACTION_SEND).apply {
                type = "text/plain"
                putExtra(Intent.EXTRA_TEXT, text)
                putExtra(Intent.EXTRA_TITLE, title)
            }
            startActivity(Intent.createChooser(i, title))
        }
        @JavascriptInterface fun openExternal(url: String) {
            try { startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url))) } catch (_: Exception) {}
        }
        @JavascriptInterface fun saveImage(dataUrl: String, name: String) {
            try {
                val b64 = dataUrl.substringAfter("base64,")
                val bytes = Base64.decode(b64, Base64.DEFAULT)
                val resolver = contentResolver
                val values = android.content.ContentValues().apply {
                    put(MediaStore.Images.Media.DISPLAY_NAME, name)
                    put(MediaStore.Images.Media.MIME_TYPE, "image/png")
                    if (Build.VERSION.SDK_INT >= 29) put(MediaStore.Images.Media.RELATIVE_PATH, "Pictures/AlFaylasoof")
                }
                val uri = resolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values) ?: throw Exception()
                resolver.openOutputStream(uri).use { it!!.write(bytes) }
                runOnUiThread { Toast.makeText(this@MainActivity, "تم حفظ الصورة في المعرض", Toast.LENGTH_SHORT).show() }
            } catch (e: Exception) {
                runOnUiThread { Toast.makeText(this@MainActivity, "تعذر حفظ الصورة", Toast.LENGTH_SHORT).show() }
            }
        }
        @JavascriptInterface fun shareImage(dataUrl: String, title: String) {
            try {
                val b64 = dataUrl.substringAfter("base64,")
                val bytes = Base64.decode(b64, Base64.DEFAULT)
                val file = File(cacheDir, "share_luck.png")
                file.writeBytes(bytes)
                val uri = FileProvider.getUriForFile(this@MainActivity, "$packageName.fileprovider", file)
                val i = Intent(Intent.ACTION_SEND).apply {
                    type = "image/png"
                    putExtra(Intent.EXTRA_STREAM, uri)
                    putExtra(Intent.EXTRA_TITLE, title)
                    addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                }
                startActivity(Intent.createChooser(i, title))
            } catch (_: Exception) {}
        }
    }

    inner class AndroidUpdaterBridge {
        @JavascriptInterface
        fun downloadAndInstallApk(url: String) {
            executor.execute {
                try {
                    val connection = URL(url).openConnection() as HttpURLConnection
                    connection.instanceFollowRedirects = true
                    connection.connectTimeout = 20000
                    connection.readTimeout = 120000
                    connection.setRequestProperty("User-Agent", "AlFaylasoof/6.5.0")
                    connection.connect()
                    if (connection.responseCode !in 200..299) throw Exception("HTTP ${connection.responseCode}")
                    val total = connection.contentLengthLong.coerceAtLeast(0L)
                    val file = File(cacheDir, "AlFaylasoof-update.apk")
                    var downloaded = 0L
                    var lastPct = -1
                    connection.inputStream.use { input ->
                        file.outputStream().use { output ->
                            val buf = ByteArray(64 * 1024)
                            while (true) {
                                val n = input.read(buf)
                                if (n <= 0) break
                                output.write(buf, 0, n)
                                downloaded += n
                                val pct = if (total > 0) ((downloaded * 100) / total).toInt() else ((downloaded / (256 * 1024)).toInt() % 95)
                                if (pct != lastPct) {
                                    lastPct = pct
                                    val safe = pct.coerceIn(0, 99)
                                    runOnUiThread {
                                        webView.evaluateJavascript("window.__updateProgress&&window.__updateProgress($safe);", null)
                                    }
                                }
                            }
                        }
                    }
                    connection.disconnect()
                    runOnUiThread {
                        webView.evaluateJavascript("window.__updateProgress&&window.__updateProgress(100);", null)
                        // short delay so user sees 100% + "تم التنزيل"
                        webView.postDelayed({ installApk(file) }, 600)
                    }
                } catch (e: Exception) {
                    val msg = e.message ?: "خطأ"
                    runOnUiThread {
                        webView.evaluateJavascript(
                            "window.__updateFailed&&window.__updateFailed('تعذر تنزيل التحديث: $msg');",
                            null
                        )
                    }
                }
            }
        }
    }

    private fun installApk(file: File) {
        if (Build.VERSION.SDK_INT >= 26 && !packageManager.canRequestPackageInstalls()) {
            val intent = Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES).apply {
                data = Uri.parse("package:$packageName")
            }
            startActivity(intent)
            Toast.makeText(this, "اسمح للتطبيق بتثبيت التحديث ثم اضغط تحديث الآن مرة أخرى.", Toast.LENGTH_LONG).show()
            return
        }
        val uri = FileProvider.getUriForFile(this, "$packageName.fileprovider", file)
        val intent = Intent(Intent.ACTION_VIEW).apply {
            setDataAndType(uri, "application/vnd.android.package-archive")
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        }
        startActivity(intent)
    }

    override fun onResume() { super.onResume(); enterImmersiveMode() }
    override fun onWindowFocusChanged(hasFocus: Boolean) { super.onWindowFocusChanged(hasFocus); if (hasFocus) enterImmersiveMode() }

    override fun onDestroy() {
        executor.shutdownNow()
        webView.destroy()
        super.onDestroy()
    }
}
