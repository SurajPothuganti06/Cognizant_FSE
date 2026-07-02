package org.example;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class OrderTests {
    @Test
    @Order(1)
    void createAccount() {
        System.out.println("Account created successfully");
    }

    @Test
    @Order(2)
    void loginAccount() {
        System.out.println("Login successful");
    }

    @Test
    @Order(3)
    void placeOrder() {
        System.out.println("Order placed");
    }

    @Test
    @Order(4)
    void logOut() {
        System.out.println("Logging out");
    }
}
