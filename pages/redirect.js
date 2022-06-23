import {useEffect} from "react";

export default function Home({ data }) {
  useEffect(() => {
    window.location.href = "https://example.com"
  }, [])

  return (
    <p>test redirect</p>
  )
}
