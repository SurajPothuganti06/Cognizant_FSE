import officeImage from "./office.jpg";

function App() {

  // Heading
  const heading = "Office Space";

  // Single Office Object
  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // List of Office Objects
  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Tech Park",
      Rent: 70000,
      Address: "Hyderabad"
    },
    {
      Name: "Cyber Tower",
      Rent: 45000,
      Address: "Bangalore"
    },
    {
      Name: "DLF IT Park",
      Rent: 85000,
      Address: "Chennai"
    }
  ];

  return (
    <div style={{ margin: "40px", fontFamily: "Arial" }}>

      {/* Heading */}
      <h1>{heading}, at Affordable Range</h1>

      {/* Image */}
      <img
        src={officeImage}
        alt="Office Space"
        width="300"
        height="200"
      />

      <hr />

      {/* Single Office Details */}
      <h2>Single Office Details</h2>

      <h3>Name : {office.Name}</h3>

      <h3
        style={{
          color: office.Rent <= 60000 ? "red" : "green"
        }}
      >
        Rent : Rs. {office.Rent}
      </h3>

      <h3>Address : {office.Address}</h3>

      <hr />

      {/* Multiple Office Details */}

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item, index) => (

          <div
            key={index}
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              width: "320px"
            }}
          >

            <h3>Name : {item.Name}</h3>

            <h3
              style={{
                color: item.Rent <= 60000 ? "red" : "green"
              }}
            >
              Rent : Rs. {item.Rent}
            </h3>

            <h3>Address : {item.Address}</h3>

          </div>

        ))
      }

    </div>
  );
}

export default App;