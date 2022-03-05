import React, { useState } from 'react';
import './App.css';
import { Input, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import Aimprimercommande from './Commandetoprint';

function ScreenHome(props) {

  const [signUpUsername, setSignUpUsername] = useState('')


  var LaunchPrint = async () => {

    const data = await fetch('/toprint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `somethingtoprint=${'letsgo'}`
    })
    const body = await data.json()
  }

  return (
    <div style={{ textAlign: 'center' }} >
      <Nav />
      <p>set: {props.setting}</p>
      <div className="Login-page" >

        <div className="Sign" style={{ width: '30%', textAlign: 'center' }}>
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
          <Button onClick={() => LaunchPrint()} style={{ width: '80px' }} type="primary">Print Me</Button>
          <p className='text-center'>
            Printing must be started:
            <br />-either through the back-end using the route. Connecting to a cloud printer (Star or Epson) connected to Wifi can be an excellent solution.
            If a solution using a Bluetooth communication with the printer is possible, or even wired, allowing me to trigger directly by communicating with the printer, I will be fine.
            <br /> -Either by managing not to have a print dialog box. This solution should not be accompanied by too complicated handling.
          </p>
          <strong>Pour faire simple actuellement, j'utilise cette solution ci dessous. (mais comme on peut le voir, une boite de dialogue s'affiche). Aussi,
            un useffect devrait etre en mesure de déclecher l'impression sans boite de dialogue (je doute que cela soit un solution car même si cela était possible , comment 
            l'utilisateur ferait pour pouvoir sélectionner son imprimante thermique et pas une autre...?)
          </strong>
          <Aimprimercommande />
        </div>
        <div className="Sign" style={{ maxWidth: '30%', textAlign: 'center' }}>
          Non-exhaustive list of printer:
          <span style={{ fontWeight: 'bold' }}>
            <br />
            Epson TM-m10
            <br />
            Epson TM-m30
            <br />
          </span>
          TM-T70II-DT
          <br />
          TM-T88V-DT
          <br />
          TM-L90-i
          <br />
          TM-T20II-i
          <br />
          TM-T70-i
          <br />
          TM-T82II-i
          <br />
          TM-T83II-i
          <br />
          TM-T88V-i
          <br />
          TM-H6000IV-DT
          <br />
          TM-U220-i
          <br />
          TM-P20 (modèle Wi-Fi®)
          <br />
          TM-P60II (Reçu : modèle Wi-Fi®)
          <br />
          TM-P60II (éplucheur : modèle Wi-Fi®)
          <br />
          TM-P80 (modèle Wi-Fi®)
          <br />
          <span style={{ fontWeight: 'bold' }}>
            Xprinter in 58mm or Xprinter XP-N160II or an other of this brand could be perfect
            </span>
          <br />
          <a href='https://c4b.epson-biz.com/modules/pos/index.php?page=single_soft&cid=6762&scat=57&pcat=52' target='blank'>https://c4b.epson-biz.com/...</a>
          <a href='https://c4b.epson-biz.com/epson/epson_public_document.php?name=js2180.pdf' target='blank'>https://c4b.epson-biz.com/...</a>
          <a href='https://c4b.epson-biz.com/modules/community/index.php?content_id=23' target='blank'>https://c4b.epson-biz.com/...</a>
          <a href='https://reference.epson-biz.com/modules/ref_epos_sdk_js_en/index.php?content_id=1' target='blank'>https://c4b.epson-biz.com/...</a>
          

          <a href='https://dev.to/rubenruvalcabac/printing-tickets-on-reactjs-ki6' target='blank'>https://dev.to/...</a>
          
          
        </div>
      </div>



    </div>
  );
}

function mapStateToProps(state) {
  return { setting: state.setting }
}

export default connect(
  mapStateToProps,
  null
)(ScreenHome)
