import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    page: undefined,
    projects: [],
  });

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
    }
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar newProject={openNewProject} projects={state.projects} />
      {renderComponent()}
    </main>
  );
}

export default App;
