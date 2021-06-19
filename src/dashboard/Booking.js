import React, { useState } from 'react';



export default function Booking() {
  const [component, setComponent] = useState('#EA4337')
  const [color1, setColor1] = useState('#EA4337')
  const [color2, setColor2] = useState('#ccc')
  const [color3, setColor3] = useState('#EA4337')
  const [color4, setColor4] = useState('')
  const [color5, setColor5] = useState('#ccc')
  const [color6, setColor6] = useState('')
  const [color7, setColor7] = useState('#ccc')

  const [display1, setDisplay1] = useState()
  const [display2, setDisplay2] = useState('none')
  const [display3, setDisplay3] = useState('none')
  const [display4, setDisplay4] = useState('none')


  return (
    <div className="container">
      <div className="row-width row mt-5">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color1, boderBottomColor: color1, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid' }}>
          <button className="btn button activeclass" id="button" style={{ color: color3 }} onClick={() => { setColor1('#EA4337'); setColor2('#ccc'); setDisplay1('block'); setDisplay2('none'); setDisplay3('none'); setColor4(''); setColor5('#ccc'); setColor3('#EA4337'); setColor6(''); setColor7('') }}>Active</button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color2, boderBottomColor: color2, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
          <button className="btn button pastclass" style={{ color: color4 }} onClick={() => { setColor1('#ccc'); setColor2('#EA4337'); setDisplay1('none'); setDisplay2('block'); setDisplay3('none'); setColor3(''); setColor5('#ccc'); setColor4('#EA4337'); setColor6(''); setColor7('') }}>Past</button>
        </div>
        {/* <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{color:color4,boderBottomColor:color7,borderBottomLeftRadius:'0',borderBottomRightRadius:'0',borderBottom:'4px solid '}}>
           <button className="btn button pastclass" style={{color:color7}} onClick={()=>{setColor1('#ccc');setColor2('#ccc');setDisplay1('none');setDisplay2('block');setDisplay3('none');setDisplay4('block');setColor3(''); setColor5('#ccc');setColor4('');setColor6('');setColor7('#EA4337')}}>Reschedule</button>
           </div> */}
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color5, boderBottomColor: color5, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
          <button className="btn button pastclass" style={{ color: color6 }} onClick={() => { setColor1('#ccc'); setColor2('#ccc'); setDisplay1('none'); setDisplay2('none'); setColor3(''); setColor4(''); setColor5('#EA4337'); setColor6('#EA4337'); setDisplay3('block'); setColor7('') }}>Cancel</button>
        </div>
      </div>
      <hr className="activepastline"></hr>
      <div className="table-responsive" style={{ display: display1 }}>
        <table className="table  table-bordered text-center tablefix" >
          <thead>
            <tr className="table-heading">
              <th className="table-heading-first" scope="col">Order Number</th>
              <th scope="col">Details</th>
              <th scope="col">$ Amount</th>
              <th scope="col"> Time/Date</th>
              <th className="table-heading-last" scope="col">Order Type</th>

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
      <div className="table-responsive" style={{ display: display2 }}>
        <table className="table  table-bordered text-center tablefix">
          <thead>
            <tr className="table-heading">
              <th className="table-heading-first" scope="col">Order Number</th>
              <th scope="col">Details</th>
              <th scope="col">$ Amount</th>
              <th scope="col"> Time/Date</th>
              <th className="table-heading-last" scope="col">Completed/Cancelled</th>

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
      <div className="table-responsive" style={{ display: display3 }}>
        <table className="table  table-bordered text-center tablefix">
          <thead>
            <tr className="table-heading">
              <th className="table-heading-first" scope="col">Order Number</th>
              <th scope="col">Details</th>
              <th scope="col">$ Amount</th>
              <th scope="col"> Time/Date</th>
              <th className="table-heading-last" scope="col">Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>$ 20</td>
              <td>
                <p>12:00 PM</p>
                <p>01-09-2020</p>
              </td>
              <td>Rejected</td>

            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>$ 20</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td>Rejected</td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>$ 80</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td>Rejected</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td >Larry the Bird</td>
              <td>$ 50</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td>Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
}
