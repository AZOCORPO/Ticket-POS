import React, { useRef } from 'react';

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

                <div class="ticket" style={{ backgroundColor: 'white' }} >

                    <p class="centered"><span style={{ fontWeight: 'bold' }}>RECEIPT EXAMPLE</span>
                        <br />589 chemin des States 69007 Lyon
                        <br />0695009622</p>
                    <table>
                        <thead>
                            <tr>
                                <th class="quantity">Q.</th>
                                <th class="description">Description</th>
                                <th class="price">$$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="quantity">1.00</td>
                                <td class="description">ARDUINO UNO R3</td>
                                <td class="price">$25.00</td>
                            </tr>
                            <tr>
                                <td class="quantity">2.00</td>
                                <td class="description">JAVASCRIPT BOOK</td>
                                <td class="price">$10.00</td>
                            </tr>
                            <tr>
                                <td class="quantity">1.00</td>
                                <td class="description">STICKER PACK</td>
                                <td class="price">$10.00</td>
                            </tr>
                            <tr>
                                <td class="quantity"></td>
                                <td class="description">TOTAL</td>
                                <td class="price">$55.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="centered">Thanks for your purchase!
                        <br />www.scay.fr
                    </p>
                </div>
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


export default Aimprimercommande