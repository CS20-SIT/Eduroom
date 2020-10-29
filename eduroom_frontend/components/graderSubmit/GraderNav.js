import style from "../../styles/graderSubmit/graderNav"
import Link from "next/link"
import { useRouter } from "next/router"

const GraderNav = () => {
  const router = useRouter()
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
          <div
            className="text"
            onClick={() => router.push("/graderSystem/profile")}
          >
            <span className="profile">
              Profile
              <img src="../../images/graderSubmit/profile.svg" />
            </span>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  )
}

export default GraderNav
