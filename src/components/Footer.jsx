import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Abhijit ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
