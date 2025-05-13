export default function Container({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="w-full h-screen flex flex-col bg-white p-3">
      {children}
    </div>
  )
}