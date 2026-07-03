package com.library;

import com.library.repository.BookRepository;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookRepository repository = context.getBean("BookRepository", BookRepository.class);
        BookService service = context.getBean("BookService", BookService.class);
        repository.display();
        service.service();
    }
}
