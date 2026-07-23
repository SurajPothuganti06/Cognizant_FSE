import React, { useState } from "react";

function EventExamples() {

    const [count, setCount] = useState(5);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Member!");
    }

    function sayWelcome(message) {
        alert(message);
    }

    function handleClick() {
        alert("I was clicked");
    }

    function increaseAndHello() {
        increment();
        sayHello();
    }

    return (
        <div>

            <h2>{count}</h2>

            <button onClick={increaseAndHello}>
                Increment
            </button>

            <br /><br />

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={handleClick}>
                Click on me
            </button>

        </div>
    );

}

export default EventExamples;