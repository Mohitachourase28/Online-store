import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;
    return (
        <div>
               <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className=" text-xl text-red-900 font-bold">All User</h1>
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-red-100 text-red-900" >
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-red-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-red-100 text-slate-700 bg-slate-100">Location Name</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-red-100 text-slate-700 bg-slate-100">Action</th>
                            <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-red-100 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                        <tr className="text-red-900">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 ">
                                S.No.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                Name
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                Email
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                Uid
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                Role
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                Date
                            </td>
                            {/* <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 text-green-900 cursor-pointer ">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 text-red-900 cursor-pointer ">
                                Delete
                            </td> */}
                        </tr>
                        {
                                getAllUser.map((value, index) => {
                                    return (
                                        <tr key={index} className="text-red-900">
                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 ">
                                                {index + 1}
                                            </td>
                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                {value.name}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                                                {value.email}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500  cursor-pointer ">
                                                {value.uid}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500  cursor-pointer ">
                                                {value.role}
                                            </td>
                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-red-100 stroke-slate-500 text-slate-500 cursor-pointer ">
                                                {value.date}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default UserDetail;