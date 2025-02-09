

import React, { useEffect, useState } from 'react';
import './AllPrivacyPolicy.css';
import { privacyPolicy, rentalTerms } from '../../../../causewayDb';

function AllPrivacyPolicy() {
  const [selectedPolicy, setSelectedPolicy] = useState({});

  useEffect(() => {
    setSelectedPolicy(privacyPolicy[0]);
  }, []);

  console.log(selectedPolicy.content?.length);

  return (
    <div className="flex justify-between items-start gap-10 lg:gap-4 max-w-[1200px] mx-auto w-[95%] mt-[80px] relative flex-col xlg:flex-row">
      <div className="basis-[33%] flex justify-between items-start flex-col w-full  pl-[0px] sticky top-[130px]">
        {privacyPolicy?.map((item) => (
          <p
            onClick={() => setSelectedPolicy(item)}
            key={item?.id}
            className={`pl-[20px] cursor-pointer z-10 ${
              selectedPolicy?.id === item?.id ? 'text-primaryCM' : 'text-black'
            } ${
              selectedPolicy?.id === item?.id ? 'border-l  border-primaryCM' : 'border-l border-[#acacac]'
            } font-medium py-[15px] relative`}
          >
            {item?.title}
          </p>
        ))}
      </div>
      <div className="basis-[67%]">
        {
            selectedPolicy?.content?.length == 1 
            ? 
            (
                <div className="mb-[30px] term-detal-anim">
                    <h1 className="text-black font-bold text-[20px] mb-[20px]">
                        {selectedPolicy?.title}
                    </h1>
                    <p className="text-[16px] leading-[30px] text-ptextCM font-medium">
                        {selectedPolicy?.content}
                    </p>
                </div>
            )
            :
            (
                selectedPolicy?.content?.map((item, index) => (
                    <div
                      key={`${selectedPolicy.id}-${index}`} // Unique key to re-trigger animation
                      className="mb-[30px] term-detal-anim"
                    >
                      <h1 className="text-black font-bold text-[20px] mb-[20px]">
                        0{index + 1}.{item?.subTitle}
                      </h1>
                      <p className="text-[16px] leading-[30px] text-ptextCM font-medium">
                        {item?.text}
                      </p>
                    </div>
                ))
            )
        }
        
      </div>
    </div>
  );
}

export default AllPrivacyPolicy;
