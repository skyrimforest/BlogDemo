package org.skyrim.blogbacken.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("test")
public class SysTestController {

    @GetMapping(value = "/test")
    public String testRouter(){
        return "hello world";
    }
}
