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
  render () {
    return(  
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
      </div>
      {/* Check if the user is logged using the prop isLoggedIn from the App component */}
      <div className="App-body">{!this.props.isLoggedIn ? <Login /> : <CourseList listCourses={listCourses}/>}</div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
    );
  }
}


{/* These serve as the default props for the App component such that if the 
  isLoggedIn prop is not passed, it will default to false */}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;