import Image from "next/image"
import NavBarAdmin from "@/components/NavBarAdmin"

export default function Page() {
    return (
        <div>
            <NavBarAdmin />

            <div className="flex-1 ml-[250px] p-6 bg-gray-50">
                <div className="mb-5">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-lg text-gray-600">Manage your content and users here</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-4">Users Information</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left bg-gray-100">Profile Image</th>
                <th className="px-4 py-2 text-left bg-gray-100">User</th>
                <th className="px-4 py-2 text-left bg-gray-100">Registration Date</th>
                <th className="px-4 py-2 text-left bg-gray-100">Status</th>
                <th className="px-4 py-2 text-left bg-gray-100">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="px-4 py-2 border-b">Jane Doe</td>
                <td className="px-4 py-2 border-b">2024-01-15</td>
                <td className="px-4 py-2 border-b">Active</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 hover:underline">Edit</button> |{" "}
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="px-4 py-2 border-b">John Smith</td>
                <td className="px-4 py-2 border-b">2023-12-12</td>
                <td className="px-4 py-2 border-b">Inactive</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 hover:underline">Edit</button> |{" "}
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="px-4 py-2 border-b">Alice Green</td>
                <td className="px-4 py-2 border-b">2024-02-05</td>
                <td className="px-4 py-2 border-b">Active</td>
                <td className="px-4 py-2 border-b">
                  <button className="text-blue-500 hover:underline">Edit</button> |{" "}
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
            </div>
       
        </div>
    )
}
