package com.ersproject.ers.controller;


import com.ersproject.ers.model.Reimbursement;
import com.ersproject.ers.model.User;
import com.ersproject.ers.servics.AdminService;
import com.ersproject.ers.servics.ReimbuursementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/v1/admin")

public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private ReimbuursementService reimbuursementService;


    @GetMapping("/users")
    public List<User> getUser(){
        return adminService.getUsers();
    }
    @GetMapping("/current-user")
    public String getLoggedUser(Principal principal){
        return principal.getName();
    }

    @GetMapping("/all-reimbursement")
    public List<Reimbursement> getAllReimbursement(){
        return reimbuursementService.getAllReimbursement();
    }

}
