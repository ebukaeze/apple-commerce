import React from "react";
import Image from "next/image";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { urlFor } from "../../../sanity";
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../redux/cartSlice";
import { Currency } from "react-tender";
import toast from "react-hot-toast";
import { useState } from "react";

interface Props {
  items: Product[];
  id: string;
}

const CheckoutProducts = ({ id, items }: Props) => {
  const [showMore, setShowMore] = useState(true);
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));

    toast.error(`${items[0].title} removed from cart`, {
      position: "bottom-center",
    });
  };

  const addItemToCart = () => {
    dispatch(addToCart(items[0]));

    toast.success(`${items[0].title} has been added to cart`);
  };
  const trunc = (str: string, n: number) => {
    if (showMore) {
      return str.length > n ? str.substring(0, n) + "..." : str;
    } else return str;
  };
  return (
    <tbody className="w-full gap-y-3 space-y-4 mt-3  divide-opacity-60 divide-y text-[12px] border-b border-gray-200 py-6 border-spacing-4">
      <tr className="my-3 border-spacing-8">
        <td className="inline-flex sm:flex-row flex-col border-spacing-4">
          <Image
            src={urlFor(items[0].image[0]).url()}
            alt="image"
            width={40}
            height={40}
            className="sm:h-24 sm:w-24 w-20 h-20 object-contain border border-gray-200 mr-2"
          />
          <div className="flex flex-col items-start">
            <h2 className="sm:text-lg text-sm font-medium">{items[0].title}</h2>
            <h3>{trunc(items[0].description, 50)}</h3>
            {items[0].description.length > 50 && (
              <span
                className="text-[12px] text-blue-500 cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "show more" : "show less"}
              </span>
            )}
          </div>
        </td>
        <td>
          <h2 className="sm:text-[16px] text-[12px] font-medium">
            <Currency
              value={items.reduce((total, item) => total + item.price, 0)}
              currency="USD"
            />
          </h2>
        </td>
        <td className="text-[16px] font-medium flex items-center flex-col sm:flex-row gap-x-3">
          <span
            onClick={removeItemFromCart}
            className="sm:w-6 sm:h-6 w-4 h-4 bg-gray-100 items-center flex justify-center cursor-pointer"
          >
            <MinusIcon className="w-2 sm:w-3" />
          </span>
          <p className="sm:text-base text-[12px]">{items.length}</p>
          <span
            onClick={addItemToCart}
            className="sm:w-6 sm:h-6 w-4 h-4 bg-gray-100 items-center flex justify-center cursor-pointer"
          >
            <PlusIcon className="w-2 sm:w-3" />
          </span>
        </td>
        <td>
          <TrashIcon
            className="sm:w-6 sm:h-6 h-4 w-4 sm:mt-0 mt-8 text-gray-800 cursor-pointer flex items-center"
            onClick={removeItemFromCart}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default CheckoutProducts;
