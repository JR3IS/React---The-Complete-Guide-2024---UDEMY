import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [newProject, setNewProject] = useState(undefined);
  const [projects, setProjects] = useState([]);

  function openNewProject() {
    setNewProject(null);
  }
  function closeNewProject() {
    setNewProject(undefined);
  }
  function addProject(project) {
    // Append the new projects to the projects array and update state
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  function renderComponent() {
    if (newProject === undefined) {
      return <NoProjectSelected newProject={openNewProject} />;
    } else {
      return (
        <NewProject
          cancel={closeNewProject}
          projects={projects}
          addProject={addProject}
        />
      );
    }
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar newProject={openNewProject} projects={projects} />
      {renderComponent()}
    </main>
  );
}

export default App;
