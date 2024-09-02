import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-#121325;
"> 
      {/* Header */}
      <header  className="bg-blue-950 rounded-lg shadow-md p-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-orange-200">My Portfolio</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section className="my-8">
          <h2 className="text-4xl font-bold text-orange-100 mb-4">About Me</h2>
          <p className="text-1xl-white">
         Aspiring UX/UI designer with a keen interest in applying creativity and technical skills. 
         Committed to continuous learning and professional growth, with a strong passion for refining
          design skills and contributing effectively to a dynamic team.
 </p>
 </section>

 <div className="flex items-center justify-center h-full">
{/*<div className="bg-blue-950 rounded-lg shadow-md p-4 flex items-center justify-center h-full - w-200">*/}
 <img src="src/assets/cv.jpg" className="logo react w-full h-auto max-w-md" alt="CV" />
</div>

 {/*CERTIFICATES */}
 <section className="my-8">
  <h2 className="text-4xl font-bold text-orange-100 mb-4">CERTIFICATES</h2>
  
  {/* grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
    
    {/* NC2 - First Grid Item with reduced margin */}
    <div className="flex items-center justify-center m-0">  
      <img src="src/assets/nc2.jpg" className="logo react w-full h-auto max-w-md" alt="NC2 Certificate" />
    </div>
    
    {/* Second Grid with inner grids */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      
      {/* NETWORKING */}
      <div className="flex items-center justify-center m-0"> {/*<!-- Adjust margin if needed -->*/}
        <img src="src/assets/ns.jpg" className="logo react w-full h-auto max-w-md" alt="Networking Certificate" />
      </div>

      {/* MTA JAVA */}
      <div className="flex items-center justify-center m-0"> {/*<!-- Adjust margin if needed -->*/}
        <img src="src/assets/jv.jpg" className="logo react w-full h-auto max-w-md" alt="Java Certificate" />
      </div>

      {/* CODE YOUR FUTURE */}
      <div className="flex items-center justify-center m-0"> {/*<!-- Adjust margin if needed -->*/}
        <img src="src/assets/cyf.jpg" className="logo react w-full h-auto max-w-md" alt="Code Your Future Certificate" />
      </div>

      {/* TESDA LOGO */}
      <div className="flex items-center justify-center m-0"> {/*<!-- Adjust margin if needed -->*/}
        <img src="src/assets/lg.jpg" className="logo react w-full h-auto max-w-md" alt="TESDA Logo" />
      </div>

    </div>
  </div>
</section>


        {/* Projects Section */}
        <section className="my-8">
          <h2 className="text-4xl font-bold text-orange-100 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* LMS */}
            <div className="flex items-center justify-center h-screen">
  <div className="bg-purple-100 rounded-lg shadow-md p-4 flex flex-col items-center justify-center w-[400px] lg:w-[600px] h-[500px] lg:h-[600px] mx-auto">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Development</h3>
    <p className="text-gray-950">
      A computerized library management system that manages data and transactions to increase productivity and efficiency.
      Developed using VB.NET and MySQL DB.
    </p>
    <img src="src/assets/lms.jpg" className="logo react w-full h-auto max-w-lg" alt="ld" />
  </div>
</div>




            {/* Web UI */}
  <div className="bg-purple-300 rounded-lg shadow-md p-4 flex flex-col items-center justify-center h-full w-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Design</h3>
            <p className="text-gray-950">A computerized library management system that manages data and transactions to increase productivity and efficiency.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">         
              <img src="src/assets/Home.png" className="logo react w-full h-auto max-w-md" alt="ld" />
              <img src="src/assets/Menu.png" className="logo react w-full h-auto max-w-md" alt="ld" />
              <img src="src/assets/About Us.png" className="logo react w-full h-auto max-w-md" alt="ld" />
           </div>
</div>

            {/* LOGO */}
            <div className="bg-purple-100 rounded-lg shadow-md p-4 center justify-center h-full - w-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Logo Design</h3>
                <p className="text-gray-600">The logo designs were created using Figma and Canva, combining professional tools for 
                  a unique and creative approach.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <img src="src/assets/srn.png" className="logo react w-full h-auto max-w-md object-cover" alt="ld" />
  <img src="src/assets/rb.png" className="logo react w-full h-auto max-w-xl object-cover" alt="ld" />
  <img src="src/assets/ib2.png" className="logo react w-full h-auto max-w-xs object-cover" alt="ld" />
  <img src="src/assets/ib.png" className="logo react w-full h-auto max-w-xs object-cover" alt="ld" />
</div>

            </div>
          </div>~
        </section>

      

      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2024 Ella Marie Pardillo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
