import '../App.css'

function Navbar(){
    return(
        <>
            <div className='fixed pt-10'>
                <ul className='flex flex-row gap-20  w-full bg-white h-[30px] p-8 justify-center items-center rounded-full z-50'>
                    <li className='hover:bg-gray-300 p-2 rounded-2xl cursor-pointer'>Home</li>
                    <li className='hover:bg-gray-300 p-2 rounded-2xl cursor-pointer'>About</li>
                    <li className='hover:bg-gray-300 p-2 rounded-2xl cursor-pointer'>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;