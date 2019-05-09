import React from 'react';

function FormUser(props) {
  const {
    name,
    lastname,
    email,
    onSubmit,
    onChange
  } = props;

  return (
      <div className="container">
        <form className="formCreate" onSubmit={onSubmit}>
          <div>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  name="name"
                  className="input"
                  type="text"
                  placeholder="Text input"
                  value={name}
                  onChange={onChange} />
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
                  value={lastname}
                  onChange={onChange} />
                <span className="icon is-small is-left">
                  <i className="fas fa-user" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check" />
                </span>
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
                  value={email}
                  onChange={onChange} />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
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
  )
}

export {
  FormUser
}
