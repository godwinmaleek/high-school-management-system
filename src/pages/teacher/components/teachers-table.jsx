import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import React from "react";

const TABLE_HEAD = ["Name", "Subject assigned", "Classes assigned", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    classes_assigned: "SSS 3",
    subject_assigned: "Futher Math",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    classes_assigned: "JSS 3 JSS 1",
    subject_assigned: "Math Physics",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    classes_assigned: "SSS 2",
    subject_assigned: "Biology Chemistry",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    classes_assigned: "SSS 2 SSS 1",
    subject_assigned: "Male",
  },
];

export default function TeacherTable({ handleOpenForm }) {
  //   const [value, setValue] = React.useState("react");
  return (
    <Card className="h-full w-full shadow-none">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Teachers list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all teachers
            </Typography>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-96">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>

          <Button
            className="flex items-center gap-3 bg-blue-400"
            size="md"
            onClick={handleOpenForm}
            // onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            <UserPlusIcon strokeWidth={1} className="h-4 w-4" /> Add Teacher
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-hidden px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-4"
                >
                  <Menu className="dropdown">
                    <MenuHandler>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-semibold cursor-default leading-none opacity-70 py-4 flex items-center gap-2"
                      >
                        {head} <ChevronUpDownIcon className="h-4 w-4" />
                      </Typography>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>Menu Item 1</MenuItem>
                      <MenuItem>Menu Item 2</MenuItem>
                      <MenuItem>Menu Item 3</MenuItem>
                    </MenuList>
                  </Menu>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ name, subject_assigned, classes_assigned }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        {/* <Avatar src={img} alt={name} size="sm" /> */}
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {classes_assigned}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {subject_assigned}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="text-blue-gray-500 h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 5
        </Typography>
        <div className="flex items-center gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>

          <div className="w-15 h-10">
            <select className="select w-full max-w-xs">
              <option disabled selected>
                Page
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
