import React from 'react';
import { AnimatedShinyText } from '../magicui/animated-shiny-text';

const Benefits = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto relative overflow-hidden px-4 py-20 md:px-8">
      <div className="relative flex flex-col items-center">
      <AnimatedShinyText>
          Benefits
        </AnimatedShinyText>
        <h2 className="text-charcoal-700 text-center text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl dark:text-neutral-100 mt-4">
          Making Engineers 10x faster
        </h2>
        <p className="text-center text-sm font-medium tracking-tight text-gray-600 md:text-sm lg:text-base dark:text-gray-300 mx-auto mt-6 max-w-lg">
          We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Left Column */}
        <div className="grid grid-cols-1 gap-4">
          {/* Launch Faster */}
          <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand size-6">
                <path d="M4.5 17.0001C3 18.2601 2.5 22.0001 2.5 22.0001C2.5 22.0001 6.24 21.5001 7.5 20.0001C8.21 19.1601 8.2 17.8701 7.41 17.0901C7.02131 16.7191 6.50929 16.5047 5.97223 16.4881C5.43516 16.4715 4.91088 16.6538 4.5 17.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 15.5L9 12.5C9.53214 11.1194 10.2022 9.79607 11 8.55C12.1652 6.68699 13.7876 5.15305 15.713 4.0941C17.6384 3.03514 19.8027 2.48637 22 2.5C22 5.22 21.22 10 16 13.5C14.7369 14.2987 13.3968 14.9687 12 15.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9 12.5H4C4 12.5 4.55 9.47002 6 8.50002C7.62 7.42002 11 8.50002 11 8.50002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 15.5V20.5C12 20.5 15.03 19.95 16 18.5C17.08 16.88 16 13.5 16 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-4 mb-2 text-lg font-medium">Launch Faster</h3>
            <p className="text-gray-600">Visually orchestrate autonomous agents without writing boilerplate code</p>
          </div>

          {/* Iterate Rapidly */}
          <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand size-6">
                <path d="M14 8.5C14 6.9087 13.3679 5.38258 12.2426 4.25736C11.1174 3.13214 9.5913 2.5 8 2.5C6.32263 2.50631 4.71265 3.16082 3.50667 4.32667L2 5.83333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 2.5V5.83333H5.33333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 8.5C2 10.0913 2.63214 11.6174 3.75736 12.7426C4.88258 13.8679 6.4087 14.5 8 14.5C9.67737 14.4937 11.2874 13.8392 12.4933 12.6733L14 11.1667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10.6667 11.1667H14.0001V14.5001" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-4 mb-2 text-lg font-medium">Iterate Rapidly</h3>
            <p className="text-gray-600">Visually orchestrate autonomous agents without writing boilerplate code</p>
          </div>

          {/* Scale Smarter */}
          <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand size-6">
                <path d="M13.3333 17.5V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18.3333 17.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3.33325 3.5V19.5C3.33325 20.0304 3.54397 20.5391 3.91904 20.9142C4.29411 21.2893 4.80282 21.5 5.33325 21.5H21.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M8.33325 17.5V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-4 mb-2 text-lg font-medium">Scale Smarter</h3>
            <p className="text-gray-600">Visually orchestrate autonomous agents without writing boilerplate code</p>
          </div>
        </div>

        {/* Center Column - Complex Visual */}
        <div className="relative flex min-h-40 flex-col justify-end overflow-hidden rounded-lg bg-gray-50 p-4 md:p-5 dark:bg-neutral-900">
          <div className="absolute inset-0 bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px] shadow-xl"></div>
          
          {/* Top Section */}
          <div className="flex items-center justify-center">
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md dark:border-neutral-600 dark:bg-neutral-900">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                <mask id="mask0_557_586" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13">
                  <path d="M12.6081 0.5H0.5V12.5H12.6081V0.5Z" fill="white"></path>
                </mask>
                <g mask="url(#mask0_557_586)">
                  <path d="M5.14399 4.86798V3.72797C5.14399 3.63196 5.18002 3.55994 5.26398 3.51197L7.55605 2.19199C7.86804 2.012 8.24006 1.92804 8.62401 1.92804C10.064 1.92804 10.976 3.04406 10.976 4.23202C10.976 4.316 10.976 4.41201 10.964 4.50802L8.58799 3.11599C8.44401 3.03201 8.29996 3.03201 8.15598 3.11599L5.14399 4.86798ZM10.496 9.30801V6.58396C10.496 6.41589 10.4239 6.29592 10.28 6.21194L7.26799 4.45995L8.25199 3.89591C8.33597 3.84797 8.408 3.84797 8.49198 3.89591L10.784 5.21591C11.4441 5.59996 11.888 6.41589 11.888 7.20787C11.888 8.11984 11.3481 8.95986 10.496 9.30791V9.30801ZM4.43599 6.90803L3.45199 6.33206C3.36804 6.28409 3.332 6.21207 3.332 6.11605V3.47608C3.332 2.19209 4.316 1.22002 5.64803 1.22002C6.15209 1.22002 6.61999 1.38809 7.01609 1.68805L4.6521 3.05612C4.50814 3.14008 4.43612 3.26007 4.43612 3.42811V6.90813L4.43599 6.90803ZM6.55402 8.13199L5.14399 7.34002V5.66008L6.55402 4.86811L7.96395 5.66008V7.34002L6.55402 8.13199ZM7.46001 11.7801C6.95597 11.7801 6.48807 11.612 6.09197 11.312L8.45594 9.94398C8.59992 9.86002 8.67195 9.74003 8.67195 9.57197V6.09197L9.668 6.66794C9.75196 6.71588 9.788 6.78791 9.788 6.88392V9.5239C9.788 10.8079 8.79194 11.78 7.46001 11.78V11.7801ZM4.61599 9.10406L2.32392 7.78406C1.66387 7.40002 1.21992 6.58408 1.21992 5.79211C1.21992 4.86811 1.77193 4.04012 2.62388 3.69209V6.42807C2.62388 6.59611 2.69593 6.71611 2.83989 6.80006L5.83995 8.54002L4.85595 9.10406C4.77199 9.15201 4.69994 9.15201 4.61599 9.10406ZM4.48406 11.0721C3.12805 11.0721 2.13202 10.052 2.13202 8.79204C2.13202 8.69603 2.14405 8.60002 2.15598 8.50401L4.51997 9.87205C4.66393 9.95604 4.80801 9.95604 4.95196 9.87205L7.96395 8.13212V9.2721C7.96395 9.36814 7.92794 9.44016 7.84396 9.48811L5.55192 10.8081C5.2399 10.9881 4.86788 11.0721 4.48394 11.0721H4.48406ZM7.46001 12.5C8.91204 12.5 10.124 11.468 10.4001 10.1C11.7441 9.75196 12.6081 8.49196 12.6081 7.20799C12.6081 6.36795 12.2481 5.55202 11.6001 4.96399C11.6601 4.71197 11.6961 4.45995 11.6961 4.20806C11.6961 2.49208 10.3041 1.20799 8.69603 1.20799C8.37211 1.20799 8.06009 1.25594 7.74807 1.364C7.20799 0.835977 6.46399 0.5 5.64803 0.5C4.19603 0.5 2.98409 1.53194 2.70799 2.89998C1.364 3.24802 0.5 4.50802 0.5 5.79198C0.5 6.63203 0.859961 7.44796 1.50798 8.03598C1.44798 8.288 1.41197 8.54002 1.41197 8.79192C1.41197 10.5079 2.804 11.792 4.41201 11.792C4.73596 11.792 5.04797 11.744 5.35999 11.636C5.89995 12.164 6.64395 12.5 7.46001 12.5Z" fill="currentColor"></path>
                </g>
              </svg>
            </div>
            
            {/* Horizontal Line */}
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="var(--color-gray-400)" strokeLinecap="round"></line>
              <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="url(#horizontal-line-gradient)" strokeLinecap="round"></line>
              <defs>
                <linearGradient id="horizontal-line-gradient" gradientUnits="userSpaceOnUse" y1="0" y2="1" x1="103.00762%" x2="113.00762%">
                  <stop stopColor="#EAEDF1"></stop>
                  <stop offset="0.5" stopColor="var(--color-blue-500)"></stop>
                  <stop offset="1" stopColor="#EAEDF1"></stop>
                </linearGradient>
              </defs>
            </svg>

            {/* Animated Center Element */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
              <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-blue-500 via-20% to-transparent to-30% [animation-duration:2s]"></div>
              <div className="via-brand absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-20% to-transparent to-30% [animation-delay:1s] [animation-duration:2s]"></div>
              <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[5px] bg-white dark:bg-neutral-900">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z" fill="currentColor"></path>
                </svg>
              </div>
            </div>

            {/* Second Horizontal Line */}
            <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="var(--color-gray-400)" strokeLinecap="round"></line>
              <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="url(#horizontal-line-gradient)" strokeLinecap="round"></line>
            </svg>

            {/* Right Icon */}
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md dark:border-neutral-600 dark:bg-neutral-900">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                <path d="M3.0318 8.08621C3.0318 8.78366 2.46811 9.34735 1.77066 9.34735C1.07321 9.34735 0.509521 8.78366 0.509521 8.08621C0.509521 7.38876 1.07321 6.82507 1.77066 6.82507H3.0318V8.08621Z" fill="#E01E5A"></path>
                <path d="M3.66235 8.08621C3.66235 7.38876 4.22604 6.82507 4.92349 6.82507C5.62094 6.82507 6.18463 7.38876 6.18463 8.08621V11.2391C6.18463 11.9365 5.62094 12.5002 4.92349 12.5002C4.22604 12.5002 3.66235 11.9365 3.66235 11.2391L3.66235 8.08621Z" fill="#E01E5A"></path>
                <path d="M4.92374 3.02253C4.22629 3.02253 3.6626 2.45883 3.6626 1.76139C3.6626 1.06394 4.22629 0.500244 4.92374 0.500244C5.62119 0.500244 6.18488 1.06394 6.18488 1.76139V3.02253H4.92374Z" fill="#36C5F0"></path>
                <path d="M4.92355 3.66284C5.621 3.66284 6.18469 4.22653 6.18469 4.92398C6.18469 5.62143 5.621 6.18512 4.92355 6.18512H1.76114C1.06369 6.18512 0.5 5.62143 0.5 4.92398C0.5 4.22653 1.06369 3.66284 1.76114 3.66284L4.92355 3.66284Z" fill="#36C5F0"></path>
                <path d="M9.97852 4.92386C9.97852 4.22641 10.5422 3.66272 11.2397 3.66272C11.9371 3.66272 12.5008 4.22641 12.5008 4.92386C12.5008 5.62131 11.9371 6.185 11.2397 6.185H9.97852V4.92386Z" fill="#2EB67D"></path>
                <path d="M9.34723 4.92379C9.34723 5.62124 8.78354 6.18493 8.08609 6.18493C7.38864 6.18493 6.82495 5.62124 6.82495 4.92379V1.76139C6.82495 1.06394 7.38864 0.500244 8.08609 0.500244C8.78354 0.500244 9.34723 1.06394 9.34723 1.76139V4.92379Z" fill="#2EB67D"></path>
                <path d="M8.08609 9.97803C8.78354 9.97803 9.34723 10.5417 9.34723 11.2392C9.34723 11.9366 8.78354 12.5003 8.08609 12.5003C7.38864 12.5003 6.82495 11.9366 6.82495 11.2392V9.97803H8.08609Z" fill="#ECB22E"></path>
                <path d="M8.08609 9.34735C7.38864 9.34735 6.82495 8.78366 6.82495 8.08621C6.82495 7.38876 7.38864 6.82507 8.08609 6.82507H11.2485C11.9459 6.82507 12.5096 7.38876 12.5096 8.08621C12.5096 8.78366 11.9459 9.34735 11.2485 9.34735H8.08609Z" fill="#ECB22E"></path>
              </svg>
            </div>
          </div>

          {/* Center Connection */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <svg width="1" height="81" viewBox="0 0 1 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
              <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="var(--color-line)"></line>
              <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="url(#vertical-line-gradient-second)"></line>
              <defs>
                <linearGradient id="vertical-line-gradient-second" gradientUnits="userSpaceOnUse" x1="0" x2="2" y1="61.31929%" y2="76.64912%">
                  <stop stopColor="var(--color-line)"></stop>
                  <stop offset="0.5" stopColor="#F17463"></stop>
                  <stop offset="1" stopColor="var(--color-line)"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="rounded-sm border border-blue-500 bg-blue-50 px-2 py-0.5 text-xs text-blue-500 dark:bg-blue-900 dark:text-white">
              Connected
            </div>
          </div>

          {/* Bottom Dashboard */}
          <div className="h-60 w-full translate-x-10 translate-y-10 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl dark:bg-neutral-700">
            <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-blue-500 via-20% to-transparent to-30% blur-2xl [animation-duration:4s]"></div>
            <div className="via-brand absolute inset-0 scale-[1.4] animate-spin rounded-full bg-conic from-transparent via-20% to-transparent to-30% blur-2xl [animation-delay:2s] [animation-duration:4s]"></div>
            <div className="relative z-20 h-full w-full rounded-[5px] bg-white dark:bg-neutral-900">
              <div className="flex items-center justify-between p-4">
                <div className="flex gap-1">
                  <div className="size-2 rounded-full bg-red-400"></div>
                  <div className="size-2 rounded-full bg-yellow-400"></div>
                  <div className="size-2 rounded-full bg-green-400"></div>
                </div>
                <div className="shadow-aceternity mr-2 flex items-center gap-1 rounded-sm bg-white px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-700 dark:text-white" style={{ opacity: 1, transform: 'none' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3">
                    <path d="M5.98975 12.25C6.09215 12.4273 6.23942 12.5746 6.41677 12.677C6.59412 12.7794 6.7953 12.8333 7.00008 12.8333C7.20486 12.8333 7.40604 12.7794 7.58339 12.677C7.76074 12.5746 7.90801 12.4273 8.01041 12.25" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M1.9029 8.94C1.82669 9.02353 1.7764 9.12739 1.75814 9.23897C1.73989 9.35055 1.75445 9.46503 1.80006 9.56849C1.84567 9.67194 1.92036 9.75991 2.01504 9.8217C2.10973 9.88348 2.22033 9.91642 2.3334 9.9165H11.6667C11.7798 9.91654 11.8904 9.88373 11.9852 9.82207C12.0799 9.7604 12.1547 9.67252 12.2004 9.56914C12.2461 9.46575 12.2608 9.3513 12.2427 9.23971C12.2246 9.12812 12.1745 9.0242 12.0984 8.94059C11.3226 8.14084 10.5001 7.29092 10.5001 4.6665C10.5001 3.73825 10.1313 2.84801 9.47494 2.19163C8.81856 1.53525 7.92832 1.1665 7.00006 1.1665C6.0718 1.1665 5.18157 1.53525 4.52519 2.19163C3.86881 2.84801 3.50006 3.73825 3.50006 4.6665C3.50006 7.29092 2.67698 8.14084 1.9029 8.94Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span>Chat history saved</span>
                </div>
              </div>
              <div className="bg-divide h-[1px] w-full"></div>
              <div className="flex h-full flex-row">
                <div className="h-full w-14 bg-gray-200 dark:bg-neutral-800"></div>
                <div className="w-full gap-y-4 p-4">
                  <h2 className="text-sm font-semibold text-gray-800 dark:text-neutral-300">Dashboard</h2>
                  <div className="mt-4 flex flex-col gap-y-3 mask-b-from-50%">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">API Calls</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
                        <div className="h-full rounded-full bg-neutral-300 dark:bg-neutral-400" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Success Rate</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
                        <div className="h-full rounded-full bg-neutral-300 dark:bg-neutral-400" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Workflows</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700">
                        <div className="h-full rounded-full bg-neutral-300 dark:bg-neutral-400" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 gap-4">
          {/* Reuse Intelligence */}
          <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand size-6">
                <path d="M12.0001 5.50005C12.0013 5.10008 11.9224 4.70391 11.7683 4.33485C11.6141 3.96579 11.3877 3.63128 11.1023 3.351C10.817 3.07072 10.4785 2.85032 10.1067 2.70278C9.73497 2.55524 9.33745 2.48353 8.93757 2.49186C8.53769 2.5002 8.14351 2.58841 7.77821 2.75132C7.41292 2.91422 7.08389 3.14853 6.81048 3.44045C6.53706 3.73238 6.32478 4.07604 6.18613 4.4512C6.04747 4.82637 5.98523 5.22548 6.00307 5.62505C5.41528 5.77619 4.86958 6.0591 4.40731 6.45236C3.94503 6.84562 3.57831 7.33892 3.33492 7.8949C3.09152 8.45087 2.97783 9.05494 3.00246 9.66136C3.02709 10.2678 3.18939 10.8606 3.47707 11.3951C2.97125 11.806 2.5735 12.3343 2.31841 12.934C2.06333 13.5337 1.95863 14.1866 2.01344 14.836C2.06824 15.4854 2.28089 16.1116 2.63288 16.6601C2.98487 17.2085 3.46554 17.6627 4.03307 17.9831C3.96299 18.5253 4.00481 19.0761 4.15596 19.6016C4.30711 20.127 4.56437 20.6159 4.91186 21.038C5.25935 21.4601 5.68968 21.8065 6.17629 22.0558C6.6629 22.3051 7.19545 22.452 7.74105 22.4874C8.28665 22.5228 8.83372 22.446 9.34846 22.2617C9.86321 22.0774 10.3347 21.7895 10.7338 21.4158C11.133 21.0421 11.4512 20.5906 11.669 20.0891C11.8868 19.5876 11.9995 19.0468 12.0001 18.5V5.50005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9 13.5C9.83956 13.2047 10.5727 12.667 11.1067 11.955C11.6407 11.243 11.9515 10.3887 12 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6.00293 5.625C6.0227 6.10873 6.15926 6.5805 6.40093 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3.47705 11.396C3.65999 11.247 3.85575 11.1145 4.06205 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M5.99996 18.4999C5.31079 18.5002 4.63323 18.3225 4.03296 17.9839" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 13.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 18.5H18C18.5304 18.5 19.0391 18.7107 19.4142 19.0858C19.7893 19.4609 20 19.9696 20 20.5V21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 8.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16 8.5V5.5C16 4.96957 16.2107 4.46086 16.5858 4.08579C16.9609 3.71071 17.4696 3.5 18 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16 14C16.2761 14 16.5 13.7761 16.5 13.5C16.5 13.2239 16.2761 13 16 13C15.7239 13 15.5 13.2239 15.5 13.5C15.5 13.7761 15.7239 14 16 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 4C18.2761 4 18.5 3.77614 18.5 3.5C18.5 3.22386 18.2761 3 18 3C17.7239 3 17.5 3.22386 17.5 3.5C17.5 3.77614 17.7239 4 18 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20 22C20.2761 22 20.5 21.7761 20.5 21.5C20.5 21.2239 20.2761 21 20 21C19.7239 21 19.5 21.2239 19.5 21.5C19.5 21.7761 19.7239 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20 9C20.2761 9 20.5 8.77614 20.5 8.5C20.5 8.22386 20.2761 8 20 8C19.7239 8 19.5 8.22386 19.5 8.5C19.5 8.77614 19.7239 9 20 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-4 mb-2 text-lg font-medium">Reuse Intelligence</h3>
            <p className="text-gray-600">Visually orchestrate autonomous agents without writing boilerplate code</p>
          </div>

          {/* Prevent Breakdowns */}
          <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand size-6">
                <path d="M20 13.5C20 18.5 16.5 21 12.34 22.45C12.1222 22.5238 11.8855 22.5202 11.67 22.44C7.5 21 4 18.5 4 13.5V6.49996C4 6.23474 4.10536 5.98039 4.29289 5.79285C4.48043 5.60532 4.73478 5.49996 5 5.49996C7 5.49996 9.5 4.29996 11.24 2.77996C11.4519 2.59896 11.7214 2.49951 12 2.49951C12.2786 2.49951 12.5481 2.59896 12.76 2.77996C14.51 4.30996 17 5.49996 19 5.49996C19.2652 5.49996 19.5196 5.60532 19.7071 5.79285C19.8946 5.98039 20 6.23474 20 6.49996V13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9 12.5L11 14.5L15 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-4 mb-2 text-lg font-medium">Prevent Breakdowns</h3>
            <p className="text-gray-600">Visually orchestrate autonomous agents without writing boilerplate code</p>
          </div>

          {/* Automate More */}
          <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand size-6">
                <path d="M12 17.5V21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14.3047 8.02995L15.2277 7.64795" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.2277 5.35224L14.3047 4.96924" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16.8517 3.7282L16.4688 2.8042" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16.8517 9.27197L16.4688 10.195" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M19.1484 3.7282L19.5314 2.8042" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M19.5304 10.196L19.1484 9.27197" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20.7725 5.35224L21.6965 4.96924" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M20.7725 7.64795L21.6965 8.03095" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M22 13.5V15.5C22 16.0304 21.7893 16.5391 21.4142 16.9142C21.0391 17.2893 20.5304 17.5 20 17.5H4C3.46957 17.5 2.96086 17.2893 2.58579 16.9142C2.21071 16.5391 2 16.0304 2 15.5V5.5C2 4.96957 2.21071 4.46086 2.58579 4.08579C2.96086 3.71071 3.46957 3.5 4 3.5H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M8 21.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M18 9.5C19.6569 9.5 21 8.15685 21 6.5C21 4.84315 19.6569 3.5 18 3.5C16.3431 3.5 15 4.84315 15 6.5C15 8.15685 16.3431 9.5 18 9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <h3 className="mt-4 mb-2 text-lg font-medium">Automate More</h3>
            <p className="text-gray-600">Visually orchestrate autonomous agents without writing boilerplate code</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Benefits;

