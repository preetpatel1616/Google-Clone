import Search from './Search';
export const MicIcon = () =>{
    return <img className='mic-icon' src="https://i.pinimg.com/originals/ea/5f/5b/ea5f5bd3b4110f2afb958049b4096d3a.png" alt='Mic'/>
}


const Clearall = (e) =>{

    e.preventDefault();
    
    
}

export const CrossIcon = ({searchterm}) =>{
    if (searchterm){
        return <button type='button' onClick={Clearall}
        style=
        {{background: "none", color: "inherit",border:"none",cursor:"pointer"
        }}><img className='cross-icon' src="https://icon-library.com/images/multiply-icon/multiply-icon-2.jpg"/></button>
    }

    else{
       return null
    }

}
    

