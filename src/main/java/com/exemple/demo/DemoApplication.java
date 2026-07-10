package com.exemple.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class DemoApplication
{
    public static void  main(String[] args)
    {
        SpringApplication.run(DemoApplication.class, args);
    }
    @GetMapping("/greet/{name}")
    public Map<String, String> greet(@PathVariable String name) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello, " + name + "!");
        response.put("name", name);
        response.put("timestamp", LocalDateTime.now().toString());
        return (response);
    }
}