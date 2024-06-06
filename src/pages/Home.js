import React from "react";
import styled from 'styled-components';

import image1 from './img/2004699.png';


const Home = () => {
    return (
        <div>
            <HomeBlock>
                <TextContainer>
                <div className="a1">
                    소프트웨어학과
                </div>
                <br />
                <div className="a3">
                    는 4차 산업혁명을 이끌
                </div>
                <div className="a1">
                    미래 IT 분야 핵심 인재 양성
                </div>
                <div className="a2">
                    을 목표로 합니다.
                </div>
                </TextContainer>
            </HomeBlock>
        </div>
    );
};

const HomeBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 32px 32px;
    padding-bottom: 32px;
    margin-top: 60px;
    overflow-y: auto; /*내용넘치면 수직스크롤 활성 */
    background: #56B73B;
`;

const TextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center; /* 중앙 정렬 */
    font-family: "DNFBitBitv2";

    .a1 {
        color: #56B73B;
        font-family: "DNFBitBitv2";
        font-size: 50px;
        text-shadow: 
            -3px -3px 0 #FFD902,  
             3px -3px 0 #FFD902,
            -3px  3px 0 #FFD902,
             3px  3px 0 #FFD902;
    }

    .a2 {
        font-family: "DNFBitBitv2";
        color: #FFD902;
        font-size: 40px;
    }

    .a3 {
        font-family: "DNFBitBitv2";
        color: #FFD902;
        font-size: 40px;
        margin-top: 9px;
    }
`;


export default Home;