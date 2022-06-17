import React, { Component } from 'react';

class Input2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            isValid:true
        }
    }
    
    render() {
        let isActive=true;
        if (typeof(this.props.isActive)!="undefined") {
            isActive=this.props.isActive;
        }
        return (
            <div className='grow basis-0 flex flex-col'>
                <div className={`basis-11 relative flex rounded-[3px] border-2 border-[#D9D9D9] border-b-0 ${!isActive?'bg-[#D3D5E2]':''}`}>
                    {isActive?
                        <React.Fragment>
                            <input placeholder={this.props.title} className='grow focus:outline-0 rounded-[3px] pr-2 placeholder:text-[#002145]' />
                            <div className='absolute right-0 bottom-0 left-0 h-0.5 bg-[#0A65CD]'></div>
                        </React.Fragment>
                        :
                        <span className='grow rounded-[3px] pr-2 text-[#FCFCFB] flex items-center'>{this.props.title}</span>
                    }
                </div>
                    {isActive&&!this.state.isValid?
                        <React.Fragment>
                            <div className='flex grow-0 basis-5 text-red-600 pr-2'>
                                <span>{this.props.errorMessage}</span>
                            </div>
                        </React.Fragment>
                        :
                        ''
                    }
            </div>
        );
    }
}

export default Input2;