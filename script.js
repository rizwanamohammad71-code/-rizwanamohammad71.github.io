function showSection(sectionId){
    const sections=document.querySelectorAll('.section');
    sections.forEach(section=>{ 
        if(section.id==sectionId){
            section.style.display=section.style.dispaly=='block'?'none':'block'
        }else{
            section.style.display='none';
        }
        })
        }
        window.onload=()=>{
            
        }
    