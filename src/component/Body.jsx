import React from 'react';

class Body extends React.Component {
   
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
      'pageCategory': 1 ,
      'typeOfServices': this.state.subject,
      'area': this.state.area
    })
  }



  render() {

    return (
      
      
     
     <div className="body bg-dark text-white pt-5 pb-5">
       
        <div className="d-flex justify-content-center">
         <h1 >Form</h1>
        </div>
    
    
     <div className="d-flex justify-content-center ">
        <form method="post" action="#" className="col-md-6" id="form-contato" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name={'email'} onChange={this.handleInputChange} value={this.state.email} />
          </div>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="name" className="form-control" id="name" placeholder="Name" name={'name'} onChange={this.handleInputChange} value={this.state.name} />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Subject</label>
            <select className="form-control" id="exampleFormControlSelect2" name="subject" value={this.state.subject} onChange={this.handleInputChange}>
              <option value=""></option>
              <option value="Vendas">Sales</option>
              <option value="Financeiro">Financial</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect2">Area</label>
            <select className="form-control" id="exampleFormControlSelect2" name="area" value={this.state.area} onChange={this.handleInputChange}>
              <option value=""></option>
              <option value="Ti">T.I</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <button type="submit" className="submit btn btn-primary w-100"  onChange={this.handleSubmit}>Submit</button>
        </form>
      </div>
    </div>

    );
  }
}

export default Body;
