import { BsArrowUpRight } from "react-icons/bs";
import { FiArrowDownLeft } from "react-icons/fi";
import "./index.css";

export default function Shares() {
  return (
    <div className="shares-container">
      <div className="left-part">
        <div className="head-part">
          <h1 className="shares-head">Increase in share</h1>
          <p className="shares-para">Here goes a support line of text</p>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">55%</h3>
            <p className="product-name">Garnier</p>
          </div>
          <BsArrowUpRight className="arrow-right" />
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">27%</h3>
            <p className="product-name">Head & Shoulders</p>
          </div>
          <BsArrowUpRight className="arrow-right" />
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">16%</h3>
            <p className="product-name">Pantene</p>
          </div>
          <BsArrowUpRight className="arrow-right" />
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">55%</h3>
            <p className="product-name">Sauve</p>
          </div>
          <BsArrowUpRight className="arrow-right" />
        </div>
      </div>
      <div className="right-part">
        <div className="head-part">
          <h3 className="shares-head">Decrease in share</h3>
          <p className="shares-para">Here goes a support line of text</p>
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">20%</h3>
            <p className="product-name">Khadi</p>
          </div>
          <FiArrowDownLeft className="arrow-left" />
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">16%</h3>
            <p className="product-name">Nestle</p>
          </div>
          <FiArrowDownLeft className="arrow-left" />
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">12%</h3>
            <p className="product-name">Kukabura</p>
          </div>
          <FiArrowDownLeft className="arrow-left" />
        </div>
        <div className="row">
          <div className="col">
            <h3 className="num-head">10%</h3>
            <p className="product-name">Boost</p>
          </div>
          <FiArrowDownLeft className="arrow-left" />
        </div>
      </div>
    </div>
  );
}
