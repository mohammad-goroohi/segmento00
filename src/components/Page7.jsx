import React, { Component } from 'react';
import Input1 from './Inputs/Input1'
import LeftSide from './LeftSide';
import googleaccountLogo from '../images/googleaccount.svg'
import Button2 from './Buttons/Button2';
import frame from '../images/Frame.svg'
import Button1 from './Buttons/Button1';
import Input2 from './Inputs/Input2'
class Page8 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='grow flex flex-col'>
                    <div className='grow-0 basis-12'></div>
                    <div className='grow flex'>
                        <div className='grow basis-0 flex flex-col'>
                            <div className='mb-4'>
                                <Input2 title="نام و نام خوانوادگی" errorMessage="وارد کردن نام و نام خانوادگی الزامی است." />
                            </div>
                            <div className='mb-4'>
                                <Input2 title="ایمیل" errorMessage="ایمیل را وارد کنید." />
                            </div>
                            <div className='flex'>
                                <div className='grow basis-0 pl-4'>
                                    <Input2 title="نام و نام خوانوادگی" errorMessage="وارد کردن نام و نام خانوادگی الزامی است." />
                                </div>
                                <div className='grow basis-0 pr-4'>
                                    <Input2 title="ایمیل" errorMessage="ایمیل را وارد کنید." />
                                </div>
                            </div>
                            <div className='basis-24 flex'>
                                <div className='flex items-center'>
                                    <div className='ml-5'>
                                        <Button1 text='عضویت' isActive={true}/>
                                    </div>
                                    <Button2 text='حساب گوگل' icon={googleaccountLogo} />
                                </div>
                                <div className='grow basis-0 flex items-center ' dir='ltr'>
                                    <a className='underline cursor-pointer'>
                                        !حساب کاربری دارم
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className='grow-0 basis-36'></div>
                        <div className='grow-0 basis-[377px] flex flex-col'>
                            <LeftSide subTitle={":برندهایی که به ما اطمینان کرده‌اند"} logo={frame} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Page8;