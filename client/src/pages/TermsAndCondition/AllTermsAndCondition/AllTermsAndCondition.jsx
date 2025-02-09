import React, { useEffect, useState } from 'react';
import './AllTerm.css';
import { rentalTerms } from '../../../../causewayDb';

function AllTermsAndCondition() {
  const [selectedTerm, setSelectedTerm] = useState({});

  useEffect(() => {
    setSelectedTerm(rentalTerms[0]);
  }, []);

  return (
    <div className="flex justify-between items-start gap-10 max-w-[1200px] mx-auto w-[95%] mt-[80px] relative flex-col xlg:flex-row">
      <div className="basis-[25%] flex justify-between items-start flex-col w-full  pl-[0px] sticky top-[130px]">
        {rentalTerms?.map((item) => (
          <p
            onClick={() => setSelectedTerm(item)}
            key={item?.id}
            className={`pl-[20px] cursor-pointer z-10 ${
              selectedTerm?.id === item?.id ? 'text-primaryCM' : 'text-black'
            } ${
              selectedTerm?.id === item?.id ? 'border-l  border-primaryCM' : 'border-l border-[#acacac]'
            } font-medium py-[15px] relative`}
          >
            {item?.title}
          </p>
        ))}
      </div>
      <div className="basis-[75%]">
        {selectedTerm?.subTopics?.map((item, index) => (
          <div
            key={`${selectedTerm.id}-${index}`} // Unique key to re-trigger animation
            className="mb-[30px] term-detal-anim"
          >
            <h1 className="text-black font-bold text-[20px] mb-[20px]">
              0{index + 1}.{item?.title}
            </h1>
            <p className="text-[16px] leading-[30px] text-ptextCM font-medium">
              {item?.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTermsAndCondition;
