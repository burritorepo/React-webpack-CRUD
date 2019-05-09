// REACT
import React, { Component } from 'react'; // To avoid writing React.Component every time
// REDUX
import { connect } from 'react-redux'; // To connect this component to my redux's store
// STYLES
import '../../CreateUser.scss';
import { FormUser } from '../../../../common/FormUser';
import UserService from '../../../../Api/UserService'
import { saveUser, saveAllUser } from '../../../../Store/Actions';

// COMPONENT declaration
class CreateUser extends Component {
  constructor(props) {

    super(props);

    this.state = {
      name: '',
      lastname: '',
      email: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  createUser() {
    const { dispatch } = this.props;

    UserService.createUser(JSON.stringify(this.state))
      .then((response)  => {
        dispatch(saveUser(response))
        dispatch(saveAllUser(response))
      }
      )
    }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createUser();
  }

  render() {
    return (
      <FormUser {...this.state} onSubmit={this.handleSubmit} onChange={this.handleChange} />
    );
  }
}

const PageCreateUser = connect()(CreateUser)

export {
  PageCreateUser // new component with dispatch attribute from connect() method
}





