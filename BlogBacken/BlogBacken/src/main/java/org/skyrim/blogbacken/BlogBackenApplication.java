package org.skyrim.blogbacken;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("org.skyrim.blogbacken.dao")
public class BlogBackenApplication {
    public static void main(String[] args) {
        SpringApplication.run(BlogBackenApplication.class, args);
    }

}
