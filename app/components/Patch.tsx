"use client";
import { useUpdateCommitteeMutation } from "@/lib/features/comitteeSlice";
import { useState } from "react";

const Patch = () => {
  const [updateCommittee, { data, isError, isLoading }] = useUpdateCommitteeMutation();

  const [image, setImage] = useState<File | null>(null);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", "Test Name Updated");
    image && formData.append("image", image);

    try {
      await updateCommittee({
        id: "65d6a5f1e88aac1f39cddf9c",
        updatedCommittee: formData,
      });
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>ERRROR</h1>;
  }

  if (data) {
    return <p>Update success</p>;
  }

  console.log(data);

  return (
    <div>
      <input
        type="file"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <button
        onClick={handleUpdate}
        disabled={isLoading}>
        Update
      </button>
    </div>
  );
};
export default Patch;
