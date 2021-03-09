import React from "react";
import "./LargeText.css";

interface PropsType {
  fontWeight?: any;
  text: string;
}

class LargeText extends React.Component<PropsType, any> {
  render() {
    return (
      <div className="sll-large-text" style={{ fontWeight: this.props.fontWeight ? this.props.fontWeight : "normal" }}>
        {this.props.text}
      </div>
    );
  }
}

export default LargeText;
