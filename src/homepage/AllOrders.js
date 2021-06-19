import React, { useState } from 'react';
import AfterLoginHeader from '../homepage/AfterLoginHeader'
import Footer from '../common/Footer'


export default function AllOrders() {
  const [component, setComponent] = useState('#EA4337')
  const [color1, setColor1] = useState('#EA4337')
  const [color2, setColor2] = useState('#ccc')
  const [color3, setColor3] = useState('#EA4337')
  const [color4, setColor4] = useState('')
  const [color5, setColor5] = useState('#ccc')
  const [color6, setColor6] = useState('')

  const [display1, setDisplay1] = useState()
  const [display2, setDisplay2] = useState('none')
  const [display3, setDisplay3] = useState('none')



  return (
    <>
      <AfterLoginHeader />
      <hr className="headerLine"></hr>
      <div className="all-Orders">
        <div className="row" style={{ backgroundColor: "#e8ecec", height: 100 }}>
          <div className="col-2"></div>
          <div className="col-3  text-center" style={{ paddingTop: 30 }}>
            <div className="totalOrders">
              <span>Total Orders</span>:<span>10</span>
            </div>
          </div>
          <div className="col-2 "></div>
          <div className="col-3 text-center" style={{ paddingTop: 30 }}>
            <div className="totalOrders">
              <span>Currently Active</span>:<span>7</span>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="container">
          <div className="row-width row mt-1">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color1, boderBottomColor: color1, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid' }}>
              <button className="btn button activeclass" id="button" style={{ color: color3 }} onClick={() => { setColor1('#EA4337'); setColor2('#ccc'); setDisplay1('block'); setDisplay2('none'); setDisplay3('none'); setColor4(''); setColor5('#ccc'); setColor3('#EA4337'); setColor6('') }}>All</button>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color2, boderBottomColor: color2, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
              <button className="btn button pastclass" style={{ color: color4 }} onClick={() => { setColor1('#ccc'); setColor2('#EA4337'); setDisplay1('none'); setDisplay2('block'); setDisplay3('none'); setColor3(''); setColor5('#ccc'); setColor4('#EA4337'); setColor6('') }}>Current</button>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color5, boderBottomColor: color5, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
              <button className="btn button pastclass" style={{ color: color6 }} onClick={() => { setColor1('#ccc'); setColor2('#ccc'); setDisplay1('none'); setDisplay2('none'); setColor3(''); setColor4(''); setColor5('#EA4337'); setColor6('#EA4337'); setDisplay3('block') }}>Previous</button>
            </div>
          </div>
          <hr className="activepastline"></hr>
          <div className="table-responsive" style={{ display: display1 }}>
            <table className="table  table-bordered text-center tablefix">
              <thead>
                <tr className="table-heading">
                  <th className="table-heading-first" scope="col">Order Number</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">$&nbsp;Amount</th>
                  <th scope="col"><span>Status</span><br></br><span>Active/Inprogress</span></th>
                  <th className="table-heading-last" scope="col">Order Type</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>House Cleaning</td>
                  <td>$115</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Accounting</td>
                  <td>$115</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td >Dog tra</td>
                  <td>$150</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td >Web Design</td>
                  <td>$50</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive" style={{ display: display2 }}>
            <table className="table  table-bordered text-center">
              <thead>
                <tr className="table-heading">
                  <th className="table-heading-first" scope="col">Order Number</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">$&nbsp;Amount</th>
                  <th scope="col"><span>Status</span><br></br><span>Active/Inprogress</span></th>
                  <th className="table-heading-last" scope="col">Order Type</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>House Cleaning</td>
                  <td>$115</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Accounting</td>
                  <td>$115</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td >Web Design</td>
                  <td>$150</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td >Web Design</td>
                  <td>$50</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive" style={{ display: display3 }}>
            <table className="table  table-bordered text-center">
              <thead>
                <tr className="table-heading">
                  <th className="table-heading-first" scope="col">Order Number</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">$&nbsp;Amount</th>
                  <th scope="col"><span>Status</span><br></br><span>Active/Inprogress</span></th>
                  <th className="table-heading-last" scope="col">Order Type</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>House Cleaning</td>
                  <td>$115</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Accounting</td>
                  <td>$115</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>

                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td >Web Design</td>
                  <td>$150</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td >Web Design</td>
                  <td>$112</td>
                  <td><a href="/order-summary"> Active </a></td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td >Dog Training</td>
                  <td>$123</td>
                  <td>Active</td>
                  <td>Order</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td >Web Design</td>
                  <td>$50</td>
                  <td><a href="/order-summary">Inprogress</a></td>
                  <td>Request</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
