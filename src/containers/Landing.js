import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BannerImage from "../assets/images/Banner.png";
import OfferImage001 from "../assets/images/offer-01.png";
import OfferImage002 from "../assets/images/offer-02.png";
import OfferImage003 from "../assets/images/offer-03.png";
import OfferImage004 from "../assets/images/offer-04.png";
import Empty from "../components/default/Empty";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import CategoryCard from "../components/landing/CategoryCard";
import { fetchCategories } from "../reducks/category/operations";
import { getCategories } from "../reducks/category/selectors";

export default function Landing() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const categories = getCategories(selector);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <section className="main-wrapper">
        <div className="banner">
          <img className="banner-image" src={BannerImage} alt="" />
        </div>

        <div className="product-brand">
          <p>Get Up To 50% off </p>
          <p>On all products and brands</p>
          <div>
            <Link to={{ pathname: "sign-in", search: "type=female" }}>
              Shop Women's
            </Link>
            <Link to={{ pathname: "sign-in", search: "type=male" }}>
              Shop Men's
            </Link>
            <Link to={{ pathname: "sign-in", search: "type=kid" }}>
              Shop Kid's
            </Link>
          </div>
        </div>
        <div className="landing-container">
          <div className="content-container">
            <p className="category-title">Categories</p>

            <div className="category">
              {categories.results && categories.results.length > 0 ? (
                categories.results.map((c, index) => (
                  <CategoryCard key={index} data={c} />
                ))
              ) : (
                <Empty />
              )}
            </div>
          </div>
          <div className="content-container">
            <p className="category-title">Offers</p>
            <div className="offer">
              <div className="offer-items">
                <Link to={{ pathname: "sign-in" }}>
                  <img className="offer-image" src={OfferImage001} alt="" />
                </Link>
              </div>
              <div className="offer-items">
                <Link to={{ pathname: "sign-in" }}>
                  <img className="offer-image" src={OfferImage002} alt="" />
                </Link>
              </div>
              <div className="offer-items">
                <Link to={{ pathname: "sign-in" }}>
                  <img className="offer-image" src={OfferImage003} alt="" />
                </Link>
              </div>
              <div className="offer-items">
                <Link to={{ pathname: "sign-in" }}>
                  <img className="offer-image" src={OfferImage004} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
