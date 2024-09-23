import Input from "./Input";

export default function NewProject() {
  return (
    <>
      <div className="w-[36rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className=" text-stone-700 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button className=" px-6 py-2 rounded-lg bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-stone-200">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" />
          <Input label="Description" textarea />
          <Input label="Due date" />
        </div>
      </div>
    </>
  );
}
