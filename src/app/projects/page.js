import ProjectCard from "@components/ProjectCard"

const Projectspage = () => {
  return (
    <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4 my-4 mx-10">
            <ProjectCard src={"/assets/images/portfolio.png"} link={'https://portofolio-app-six.vercel.app/'} github={'https://github.com/PraktyDev/portofolioApp'} name='Portfolio App' description='Portfolio WebApp to showcase my skills and projects' />
            <ProjectCard src={"/assets/images/hastaimg.png"} link={'https://hatsta.vercel.app/'} github={'https://github.com/PraktyDev/hatsta'} name='Hasta' description='A marketplace or ecommerce store for sales of hats' />
            <ProjectCard src={"/assets/images/eventbg.png"} link={'https://event-app-cyan.vercel.app/'} github={'https://github.com/PraktyDev/eventApp'} name='Event App' description='An event app to showcase events and to rent event centers with other services' />
            <ProjectCard src={"/assets/images/attend.png"} link={'https://larva-attendance.vercel.app/'} github={'https://github.com/PraktyDev/larvaAttendance-frontend'} name='Attendance App' description='An attendance app to mark students attendance' />
            <ProjectCard src={"/assets/images/dashboard.png"} link={'https://ibtechexpo-reg-app.vercel.app/'} github={'https://github.com/PraktyDev/ibTechExpoRegApp'} name='Registration App' description='A dashboard app to register attendees at events. Featuring data table with search, sorting, filtering and pagination' />
        </div>
    </div>
  )
}

export default Projectspage