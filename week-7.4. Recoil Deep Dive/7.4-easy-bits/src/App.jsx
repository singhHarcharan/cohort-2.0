import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './assets/atoms'
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  return (
    <RecoilRoot>
      <Navbar />
    </RecoilRoot>
  )
}

function Navbar() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  useEffect( () => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then( res => {
        setNetworkCount(res.data)
      })
  }, [])

  return <div>
    <button>Home</button>

    <button>My Network {networkCount.networks >= 100 ? "99+" : networkCount.networks}</button>
    <button>Jobs {networkCount.jobs}</button>
    <button>Messaging {networkCount.messages} </button>
    <button>Notifications {networkCount.notifications} </button>

    <button>Me ({totalNotificationCount}) </button>
  </div>
}

export default App
