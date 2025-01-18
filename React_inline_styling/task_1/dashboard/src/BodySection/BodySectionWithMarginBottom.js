import React from 'react'; 
import PropTypes from 'prop-types'
import { css, StyleSheet } from 'aphrodite';
import BodySection from './BodySection';


// Use aphrodite to define a CSS style object
const styles = StyleSheet.create({
    sectionMargin: {
        marginBottom: '40px',
    }
})

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={css(styles.sectionMargin)}>
                <BodySection {...this.props} />
            </div>
        )
    }
}

BodySectionWithMarginBottom.defaultProps = {
    title: ''
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string
}

export default BodySectionWithMarginBottom;
