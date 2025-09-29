import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData=[
  {
    "id": 1,
    "name": "Alice Johnson",
   "physics":88,
    "chemistry":78,
    "math":85,
    "grade": "A"
  },
  {
    "id": 2,
    "name": "Brian Smith",
    "physics":82,
    "chemistry":87,
    "math":84,
    "grade": "B"
  },
  {
    "id": 3,
    "name": "Catherine Lee",
    "physics":89,
    "chemistry":90,
    "math":96,
    "grade": "A+"
  },
  {
    "id": 4,
    "name": "David Brown",
    "physics":85,
    "chemistry":67,
    "math":54,
    "grade": "C"
  },
  {
    "id": 5,
    "name": "Emily Davis",
    "physics":83,
    "chemistry":77,
    "math":94,
    "grade": "B+"
  }
]



const ResultChart = () => {
    return (
        <div>
            <LineChart width={650} height={400} data={resultData}>
                <Line dataKey="physics" />
                <Line dataKey={"math"} stroke='red'/>
                <Line dataKey={"chemistry"} stroke='black'/>
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default ResultChart;