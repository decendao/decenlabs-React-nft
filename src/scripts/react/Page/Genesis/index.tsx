import "./index.scss"
import "swiper/css"
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper";


export default function Genesis() {
  return (
    <div id="Pink Venom">
      <div className="background-list">
      </div>
      <img className="pre" src="/img/pre.png" alt=""/>
      <img className="next" src="/img/next.png" alt=""/>
      <img className="light1" src="/img/lg1.png" alt=""/>
      <img className="light2" src="/img/lg2.png" alt=""/>
      <Swiper
        className="list"
        slidesPerView={1}
        slidesPerGroup={1}
        modules={[Navigation]}
        navigation={{
          prevEl: "#genesis .pre",
          nextEl: "#genesis .next"
        }}
        breakpoints={{
          900: {
            slidesPerView: 2,
            slidesPerGroup: 2
          }
        }}
      >
        <SwiperSlide className="item left">
          <img src="/img/18.png" alt=""/>
          <div className="text">
            <h1>MEET<br/>GENESIS<br/>VDOLS</h1>
            <h2>
              Meet all our Virtual idols here.<br/>
              <br/>
              introduced during the Expansion phase.
            </h2>
            <h2>
              Meet all our Virtual idols here.<br/>
              There will be additional VDOL idols<br/>
              introduced during the Expansion phase.<br/>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item right">
          <img src="/img/16.png" alt=""/>
          <div className="text">
            <h1>GenesisVdols<br/>を参照</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item right">
          <img src="/img/18.png" alt=""/>
          <div className="text">
            <h1>GenesisVdols<br/>を参照</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}