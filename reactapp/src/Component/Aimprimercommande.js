import React, { useRef } from 'react';
import '../stylesheet/App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReactToPrint } from 'react-to-print';
import { Row, Col, Badge } from "reactstrap";
import { Divider } from 'antd';
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux'

class ComponentToPrint extends React.Component {
    render(
    ) {
        return (
            <div className="printme3" >

                <Col className="d-flex  flex-column justify-content-center align-items-center mr-1 mt-1" style={{ border: "1px solid " }}>
                    <p className="text-center"> Commandes-n°2 <br /> 31/08/2022 à 10h00 <br />table n°3 - Pour Pierre <br /> (3 plats) From my Qrcode<br /></p>
                    Payée
                    <Row className="d-flex justify-content-around align-items-center" style={{ width: "100%" }}>
                        <Divider />
                        <Col >
                            <p className="mb-1"><span className='mr-1 pl-1 pr-1' style={{ border: "solid" }}>0</span><strong>Entréés</strong></p>

                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-around align-items-center" style={{ width: "100%" }}>
                        <Divider />
                        <Col >
                            <p className="mb-1"><span className='mr-1 pl-1 pr-1' style={{ border: "solid" }}>0</span><strong>Plats</strong></p>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-around align-items-center" style={{ width: "100%" }}>
                        <Divider />
                        <Col >
                            <p className="mb-1"><span className='mr-1 pl-1 pr-1' style={{ border: "solid" }}>0</span><strong>Desserts</strong></p>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-around align-items-center" style={{ width: "100%" }}>
                        <Divider />
                        <Col >
                            <p className="mb-1"><span className='mr-1 pl-1 pr-1' style={{ border: "solid" }}>0</span><strong>Boissons</strong></p>
                        </Col>
                    </Row>
                </Col>
            </div>
        );
    }
}
function Aimprimercommande(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint(
        {
            content: () => componentRef.current,
        }
    );

    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <FontAwesomeIcon onClick={handlePrint} className='m-0 p-0' icon={faPrint} style={{ cursor: "pointer", fontSize: 25 }} />
        </div>
    );
}


export default connect(
    null,
    null
)(Aimprimercommande)