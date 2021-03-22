import React from "react";
import "./CustomButton.css";

interface PropsType {
  title: string;
  onClick: Function;
  style?: any;
}

class CustomButton extends React.Component<PropsType, any> {
  render() {
    return (
      <button style={this.props.style} className="sll-button" onClick={(e) => this.props.onClick()}>
        {this.props.title}
      </button>
    );
  }
}

export default CustomButton;
