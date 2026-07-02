package org.example;

import org.junit.jupiter.api.Test;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTimeout;

public class PerformanceTesterTest {
    @Test
    void testPerformace() {
        PerformaceTester test = new PerformaceTester();
        assertTimeout(Duration.ofSeconds(2), () -> test.performTask());

    }

}
