import Input from "./Input";
import { useRef } from "react";

export default function NewProject({ cancel, addProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    // Create an object to store the input data
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    // Check if there isn't any empty field before adding to projects
    if (project.title && project.description && project.dueDate) {
      // Call the function to store the data in the projects array
      addProject(project);
    }
    // Clear the input boxes
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <>
      <div className="w-[36rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className=" text-stone-700 hover:text-stone-950"
              onClick={cancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" px-6 py-2 rounded-lg bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-stone-200"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input label="Due date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
