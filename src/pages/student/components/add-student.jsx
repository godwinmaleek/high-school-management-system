import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Radio,
  Select,
  Option,
} from "@material-tailwind/react";
import { UserCircleIcon, UserPlusIcon } from "@heroicons/react/24/solid";

export function AddStudentForm({ open, handleOpen }) {
  return (
    <Dialog size="xxl" open={open} handler={handleOpen}>
      <DialogHeader className="w-3/4 mx-auto text-2xl  mt-10">
        Add a new student
      </DialogHeader>
      <DialogBody className="h-[42rem] overflow-scroll px-10">
        <NewStudentForm />
      </DialogBody>
      <DialogFooter className="overflow-x-hidden">
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export function NewStudentForm() {
  return (
    <form className="w-3/4 mx-auto space-y-12 divide-y divide-gray-300">
      <div className="">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Student Information
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
              label="Other name"
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

          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon
                className="h-12 w-12 text-gray-300"
                aria-hidden="true"
              />
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Class Information
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <Select variant="standard" label="Current Class" color="blue">
              <Option> JSS 1</Option>
              <Option> JSS 2</Option>
              <Option> JSS 3</Option>
              <Option> SSS 1</Option>
              <Option> SSS 2</Option>
              <Option> SSS 3</Option>
            </Select>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Guardian Information
        </h2>

        <p>Information of the student's parent or a guardian</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <Input
              className="placeholder:text-gray-400 text-base sm:text-sm sm:leading-6"
              label="Full Name"
              size="lg"
              variant="standard"
              color="blue"
              type="text"
            />
          </div>

          <div className="sm:col-span-2 relative">
            <Input
              className="placeholder:text-gray-400 text-base sm:text-sm sm:leading-6"
              label="Phone Number"
              size="lg"
              variant="standard"
              color="blue"
              type="tel"
              maxLength={11}
            />
          </div>

          <div className="sm:col-span-2">
            <Select
              variant="standard"
              label="Relationship"
              color="blue"
              size="lg"
            >
              <Option> Parent</Option>
              <Option> Guardian</Option>
              <Option> Sibling</Option>
            </Select>
          </div>

          <div className="sm:col-span-4">
            <Input
              className="placeholder:text-gray-400 text-base sm:text-sm sm:leading-6"
              label="Home or Work Address"
              size="lg"
              variant="standard"
              color="blue"
              type="text"
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
            <UserPlusIcon strokeWidth={1} className="h-4 w-4" /> Add student
          </Button>
        </div>
      </div>
    </form>
  );
}
