// import { Card, CardBody } from "@material-tailwind/react";
import {
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function QuickLink() {
  const quicklinks = [
    {
      name: "Add Students",
      href: "/students",
      icon: UsersIcon,
      current: false,
    },

    {
      name: "Add Teachers",
      href: "/teachers",
      icon: BookOpenIcon,
      current: false,
    },
    {
      name: "Create Class",
      href: "/publishers",
      icon: PencilSquareIcon,
      current: false,
    },
    {
      name: "Create Subject",
      href: "/Subject",
      icon: ChatBubbleLeftRightIcon,
      current: false,
    },
  ];
  return (
    <Card>
      <ul className="w-full flex flex-col rounded-lg gap-2 bg-[#FDFDFD]">
        {quicklinks.map((link, key) => (
          <li className="flex w-full  rounded-md bg-white" key={key}>
            <div className="bg-blue-50 p-3 rounded-s-md">
              <link.icon
                className="h-5 w-5 shrink-0 text-blue-400"
                aria-hidden="true"
              />
            </div>
            <Link to={link.href} className="flex text-sm items-center pl-4">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
