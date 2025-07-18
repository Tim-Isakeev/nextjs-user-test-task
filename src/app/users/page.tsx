'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../features/users/usersSlice';
import { RootState, AppDispatch } from '../../store';
import Link from 'next/link';

export default function UsersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Список пользователей</h1>

      {loading && <p>Загрузка...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="grid gap-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded shadow hover:bg-gray-50 transition">
            <Link href={`/users/${user.id}`}>
              <div className="cursor-pointer">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <img
                  src={`https://robohash.org/${user.id}?set=set5`}
                  alt="avatar"
                  className="w-20 h-20 mt-2 rounded-full"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
