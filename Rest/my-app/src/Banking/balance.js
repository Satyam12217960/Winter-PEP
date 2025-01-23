import React from "react";

let amount = 100000; // Balance amount

function Fixed_dep() {
  const one_mnth = () => alert("Maturity amount: $" + (amount + amount * 0.05));
  const two_mnth = () => alert("Maturity amount: $" + (amount + amount * 0.055));
  const five_mnth = () => alert("Maturity amount: $" + (amount + amount * 0.06));
  const six_mnth = () => alert("Maturity amount: $" + (amount + amount * 0.02));

  return (
    <div style={styles.container}>
      <h1>Hello! Dear Customer. Choose a plan for a Fixed Deposit of $100,000 .</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={one_mnth}>
          1 Month
        </button>
        <button style={styles.button} onClick={two_mnth}>
          2 Months
        </button>
        <button style={styles.button} onClick={five_mnth}>
          5 Months
        </button>
        <button style={styles.button} onClick={six_mnth}>
          6 Months
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column", // Buttons will be in a column (one per line)
    alignItems: "center",
    gap: "10px", // Space between buttons
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "200px",
  },
};

export default Fixed_dep;
