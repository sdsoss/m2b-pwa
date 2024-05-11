'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PAGE } from '@/graphql/page';

import Block from '@/components/ContentView/Note/Block';

export default function Page({ params }: { params: { id: string } }) {

    const { data, loading, error } = useQuery(GET_PAGE, {
        variables: { id: params.id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Page :</h1>
            <h2>{data.getPage.title}</h2>
            <>
                {data.getPage.blocks.map((block: any) => {
                    return <Block key={block.id} id={block.id} {...block} />
                })}
            </>
        </div>
     );
}
