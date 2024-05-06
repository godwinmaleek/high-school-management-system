import React from "react";
import {
  Button,
  // Dialog,
  // DialogHeader,
  // DialogBody,
  // DialogFooter,
  Input,
  Radio,
  // Select,
  // Option,
} from "@material-tailwind/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
// import { Dropdown } from "../../../components/customselect";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Dropdown } from "../../../components/customselect";

export default function AddNewTeacherForm({ open, handleOpen }) {
  // const [open, handleOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[999999]"
        initialFocus={cancelButtonRef}
        onClose={handleOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-hidden">
          <div className="flex min-h-full w-full items-end justify-center  text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-y-scroll rounded-0 bg-white text-left shadow-xl transition-all  sm:my8 lg:w-[100%] lg:h-[100vh] sm:w-full sm:h-[100svh]">
                <div className="w-full pb-20">
                  <h3 className="font-bold text-lg px-10 py-5 sticky top-0 bg-white z-[99999999]">
                    Add New Teacher
                  </h3>

                  <NewTeacherForm />
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="bg-white fixed bottom-0 p-3 px-20 flex justify-end w-full">
              <Button
                variant="text"
                color="red"
                onClick={() => handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export function NewTeacherForm() {
  return (
    <form className="w-3/4 mx-auto space-y-12 divide-y divide-gray-300">
      <div className="">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Teacher's Information
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <Input
              label="First Name"
              size="lg"
              variant="standard"
              className="placeholder:text-gray-400 text-base sm:text-sm sm:leading-6"
              color="blue"
            />
          </div>

          <div className="sm:col-span-2">
            <Input
              label="Surname"
              size="lg"
              variant="standard"
              className="placeholder:text-gray-400 text-base sm:text-sm sm:leading-6"
              color="blue"
            />
          </div>
          <div className="sm:col-span-2">
            <Input
              label="Email Adress"
              size="lg"
              variant="standard"
              className="placeholder:text-gray-400 text-base sm:text-sm sm:leading-6"
              color="blue"
            />
          </div>
          <fieldset className="sm:col-span-full">
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Gender
            </legend>

            <div className="mt-6 flex gap-10">
              <Radio name="type" label="Male" color="blue" />
              <Radio name="type" label="Female" color="blue" />
            </div>
          </fieldset>
        </div>
      </div>

      <div className="pt-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Assign Subject
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <Dropdown
              dropDownOption={[
                { id: 1, checked: false, value: "Math" },
                { id: 2, checked: false, value: "Physics" },
                { id: 3, checked: false, value: "Chemistry" },
                { id: 4, checked: false, value: "Biology" },
                { id: 5, checked: false, value: "English" },
                { id: 6, checked: false, value: "French" },
                { id: 6, checked: false, value: "Literature" },
                { id: 6, checked: false, value: "Civic Education" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
                { id: 6, checked: false, value: "Basic Science" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Assign Class
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <Dropdown
              dropDownOption={[
                { id: 1, checked: false, value: "JSS 1" },
                { id: 2, checked: false, value: "JSS 2" },
                { id: 3, checked: false, value: "JSS 3" },
                { id: 4, checked: false, value: "SSS 1" },
                { id: 5, checked: false, value: "SSS 2" },
                { id: 6, checked: false, value: "SSS 3" },
              ]}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="flex items-center gap-3 bg-blue-400 mt-12"
            size="md"
            //   onClick={handleOpenForm}
          >
            <UserPlusIcon strokeWidth={1} className="h-4 w-4" /> Add Teacher
          </Button>
        </div>
      </div>
    </form>
  );
}
