import { ReactNode } from "react"
import Header from "../components/Header"


function Layout({children,active}:{children:ReactNode,active:string}) {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <Header active={active} />
      {children}
      </div>
  )
}

export default Layout