import { NextPage } from "next"
import { redirect } from 'next/navigation'
import { cookies } from "next/headers"


const verifyToken = async () => {

  const token = (await cookies()).get("shopeeria.token")?.value
  const user = (await cookies()).get("shopeeria.user")?.value

  if (!token){
    redirect("/")
  }
  return {user}
}

const Profile: NextPage = async () => {
  const { user } = await verifyToken()

  return (
    <main >
      <div >
        <div >
          <h2 >
            Olá {user || "Usuário"}!
          </h2>
        </div>
        <div>
          <button
            type="submit"
          >
            Sair
          </button>
        </div>
      </div>
    </main>
  )
}

export default Profile
