package com.codingreceipe.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    // 기본 페이지 요청 메서드
    @GetMapping("/")
    public String index(){
        return "index";     // => template 폴더의 index.html을 찾아감
    }
}
