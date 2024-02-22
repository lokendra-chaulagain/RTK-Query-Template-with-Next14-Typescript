"use client";
import { useGetAllCommitteeQuery } from "@/lib/features/comitteeSlice";

export default function GetAll() {
  const { data, isError, isLoading } = useGetAllCommitteeQuery({});

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  console.log(data);

  return <div>{data && <p>Yes I got all data</p>}</div>;
}
