export default function Container({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="w-full h-screen flex flex-col bg-white">
      {children}
    </div>
  )
}