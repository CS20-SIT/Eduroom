import style from "../../styles/graderSubmit/graderNav"
import Link from "next/link"

const GraderNav = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div className="nav">
        <div className="link home">
          <Link href="/graderSystem">Home</Link>
        </div>
        <div className="link problems">
          <Link href="/graderSystem/problems">Problems</Link>
        </div>
        <div className="link contents">
          <Link href="/graderSystem/contests">Contests</Link>
        </div>
        <div className="link ranks">
          <Link href="/graderSystem/ranks">Ranks</Link>
        </div>
        <div className="link">
          <span className="profile">
            <Link href="/graderSystem/profile">Profile</Link>
          </span>
          <Link href="/graderSystem/profile">
            <img src="../../images/graderSubmit/profile.svg" />
          </Link>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default GraderNav
