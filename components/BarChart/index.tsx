import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
  data: number[];
  labels: string[];
  title: string;
}

const BarChart =({ data, labels, title }: BarChartProps) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  return (
    <div className="w-full h-80">
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;