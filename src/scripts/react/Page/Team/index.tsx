import "./index.scss"

export default function Team() {
  return (
    <div id="team">
      <div className="h1s">
        <h1>团队简介</h1>
        <h1>TEAM PROFILE</h1>
        <h1>チームプロフィール</h1>
      </div>
      <h2>
        VDOL is the first virtual modeling agency in the metaverse created for NFT entrepreneurs with earnings possibilities of holding NFTs instead of flipping.
      </h2>
      <div className="list">
        <div className="item">
          <div className="img" style={{
            backgroundImage: "url(/img/t1.png)"
          }}/>
          <h1>JAMES</h1>
          <h2>VDOL is the first</h2>
        </div>
        <div className="item">
          <div className="img" style={{
            backgroundImage: "url(/img/t2.png)"
          }}/>
          <h1>TOM</h1>
          <h2>VDOL is the first</h2>
        </div>
        <div className="item">
          <div className="img" style={{
            backgroundImage: "url(/img/t3.png)"
          }}/>
          <h1>KOBE</h1>
          <h2>VDOL is the first</h2>
        </div>
        <div className="item">
          <div className="img" style={{
            backgroundImage: "url(/img/t4.png)"
          }}/>
          <h1>DICK</h1>
          <h2>VDOL is the first</h2>
        </div>
      </div>
    </div>
  )
}