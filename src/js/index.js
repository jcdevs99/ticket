const fileInput = document.getElementById('upload-avatar');
const form = document.getElementById('form-ticket');
const containerUpload = document.getElementById('container-upload-avatar');
const uploadIcon = document.querySelector('.iconUpload');
const removeBtn = document.getElementById('remove-button');
const changeBtn = document.querySelector('.change-button');
const ddText = document.querySelector('.dd-text')
const acceptSize = document.querySelector('.acept-values')
const dragContainerButtons = document.querySelector('.DragContainer-buttons');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userGH = document.getElementById('userGH');
const formView = document.querySelector('.form-view');
const ticketView = document.querySelector('.ticket-view');

const imageTicket = document.getElementById('imageAvatarTicket');
const ticketUserName =document.querySelector('.ticketUserName');
const ticketUserEmail =document.querySelector('.ticketUserEmail');
const ticketUserGH =document.querySelector('.ticketUserGH');


const formData = {};

const handlerFile = (file) => {
    if(file.type.startsWith('image/')){
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadIcon.src = e.target.result;
            formData.image = e.target.result;
            dragContainerButtons.classList.remove('no-uploaded');
            ddText.classList.add('uploaded');
            acceptSize.classList.add('uploaded');
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;
        }
        reader.readAsDataURL(file);
    }
} 
containerUpload.addEventListener('dragover', (e)=>{
    e.preventDefault();
    containerUpload.classList.add('dragover');
});

containerUpload.addEventListener('dragleave', (e)=>{
    e.preventDefault();
    containerUpload.classList.remove('dragover');
});

containerUpload.addEventListener('drop', (e)=> {
    e.preventDefault()
    containerUpload.classList.remove('dragover');
    const file = e.dataTransfer.files;
    console.log(file)
    if(file && file.length){
        handlerFile(file[0]);
    }

});
uploadIcon.addEventListener('click', (e)=>{
    e.preventDefault();
    fileInput.click();
})
fileInput.addEventListener('change', (e)=> {
    containerUpload.classList.remove('dragover');
    const file = e.target.files;
    console.log(file)
    if(file && file.length){
        handlerFile(file[0]);
    }

});
removeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    uploadIcon.src = "./assets/images/icon-upload.svg"
    ddText.classList.remove('uploaded');
    dragContainerButtons.classList.add('no-uploaded');
})
changeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('change btn')
    uploadIcon.src = "./assets/images/icon-upload.svg"
    ddText.classList.remove('uploaded');
    dragContainerButtons.classList.add('no-uploaded');
    fileInput.click();
})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    formData.name = userName.value;
    formData.email = userEmail.value;
    formData.gh = userGH.value;
    formView.classList.add('hidden');
    ticketView.classList.remove('hidden');
    ticketUserName.innerHTML = formData.name;
    imageTicket.src = formData.image;
    ticketUserEmail.innerHTML = formData.email;
    ticketUserGH.innerHTML = formData.gh;
    console.log('submit', formData);
})