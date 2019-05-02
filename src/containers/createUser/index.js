import React, { Component } from 'react';

import '../../assets/styles/main.scss';
import './createUser.scss';

export class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Hola',
      lastname: 'Apellido',
      email: 'Correo@gmail.com'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <card>
        <div class="container is-fluid">
          <form class="formCreate" onSubmit={this.handleSubmit}>
            <div>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input 
                  name="name"
                  className="input" 
                  type="text" 
                  placeholder="Text input" 
                  value={this.state.name} 
                  onChange={this.handleChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Lastname</label>
                <div className="control has-icons-left has-icons-right">
                  <input 
                  name="lastname"
                  className="input" 
                  type="text" 
                  placeholder="Text input" 
                  defaultValue="bulma" 
                  value={this.state.lastname} 
                  onChange={this.handleChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Git user</label>
                <div className="control">
                  <input 
                  className="input" 
                  type="text" 
                  placeholder="Enter your git user" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input 
                  name="email"
                  className="input" 
                  type="email" 
                  placeholder="Email input" 
                  defaultValue="bulma@gmail.com" 
                  value={this.state.email} 
                  onChange={this.handleChange} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Enter your git user" />
                </div>
              </div>
              <div className="field">
                <label className="label">Avatar URL</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Enter your avatar URL" />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea" placeholder="Textarea" defaultValue={""} />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-text">Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </card>
    );
  }
}








