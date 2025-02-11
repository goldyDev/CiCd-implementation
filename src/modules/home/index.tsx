import { Button } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage: React.FC = () => {
  const navigate=useNavigate()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl font-semibold text-center text-yellow-500 mb-6">
          Welcome to the Home Page
        </h1>
        
        {/* Add Data Link */}
        {/* <Link
          to="/add"
          className="block text-xl text-center text-blue-600 hover:underline mb-4"
        >
          Add New Data
        </Link> */}
        
        {/* Counter Link */}
        {/* <Link
          to="/count"
          className="block text-xl text-center text-blue-600 hover:underline mb-4"
        >
          Go to Counter
        </Link> */}
        
        {/* Button */}
        <Button className="w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sl px-5 py-2.5 text-center mb-4" onClick={() => { navigate("/add") }}>Click here Add</Button>
        <Button className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-large rounded-lg text-xl px-5 py-2.5 text-center mt-4" onClick={()=>{navigate("/count")}}>Counter App</Button>
      </div>
    </div>
  )
}

export default HomePage
