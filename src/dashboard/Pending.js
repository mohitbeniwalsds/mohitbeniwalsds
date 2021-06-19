import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import saveIcon from '../assets/Icons/save.png';

export default function Pending() {
  const [component, setComponent] = useState('dashboard')
  const [color1, setColor1] = useState('#EA4337')
  const [color2, setColor2] = useState('#ccc')
  const [display1, setDisplay1] = useState()
  const [display2, setDisplay2] = useState('none')
  const [color3, setColor3] = useState('#EA4337')
  const [color4, setColor4] = useState('')

  return (
    <div className="container">
      <div className="row-width row mt-5">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color1, boderBottomColor: color1, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }} >
          <button className="btn button activeclass" id="button" style={{ color: color3 }} onClick={() => { setColor1('#EA4337'); setColor2('#ccc'); setDisplay1('block'); setDisplay2('none'); setColor4(''); setColor3('#EA4337') }}>Pending</button>
        </div>
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2" style={{ color: color2, boderBottomColor: color2, borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderBottom: '4px solid ' }}>
          <button className="btn button pastclass" style={{ color: color4 }} onClick={() => { setColor1('#ccc'); setColor2('#EA4337'); setDisplay1('none'); setDisplay2('block'); setColor4('#EA4337'); setColor3('') }}>Reschedule</button>
        </div>
      </div>
      <hr className="activepastline"></hr>
      <div className="table-responsive" style={{ display: display1 }}>
        <table className="table  table-bordered text-center tablefix">
          <thead>
            <tr className="table-heading">
              <th className="table-heading-first" scope="col">Order Number</th>
              <th scope="col">Details</th>
              <th scope="col">$ Amount</th>
              <th scope="col">Time/Date</th>
              <th className="table-heading-last" scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <form>
                  <select className="select-action">
                    <option value="accept">Accept</option>
                    <option value="reschedule">Reschedule</option>
                    <option value="cancel">Cancel</option>
                  </select>
                  <Button><img className="select-image img-fluid" src={saveIcon} />
                  </Button>
                </form>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><form>
                <select className="select-action">
                  <option value="accept">Accept</option>
                  <option value="reschedule">Reschedule</option>
                  <option value="cancel">Cancel</option>
                </select>
                <Button><img className="select-image img-fluid" src={saveIcon} />
                </Button>
              </form></td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td><form>
                <select className="select-action">
                  <option value="accept">Accept</option>
                  <option value="reschedule">Reschedule</option>
                  <option value="cancel">Cancel</option>
                </select>
                <Button><img className="select-image img-fluid" src={saveIcon} />
                </Button>
              </form></td>
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
              <th scope="col">Time/Date</th>
              <th className="table-heading-last" scope="col">Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td> Reschedule
      </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td>Reschedule
        </td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>@twitter</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td>Reschedule</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>@twitter</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td>Reschedule</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td>@twitter</td>
              <td> <p>12:00 PM</p>
                <p>01-09-2020</p></td>
              <td>Reschedule</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
