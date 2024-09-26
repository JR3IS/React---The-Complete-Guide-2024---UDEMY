import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState, useRef } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [state, setState] = useState({
    page: undefined,
    projects: [],
    selectedProjectIndex: null,
    tasks: [],
  });

  const inputTask = useRef();

  function openNewProject() {
    setState((prevState) => ({ ...prevState, page: null }));
  }
  function closeNewProject() {
    setState((prevState) => ({ ...prevState, page: undefined }));
  }
  function addProject(project) {
    // Append the new projects to the projects array and update state
    setState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, project],
    }));
  }
  function selectProject(index) {
    setState((prevState) => ({
      ...prevState,
      selectedProjectIndex: index,
      page: "selected",
    }));
  }
  function deleteProject(index) {
    setState((prevState) => ({
      ...prevState,
      projects: prevState.projects.filter((_, i) => i !== index),
      page: undefined, // Return to NoProjectSelected page
      selectedProjectIndex: null,
    }));
  }

  function addTask() {
    setState((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, inputTask.current.value],
    }));
    // Clear input after submition
    inputTask.current.value = "";
    console.log(state.tasks);
  }

  function renderComponent() {
    if (state.page === undefined) {
      return <NoProjectSelected newProject={openNewProject} />;
    } else if (state.page === null) {
      return (
        <NewProject
          cancel={closeNewProject}
          projects={state.projects}
          addProject={addProject}
        />
      );
    } else {
      return (
        <SelectedProject
          projects={state.projects}
          index={state.selectedProjectIndex}
          deleteProject={deleteProject}
          ref={inputTask}
          addTask={addTask}
        />
      );
    }
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        newProject={openNewProject}
        projects={state.projects}
        selectProject={selectProject}
      />
      {renderComponent()}
    </main>
  );
}

export default App;
