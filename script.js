const menuItems=document.querySelectorAll(".menu-items");
// ....message notification........
const notificationMessage=document.querySelector('#messages-notification');
const messages=document.querySelector('.messages');

// ..............message.....
const message=messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');

// .....theme........display..............

const  theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme');
const fontSize=document.querySelectorAll('.choose-size span');
const root=document.querySelector(':root');
// .........color..............
const colorPlate=document.querySelectorAll('.choose-color span');

// ...........background color..........
const bg1=document.querySelector('.bg-1');
const bg2=document.querySelector('.bg-2');
const bg3=document.querySelector('.bg-3');

//remove active class from all menu item 
const changeActiveitem=()=>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}



menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveitem();
        item.classList.add('active');
        if(item.id !='notifications'){
            document.querySelector('.notification-popup').style.display='none';
            document.querySelector('#notifications .notification-count').style.display='block';
        }else{
            document.querySelector('.notification-popup').style.display='block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})

// ................heighlited message box when click on message icon.........
notificationMessage.addEventListener('click', ()=>{
    messages.style.boxShadow="0 0 1rem var(--color-primary)";
   notificationMessage.querySelector('.notification-count').style.display='none';
    setTimeout(()=>{
        messages.style.boxShadow='none';
    }, 2000);
})
// ......search a message when write in search bar................
const searchMessage =()=>{
       const valueOfsearch=messageSearch.value.toLowerCase();
      
       message.forEach(chat =>{
        let name= chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(valueOfsearch) != -1) {
            chat.style.display="flex";
        } else {
            chat.style.display="none";
        }
       })
}
// .....................
messageSearch.addEventListener('keyup', searchMessage);


// .............theme / display customization

//===========open model=======
const openModel=()=>{
    themeModal.style.display='grid';
}

// ===========close model==============
const closeThemeModel=(e) =>{
       if (e.target.classList.contains('customize-theme')) {
          themeModal.style.display='none';
       }
}
 themeModal.addEventListener('click', closeThemeModel)
//=======eventlisterner on model==========
theme.addEventListener('click', openModel);

// .............font size.............
//remove active class from fontsize...........
const removeSizeActive=()=>{
    fontSize.forEach(size=>{
        size.classList.remove('active');
    })
}

fontSize.forEach(size =>{


  size.addEventListener('click' , ()=>{


    let fontSize;
    removeSizeActive();
    size.classList.toggle('active');


    if (size.classList.contains('font-size-1')) {
        fontSize= "10px";
        root.style.setProperty('--stiky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');
      } else if(size.classList.contains('font-size-2')) {
        fontSize= "13px";
        root.style.setProperty('--stiky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
      }
      else if(size.classList.contains('font-size-3')) {
        fontSize= "16px";
        root.style.setProperty('--stiky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
      }
      else if(size.classList.contains('font-size-4')) {
        fontSize= "22px";
        root.style.setProperty('--stiky-top-left', '-3rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
      }  
      else {
        fontSize= "22px";
        root.style.setProperty('--stiky-top-left', '-12rem');
        root.style.setProperty('--sticky-top-right', '-35rem');
      }
    
      document.querySelector('html').style.fontSize=fontSize;
  })
})

//  ................color.............
// ......remove active classs
const changeColorActive=()=>{
  colorPlate.forEach(colorpicker =>{
    colorpicker.classList.remove('active');
  })
}

// ..........................add color............
colorPlate.forEach(color => {
    color.addEventListener("click", ()=>{
        let primaryhue;
        changeColorActive();
        if (color.classList.contains('color-1')) {
            primaryhue=252;
        
        }else  if (color.classList.contains('color-2')){
            primaryhue=52;
      
        }
        else  if (color.classList.contains('color-3')){
            primaryhue=352;
        }
        else  if (color.classList.contains('color-4')){
            primaryhue=152;
        }
        else  if (color.classList.contains('color-5')){
            primaryhue=202;
        }
        color.classList.add('active');
        root.style.setProperty("--color-primary-hue", primaryhue);
    })
   
});
// ...........background color ...........




let lightColor;
let whiteColorWhitness;
let darkColorLighness;

const changBG=()=>{
    root.style.setProperty("--light-color-ightness", lightColor)
    root.style.setProperty("--white-color-whiteness", whiteColorWhitness)
    root.style.setProperty("--color-dark-lightnes", darkColorLighness)
}

bg1.addEventListener('click', ()=>{

    bg1.classList.add("active");
 
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    
    window.location.reload();
 })

bg2.addEventListener('click', ()=>{
   darkColorLighness="95%";
   whiteColorWhitness="20%";
   lightColor="15%";

   bg2.classList.add("active");

   bg1.classList.remove("active");
   bg3.classList.remove("active");

   changBG();
})
bg3.addEventListener('click', ()=>{
    darkColorLighness="95%";
    whiteColorWhitness="10%";
    lightColor="0%";
 
    bg3.classList.add("active");
 
    bg1.classList.remove("active");
    bg2.classList.remove("active");
 
    changBG();
 })