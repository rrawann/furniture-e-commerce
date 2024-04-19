import React from 'react'
// import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/fa'
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../../public/assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../../public/assets/images";

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '#about',
  },
  {
    id: 3,
    text: 'products',
    url: '#products',
  },
]

export const services = [
  {
      imgURL: truckFast,
      label: "Free shipping",
      subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
      imgURL: shieldTick,
      label: "Secure Payment",
      subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
      imgURL: support,
      label: "Love to help you",
      subtext: "Our dedicated team is here to assist you every step of the way."
  },
];

export const reviews = [
  {
      imgURL: customer1,
      customerName: 'Morich Brown',
      rating: 4.5,
      feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
  },
  {
      imgURL: customer2,
      customerName: 'Lota Mongeskar',
      rating: 4.5,
      feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
];

export const products = [
  {
      imgURL: shoe4,
      rate:3.5,
      name: "Nike Air Jordan-01",
      price: "$200.20",
  },
  {
      imgURL: shoe5,
      rate:4.2,
      name: "Nike Air Jordan-10",
      price: "$210.20",
  },
  {
      imgURL: shoe6,
      rate:7.3,
      name: "Nike Air Jordan-100",
      price: "$220.20",
  },
  {
      imgURL: shoe7,
      rate:4.3,
      name: "Nike Air Jordan-001",
      price: "$230.20",
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
