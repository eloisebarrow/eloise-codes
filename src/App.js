import React, { Component } from 'react';
import './App.css';
import HorizontalScroll from './components/HorizontalScroll';
import ProgressBar from './components/ProgressBar';
import Effect from './components/Effect'; // useEffect counter example
import ReactPlayerComp from './components/ReactPlayerComp'; // embed a video
import Form from './components/Form';
import Formik from './components/Formik';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState( prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmit = async () => {
    // post method
  }

  render() {
    return (
      <div className="App">
        {/* <HorizontalScroll />
        <ProgressBar /> */}
        {/* <Form
          formData={this.state.formData}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} /> */}
          <Formik />
      </div>
    );
  }
}
