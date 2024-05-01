import Layout from "../../layout";

import ClassStat from "./components/stat";

import SubjectTable from "./components/subject-table";

export default function Subjects() {
  return (
    <Layout>
      <ClassStat />
      <div className="mt-14">
        <div className="mt-4">
          <SubjectTable />
        </div>
      </div>
    </Layout>
  );
}
