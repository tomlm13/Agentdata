import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateTechInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/update/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          name: res.data.name,
          title: res.data.title
        })
      })
      .catch(err => {
        console.log("Error from UpdateTechInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      title: this.state.title
    };

    axios
      .put('http://localhost:5000/api/update/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-tech/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateTechInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateTechInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tech List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Tech</h1>
              <p className="lead text-center">
                  Update Tech's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                placeholder='Name of the Tech'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Title</label>
              <input
                type='text'
                placeholder='Title'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Tech</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateTechInfo;
