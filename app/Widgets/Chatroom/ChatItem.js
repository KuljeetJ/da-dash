import React, { PropTypes } from 'react';
import { ListGroupItem } from 'react-bootstrap';


export default class ChatItem extends React.Component {

  static propTypes = {
    chat: PropTypes.object.isRequired,
  }


  displayChat = () => {
    return (
      <div>
        <span className = "ChatSpan">{this.props.chat.USERNAME} : </span>
        <span className = "ChatSpan">{this.props.chat.MESSAGE} </span>
        <span className = "ChatSpan">{this.props.chat.TIME}</span>
      </div>
    );
  }
  render() {
    return (
      <ListGroupItem>
          {this.displayChat()}
      </ListGroupItem>
   );
  }

}
