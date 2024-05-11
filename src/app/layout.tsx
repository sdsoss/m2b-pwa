'use client';

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/lib/apolloClient";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import "@/styles/globals.scss";

export default function RootLayout({
        children,
    }: Readonly<{
    children: React.ReactNode;
}>) {

    const apolloClient = useApollo();

    if (!apolloClient) {
        console.log("Apollo Client not found");
        return <p>Client not fouind</p>;
    }

    return (
        <html lang="en">
            <body>
                <ApolloProvider client={apolloClient}>
                        <Header />
                        <Sidebar />
                        <div className={"content"}>
                            {children}
                        </div>
                </ApolloProvider>
            </body>
        </html>
    );
}