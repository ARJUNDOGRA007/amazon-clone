import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            
            <div className="home__container">

                <img className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt=""

                    />

                <div className="home__row">
                    
                    <Product
                        id="123213477"
                        title="Panasonic LUMIX G7 16.00 MP 4K Mirrorless Interchangeable Lens Camera Kit with 14-42 mm Lens (Black)"
                        price={38490.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91xnO7qHAeL._SL1500_.jpg"
                    />
                    <Product
                        id="123213466"
                        title="Samsung Galaxy Fold 2 Mystic Bronze, 12GB RAM, 512GB Storage"
                        price={149990.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/418XEZECRuL.jpg"
                    />
                    <Product
                        id="123213455"
                        title="GoPro HERO9 Black — Waterproof Action Camera with Touch Screen 5K Ultra HD Video 20MP Photos 1080p Live Streaming Stabilization"
                        price={39490.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Iyd3w%2BbKL._SL1500_.jpg"
                    />
                    
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Fitbit Inspire HR Health and Fitness Tracker with Heart Rate (Black)"
                        price={6780.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={6599.00}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={105000.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                    <Product
                        id="3254354355"
                        title="ASUS ROG Zephyrus Duo 15, 15.6 4K UHD, Intel Core i7-10875H 10th Gen, RTX 2080, Gaming Laptop"
                        price={269990.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/8189czxRlUL._SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="13321341"
                        title="Mi 10 (Coral Green, 8GB RAM, 256GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready"
                        price={54999.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/515%2B4BAU5SL._SL1200_.jpg"
                    />
                    <Product
                        id="12321341"
                        title="Redmi K20 Pro (Flame Red, 8GB RAM, 256GB Storage)"
                        price={26990.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ocd2xrG9L._SL1500_.jpg"
                    />
                    
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={25000.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="123213"
                        title="Google Pixel Slate 12.3-Inch 2 in 1 Tablet Intel Core i5, 8GB RAM, 128GB, Aspect Ratio 3:2"
                        price={74990.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/710-JQDjuFL._SL1500_.jpg"
                    />
                    <Product
                        id="12321221"
                        title="Cosmic Byte Equinox Europa 7.1 USB Dual Driver Gaming Headset with Software, Spectra RGB LED"
                        price={2539.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/81IfrXVE19L._SL1500_.jpg"
                    />
                    <Product
                        id="123213691"
                        title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Men's Smartwatch"
                        price={22995.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
                    />
                    <Product
                        id="1232134317"
                        title="ZEBRONICS Zeb-MAX Chroma Premium Mechanical Gaming Keyboard"
                        price={4219.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41VjCNkUPaL.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                            id="49538094"
                            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                            price={3390.00}
                            rating={4}
                            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        />

                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={300.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="123213467"
                        title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
                        price={200.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51XuOhdrn4L._SX331_BO1,204,203,200_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="112321341"
                        title="Samsung Galaxy Buds+ (Black)"
                        price={5998.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71nrZHQMZ7L._SL1500_.jpg"
                    />
                    <Product
                        id="1222321341"
                        title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
                        price={39999.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61PDbUd1VaL._SL1500_.jpg"
                    />
                    <Product
                        id="1522321341"
                        title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black)"
                        price={14999.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Z%2Bl05eSIS._SL1188_.jpg"
                    />
                    <Product
                        id="412321341"
                        title="SanDisk 500GB SSD USB-C, USB 3.1, for PC & Mac & IP55 Rated"
                        price={6739.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71HE3DVcBUL._SL1500_.jpg"
                    />
                </div>

            </div>

        </div>
    );
};

export default Home


{/* <Product
    id="12321341"
    title=""
    price={00.00}
    rating={1}
    image=""
/> */}

// https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3.jpg

// 