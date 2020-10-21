import React from 'react';

class App extends React.Component {
   
  state = {
      name: "",
      email: "",
      subject: "",
      area: ""

    }


  handleInputChange = event => {
    const target = event.target;
    const value = target.value
    const name = target.name;
this.setState({
      [name]: value
    });
}

  handleSubmit = event => {
    event.preventDefault()
    const dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'contato',
      'typeOfServices': this.state.subject,
      'area': this.state.area
    })
  }



  render() {

    return (
      <div className="App">

        <form method="post" action="#" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name={'email'} onChange={this.handleInputChange} value={this.state.email} />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="name" placeholder="Name" name={'name'} onChange={this.handleInputChange} value={this.state.name} />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Suject</label>
            <select class="form-control" id="exampleFormControlSelect2" value={this.state.subject} onChange={this.handleInputChange}>
              <option>Vendas</option>
              <option>Financeiro</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Area</label>
            <select class="form-control" id="exampleFormControlSelect2" value={this.state.area} onChange={this.handleInputChange}>
              <option>T.I</option>
              <option>Marketing</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary" onChange={this.handleSubmit}>Submit</button>
        </form>

      </div>
    );
  }
}

export default App;
