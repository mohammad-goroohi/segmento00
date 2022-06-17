import React, { Component } from 'react';
import './Login.css'
import Input from './Input'
import frame from './images/Frame.svg'
import i1 from './images/1.jpg'
import i2 from './images/2.jpg'
import i3 from './images/3.jpg'
import i4 from './images/4.jpg'
import i5 from './images/5.jpg'
class Login extends Component {
    render() {
        return (<div id='LoginApp' className='rtl w-screen h-screen flex flex-col bg-[#F5F7F7]'>
            <div className='grow flex flex-row'>
                <div className='grow-0 basis-24'></div>
                <div className='grow flex flex-col'>
                    <div className='grow-0 basis-32 flex flex-row'>
                        <div className='grow flex items-center'>
                            <div className='flex text-[#063468] ml-5 items-center cursor-pointer'>
                                <svg className='ml-[6px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_353)">
                                        <path d="M3.75 14.5833H1.66667C1.22464 14.5833 0.800716 14.7588 0.488155 15.0714C0.175595 15.384 0 15.8079 0 16.2499L0 18.3333C0 18.7753 0.175595 19.1992 0.488155 19.5118C0.800716 19.8243 1.22464 19.9999 1.66667 19.9999H3.75C4.19203 19.9999 4.61595 19.8243 4.92851 19.5118C5.24107 19.1992 5.41667 18.7753 5.41667 18.3333V16.2499C5.41667 15.8079 5.24107 15.384 4.92851 15.0714C4.61595 14.7588 4.19203 14.5833 3.75 14.5833ZM3.75 18.3333H1.66667V16.2499H3.75V18.3333Z" fill="#063468" />
                                        <path d="M18.3334 14.5833H16.25C15.808 14.5833 15.3841 14.7588 15.0715 15.0714C14.759 15.384 14.5834 15.8079 14.5834 16.2499V18.3333C14.5834 18.7753 14.759 19.1992 15.0715 19.5118C15.3841 19.8243 15.808 19.9999 16.25 19.9999H18.3334C18.7754 19.9999 19.1993 19.8243 19.5119 19.5118C19.8244 19.1992 20 18.7753 20 18.3333V16.2499C20 15.8079 19.8244 15.384 19.5119 15.0714C19.1993 14.7588 18.7754 14.5833 18.3334 14.5833ZM18.3334 18.3333H16.25V16.2499H18.3334V18.3333Z" fill="#063468" />
                                        <path d="M3.75 7.29175H1.66667C1.22464 7.29175 0.800716 7.46734 0.488155 7.7799C0.175595 8.09246 0 8.51639 0 8.95841L0 11.0417C0 11.4838 0.175595 11.9077 0.488155 12.2203C0.800716 12.5328 1.22464 12.7084 1.66667 12.7084H3.75C4.19203 12.7084 4.61595 12.5328 4.92851 12.2203C5.24107 11.9077 5.41667 11.4838 5.41667 11.0417V8.95841C5.41667 8.51639 5.24107 8.09246 4.92851 7.7799C4.61595 7.46734 4.19203 7.29175 3.75 7.29175ZM3.75 11.0417H1.66667V8.95841H3.75V11.0417Z" fill="#063468" />
                                        <path d="M18.3334 7.29175H16.25C15.808 7.29175 15.3841 7.46734 15.0715 7.7799C14.759 8.09246 14.5834 8.51639 14.5834 8.95841V11.0417C14.5834 11.4838 14.759 11.9077 15.0715 12.2203C15.3841 12.5328 15.808 12.7084 16.25 12.7084H18.3334C18.7754 12.7084 19.1993 12.5328 19.5119 12.2203C19.8244 11.9077 20 11.4838 20 11.0417V8.95841C20 8.51639 19.8244 8.09246 19.5119 7.7799C19.1993 7.46734 18.7754 7.29175 18.3334 7.29175ZM18.3334 11.0417H16.25V8.95841H18.3334V11.0417Z" fill="#063468" />
                                        <path d="M3.75 0H1.66667C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667L0 3.75C0 4.19203 0.175595 4.61595 0.488155 4.92851C0.800716 5.24107 1.22464 5.41667 1.66667 5.41667H3.75C4.19203 5.41667 4.61595 5.24107 4.92851 4.92851C5.24107 4.61595 5.41667 4.19203 5.41667 3.75V1.66667C5.41667 1.22464 5.24107 0.800716 4.92851 0.488155C4.61595 0.175595 4.19203 0 3.75 0V0ZM3.75 3.75H1.66667V1.66667H3.75V3.75Z" fill="#063468" />
                                        <path d="M11.0416 14.5833H8.95829C8.51627 14.5833 8.09234 14.7588 7.77978 15.0714C7.46722 15.384 7.29163 15.8079 7.29163 16.2499V18.3333C7.29163 18.7753 7.46722 19.1992 7.77978 19.5118C8.09234 19.8243 8.51627 19.9999 8.95829 19.9999H11.0416C11.4837 19.9999 11.9076 19.8243 12.2201 19.5118C12.5327 19.1992 12.7083 18.7753 12.7083 18.3333V16.2499C12.7083 15.8079 12.5327 15.384 12.2201 15.0714C11.9076 14.7588 11.4837 14.5833 11.0416 14.5833ZM11.0416 18.3333H8.95829V16.2499H11.0416V18.3333Z" fill="#063468" />
                                        <path d="M11.0416 7.29175H8.95829C8.51627 7.29175 8.09234 7.46734 7.77978 7.7799C7.46722 8.09246 7.29163 8.51639 7.29163 8.95841V11.0417C7.29163 11.4838 7.46722 11.9077 7.77978 12.2203C8.09234 12.5328 8.51627 12.7084 8.95829 12.7084H11.0416C11.4837 12.7084 11.9076 12.5328 12.2201 12.2203C12.5327 11.9077 12.7083 11.4838 12.7083 11.0417V8.95841C12.7083 8.51639 12.5327 8.09246 12.2201 7.7799C11.9076 7.46734 11.4837 7.29175 11.0416 7.29175ZM11.0416 11.0417H8.95829V8.95841H11.0416V11.0417Z" fill="#063468" />
                                        <path d="M11.0416 0H8.95829C8.51627 0 8.09234 0.175595 7.77978 0.488155C7.46722 0.800716 7.29163 1.22464 7.29163 1.66667V3.75C7.29163 4.19203 7.46722 4.61595 7.77978 4.92851C8.09234 5.24107 8.51627 5.41667 8.95829 5.41667H11.0416C11.4837 5.41667 11.9076 5.24107 12.2201 4.92851C12.5327 4.61595 12.7083 4.19203 12.7083 3.75V1.66667C12.7083 1.22464 12.5327 0.800716 12.2201 0.488155C11.9076 0.175595 11.4837 0 11.0416 0V0ZM11.0416 3.75H8.95829V1.66667H11.0416V3.75Z" fill="#063468" />
                                        <path d="M18.3334 0H16.25C15.808 0 15.3841 0.175595 15.0715 0.488155C14.759 0.800716 14.5834 1.22464 14.5834 1.66667V3.75C14.5834 4.19203 14.759 4.61595 15.0715 4.92851C15.3841 5.24107 15.808 5.41667 16.25 5.41667H18.3334C18.7754 5.41667 19.1993 5.24107 19.5119 4.92851C19.8244 4.61595 20 4.19203 20 3.75V1.66667C20 1.22464 19.8244 0.800716 19.5119 0.488155C19.1993 0.175595 18.7754 0 18.3334 0V0ZM18.3334 3.75H16.25V1.66667H18.3334V3.75Z" fill="#063468" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_353">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div>امکانات</div>
                            </div>
                            <div className='flex text-[#063468] ml-5 items-center cursor-pointer'>
                                <svg className='ml-[6px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_346)">
                                        <path d="M15.8333 20H4.16667C3.062 19.9987 2.00296 19.5593 1.22185 18.7782C0.440735 17.997 0.00132321 16.938 0 15.8333L0 4.16667C0.00132321 3.062 0.440735 2.00296 1.22185 1.22185C2.00296 0.440735 3.062 0.00132321 4.16667 0L15.8333 0C16.938 0.00132321 17.997 0.440735 18.7782 1.22185C19.5593 2.00296 19.9987 3.062 20 4.16667V15.8333C19.9987 16.938 19.5593 17.997 18.7782 18.7782C17.997 19.5593 16.938 19.9987 15.8333 20ZM4.16667 1.66667C3.50363 1.66667 2.86774 1.93006 2.3989 2.3989C1.93006 2.86774 1.66667 3.50363 1.66667 4.16667V15.8333C1.66667 16.4964 1.93006 17.1323 2.3989 17.6011C2.86774 18.0699 3.50363 18.3333 4.16667 18.3333H15.8333C16.4964 18.3333 17.1323 18.0699 17.6011 17.6011C18.0699 17.1323 18.3333 16.4964 18.3333 15.8333V4.16667C18.3333 3.50363 18.0699 2.86774 17.6011 2.3989C17.1323 1.93006 16.4964 1.66667 15.8333 1.66667H4.16667ZM7.785 14.1708C7.43761 14.1697 7.09667 14.0768 6.79667 13.9017C6.50029 13.732 6.25429 13.4867 6.08386 13.1908C5.91342 12.8949 5.82467 12.559 5.82667 12.2175V7.7825C5.82638 7.44095 5.91593 7.10534 6.08632 6.80933C6.25671 6.51332 6.50195 6.26733 6.79743 6.09603C7.09292 5.92474 7.42825 5.83416 7.7698 5.83339C8.11134 5.83263 8.44708 5.9217 8.74333 6.09167L13.1417 8.2875C13.4472 8.45243 13.703 8.69606 13.8827 8.99315C14.0624 9.29025 14.1593 9.62998 14.1635 9.97715C14.1676 10.3243 14.0789 10.6663 13.9064 10.9676C13.7339 11.2689 13.484 11.5186 13.1825 11.6908L8.7025 13.93C8.42309 14.0894 8.10666 14.1724 7.785 14.1708ZM7.76417 7.50417C7.71824 7.50415 7.67312 7.51622 7.63333 7.53917C7.59011 7.5632 7.55425 7.59855 7.52959 7.64142C7.50492 7.68428 7.49239 7.73305 7.49333 7.7825V12.2175C7.49362 12.2662 7.50656 12.314 7.53091 12.3562C7.55525 12.3984 7.59015 12.4335 7.63218 12.4582C7.6742 12.4828 7.72192 12.4961 7.77062 12.4967C7.81933 12.4973 7.86736 12.4852 7.91 12.4617L12.39 10.2217C12.4234 10.1956 12.4499 10.1618 12.4673 10.1232C12.4847 10.0845 12.4925 10.0423 12.49 10C12.491 9.95044 12.4785 9.90154 12.4536 9.85863C12.4288 9.81572 12.3927 9.78045 12.3492 9.75667L7.95417 7.56083C7.89687 7.52568 7.83136 7.50614 7.76417 7.50417Z" fill="#063468" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_346">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div>ویدیو آموزشی</div>
                            </div>
                            <div className='flex text-[#063468] ml-5 items-center cursor-pointer'>
                                <svg className='ml-[6px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_350)">
                                        <path d="M19.3499 4.78583L16.8407 1.39583C16.5322 0.964446 16.1252 0.612808 15.6537 0.370064C15.1821 0.12732 14.6594 0.000461434 14.1291 1.46866e-06H5.87073C5.34292 -0.000493946 4.82255 0.124354 4.35242 0.364271C3.88229 0.604187 3.47586 0.952314 3.16656 1.38L0.612397 4.79417C0.196534 5.38058 -0.018232 6.0859 0.000245332 6.80456C0.0187226 7.52322 0.269449 8.21657 0.714897 8.78083L8.04156 19.0542C8.27505 19.3498 8.57265 19.5886 8.91189 19.7524C9.25113 19.9163 9.62316 20.0009 9.9999 20C10.3831 19.9992 10.761 19.9106 11.1046 19.7408C11.4481 19.5711 11.7481 19.3247 11.9816 19.0208L19.2499 8.86167C19.7153 8.28916 19.9776 7.57841 19.9957 6.84082C20.0138 6.10323 19.7867 5.38048 19.3499 4.78583ZM15.4932 2.37583L18.0082 5.77417C18.0216 5.7925 18.0249 5.81417 18.0382 5.83333H13.9616L12.7716 1.66667H14.1291C14.3965 1.6675 14.6599 1.7323 14.8972 1.85567C15.1345 1.97904 15.3389 2.15739 15.4932 2.37583ZM9.9999 15.9317L7.7499 7.5H12.2499L9.9999 15.9317ZM7.77156 5.83333L8.96156 1.66667H11.0382L12.2282 5.83333H7.77156ZM4.51406 2.36417C4.66869 2.14866 4.87235 1.97302 5.10824 1.85174C5.34414 1.73046 5.60549 1.66702 5.87073 1.66667H7.22823L6.03823 5.83333H1.93156C1.94323 5.815 1.94656 5.7925 1.9599 5.775L4.51406 2.36417ZM2.0399 7.77083C1.97973 7.68585 1.92809 7.59513 1.88573 7.5H6.02656L8.52156 16.8583L2.0399 7.77083ZM11.4757 16.8667L13.9757 7.5H18.1307C18.077 7.62439 18.0091 7.74212 17.9282 7.85083L11.4757 16.8667Z" fill="#063468" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_350">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div>قیمت گذاری</div>
                            </div>
                            <div className='flex text-[#063468] ml-5 items-center cursor-pointer'>
                                <svg className='ml-[6px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2_356)">
                                        <path d="M7.91669 9.16675C8.60704 9.16675 9.16669 8.6071 9.16669 7.91675C9.16669 7.22639 8.60704 6.66675 7.91669 6.66675C7.22633 6.66675 6.66669 7.22639 6.66669 7.91675C6.66669 8.6071 7.22633 9.16675 7.91669 9.16675Z" fill="#063468" />
                                        <path d="M15.4167 2.5C16.107 2.5 16.6667 1.94036 16.6667 1.25C16.6667 0.559644 16.107 0 15.4167 0C14.7263 0 14.1667 0.559644 14.1667 1.25C14.1667 1.94036 14.7263 2.5 15.4167 2.5Z" fill="#063468" />
                                        <path d="M17.9167 6.66675C18.607 6.66675 19.1667 6.1071 19.1667 5.41675C19.1667 4.72639 18.607 4.16675 17.9167 4.16675C17.2263 4.16675 16.6667 4.72639 16.6667 5.41675C16.6667 6.1071 17.2263 6.66675 17.9167 6.66675Z" fill="#063468" />
                                        <path d="M7.91669 13.3333C8.60704 13.3333 9.16669 12.7736 9.16669 12.0833C9.16669 11.3929 8.60704 10.8333 7.91669 10.8333C7.22633 10.8333 6.66669 11.3929 6.66669 12.0833C6.66669 12.7736 7.22633 13.3333 7.91669 13.3333Z" fill="#063468" />
                                        <path d="M12.0833 13.3333C12.7737 13.3333 13.3333 12.7736 13.3333 12.0833C13.3333 11.3929 12.7737 10.8333 12.0833 10.8333C11.393 10.8333 10.8333 11.3929 10.8333 12.0833C10.8333 12.7736 11.393 13.3333 12.0833 13.3333Z" fill="#063468" />
                                        <path d="M19.9525 9.045C19.934 8.85234 19.8491 8.67212 19.7122 8.53527C19.5754 8.39842 19.3952 8.31347 19.2025 8.295C17.2772 8.10951 15.4764 7.26007 14.1088 5.8923C12.7412 4.52454 11.892 2.72364 11.7067 0.798333C11.6882 0.605678 11.6032 0.42546 11.4664 0.288607C11.3295 0.151755 11.1493 0.0668038 10.9567 0.0483333C10.6408 0.0175 10.3225 0 10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433286 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 9.6775 19.9825 9.35917 19.9525 9.045ZM10 18.3333C7.78987 18.3333 5.67025 17.4554 4.10745 15.8926C2.54464 14.3298 1.66667 12.2101 1.66667 10C1.66667 7.78986 2.54464 5.67025 4.10745 4.10744C5.67025 2.54464 7.78987 1.66667 10 1.66667H10.1417C10.4887 3.71313 11.4636 5.60101 12.9313 7.06873C14.399 8.53645 16.2869 9.51134 18.3333 9.85833C18.3333 9.90583 18.3333 9.9525 18.3333 10C18.3309 12.2094 17.4522 14.3276 15.8899 15.8899C14.3276 17.4522 12.2094 18.3309 10 18.3333Z" fill="#063468" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2_356">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div>همکاری با آژانسها</div>
                            </div>
                        </div>
                        <div dir='ltr' className='grow-0  basis-24 flex items-center'>
                            <button className='w-16 h-10 bg-[#0A65CD] rounded-[9px] text-white'>ورود</button>
                        </div>
                    </div>
                    <div className='flex grow'>
                        <div className='grow flex flex-col'>
                            <div className='grow-0 basis-12'></div>
                            <div className='grow flex'>
                                <div className='grow basis-0 flex flex-col'>
                                    <div className='mb-1'>
                                        <Input title="نام و نام خوانوادگی" errorMessage="وارد کردن نام و نام خانوادگی الزامی است." />
                                    </div>
                                    <div className='mb-1'>
                                        <Input title="ایمیل" errorMessage="ایمیل را وارد کنید." />
                                    </div>
                                    <div className='flex'>
                                        <div className='grow basis-0 pl-4'>
                                            <Input title="نام و نام خوانوادگی" errorMessage="وارد کردن نام و نام خانوادگی الزامی است." />
                                        </div>
                                        <div className='grow basis-0 pr-4'>
                                            <Input title="ایمیل" errorMessage="ایمیل را وارد کنید." />
                                        </div>
                                    </div>
                                    <div className='basis-24 flex'>
                                        <div className='flex items-center'>
                                            <button className='w-20 h-10 bg-[#D3D5E2] rounded-[9px] text-white ml-4'>عضویت</button>
                                            <div className='w-36 h-10 bg-[#D3D5E2] rounded-[9px] text-white ml-4 flex justify-center items-center cursor-pointer'>
                                                <div className='ml-2'>حساب گوگل</div>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.9874 12.2245C23.9874 11.2413 23.9058 10.5238 23.7291 9.77966H12.2391V14.2176H18.9835C18.8475 15.3205 18.1133 16.9815 16.4815 18.0976L16.4587 18.2462L20.0916 20.9964L20.3433 21.0209C22.6548 18.9347 23.9874 15.8653 23.9874 12.2245" fill="#7D7D7D" />
                                                    <path d="M12.239 23.9176C15.5431 23.9176 18.317 22.8545 20.3431 21.0209L16.4814 18.0976C15.448 18.8018 14.061 19.2934 12.239 19.2934C9.00279 19.2934 6.2561 17.2074 5.27698 14.324L5.13347 14.3359L1.35592 17.1927L1.30652 17.3269C3.31894 21.2334 7.4526 23.9176 12.239 23.9176Z" fill="#7D7D7D" />
                                                    <path d="M5.27714 14.324C5.01879 13.58 4.86928 12.7826 4.86928 11.9589C4.86928 11.135 5.01879 10.3378 5.26355 9.59366L5.25671 9.43519L1.43182 6.53247L1.30668 6.59064C0.477262 8.21174 0.00134277 10.0322 0.00134277 11.9589C0.00134277 13.8855 0.477262 15.7059 1.30668 17.327L5.27714 14.324" fill="#7D7D7D" />
                                                    <path d="M12.239 4.62403C14.5369 4.62403 16.087 5.59401 16.9709 6.40461L20.4247 3.10928C18.3035 1.1826 15.5431 0 12.239 0C7.4526 0 3.31894 2.68406 1.30652 6.59056L5.26339 9.59359C6.2561 6.7102 9.00279 4.62403 12.239 4.62403" fill="#7D7D7D" />
                                                </svg>

                                            </div>
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
                                    <div dir='ltr'>
                                        <img className='w-[377px] h-[331px]' src={frame} alt="" />
                                    </div>
                                    <div className='basis-10'></div>
                                    <div dir='ltr' className='basis-20 flex justify-center items-center'>:برندهایی که به ما اطمینان کرده‌اند</div>
                                    <div dir='ltr' className='basis-20 flex justify-center'>
                                        <img className='h-8 mr-2' src={i1} alt="" />
                                        <img className='h-8 mr-2' src={i2} alt="" />
                                        <img className='h-8 mr-2' src={i3} alt="" />
                                        <img className='h-8 mr-2' src={i4} alt="" />
                                        <img className='h-8 mr-2' src={i5} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='grow-0 basis-24'></div>
            </div>
        </div>);
    }
}

export default Login;