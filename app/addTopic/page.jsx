'use client'

// Import React and necessary hooks
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the AddTopic component
export default function AddTopic() {
  // State variables for form input values
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // useRouter hook to handle navigation
  const router = useRouter();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if title and description are not empty
    if (!title || !description) {
      alert("Please fill in all fields");
      return;
    }

    try { 
      // Send a POST request to the API endpoint
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      // Check if the response is successful
      if (res.ok) {
        // Redirect to the homepage if the topic is added successfully
        router.push('/');
      } else {
        // Log an error if the response is not successful
        console.error("Failed to add topic:", res.statusText);
        throw new Error("Failed to add topic");
      }
    } catch (error) {
      // Log any catch block errors
      console.error("Error adding topic:", error);
    }
  };

  // Render the component
  return (
    <div className='h-[75.1vh]'>
      <h2 className='text-center mb-10 w-max bg-secondary mx-auto p-5 text-2xl'>ADD TOPIC PAGE [CREATE]</h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3 border-4 border-primary py-10 w-[85%] mx-auto'>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Type here Name"
          className="input input-bordered w-full max-w-xs mx-auto"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Type here Description"
          className="input input-bordered w-full max-w-xs mx-auto"
        />

        <button type='submit' className="btn btn-success w-max mx-auto mt-5">ADD Topic</button>
      </form>
    </div>
  );
}
