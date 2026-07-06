package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringCoreDateformatApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringCoreDateformatApplication.class);
    public static void main(String[] args) throws Exception {
        LOGGER.info("START");
        SpringApplication.run(SpringCoreDateformatApplication.class, args);
        displayDate();
        LOGGER.info("END");
    }
//    public static void displayDate() throws Exception {
//        LOGGER.info("displayDate() START");
//        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
//        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
//        Date date = format.parse("31/12/2018");
//        LOGGER.info("Parsed Date : {}", date);
//        LOGGER.info("displayDate() END");
//    }
    public static void displayDate() throws Exception {
        LOGGER.info("DisplayDate() START");
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
        Date date = format.parse("06/07/2026");
        LOGGER.info("Parsed Date : {}", date);
        LOGGER.info("displayDate() END");
    }
}