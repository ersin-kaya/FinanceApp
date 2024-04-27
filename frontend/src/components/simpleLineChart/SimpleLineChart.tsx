import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

type Props = {
  data: any;
  xAxis: string;
  dataKey: string;
};

const SimpleLineChart = ({ data, xAxis, dataKey }: Props) => {
  return (
    <>
      <ResponsiveContainer width={"99%"} height={500}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <XAxis dataKey={xAxis} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleLineChart;
