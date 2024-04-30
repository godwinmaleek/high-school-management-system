import { Button } from "@material-tailwind/react";
import Layout from "../../layout";

import ClassStat from "./components/stat";

import SubjectTable from "./components/subject-table";

export default function Subjects() {
  // const allTopics = [
  //   { id: 1, name: "Math" },
  //   { id: 2, name: "Physics" },
  //   { id: 3, name: "Chemistry" },
  //   { id: 4, name: "Physics" },
  //   { id: 5, name: "Biology" },
  //   { id: 7, name: "Chemistry" },
  //   { id: 8, name: "English Language" },
  //   { id: 9, name: "Literature in English" },
  //   { id: 10, name: "Civic Educaton" },
  //   { id: 11, name: "Basic Science" },
  //   { id: 12, name: "French" },
  // ];

  return (
    <Layout>
      <ClassStat />
      <div className="mt-14">
        <Button color="blue" className="">
          Add Subject
        </Button>
        <SubjectTable />
      </div>
    </Layout>
  );
}
