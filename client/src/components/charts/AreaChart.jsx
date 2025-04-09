import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChart = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
    { name: 'Jul', value: 700 },
    { name: 'Aug', value: 950 },
    { name: 'Sep', value: 800 },
    { name: 'Oct', value: 600 },
    { name: 'Nov', value: 500 },
    { name: 'Dec', value: 700 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart
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
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#F3C677" 
          fill="url(#colorGradient)" 
          fillOpacity={0.6}
        />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F3C677" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#F3C677" stopOpacity={0}/>
          </linearGradient>
        </defs>
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
