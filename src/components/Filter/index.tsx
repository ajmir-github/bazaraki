import Category from "@/interface/Category";
import { FilterIcon, XIcon } from "lucide-react";
import { IconSize } from "../constants";
import Link from "next/link";

interface Props {
  searchParams: {
    keywords?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  };
  categories: Category[];
}

export default function Filter({ categories, searchParams }: Props) {
  return (
    <form
      className="grid gap-2 bg-base-100 shadow-lg p-2 rounded-xl lg:col-span-2"
      action={"/"}
    >
      <label className="form-control">
        <div className="label">
          <span className="label-text">Keywords</span>
        </div>

        <input
          type="text"
          placeholder="Any by default"
          className="input input-bordered "
          name="keywords"
          defaultValue={searchParams.keywords}
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Category</span>
        </div>

        <select
          className="select select-bordered"
          name="category"
          defaultValue={searchParams.category}
        >
          <option value={""}>Any</option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-2 grid-cols-2">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Min Price</span>
          </div>

          <input
            type="number"
            placeholder="Any by default"
            className="input input-bordered"
            name="minPrice"
            defaultValue={searchParams.minPrice}
          />
        </label>
        <label className="form-control ">
          <div className="label">
            <span className="label-text">Max Price</span>
          </div>

          <input
            type="number"
            placeholder="Any by default"
            className="input input-bordered  "
            name="maxPrice"
            defaultValue={searchParams.maxPrice}
          />
        </label>
      </div>

      <div className="flex justify-end gap-2">
        <Link href={"/"} className="btn btn-neutral">
          <XIcon size={IconSize.md} />
          Reset
        </Link>
        <button className="btn btn-primary" type="submit">
          <FilterIcon size={IconSize.md} />
          Filter
        </button>
      </div>
    </form>
  );
}
