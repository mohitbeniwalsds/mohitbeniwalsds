import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export default function MyUploader() {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <>

            <div className="drop-message">
                <div className="upload-icon"></div>
                <Dropzone
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    onSubmit={handleSubmit}
                    accept="image/*,audio/*,video/*"
                />
            </div>

        </>
    )
}




















// const dragOver = (e) => {
//     e.preventDefault();
// }

// const dragEnter = (e) => {
//     e.preventDefault();
// }

// const dragLeave = (e) => {
//     e.preventDefault();
// }

// const fileDrop = (e) => {
//     e.preventDefault();
//     const files = e.dataTransfer.files;
//     console.log(files);
// }
// const DropZone = () => {
//     return (
//         <div className="drop-zone-container">
//             <div className="drop-container"
//                 onDragOver={dragOver}
//                 onDragEnter={dragEnter}
//                 onDragLeave={dragLeave}
//                 onDrop={fileDrop}>
//                 <div className="drop-message">
//                     <div className="upload-icon"></div>
//                     Drag & Drop files here or click to upload
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default DropZone;