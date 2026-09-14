plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.alfaylasoof.app"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.alfaylasoof.app"
        minSdk = 26
        targetSdk = 35
        versionCode = 65
        versionName = "6.5.0"
    }

    signingConfigs {
        create("release") {
            storeFile = file("../alfaylasoof-release.jks")
            storePassword = System.getenv("KEYSTORE_PASSWORD") ?: "*ERFAN*abdelazez*0053#"
            keyAlias = System.getenv("KEY_ALIAS") ?: "alfaylasoof"
            keyPassword = System.getenv("KEY_PASSWORD") ?: "*ERFAN*abdelazez*0053#"
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            isShrinkResources = false
            signingConfig = signingConfigs.getByName("release")
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
        debug {
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
}

dependencies {
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.activity:activity-ktx:1.9.3")
}
