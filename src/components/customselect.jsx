import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";

export function Dropdown({ dropDownOption, allowSearch }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const menuRef = useRef(null);
  const menuListRef = useRef(null);
  const valueHolderRef = useRef(null);

  const [options, setOption] = useState([...dropDownOption]);
  const handleClickOutside = (event) => {
    if (menuRef?.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
      return true;
    }
  };

  const handleSelectOption = (e, key) => {
    const newOptions = options.map(({ value, checked }, index) => ({
      value,
      checked: key === index ? e.target.checked : checked,
    }));
    setOption(newOptions);

    const filteredSelected = newOptions.filter(
      (option) => option.checked === true
    );
    let selected = [];
    for (const option of filteredSelected) {
      selected.push(option.value);
    }
    selected =
      selected.length > 3
        ? selected
            .slice(0, 3)
            .join(", ")
            .concat(` ${selected.length - 3} and more`)
        : selected.join(", ");

    setSelectedOption(selected);
  };

  useEffect(() => {
    if (open) {
      menuListRef.current.style.width = `${menuRef.current.offsetWidth}px`;
    }

    if (!open) {
      const sortedOptions = [...options].sort((a, b) => {
        if (a.checked && !b.checked) return -1;
        if (!a.checked && b.checked) return 1;
        return 0;
      });

      setOption(sortedOptions);
    }
  }, [open]);

  return (
    <div className="relative w-full">
      <Menu
        open={open}
        dismiss={{
          itemPress: false,
          outsidePress: (e) => handleClickOutside(e),
        }}
        ref={menuRef}
      >
        <MenuHandler>
          <div className="relative ">
            <div
              onClick={() => setOpen(!open)}
              className="w-full h-11 disabled:cursor-not-allowed transition-all border-b text-sm pt-4 pb-1.5 border-blue-gray-200 hover:cursor-pointer"
            >
              <div
                ref={valueHolderRef}
                className="relative z-[10] flex items-center flex-wrap gap-x-2 w-[90%] overflow-auto"
              >
                <span className="inline-block text-nowrap">
                  {selectedOption}
                </span>
              </div>
            </div>
            <div
              class={`grid place-items-center absolute top-2/4 right-2 w-5 h-5 text-blue-gray-400 pointer-events-none duration-300 -translate-y-2/4 transition-all ${
                open ? "rotate-180" : "rotate-0"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <label
              className={`flex w-full h-full select-none pointer-events-none absolute font-normal transition-all -top-1.5 after:content[' '] after:block after:w-full after:absolute after:-bottom-1.5 left-0 after:border-b-2 after:transition-transform after:duration-300  text-sm text-blue-gray-500  ${
                open
                  ? "!text-blue-500 after:border-blue-500 leading-tight !text-[11px]"
                  : "after:scale-x-0 leading-[4.25]"
              }    ${
                selectedOption.length > 0 && !open
                  ? "!text-blue-gray-200 !leading-tight !text-[11px]"
                  : "leading-[4.25]"
              }`}
            >
              Current Class
            </label>
          </div>
        </MenuHandler>
        <MenuList
          ref={menuListRef}
          className={"relative z-[9999999999] shadow shadow-sm max-h-72"}
        >
          {allowSearch && (
            <Input
              label="Search"
              containerProps={{
                className: "mb-4",
              }}
            />
          )}
          {options.map((option, key) => (
            <MenuItem ref={menuListRef} key={key} className="py-2">
              {
                <label className="cursor-pointer flex gap-x-4">
                  <input
                    checked={option.checked}
                    onChange={(e) => {
                      handleSelectOption(e, key);
                    }}
                    type="checkbox"
                    className="checkbox border-blue-gray-400 checkbox-info checkbox-xs [--chkfg:white]"
                  />
                  <span className="label-text">{option.value}</span>
                </label>
              }
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
