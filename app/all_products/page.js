'use client';

import { useState } from 'react';
import classes from '../../style/units.module.css'; // تأكد من صحة المسار
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Units = () => {
  const [rangeValue, setRangeValue] = useState([20, 80]);

  return (
    <div className="my-[50px] w-full max-w-[1280px] mx-auto bg-amber-100">
      {/* ------------------------------- Search & Filters ------------------------------- */}
      <div className="flex flex-col gap-[20px]">
        <div className="search flex gap-[12px]">
          <input
            type="search"
            className="w-full h-[56px] bg-white rounded-4xl focus:outline-0 indent-10"
          />
          <button className="w-[56px] h-[56px] rounded-full bg-white">X</button>
        </div>

        <div className="explore w-full max-w-[846px] h-[96px] mx-auto bg-white rounded-md flex justify-between items-center text-[20px] font-bold max-sm:h-[130px] max-sm:flex-wrap max-lg:h-[70px]">
          <div className="sel px-[40px] py-[24px] flex justify-between w-full max-w-[650px] max-md:px-[10px]">
            <select>
              <option>Location</option>
              <option>option1</option>
              <option>option2</option>
            </select>
            <select>
              <option>Date</option>
              <option>option1</option>
              <option>option2</option>
            </select>
            <select>
              <option>Total People</option>
              <option>option1</option>
              <option>option2</option>
            </select>
          </div>
          <button className="w-[196px] bg-black text-white h-full rounded-tr-md rounded-br-md max-sm:h-[70px] max-sm:w-full">
            Explore Now
          </button>
        </div>
      </div>

      {/* ------------------------------- Side Filter ------------------------------- */}
      <div>
        <div className="w-full max-w-[335px] my-[20px] bg-blue-300">
          <div className="w-full max-w-[311px] mx-auto pt-[20px] pb-[30px] flex justify-between items-center">
            <h1 className="text-[24px] font-bold font-sanswork">Filters</h1>
            <button className="text-gray-500">Clear all</button>
          </div>

          <div className="w-full max-w-[311px] mx-auto h-[203px] overflow-y-scroll flex flex-col gap-[16px]">
            <p className="text-[16px] font-semibold font-inter">Property Type</p>
            {['Villa', 'Floor', 'Ground', 'Detached House', 'Apartment'].map((type) => (
              <label key={type} className="flex items-center gap-[8px]" htmlFor={type}>
                <input className="rounded-sm accent-gray-700" id={type} type="checkbox" />
                {type}
              </label>
            ))}
          </div>

          {/* -------------------- Range Slider -------------------- */}
          <div className="px-[20px] mt-[20px]">
            <p className="mb-2 font-semibold text-[16px]">Property Size</p>
            <RangeSlider
              min={0}
              max={100}
              defaultValue={rangeValue}
              onInput={(value) => setRangeValue(value)}
              className={classes.my_slider}
            />
            <p className="text-sm mt-2 text-gray-700">
              Selected Range: {rangeValue[0]} - {rangeValue[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Units;
