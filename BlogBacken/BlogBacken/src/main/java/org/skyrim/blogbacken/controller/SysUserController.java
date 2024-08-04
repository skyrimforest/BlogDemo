package org.skyrim.blogbacken.controller;


import org.skyrim.blogbacken.model.Test;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@RestController
@RequestMapping("user")
public class SysUserController {

    @GetMapping(value = "/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public byte[] getUserProfile(@PathVariable String imageName) throws IOException {
        // 从 resources 目录读取图片
        Resource imageResource = new ClassPathResource("static/images/" + imageName);
        // 获取图片文件路径
        Path imagePath = imageResource.getFile().toPath();
        // 读取图片文件为字节数组
        byte[] imageBytes = Files.readAllBytes(imagePath);
        return imageBytes;
    }

    @PostMapping(value="/test")
    @ResponseBody
    public Test getUserTest(@RequestBody Test test){
        System.out.println(test.toString());
        Test t=new Test();
        t.name="skyrim";
        t.age=233;
        return t;
    }
}
