import React from "react";
import styled from 'styled-components';

function FixPage() {
    return (
        <FixPageBlock>
        </FixPageBlock>
    );
}


const FixPageBlock = styled.div`
    display: flex;
    flex-direction: column;
    felx: 1;
    padding: 32px 32px;
    padding-bottom: 32px;
    overflow-y: auto; /*내용넘치면 수직스크롤 활성 */
    background: #FFD902;
`;

export default FixPage;