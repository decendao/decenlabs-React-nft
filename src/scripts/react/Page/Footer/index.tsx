import "./index.scss"
export default function Footer() {
  return (
    <div id="footer">
      <img src="/img/logo.png" className="logo"/>
      <div className="list">
        <a className="item" href="">
          <img src="/img/f1.png" alt=""/>
        </a>
        <a className="item" href="">
          <img src="/img/f2.png" alt=""/>
        </a>
        <a className="item" href="">
          <img src="/img/f3.png" alt=""/>
        </a>
      </div>
      <h2>2022 VDOL Verse. All Rights Reserved.</h2>
      <div className="fixed-box">
        <p>
          <span>Join us on</span>
          <a href="#" target="_blank">
          <img src="/img/rb/twitter_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/discord_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/ins_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/tikok_mini.png" alt=""/></a>
          <a href="#" target="_blank">
          <img src="/img/rb/opensea_mini.png" alt=""/></a>
        </p>
        <p>©2021-22, VDOL. All rights reserved</p>
        <p>For inquiries, email service@youwant.io</p>
      </div>
    </div>
  )
}