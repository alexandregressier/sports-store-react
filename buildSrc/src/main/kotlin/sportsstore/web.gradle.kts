package sportsstore

import org.siouan.frontendgradleplugin.infrastructure.gradle.CleanTask
import org.siouan.frontendgradleplugin.infrastructure.gradle.RunNpmYarn

plugins {
    id("org.siouan.frontend-jdk11")
}

group = "dev.gressier.sportsstore"

frontend {
    // Node
    nodeVersion.set("${extra["version.node"]}")
    nodeInstallDirectory.set(file("${projectDir.parent}/.bin/node"))

    // Yarn
    yarnEnabled.set(true)
    yarnVersion.set("${extra["version.yarn"]}")
    yarnInstallDirectory.set(file("${projectDir.parent}/.bin/yarn"))

    // Scripts
    assembleScript.set("build")
    checkScript.set("test")
}

tasks.register<RunNpmYarn>("start") {
    group = "application"
    description = "Runs this web application in development mode."
    dependsOn("installNode", "installYarn", "installFrontend")

    script.set("start")
}

tasks.named<CleanTask>("cleanFrontend") {
    doLast {
        delete(buildDir)
    }
}