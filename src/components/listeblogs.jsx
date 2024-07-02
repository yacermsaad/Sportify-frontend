import { useState } from "react";
import Mod_Blog_popup from "./blogs/mod_blog_popup";
import Sup_Blog_popup from "./blogs/suprm_blog_popup";
import { useEffect } from "react";
import axios from "axios";
function List_blogs(props) {
    const [blogs, setBlogs] = useState([]);
    const fetchData = async () => {
        if (props.storedCoachId) {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/coach/${props.storedCoachId}`);
            setBlogs(response.data.coach.blogs);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };
    useEffect(() => {
        fetchData();
      }, [props.storedCoachId]);
    const [currentpage,setcurrentpage]=useState(1);
    const [number_blg,setnumber_blg]=useState(4);
    const indexoflasteetud=currentpage*number_blg;
    const indexoffirstetud=indexoflasteetud-number_blg
    var currentetud=blogs.slice(indexoffirstetud,indexoflasteetud)
    const pagenumber=[]

    function paginate(number){
        setcurrentpage(number)
    }
    for(let i=1;i<Math.ceil(blogs.length/number_blg)+1;i++){
        pagenumber.push(i);

    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      };

      const [isOpen_m_blg, setIsOpen_m_blg] = useState(false);
      const [isOpen_sup_blg, setIsOpen_sup_blg] = useState(false);
      const [selectedBlog, setSelectedBlog] = useState(null);

      const openModBlog = (blog) => {
        setSelectedBlog(blog);
        setIsOpen_m_blg(true);
      };
    
      const openSupBlog = (blog) => {
        setSelectedBlog(blog);
        setIsOpen_sup_blg(true);
      };
    
      const closeModalblg = () => {
        setIsOpen_m_blg(false);
        setIsOpen_sup_blg(false);
        setSelectedBlog(null);
      };
    
    return( (
        <div className="card   shadow-md border p-5 rounded-md ">
        <p className="font-medium text-lg text-gray-600">Liste des blogs</p>
        
             < div className=' mt-5 rounded-lg'>
            <table className=' w-full border mb-5 ' >
              <thead style={{color:"white"}} >
                <tr className=" border-gray-300 text-center">
                <th className="px-4 py-2 bg-green-400">Image</th>
                  <th className="px-4 py-2 bg-green-400">Title</th>
                  <th className="px-4 py-2 bg-green-400">Content</th>
                  <th className="px-4 py-2 bg-green-400">Date</th>
               
                  <th className="px-4 py-2 bg-green-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentetud.map((blg) => (
                    <tr className='border-b' key={blg.id}>
                    <td className="px-4 py-1 w-[13rem] h-[9rem]">
                        <img className='w-full' src={`http://localhost:8000/storage/${blg.images[0].img}`} alt="Blog Image" />
                    </td>
                    <td className="px-4 py-1">{blg.titre}</td>
                    <td className="px-4 py-1">{blg.contenu}</td>
                    <td className="px-4 py-1">{formatDate(blg.created_at)}</td>
                    <td className="px-4 py-1">
                        <button
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                        onClick={() => openModBlog(blg)}
                        >
                        Modifier {blg.id}
                        </button>
                        <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => openSupBlog(blg)}
                        >
                        Supprimer {blg.id}
                        </button>
                    </td>
                    </tr>
                ))}
                {selectedBlog && (
                    <>
                    <Mod_Blog_popup isOpen={isOpen_m_blg} setOpen={closeModalblg} blog={selectedBlog} fetchData={fetchData} />
                    <Sup_Blog_popup isOpen={isOpen_sup_blg} setOpen={closeModalblg} blog={selectedBlog} fetchData={fetchData}  />
                    </>
                )}
                </tbody>

            </table>
          
            <ul className='flex justify-end -space-x-px text-sm mr-5   '>
             <li className="flex items-center justify-center px-3 h-9 leading-tight text-white bg-green-500 border border-white hover:bg-green-300 hover:text-balck cursor-pointer font-bold " onClick={()=>{if(currentpage>1){setcurrentpage(currentpage-1)}}}>{'Previous'}</li>
 
                 {pagenumber.map((pgn,key4)=>(
                 <li key={key4}>
                  <a onClick={()=>{paginate(pgn)}} className="flex items-center justify-center px-3 h-9 leading-tight text-white bg-green-500 border border-white hover:bg-green-300 hover:text-balck cursor-pointer">{pgn}</a>
                 </li>))}
                 <li className="flex items-center justify-center px-3 h-9 leading-tight text-white bg-green-500 border border-white hover:bg-green-300 hover:text-balck cursor-pointer font-bold" onClick={()=>{if(currentpage<pagenumber.length){setcurrentpage(currentpage+1)}}}>{'Next'}</li>
             </ul >
            
          </div>
          
        </div>)

    )
}
export default List_blogs