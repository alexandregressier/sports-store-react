tasks.named<Wrapper>("wrapper") {
    gradleVersion = "${project.extra["version.gradle"]}"
    distributionType = Wrapper.DistributionType.ALL
}