
const Main = () => {
  return (
    <div className='container-fluid p-0' style={{ height: "600px",overflow:"hidden" }} >
      <div className='d-flex justify-content-center align-items-center h-100' >

        <div className="w-75 px-3 px-sm-5">
          <h1 className='h1'>Feat wear  <span className='text-primary' >Paradies</span> </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore mollitia harum voluptatibus minus perferendis voluptas numquam distinctio earum illo, iste quas soluta minima quasi vitae vero </p>
          <button className='btn btn-dark mx-2'>login</button>
          <button className='btn btn-primary  mx-2'>admit panel</button>
        </div>

        <div className="w-25 h-100 bg-success" style={{clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0% 100%)"}}>
          <img src="https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75" alt="..." />
        </div>
        
      </div>
    </div>

  )
}

export default Main