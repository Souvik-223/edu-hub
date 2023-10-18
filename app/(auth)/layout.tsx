export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className="h-full flex justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500">
      {children}
    </div>
  )
}
