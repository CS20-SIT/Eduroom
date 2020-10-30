import GraderNav from "./GraderNav"
import style from "../../styles/graderSubmit/layout"

const Layout = (props) => {
  return (
    <div>
      <GraderNav></GraderNav>
      {props.children}
      <style jsx>{style}</style>
    </div>
  )
}

export default Layout
