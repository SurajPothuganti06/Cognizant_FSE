package org.example;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class EvenCheckerTest {
    @ParameterizedTest
    @ValueSource(ints = {2, 4, 6, 8})
    void testEvenNumbers(int n) {
        EvenChecker even = new EvenChecker();
        assertTrue(even.isEven(n));
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 3, 5, 7})
    void testOddNumbers(int n) {
        EvenChecker even = new EvenChecker();
        assertFalse(even.isEven(n));
    }
}
