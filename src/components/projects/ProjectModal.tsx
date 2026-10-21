import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import type { Project } from '../../types/project';
import { getProjectMedia } from '../../utils/projects';
import { safeExternalUrl } from '../../utils/links';
import { ProjectGallery } from './ProjectGallery';

export function ProjectModal({ project, onClose, opener }: { project: Project; onClose: () => void; opener: HTMLElement | null }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);
  const media = getProjectMedia(project);
  const demo = safeExternalUrl(project.links?.demo);
  const github = safeExternalUrl(project.links?.github);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, [opener]);

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal-panel">
        <div className="modal-head">
          <div>
            <p className="eyebrow">{project.category.toUpperCase()} · {project.year} {project.isSample ? '· SAMPLE PROJECT' : ''}</p>
            <h2 id="project-dialog-title">{project.title}</h2>
            <p id="project-dialog-description">{project.description}</p>
          </div>
          <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Close project details"><X size={20}/></button>
        </div>
        <ProjectGallery media={media} index={index} onIndex={setIndex}/>
        <div className="modal-details">
          <div><h3>THE CHALLENGE</h3><p>{project.problem}</p></div>
          <div><h3>THE APPROACH</h3><p>{project.solution}</p></div>
        </div>
        <div className="modal-bottom">
          <div className="modal-stack" aria-label="Technology stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          {(demo || github) && <div className="modal-links">
            {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="button button-dark">Live Demo <ArrowUpRight size={15}/></a>}
            {github && <a href={github} target="_blank" rel="noopener noreferrer" className="button button-light"><Github size={15}/> Source Code</a>}
          </div>}
        </div>
      </div>
    </dialog>
  );
}
