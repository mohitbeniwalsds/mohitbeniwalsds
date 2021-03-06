import React from 'react';
import MaterialTable from 'material-table';


export default function Services() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name of Services', field: 'name' },
    ],
    data: [
      { name: 'Home and Garden' },
      { name: 'Health and Webllbeing' },
      { name: 'Wedding and Events' },
      { name: 'Business Services' },
    ],
    options: [
      { actionsColumnIndex: -1 }  
    ]
  });

	return (
    <div className="container">
      <h3 className="welcome"> Welcome Robert</h3>
      <h3 className="mt-5 mb-2"><span className="heading-1">Services </span></h3>
      <div className="table-responsive">
        <MaterialTable
          title="List of Services"
          columns={state.columns}
          data={state.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                  }
                }, 600);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      </div>  
    </div>
	);
}