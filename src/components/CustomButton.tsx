import React from "react";
import "./CustomButton.css";

interface PropsType {
  title: string;
  onClick: Function;
}

class CustomButton extends React.Component<PropsType, any> {
  render() {
    return (
      <button className="sll-button" onClick={(e) => this.props.onClick()}>
        {this.props.title}
      </button>
    );
  }
}

export default CustomButton;
