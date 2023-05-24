import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function PricingCard({ details }) {
  if (details.featured) {
    return (
      <div className="w-full bg-white max-w-sm rounded-lg p-6 border-yellow-400 border-4">
        <h3 className="text-purple-500 text-xl mb-4 uppercase">
          {details.title}
        </h3>
        <p className="text-purple-500 text-6xl font-bold mb-10">
          {details.isFree ? (
            <span className="">FREE</span>
          ) : (
            <span>${details.priceInCents / 100}</span>
          )}
          {details.priceSuffix && (
            <span className="text-lg m-1">{details.priceSuffix}</span>
          )}
        </p>
        <ul>
          {details.description.split("*").map(
            (bullet, index) =>
              bullet && (
                <li key={index} className="text-purple-900 my-2 text-sm">
                  <IoIosCheckmarkCircleOutline className="inline text-purple-900 mr-2" />
                  {bullet}
                </li>
              )
          )}
        </ul>
        <button className="mx-auto w-full block bg-purple-400 hover:bg-purple-500 px-4 py-2 rounded-md text-purple-900 mt-6 mb-4">
          {details.buttonText}
        </button>
        {details.finePrint && (
          <small className="text-purple-900 block text-center text-xm">
            {details.finePrint}
          </small>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full bg-purple-500 max-w-sm rounded-lg p-6">
        <h3 className="text-white text-xl mb-4 uppercase ">{details.title}</h3>
        <p className="text-white text-6xl font-bold mb-10">
          {details.isFree ? (
            <span>FREE</span>
          ) : (
            <span>${details.priceInCents / 100}</span>
          )}
          {details.priceSuffix && (
            <span className="text-lg m-1">{details.priceSuffix}</span>
          )}
        </p>
        <ul>
          {details.description.split("*").map(
            (bullet, index) =>
              bullet && (
                <li key={index} className="text-purple-100 my-2 text-sm">
                  <IoIosCheckmarkCircleOutline className="inline text-purple-100 mr-2" />
                  {bullet}
                </li>
              )
          )}
        </ul>
        <button className="mx-auto w-full block bg-purple-400 px-4 py-2 rounded-md text-white mt-6 mb-4 hover:text-purple-900 hover:bg-yellow-400">
          {details.buttonText}
        </button>
        {details.finePrint && (
          <small className="text-purple-200 block text-center text-xm">
            {details.finePrint}
          </small>
        )}
      </div>
    );
  }
}
