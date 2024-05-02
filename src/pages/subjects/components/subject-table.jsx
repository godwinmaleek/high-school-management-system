import {
  Accordion,
  AccordionBody,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";
import { ChevronUpDownIcon, PencilIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const TABLE_HEAD = [
  { name: "Name", allowSort: true },
  { name: "Available Teachers", allowSort: false },
];
const ALLSUBJECT = [
  {
    id: 1,
    num_of_teachers: "2",
    subject_name: "Math",
    teachers: [
      { name: "Laurent Perrier", classes_assigned: ["JSS 3", "JSS 1"] },
      { name: "Alexa Liras", classes_assigned: ["SSS 3", "SSS 2"] },
    ],
  },

  {
    id: 2,
    num_of_teachers: "1",
    subject_name: "Physics",
    teachers: [
      { name: "Laurent Perrier", classes_assigned: ["SSS 3", "SSS 2"] },
    ],
  },
  {
    id: 3,
    num_of_teachers: "1",
    subject_name: "Biology",
    teachers: [{ name: "Michael Levi", classes_assigned: ["SSS 2"] }],
  },
  {
    id: 4,
    num_of_teachers: "1",
    subject_name: "Chemistry",
    teachers: [{ name: "Michael Levi", classes_assigned: ["SSS 2"] }],
  },
  {
    id: 5,
    num_of_teachers: "2",
    subject_name: "English Language",
    teachers: [
      {
        name: "Richard Gran",
        classes_assigned: ["JSS 1", " JSS 2", " JSS 3"],
      },
      {
        name: "Micheal King",
        classes_assigned: ["SSS 1", " SSS 2", " SSS 3"],
      },
    ],
  },
  {
    id: 6,
    num_of_teachers: "1",
    subject_name: "FutherMath",
    teachers: [{ name: "Alexa Liras", classes_assigned: ["SSS 3"] }],
  },
  {
    id: 7,
    num_of_teachers: "1",
    subject_name: "Literature in English",
    teachers: [{ name: "Richard Gran", classes_assigned: ["SSS 2", " SSS 1"] }],
  },
];

// const Teachers = [
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
//     name: "Alexa Liras",
//     classes_assigned: ["SSS 3"],
//     subject_assigned: ["FutherMath"],
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
//     name: "Laurent Perrier",
//     classes_assigned: ["JSS 3", "JSS 1", "SSS 3", "SSS 2"],
//     subject_assigned: ["Math", "Physics"],
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
//     name: "Michael Levi",
//     classes_assigned: ["SSS 2"],
//     subject_assigned: ["Biology ", "Chemistry"],
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
//     name: "Richard Gran",
//     classes_assigned: ["SSS 2", " SSS 1", "JSS 1", "JSS 2", "JSS 3"],
//     subject_assigned: ["English Language", "Literature in English"],
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
//     name: "Micheal King",
//     classes_assigned: ["SSS 2", " SSS 1", "SSS 3"],
//     subject_assigned: ["English Language"],
//   },
// ];
export default function SubjectTable() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showOption, setShowOption] = useState("");

  const handleOpen = (index, show) => {
    if (showOption === show && activeIndex === index) {
      setShowOption(null);
      setActiveIndex(null);
      return;
    }
    setShowOption(show);
    setActiveIndex(index);
  };
  return (
    <ul className="flex flex-col divide divide-gray-200  shadow shadow-sm">
      <li className="p-2 flex items-center border-y border-blue-gray-100 bg-blue-gray-50/50 px-4">
        {TABLE_HEAD.map(({ name, allowSort }, key) => (
          <Typography
            key={key + name}
            variant="small"
            color="blue-gray"
            className="min-w-44 font-semibold cursor-default leading-none opacity-70 py-4 flex items-center gap-4"
          >
            {name}
            {allowSort && <ChevronUpDownIcon className="h-4 w-4" />}
          </Typography>
        ))}
      </li>
      {ALLSUBJECT.map(
        ({ subject_name, id, num_of_teachers, teachers }, subjectIndex) => {
          // const subjectInfoClass =
          //   subjectIndex === activeIndex
          //     ? "max-h-96 py-4 bg-gray-50 px-4 transition transition-all linear duration-300"
          //     : "max-h-0 bg-gray-50 px-4 overflow-hidden transition linear transition-all duration-300";
          return (
            <li
              className={`border-b border-blue-gray-100 ${
                subjectIndex === activeIndex
                  ? "border-l-2 !border-l-blue-300"
                  : ""
              }`}
            >
              <Accordion
                key={id + subject_name}
                open={activeIndex === subjectIndex}
              >
                <div className="p-4 bg-white flex items-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="min-w-44 font-normal"
                  >
                    {subject_name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="min-w-44 font-normal"
                  >
                    {num_of_teachers}
                  </Typography>

                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="min-w-44 cursor-pointer"
                    onClick={() => handleOpen(subjectIndex, "view")}
                  >
                    view
                  </Typography>
                  <div className="min-w-44 cursor-pointer">
                    <PencilIcon
                      onClick={() => handleOpen(subjectIndex, "edit")}
                      className="text-blue-gray-500 h-4 w-4"
                    />
                  </div>
                  <div className="min-w-44 cursor-pointer">
                    <TrashIcon className=" text-blue-gray-500 h-4 w-4" />
                  </div>
                </div>
                <AccordionBody key={subjectIndex}>
                  {/* subject info */}

                  {/* {showOption === "view" && activeIndex === subjectIndex ? ( */}
                  <SubjectDetails
                    display={
                      showOption === "view" && activeIndex === subjectIndex
                    }
                    teachers={teachers}
                  />
                  {/* ) : null} */}
                  {/* {showOption === "edit" && activeIndex === subjectIndex ? ( */}
                  <SubjectEditForm
                    display={
                      showOption === "edit" && activeIndex === subjectIndex
                    }
                    currentName={subject_name}
                  />
                  {/* ) : null} */}
                </AccordionBody>
              </Accordion>
            </li>
          );
        }
      )}
    </ul>
  );
}

const SubjectDetails = ({ teachers, display }) => {
  if (display)
    return (
      <div
        className={
          "bg-gray-50 px-4 tansition-opacity duration-300 animate-[fadeIn__0.3s_linear_1]"
        }
      >
        <Typography
          variant="small"
          color="blue-gray"
          className="min-w-44 font-normal text-sm pb-4"
        >
          Teachers taking this subject
        </Typography>
        <ul>
          <li className="flex items-center">
            <Typography
              variant="small"
              color="blue-gray"
              className="min-w-44 font-semibold text-xs"
            >
              Name
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="min-w-44 font-semibold text-xs"
            >
              Class Taught
            </Typography>
          </li>

          {teachers.map(({ name, classes_assigned }, index) => {
            const isLast = index === teachers.length - 1;
            const classes = isLast
              ? "flex items-center py-4 "
              : "flex items-center py-4  border-b border-blue-gray-50";
            return (
              <li key={index + name} className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="min-w-44 font-normal text-xs"
                >
                  {name}
                </Typography>
                <div className="min-w-44 flex gap-x-1">
                  {classes_assigned.map((class_name, index) => (
                    <Typography
                      key={index + class_name}
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-xs p-1 px-2 border border-blue-gray-100 bg-gray-100 rounded-full"
                    >
                      {class_name}
                    </Typography>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

const SubjectEditForm = ({ currentName, display }) => {
  if (display)
    return (
      <form
        className={
          "bg-gray-50 p-4 min-w-60 max-w-full flex gap-x-40 tansition-opacity duration-300 animate-[fadeIn__0.3s_linear_1]"
        }
      >
        <Input
          label={"Subject Name"}
          size="sm"
          variant="standard"
          className="placeholder:text-gray-400 text-base sm:text-sm sm:leading-6"
          color="blue"
          value={currentName ?? null}
        />
        <Button color="blue" size="sm" className="w-40">
          Save
        </Button>
      </form>
    );
};
