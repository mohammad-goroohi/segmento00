import React, { Component } from 'react';

class Button1 extends Component {    
    render() {
        let isActive=true;
        if(typeof(this.props.isActive)!="undefined"){
            isActive=this.props.isActive;
        }
        return (
            <React.Fragment>
                <button disabled={isActive} className={`py-2 px-5 rounded-[9px] text-white cursor-pointer ${!isActive?'bg-[#D3D5E2]':'bg-[#0A65CD]'}`}>{this.props.text}</button>
            </React.Fragment>
        );
    }
}

export default Button1;