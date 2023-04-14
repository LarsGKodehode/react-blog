import { Post } from './components/Post'
import data from './data/data.json'

function App() {
  return (
    <div>
      <ul>
        {
          data.map(post => <li key={post.id}><Post data={post} /></li>)
        }
      </ul>
    </div>
  )
}

export default App

/**
 * Showcase different ways to write data.map
 */
function Example() {
  return (
    <>
      {/* Fully written callback */}
      {
        data.map(
          (post) => {
            return (
              <li key={post.id}>
                <Post data={post} />
              </li>
            )
          }
        )
      }

      {/* .map using all the implicit stuff */}
      {
        data.map(post => <li key={post.id}><Post data={post} /></li>)
      }
    </>
  )
}