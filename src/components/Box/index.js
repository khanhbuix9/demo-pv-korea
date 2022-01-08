import React from 'react'
import PropTypes from 'prop-types';
import './style.scss'
import { Col, Row } from 'antd';



const Box = ({
    children,
    style,
    span,
    wFull
}) => {
    return (

        <Row justify="center" className="flex-center" style={style}>
            {
                span ? (
                    <Col className="_col-box" lg={{ span: span }} xl={{ span: span }} xxl={{ span: span }}>
                        <div className="share box-shadow" style={{ width: '100%' }}>
                            {children}
                        </div>
                    </Col>
                ) :
                    (
                        <div className="share box-shadow">
                            {children}
                        </div>
                    )
            }

        </Row>

    )
}


Box.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object
};
export default Box