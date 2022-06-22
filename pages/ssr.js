export default function Home({ data }) {
  return (
    <p>fetched data: {data.answer}</p>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://yesno.wtf/api")
  const data = await res.json()

  return { props: { data }}
}