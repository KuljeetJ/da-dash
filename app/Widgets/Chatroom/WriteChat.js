import React, { PropTypes } from 'react';
import { Button, Input } from 'react-bootstrap';

let style;
export default class WriteChat extends React.Component {

  static propTypes = {
    addMessage: PropTypes.func.isRequired,
  }

  state = {
    text: '',
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage(this.state.text);
  }

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} style={style.form}>
          <Input className="chat textfield" type="text" placeholder="Enter text" onChange={this.handleChange}/>
          <div>
            <Button className="chat raised" bsStyle="primary" type="submit">Send</Button>
          </div>
        </form>
      </div>
    );
  }
}
style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
