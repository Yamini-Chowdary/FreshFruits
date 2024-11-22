 import { Outlet ,useNavigate} from "react-router-dom";
 import AdminTopBar from "../components/Admin/AdminTopBar";
 import { useEffect, useState } from "react"
 import { getRole, isLoginValid } from "../service/auth"
 import { Loader, Loader2 } from "lucide-react"


 const AdminLayout = () => {
  const Navigate = useNavigate()
  const [renderAdmin, setRenderAdmin] = useState(false)
    const role = getRole()
    const checkNavigation = () => {
        if (!isLoginValid || role !== "ADMIN") {
            Navigate('/')
        }
        else {
            setRenderAdmin(true)
        }
    }


    useEffect(() => {
      checkNavigation()
  }, [Navigate])
  

    return (
      
      <>
       {
                renderAdmin ? (
      <div className='flex flex-col flex-initial'>
      <div className=''>
          <AdminTopBar/>       
          </div>

<Outlet />

</div>
 ) : (
  < div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden">
      <Loader2 className="h-14 w-14 animate-spin text-purple-500" />
  </div >
)
}
</>
)
}

export default AdminLayout