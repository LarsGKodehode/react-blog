export function Post(props) {
  return (
    <article>
      <h2>{props.data.title}</h2>
      <p>{props.data.body}</p>
    </article>
  )
}