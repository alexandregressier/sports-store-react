plugins { `kotlin-dsl` }

repositories {
    gradlePluginPortal()
}

dependencies {
    // Kotlin
    implementation(kotlin("gradle-plugin:_"))
    implementation(kotlin("allopen:_"))

    // Spring
    implementation("org.springframework.boot:spring-boot-gradle-plugin:_")
    implementation("io.spring.gradle:dependency-management-plugin:_")

    // Front-end
    implementation("org.siouan:frontend-gradle-plugin-jdk11:_")
}