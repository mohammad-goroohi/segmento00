import React, { Component } from 'react';
import Input1 from './Inputs/Input1'
import LeftSide from './LeftSide';
import googleaccountLogo from '../images/googleaccount.svg'
import Button2 from './Buttons/Button2';
import frame from '../images/Frame.svg'
import Button1 from './Buttons/Button1';
import Input2 from './Inputs/Input2';
import ActivationCode from './ActivationCode'
class Page345 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='grow flex flex-col'>
                    <div className='grow flex'>
                        <div className='grow basis-0 flex flex-col'>
                            <div className='text-justify mb-[52px] text-[18px] leading-7 text-[#002145]'>
                                گذرواژه خود را فراموش کرده اید . هیچ ایرادی نداره
                                <br />
                                ایمیل خودتون رو برامون بنویسین تا ما یک کد فعال سازی ارسال کنیم .
                                <br />
                                کد رو وارد کنین و گذرواژه جدیدتون رو بنویسین برامون . به همین سادگی
                            </div>
                            <div className='flex items-center justify-between mb-7'>
                                <div className='w-2/5'>
                                    <Input2 title={"ایمیل"} />
                                </div>
                                <div>
                                    <Button1 text={"دریافت کد"} />
                                </div>
                            </div>
                            <div className='flex items-center justify-between mb-16'>
                                <div>
                                    <ActivationCode isActive={false} />
                                </div>
                                <div className='relative top-4'>
                                    <Button1 isActive={false} text={"تایید کد"} />
                                </div>
                            </div>
                            <div className='flex items-center justify-between mb-11'>
                                <div className='grow basis-0'>
                                    <Input2 isActive={false} title={"گذرواژه جدید"} />
                                </div>
                                <div className='grow-0 basis-2'></div>
                                <div className='grow basis-0'>
                                    <Input2 isActive={false} title={"تکرار گذرواژه جدید"} />
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='grow basis-0'>
                                    <Button1 isActive={false} text={"ذخیره گذرواژه و ورود"} />
                                </div>
                                <div dir='ltr' className='grow basis-0'>
                                    <a className='underline cursor-pointer'>حساب کاربری ندارم</a>
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

export default Page345;