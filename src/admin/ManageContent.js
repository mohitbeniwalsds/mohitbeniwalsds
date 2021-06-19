import React from 'react';


export default function ManageContent() {
  
	return (
    <div className="container">
      <h3 className="welcome"> Welcome Robert</h3>
      <h3 className="mt-5 mb-2"><span className="heading-1">Manage 
        </span>&nbsp;<span className="heading-2">Content for Static Page </span></h3>
        <div>
          <h4 className="mt-5 mb-2"><span className="heading-2">About us</span></h4>
          <textarea></textarea>
        </div>
        <div>
          <h4 className="mt-5 mb-2"><span className="heading-2">Conatct us</span></h4>
          <textarea></textarea>
        </div>
        <div>
          <h4 className="mt-5 mb-2"><span className="heading-2">Privacy policy</span></h4>
          <textarea></textarea>
        </div>
    </div>
	);
}