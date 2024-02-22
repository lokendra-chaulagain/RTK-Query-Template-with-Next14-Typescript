"use client";
import React from "react";
import { useGetCommitteeByIdQuery } from "@/lib/features/comitteeSlice";

export default function GetOne() {
  const { data, isError, isLoading } = useGetCommitteeByIdQuery("65d6a5f1e88aac1f39cddf9c");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Something went wrong</h1>;
  }

  console.log(data);

  return <div>{data && <p>Yes I got single data </p>}</div>;
}
