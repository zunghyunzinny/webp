import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = () => {
    return (
        <HeadBlock>
            <Link className="h1" to={"/"}>
                <h1>경성대 소프트웨어학과</h1>
            </Link>
            <Link className="menu" to={"/Intro"}>
              학과 소개
            </Link>
            <Link className="menu" to={"/Profile"}>교수진 소개</Link>
        </HeadBlock>
    );
};

const HeadBlock = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding-top: 40px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 25px;

    border-bottom: 5px solid #56B73B;
    
    .h1 {
        text-decoration: none;
        font-weight: bold;
        margin: 0;
        font-size: 36px;
        color: #56B73B;
        text-align: left;
        font-family: "korean_bold";
    }
    .menu {
        font-family: "korean_bold";
        color: #56B73B;
        text-decoration: none;
        margin: 8px;
        margin-top: 20px
    }
    .menu + .menu {
        margin-left: -130px;
        font-family: "korean_bold";
    }
`;

export default Head;