const Features = () => {
  return (
    <div className="flex my-2 gap-5 items-center">
        <p className="text-white">Features: </p>
        <div className="flex gap-10 justify-around text-white">
            <p className="py-0.5 rounded-sm text-xs px-2 bg-slate-950">Responsive Design</p>
            <p className="py-0.5 rounded-sm text-xs px-2 bg-slate-950">Data Fetching</p>
            <p className="py-0.5 rounded-sm text-xs px-2 bg-slate-950">Streaming</p>
        </div>
    </div>
  )
}

export default Features