import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

class PieChartClass extends React.Component {
   
    COLORS = ["#3A0303", "#6b1e1e", "#762929", "#f38a8a", "#481717"];
   
    pieData = [
      {
         name: "Skills",
         value: 54.85
      },
      {
         name: "Connections",
         value: 10.91
      },
      {
         name: "Communities Part",
         value: 16.85
      },
      {
         name: "Education",
         value: 16.14
      },
      {
         name: "Accounts Reached",
         value: 47.25
      }
   ];
   
render() {
   return (
      <PieChart margin={15} width={300} height={300}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="40%"
         cy="40%"
         outerRadius={90}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
              
            />
         ))}
      </Pie>
      <Legend />
      </PieChart>
      );
   }
}
export default PieChartClass;