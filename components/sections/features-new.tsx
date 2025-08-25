"use client";

import React from 'react';

const FeaturesNew = () => {
  return (
    <section>
      {/* Top divider */}
      {/* <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" /> */}
      
      <div className="max-w-7xl mx-auto border-gray-200 dark:border-neutral-700 border-x">
      <div className="flex flex-col items-center py-16">
        <p className="relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent [background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] text-sm font-normal [--base-color:var(--color-brand)] [--base-gradient-color:var(--color-white)] dark:[--base-color:var(--color-brand)] dark:[--base-gradient-color:var(--color-white)]" style={{"--spread": "16px", backgroundImage: "var(--bg), linear-gradient(var(--base-color), var(--base-color))", backgroundPosition: "31.6667% center"} as React.CSSProperties}>
          Features
        </p>
        <h2 className="text-charcoal-700 text-center text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl dark:text-neutral-100 mt-4">
          Built for Agentic Intelligence
        </h2>
        <p className="text-center text-sm font-medium tracking-tight text-gray-600 md:text-sm lg:text-base dark:text-gray-300 mx-auto mt-6 max-w-lg px-2">
          Build, test and deploy AI agents with a powerful visual interface designed for technical teams
        </p>
        
        <div className="border-divide divide-divide mt-16 grid grid-cols-1 divide-y border-y md:grid-cols-2 md:divide-x">
          {/* LLM Model Selector */}
          <div className="p-4 md:p-8 overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12.4999V3.83325" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10 9.16667C9.4232 8.99806 8.91656 8.64708 8.556 8.16633C8.19544 7.68558 8.00036 7.10094 8 6.5C7.99964 7.10094 7.80456 7.68558 7.444 8.16633C7.08344 8.64708 6.5768 8.99806 6 9.16667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11.732 4.83334C11.8854 4.56767 11.9756 4.27026 11.9957 3.96414C12.0158 3.65801 11.9652 3.35137 11.8478 3.06794C11.7304 2.7845 11.5494 2.53187 11.3187 2.32959C11.0881 2.12731 10.814 1.9808 10.5176 1.9014C10.2213 1.822 9.91069 1.81183 9.6098 1.87168C9.30891 1.93154 9.02583 2.05981 8.78244 2.24657C8.53906 2.43333 8.3419 2.67358 8.20623 2.94873C8.07055 3.22388 7.99999 3.52656 8 3.83334C8.00001 3.52656 7.92945 3.22388 7.79377 2.94873C7.6581 2.67358 7.46094 2.43333 7.21756 2.24657C6.97417 2.05981 6.69109 1.93154 6.3902 1.87168C6.08931 1.81183 5.77868 1.822 5.48236 1.9014C5.18603 1.9808 4.91193 2.12731 4.68129 2.32959C4.45064 2.53187 4.26961 2.7845 4.15222 3.06794C4.03483 3.35137 3.98421 3.65801 4.00429 3.96414C4.02436 4.27026 4.11459 4.56767 4.268 4.83334" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11.998 3.91675C12.3899 4.01751 12.7537 4.20611 13.0619 4.46829C13.3701 4.73046 13.6146 5.05933 13.7768 5.42998C13.9391 5.80063 14.0149 6.20334 13.9985 6.60762C13.982 7.0119 13.8738 7.40714 13.682 7.76342" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 12.4999C12.587 12.4999 13.1576 12.3062 13.6233 11.9488C14.089 11.5915 14.4238 11.0905 14.5757 10.5235C14.7276 9.95645 14.6882 9.35516 14.4636 8.81284C14.239 8.27051 13.8417 7.81745 13.3333 7.52393" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M13.3114 12.1553C13.3581 12.5168 13.3303 12.884 13.2295 13.2343C13.1287 13.5846 12.9572 13.9105 12.7256 14.1919C12.4939 14.4733 12.207 14.7043 11.8826 14.8704C11.5582 15.0366 11.2032 15.1346 10.8394 15.1582C10.4757 15.1818 10.111 15.1306 9.76782 15.0077C9.42466 14.8848 9.11033 14.6929 8.84424 14.4438C8.57815 14.1947 8.36596 13.8937 8.22077 13.5593C8.07558 13.225 8.00047 12.8644 8.00008 12.4999C7.99969 12.8644 7.92458 13.225 7.77939 13.5593C7.6342 13.8937 7.42201 14.1947 7.15592 14.4438C6.88983 14.6929 6.5755 14.8848 6.23234 15.0077C5.88917 15.1306 5.52446 15.1818 5.16073 15.1582C4.797 15.1346 4.44197 15.0366 4.11756 14.8704C3.79315 14.7043 3.50626 14.4733 3.2746 14.1919C3.04294 13.9105 2.87144 13.5846 2.77067 13.2343C2.66991 12.884 2.64202 12.5168 2.68875 12.1553" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M4.00005 12.4999C3.41304 12.4999 2.84245 12.3062 2.37676 11.9488C1.91106 11.5915 1.57629 11.0905 1.42436 10.5235C1.27243 9.95645 1.31184 9.35516 1.53646 8.81284C1.76108 8.27051 2.15837 7.81745 2.66671 7.52393" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M4.00187 3.91675C3.61001 4.01751 3.24621 4.20611 2.93803 4.46829C2.62985 4.73046 2.38536 5.05933 2.2231 5.42998C2.06084 5.80063 1.98504 6.20334 2.00146 6.60762C2.01788 7.0119 2.12608 7.40714 2.31787 7.76342" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <h3 className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">LLM Model Selector</h3>
            </div>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.</p>
            
            <div className="relative mx-auto mt-20 h-full max-h-70 min-h-40 w-[85%] rounded-2xl border-t border-gray-300 bg-white p-4 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800">
              <div className="shadow-aceternity absolute -top-10 -right-10 z-20 flex w-40 shrink-0 flex-col items-start rounded-lg bg-white text-xs dark:bg-neutral-900" style={{opacity: 1}}>
                <div className="flex w-full items-center justify-between p-2">
                  <div className="flex items-center gap-2 font-medium">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_557_586" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13">
                        <path d="M12.6081 0.5H0.5V12.5H12.6081V0.5Z" fill="white"></path>
                      </mask>
                      <g mask="url(#mask0_557_586)">
                        <path d="M5.14399 4.86798V3.72797C5.14399 3.63196 5.18002 3.55994 5.26398 3.51197L7.55605 2.19199C7.86804 2.012 8.24006 1.92804 8.62401 1.92804C10.064 1.92804 10.976 3.04406 10.976 4.23202C10.976 4.316 10.976 4.41201 10.964 4.50802L8.58799 3.11599C8.44401 3.03201 8.29996 3.03201 8.15598 3.11599L5.14399 4.86798ZM10.496 9.30801V6.58396C10.496 6.41589 10.4239 6.29592 10.28 6.21194L7.26799 4.45995L8.25199 3.89591C8.33597 3.84797 8.408 3.84797 8.49198 3.89591L10.784 5.21591C11.4441 5.59996 11.888 6.41589 11.888 7.20787C11.888 8.11984 11.3481 8.95986 10.496 9.30791V9.30801ZM4.43599 6.90803L3.45199 6.33206C3.36804 6.28409 3.332 6.21207 3.332 6.11605V3.47608C3.332 2.19209 4.316 1.22002 5.64803 1.22002C6.15209 1.22002 6.61999 1.38809 7.01609 1.68805L4.6521 3.05612C4.50814 3.14008 4.43612 3.26007 4.43612 3.42811V6.90813L4.43599 6.90803ZM6.55402 8.13199L5.14399 7.34002V5.66008L6.55402 4.86811L7.96395 5.66008V7.34002L6.55402 8.13199ZM7.46001 11.7801C6.95597 11.7801 6.48807 11.612 6.09197 11.312L8.45594 9.94398C8.59992 9.86002 8.67195 9.74003 8.67195 9.57197V6.09197L9.668 6.66794C9.75196 6.71588 9.788 6.78791 9.788 6.88392V9.5239C9.788 10.8079 8.79194 11.78 7.46001 11.78V11.7801ZM4.61599 9.10406L2.32392 7.78406C1.66387 7.40002 1.21992 6.58408 1.21992 5.79211C1.21992 4.86811 1.77193 4.04012 2.62388 3.69209V6.42807C2.62388 6.59611 2.69593 6.71611 2.83989 6.80006L5.83995 8.54002L4.85595 9.10406C4.77199 9.15201 4.69994 9.15201 4.61599 9.10406ZM4.48406 11.0721C3.12805 11.0721 2.13202 10.052 2.13202 8.79204C2.13202 8.69603 2.14405 8.60002 2.15598 8.50401L4.51997 9.87205C4.66393 9.95604 4.80801 9.95604 4.95196 9.87205L7.96395 8.13212V9.2721C7.96395 9.36814 7.92794 9.44016 7.84396 9.48811L5.55192 10.8081C5.2399 10.9881 4.86788 11.0721 4.48394 11.0721H4.48406ZM7.46001 12.5C8.91204 12.5 10.124 11.468 10.4001 10.1C11.7441 9.75196 12.6081 8.49196 12.6081 7.20799C12.6081 6.36795 12.2481 5.55202 11.6001 4.96399C11.6601 4.71197 11.6961 4.45995 11.6961 4.20806C11.6961 2.49208 10.3041 1.20799 8.69603 1.20799C8.37211 1.20799 8.06009 1.25594 7.74807 1.364C7.20799 0.835977 6.46399 0.5 5.64803 0.5C4.19603 0.5 2.98409 1.53194 2.70799 2.89998C1.364 3.24802 0.5 4.50802 0.5 5.79198C0.5 6.63203 0.859961 7.44796 1.50798 8.03598C1.44798 8.288 1.41197 8.54002 1.41197 8.79192C1.41197 10.5079 2.804 11.792 4.41201 11.792C4.73596 11.792 5.04797 11.744 5.35999 11.636C5.89995 12.164 6.64395 12.5 7.46001 12.5Z" fill="currentColor"></path>
                      </g>
                    </svg>
                    Open AI
                  </div>
                  <p className="font-mono text-gray-600">GPT 5</p>
                </div>
                <div className="bg-divide h-[1px] w-full"></div>
                <div className="m-2 rounded-sm border border-blue-500 bg-blue-50 px-2 py-0.5 text-blue-500 dark:bg-blue-50/10">Connected</div>
              </div>
              
              <div className="mb-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="mt-12 flex items-center gap-2">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6665 2.7915H2.33317C1.68884 2.7915 1.1665 3.31384 1.1665 3.95817V10.9582C1.1665 11.6025 1.68884 12.1248 2.33317 12.1248H11.6665C12.3108 12.1248 12.8332 11.6025 12.8332 10.9582V3.95817C12.8332 3.31384 12.3108 2.7915 11.6665 2.7915Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M3.5 5.125H3.50583" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M5.8335 5.125H5.83933" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8.1665 5.125H8.17234" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">All Models</span>
                <span className="text-charcoal-700 rounded-lg border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200">69,420</span>
              </div>
              
              <div className="bg-divide h-[1px] w-full mt-2"></div>
              
              {/* Model List */}
              <div className="relative">
                <div className="mt-4 flex items-center justify-between gap-2" style={{clipPath: "inset(0px 0% 0px 0px)", filter: "blur(0px)"}}>
                  <div className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0">
                      <path d="M2.35264 7.97774L4.71136 6.65419L4.75082 6.53883L4.71136 6.47508H4.596L4.20137 6.4508L2.85353 6.41437L1.6848 6.3658L0.552492 6.30509L0.267139 6.24437L0 5.89223L0.027321 5.71617L0.267139 5.55528L0.61017 5.58563L1.36909 5.63724L2.50746 5.71617L3.33316 5.76474L4.55654 5.89223H4.75082L4.77814 5.81331L4.71136 5.76474L4.65975 5.71617L3.48191 4.91778L2.20693 4.07387L1.53908 3.58816L1.17784 3.34227L0.9957 3.11156L0.916772 2.60764L1.24462 2.2464L1.6848 2.27675L1.79712 2.30711L2.24336 2.65014L3.19656 3.38781L4.44118 4.30458L4.62332 4.45636L4.69618 4.40476L4.70529 4.36833L4.62332 4.23172L3.94637 3.00835L3.22388 1.76372L2.9021 1.24766L2.8171 0.938022C2.78674 0.810524 2.76549 0.704275 2.76549 0.573741L3.13888 0.0667847L3.34531 0L3.84316 0.0667847L4.05262 0.248925L4.36226 0.956236L4.86314 2.07033L5.64027 3.58513L5.86795 4.0344L5.98938 4.45029L6.03491 4.57779H6.11384V4.50493L6.17759 3.65191L6.29598 2.6046L6.41133 1.25677L6.4508 0.877308L6.63901 0.421958L7.0124 0.176069L7.30382 0.31571L7.54364 0.65874L7.51025 0.880344L7.36757 1.80622L7.08829 3.25727L6.90615 4.22869H7.0124L7.13382 4.10726L7.6256 3.45459L8.4513 2.42246L8.81558 2.01265L9.24058 1.56033L9.51379 1.3448H10.0299L10.4093 1.90944L10.2393 2.49228L9.70807 3.1662L9.2679 3.73691L8.63648 4.5869L8.24184 5.26689L8.27827 5.32153L8.37238 5.31242L9.79914 5.00885L10.5702 4.86921L11.49 4.71136L11.9059 4.90564L11.9514 5.10296L11.7875 5.5067L10.8039 5.74956L9.65039 5.98027L7.9322 6.38705L7.91095 6.40223L7.93524 6.43258L8.70934 6.50544L9.04022 6.52365H9.85075L11.3595 6.63597L11.7541 6.89704L11.9909 7.21579L11.9514 7.45864L11.3443 7.76828L10.5247 7.574L8.61219 7.11864L7.95649 6.95472H7.86542V7.00936L8.41184 7.54364L9.41361 8.44827L10.6673 9.61397L10.7311 9.90235L10.5702 10.13L10.4002 10.1057L9.29825 9.27701L8.87326 8.90362L7.91095 8.09309H7.84721V8.17809L8.06881 8.50291L9.24058 10.2636L9.30129 10.8039L9.21629 10.98L8.91273 11.0863L8.5788 11.0256L7.89274 10.0632L7.18543 8.97951L6.61472 8.0081L6.5449 8.04756L6.20794 11.6752L6.05009 11.8604L5.68581 12L5.38224 11.7693L5.22135 11.3959L5.38224 10.6582L5.57652 9.69593L5.73438 8.93094L5.87706 7.98077L5.96205 7.66506L5.95598 7.64382L5.88616 7.65292L5.16974 8.63648L4.07994 10.1088L3.21781 11.0316L3.01138 11.1136L2.65317 10.9284L2.68657 10.5975L2.88692 10.3031L4.07994 8.78523L4.79939 7.84417L5.26385 7.30079L5.26082 7.22186H5.23349L2.06426 9.28004L1.49962 9.3529L1.25677 9.12522L1.28712 8.75183L1.40248 8.63041L2.35568 7.9747L2.35264 7.97774Z" fill="#D97757"></path>
                    </svg>
                    <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">Claude 4 Opus</span>
                  </div>
                  <div className="rounded-sm border px-2 py-0.5 text-xs border-red-500 bg-red-50 text-red-500 dark:bg-red-50/10">Unavailable</div>
                </div>
                
                <div className="mt-4 flex items-center justify-between gap-2" style={{clipPath: "inset(0px 0% 0px 0px)", filter: "blur(0px)"}}>
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0">
                      <mask id="mask0_557_586" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13">
                        <path d="M12.6081 0.5H0.5V12.5H12.6081V0.5Z" fill="white"></path>
                      </mask>
                      <g mask="url(#mask0_557_586)">
                        <path d="M5.14399 4.86798V3.72797C5.14399 3.63196 5.18002 3.55994 5.26398 3.51197L7.55605 2.19199C7.86804 2.012 8.24006 1.92804 8.62401 1.92804C10.064 1.92804 10.976 3.04406 10.976 4.23202C10.976 4.316 10.976 4.41201 10.964 4.50802L8.58799 3.11599C8.44401 3.03201 8.29996 3.03201 8.15598 3.11599L5.14399 4.86798ZM10.496 9.30801V6.58396C10.496 6.41589 10.4239 6.29592 10.28 6.21194L7.26799 4.45995L8.25199 3.89591C8.33597 3.84797 8.408 3.84797 8.49198 3.89591L10.784 5.21591C11.4441 5.59996 11.888 6.41589 11.888 7.20787C11.888 8.11984 11.3481 8.95986 10.496 9.30791V9.30801ZM4.43599 6.90803L3.45199 6.33206C3.36804 6.28409 3.332 6.21207 3.332 6.11605V3.47608C3.332 2.19209 4.316 1.22002 5.64803 1.22002C6.15209 1.22002 6.61999 1.38809 7.01609 1.68805L4.6521 3.05612C4.50814 3.14008 4.43612 3.26007 4.43612 3.42811V6.90813L4.43599 6.90803ZM6.55402 8.13199L5.14399 7.34002V5.66008L6.55402 4.86811L7.96395 5.66008V7.34002L6.55402 8.13199ZM7.46001 11.7801C6.95597 11.7801 6.48807 11.612 6.09197 11.312L8.45594 9.94398C8.59992 9.86002 8.67195 9.74003 8.67195 9.57197V6.09197L9.668 6.66794C9.75196 6.71588 9.788 6.78791 9.788 6.88392V9.5239C9.788 10.8079 8.79194 11.78 7.46001 11.78V11.7801ZM4.61599 9.10406L2.32392 7.78406C1.66387 7.40002 1.21992 6.58408 1.21992 5.79211C1.21992 4.86811 1.77193 4.04012 2.62388 3.69209V6.42807C2.62388 6.59611 2.69593 6.71611 2.83989 6.80006L5.83995 8.54002L4.85595 9.10406C4.77199 9.15201 4.69994 9.15201 4.61599 9.10406ZM4.48406 11.0721C3.12805 11.0721 2.13202 10.052 2.13202 8.79204C2.13202 8.69603 2.14405 8.60002 2.15598 8.50401L4.51997 9.87205C4.66393 9.95604 4.80801 9.95604 4.95196 9.87205L7.96395 8.13212V9.2721C7.96395 9.36814 7.92794 9.44016 7.84396 9.48811L5.55192 10.8081C5.2399 10.9881 4.86788 11.0721 4.48394 11.0721H4.48406ZM7.46001 12.5C8.91204 12.5 10.124 11.468 10.4001 10.1C11.7441 9.75196 12.6081 8.49196 12.6081 7.20799C12.6081 6.36795 12.2481 5.55202 11.6001 4.96399C11.6601 4.71197 11.6961 4.45995 11.6961 4.20806C11.6961 2.49208 10.3041 1.20799 8.69603 1.20799C8.37211 1.20799 8.06009 1.25594 7.74807 1.364C7.20799 0.835977 6.46399 0.5 5.64803 0.5C4.19603 0.5 2.98409 1.53194 2.70799 2.89998C1.364 3.24802 0.5 4.50802 0.5 5.79198C0.5 6.63203 0.859961 7.44796 1.50798 8.03598C1.44798 8.288 1.41197 8.54002 1.41197 8.79192C1.41197 10.5079 2.804 11.792 4.41201 11.792C4.73596 11.792 5.04797 11.744 5.35999 11.636C5.89995 12.164 6.64395 12.5 7.46001 12.5Z" fill="currentColor"></path>
                      </g>
                    </svg>
                    <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">ChatGPT</span>
                  </div>
                  <div className="rounded-sm border px-2 py-0.5 text-xs border-emerald-500 bg-emerald-50 text-emerald-500 dark:bg-emerald-50/10">Connected</div>
                </div>
                
                <div className="mt-4 flex items-center justify-between gap-2" style={{clipPath: "inset(0px 0% 0px 0px)", filter: "blur(0px)"}}>
                  <div className="flex items-center gap-2">
                    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0">
                      <path d="M11.3 0.5C10.0661 0.5 9.10152 1.42936 8.22836 2.60993C7.02847 1.08215 6.025 0.5 4.82414 0.5C2.37586 0.5 0.5 3.68621 0.5 7.05862C0.5 9.16896 1.52096 10.5 3.23103 10.5C4.46184 10.5 5.34703 9.91974 6.92069 7.16897C6.92069 7.16897 7.57666 6.01055 8.02794 5.21258C8.18607 5.4679 8.35262 5.74302 8.52759 6.03793L9.26552 7.27931C10.703 9.68479 11.5039 10.5 12.9552 10.5C14.6211 10.5 15.5483 9.15077 15.5483 6.99655C15.5483 3.46552 13.6301 0.5 11.3 0.5ZM5.72069 6.42414C4.44483 8.42414 4.00345 8.87241 3.2931 8.87241C2.56207 8.87241 2.12759 8.23063 2.12759 7.08621C2.12759 4.63793 3.34828 2.13448 4.80345 2.13448C5.59146 2.13448 6.24999 2.58958 7.25867 4.03361C6.30088 5.50272 5.72069 6.42414 5.72069 6.42414ZM10.536 6.17236L9.65367 4.70088C9.4149 4.31256 9.18544 3.95512 8.96529 3.62858C9.76049 2.40122 10.4164 1.78966 11.1966 1.78966C12.8172 1.78966 14.1138 4.17587 14.1138 7.1069C14.1138 8.22414 13.7479 8.87242 12.9897 8.87242C12.2629 8.87241 11.9158 8.39247 10.536 6.17236Z" fill="#2762E7"></path>
                    </svg>
                    <span className="text-charcoal-700 text-sm font-medium dark:text-neutral-200">Llama 3.2</span>
                  </div>
                  <div className="rounded-sm border px-2 py-0.5 text-xs border-yellow-500 bg-yellow-50 text-yellow-500 dark:bg-yellow-50/10">Waiting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text to workflow builder */}
          <div className="p-4 md:p-8 overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.02287 8.95395C7.99883 8.89366 7.993 8.82765 8.00609 8.76407C8.01918 8.7005 8.05061 8.64216 8.09651 8.59626C8.1424 8.55037 8.20075 8.51893 8.26432 8.50584C8.32789 8.49276 8.39391 8.49859 8.4542 8.52262L14.4542 10.856C14.5185 10.8811 14.5735 10.9256 14.6114 10.9833C14.6493 11.041 14.6684 11.1091 14.666 11.1781C14.6636 11.2471 14.6398 11.3137 14.5979 11.3686C14.556 11.4235 14.4981 11.464 14.4322 11.4846L12.1362 12.1966C12.0326 12.2286 11.9384 12.2855 11.8617 12.3621C11.785 12.4388 11.7282 12.533 11.6962 12.6366L10.9849 14.932C10.9643 14.9979 10.9237 15.0558 10.8688 15.0977C10.8139 15.1396 10.7474 15.1634 10.6783 15.1658C10.6093 15.1682 10.5412 15.1491 10.4835 15.1112C10.4258 15.0732 10.3813 15.0183 10.3562 14.954L8.02287 8.95395Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14 7.83333V3.83333C14 3.47971 13.8595 3.14057 13.6095 2.89052C13.3594 2.64048 13.0203 2.5 12.6667 2.5H3.33333C2.97971 2.5 2.64057 2.64048 2.39052 2.89052C2.14048 3.14057 2 3.47971 2 3.83333V13.1667C2 13.5203 2.14048 13.8594 2.39052 14.1095C2.64057 14.3595 2.97971 14.5 3.33333 14.5H7.33333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <h3 className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">Text to workflow builder</h3>
            </div>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.</p>
            
            <div className="relative mx-auto mt-2 h-full max-h-70 min-h-40 w-[85%] p-4">
              <div className="absolute inset-x-0 -bottom-4 mx-auto flex w-[85%] items-center justify-between rounded-lg border border-gray-300 bg-white shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] dark:border-neutral-700 dark:bg-neutral-800">
                <input type="text" className="flex-1 border-none px-4 py-4 text-xs placeholder-neutral-600 focus:outline-none" placeholder="Ask Notus AI" defaultValue="" />
                <div className="mr-4 flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.58815 4.00009L4.67998 9.00859C4.46115 9.22743 4.33821 9.52424 4.33821 9.83372C4.33821 10.1432 4.46115 10.44 4.67998 10.6588C4.89882 10.8777 5.19563 11.0006 5.50511 11.0006C5.81459 11.0006 6.1114 10.8777 6.33023 10.6588L11.2384 5.65034C11.676 5.21275 11.9218 4.61924 11.9218 4.00039C11.9218 3.38153 11.676 2.78802 11.2384 2.35043C10.8008 1.91283 10.2073 1.66699 9.58844 1.66699C8.96959 1.66699 8.37608 1.91283 7.93848 2.35043L3.05073 7.33851C2.72138 7.66254 2.45945 8.04857 2.28003 8.47434C2.10062 8.90011 2.00728 9.35718 2.0054 9.81921C2.00352 10.2812 2.09313 10.739 2.26907 11.1663C2.44501 11.5935 2.7038 11.9816 3.0305 12.3083C3.3572 12.635 3.74535 12.8938 4.17257 13.0698C4.59978 13.2457 5.0576 13.3353 5.51962 13.3334C5.98164 13.3315 6.43872 13.2382 6.86449 13.0588C7.29026 12.8794 7.67629 12.6174 8.00032 12.2881L12.8881 7.30001" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <button className="cursor-pointer">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_483_44)">
                        <path d="M8.73467 13.15C8.75683 13.2052 8.79536 13.2524 8.84508 13.2851C8.8948 13.3178 8.95334 13.3345 9.01283 13.333C9.07232 13.3314 9.12992 13.3117 9.17791 13.2765C9.22589 13.2413 9.26195 13.1923 9.28126 13.136L13.0729 2.05266C13.0916 2.00098 13.0952 1.94504 13.0832 1.8914C13.0712 1.83776 13.0442 1.78864 13.0054 1.74978C12.9665 1.71092 12.9174 1.68393 12.8638 1.67197C12.8101 1.66001 12.7542 1.66358 12.7025 1.68225L1.61917 5.47391C1.56288 5.49322 1.51384 5.52928 1.47863 5.57726C1.44342 5.62524 1.42374 5.68285 1.42221 5.74234C1.42069 5.80183 1.4374 5.86037 1.47011 5.91009C1.50281 5.95981 1.54994 5.99833 1.60517 6.0205L6.23101 7.8755C6.37724 7.93404 6.5101 8.0216 6.62159 8.13288C6.73307 8.24416 6.82086 8.37687 6.87967 8.523L8.73467 13.15Z" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.003 1.75122L6.62134 8.1323" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_483_44">
                          <rect width="14" height="14" fill="white" transform="translate(0.254883 0.5)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="mask-bg-gradient-to-b flex max-h-[calc(100%-1rem)] flex-col gap-4 overflow-y-auto from-white to-transparent mask-t-from-70% mask-b-from-70% pt-4 pb-16 dark:from-neutral-900 dark:to-transparent" style={{scrollbarWidth: "none", msOverflowStyle: "none"}}>
                <div style={{opacity: 1, transform: "none"}}>
                  <div className="flex justify-end gap-3">
                    <div className="flex max-w-xs flex-col gap-1">
                      <div className="rounded-2xl rounded-br-md bg-blue-500 px-4 py-2 text-sm text-white">Hello, how are you?</div>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-medium text-white">
                      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
                
                <div style={{opacity: 1, transform: "none"}}>
                  <div className="flex gap-3 px-1">
                    <div className="shadow-aceternity flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-white dark:bg-neutral-900">
                      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 text-black dark:text-white">
                        <path d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <div className="flex max-w-xs flex-col gap-1">
                      <div className="text-charcoal-700 rounded-2xl rounded-bl-md bg-gray-100 px-4 py-2 text-sm dark:bg-neutral-800 dark:text-neutral-200">I&apos;m good, thank you! How can I help you today?</div>
                    </div>
                  </div>
                </div>
                
                <div style={{opacity: 1, transform: "none"}}>
                  <div className="flex justify-end gap-3">
                    <div className="flex max-w-xs flex-col gap-1">
                      <div className="rounded-2xl rounded-br-md bg-blue-500 px-4 py-2 text-sm text-white">I want to create a workflow that will send an email to all my clients</div>
                    </div>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-medium text-white">
                      <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                </div>
                
                <div style={{opacity: 1, transform: "none"}}>
                  <div className="flex gap-3 px-1">
                    <div className="shadow-aceternity flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-white dark:bg-neutral-900">
                      <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4 text-black dark:text-white">
                        <path d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <div className="flex max-w-xs flex-col gap-1">
                      <div className="text-charcoal-700 rounded-2xl rounded-bl-md bg-gray-100 px-4 py-2 text-sm dark:bg-neutral-800 dark:text-neutral-200">Perfect! I&apos;ll help you create an email workflow.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Native Tools Integration */}
          <div className="w-full">
            <div className="p-4 md:p-8 relative w-full max-w-none overflow-hidden">
              <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
              <div className="flex items-center gap-2">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99992 5.16658C8.92039 5.16658 9.66658 4.42039 9.66658 3.49992C9.66658 2.57944 8.92039 1.83325 7.99992 1.83325C7.07944 1.83325 6.33325 2.57944 6.33325 3.49992C6.33325 4.42039 7.07944 5.16658 7.99992 5.16658Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.79995 4.69995L4.19995 7.29995" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M2.99992 10.1666C3.92039 10.1666 4.66658 9.42039 4.66658 8.49992C4.66658 7.57944 3.92039 6.83325 2.99992 6.83325C2.07944 6.83325 1.33325 7.57944 1.33325 8.49992C1.33325 9.42039 2.07944 10.1666 2.99992 10.1666Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M4.66675 8.5H11.3334" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M12.9999 10.1666C13.9204 10.1666 14.6666 9.42039 14.6666 8.49992C14.6666 7.57944 13.9204 6.83325 12.9999 6.83325C12.0794 6.83325 11.3333 7.57944 11.3333 8.49992C11.3333 9.42039 12.0794 10.1666 12.9999 10.1666Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.19995 12.3L11.8 9.69995" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7.99992 15.1666C8.92039 15.1666 9.66658 14.4204 9.66658 13.4999C9.66658 12.5794 8.92039 11.8333 7.99992 11.8333C7.07944 11.8333 6.33325 12.5794 6.33325 13.4999C6.33325 14.4204 7.07944 15.1666 7.99992 15.1666Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <h3 className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">Native Tools Integration</h3>
              </div>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.</p>
              
              {/* Complex integration visualization would go here */}
              <div className="mt-12 h-40 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Integration Visualization</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 mt-16">
          <div className="p-4 md:p-8">
            <div className="flex items-center gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00007 7.16675C7.64645 7.16675 7.30731 7.30722 7.05727 7.55727C6.80722 7.80732 6.66674 8.14646 6.66674 8.50008C6.66674 9.18008 6.60007 10.1734 6.49341 11.1667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.33341 9.24683C9.33341 10.8335 9.33341 13.5002 8.66675 15.1668" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11.5266 14.5133C11.6066 14.1133 11.8133 12.98 11.8599 12.5" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M1.33325 8.49992C1.33325 7.1007 1.7735 5.73695 2.59164 4.60185C3.40977 3.46675 4.56432 2.61783 5.89173 2.17536C7.21915 1.73289 8.65213 1.71929 9.9877 2.1365C11.3233 2.5537 12.4937 3.38055 13.3333 4.49992" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M1.33325 11.1667H1.33992" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14.5334 11.1667C14.6668 9.83341 14.6208 7.59741 14.5334 7.16675" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M3.33325 13.5001C3.66659 12.5001 3.99992 10.5001 3.99992 8.50008C3.99924 8.04599 4.0759 7.5951 4.22659 7.16675" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M5.7666 15.1666C5.9066 14.7266 6.0666 14.2866 6.1466 13.8333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6 5.03321C6.60827 4.68203 7.29828 4.4972 8.00064 4.49731C8.70301 4.49743 9.39296 4.68248 10.0011 5.03385C10.6093 5.38523 11.1142 5.89055 11.4651 6.49898C11.816 7.10742 12.0005 7.79752 12 8.49988V9.83321" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <h3 className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">One Click Auth</h3>
            </div>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">A drag-and-drop interface to create, connect, and configure agents into logical workflows</p>
          </div>
          
          <div className="p-4 md:p-8">
            <div className="flex items-center gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8.5C14 6.9087 13.3679 5.38258 12.2426 4.25736C11.1174 3.13214 9.5913 2.5 8 2.5C6.32263 2.50631 4.71265 3.16082 3.50667 4.32667L2 5.83333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 2.5V5.83333H5.33333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 8.5C2 10.0913 2.63214 11.6174 3.75736 12.7426C4.88258 13.8679 6.4087 14.5 8 14.5C9.67737 14.4937 11.2874 13.8392 12.4933 12.6733L14 11.1667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M10.6667 11.1667H14.0001V14.5001" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <h3 className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">Realtime Sync</h3>
            </div>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Agents operate independently and coordinate tasks to complete complex all goals</p>
          </div>
          
          <div className="p-4 md:p-8">
            <div className="flex items-center gap-2">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3334 13.1666C11.1566 13.1666 10.987 13.0963 10.862 12.9713C10.737 12.8463 10.6667 12.6767 10.6667 12.4999V11.1666C10.6667 10.813 10.8072 10.4738 11.0573 10.2238C11.3073 9.97373 11.6465 9.83325 12.0001 9.83325H13.3334C13.687 9.83325 14.0262 9.97373 14.2762 10.2238C14.5263 10.4738 14.6667 10.813 14.6667 11.1666V12.4999C14.6667 12.6767 14.5965 12.8463 14.4715 12.9713C14.3465 13.0963 14.1769 13.1666 14.0001 13.1666H11.3334Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M11.3333 14.5001V13.1667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12.6666 9.83333V4.83333C12.6666 4.21449 12.4208 3.621 11.9832 3.18342C11.5456 2.74583 10.9521 2.5 10.3333 2.5C9.71441 2.5 9.12092 2.74583 8.68334 3.18342C8.24575 3.621 7.99992 4.21449 7.99992 4.83333V12.1667C7.99992 12.7855 7.75409 13.379 7.3165 13.8166C6.87892 14.2542 6.28542 14.5 5.66659 14.5C5.04775 14.5 4.45425 14.2542 4.01667 13.8166C3.57908 13.379 3.33325 12.7855 3.33325 12.1667V7.16667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14 14.5001V13.1667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 3.83333V2.5" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2.66659 7.16659C2.31296 7.16659 1.97382 7.02611 1.72378 6.77606C1.47373 6.52601 1.33325 6.18687 1.33325 5.83325V4.49992C1.33325 4.32311 1.40349 4.15354 1.52851 4.02851C1.65354 3.90349 1.82311 3.83325 1.99992 3.83325H4.66659C4.8434 3.83325 5.01297 3.90349 5.13799 4.02851C5.26301 4.15354 5.33325 4.32311 5.33325 4.49992V5.83325C5.33325 6.18687 5.19278 6.52601 4.94273 6.77606C4.69268 7.02611 4.35354 7.16659 3.99992 7.16659H2.66659Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M4.66675 3.83333V2.5" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <h3 className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">Custom Connector SDK</h3>
            </div>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-300">Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions</p>
          </div>
        </div>
      </div>
      </div>
      
      {/* Bottom divider */}
      <div className="bg-gray-200 dark:bg-neutral-700 h-[1px] w-full" />
    </section>
  );
};

export default FeaturesNew;
