import { PieChart, Pie, Legend, Cell } from "recharts";
import "./index.css";

const DonutChart = () => {
  const data = [
    { name: "cascade", value: 10 },
    { name: "dawn", value: 60 },
    { name: "scrotch bride", value: 8 },
    { name: "sun triple", value: 5 },
    { name: "clorox", value: 5 },
    { name: "scrotch bride", value: 5 },
  ];
  return (
    <div>
      <div className="doughnut-desktop">
        <h1 className="pie-head">Product List</h1>
        <h3 className="small-head">Here goes the supporting line of text</h3>
        <PieChart className="chart-row" width={1000} height={300}>
          <Pie
            data={data}
            startAngle={360}
            endAngle={0}
            innerRadius="30%"
            outerRadius="70%"
          >
            <Cell name="Dawn" fill="#44A7c4" />
            <Cell name="Cascade" fill="#c660ce" />
            <Cell name="Scrotch bride" fill="#abd5ab" />
            <Cell name="Sun triple" fill="#fe036a" />
            <Cell name="Clorox" fill="#fef24e" />
            <Cell name="Scrotch bride" fill="#4adede" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="top"
            align="center"
            wrapperStyle={{ fontSize: 12, fontFamily: "Roboto" }}
          />
        </PieChart>
      </div>
      <div className="doughnut-mobile">
        <h1 className="pie-head">Product List</h1>
        <h3 className="small-head">Here goes the supporting line of text</h3>
        <PieChart className="chart-row" width={1000} height={300}>
          <Pie
            data={data}
            startAngle={360}
            endAngle={0}
            innerRadius="30%"
            outerRadius="70%"
          >
            <Cell name="Dawn" fill="#44A7c4" />
            <Cell name="Cascade" fill="#c660ce" />
            <Cell name="Scrotch bride" fill="#abd5ab" />
            <Cell name="Sun triple" fill="#fe036a" />
            <Cell name="Clorox" fill="#fef24e" />
            <Cell name="Scrotch bride" fill="#4adede" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="top"
            align="center"
            wrapperStyle={{ fontSize: 12, fontFamily: "Roboto" }}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default DonutChart;
