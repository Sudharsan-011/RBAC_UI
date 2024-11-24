import React from "react";

const RoleTable = ({ roles, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2">Role ID</th>
          <th className="border px-4 py-2">Role Name</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id} className="text-center">
            <td className="border px-4 py-2">{role.id}</td>
            <td className="border px-4 py-2">{role.name}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(role)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(role)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;

// import React, { useState } from "react";
// import Modal from "./Modal";

// const RoleTable = ({ roles, onEdit, onDelete }) => {
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [currentRole, setCurrentRole] = useState(null);

//   const openEditModal = (role) => {
//     setCurrentRole(role);
//     setIsEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setCurrentRole(null);
//     setIsEditModalOpen(false);
//   };

//   const handleEdit = () => {
//     if (currentRole) {
//       onEdit(currentRole); // Pass the updated role back to parent
//       closeEditModal();
//     }
//   };

//   return (
//     <div>
//       <table className="table-auto w-full border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="px-4 py-2">Role Name</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {roles.map((role) => (
//             <tr key={role.id}>
//               <td className="border px-4 py-2">{role.name}</td>
//               <td className="border px-4 py-2">
//                 <button
//                   onClick={() => openEditModal(role)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded shadow mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(role.id)}
//                   className="bg-red-500 text-white px-4 py-2 rounded shadow"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Edit Role Modal */}
//       {isEditModalOpen && (
//         <Modal onClose={closeEditModal}>
//           <h2 className="text-xl font-bold mb-4">Edit Role</h2>
//           <input
//             type="text"
//             value={currentRole.name}
//             onChange={(e) =>
//               setCurrentRole({ ...currentRole, name: e.target.value })
//             }
//             placeholder="Enter new role name"
//             className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
//           />
//           <div className="flex justify-end">
//             <button
//               onClick={handleEdit}
//               className="bg-green-500 text-white px-4 py-2 rounded shadow mr-2"
//             >
//               Save Changes
//             </button>
//             <button
//               onClick={closeEditModal}
//               className="bg-gray-300 text-black px-4 py-2 rounded shadow"
//             >
//               Cancel
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default RoleTable;


// // import React from "react";

// // const RoleTable = ({ roles }) => {
// //   return (
// //     <table className="min-w-full bg-white border">
// //       <thead>
// //         <tr>
// //           <th className="py-2 px-4 border-b">ID</th>
// //           <th className="py-2 px-4 border-b">Role Name</th>
// //           <th className="py-2 px-4 border-b">Actions</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {roles.map((role) => (
// //           <tr key={role.id}>
// //             <td className="py-2 px-4 border-b">{role.id}</td>
// //             <td className="py-2 px-4 border-b">{role.name}</td>
// //             <td className="py-2 px-4 border-b">
// //               <button className="bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded">
// //                 Edit
// //               </button>
// //               <button className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded ml-2">
// //                 Delete
// //               </button>
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default RoleTable;
