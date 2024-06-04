import ProjectCard from "@components/ProjectCard"

const Projectspage = () => {
  return (
    <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 my-4 mx-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default Projectspage