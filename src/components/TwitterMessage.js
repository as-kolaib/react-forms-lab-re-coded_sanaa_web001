import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        message:"",
      remainingChars:0
    };
  }
 changeHandler=(event)=>{
    // console.log(event.target.value.length);
    if(event.target.value.length<=this.props.maxChars){
      this.setState(({message:event.target.value,
      remainingChars:event.target.value.length}))
      
    }
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
