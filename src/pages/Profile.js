import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, Modal, CloseButton } from "react-bootstrap";

import image01 from './img/001.png';
import image02 from './img/002.png';
import image03 from './img/003.png';
import image04 from './img/004.png';
import image05 from './img/005.png';

import ModalContent from "./ModalContent";


const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const openModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <ProfileBlock>
                <Row>
                    <Col md={4} className="grid">
                        <div className="image-container">
                            <img src={ image01 }   
                             alt="이미지1"
                             onClick={() => openModal({ title: "양태천 교수",
                             body: (
                                <>
                                    이메일: tcyang@ks.ac.kr <br />
                                    전화번호: 051-663-5141
                                </>
                            ), closeModal })} />
                           <div className="text-container">
                                <h4>양태천<span> 교수</span></h4> 
                           </div>
                        </div>
                    </Col>
                    <Col md={4} className="grid">
                    <div className="image-container">
                           <img src={ image02 } alt="이미지2"
                           onClick={() => openModal({ title: "성낙운 교수",
                           body: (
                              <>
                                  이메일: nuseong@ks.ac.kr <br />
                                  전화번호: 051-663-5142
                              </>
                          ), closeModal })} />
                           <div className="text-container">
                                <h4>성낙운<span> 교수</span></h4> 
                           </div>
                        </div>
                    </Col>
                    <Col md={4} className="grid">
                    <div className="image-container">
                           <img src={ image03 } alt="이미지3"
                           onClick={() => openModal({ title: "홍석희 교수",
                           body: (
                              <>
                                  이메일: shong@ks.ac.kr <br />
                                  전화번호: 051-663-5145
                              </>
                          ), closeModal })} />
                           <div className="text-container">
                                <h4>홍석희<span> 교수</span></h4> 
                           </div>
                        </div>
                    </Col>
                    <Col md={4} className="grid">
                    <div className="image-container">
                           <img src={ image04 } alt="이미지4"
                           onClick={() => openModal({ title: "지상문 교수",
                           body: (
                              <>
                                  이메일: smchilks@ks.ac.kr <br />
                                  전화번호: 051-663-5146
                              </>
                          ), closeModal })} />
                           <div className="text-container">
                                <h4>지상문<span> 교수</span></h4>
                           </div>
                        </div>
                    </Col>
                    <Col md={4} className="grid">
                    <div className="image-container">
                           <img src={ image05 } alt="이미지5"
                           onClick={() => openModal({ title: "강인수 부교수",
                           body: (
                              <>
                                  이메일: dbaisk@ks.ac.kr <br />
                                  전화번호: 051-663-5147
                              </>
                          ), closeModal })} />
                           <div className="text-container">
                                <h4>강인수<span> 부교수</span></h4> 
                           </div>
                        </div>
                    </Col>
                </Row>
            </ProfileBlock>
            {showModal && (
                <CustomModal show={showModal}
                 onHide={closeModal}
                 backdrop="static"
                 keyboard={false}>
                    <ModalContent title={modalContent.title} body={modalContent.body} closeModal={closeModal} />
                    <Modal.Footer>
                        <CloseButton onClick={closeModal} />
                    </Modal.Footer>
                </CustomModal>
            )}

        </div>
    );
};

const ProfileBlock = styled.div`
    display: flex;
    flex-direction: column;
    felx: 1;
    padding: 100px 80px;
    padding-bottom: 32px;
    overflow-y: auto; /*내용넘치면 수직스크롤 활성 */
    background: #FFD902;

    .grid img {
        width: 80%;
        text-align: center;
        margin-bottom: 20px;
        border-radius: 2px;
        border: 5px solid #56B73B;
    }

    .image-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        padding-bottom: 50px;
    }

    h4 {
        font-weight: bold;
        font-size: 20px;
        color: #56B73B;
        padding: 8px 16px;
        text-align: center;
        white-space: nowrap;
        font-family: "korean_bold";

        span {
            font-size: 13px;
            font-family: "korean_bold";
        }
    }

    .text-container {
        position: absolute;
        bottom: 20px;
        text-align: center;
        width: 100%;
    }
`;

const CustomModal = styled(Modal)`
    &.modal {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-content {
        background-color: #56B73B;
    }

    .modal-title {
        text-align: center;
        color: #56B73B;
        margin-top: 30px;
        margin-bottom: 50px;
        font-family: "DNFBitBitv2";
        font-size: 50px;
        text-shadow: 
        -3px -3px 0 #FFD902,  
         3px -3px 0 #FFD902,
        -3px  3px 0 #FFD902,
         3px  3px 0 #FFD902;
    }

    .modal-body {
        color: #FFD902;
        padding: 30px;
        text-align: center;
        font-family: "korean_Light";
    }

    .modal-footer {
        border: none;
        justify-content: center;
    }
`;


export default Profile;