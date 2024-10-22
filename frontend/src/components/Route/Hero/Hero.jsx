import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://www.shutterstock.com/image-vector/agriculture-landscape-tractor-barn-farm-600nw-2176088081.jpg)",
        backgroundSize: "cover", // Ensure the image covers the entire width
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
            Empowering Farmers with <br /> The Best Tools & Supplies

        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        Discover high-quality agricultural products and equipment to boost your farm's productivity. From 
  seeds and fertilizers to the latest tools, we provide everything you need to cultivate success. 
  Join thousands of farmers already benefiting from our eco-friendly solutions and expert support.

        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
