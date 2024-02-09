import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import Photographer from './Photographer'

export default function Dashboard(props) {
    const { user } = useContext(UserContext)
    console.log(useParams())
    const { role, setRole } = useState(props.role)



    return (
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h1>Hi {user.name}!</h1>)}
            {role === 'user' ?
                <div>
                    <div>
                        <div class="calendly-inline-widget" style="min-width:320px;height:580px;" data-auto-load="false"></div>

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
                </div>: <Photographer />}
    

            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            <script type="module" src="/src/assets/index.js"></script>
        </div>

    )
}


