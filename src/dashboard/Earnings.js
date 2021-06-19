import React, { useState } from 'react';


export default function Earnings() {
  const [color, setColor] = useState('Earnings')
  const [component1, setComponent1] = useState('Summary')
  const [component, setComponent] = useState('dailyupdate')
  const [color3, setColor3] = useState('#EA4337')
  const [color4, setColor4] = useState('')


  return (
    <div className="container">
      <div className="row-width row mt-5">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={color == 'Earnings' ? { color: "#EA4337", borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid' } : {}}>
          <button className="btn button activeclass" style={{ color: color3 }} id="button" onClick={() => { setColor('Earnings'); setColor4(''); setColor3('#EA4337') }}>Earning</button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={color == 'Points' ? { color: "#EA4337", borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid' } : {}}>
          <button className="btn button pastclass" style={{ color: color4 }} onClick={() => { setColor('Points'); setColor4('#EA4337'); setColor3('') }}>Points</button>
        </div>
      </div>
      <hr className="activepastline"></hr>
      <div className="container" style={color == 'Points' ? { display: 'none' } : {}}>
        <div className="row" >
          <div className="col btn  card text-center dailyupdate" style={component == 'dailyupdate' ? { color: "white", background: "#EA4337" } : {}} onClick={() => setComponent('dailyupdate')}>
            <h4>Daily</h4>
          </div>
          <div className="col btn card text-center dailyupdate" style={component == 'Weekly' ? { color: "white", background: "#EA4337" } : {}} onClick={() => setComponent('Weekly')}>
            <h4>Weekly</h4>
          </div>
          <div className="col btn card text-center dailyupdate" style={component == 'Custom' ? { color: "white", background: "#EA4337" } : {}} onClick={() => setComponent('Custom')}>
            <h4> Custom</h4>
          </div>
        </div>
        <div className="dailydetail" style={component == 'Weekly' ? { display: 'none' } : {}}>
          <div className="card dailydetails mt-5 ">
            <span>Date:08-09-2020</span><br></br>
            <span>Daily Summary:Business Name</span><br></br>
            <span>Gross Earning:$ 200</span>
          </div>
          <div className="table-responsive mt-5">
            <h3><span className="heading-2">Order</span>&nbsp;<span className="heading-2">Details</span></h3>
            <table className="table  table-bordered text-center tablefix">
              <thead>
                <tr className="table-heading">
                  <th className="table-heading-first" scope="col">Order Number</th>
                  <th scope="col">Time</th>
                  <th scope="col">Net</th>
                  <th scope="col">Taxes</th>
                  <th className="table-heading-last" scope="col">Gross</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td >Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="WeeklyDetails" style={component == 'dailyupdate' ? { display: "none" } : {}}>
          <div className="row-width row mt-5">
            <div className="col-sm-4">
              <div className="card  w-80 text-center statement">
                <span>Statement</span>
                <div className="Statementdate">
                  <span>May 04 -May 10</span><br></br>
                  <span>$200020</span>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <table className="table table-borderless borderP Weeklys">
                <thead>
                  <tr className="thead-light">
                    <th className="" scope="col">Weekly Statement</th>
                    <th className="floatright text-center" scope="col"><button className="button btn1">Print</button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row"><span>Statement Period</span><br></br>
                      <br></br>
                      <span>May 04 -May 10</span>
                    </td>
                    <td> </td>
                  </tr>
                  <tr className="thead-light">
                    <td scope="row">Gross Earning</td>
                    <td className="floatright text-center">200</td>
                  </tr>
                  <tr>
                    <td scope="row">Net Earnings</td>
                    <td className="floatright text-center" >178</td>
                  </tr>
                  <tr>
                    <td scope="row">Tax</td>
                    <td className="floatright text-center">18</td>
                  </tr>
                  <tr>
                    <td scope="row">Network Access Contribution</td>
                    <td className="floatright text-center">(40)</td>
                  </tr>
                  <tr>
                    <td scope="row">GST-ITC</td>
                    <td className="floatright text-center">(2)</td>
                  </tr>
                  <tr>
                    <td scope="row">Other Adjustment</td>
                    <td className="floatright text-center" >(5)</td>
                  </tr>
                  <tr>
                    <td scope="row">Net revenue from Theom</td>
                    <td className="floatright text-center">153</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={color == 'Earnings' ? { display: 'none' } : {}}>
        <div className="row">
          <div className="col btn  card text-center dailyupdate" style={component1 == 'Summary' ? { color: "white", background: "#EA4337" } : {}} onClick={() => setComponent1('Summary')}>
            <h4>Summary</h4>
          </div>
          <div className="col btn card text-center dailyupdate" style={component1 == 'Theom' ? { color: "white", background: "#EA4337" } : {}} onClick={() => setComponent1('Theom')}>
            <h4>Buy More Theom Points</h4>
          </div>
        </div>
        <div className="row container mt-5" style={component1 == 'Theom' ? { display: 'none' } : {}}>
          <div className="summary col-sm-8">
            <div className="table-responsive">
              <table className="table  table-bordered point tablefix ">
                <thead>
                  <tr className="table-heading">
                    <th table-heading-first></th>
                    <th className=" text-center " scope="col">Monthly</th>
                    <th className="table-heading-last text-center" scope="col">YTD</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td>Theom Points bought </td>
                    <td className="text-center"> 100</td>
                    <td>1500</td>

                  </tr>
                  <tr>
                    <td>Theom points redeemed </td>
                    <td className="text-center">90</td>
                    <td>1400</td>
                  </tr>
                  <tr>
                    <td>Theom points available </td>
                    <td className="text-center">10</td>
                    <td>114</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mt-5" style={component1 == 'Summary' ? { display: 'none' } : {}}>
          <div className="col-sm-12">
            <div className="borderP" >
              <div className="header">
                <p>By Theom Points</p>
              </div>
              <div className="header2 poinst">
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-sm-3 paddCss">
                      <label><strong>Enter Theom Points</strong></label>
                    </div>
                    <div className="col-sm-2 paddCss">
                      <input type="text" name="" className="form-control" placeholder="Type Hare" />
                    </div>
                    <div className="col-sm-7 paddCss">
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label><strong>Select Package</strong></label>
                    </div>
                    <div className="col-sm-2 paddCss">
                      <select className="form-control" id="sel1" >
                        <option>100 Points</option>
                        <option>200 Points</option>
                        <option>300 Points</option>
                        <option>400 Points</option>
                      </select>
                    </div>
                    <div className="col-sm-7 paddCss">
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Net Purchase</label>
                    </div>
                    <div className="col-sm-2 paddCss">
                      <label>100</label>
                    </div>
                    <div className="col-sm-7 paddCss">
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Tax</label>
                    </div>
                    <div className="col-sm-2 paddCss">
                      <label>100</label>
                    </div>
                    <div className="col-sm-7 paddCss">
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Amount to be paid</label>
                    </div>
                    <div className="col-sm-2 paddCss">
                      <label>112</label>
                    </div>
                    <div className="col-sm-7 paddCss">
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Theom Points</label>
                    </div>
                    <div className="col-sm-2 paddCss">
                      <label>200</label>
                    </div>
                    <div className="col-sm-12 paddCss mt-5">
                      <label><strong>Credit Card Details</strong></label>
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Name on Card</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" className="form-control" name="" placeholder="Your Name" />
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Card Number</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" className="form-control" name="" placeholder="00000000000" />
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>Expiry</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" className="form-control" name="" placeholder="08-2028" />
                    </div>
                    <div className="col-sm-3 paddCss">
                      <label>CVV</label>
                    </div>
                    <div className="col-sm-8 paddCss">
                      <input type="text" className="form-control" name="" placeholder="000" />
                    </div>
                  </div>
                  <button className="button btn1">Review and Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
