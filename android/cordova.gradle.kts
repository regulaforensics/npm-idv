apply(plugin = "kotlin-android")
apply(plugin = "kotlin-kapt")

extensions.getByName("android").withGroovyBuilder {
    "buildFeatures" { setProperty("dataBinding", true) }
}

repositories {
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Beta") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Nightly") }
    maven { url = uri("https://maven.regulaforensics.com/RegulaDocumentReader/Stage") }
}

dependencies {
    //noinspection GradleDependency
    add("implementation", "com.regula.idv:api:3.9.359") {
        isTransitive = true
    }
}
