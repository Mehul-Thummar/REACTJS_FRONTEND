import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom'


const Crud_database = () => {
    return (
        <div>
            <div className='flex justify-center h-screen w-screen'>
                <div>
                    <h1 className='text-center font-semibold p-4 text-4xl '>CRUD Database</h1>
                    <div className=''>

                        {/* *************** Row - Head *************** */}
                        <div className='border-y-[2px] w-screen mb-3'></div>
                        <div className='flex justify-around '>
                            <h1 className='     font-bold '>ID</h1>
                            <h1 className='w-32 font-bold '>First</h1>
                            <h1 className='w-32 font-bold '>Last</h1>
                            <h1 className='w-32 font-bold '>Email</h1>
                            <h1 className='w-32 font-bold '>Phone</h1>
                            <h1 className='w-40 font-bold '>Location</h1>
                            <h1 className='w-32 font-bold '>Hobby</h1>
                            <h1 className='w-32 font-bold '>Actions</h1>
                        </div>

                        {/* *************** Row - 1 *************** */}
                        <div className='border-y-[2px] w-screen my-3'></div>
                        <div className='flex justify-around '>
                            <h1 className='      font-bold'>35</h1>
                            <h1 className=' w-32 '>Jane</h1>
                            <h1 className=' w-32 '>Smith</h1>
                            <h1 className=' w-32 '>js@gmail.com</h1>
                            <h1 className=' w-32 '>503-555-5555</h1>
                            <h1 className=' w-40 '>Portland, Oregeon</h1>
                            <h1 className=' w-32 '>Photography</h1>
                            <div className='flex space-x-3 w-32'>
                                <NavLink to="/Edit">
                                    <button className='bg-yellow-400 hover:bg-red-400 p-2 rounded'>Edit</button>
                                </NavLink>
                                <NavLink to="/Add">
                                    <button className='hover:bg-green-400 bg-red-700 p-2 rounded text-white'>Del</button>
                                </NavLink>

                            </div>
                        </div>

                        {/* *************** Row - 2 *************** */}
                        <div className='border-y-[2px] w-screen my-3'></div>
                        <div className='flex justify-around '>
                            <h1 className='      font-bold'>36</h1>
                            <h1 className=' w-32 '>Tristan</h1>
                            <h1 className=' w-32 '>Rodriguez</h1>
                            <h1 className=' w-32 '>tr@gmail.com</h1>
                            <h1 className=' w-32 '>201-555-5555</h1>
                            <h1 className=' w-40 '>New York, New York</h1>
                            <h1 className=' w-32 '></h1>
                            <div className='flex space-x-3 w-32'>
                                <NavLink to="/Edit">
                                    <button className='bg-yellow-400 hover:bg-red-400 p-2 rounded'>Edit</button>
                                </NavLink>
                                <NavLink to="/Add">
                                    <button className='hover:bg-green-400 bg-red-700 p-2 rounded text-white'>Del</button>
                                </NavLink>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 rounded px-5 py-2.5 me-2 mb-2'>Downloard CSV</button>
                            <NavLink to="/Add">
                                <button type="button" className=' focus:outline-none text-white bg-[#2ea22e] hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded px-5 py-2.5 me-2 mb-2 '>Add Item</button>
                            </NavLink>

                        </div>



                        <div className='page'>
                            <Stack spacing={2}>
                                <Pagination count={5} />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Crud_database

{/* <table>
    <thead>
        <tr >
            <th className='font-bold w-20'>ID</th>
            <th className='font-bold w-20'>First</th>
            <th className='font-bold '>Last</th>
            <th className='font-bold '>Email</th>
            <th className='font-bold '>Phone</th>
            <th className='font-bold '>Location</th>
            <th className='font-bold '>Hobby</th>
            <th className='font-bold '>Action</th>
        </tr>
    </thead>
</table> */}

// {/* *************** Row - 3 *************** */}
// <div className='border-y-[2px] w-screen my-3'></div>
// <div className='flex justify-around '>
//     <h1 className='      font-bold'>37</h1>
//     <h1 className=' w-32 '>Andrea</h1>
//     <h1 className=' w-32 '>Jones</h1>
//     <h1 className=' w-32 '>aj@gmail.com</h1>
//     <h1 className=' w-32 '>503-555-5555</h1>
//     <h1 className=' w-40 '>Portland, Oregeon</h1>
//     <h1 className=' w-32 '>Programming</h1>
//     <div className='flex space-x-3 w-32'>
//         <button className='bg-yellow-400 hover:bg-red-400 p-2 rounded'>Edit</button>
//         <button className='hover:bg-green-400 bg-red-700 p-2 rounded text-white'>Del</button>
//     </div>
// </div>

// {/* *************** Row - 4 *************** */}
// <div className='border-y-[2px] w-screen my-3'></div>
// <div className='flex justify-around '>
//     <h1 className='      font-bold'>38</h1>
//     <h1 className=' w-32 '>Elliott</h1>
//     <h1 className=' w-32 '>Richardson</h1>
//     <h1 className=' w-32 '>er@gmail.com</h1>
//     <h1 className=' w-32 '></h1>
//     <h1 className=' w-40 '>Boise, Idaho</h1>
//     <h1 className=' w-32 '></h1>
//     <div className='flex space-x-3 w-32'>
//         <button className='bg-yellow-400 hover:bg-red-400 p-2 rounded'>Edit</button>
//         <button className='hover:bg-green-400 bg-red-700 p-2 rounded text-white'>Del</button>
//     </div>
// </div>

// {/* *************** Row - 5 *************** */}
// <div className='border-y-[2px] w-screen my-3'></div>
// <div className='flex justify-around '>
//     <h1 className='      font-bold'>39</h1>
//     <h1 className=' w-32 '>June</h1>
//     <h1 className=' w-32 '>Bug</h1>
//     <h1 className=' w-32 '>jb@gmail.com</h1>
//     <h1 className=' w-32 '></h1>
//     <h1 className=' w-40 '></h1>
//     <h1 className=' w-32 '>Cooking</h1>
//     <div className='flex space-x-3 w-32'>
//         <button className='bg-yellow-400 hover:bg-red-400 p-2 rounded'>Edit</button>
//         <button className='hover:bg-green-400 bg-red-700 p-2 rounded text-white'>Del</button>
//     </div>
// </div>