import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ShowTechDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/techs/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          tech: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowTechDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:5000/api/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error from ShowTechDetails_deleteClick");
      })
  };


  render() {

    const tech = this.state.tech;
    let TechItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ tech.name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Title</td>
            <td>{ tech.title }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowTechDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tech List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Tech's Record</h1>
              <p className="lead text-center">
                  View Tech's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { TechItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,tech._id)}>Delete Tech</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-tech/${tech._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Tech
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default ShowTechDetails;
