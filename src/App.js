import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Cart from './components/About'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
