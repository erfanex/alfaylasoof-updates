package com.alfaylasoof.app

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent

class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action != Intent.ACTION_BOOT_COMPLETED) return
        val am = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val actions = listOf(
            NotificationReceiver.ACTION_BLOG to 6 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_LUCK to 12 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_ZODIAC to 24 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_CINEMA to 24 * 60 * 60 * 1000L,
            NotificationReceiver.ACTION_UPDATE to 24 * 60 * 60 * 1000L
        )
        actions.forEachIndexed { index, pair ->
            val i = Intent(context, NotificationReceiver::class.java).apply { action = pair.first }
            val pi = PendingIntent.getBroadcast(context, 6110 + index, i, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE)
            am.setInexactRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis() + 60_000L + index * 5_000L, pair.second, pi)
        }
    }
}
