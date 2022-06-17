import React, { Component } from 'react';

class Button2 extends Component {
    render() {
        return (
            <div className='py-2 px-5  bg-[#D3D5E2] rounded-[9px] text-white cursor-pointer flex justify-center items-center'>
                <span className='ml-[10px]'>{this.props.text}</span>
                <img src={this.props.icon} />
            </div>
        );
    }
}

export default Button2;