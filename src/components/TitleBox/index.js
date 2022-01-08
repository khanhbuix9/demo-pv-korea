import React from 'react'
import './style.scss'
import PropTypes from 'prop-types';


const TitleBox = ({
    name,
    style,
    fontSize,
    hiddenGach
}) => {
    return (
        <div className="title-for-page pb-2 pt-2" style={style}>
            <h2
                className="f-26"
                style={fontSize && { fontSize: fontSize }}
            >
                {name || ''}
            </h2>
            {
                !hiddenGach && <div className="border-bottom-gach"></div>
            }

        </div>
    )
}


TitleBox.propTypes = {
    name: PropTypes.string,
    hiddenGach: PropTypes.bool
};
export default TitleBox