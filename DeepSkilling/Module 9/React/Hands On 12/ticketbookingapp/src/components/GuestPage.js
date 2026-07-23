function GuestPage() {

    const flights = [

        {
            flight: "IndiGo 6E101",
            from: "Hyderabad",
            to: "Delhi",
            price: "₹4500"
        },

        {
            flight: "Air India AI202",
            from: "Chennai",
            to: "Mumbai",
            price: "₹5200"
        },

        {
            flight: "SpiceJet SG303",
            from: "Bangalore",
            to: "Kolkata",
            price: "₹6100"
        }

    ];

    return (

        <div>

            <h2>Guest Page</h2>

            <p>You can browse available flights.</p>

            <table border="1" cellPadding="8">

                <thead>

                    <tr>

                        <th>Flight</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        flights.map((item, index) => (

                            <tr key={index}>

                                <td>{item.flight}</td>
                                <td>{item.from}</td>
                                <td>{item.to}</td>
                                <td>{item.price}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

            <br />

            <p><b>Login to book your tickets.</b></p>

        </div>

    );

}

export default GuestPage;