export default function Sidebar() {
  function handleClick() {
    alert("OPEN PROJECT CREATOR");
  }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        className="px-6 py-3 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-stone-200"
        onClick={handleClick}
      >
        + Add Project
      </button>
      <ul className="mt-8  bg-stone-900  text-stone-400">
        <li className="p-2 rounded-md flex justify-between my-2 hover:bg-stone-800 hover:text-stone-200">
          Project 1
        </li>
        <li className="p-2 rounded-md flex justify-between my-2 hover:bg-stone-800 hover:text-stone-200">
          Project 2
        </li>
        <li className="p-2 rounded-md flex justify-between my-2 hover:bg-stone-800 hover:text-stone-200">
          Project 3
        </li>
        <li className="p-2 rounded-md flex justify-between my-2 hover:bg-stone-800 hover:text-stone-200">
          Project 4
        </li>
      </ul>
    </aside>
  );
}
