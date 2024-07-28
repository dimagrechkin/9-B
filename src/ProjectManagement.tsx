import ProjectOverview from './ProjectOverview'
import TaskTimeline from './TaskTimeline'
import Calendar from './Calendar'
import Analytics from './Analytics'

const ProjectManagement: React.FC = () => {
  return (
    <div className="p-16 mt-5 bg-zinc-800 rounded-[30px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <ProjectOverview />
        <TaskTimeline />
        <Calendar />
        <Analytics />
      </div>
    </div>
  )
}

export default ProjectManagement
