package com.cognizant.jpahibernatecomparision;

import com.cognizant.jpahibernatecomparision.entity.Employee;
import com.cognizant.jpahibernatecomparision.service.JpaEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JpaHibernateComparisionApplication implements CommandLineRunner {

    @Autowired
    private JpaEmployeeService service;

    public static void main(String[] args) {
        SpringApplication.run(JpaHibernateComparisionApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        Employee employee = new Employee("Suraj", 45000.0);

        service.addEmployee(employee);

        System.out.println("Employee Saved Successfully");

    }
}