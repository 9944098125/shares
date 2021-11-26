import React from "react";
import {
  MdOutlineSpeed,
  MdPhotoCameraBack,
  MdOutlineCategory,
  MdOutlineRateReview,
  MdPreview,
} from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { RiContactsBookUploadFill } from "react-icons/ri";
import { FaSearchPlus, FaStoreSlash, FaStore } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { SiAdobeaudition } from "react-icons/si";
import "./index.css";

export default function Sidebar() {
  return (
    <div className="total-sidebar">
      <h1 className="upper-part">SNAP2INSIGHT</h1>

      <div className="categories">
        <h3 className="category-number">CATEGORY ONE</h3>
        <div className="icon-row">
          <MdOutlineSpeed className="icon" />
          <p className="side-heads">Project Summary</p>
        </div>
        <div className="icon-row">
          <BsDisplay className="icon" />
          <p className="side-heads">Display Execution </p>
        </div>
        <div className="icon-row">
          <RiContactsBookUploadFill className="icon" />
          <p className="side-heads">Photo Upload </p>
        </div>
        <h3 className="category-number">CATEGORY TWO</h3>
        <div className="icon-row">
          <MdPhotoCameraBack className="icon" />
          <p className="side-heads">Photo Analysis </p>
        </div>
        <div className="icon-row">
          <FaSearchPlus className="icon" />
          <p className="side-heads">Distribution Summary</p>
        </div>
        <div className="icon-row-special">
          <MdOutlineCategory className="icon-sp" />
          <p className="side-heads">Category Dashboard</p>
        </div>
        <h1 className="category-number">CATEGORY THREE</h1>
        <div className="icon-row">
          <MdOutlineRateReview className="icon" />
          <p className="side-heads">Project Status</p>
        </div>
        <div className="icon-row">
          <MdPreview className="icon" />
          <p className="side-heads">Photo Review</p>
        </div>
        <div className="icon-row">
          <FcAbout className="icon" />
          <p className="side-heads">Project Review</p>
        </div>
        <div className="icon-row">
          <FaStoreSlash className="icon" />
          <p className="side-heads">Audit Photos</p>
        </div>
        <h3 className="category-number">CATEGORY FOUR</h3>
        <div className="icon-row">
          <SiAdobeaudition className="icon" />
          <p className="side-heads">Audit Dashboard</p>
        </div>
        <div className="icon-row">
          <FaStore className="icon" />
          <p className="side-heads">Store Summary</p>
        </div>
      </div>
    </div>
  );
}
