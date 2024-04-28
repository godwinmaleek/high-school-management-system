import React from "react";
import Layout from "../../layout";
import { AddStudentForm } from "./components/add-student";
// import ModuleStat from "./components/student-stat";
import StudentTable from "./components/student-table";
import ModuleStat from "../../components/stat";

export default function Student() {
  const [openForm, setOpenForm] = React.useState(false);
  const handleOpen = () => setOpenForm((prev) => !prev);
  return (
    <Layout>
      <ModuleStat text={"Total Students"} />
      <div className="mt-14">
        <AddStudentForm open={openForm} handleOpen={handleOpen} />
        <StudentTable handleOpenForm={handleOpen} />
      </div>
    </Layout>
  );
}
