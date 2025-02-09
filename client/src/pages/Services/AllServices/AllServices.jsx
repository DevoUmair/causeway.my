import React, { useState, useEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { sections } from '../../../../causewayDb';

function AllServices() {
  const [selected, setSelected] = useState(1);
  const sectionRefs = useRef([]);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const scrollDirection = lastScrollY.current < window.scrollY ? 'down' : 'up';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
         
          lastScrollY.current = window.scrollY;

          // Only update selected when scrolling up and entering from the bottom
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setSelected(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Minimal threshold for entry
      }
    );

    // Observe each section
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []); // Run only on mount

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const sectionElement = document.getElementById(id);
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setSelected(id);
  };

  return (
    <div className='flex justify-between items-start gap-10 max-w-[1200px] mx-auto w-[95%] mt-[80px] relative flex-col xlg:flex-row '>
      <div className='basis-[32%] xl:basis-[25%] w-full rounded-md bg-lightBgCm px-[20px] py-[40px] custom-sticky'>
        <h2 className='font-bold text-[22px]'>Table of Contents</h2>
        <div className='mt-[40px] flex justify-between items-start gap-3 flex-col'>
          {sections.map((section, index) => (
            <AnchorLink
              onClickCapture={(e) => handleAnchorClick(e, section.id)}
              key={index}
              onClick={() => setSelected(section.id)}
              className={`cursor-pointer hover:text-black custom-trans ${selected == section.id ? 'text-black font-semibold' : 'text-ptextCM font-medium'}  text-[17px]`}
            >
              {section.title}
            </AnchorLink>
          ))}
        </div>
      </div>
      <div className='basis-[68%] xl:basis-[75%] w-full'>
        {sections.map((section, index) => (
          <div
            id={section.id}
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className='mb-[40px]'
          >
            <h1 className='font-bold text-black text-[20px]'>{section.title}</h1>
            <p className='font-normal mt-[15px] text-ptextCM text-[17px]'>{section.content}</p>
            <ul className='mt-[20px] pl-[10px]'>
              {section.items.map((item, idx) => (
                <li key={idx} className='font-normal text-black max-w-[95%] mx-auto text-[17px] list-disc'>
                  <span className='font-semibold'>{item.title}:</span> <span className='text-ptextCM'>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllServices;
