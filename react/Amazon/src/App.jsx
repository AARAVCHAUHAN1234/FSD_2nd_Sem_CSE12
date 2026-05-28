// import { useEffect, useState } from "react";

// const heroImages = [
//   "https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/AugART/travel/BUS_PC_Hero_1500x600_5._CB775503085_.jpg",

//   "https://m.media-amazon.com/images/I/81L1guo+GzL._SX3000_.jpg",

//   "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
// ];

// const products = [
//   {
//     title: "boAt Headphones",
//     image:
//       "https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UL480_FMwebp_QL65_.jpg",
//     price: "₹249",
//   },
//   {
//     title: "Boult Headphones",
//     image:
//       "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UL480_FMwebp_QL65_.jpg",
//     price: "₹349",
//   },
//   {
//     title: "Noise Headphones",
//     image:
//       "https://m.media-amazon.com/images/I/61u1VALn6JL._AC_UL480_FMwebp_QL65_.jpg",
//     price: "₹649",
//   },
//   {
//     title: "Zebronics Headphones",
//     image:
//       "https://m.media-amazon.com/images/I/71WkDp--uqL._AC_UL480_FMwebp_QL65_.jpg",
//     price: "₹149",
//   },
// ];

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [heroIndex, setHeroIndex] = useState(0);
//   const [cartCount, setCartCount] = useState(0);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHeroIndex((prev) => (prev + 1) % heroImages.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const addToCart = () => {
//     setCartCount((prev) => prev + 1);
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       {/* NAVBAR */}
//       <header className="navbar">
//         <div className="nav-left">
//           <img
//             className="logo"
//             src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//             alt=""
//           />

//           <div className="location">
//             <i className="fa-solid fa-location-dot"></i>

//             <div>
//               <span className="small-text">Deliver to</span>
//               <strong>India</strong>
//             </div>
//           </div>
//         </div>

//         <div className="search-bar">
//           <select>
//             <option>All</option>
//             <option>Books</option>
//             <option>Electronics</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Search Amazon.in"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />

//           <button>
//             <i className="fa-solid fa-magnifying-glass"></i>
//           </button>
//         </div>

//         <div className="nav-right">
//           <div className="nav-item">
//             <span className="small-text">Hello, Sign in</span>
//             <strong>Account & Lists</strong>
//           </div>

//           <div className="cart">
//             <i className="fa-solid fa-cart-shopping"></i>

//             <span className="cart-count">{cartCount}</span>
//           </div>
//         </div>
//       </header>

//       {/* SUBNAV */}
//       <div className="subnav">
//         <button
//           className="hamburger"
//           onClick={() => setSidebarOpen(true)}
//         >
//           <i className="fa-solid fa-bars"></i>
//           All
//         </button>

//         <a href="#">Today's Deals</a>
//         <a href="#">Prime</a>
//         <a href="#">Mobiles</a>
//         <a href="#">Fashion</a>
//         <a href="#">Electronics</a>
//       </div>

//       {/* SIDEBAR */}
//       {sidebarOpen && (
//         <>
//           <div
//             className="overlay"
//             onClick={() => setSidebarOpen(false)}
//           ></div>

//           <div className="side-menu active">
//             <div className="side-header">
//               Hello, Sign in

//               <button
//                 className="close-btn"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="side-content">
//               <h3>Trending</h3>

//               <a href="#">Best Sellers</a>
//               <a href="#">New Releases</a>
//               <a href="#">Movers and Shakers</a>

//               <hr />

//               <h3>Shop By Category</h3>

//               <a href="#">Mobiles</a>
//               <a href="#">Fashion</a>
//               <a href="#">Electronics</a>
//             </div>
//           </div>
//         </>
//       )}

//       {/* HERO */}
//       <div className="hero">
//         <img src={heroImages[heroIndex]} alt="" />
//       </div>

//       {/* PRODUCTS */}
//       <section className="shop-section">
//         {filteredProducts.map((product, index) => (
//           <div className="shop-card" key={index}>
//             <img src={product.image} alt="" />

//             <h2>{product.title}</h2>

//             <p className="price">{product.price}</p>

//             <button
//               className="add-to-cart"
//               onClick={addToCart}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div className="back-top">Back to top</div>

//         <div className="footer-links">
//           <div>
//             <h4>Get to Know Us</h4>

//             <a href="#">About Amazon</a>
//             <a href="#">Careers</a>
//             <a href="#">Press Releases</a>
//           </div>

//           <div>
//             <h4>Connect with Us</h4>

//             <a href="#">Instagram</a>
//             <a href="#">Facebook</a>
//             <a href="#">Twitter</a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
import { useState, useEffect, useRef } from "react";

const heroImages = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/AugART/travel/BUS_PC_Hero_1500x600_5._CB775503085_.jpg",
  "https://m.media-amazon.com/images/I/81L1guo+GzL._SX3000_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
];

const shopCards = [
  {
    title: "Revamp your home in style",
    link: "Explore all",
    items: [
      {
        img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300",
        label: "Wall decors",
      },
      {
        img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300",
        label: "Floor mats",
      },
      {
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300",
        label: "Home storage",
      },
      {
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=300",
        label: "Lighting",
      },
    ],
  },
  {
    title: "Footwear Deals",
    link: "See all",
    items: [
      {
        img: "https://m.media-amazon.com/images/I/81SRDNUx+kL._AC_UL480_FMwebp_QL65_.jpg",
        label: "Handbags",
      },
      {
        img: "https://m.media-amazon.com/images/I/61dDCXobmkL._AC_UL480_FMwebp_QL65_.jpg",
        label: "Sports shoes",
      },
      {
        img: "https://m.media-amazon.com/images/I/71gdPwgPoXL._AC_UL480_FMwebp_QL65_.jpg",
        label: "Football shoes",
      },
      {
        img: "https://m.media-amazon.com/images/I/71ucfxShFYL._AC_UL480_FMwebp_QL65_.jpg",
        label: "Slippers",
      },
    ],
  },
];

export default function App() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [cart, setCart] = useState([]);
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer.current);
  }, []);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-left">
          <img
            className="logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon"
          />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Amazon.in" />
          <button className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className="nav-right">
          <button className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Cart ({cart.length})</span>
          </button>
        </div>
      </header>

      {/* SUBNAV */}
      <nav className="subnav">
        <a href="#">Today's Deals</a>
        <a href="#">Best Sellers</a>
        <a href="#">Mobiles</a>
        <a href="#">Fashion</a>
        <a href="#">Electronics</a>
      </nav>

      {/* HERO */}
      <div className="hero">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className={`hero-img ${heroIdx === index ? "active" : ""}`}
          />
        ))}

        <button
          className="hero-btn left"
          onClick={() =>
            setHeroIdx(
              (heroIdx - 1 + heroImages.length) % heroImages.length
            )
          }
        >
          ❮
        </button>

        <button
          className="hero-btn right"
          onClick={() => setHeroIdx((heroIdx + 1) % heroImages.length)}
        >
          ❯
        </button>
      </div>

      {/* SHOP SECTION */}
      <section className="shop-section">
        {shopCards.map((card, index) => (
          <div className="shop-card" key={index}>
            <h2>{card.title}</h2>

            <div className="card-grid">
              {card.items.map((item, i) => (
                <div
                  className="item"
                  key={i}
                  onClick={() => addToCart(item)}
                >
                  <img src={item.img} alt={item.label} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <a href="#">{card.link}</a>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Amazon Clone by You</p>
      </footer>
    </>
  );
}