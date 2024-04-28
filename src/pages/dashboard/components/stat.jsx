import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function DashboardStat() {
  return (
    <div className="stats shadow grid bg-gradient-to-l from-blue-100 to-sky-50">
      <div className="stat place-items-start">
        <div className="stat-title">Total Students</div>
        <div className="stat-value text-blue-400">6120</div>
        <div className="stat-desc">
          <Link to={"/students"} className="flex items-center gap-x-2">
            Students <ArrowRightCircleIcon className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <div className="stat place-items-start">
        <div className="stat-title">Total Teachers</div>
        <div className="stat-value text-secondary">10</div>
        <div className="stat-desc text-secondary">
          <Link to={"/teachers"} className="flex items-center gap-x-2">
            Teachers <ArrowRightCircleIcon className="h-3 w-3" />
          </Link>
        </div>
      </div>

      <div className="stat place-items-start">
        <div className="stat-title">Total Subjects</div>
        <div className="stat-value">15</div>
        <div className="stat-desc">
          <Link to={"/subjects"} className="flex items-center gap-x-2">
            Subject <ArrowRightCircleIcon className="h-3 w-3" />
          </Link>
        </div>
      </div>
      <div className="stat place-items-start">
        <div className="stat-title">Total Classes</div>
        <div className="stat-value">6</div>
        <div className="stat-desc">
          <Link to={"/class"} className="flex items-center gap-x-2">
            Class <ArrowRightCircleIcon className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
