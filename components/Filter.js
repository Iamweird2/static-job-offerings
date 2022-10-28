import Image from "next/image";
import React, { useState } from "react";
import { v4 } from "uuid";

export default function Filter({
  originalData,
  setFilterArray,
  setOpenFilter,
  filterArray,
  setCardData,
}) {
  function removeFilter(value) {
    let updatedList = originalData;
    if (filterArray.length <= 1) {
      setFilterArray([]);
      setOpenFilter(false);
      setCardData(originalData);
    } else {
      if (
        filterArray.indexOf(value.element) == 0 ||
        filterArray.indexOf(value.element) == 1
      ) {
        filterArray.splice(filterArray.indexOf(value.element), 1);
        updatedList = originalData.filter(
          (each) =>
            each.level == filterArray[0] ||
            each.role == filterArray[0] ||
            each.languages.includes(filterArray[0]) ||
            each.tools.includes(filterArray[0])
        );
        setCardData(updatedList);
      }
      // clicking on index 2
      else if (filterArray.indexOf(value.element) == 2) {
        filterArray.splice(filterArray.indexOf(value.element), 1);
        updatedList = originalData
          .filter(
            (each) =>
              each.role == filterArray[1] ||
              each.level == filterArray[1] ||
              each.languages.includes(filterArray[1]) ||
              each.tools.includes(filterArray[1])
          )
          .filter(
            (each) =>
              each.role == filterArray[0] ||
              each.level == filterArray[0] ||
              each.languages.includes(filterArray[0]) ||
              each.tools.includes(filterArray[0])
          );
        setCardData(updatedList);
      }
      // clicking on index 3
      else if (filterArray.indexOf(value.element) == 3) {
        filterArray.splice(filterArray.indexOf(value.element), 1);
        updatedList = originalData
          .filter(
            (each) =>
              each.role == filterArray[2] ||
              each.level == filterArray[2] ||
              each.languages.includes(filterArray[2]) ||
              each.tools.includes(filterArray[2])
          )
          .filter(
            (each) =>
              each.role == filterArray[1] ||
              each.level == filterArray[1] ||
              each.languages.includes(filterArray[1]) ||
              each.tools.includes(filterArray[1])
          )
          .filter(
            (each) =>
              each.role == filterArray[0] ||
              each.level == filterArray[0] ||
              each.languages.includes(filterArray[0]) ||
              each.tools.includes(filterArray[0])
          );
        setCardData(updatedList);
      }

      // clicking on index 4
      else if (filterArray.indexOf(value.element) == 4) {
        filterArray.splice(filterArray.indexOf(value.element), 1);
        updatedList = originalData
          .filter(
            (each) =>
              each.role == filterArray[3] ||
              each.level == filterArray[3] ||
              each.languages.includes(filterArray[3]) ||
              each.tools.includes(filterArray[3])
          )
          .filter(
            (each) =>
              each.role == filterArray[2] ||
              each.level == filterArray[2] ||
              each.languages.includes(filterArray[2]) ||
              each.tools.includes(filterArray[2])
          )
          .filter(
            (each) =>
              each.role == filterArray[1] ||
              each.level == filterArray[1] ||
              each.languages.includes(filterArray[1]) ||
              each.tools.includes(filterArray[1])
          )
          .filter(
            (each) =>
              each.role == filterArray[0] ||
              each.level == filterArray[0] ||
              each.languages.includes(filterArray[0]) ||
              each.tools.includes(filterArray[0])
          );
        setCardData(updatedList);
      }
      // clicking on index 5
      else if (filterArray.indexOf(value.element) == 4) {
        filterArray.splice(filterArray.indexOf(value.element), 1);
        updatedList = originalData
          .filter(
            (each) =>
              each.role == filterArray[4] ||
              each.level == filterArray[4] ||
              each.languages.includes(filterArray[4]) ||
              each.tools.includes(filterArray[3])
          )
          .filter(
            (each) =>
              each.role == filterArray[3] ||
              each.level == filterArray[3] ||
              each.languages.includes(filterArray[3]) ||
              each.tools.includes(filterArray[3])
          )
          .filter(
            (each) =>
              each.role == filterArray[2] ||
              each.level == filterArray[2] ||
              each.languages.includes(filterArray[2]) ||
              each.tools.includes(filterArray[2])
          )
          .filter(
            (each) =>
              each.role == filterArray[1] ||
              each.level == filterArray[1] ||
              each.languages.includes(filterArray[1]) ||
              each.tools.includes(filterArray[1])
          )
          .filter(
            (each) =>
              each.role == filterArray[0] ||
              each.level == filterArray[0] ||
              each.languages.includes(filterArray[0]) ||
              each.tools.includes(filterArray[0])
          );
        setCardData(updatedList);
      } else {
        return;
      }
    }
  }
  return (
    <div className="flex flex-row gap-3 w-[80%]  mx-[10%] bg-white p-5 absolute bottom-0  translate-y-1/2 justify-between items-center rounded-md">
      <div className="flex flex-row flex-wrap gap-3">
        {filterArray.map((element) => {
          return (
            <div
              key={v4()}
              className="group inline-flex flex-row items-center gap-3 bg-filterTablets  h-9 rounded-md pl-2 overflow-hidden"
            >
              <span className=" font-bold text-headerColor">{element}</span>

              <div
                onClick={() => removeFilter({ element })}
                className="group-hover:bg-featured cursor-pointer w-8 h-full  relative mr-auto bg-headerColor grid place-content-center"
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/icon-remove.svg"
                    alt="delete"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="cursor-pointer hover:text-headerColor text-smallTextColors text-lg capitalize"
        onClick={() => (
          setFilterArray([]), setOpenFilter(false), setCardData(originalData)
        )}
      >
        {" "}
        clear{" "}
      </div>
    </div>
  );
}
