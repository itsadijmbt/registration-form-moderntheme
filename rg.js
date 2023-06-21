
const personName=document.querySelector('.name');
const personMail=document.querySelector('.mail');
const personWeb=document.querySelector('.website');
const imageLink=document.querySelector('.image-link');
const finalListAdder =document.querySelector('.data-added');
const clickSubmit=document.querySelector('.sbmit');
const malebtn= document.querySelector('.male');
const femalebtn= document.querySelector('.female');
const htmlskillSelector=document.querySelector('.html');
const cssskillSelector=document.querySelector('.css');
const jsskillSelector=document.querySelector('.js');
const searchInForm=document.querySelector('.search')
const find =document.querySelector('.find');
const infoMessage =document.querySelector('.info-message');
const searchMessage =document.querySelector('.search-message');
const searchMenu=document.querySelector('.search-menu');
const dataSearchRender =document.querySelector('.data-search-render');
const searchDataInBar= document.querySelector('.search-bar');
const clear=document.querySelector('.clear');
const cancel=document.querySelector('.cancel');

let info =[];
let gender;
let skillsHTML;
let skillsCSS;
let skillsJS;
let c=0;

searchInForm.addEventListener('click',()=>{


  if(c%2==0){
  infoMessage.style.display='none';
  searchMenu.style.display='flex';
  searchMessage.style.display='block';
  finalListAdder.style.display='none';
  
  }
  else{
    infoMessage.style.display='block';
    searchMenu.style.display='none';
    searchMessage.style.display='none';
    finalListAdder.style.display='block';
  }
  c++;
});

find.addEventListener('click',()=>{

const datatype=searchDataInBar.value;
console.log(datatype)
  for(const array_member of info)
  {
    const dataForSearchName=array_member.nameEntry;
    const dataForSearchMail=array_member.mailEntry;
    const dataForSearchWeb=array_member.webEntry;
    const dataForSearchImage=array_member.imageEntry;
    const dataForGender= array_member.persongender;
    
    if(datatype===dataForSearchName || datatype===dataForSearchImage || datatype===dataForSearchWeb || datatype===dataForSearchMail || datatype===dataForGender )
    {  
      const renderSearchData=document.createElement('div');

    renderSearchData.className='new-person-search';
    renderSearchData.innerHTML=`
    <div class="render-data-text">  
    <h1>${dataForSearchName}</h1>
    <h1>${dataForGender}</h1>
    <h1>${dataForSearchMail}</h1>
    <h1>${dataForSearchWeb}</h1>

    </div>
    <div  class="render-image">
    <img src="${dataForSearchImage}" alt="" width="100px">
    </div>
    
    `
  dataSearchRender.append(renderSearchData);
  
  clear.addEventListener('click',()=>{
    renderSearchData.remove();
    console.log('this works')
   })


    }
  
  } 

});


function addInfo(){

  const personNameInObj=personName.value;
  const personMailInObj=personMail.value;
  const personWebInObj=personWeb.value;
  const personImgInObj=imageLink.value;
  

  
  const dC={

    nameEntry:personNameInObj,
    mailEntry : personMailInObj,
    webEntry: personWebInObj,
    imageEntry:personImgInObj,
    persongender:gender
 }
  

   info.push(dC);
  console.log(info);
  // console.log(gender);
 //  console.log(personImgInObj);
 
   renderInfo(dC.nameEntry,dC.mailEntry,dC.webEntry,dC.persongender,personImgInObj,skillsHTML,skillsCSS,skillsJS);

 //updateUI();
 skillsHTML='';
 skillsCSS='';
 skillsJS='';
 gender='';
 personName.value='';
 personMail.value='';
 personWeb.value='';
 imageLink.value='';

};



function renderInfo(name,mail,website,gen,img,skillhtml,skillcss,skilljs){

 const newPersonAdd = document.createElement('div');
 newPersonAdd.className='new-person';
 newPersonAdd.innerHTML=`
   <div class="render-data-text">  
    <h1>${name}</h1>
    <h1>${gen}</h1>
    <h1>${mail}</h1>
    <h1>${website}</h1>
   
    <div class="skills-data">
    <img src="${skillhtml}" alt="" width="30px">
    <img src="${skillcss}" alt=""  width="30px">
    <img src="${skilljs}" alt="" width="30px">
    </div>
   
    </div>
 
   <div  class="render-image">
   <img src="${img}" alt="" width="100px">
   </div>
`;
  
   
  finalListAdder.append(newPersonAdd);


   function clearIt()
   {
    alert('the entire data will be deleted and cannot be restored!!');
     info=[];
     newPersonAdd.remove();
   };
   cancel.addEventListener('click',clearIt);
}


clickSubmit.addEventListener('click',addInfo)



malebtn.addEventListener('click',()=>{

  gender='Male';
  malebtn.style.opacity='0.5';
  femalebtn.style.opacity='1';
});

femalebtn.addEventListener('click',()=>{

  gender='female';
  femalebtn.style.opacity='0.5';
  malebtn.style.opacity='1';
});

htmlskillSelector.addEventListener('click',()=>{

   skillsHTML='246185-removebg-preview.png';
});

cssskillSelector.addEventListener('click',()=>{

  skillsCSS='CSS3_logo.svg-removebg-preview.png';
});
jsskillSelector.addEventListener('click',()=>{

  skillsJS='javascript-removebg-preview.png';
});























/*  dataList.style.fontFamily=" 'Yuji Hentaigana Akebono', cursive";
 dataList.style.color='white';
 dataList.style.display='flex';
 dataList.style.flexDirection='column';
 finalListAdder.style.display='flex'; 
 finalListAdder.style.justifyContent='space-around'
 finalListAdder.style.fontFamily=" 'Yuji Hentaigana Akebono', cursive";
 finalListAdder.style.alignItems='centre'; 
 listCorrector.style.display='flex';
 listCorrector.style.flexDirection='column';
 
 
 dataList.style.justifyContent='space-around'
 
 
const listCorrector=  document.createElement('div');
const dataIMAGEList = document.createElement('div');
 dataList =document.createElement('div');
 NAMEInList=document.createElement('h1');
 MAILInList=document.createElement('h1');
 WEBInList=document.createElement('h1');
 IMAGEInList=document.createElement('h1');
 

    
 function divStyler(){
 
  listCorrector.style.display='flex'
  listCorrector.style.width='30rem'
  listCorrector.style.justifyContent='space-around';
  IMAGEInList.style.backgroundPosition='centre';
  IMAGEInList.style.backgroundSize='cover';
  IMAGEInList.style.height='10rem';
  
  
}



  NAMEInList.textContent=dataContaier.nameEntry;
  MAILInList.textContent=dataContaier.mailEntry;
  WEBInList.textContent=dataContaier.webEntry;
  IMAGEInList.src=imageLink;
  
  console.log(IMAGEInList.value);

  divStyler();


  dataList.append(NAMEInList);
  dataList.append(MAILInList);
  dataList.append(WEBInList);
  

  listCorrector.append(dataList);
  listCorrector.append(IMAGEInList)

  finalListAdder.append(listCorrector);

  */