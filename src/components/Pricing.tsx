"use client";
import React, { useEffect, useState } from "react";
import { Accordion } from "flowbite-react";
import pricingData from "./pricingData.json";

interface PricingItem {
  support: string;
  items: {
    supportDesc: string;
    price: string;
    itemNo: string;
  }[];
}

export default function Pricing() {
  const [data, setData] = useState<PricingItem[]>([]);

  useEffect(() => {
    setData(pricingData);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-screen px-10 font-Bebas">
      <div className="md:w-[1000px] w-screen xl:w-[1200px] shadow-lg bg-primary text-2xl md:text-3xl xl:text-4xl font-extrabold font-Oswald bottom-4  text-lavender px-6 py-4 rounded-b-[5px]">
        Our Supports & Prices
      </div>
      {pricingData.map((dataItem, index) => (
        <Accordion
          className="bg-lavender md:w-[1000px] w-screen xl:w-[1200px] px-0 shadow-lg "
          key={index}
          collapseAll
        >
          <Accordion.Panel>
            <Accordion.Title className=" text-primary text-xl md:text-2xl font-bold">
              {dataItem.support}
            </Accordion.Title>

            <Accordion.Content className="bg-lavender">
              <div>
                <div className="min-[650px]:grid min-[650px]:grid-cols-3 items-center min-[650px]:align-middle hidden font-bold">
                  <div>Support Description</div>

                  <div> Support Price &#40;Per Hour&#41; </div>

                  <div>Item Number</div>
                </div>
                {dataItem.items.map((data, index) => (
                  <div
                    className="grid min-[650px]:grid-cols-3 items-center align-middle grid-cols-1"
                    key={index}
                  >
                    <div className="flex-wrap font-medium text-gray-900 dark:text-white">
                      {data.supportDesc}
                    </div>
                    <div>{data.price}</div>
                    <div>{data.itemNo}</div>
                  </div>
                ))}
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      ))}
    </div>
  );
}
