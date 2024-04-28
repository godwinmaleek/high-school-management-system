export default function ModuleStat({ text, number = 0 }) {
  return (
    <div className="stats grid bg-gradient-to-l from-blue-100 to-sky-50">
      <div className="stat place-items-start">
        <div className="stat-title ">{text}</div>
        <div className="stat-value text-blue-400">{number}</div>
      </div>
    </div>
  );
}
