import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UpperPart from "./components/UpperPart";
import DonutChart from "./components/DonutChart";
import Shares from "./components/Shares";
import { TiArrowShuffle } from "react-icons/ti";
import { AiOutlineFilter } from "react-icons/ai";
import {
  MdSettingsInputComponent,
  MdOutlineAlignVerticalBottom,
  MdOutlineMapsHomeWork,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { GiStabbedNote } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

import "./App.css";

function App() {
  return (
    <div className="total-container">
      <Sidebar />
      <div className="right-part">
        <Header />
        <div className="main-body">
          <div className="filters">
            <div className="up-part">
              <TiArrowShuffle className="icon-arrow" />
              <p className="up-head">Stat Overview</p>
            </div>
            <div className="filter">
              <p className="filter-para">Show Filter</p>
              <AiOutlineFilter />
            </div>
          </div>
          <div className="stats">
            <UpperPart
              number={87}
              icon={<MdOutlineMapsHomeWork className="icon-big" />}
              name={"Total stores"}
              description={"Here goes a line of text"}
            />
            <UpperPart
              number={32}
              icon={<GiStabbedNote className="icon-big" />}
              name={"Brands"}
              description={"Here goes a line of text"}
            />
            <UpperPart
              number={75}
              icon={<MdProductionQuantityLimits className="icon-big" />}
              name={"Products"}
              description={"Here goes a line of text"}
            />
            <UpperPart
              number={104}
              icon={<IoMdSettings className="icon-big" />}
              name={"On Promotion"}
              description={"Here goes a line of text"}
            />
            <UpperPart
              number={95}
              icon={<MdOutlineAlignVerticalBottom className="icon-big" />}
              name={"Avg Facings / store"}
              description={"Here goes a line of text"}
            />
          </div>
          <div className="right-bottom">
            <div className="head-row">
              <MdSettingsInputComponent className="set-icon" />
              <h3 className="shares-and-products-head">
                Product Sharing Analysis
              </h3>
            </div>
            <div className="shares-and-products">
              <DonutChart />
              <Shares />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
