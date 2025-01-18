import React from "react";
import PropTypes from "prop-types";
import Notifications from "../Notifications/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import "./App.css";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
]

class App extends React.Component {
  
  // Add a new method to the App component that listens for the ctrl+h key press and logs the user out

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this)
  }

  // Add an event listener when component is mounted to listen for the ctrl+h key press
  componentDidMount() {
    document.addEventListener('keydown', this.handlePress)
  }

  // Remove the event listener when the component is unmounted
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress)
  }

  handlePress(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut() // The default value of the logOut prop is an empty function
    }
  }
  

  render () {
    return(  
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
      </div>
      <div className="App-body">{!this.props.isLoggedIn ? <Login /> : <CourseList listCourses={listCourses}/>}</div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;