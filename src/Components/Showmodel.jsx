

const MyModal=({Closemenu})=>{
    return(
     <>
     <div className="model-wrapper" onClick={Closemenu}></div>
     <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea illo quos veritatis fugit blanditiis esse, exercitationem cum! Vitae totam iure dolores necessitatibus fuga rerum et ipsam rem aperiam aut? </h2>
     <button onClick={Closemenu}> Cancel</button>
     </>
    );
 }
 export default MyModal;