import useAxios from "axios-hooks";

export default function Home() {
    const [{data, loading, error}, refetch] = useAxios(
        "https://yesno.wtf/api"
    )

    console.log(data)

    if (data === undefined) {
        return (
            <p>fetched data: </p>
        )
    }
    return (
        <p>fetched data: {data.answer}</p>
    )
}
