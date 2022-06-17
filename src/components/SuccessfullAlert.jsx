import React, { Component } from 'react';

class SuccessfullAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true
        }
    }
    componentDidMount(){
        if (typeof (this.props.isActive) != "undefined") {
            this.setState({isActive:this.props.isActive})
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isActive ?
                    <React.Fragment>
                        <div className='fixed inset-0 z-1000 bg-[#D9D9D9] opacity-60'></div>
                        <div className='fixed inset-0 z-1001 flex justify-center items-center'>
                            <div className=' w-[384px] h-[301px] rounded-[9px] bg-[#FAFAFA] flex flex-col items-center'>
                                <div className='w-full flex justify-center items-center bg-[#10CCAE] rounded-[9px] p-2'>
                                    <svg width="116" height="93" viewBox="0 0 116 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M-nan -nanL20.57 92.6C20.1192 92.5014 19.6825 92.3469 19.27 92.14C18.1163 91.6443 17.0115 91.0417 15.97 90.34C12.4911 88.0117 9.75277 84.7347 8.07962 80.8974C6.40647 77.0602 5.86869 72.8236 6.53004 68.69C6.71506 67.4501 7.0198 66.2311 7.44003 65.05V65.05C7.49816 64.8585 7.67895 64.9253 7.63032 65.1195C7.32784 66.3275 7.0808 67.5489 6.89003 68.78C6.34321 72.839 6.9202 76.9702 8.55819 80.724C10.1962 84.4778 12.8324 87.7104 16.18 90.07C17.5899 91.0029 19.056 91.8479 20.57 92.6L-nan -nanL-nan -nanZ" fill="white" />
                                        <path d="M7.70477 90.723C8.02844 91.0893 7.91725 91.1925 7.54996 90.87V90.87C6.97266 90.3716 6.43752 89.8264 5.94997 89.24C4.30288 87.3178 3.00648 85.121 2.11997 82.75C1.22776 80.3797 0.754046 77.8724 0.719958 75.34C0.709768 74.5779 0.753214 73.816 0.849963 73.06V73.06C0.87272 72.5487 1.06483 72.5594 1.06245 73.0712C1.05994 73.6085 1.05505 74.3821 1.08997 75.33C1.34809 80.3116 3.1438 85.0909 6.22997 89.01C6.84267 89.7522 7.35363 90.3257 7.70477 90.723Z" fill="white" />
                                        <path d="M109.421 57.7421C109.285 57.04 109.466 56.9996 109.61 57.7001V57.7001C109.75 58.1288 109.86 58.5664 109.94 59.0101C110.072 59.5976 110.172 60.1918 110.24 60.7901C110.448 62.3409 110.511 63.9076 110.43 65.4701C110.315 67.3849 110.014 69.2839 109.53 71.1401C109.009 72.9888 108.312 74.7836 107.45 76.5001C106.733 77.9069 105.889 79.2458 104.93 80.5001C104.54 81.0401 104.12 81.5001 103.77 81.8801C103.477 82.2352 103.16 82.5694 102.82 82.8801V82.8801C102.362 83.3655 102.235 83.2517 102.674 82.7493C103.16 82.1929 103.852 81.3786 104.63 80.3101C105.537 79.0457 106.336 77.7077 107.02 76.3101C108.702 72.9254 109.698 69.2413 109.95 65.4701C110.05 63.934 110.027 62.3924 109.88 60.8601C109.747 59.5252 109.562 58.4689 109.421 57.7421Z" fill="white" />
                                        <path d="M-nan -nanL115.78 67.6001C115.951 68.4657 115.998 69.3512 115.92 70.2301C115.77 74.4981 114.608 78.6693 112.53 82.4001C112.526 82.4081 112.522 82.416 112.518 82.424C112.293 82.8794 111.949 82.6718 112.2 82.2301V82.2301C114.067 78.4787 115.204 74.4063 115.55 70.2301C115.574 69.3496 115.651 68.4714 115.78 67.6001L-nan -nanL-nan -nanZ" fill="white" />
                                        <path d="M50.8183 53.2853L40.8774 43.6272C39.7601 42.5417 37.9552 42.5417 36.838 43.6272C35.7207 44.7127 35.7207 46.4662 36.838 47.5517L48.8129 59.1859C49.9302 60.2714 51.735 60.2714 52.8523 59.1859L83.162 29.7386C84.2793 28.6531 84.2793 26.8996 83.162 25.8141C82.0448 24.7286 80.2399 24.7286 79.1226 25.8141L50.8183 53.2853Z" fill="white" />
                                        <circle cx="60" cy="42" r="40.5" stroke="white" stroke-width="3" />
                                    </svg>
                                </div>
                                <div className='grow basis-0 flex flex-col items-center'>
                                    <div className='font-bold text-[20px]'>موفقیت آمیز</div>
                                    <div>گذرواژه شما با موفقیت تغییر کرد . از سگمنتو لذت ببرین :)</div>
                                </div>
                                <div onClick={()=>(this.setState({isActive:false}))} className='text-[#0A65CD] justify-self-end basis-8 cursor-pointer'>باشه، فهمیدم!</div>
                            </div>
                        </div>
                    </React.Fragment>
                    :
                    ''
                }
            </React.Fragment>
        );
    }
}

export default SuccessfullAlert;