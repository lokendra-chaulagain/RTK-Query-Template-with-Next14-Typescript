"use client";
import { useAddNewCommitteeMutation } from "@/lib/features/comitteeSlice";
import { useState } from "react";

export default function Create() {
  const [addNewCommittee, { data, error, isLoading, }] = useAddNewCommitteeMutation();

  const [image, setImage] = useState<File | null>(null);

  const handleCreate = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", "Test Name");
    formData.append("position", "Test Position");
    formData.append("description", "test Description");
    image && formData.append("image", image);

    try {
      await addNewCommittee(formData);
    } catch (err) {
      console.error("Error adding new item:", err);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>ERRROR</h1>;
  }

  if(data){
    return <p>Upload success</p>
  }

  console.log(data)

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
        onClick={handleCreate}
        disabled={isLoading}>
        Add New
      </button>
    </div>
  );
}
