import React, { Component } from 'react';
import i1 from '../images/1.jpg'
import i2 from '../images/2.jpg'
import i3 from '../images/3.jpg'
import i4 from '../images/4.jpg'
import i5 from '../images/5.jpg'
class LeftSide extends Component {
    render() {
        return (
            <React.Fragment>
                <div dir='ltr'>
                    <img className='w-[377px] h-[331px]' src={this.props.logo} alt="" />
                </div>
                <div className='basis-10'></div>
                <div dir='ltr' className='basis-20 flex justify-center items-center'>{this.props.subTitle}</div>
                <div dir='ltr' className='basis-20 flex justify-center'>
                    <img className='h-8 mr-2' src={i1} alt="" />
                    <img className='h-8 mr-2' src={i2} alt="" />
                    <img className='h-8 mr-2' src={i3} alt="" />
                    <img className='h-8 mr-2' src={i4} alt="" />
                    <img className='h-8 mr-2' src={i5} alt="" />
                </div>
            </React.Fragment>
        );
    }
}

export default LeftSide;