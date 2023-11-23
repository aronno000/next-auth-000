import React from 'react'
import DeleteBtn from './DeleteBtn';
import Link from 'next/link';
import { AiFillEdit } from 'react-icons/ai';


const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    // Handle error and return an empty array to avoid rendering errors
    return [];
  }
};  

export default async function TopicsList() {
  const topics = await getTopics(); // Use the updated getTopics function

  if (!topics) {
    return <div>Failed to fetch topics</div>; // Display error message if topics is undefined
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-secondary">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((t) => (
            <tr key={t._id}>
              <td>{t.title}</td>
              <td>{t.description}</td>
              <td className='flex flex-col md:flex-row lg:flex-row gap-4'>
                <DeleteBtn />
                <Link href={`editTopic/${t._id}`} className='btn btn-active btn-secondary'><AiFillEdit size={26}/></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
