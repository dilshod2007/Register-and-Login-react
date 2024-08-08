import{Route, Routes} from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Register =lazy (()=>import('../routes/register/Register'))
const Login =lazy (()=>import('../routes/login/Login'))
const Profile =lazy (()=>import('../routes/profile/Profile'))
const RouteController = () => {
  return (
<>

<Routes>
<Route path='register' element={<Suspense><Register /></Suspense>} />
<Route path='login' element={<Suspense fallback={<p>Loading...</p>}><Login /></Suspense>} />
<Route path='profile' element={<Suspense fallback={<p>Loading...</p>}><Profile /></Suspense>} />

    </Routes>
</>
  )
}

export default RouteController