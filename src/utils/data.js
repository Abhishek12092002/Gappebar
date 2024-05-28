import G1 from "../img/g1.png";
import G2 from "../img/g2.png";
import G3 from "../img/g3.png";
import G4 from "../img/g4.png";
import G5 from "../img/g5.png";
import G6 from "../img/g6.png";
import G7 from "../img/g7.png";
import I1 from "../img/i1.png";
import I2 from "../img/i2.png";
import I3 from "../img/i3.png";
import I4 from "../img/i4.png";
import I5 from "../img/i5.png";
import I6 from "../img/i6.png";
import I7 from "../img/i7.png";
import D1 from "../img/d1.png";
import D2 from "../img/d2.png";
import D3 from "../img/d3.png";
import D4 from "../img/d8.png";

export const foodData = [
  {
    id: 1,
    name: "SWEET'N'SOBER",
    desc: "A liquid treasure that embodies the essence of sweetness",
    price: "29",
    imageSrc: G1,
  },
  {
    id: 2,
    name: "RAJ KACHORI",
    desc: " A mixture of chickpeas, sev, yoghurt, chutneys, and spices harmonize within", 
    price: "99",
    imageSrc: G4,
  },
  {
    id: 3,
    name: "MINT WHISPER",
    desc: "These crispy spheres hold an infusion of tangy flavors with a fizz",
    price: "49",
    imageSrc: G7,
  },
];

export const categories = [
  {
    id: 1,
    name: "Golgappe",
    urlParamName: "golgappe",
  },
  
  {
    id: 2,
    name: "Dessert",
    urlParamName: "icecreams",
  },

  {
    id: 3,
    name: "Beverages",
    urlParamName: "drinks",
  },
];

export const foodItems = [
  {
    id: 1,
    name: "SWEET'N'SOBER",
    desc: "A liquid treasure that embodies the essence of sweetness with timeless reminder of joy found in the simplest of pleasures",
    price: 29,
    urlParamName: 'golgappe',
    imageSrc: G1,
    qty:1
  },
  {
    id: 2,
    name: "TEEKHILA",
    desc: " The mingling of sweet, sour, and spicy notes creates a burst of taste that's refreshing, a  true celebration of street food artistry",
    price: 29,
    urlParamName: 'golgappe',
    imageSrc: G2,
    qty:1
  },
  {
    id: 3,
    name: "DOTS",
    desc: " Cool creaminess of yogurt mingles with the vibrant zing of spices, creating a symphony of sensations ",
    price: 49,
    urlParamName: 'golgappe',
    imageSrc: G3,
    qty:1
  },
  {
    id: 4,
    name: "RAJ KACHORI",
    desc: " A mixture of chickpeas, sev, yoghurt, chutneys, and spices harmonize within, offering a lavish experience with every bite",
    price: 99,
    urlParamName: 'golgappe',
    imageSrc: G4,
    qty:1
  },
  {
    id: 5,
    name: " T N T (TIPSY N TANGY)",
    desc: "These crispy spheres hold an infusion of tangy flavors with a fizz. As you bite, the explosion of flavors dances on your tongue",
    price: 49,
    urlParamName: 'golgappe',
    imageSrc: G5,
    qty:1
  },
  {
    id: 6,
    name: "CREAMY CRUISE",
    desc: "Caresses the senses with its silken texture and gentle sweetness, inviting you to savor a moment of pure pleasure",
    price: 59,
    urlParamName: 'golgappe',
    imageSrc: G6,
    qty:1
  },
  {
    id: 7,
    name: "MINT WHISPER",
    desc: "With every crunch, a refreshing breeze sweeps over your taste buds, leaving behind a rejuvenating burst of minty delight",
    price: 49,
    urlParamName: 'golgappe',
    imageSrc: G7,
    qty:1
  },
  {
    id: 8,
    name: "CHOCOLATE SCOOP",
    desc: " A delectable serving of chocolate ice cream scoops in a silver bowl, accompanied by a piece of rich, dark chocolate.",
    price: 49,
    urlParamName: 'icecreams',
    imageSrc: I1,
    qty:1
  },
  {
    id: 9,
    name: "VANILLA SCOOP",
    desc: "Each scoop is a creamy, smooth masterpiece, infused with the rich essence of real vanilla beans.",
    price: 49,
    urlParamName: 'icecreams',
    imageSrc: I2,
    qty:1
  },
  {
    id: 10,
    name: "STRAWBERRY SCOOP",
    desc: "Bursting with the flavor of ripe, juicy strawberries.",
    price: 49,
    urlParamName: 'icecreams',
    imageSrc: I3,
    qty:1
  },
  {
    id: 11,
    name: "CHOCOLATE CONE",
    desc: "features a crisp, chocolate-dipped wafer cone filled with chocolate ice-cream",
    price: 29,
    urlParamName: 'icecreams',
    imageSrc: I4,
    qty:1
  },
  {
    id: 12,
    name: "STRAWBERRY CONE",
    desc: "Dive into sweet nostalgia with our creamy strawberry ice cream!",
    price: 29,
    urlParamName: 'icecreams',
    imageSrc: I5,
    qty:1
  },
  {
    id: 13,
    name: "PEACH CONE",
    desc: "Made with real peaches, it's the taste of summer in every bite.",
    price: 29,
    urlParamName: 'icecreams',
    imageSrc: I6,
    qty:1
  },
  {
    id: 14,
    name: "COMBO CONE",
    desc: "Feel the burst of chocolate, strawberry and vanilla!",
    price: 49,
    urlParamName: 'icecreams',
    imageSrc: I7,
    qty:1
  },
  {
    id: 15,
    name: "REDBULL",
    desc: "Grab a Red Bull for the wings to conquer your day!",
    price: 120,
    urlParamName: 'drinks',
    imageSrc: D1,
    qty:1
  },
  {
    id: 16,
    name: "PEPSI",
    desc: "Beat the heat with an ice-cold Pepsi.",
    price: 35,
    urlParamName: 'drinks',
    imageSrc: D2,
    qty:1
  },
  {
    id: 17,
    name: "MONSTER",
    desc: "Unleash the Beast. (Chilled for Maximum Impact)",
    price: 125,
    urlParamName: 'drinks',
    imageSrc: D3,
    qty:1
  },
  {
    id: 18,
    name: "COCA COLA",
    desc: "Icy cold Coca-Cola: quench your thirst the classic way!",
    price: 35,
    urlParamName: 'drinks',
    imageSrc: D4,
    qty:1
  },
];

