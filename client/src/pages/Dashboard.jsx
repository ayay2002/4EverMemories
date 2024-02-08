import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

export default function Dashboard() {
    const { user } = useContext(UserContext)
    console.log(useParams())
    

    return (
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h1>Hi {user.name}!</h1>)}
            <div>
                <div>
                    <h1></h1>
                    <span></span>
                </div>
            </div>
            <div>
                <div>
                    <p>
                        <span>
                            Professional photography for weddings, families, and events
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <a href="/"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
