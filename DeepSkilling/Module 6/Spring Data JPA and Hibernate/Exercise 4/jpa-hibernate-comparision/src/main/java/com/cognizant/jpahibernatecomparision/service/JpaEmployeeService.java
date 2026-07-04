package com.cognizant.jpahibernatecomparision.service;

import com.cognizant.jpahibernatecomparision.entity.Employee;
import com.cognizant.jpahibernatecomparision.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class JpaEmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {

        employeeRepository.save(employee);

    }

}