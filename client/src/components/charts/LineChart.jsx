import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LineChart = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
    { name: 'Jul', value: 700 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: -30,
          bottom: -5,
        }}
      >
        <XAxis dataKey="name" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
        <YAxis hide={true} />
        <Tooltip 
          contentStyle={{ backgroundColor: '#2a2a2a', border: 'none', borderRadius: '4px' }}
          itemStyle={{ color: '#fff' }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke="#FFD700" 
          strokeWidth={2} 
          dot={false} 
          activeDot={{ r: 4 }} 
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
