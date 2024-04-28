import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import PieChart from "../../components/chart";
import Layout from "../../layout";
import QuickLink from "./components/quicklinks";
import { ClockIcon } from "@heroicons/react/24/outline";
import DashboardStat from "./components/stat";

export default function Dashboard() {
  return (
    <Layout>
      <DashboardStat />
      <div className="grid grid-cols-5 mt-14 gap-10">
        <Card className="col-span-3">
          <CardHeader className="p-4">
            <h3 className="text-lg font-semibold">Pending Approvals</h3>
          </CardHeader>
          <CardBody>
            <ul className="flex flex-col  divide-y-2">
              <li className="py-4">
                <div className="inline-block py-0.5 px-1 rounded-md bg-blue-50 align-middle">
                  <span className="text-xs text-blue-400 font-medium">
                    10 sept, 2024
                  </span>
                </div>
                <p className="text-sm mt-2 font-medium">
                  JSS2 results pending approval
                </p>
                <div className="flex items-center text-xs gap-1 mt-1">
                  Submited {<ClockIcon height={13} width={13} />} 20 min ago
                </div>
              </li>
              <li className="py-4">
                <div className="inline-block py-0.5 px-1 rounded-md bg-blue-50 align-middle">
                  <span className="text-xs text-blue-400 font-medium">
                    10 sept, 2024
                  </span>
                </div>
                <p className="text-sm mt-2 font-medium">
                  JSS1 results pending approval
                </p>
                <div className="flex items-center text-xs gap-1 mt-1">
                  Submited {<ClockIcon height={13} width={13} />} 20 min ago
                </div>
              </li>
              <li className="py-4">
                <div className="inline-block py-0.5 px-1 rounded-md bg-blue-50 align-middle">
                  <span className="text-xs text-blue-400 font-medium">
                    10 sept, 2024
                  </span>
                </div>
                <p className="text-sm mt-2 font-medium">
                  SSS1 results pending approval
                </p>
                <div className="flex items-center text-xs gap-1 mt-1">
                  Submited {<ClockIcon height={13} width={13} />} 20 min ago
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
        <div className="grid grid-cols-1 gap-y-5 col-span-2">
          <QuickLink />
          <PieChart />
        </div>
      </div>
    </Layout>
  );
}
