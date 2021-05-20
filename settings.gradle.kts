import de.fayard.refreshVersions.bootstrapRefreshVersions

buildscript {
    repositories {
        gradlePluginPortal()
    }
    dependencies.classpath("de.fayard.refreshVersions:refreshVersions:${extra["version.plugin.refreshVersions"]}")
}
bootstrapRefreshVersions()

rootProject.name = "sports-store"
include(
    // Back-end
    "back-end:sportsstore-service",
    "back-end:sportsstore-service-js",

    // Front-end
    "front-end:web:sportsstore-web-app",
    "front-end:web:todo-web-app",
    "front-end:web:primer-web-app",
    "front-end:web:styled-components",
)