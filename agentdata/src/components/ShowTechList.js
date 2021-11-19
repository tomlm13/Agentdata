import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TechCard from './TechCard';

class ShowTechList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techs: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/techs')
      .then(res => {
        this.setState({
          techs: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowTechList');
      })
  };


  render() {
    const techs = this.state.techs;
    console.log("PrintTech: " + techs);
    let techList;

    if(!techs) {
      techList = "there is no tech record!";
    } else {
      techList = techs.map((tech, k) =>
        <TechCard tech={tech} key={k} />
      );
    }

    return (
      <div className="ShowTechList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Tech List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-tech" className="btn btn-outline-warning float-right">
                + Add New Tech
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {techList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTechList;
