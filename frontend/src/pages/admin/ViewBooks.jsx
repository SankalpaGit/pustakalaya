import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ViewBooks = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">List of Books</h2>
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr className="bg-orange-100">
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">ID</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Title</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Author</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">ISBN</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Quantity</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Status</th>
            <th className="py-2 px-4 border border-gray-300 text-center text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border border-gray-300 text-center">1</td>
            <td className="py-2 px-4 border border-gray-300 text-center">The Great Gatsby</td>
            <td className="py-2 px-4 border border-gray-300 text-center">F. Scott Fitzgerald</td>
            <td className="py-2 px-4 border border-gray-300 text-center">9780743273565</td>
            <td className="py-2 px-4 border border-gray-300 text-center">10</td>
            <td className="py-2 px-4 border border-gray-300 text-center">Available</td>
            <td className="py-2 px-4 border border-gray-300 text-center">
              <div className="flex justify-center space-x-2">
                <FaEdit className="text-blue-500 cursor-pointer" />
                <FaTrash className="text-red-500 cursor-pointer" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewBooks;