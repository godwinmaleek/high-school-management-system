export default function ClassStat() {
  return (
    <div className="stats shadow grid bg-gradient-to-l from-blue-100 to-sky-50">
      <div className="stat place-items-start">
        <div className="stat-title">Class</div>
        <div className="stat-value text-blue-400">6</div>
        <div className="stat-desc">Total number of classes</div>
      </div>

      <div className="stat place-items-start">
        <div className="stat-title">Subjects</div>
        <div className="stat-value text-blue-400">10</div>
        <div className="stat-desc">Total number of subjects</div>
      </div>
    </div>
  );
}
