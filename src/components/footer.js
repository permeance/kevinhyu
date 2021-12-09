import React from "react";
import "./layout.css";

class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        © {new Date().getFullYear()} by Kevin Yu. All rights reserved.
      </div>
    );
  }
}

export default Footer;
