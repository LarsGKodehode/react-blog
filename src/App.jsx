import data from './data/data.json'

function App() {
  // console.log(data)

  return (
    <div>

      <ul>
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
      </ul>

    </div>
  )
}

// {
//   data.map((post) => <li><Post key={post.id} data={post} /></li>)
// }

function Post(props) {
  return (
    <article>
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
    </article>
  )
}

export default App
