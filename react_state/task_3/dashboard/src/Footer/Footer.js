import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";


const styles = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontSize: '1.2rem'
  },
  copyright: {
    marginTop: '40px'
  }
})

function Footer() {
  // Update the Footer component to use AppContext.Consumer
  return (
    <AppContext.Consumer>
      {(context) => (
        <footer className='footer'>
          <p className={css(styles.copyright)}>
            Copyright {getFullYear()} - {getFooterCopy(true)}
          </p>

          {/* When the user is logged in, the Contact us link should be displayed */}
          {context.user.isLoggedIn && (
            <p className={css(styles.paragraph)}>
              <a>Contact us</a>
            </p>
          )}
        </footer>
      )}
    </AppContext.Consumer>
  );
}

export default Footer;
