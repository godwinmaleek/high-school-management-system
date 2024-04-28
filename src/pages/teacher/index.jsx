import React from "react";
import Layout from "../../layout";
// import { AddNewTeacherForm } from "./components/add-teacher";
import ModuleStat from "../../components/stat";
import StudentTable from "./components/teachers-table";
import AddNewTeacherForm from "./components/add-teacher";

export default function Teacher() {
  const [openForm, setOpenForm] = React.useState(false);
  const handleOpen = () => setOpenForm((prev) => !prev);
  return (
    <Layout>
      <ModuleStat text={"Total Students"} />
      <div className="mt-14">
        <AddNewTeacherForm open={openForm} handleOpen={handleOpen} />
        <StudentTable handleOpenForm={handleOpen} />
      </div>
    </Layout>
  );
}
