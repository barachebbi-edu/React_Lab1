import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from '../components/Greeting'
import StatusBadge from '../components/StatusBadge'
import UserCard from '../components/UserCard'
import Product from '../components/Product'
import Card from '../components/Card'
import BlogPost from '../components/BlogPost'
import MovieList from '../components/MovieList'
import ToggleButton from '../components/ToggleButton'

function App() {
  const [count, setCount] = useState(0)

  const movies = [
    {
      id: 1,
      title: "The Matrix",
      director: "Wachowski",
      year: 1999,
      rating: 4,
      poster:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      title: "Inception",
      director: "Nolan",
      year: 2010,
      rating: 5,
      poster:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Nolan",
      year: 2008,
      rating: 5,
      poster:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      title: "Interstellar",
      director: "Nolan",
      year: 2014,
      rating: 5,
      poster:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
    }
  ]

  return (
    <>
    <div className="App">
      <Greeting />
      <StatusBadge />
      <UserCard
        name="Alice"
        email="Alice@gmail.com"
        role="Developer"
      />
      <UserCard
        name="Bob"
        email="bob@gmail.com"
        role="Designer"
      />
      <UserCard
        name="Charlie"
        email="charlie@gmail.com"
        role="Manager"
      />
      <Product
        title="laptop"
        price={999}
        inStock={true}
        rating={4.5}
      />
      <Product
        title="Smartphone"
        price={499}
        inStock={false}
        rating={4.0}
      />
      <Product
        title="Headphones"
        price={99}
        inStock={true}
        rating={5}
      />
      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
      </Card>
      <Card title="Card 2">
        <p>This is the content of Card 2.</p>
      </Card>
      <Card title="Card 3">
        <p>This is the content of Card 3.</p>
      </Card>
      <BlogPost
        title="Learning React"
        author={{
          name: "Alice",
          email: "alice@example.com",
          role: "Developer"
        }}
        content="React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable components and manage state efficiently."
        date="2024-06-01"
      />
      <BlogPost
        title="React Tips"
        author={{
          name: "Bob",
          email: "bob@example.com",
          role: "Designer"
        }}
        content="Always break your UI into reusable components."
        date="Jan 20"
      />
      <MovieList movies={movies} />
      <ToggleButton isvisible={true} />
      <ToggleButton isvisible={false} />
      </div>

    </>
  )
}

export default App
