import './App.css'
import { Home } from './components/Pages/Home/Home'
import { TasksProvider } from './components/Context/Context'

export const App = () => (
  <TasksProvider>
    <Home />
  </TasksProvider>
)