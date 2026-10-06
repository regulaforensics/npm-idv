import com.android.build.api.dsl.LibraryExtension

plugins {
    id("com.android.library")
}

// AGP 9+ may already provide built-in Kotlin.
if (extensions.findByName("kotlin") == null) {
    apply(plugin = "kotlin-android")
    apply(plugin = "kotlin-kapt")
} else {
    apply(plugin = "com.android.legacy-kapt")
}

extensions.configure<LibraryExtension> {
    namespace = "com.regula.plugin.idv"
    compileSdk = 36
    buildFeatures { dataBinding = true }

    defaultConfig {
        minSdk = 24
    }
}

rootProject.allprojects {
    repositories {
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader") }
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Beta") }
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Nightly") }
        maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Stage") }
    }
}

dependencies {
    //noinspection GradleDynamicVersion
    implementation("com.facebook.react:react-native:+")
    //noinspection GradleDependency
    implementation("com.regula.idv:api:3.9.359") {
        isTransitive = true
    }
}
