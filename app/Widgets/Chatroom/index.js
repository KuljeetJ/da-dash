import React, { Component, PropTypes } from 'react';
import WriteChat from './WriteChat';
import ChatList from './ChatList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../redux/actions';

let style;
const chats = {
  chatss: [{
    USERNAME: 'Kuljeet',
    MESSAGE: 'Hello test',
    TIME: '11.00',
  }, {
    USERNAME: 'Kuljeet2',
    MESSAGE: 'Hello test2',
    TIME: '11.002',
  }, {
    USERNAME: 'Kuljeet3',
    MESSAGE: 'Hello test3',
    TIME: '11.003',
  },
],
};

class Chatroom extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
//    chats: PropTypes.array.isRequired,
  }


  handleStateChange = (text) => {
    this.setState({ show: text });
  }

  addHandler = (message) => {
    this.props.actions.addMessage(message);
  }

  render() {
    return (
      <div style={style.todo} className="bootstrap-border">
        <ChatList chats={chats.chatss}/>
        <WriteChat addMessage={this.addHandler}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStateToProps(state) {
  return { ...state.reducer.chat };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);

style = {
  todo: {
    backgroundColor: 'white',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
  },
};
