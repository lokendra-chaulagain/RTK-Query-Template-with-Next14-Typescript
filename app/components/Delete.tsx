"use client";
import { useDeleteCommitteeMutation } from "@/lib/features/comitteeSlice";

export default function Delete() {
  const [deleteCommittee, { data, isError, isLoading }] = useDeleteCommitteeMutation();

  const handleDelete = async () => {
    try {
      await deleteCommittee("65d6a5f1e88aac1f39cddf9c");
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>ERRROR</h1>;
  }

  if (data) {
    return <p>Delete success</p>;
  }

  return (
    <div>
      <button
        onClick={handleDelete}
        disabled={isLoading}>
        Delete
      </button>
    </div>
  );
}
