package org.skyrim.blogbacken.model;

import lombok.Data;

@Data
public class User{
    private Long id;
    private String name;
    private String profile;
    private String email;
}
