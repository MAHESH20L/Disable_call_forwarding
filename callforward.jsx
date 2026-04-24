import React from "react";
function Disable_forwarding(){
    const disableforward=(){
        window.location.href="tel:##21"
    };
    return (
        <div style={styles.container}>
            <h2>Diable call forwarding for airtel users</h2>
            <button style={styles.button} onClick={disableforward}>
                Disable call forwarding
            </button>
            <p style={styles.note}>
                This will open dialer, Please call to disable forwarding.
            </p>
        </div>
        
    );

}
const styles={
    container: {
    fontFamily: "Arial",
    padding: "20px",
    textAlign: "center",
  },
  button: {
    padding: "12px 20px",
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  note: {
    marginTop: "10px",
    fontSize: "12px",
    color: "gray",
  },
};