import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import { Link, useParams } from 'react-router-dom'
import categoryBanner from '../assets/AllServices/beauty-banner.jpg';
import { API } from "../backend";
import { ToastContainer, toast } from 'react-toastify';
const Beauty = (props) => {
  const [tableData, setTableData] = React.useState([]);
  const [tableDatafix, setTableDatafix] = React.useState([]);
  const [value, setValue] = React.useState({});
  const [count, setcount] = React.useState(false);
  const [slug, setslug] = React.useState('')
  const slugdata = useParams()
  const slugdatae = slugdata.service_name
  React.useEffect(() => {
    async function providerDetails() {
      if (!count) {
        fetch(`${API}/admin/getAllCategory`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
          .then(response => response.json().then(data => {
            if (response.status == 200) {
              data.map((e) => {
                if (e._id == slugdatae) {
                  e.subcategory.map((sub) => tableData.push(sub))
                }
              })
              setcount(true)
              // tableData.push(e)
            } else {
              toast.error("Ooops!! Failed to fetch data.");
            }
          })
          )
          .catch(err => toast.error("Ooops!! Something went wrong."));
      }
    }
    providerDetails();
  }, []);



  const providerTable = ((x, index) => {
    return (
      <div className="col-md-4 mb-2">
        <Link to={"/search-professional/" + x.value} className="cardLink text-center" href="#">{x.value}</Link>
      </div>
    )
  })

  return (
    <>
      <Header />
      <div className="Banner">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <img className="Banner" src={categoryBanner} alt="Responsive image" />
            <div class="bannerText">
              <h1 className="secheading mt-5 mb-5"><span className="bannerHeading">Beauty Services Near You</span></h1>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          {tableData.length > 0 ? tableData.map(providerTable) : ""}
          {/* {
            tableData.map((datasub) => {
              <div className="col-md-4 mb-2">
                <a className="cardLink text-center" href="#">{datasub.value}</a>
              </div>
            })
          } */}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Beauty