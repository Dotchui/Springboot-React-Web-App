package com.exemple.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@SpringBootApplication
@RestController
public class DemoApplication
{
    public static void  main(String[] args)
    {
        SpringApplication.run(DemoApplication.class, args);
    }
    @GetMapping("/greet/{name}")
    public String   greet(@PathVariable String name)
    {
        return ("Hello, " + name + "!");
    }
}