import { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import './styles/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header onShowTask={() => setShowForm(!showForm)} showForm={showForm} />

        <Route
          path="/"
          exact
          render={(props) => <Home onShowForm={() => setShowForm(!showForm)} showForm={showForm} />}
        />

        <Route
          path="/about"
          component={About}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
