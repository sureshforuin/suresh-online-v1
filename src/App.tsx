/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";

interface AppsProps {
  data: any
}

class App extends Component<AppsProps, { resumeData: any }> {
  constructor(props: any) {
    super(props);
    this.state = {
      resumeData: {},
    };

    // ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: (data: any) => {
        this.setState({ resumeData: data });
      },
      error: function (xhr, status, err) {
        console.log(status);
        console.log(xhr);
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        {this.state && this.state.resumeData && (
          <>
            <Header data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            <Contact data={this.state.resumeData.main} />
            <Portfolio data={this.state.resumeData.portfolio} />
            <Footer data={this.state.resumeData.main} />
          </>
        )}
      </div>
    );
  }
}

export default App;
