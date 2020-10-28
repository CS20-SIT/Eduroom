import GraderNav from "./GraderNav"
import style from "../../styles/graderSubmit/layout"
import GeneralTemplate from "../template/general"

const Layout = (props) => {
  return (
    <GeneralTemplate>
      <div>
        <GraderNav></GraderNav>
        {props.children}
        <style jsx>{style}</style>
      </div>
    </GeneralTemplate>
  )
}

export default Layout
