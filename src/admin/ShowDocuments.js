import React from 'react'
import AdminDashboard from './AdminDashboard.css';
import photography from '../assets/homepage/photography.jpg';
import '../AdminComponents/Admin.css';
import { API } from "../backend";
import { useState, useEffect } from "react";
export default function ShowDocumnets(props) {
    const [currIndex, setcurrIndex] = useState(0);
    const [app, setapp] = useState({ arr: [] });
    const [rej, setrej] = useState({ arr: [] });
    const currentlyClicked = JSON.parse(localStorage.getItem('currentlyClicked'));
    const arr = [];
    arr[0] = { file: `${API}/files/${currentlyClicked.background}` }
    arr[0].type = currentlyClicked.background.substring(currentlyClicked.background.indexOf('.') + 1)
    arr[0].name = 'Background'

    arr[1] = { file: `${API}/files/${currentlyClicked.child_abuse}` }
    arr[1].type = currentlyClicked.child_abuse.substring(currentlyClicked.child_abuse.indexOf('.') + 1)
    arr[1].name = 'Child Abuse'

    arr[2] = { file: `${API}/files/${currentlyClicked.visa_document}` }
    arr[2].type = currentlyClicked.visa_document.substring(currentlyClicked.visa_document.indexOf('.') + 1)
    arr[2].name = 'Visa Document'

    arr[3] = { file: `${API}/files/${currentlyClicked.vulnebrity_check}` }
    arr[3].type = currentlyClicked.vulnebrity_check.substring(currentlyClicked.vulnebrity_check.indexOf('.') + 1)
    arr[3].name = 'Vulbebrity Check'

    arr[4] = { file: `${API}/files/${currentlyClicked.work_reference}` }
    arr[4].type = currentlyClicked.work_reference.substring(currentlyClicked.work_reference.indexOf('.') + 1)
    arr[4].name = 'Work Reference'

    arr[5] = { file: `${API}/files/${currentlyClicked.photo_id}` }
    arr[5].type = currentlyClicked.photo_id.substring(currentlyClicked.photo_id.indexOf('.') + 1)
    arr[5].name = 'Photo Id'

    const leftclicked = () => {
        if (currIndex > 0) {
            setcurrIndex(currIndex - 1)
        }
    }

    const rightclicked = () => {
        if (currIndex < 5) {
            setcurrIndex(currIndex + 1)
        }
    }
    const approved = () => {
        setapp(app['arr'].push(currIndex))
        if (currIndex < 5) {
            setcurrIndex(currIndex + 1)
        }
        console.log(app)
    }
    const rejected = () => {
        setrej(rej['arr'].push(currIndex))
        if (currIndex < 5) {
            setcurrIndex(currIndex + 1)
        }
        console.log(rej)
    }
    return (
        <div className="container image-page-size">
            <div className="col-md-12">
                <div className="titleOne">
                    <h3 className="docsTitle">Documents</h3>
                </div>
                {/*<div className="btnBack">
                    <a className="docsTitle2" href="/newadmin/">Go Back</a>
    </div>*/}
            </div>
            {/* <a class="thumbnail fancybox" rel="ligthbox" href={photography}>
                        <img class="img-responsive" alt="" src={photography} />
                        <div class='text-right'>
                            <small class='text-muted'>Image Title</small>
                        </div> 
                    </a> */}
            <div className="row">
                <div className='col-md-2 leftArrow'>
                    <button className="round" onClick={e => leftclicked()}><i class="arrow left"></i></button>
                </div>
                <div className='list-group gallery col-md-8'>
                    <div className='col-sm-4 col-xs-6 col-md-3 col-lg-3 docShowBody'>
                        {/* <FileViewer 
                        fileType={arr[currIndex].type}
                        filePath={arr[currIndex].file}/> */}
                        <img className="imageDoc" src={arr[currIndex].file} width="600" height="400"></img>
                    </div>
                </div>
                <div className='col-md-2 rightArrow'>
                    <button className="round" onClick={e => rightclicked()}><i class="arrow right"></i></button>
                </div>
            </div>
            <div className="row mid-section">
                <div className="col-md-12">
                    <span className="title-of-image">{arr[currIndex].name}</span>
                </div>
            </div>
            <div className="row bottom-row">
                <div className='col-md-6 approved'>
                    <button className="round documents-approve-btn float-right" onClick={e => approved()}>Approve</button>
                </div>
                <div className='col-md-6 approved'>
                    <button className="round documents-reject-btn" onClick={e => rejected()}>Reject</button>
                </div>
            </div>
        </div>
    );

}