import { FilterIcon } from "lucide-react";

export default function SearchHero() {
  return (
    <div className="collapse bg-base-200 collapse-arrow overflow-hidden">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <span className="flex items-center gap-2">
          <FilterIcon size={16} /> Search and Filter
        </span>
      </div>
      <div className="collapse-content">
        <form className="grid md:grid-cols-2 gap-4" action={"/"}>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Keywords</span>
            </div>

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered "
              name="keywords"
            />
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Category</span>
            </div>

            <select className="select select-bordered" name="category">
              <option selected>Any</option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Min Price</span>
            </div>

            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered"
              name="min-price"
            />
          </label>
          <label className="form-control ">
            <div className="label">
              <span className="label-text">Max Price</span>
            </div>

            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered  "
              name="max-price"
            />
          </label>

          <div className="flex justify-end gap-2 md:col-span-2">
            <button className="btn btn-neutral" type="reset">
              <FilterIcon />
              Reset
            </button>
            <button className="btn btn-primary" type="submit">
              <FilterIcon />
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
