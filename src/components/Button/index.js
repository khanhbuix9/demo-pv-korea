import React from 'react'
import PropTypes from 'prop-types';
import { Button } from 'antd';
import './style.scss'



const ButtonLottery = ({
    text,
    bntHref,
    button,
    primary
}) => {
    return (
        <>
            {
                !bntHref ?
                    (
                        <Button
                            className={primary ? 'bg-violet' : 'bg-primary'}
                            id="btnLottery"
                            {...button}
                        >
                            <span className="f-16">{text || ''}</span>
                        </Button>
                    ) : (
                        <a {...button} id="btnLottery" className={primary ? 'bg-violet' : 'bg-primary'}>
                            <span className="f-16">{text || ''}</span>
                        </a>
                    )
            }
        </>


    )
}

ButtonLottery.propTypes = {
    text: PropTypes.string,
    readOnly: PropTypes.bool,
    bntHref: PropTypes.bool,
    primary: PropTypes.bool,
};
export default ButtonLottery