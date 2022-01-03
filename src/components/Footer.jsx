import React from "react";
// import  ReactDOM  from "react-dom";

function Footer() {
    var currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    return(
        <footer>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer