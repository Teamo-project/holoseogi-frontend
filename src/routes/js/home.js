import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import home from "../css/home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [boardlist, setBoardlist] = useState([]);

  const getboardlist = async () => {
    try {
      const resp = await axios.get(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting"
      );
      setBoardlist(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getboardlist();
  }, []);

  // const hi = [
  //   { title: "HAHAHAHAHAHAHghghghghghgAH", idx: "5", category: "자유" },
  //   { title: "HIHIHIHIHHIiIIH", idx: "1", category: "정보" },
  //   { title: "hohohohohohohogogogogogogoho", idx: "2", category: "자유" },
  //   { title: "hahahahahahaha", idx: "7", category: "자유" },
  //   { title: "huhuhuhgugughu", idx: "13", category: "정보" },
  //   {
  //     title: "pupuppupupupuuppupupupuppupuppu",
  //     idx: "14",
  //     category: "구인구직",
  //   },
  //   {
  //     title: "mamamaaa",
  //     idx: "16",
  //     category: "구인구직",
  //   },
  //   { title: "momooooooooomooomomomommomommomo", idx: "18", category: "질문" },
  //   { title: "mimiiiimiijmiim", idx: "20", category: "질문" },
  //   {
  //     title: "lelellelelelleleleeleeel",
  //     idx: "24",
  //     category: "질문",
  //   },
  //   {
  //     title: "gigigigigigiggigigigiggigigiigigig",
  //     idx: "28",
  //     category: "자유",
  //   },
  //   { title: "dudududududududududduududududddu", idx: "4", category: "자유" },
  //   {
  //     title: "ririririrririririririririririr",
  //     idx: "19",
  //     category: "구인구직",
  //   },
  // ];

  let number_total = 0;
  let number_free = 0;
  let number_question = 0;
  let number_information = 0;
  let number_job = 0;

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          marginLeft: "230px",
          marginRight: "230px",
        }}
      >
        <Navigation />

        <div className={menu.menu}>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button style={{ color: "#66c109" }}>홈</Button>
            </Link>
          </div>
          <div className={menu.post}>
            <Link to="/posting" style={{ textDecoration: "none" }}>
              <Button>
                게시판 <i class="fa-solid fa-angle-down"></i>
              </Button>
            </Link>
            <ul className={menu.list}>
              <Link to="/posting" style={{ textDecoration: "none" }}>
                <li>전체 게시판</li>
              </Link>
              <Link
                to="/posting/category=자유"
                style={{ textDecoration: "none" }}
              >
                <li>자유 게시판</li>
              </Link>
              <Link
                to="/posting/category=질문"
                style={{ textDecoration: "none" }}
              >
                <li>질문 게시판</li>
              </Link>
              <Link
                to="/posting/category=정보"
                style={{ textDecoration: "none" }}
              >
                <li>정보 게시판</li>
              </Link>
              <Link
                to="/posting/category=구인구직"
                style={{ textDecoration: "none" }}
              >
                <li>구인/구직 게시판</li>
              </Link>
            </ul>
          </div>
          <div>
            <Link to="/program" style={{ textDecoration: "none" }}>
              <Button>프로그램</Button>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>멘토멘티신청</Button>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>문의</Button>
            </Link>
          </div>
        </div>

        <div className={home.program}>
          <div className={home.program_top}>
            <p>정부 지원 프로그램</p>
            <Link to="/program" style={{ textDecoration: "none" }}>
              <Button>더보기</Button>
            </Link>
          </div>
          <div className={home.program_pro}>
            <a
              href="https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=374&act=&searchValueList2=1&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  padding: "16px 10px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    paddingBottom: "10px",
                    borderBottom: "1px solid lightgray",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: "12px",
                      fontWeight: "700",
                      lineHeight: "14px",
                      marginLeft: "14px",
                      border: "1px solid #66c109",
                      color: "#66C109",
                      fontSize: "0.8rem",
                      width: "128px",
                      height: "24px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    자립 지원 / 기타
                  </div>
                  <div
                    style={{
                      width: "114px",
                      height: "14px",
                      color: "#ADADAD",
                      fontSize: "12px",
                      marginRight: "10px",
                    }}
                  >
                    마감일자 2023.08.10
                  </div>
                </div>

                <div
                  style={{
                    width: "400px",
                    height: "50px",
                    padding: "22px 20px 0px",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  바람개비서포터즈 14기 3차모집
                </div>
                <div
                  style={{
                    width: "320px",
                    height: "40px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    fontSize: "1rem",
                    padding: "0px 20px",
                  }}
                >
                  직종별 전문가 멘토링 및 지역별 모임, 방문교육이 있습니다.
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    fontSize: "0.8rem",
                    top: "208px",
                  }}
                >
                  <div
                    style={{
                      paddingLeft: "18px",
                      borderRight: "2px solid gray",
                      paddingRight: "10px",
                    }}
                  >
                    서울 자립지원 전담기관
                  </div>
                  <div style={{ marginLeft: "7px" }}>전국</div>
                </div>
              </div>
            </a>
            <a
              href="https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=377&act=&searchValueList2=1&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=1"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  padding: "16px 10px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    paddingBottom: "10px",
                    borderBottom: "1px solid lightgray",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: "12px",
                      fontWeight: "700",
                      lineHeight: "14px",
                      marginLeft: "14px",
                      border: "1px solid #66c109",
                      color: "#66C109",
                      fontSize: "0.8rem",
                      width: "128px",
                      height: "24px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    자립 지원 / 진학
                  </div>
                  <div
                    style={{
                      width: "114px",
                      height: "14px",
                      color: "#ADADAD",
                      fontSize: "12px",
                      marginRight: "10px",
                    }}
                  >
                    마감 일자 2023.08.13
                  </div>
                </div>

                <div
                  style={{
                    width: "400px",
                    height: "50px",
                    padding: "22px 20px 0px",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                >
                  IBK 자립준비청년 장학금취업지원
                </div>
                <div
                  style={{
                    width: "320px",
                    height: "40px",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    fontSize: "1rem",
                    padding: "0px 20px",
                  }}
                >
                  장학금 및 금융경제교육, 취업 컨설팅, 생활법률교육 등의
                  지원사업을 하고있습니다.
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    fontSize: "0.8rem",
                    top: "208px",
                  }}
                >
                  <div
                    style={{
                      paddingLeft: "18px",
                      borderRight: "2px solid gray",
                      paddingRight: "10px",
                    }}
                  >
                    IBK 기업은행
                  </div>
                  <div style={{ marginLeft: "7px" }}>전국</div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className={home.board_total}>
          <div className={home.board_top}>
            <p>소통 게시판</p>
            <Link to="/posting" style={{ textDecoration: "none" }}>
              <Button>더보기</Button>
            </Link>
          </div>
          <div className={home.board}>
            <div className={home.full_board}>
              <div style={{ fontSize: "16px", fontWeight: "700" }}>전체</div>
              {boardlist.map((v) => {
                if (number_total < 10) {
                  number_total = number_total + 1;
                  return (
                    <div
                      style={{
                        width: "285px",
                        Left: "4px",
                        marginTop: "5px",
                        height: "33px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {v.title}
                    </div>
                  );
                }
              })}
            </div>
            <div className={home.separate_board}>
              <div className={home.separate_board_firstline}>
                <div className={home.separate_board_part}>
                  <Link
                    to="/posting/category=자유"
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      style={{
                        paddingLeft: "4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginLeft: "10px" }}>자유 게시판</span>
                    </p>
                  </Link>
                  {boardlist.map((v) => {
                    if (number_free < 4 && v.category === "자유") {
                      number_free = number_free + 1;
                      return (
                        <div>
                          <div
                            style={{
                              marginLeft: "10px",
                              width: "255px",
                              height: "42px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {v.title}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className={home.separate_board_part}>
                  <Link
                    to="/posting/category=질문"
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      style={{
                        paddingLeft: "4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginLeft: "10px" }}>질문 게시판</span>
                    </p>
                  </Link>
                  {boardlist.map((v) => {
                    if (number_question < 4 && v.category === "질문") {
                      number_question = number_question + 1;
                      return (
                        <div>
                          <div
                            style={{
                              marginLeft: "10px",
                              width: "255px",
                              height: "42px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {v.title}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className={home.separate_board_secondline}>
                <div className={home.separate_board_part}>
                  <Link
                    to="/posting/category=정보"
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      style={{
                        paddingLeft: "4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginLeft: "10px" }}>정보 게시판</span>
                    </p>
                  </Link>
                  {boardlist.map((v) => {
                    if (number_information < 4 && v.category === "정보") {
                      number_information = number_information + 1;
                      return (
                        <div>
                          <div
                            style={{
                              marginLeft: "10px",
                              width: "255px",
                              height: "42px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {v.title}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
                <div className={home.separate_board_part}>
                  <Link
                    to="/posting/category=구인구직"
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      style={{
                        paddingLeft: "4px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginLeft: "10px" }}>
                        구인/구직 게시판
                      </span>
                    </p>
                  </Link>
                  {boardlist.map((v) => {
                    if (number_job < 4 && v.category === "구인구직") {
                      number_job = number_job + 1;
                      return (
                        <div>
                          <div
                            style={{
                              marginLeft: "10px",
                              width: "255px",
                              height: "42px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {v.title}
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={home.footer}>
        <div className={home.footer_left}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>홀로서기</h2>
          </Link>
          <p>청소년 자립 지원 공공 서비스</p>
          <div>연락처 : 010-4470-2175</div>
          <div>이메일 : chandelier7642@gmail.com</div>
          <div>주소 : 세종대학교 학생회관 B123</div>
        </div>
        <div className={home.footer_right}>
          <div className={home.footer_agency}>
            <h4>협업 정부 기관</h4>
            <div>여성가족부</div>
            <div>청소년자립지원단</div>
            <div>한국청소년상담복지개발원</div>
            <div>한국청소년정책연구원</div>
            <div>한국청소년활동진흥원</div>
          </div>
          <div className={home.footer_sponsor}>
            <h4>후원사</h4>
            <div>삼성재단</div>
            <div>LG재단</div>
            <div>카카오</div>
          </div>
          <div className={home.footer_spon}>
            <h4>후원</h4>
            <div>후원 문의</div>
            <div>1644-1211</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
