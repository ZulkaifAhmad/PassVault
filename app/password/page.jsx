"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOffIcon } from "lucide-react";

export default function PasswordsPage() {
  const { user } = useUser();

  const [open, setOpen] = useState(false);

  const [visibleId, setVisibleId] = useState(null);

  const passwords = user?.unsafeMetadata?.passwords || [];

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const newData = [...passwords, { ...data, id: Date.now() }];

    await user.update({
      unsafeMetadata: { passwords: newData },
    });
    console.log("Updated passwords:", newData);
    reset();
    setOpen(false);
  };

  // ✅ Delete password
  const deletePassword = async (id) => {
    const newData = passwords.filter((p) => p.id !== id);

    await user.update({
      unsafeMetadata: { passwords: newData },
    });

    // If deleted one was visible → reset
    if (visibleId === id) {
      setVisibleId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Password Manager
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm"
          >
            Add Password
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-sm rounded-xl border">
          {passwords.length === 0 ? (
            <p className="text-gray-500 p-6 text-center">
              No passwords saved yet
            </p>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-3 text-left">Site</th>
                  <th className="p-3 text-left">Username</th>
                  <th className="p-3 text-left">Password</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {passwords.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="p-3 font-medium text-gray-800">
                      {p.site}
                    </td>

                    <td className="p-3 text-gray-600">
                      {p.username}
                    </td>

                    {/* ✅ Password Column */}
                    <td className="p-3 text-gray-500">
                      {visibleId === p.id ? (
                        <>
                          <span>{p.password}</span>

                          <EyeOffIcon
                            className="inline-block ml-2 cursor-pointer"
                            size={16}
                            onClick={() => setVisibleId(null)}
                          />
                        </>
                      ) : (
                        <>
                          <span>••••••••</span>

                          <Eye
                            className="inline-block ml-2 cursor-pointer"
                            size={16}
                            onClick={() => setVisibleId(p.id)}
                          />
                        </>
                      )}
                    </td>

                    <td className="p-3 text-right">
                      <button
                        onClick={() => deletePassword(p.id)}
                        className="text-red-500 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-80 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Add Password
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <input
                {...register("site", { required: true })}
                placeholder="Site (Google)"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />

              <input
                {...register("username", { required: true })}
                placeholder="Username / Email"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />

              <input
                {...register("password", { required: true })}
                placeholder="Password"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-gray-500 text-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-black text-white px-3 py-1.5 rounded-lg text-sm"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}