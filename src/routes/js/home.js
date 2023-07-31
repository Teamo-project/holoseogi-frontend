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
    const resp = await (
      await axios.get(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting"
      )
    ).data;
    setBoardlist(resp.data);
  };

  useEffect(() => {
    getboardlist();
  }, []);

  const hi = [
    { title: "HAHAHAHAHAHAHghghghghghgAH", idx: "5", category: "자유" },
    { title: "HIHIHIHIHHIiIIH", idx: "1", category: "정보" },
    { title: "hohohohohohohogogogogogogoho", idx: "2", category: "자유" },
    { title: "hahahahahahaha", idx: "7", category: "자유" },
    { title: "huhuhuhgugughu", idx: "13", category: "정보" },
    {
      title: "pupuppupupupuuppupupupuppupuppu",
      idx: "14",
      category: "구인구직",
    },
    {
      title: "mamamaaa",
      idx: "16",
      category: "구인구직",
    },
    { title: "momooooooooomooomomomommomommomo", idx: "18", category: "질문" },
    { title: "mimiiiimiijmiim", idx: "20", category: "질문" },
    {
      title: "lelellelelelleleleeleeel",
      idx: "24",
      category: "질문",
    },
    {
      title: "gigigigigigiggigigigiggigigiigigig",
      idx: "28",
      category: "자유",
    },
    { title: "dudududududududududduududududddu", idx: "4", category: "자유" },
    {
      title: "ririririrririririririririririr",
      idx: "19",
      category: "구인구직",
    },
  ];
  let number_total = 0;
  let number_free = 0;
  let number_question = 0;
  let number_information = 0;
  let number_job = 0;

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className={menu.menu}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button style={{ color: "#66c109" }}>홈</Button>
        </Link>
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
        <Link to="/program" style={{ textDecoration: "none" }}>
          <Button>프로그램</Button>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>멘토멘티신청</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>문의</Button>
        </Link>
      </div>
      <div className={home.program}>
        <div className={home.program_top}>
          <p>정부 지원 프로그램</p>
          <Link to="/program">
            <Button>더보기</Button>
          </Link>
        </div>
        <div className={home.program_pro}>
          <div></div>
          <div></div>
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
            {hi.map((v) => {
              if (number_total < 10) {
                number_total = number_total + 1;
                return (
                  <div
                    style={{
                      paddingLeft: "4px",
                      marginTop: "5px",
                      height: "30px",
                      paddingRight: "20px",
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
                  <p>자유 게시판</p>
                </Link>
                {hi.map((v) => {
                  if (number_free < 4 && v.category === "자유") {
                    number_free = number_free + 1;
                    return (
                      <div
                        style={{
                          width: "182px",
                          paddingLeft: "8px",
                          height: "30px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          paddingRight: "20px",
                        }}
                      >
                        {v.title}
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
                  <p>질문 게시판</p>
                </Link>
                {hi.map((v) => {
                  if (number_question < 4 && v.category === "질문") {
                    number_question = number_question + 1;
                    return (
                      <div
                        style={{
                          width: "182px",
                          paddingLeft: "8px",
                          height: "30px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          paddingRight: "20px",
                        }}
                      >
                        {v.title}
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
                  <p>정보 게시판</p>
                </Link>
                {hi.map((v) => {
                  if (number_information < 4 && v.category === "정보") {
                    number_information = number_information + 1;
                    return (
                      <div
                        style={{
                          width: "182px",
                          paddingLeft: "8px",
                          height: "30px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          paddingRight: "20px",
                        }}
                      >
                        {v.title}
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
                  <p>구인/구직 게시판</p>
                </Link>
                {hi.map((v) => {
                  if (number_job < 4 && v.category === "구인구직") {
                    number_job = number_job + 1;
                    return (
                      <div
                        style={{
                          width: "182px",
                          paddingLeft: "8px",
                          height: "30px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          paddingRight: "20px",
                        }}
                      >
                        {v.title}
                      </div>
                    );
                  }
                })}
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
  );
}

export default Home;
