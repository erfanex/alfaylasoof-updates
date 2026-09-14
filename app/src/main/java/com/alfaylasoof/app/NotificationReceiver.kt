package com.alfaylasoof.app

import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import androidx.core.app.NotificationCompat
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.Executors
import org.json.JSONObject

class NotificationReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val pending = goAsync()
        Executors.newSingleThreadExecutor().execute {
            try {
                val action = intent.action ?: "daily"
                when (action) {
                    ACTION_BLOG -> checkBlog(context)
                    ACTION_LUCK -> notify(context, "🎲 حظك اليوم", "افتح الفيلسوف وشاهد قراءة حظك الجديدة.")
                    ACTION_ZODIAC -> notify(context, "♈ الأبراج", "افتح الفيلسوف وشاهد قراءة برجك اليوم.")
                    ACTION_UPDATE -> notify(context, "🚀 تحديث الفيلسوف", "تحقق من وجود إصدار أحدث من التطبيق.")
                    ACTION_CINEMA -> notify(context, "🎬 السينما", "تحقق من أحدث محتوى السينما والمسرح داخل التطبيق.")
                    else -> checkBlog(context)
                }
            } finally {
                pending.finish()
            }
        }
    }

    private fun checkBlog(context: Context) {
        try {
            val url = URL("https://alfaylasooof.blogspot.com/feeds/posts/default?alt=json&max-results=1")
            val c = url.openConnection() as HttpURLConnection
            c.connectTimeout = 15000
            c.readTimeout = 15000
            c.setRequestProperty("User-Agent", "AlFaylasoof/6.5.0")
            val body = c.inputStream.bufferedReader().use { it.readText() }
            c.disconnect()
            val feed = JSONObject(body).optJSONObject("feed") ?: return
            val entries = feed.optJSONArray("entry") ?: return
            if (entries.length() == 0) return
            val e = entries.getJSONObject(0)
            val title = e.optJSONObject("title")?.optString("\$t", "مقال جديد") ?: "مقال جديد"
            val key = e.optString("id", title)
            val prefs = context.getSharedPreferences("notifications", Context.MODE_PRIVATE)
            val old = prefs.getString("last_blog", "")
            if (old.isNullOrEmpty()) {
                prefs.edit().putString("last_blog", key).apply()
            } else if (old != key) {
                prefs.edit().putString("last_blog", key).apply()
                notify(context, "📰 مقال جديد في الفيلسوف", title)
            }
        } catch (_: Exception) { }
    }

    private fun notify(context: Context, title: String, text: String) {
        val nm = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        val pi = PendingIntent.getActivity(context, title.hashCode(), Intent(context, MainActivity::class.java), PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
        val n = NotificationCompat.Builder(context, "faylasoof")
            .setSmallIcon(com.alfaylasoof.app.R.drawable.ic_launcher)
            .setContentTitle(title)
            .setContentText(text)
            .setAutoCancel(true)
            .setContentIntent(pi)
            .build()
        nm.notify(title.hashCode(), n)
    }

    companion object {
        const val ACTION_BLOG = "com.alfaylasoof.app.BLOG"
        const val ACTION_LUCK = "com.alfaylasoof.app.LUCK"
        const val ACTION_ZODIAC = "com.alfaylasoof.app.ZODIAC"
        const val ACTION_UPDATE = "com.alfaylasoof.app.UPDATE"
        const val ACTION_CINEMA = "com.alfaylasoof.app.CINEMA"
    }
}
