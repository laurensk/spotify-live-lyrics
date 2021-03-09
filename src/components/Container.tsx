import React from "react";
import "./Container.css";

interface PropsType {
  children: any;
}

class Container extends React.Component<PropsType, any> {
  render() {
    return (
      <div className="sll-container">
        <div className="sll-container-children">{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
