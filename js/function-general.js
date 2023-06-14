
function reference(){
    const position = document.getElementById('repeter');

    //console.log(position);

    const container = document.createElement('div');
    const fileLabel = document.createElement('label');
    const uploadFile = document.createElement('input');
    const noteLabel = document.createElement('label');
    const note = document.createElement('textarea');

    //costruzione container
    container.classList.add('d-flex');
    container.classList.add('mm-select');

    //costruzione label file
    fileLabel.classList.add('form-label');
    fileLabel.innerHTML = "File";

    //costruzione upload file
    uploadFile.classList.add('form-control');
    uploadFile.classList.add('form-control-sm');
    uploadFile.classList.add('file-up');
    uploadFile.id="formFileSm";
    uploadFile.type="file";

    //costruzione label note
    noteLabel.innerHTML="Note";
    
    //costruzione note
    note.classList.add('form-control');
    note.rows="3";
    note.style="margin-right:90px";


    container.appendChild(fileLabel);
    container.appendChild(uploadFile);
    container.appendChild(noteLabel);
    container.appendChild(note);

    position.appendChild(container);

    //console.log(position);
}
