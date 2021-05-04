package dev.gressier.sportsstore.service

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloRestController {

    @GetMapping("/hello")
    fun getHello() = "Hello"
}

@SpringBootApplication
class App

fun main(args: Array<String>) {
    runApplication<App>(*args)
}