import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Dashboard() {
  const navigation = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigation('/login')
    }
  }, [navigation])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard