import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "pie",
  width: 150,
  height: 150,
  series: [4, 10],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "gender population chat",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#1e88e5", "#d81b60"],
    legend: {
      show: false,
    },
  },
};

export default function PieChart() {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-blue-100 p-4 text-blue-400">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div>
        <div>
          <h6 className="font-medium">Chart</h6>
          <p className="text-grey-400 font-normal text-sm">
            Visualization of student data based on gender
          </p>
        </div>
      </CardHeader>
      <CardBody className="mt-4 grid place-items-center px-2">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
