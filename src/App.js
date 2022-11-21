import React, { useState, useContext, useEffect, useRef } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useNavigate} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';




function fetchData() {
  const promise = 
  fetch(`https://api.odcloud.kr/api/15107763/v1/uddi:cf042d2e-c1bf-4826-af91-af8df5a1fc5e?page=1&perPage=10&serviceKey=UiRloezf9%2FINUdrGSr3QZGzCWyGY2r%2BjxIyV804Ycmydn7rqTp7G8svIcQxx4%2B2EKSnq%2FH%2FPe%2BVIr54epBMP0w%3D%3D`)
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  })

  return promise;
}

export default App;


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [subscribers, setSubscribers] = useState(false);  //좋아요버튼
  const [subscribe, setSubscribe] = useState(false);   //구독버튼

  let [title] = useState("제목");
  let [modal, Setmodal] = useState(false);
  let [input, Change] = useState("");
  

  useEffect(() => {
    fetchData()
    .then(data => {
      setData(data)
    })
    .catch(error => {
      setError(error)
    })
    .finally(() => setIsLoaded(true))
  }, [])

  console.log(data);

  

  if (error) {
    return <p>failted to fetch</p>
  }
  if (!isLoaded) {
    return <p className="motion_loding on"></p>
  }
  
  return (
    <>
    <div style={{margin: "1rem"}}>
      

{/* 상단 메뉴 */}
<div>
  <Btns />
</div>

<div>
  <h2>강원도 애견동반 여행</h2>
        <img className="img_dog" src ="https://raw.githubusercontent.com/jinsDevelopment/myDog/main/static/img/banner-dog.png"/>
</div>


{/* 카카오 지도 */}
<div className="mapi">
  <h1>반려동물 동반 가능</h1>
  <KakaoMap />
</div>
<br></br>

{/* 지역별 데이터 */}
<div className="map_meun">
  <h1>지역별 동반 가능한 장소</h1>

      <div className="cont_meun">
      <container>
          <img src='https://image.ajunews.com/content/image/2015/04/09/20150409183731768439.jpg'/>
        <div>
        <p>지역: {data.data[0]["지역"]} ({data.data[0]["구분"]})</p>
        <p>펜션: {data.data[0]["장소"]}</p>
        <p>주소: {data.data[0]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://image.kkday.com/v2/image/get/h_650%2Cc_fit/s1.kkday.com/product_102980/20201209080441_tF9Oe/jpg'/>
        <div>
        <p>지역: {data.data[1]["지역"]} ({data.data[1]["구분"]})</p>
        <p>펜션: {data.data[1]["장소"]}</p>
        <p>주소: {data.data[1]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://th.bing.com/th/id/OIP.V1ZYi86846MIz3UfyXMDcgHaE8?w=284&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
        <div>
        <p>지역: {data.data[2]["지역"]} ({data.data[2]["구분"]})</p>
        <p>펜션: {data.data[2]["장소"]}</p>
        <p>주소: {data.data[2]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/315534976_467197158846586_5013992006222496029_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Yqhj9fjbBbIAX_0zJ80&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCK3n4NxscjTBlbtYPwXXAMy-7ZU32Bsp8Tawfd-NRFpA&oe=6377C2EB'/>
        <div>
        <p>지역: {data.data[3]["지역"]} ({data.data[3]["구분"]})</p>
        <p>펜션: {data.data[3]["장소"]}</p>
        <p>주소: {data.data[3]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://th.bing.com/th/id/R.e8099a403ff7abafce40b960f46c14b4?rik=RoRvxZDdWZ4k0g&riu=http%3a%2f%2fblogthumb2.naver.net%2f20150817_162%2fsostyle131_1439785853461K4JdJ_JPEG%2fP20150815_132240190_37A7B95E-8133-49F8-B6B8-1A0A1F5C27B6.JPG%3ftype%3dw2&ehk=kfuztOFOKiBp22VGB34ARvFHjLepJ3GNcSG1JvU64ZM%3d&risl=&pid=ImgRaw&r=0'/>
        <div>
        <p>지역: {data.data[4]["지역"]} ({data.data[4]["구분"]})</p>
        <p>펜션: {data.data[4]["장소"]}</p>
        <p>주소: {data.data[4]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://ldb-phinf.pstatic.net/20200528_127/1590636665346tzTxU_JPEG/Ye93BvtrxulCdGeKimBDisKX.jpg'/>
        <div>
        <p>지역: {data.data[5]["지역"]} ({data.data[5]["구분"]})</p>
        <p>펜션: {data.data[5]["장소"]}</p>
        <p>주소: {data.data[5]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://ldb-phinf.pstatic.net/20151125_65/1448423878178J7pfs_JPEG/image.JPEG'/>
        <div>
        <p>지역: {data.data[6]["지역"]} ({data.data[6]["구분"]})</p>
        <p>펜션: {data.data[6]["장소"]}</p>
        <p>주소: {data.data[6]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://ldb-phinf.pstatic.net/20190501_253/1556675835575EkRrf_JPEG/5FXjl5lW48zExIXIVi7S6zgh.jpg'/>
        <div>
        <p>지역: {data.data[7]["지역"]} ({data.data[7]["구분"]})</p>
        <p>펜션: {data.data[7]["장소"]}</p>
        <p>주소: {data.data[7]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA3MTFfMTg4%2FMDAxNDk5NzA1Njk0NDQ3.Vgl_0eD66aSWMh2kuYHBOKhaU4-qbRdAwBQJmCv5l3kg.WQfUHLSOee5dOII5gyyKs0DzkKriVYgGaTVhoKTZJDcg.JPEG.leo5420%2FNaverBlog_20170711_015454_47.jpg&type=a340'/>
        <div>
        <p>지역: {data.data[8]["지역"]} ({data.data[8]["구분"]})</p>
        <p>펜션: {data.data[8]["장소"]}</p>
        <p>주소: {data.data[8]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
      <div className="cont_meun">
      <container>
          <img src='https://ldb-phinf.pstatic.net/20201108_41/1604841792491zORme_JPEG/33.jpg'/>
        <div>
        <p>지역: {data.data[9]["지역"]} ({data.data[9]["구분"]})</p>
        <p>펜션: {data.data[9]["장소"]}</p>
        <p>주소: {data.data[9]["주소"]}</p>
        <div>
          <button className="btn_a" img="heart" onClick={() => setSubscribers(!subscribers)}>
            {!subscribers ? "좋아요" : "취소"}
          </button>
          <button className="btn_b" onClick={() => setSubscribe(!subscribe)}>
            {!subscribe ? "구독하기" : "구독중"}
          </button>
        </div>
        </div>
        </container>
      </div>
  </div>
  <br></br>

  {/* 게시판 */}
  <h1>게시판</h1>
    <div className="Sec1">
      <div className="input_btn">
        <input
          type="text"
          onChange={(e) => {
            Change(e.target.value);
            console.log(title);
          }}
          className="qnaInput"
        ></input>
        <button onClick={() => {}} className="cursor">등록하기</button>
      </div>
      <div className="box">
        <div className="list" onClick={() => {
            Setmodal(!modal);
          }}>
            <container>
            <img className="i_con" src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png'></img>
            <div>
              <p> {title} </p>
              <p> 경치가 좋고 산책나가기 좋았어요! </p>
              <p>{modal == true ? <Modal /> : null}</p>
            </div>
          </container>
        </div>
        <div className="list" onClick={() => {
            Setmodal(!modal);
          }}>
            <container>
            <img className="i_con" src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png'></img>
            <div>
              <p> {title} </p>
              <p> 경치가 좋고 산책나가기 좋았어요! </p>
              <p>{modal == true ? <Modal /> : null}</p>
            </div>
          </container>
        </div>
        <div className="list" onClick={() => {
            Setmodal(!modal);
          }}>
          <container>
            <img className="i_con" src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png'></img>
            <div>
              <p> {title} </p>
              <p> 경치가 좋고 산책나가기 좋았어요! </p>
              <p>{modal == true ? <Modal /> : null}</p>
            </div>
          </container>
        </div>
        <div className="list" onClick={() => {
            Setmodal(!modal);
          }}
        >
          <container>
            <img className="i_con" src='https://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png'></img>
            <div>
              <p> {title} </p>
              <p> 경치가 좋고 산책나가기 좋았어요! </p>
              <p>{modal == true ? <Modal /> : null}</p>
            </div>
          </container>
        </div>
      </div>
    </div>
    <br></br>

    {/* 하단 이미지 */}
    <div className="footer_img">
      <img src="https://health.chosun.com/site/data/img_dir/2021/04/09/2021040902341_0.jpg"/>
    </div>
  

  </div>
    </>
  )

}



function Btns(){  // 메뉴 버튼
  
  return(
    <nav className="herder">
      <div className="home_btns">
        <ul>
          <li><a href="#" onClick={() => alert('Click!')}>게시판</a></li>
          <li><a href="#" onClick={() => alert('Click!')}>상세정보</a></li>
          <li><a href="#" onClick={() => alert('Click!')}>로그인</a></li>
        </ul>
      </div>
    </nav>  
  )
}


function KakaoMap(){ // 카카오 지도

  const positions = [
    {title: "쏠리오", latlng: {lat:'37.7918451', lng: '127.646125'} },
    {title: "남이섬 호텔정관루", latlng: {lat:'37.7900782', lng: '127.5262228'}},
    {title: "헤이춘천", latlng: {lat:'37.8747472', lng: '127.7414712'}},
    {title: "비안단테 펜션", latlng: {lat:'37.9025144', lng: '127.7001077'}},
    {title: "춘천숲자연휴양림캠핑장", latlng: {lat:'37.7476740', lng: '127.7447880'}},
    {title: "해피리버펜션", latlng: {lat:'37.6828665', lng: '127.6496666'}},
    {title: "아름다운집", latlng: {lat:'37.8289347', lng: '127.6028404'}},
    {title: "리버웍펜션", latlng: {lat:'37.8286939', lng: '127.6043864'}},
    {title: "하늘풍경펜션", latlng: {lat:'37.7932188', lng: '127.6259607'}},
    {title: "수한예", latlng: {lat:'37.9050121', lng: '127.7536930'}},
  ]


  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.8813739,
        lng: 127.7300034,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "450px",
        borderRadius: "20px",
      }}
      level={9} // 지도의 확대 레벨
    >
      {positions.map((position, index) => ( //마커를 표시한 지도
        <MapMarker
          key={`${position.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          text={position.content}
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            }, // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}
    </Map>
  )
}

function Modal() {
  return (
    <div className="modal">
      <p> 좋아요와 즐겨찾기 부탁드려요~ </p>
    </div>
  );
}

