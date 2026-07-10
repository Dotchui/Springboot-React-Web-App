import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (submittedName) {
      setIsLoading(true)
      setError('')
      fetch(`/api/greet/${submittedName}`)
        .then(response => {
          if (!response.ok)
              throw new Error('Network response was not ok')
          return (response.json())
        })
        .then(data => {
          setMessage(data.message)
          setIsLoading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setError('Failed to fetch greeting. Please try again')
          setIsLoading(false)
        })
    }
  }, [submittedName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim())
      setSubmittedName(name.trim());
  };

  const buttonText = isLoading ? 'Loading...' : 'Greet Me!';

  return (
    <div className="container">
      <h1>Spring Boot + React</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" disabled={isLoading}>
          {buttonText}
        </button>
      </form>
      
      {error && <p className="error">{error}</p>}

      {isLoading && <p>Loading...</p>}

      {message && !isLoading && (
        <div className="message">
          <p>Message from backend: {message}</p>
        </div>
      )}
    </div>
  );
}

export default App