import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { filters } from "../../data/filter";
import { setFilter } from "../../store/filter/slice";

type FilterTypesProps = {};
const FilterTypes: React.FC<FilterTypesProps> = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.filter);
  return (
    <div className="w-full flex gap-[40px] py-8 pl-4 md:pl-10 overflow-x-auto">
      {filters.map(({ id, label, type }) => (
        <div
          key={id}
          className={`px-8 py-2 whitespace-nowrap rounded-md shadow-md shadow-slate-500 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-slate-700 hover:bg-slate-100 font-semibold tracking-wider ${type === filter ? "shadow-slate-700 bg-slate-200 -translate-y-1 " : ""} `}
          onClick={() => dispatch(setFilter(type))}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
export default FilterTypes;
