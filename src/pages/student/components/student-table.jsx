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

const TABLE_HEAD = ["Name", "Class", "Gender", "Roll number", "Age", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    student_class: "JSS 1",
    gender: "Male",
    age: "12 years",
    roll_number: "001",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    student_class: "SSS 3",
    gender: "Female",
    age: "18 years",
    roll_number: "420",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    student_class: "JSS 3",
    gender: "Female",
    age: "14 years",
    roll_number: "320",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",

    student_class: "SSS 2",
    gender: "Male",
    age: "16 years",
    roll_number: "122",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",

    student_class: "SSS 2",
    gender: "Male",
    age: "17 years",
    roll_number: "022",
  },
];

export default function StudentTable({ handleOpenForm }) {
  //   const [value, setValue] = React.useState("react");
  return (
    <Card className="h-full w-full shadow-none">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Student list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all students
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
          >
            <UserPlusIcon strokeWidth={1} className="h-4 w-4" /> Add student
          </Button>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
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
              ({ name, gender, age, student_class, roll_number }, index) => {
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
                          {student_class}
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
                          {gender}
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
                          {roll_number}
                        </Typography>
                      </div>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {age}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
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
