import React from "react";
import Image from "next/image";
import { v4 } from "uuid";

export default function Card({
  eachData,
  setFilterArray,
  setOpenFilter,
  filterArray,
  setCardData,
  cardData,
}) {
  function handleClick(value) {
    setOpenFilter(true);
    console.log(filterArray);
    if (!filterArray.includes(value)) {
      setFilterArray([...filterArray, value]);
    } else {
      return;
    }
    setCardData(
      cardData.filter(
        (eachCardData) =>
          eachCardData.role == value ||
          eachCardData.level == value ||
          eachCardData.languages.includes(value) ||
          eachCardData.tools.includes(value)
      )
    );
  }
  return (
    <div
      className={
        eachData.featured
          ? "  card-basic border-headerColor"
          : "  card-basic border-transparent"
      }
    >
      <div className="absolute top-0 left-8 -translate-y-2/4 sm:relative sm:translate-y-0 sm:left-0">
        <div className="w-14 h-14 rounded-full relative">
          <Image
            alt="logo"
            layout="fill"
            src={eachData.logo}
            objectFit="cover"
          />
        </div>
      </div>
      <div className=" border-b-[1px] sm:border-0 border-slate-500 sm:mr-auto sm:flex sm:flex-col sm:justify-center sm:gap-2">
        <div className="mb-3 sm:mb-0 font-medium text-md">
          <span className="	 text-headerColor  mr-6 capitalize">
            {eachData.company}
          </span>
          {eachData.isnew && (
            <span className=" py-1 px-3 bg-teal-600 mr-3 rounded-3xl text-white uppercase">
              new!
            </span>
          )}
          {eachData.featured && (
            <span className=" py-1 px-3 bg-gray-900 rounded-3xl text-white uppercase">
              featured
            </span>
          )}
        </div>
        <div className="hover:text-headerColor font-bold text-slate-800  mb-2 sm:mb-0">
          {eachData.position}
        </div>
        <div className="mb-4 sm:mb-0">
          <ul className="flex flex-row gap-4 text-smallTextColors text-sm mb-4 sm:mb-0">
            <li>{eachData.postedAt}</li>
            <li className="list-disc list-inside">{eachData.contract}</li>
            <li className="list-disc list-inside">{eachData.location}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row flex-wrap  justify-content gap-x-10 ">
        {eachData.role && (
          <span
            onClick={() => handleClick(eachData.role)}
            className="hover:bg-headerColor hover:text-white md:p-2 md:rounded-lg md:text-lg cursor-pointer  border rounded-sm py-1 px-1 bg-teal-100 text-sm font-bold text-teal-700 my-4"
          >
            {eachData.role}
          </span>
        )}
        {eachData.level && (
          <span
            className="hover:bg-headerColor hover:text-white md:p-2 md:rounded-lg md:text-lg cursor-pointer border rounded-sm py-1 px-1 bg-teal-100 text-sm font-bold text-teal-700 my-4"
            onClick={() => handleClick(eachData.level)}
          >
            {eachData.level}
          </span>
        )}

        {eachData.languages.map((eachLangauges) => {
          return (
            <span
              key={v4()}
              onClick={() => handleClick(eachLangauges)}
              className="hover:bg-headerColor hover:text-white md:p-2 md:rounded-lg md:text-lg cursor-pointer border rounded-sm py-1 px-1 bg-teal-100 text-sm font-bold text-teal-700 my-4"
            >
              {eachLangauges}
            </span>
          );
        })}
        {eachData.tools.map((eachTools) => {
          return (
            <span
              key={v4()}
              onClick={() => handleClick(eachTools)}
              className="hover:bg-headerColor hover:text-white md:p-2 md:rounded-lg md:text-lg cursor-pointer border rounded-sm py-1 px-1 bg-teal-100 text-sm font-bold text-teal-700 my-4"
            >
              {eachTools}
            </span>
          );
        })}
      </div>
    </div>
  );
}
