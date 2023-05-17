import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from 'axios';

class PieChartClass extends React.Component {
   
    COLORS = ["#3A0303", "#6b1e1e", "#762929", "#f38a8a", "#481717"];
   
   /* componentDidMount()
    {
      const userID = localStorage.getItem('userID');
      console.log(userID)

      axios.get(`http://localhost:8080/get-user-communities/${userID}`)
  
        .then((response) => {
        
          setUserCommunities(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }*/

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
   ];
   
render() {
   return (
      <PieChart margin={15} width={300} height={300}className='text-sm '>
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