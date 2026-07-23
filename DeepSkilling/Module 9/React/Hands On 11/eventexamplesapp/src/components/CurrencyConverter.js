import React, { useState } from "react";

function CurrencyConverter() {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        const euro = parseFloat(amount);

        if (isNaN(euro)) {
            alert("Enter a valid amount");
            return;
        }

        const rupees = euro * 80;

        alert(
            "Converting to Euro Amount is " + rupees
        );

    }

    return (

        <div style={{ marginTop: "40px" }}>

            <h1 style={{ color: "green" }}>
                Currency Convertor!!!
            </h1>

            <form onSubmit={handleSubmit}>

                <label>
                    Amount:
                </label>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <br /><br />

                <label>
                    Currency:
                </label>

                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Submit
                </button>

            </form>

        </div>

    );

}

export default CurrencyConverter;