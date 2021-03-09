import React from "react";
import "./Header.css";

interface PropsType {
  title: string;
}

class Header extends React.Component<PropsType, any> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

export default Header;
