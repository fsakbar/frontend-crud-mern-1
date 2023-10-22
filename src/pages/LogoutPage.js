import { useEffect } from "react"
import authStore from "../store/authStore"

export default function LogoutPage() {
    const store = authStore();
    useEffect(()=>{
        store.logout()
    }, [])
  return (
    <div>
        <h1>
            Logout Page
        </h1>
    </div>
  )
}
