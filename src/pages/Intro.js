import React from "react";
import styled from "styled-components";

import image01 from './img/001.jpg';

const Intro = () => {
    return (
        <div>
            <IntroBlock>
                <div className="a1">
                    소프트웨어학과는 Computer Science 분야의 기반 지식을 바탕으로 기업에서 요구하는 IT 기술을 배양하고 창의적이고 복합적 문제해결능력을 갖춘 미래형 소프트웨어 인재를 양성하기 위해 설립되었습니다.
                    <br/>
                    <br/>
                    본 학과의 교육과정에서는 이산수학, 전산수학, 컴퓨터구조, 운영체제, 자료구조, 알고리즘, 데이터베이스, 컴퓨터네트워크 등의 기반 지식을 습득하고, 프로그래밍 실습 교육과 프로젝트 수행 교육 등을 통해 소프트웨어 설계 및 구현 능력을 배양하며, 4차 산업혁명에 준비된 인재 양성을 위해 머신러닝&#40;machine learning&#41;, 인공지능 및 병렬 컴퓨팅 교육 등을 실시합니다.
                    <br/>
                    <br/>
                    본 학과 졸업생들은 웹 및 앱 개발자, 게임 개발자, 서버&#47;네트워크&#47;데이터베이스&#47;보안 관리자, 전산직 공무원, 프리랜서 프로그래머 등으로 활동할 수 있으며, IT 분야 대기업, 중견 및 중소 업체와 금융권 및 일반 기업체 IT 부서, 전산학 관련 국내외 대학원 등으로도 진출할 수 있습니다.
                </div>
            </IntroBlock>
        </div>
    );
};

const IntroBlock = styled.div`
    display: flex;
    flex-direction: column;
    felx: 1;
    padding: 50px 50px;
    margin-top: 20px;
    padding-bottom: 20px;
    overflow-y: auto; /*내용넘치면 수직스크롤 활성 */
    background: #FFD902;

    .a1 {
        color: #56B73B;
        font-size: 20px;
        font-family: "korean_Light";
    }
`;

export default Intro;