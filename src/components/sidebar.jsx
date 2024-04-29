import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: Squares2X2Icon,
    current: true,
  },
  { name: "Students", href: "/students", icon: UsersIcon, current: false },

  {
    name: "Teachers",
    href: "/teachers",
    icon: BookOpenIcon,
    current: false,
  },
  {
    name: "Class",
    href: "/class",
    icon: PencilSquareIcon,
    current: false,
  },
  {
    name: "Subjects",
    href: "/subjects",
    icon: ChatBubbleLeftRightIcon,
    current: false,
  },
  {
    name: "Session",
    href: "/session",
    icon: ChatBubbleLeftRightIcon,
    current: false,
  },
  {
    name: "Result",
    href: "/result",
    icon: SquaresPlusIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white pt-10">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-20 w-18"
                      src="/images/Logo.png"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col mt-12">
                    <ul className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul className=" space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <CustomNavLink item={item} />
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 pb-4">
          <div className="flex items-center justify-center w-full mt-12 object-cover">
            <img
              className="h-20 w-18"
              src="/images/Logo.png"
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="space-y-1 mt-12">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <CustomNavLink item={item} />
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

const CustomNavLink = ({ item }) => {
  const resolved = useResolvedPath(item.href);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <NavLink
      to={item.href}
      className={classNames(
        match
          ? "bg-gradient-to-r from-blue-100 to-slate-0 text-blue-400 border-r-2"
          : "text-gray-600 hover:text-blue-400 hover:bg-gradient-to-r from-blue-100 to-slate-0 hover:border-r-2",
        "group flex gap-x-3  p-2 pl-6 text-sm leading-6 font-semibold border-blue-400"
      )}
    >
      <item.icon
        className={classNames(
          match ? "text-blue-400" : "text-gray-400 group-hover:text-blue-400",
          "h-6 w-6 shrink-0"
        )}
        aria-hidden="true"
      />
      {item.name}
    </NavLink>
  );
};
