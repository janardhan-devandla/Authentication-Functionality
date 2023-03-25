import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const logoutButton = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={logoutButton}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
