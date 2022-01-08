import React from 'react'
import './style.scss'
import PropTypes from 'prop-types';
import { Input } from 'antd';


const InputLable = ({
    lable,
    input
}) => {
    return (
        <div className="inp_box_b ">
            <label className="label-input f-16">
                {lable || ''}
            </label>
            <Input
                className="input-style form-control mr-0"
                placeholder="아이디를 입력해주세요"
                {...input}
            />
        </div>
    )
}


InputLable.propTypes = {
    lable: PropTypes.string,
    readOnly: PropTypes.bool,
};
export default InputLable