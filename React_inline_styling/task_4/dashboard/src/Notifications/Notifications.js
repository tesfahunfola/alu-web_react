import React from "react";
import PropTypes from "prop-types";
import { css, StyleSheet } from 'aphrodite';
import NotificationItem from "./NotificationItem";
import closeButton from "../assets/close-icon.png";
import NotificationItemShape from "./NotificationItemShape";


// Add responsive design to the Notifications component
const styles = StyleSheet.create({
  notifications: {
    border: '3px dashed #e14852',
    padding: '0.25em',
    float: 'right',
    margin: '20px 10px 0 0',
  },
  notificationsSmall: {
    '@media (max-width: 900px)': {
      float: 'none',
      fontSize: '20px'
    }
  },
  ulSmall: {
    '@media (max-width: 900px)': {
      padding: '0',
      listStyle: 'none'
    }
  },

  notificationsButtonImage: {
    width: '20px',
    marginTop: '10px'
  },
  
  // CSS frames to make the opacity change from 0.5 to 1
  opacity: {
    '@keyframes opacity': {
      '0%': {
        opacity: 0.5,
      },
      '100%': {
        opacity: 1,
      },
    }
  },

  // CSS frames to make the element bounce.
  bounce: {
    '@keyframes bounce': {
      '0%': {
        transform: 'translateY(0px)',
      },
      '50%': {
        transform: 'translateY(-5px)',
      },
      '100%': {
        transform: 'translateY(5px)',
      },
    }
  },

  // MenueItem style7
  menuItem: {
    textAlign: 'right',
    fontWeight: 'bold',
    pointer: 'cursor',
    backgroundColor: '#fff8f8',
    ':hover': {
      animationName: ['$bounce', '$opacity'],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 1',
    },
    '@media (max-width: 900px)': {
      fontSize: '20px'
    }
  },
})


class Notifications extends React.Component {
  constructor (props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
      )
  }
  
  render () { 
    return (
      <>
        <div className='menuItem'><div className={css(styles.menuItem)}>Your notifications</div></div>
    
        { this.props.displayDrawer ? 
          (<div className='Notifications'>
            <div className={css(styles.notifications, styles.notificationsSmall)}>
              <button
                style={{
                  right: 45,
                  border: "none",
                  position: "absolute",
                  background: "transparent",
                }}
                aria-label="close"
                onClick={() => console.log("Close button has been clicked")}
              >
              <img src={closeButton} className={css(styles.notificationsButtonImage)} alt="close button icon" />
              </button>
              <p>Here is the list of notifications</p>
              <ul className={css(styles.ulSmall)}>
                {this.props.listNotifications.length === 0 ? (<NotificationItem value='No new notification for now' type='no-new' />) : <></>}
                {this.props.listNotifications.map((not) => (<NotificationItem key={not.id} type={not.type} value={not.value} html={not.html} markAsRead={() => {this.markAsRead(not.id)}} />))}
              </ul>
            </div>
          </div>)
             
          : <></>
        }
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;