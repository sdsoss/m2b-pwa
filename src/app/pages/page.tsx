'use client';

import { useQuery } from "@apollo/client";
import { GET_PAGES } from "@/graphql/page";

export default function Page() {

    const { data, loading, error } = useQuery(GET_PAGES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            <h1>Pages :</h1>
            <ul>
                {data.getPages.map((page: any) => (
                    <li key={page.id}>
                        <a href={`/page/${page.id}`}>{page.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
