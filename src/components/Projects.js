import React, { useState } from "react";
import { useProjectsValue, useSelectedProjectValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectid}
        data-doc-id={project.docId}
        data-testid="project-action-parent"
        className={
          active === project.projectid
            ? "active sidebar__project"
            : "sidebar__project"
        }
      >
        <div
          data-testid="project-action"
          role="button"
          aria-label={`Select ${project.name} as the task project`}
          tabIndex={0}
          onKeyDown={() => {
            setActive(project.projectid);
            setSelectedProject(project.projectid);
          }}
          onClick={() => {
            setActive(project.projectid);
            setSelectedProject(project.projectid);
          }}
        >
          <IndividualProject project={project} />
        </div>
        {/* {("project", JSON.stringify(project))} */}
      </li>
    ))
  );
};
