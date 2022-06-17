import React, { Component } from 'react';

class ActivationCode extends Component {
    render() {
        let isActive = true;
        if (typeof (this.props.isActive) != "undefined") {
            isActive = this.props.isActive;
        }
        return (
            <div className='flex flex-col justify-center'>
                <span className={`mb-[12px] text-center ${!isActive ? 'text-[#D3D5E2]' : ''}`}>کد فعال سازی</span>
                <div className='flex flex-row'>
                    {
                        new Array(4).fill(1).map(x => {
                            return (
                                <div className={`w-[50px] h-[50px] flex mx-[10px] ${!isActive ? 'bg-[#D3D5E2]' : ' border-b-2 border-[#0A65CD]'}`}>
                                    {isActive ?
                                        <React.Fragment>
                                            <input className={'grow basis-0 flex text-center min-w-0 focus:outline-0'} />
                                        </React.Fragment>
                                        :
                                        ''
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ActivationCode;