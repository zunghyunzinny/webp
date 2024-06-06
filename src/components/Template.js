import React from "react";
import styled from 'styled-components';

const TemplateBlock = styled.div`
    width: 850px;

    display: flex;
    flex-direction: cloumn;

    background: #FFD902;
    border-radius: 9px;
    border: 5px solid #56B73B;
    box-shadow: 5px 5px 0px #56B73B;

    margin: 0 auto; /* 페이지 중앙에 나타나도록 */
    margin-top: 50px;
    margin-bottom: 32px;
    display: flex; /* 자식 요소들이 flex item으로 배치 */
    flex-direction: column; /* 자식 요소들 세로 방향으로 배치 */

    position: relative /* 추후 박스 하단에 추가 버튼 위치 시키기 위한 설정 */ 
`;

function Template({ children }) {
    return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;