import Sidebar from "./_components/Sidebar"
import Navbar from "./_components/Navbar"


export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="h-full flex">
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="h-full pt-[80px]">
      {children}
      </main>
    </div>
  )
}
