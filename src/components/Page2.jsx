import React, { Component } from 'react';
import Input1 from './Inputs/Input1'
import frame2 from '../images/Frame2.svg'
import LeftSide from './LeftSide';
import Button1 from './Buttons/Button1'
import Button2 from './Buttons/Button2'
import googleaccountLogo from '../images/googleaccount.svg'
class Page2 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='grow flex flex-col'>
                    <div className='grow-0 basis-12'></div>
                    <div className='grow flex'>
                        <div className='grow basis-0 flex flex-col pt-32'>
                            <div className='mb-9'>
                                <Input1 title="ایمیل" errorMessage="وارد کردن ایمیل الزامی است." />
                            </div>
                            <div className='mb-9'>
                                <Input1 title="گذرواژه" errorMessage="گذرواژه را وارد کنید." />
                            </div>
                            <div className='flex'>
                                <div className='flex items-center'>
                                    <div className='ml-5'>
                                        <Button1 text='ورود' />
                                    </div>
                                    <div>
                                        <Button2 text='حساب کاربری' icon={googleaccountLogo} />
                                    </div>
                                </div>
                                <div className='grow basis-0 flex items-center ' dir='ltr'>
                                    <a className='underline cursor-pointer'>
                                        گذرواژه خود را فراموش کرده اید؟
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className='grow-0 basis-36'></div>
                        <div className='grow-0 basis-[377px] flex flex-col'>
                            <LeftSide subTitle={":برندهایی که به ما اطمینان کرده‌اند"} logo={frame2} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Page2;