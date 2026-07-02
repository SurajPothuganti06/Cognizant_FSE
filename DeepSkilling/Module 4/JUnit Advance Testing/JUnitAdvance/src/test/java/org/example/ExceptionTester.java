package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ExceptionTester {
    @Test
    public void testException() {
        ExceptionThrower exceptionThrower = new ExceptionThrower();
        ArithmeticException exception = assertThrows(ArithmeticException.class, () -> exceptionThrower.throwException());
        assertEquals("Division by zero", exception.getMessage());
    }
}
