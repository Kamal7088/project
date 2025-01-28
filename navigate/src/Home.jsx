import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navb from './Navb'
import axios from 'axios';
import "./Ap.css";
import { useState } from 'react'
import { useEffect } from 'react';
export default function Home() {

  const[nm,setNm]=useState('');
  const[id,setId]=useState('');

  const menuItems = [
    { name: "VEGETARIAN FOODS", description: "  At Grand Hotel, we celebrate the richness of vegetarian cuisine, offering a diverse selection of dishes that cater to every taste. From fresh, seasonal vegetables to flavorful grains and aromatic spices, our vegetarian offerings are carefully crafted to provide a delightful dining experience for all.  A vegetarian diet does not include any meat, poultry, or seafood. It is a meal plan made up of foods that come mostly from plants. These include:Vegetables,Fruits,Whole grains,Legumes,Seeds,Nuts,May include eggs and/or milk if lacto-ovo vegetarian", priceinrange : "$100 tp 500" },
    { name: "NON VEG FOOD", description: "  At Grand Hotel, we offer an exquisite selection of non-vegetarian dishes, each prepared with the finest cuts of meat and a blend of aromatic spices. Our chefs bring you bold, rich flavors that will satisfy every craving, whether you're looking for tender meats, juicy grilled options, or flavorful curries.Non veg foods are avaliable here chicken ,mutton ,fish and these item are fresh and very low price ", price: "$250 to 500" },
    { name: "DRINK", description: "At Grand Hotel, we believe in offering the finest, refreshing beverages to complement your meal. Our selection of freshly squeezed juices and cold drinks are crafted with the finest ingredients to provide a deliciously satisfying experience.Fresh Juices: Orange Juice – A glass of freshly squeezed orange juice, bursting with natural vitamin C, perfect to start your day or refresh after a meal.Apple Juice – Crisp and sweet, made with the juiciest apples for a smooth, refreshing flavor.Carrot Juice – A nutritious and refreshing drink made with freshly squeezed carrots, packed with vitamins and antioxidants.Cold Drinks:Iced Tea – Choose from classic black tea or invigorating green tea, chilled and served with a slice of lemon. Sweetened or unsweetened to your taste.Lemonade – A tangy and sweet mix of fresh lemons and a touch of sugar, served ice-cold for the ultimate refreshing experience.Iced Coffee – For those who love their coffee chilled, our iced coffee is the perfect balance of rich, brewed coffee and ice, with a hint of sweetness.", price: "$12.99" },
    { name: "SWEET", description: "At Grand Hotel, we take pride in offering an array of mouthwatering sweets to satisfy your cravings and complete your dining experience. Whether you have a sweet tooth or simply want to indulge in something luxurious, our desserts are crafted with the finest ingredients and served fresh.", price: "$7.99" }
  ];

  return (

    <>
<Navb/>
<div className="menu-container">
      <h1 className="menu-header">Grand Hotel Menu</h1>
      <div className="menu-card">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-description">{item.description}</p>
            </div>
            <span className="item-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>

   
    </>
  );
}

