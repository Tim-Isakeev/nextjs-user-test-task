'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { api } from '@/lib/axios';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
  };
}

export default function UserDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        const response = await api.get<User>(`/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Пользователь не найден');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="p-6">Загрузка...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        ← Назад
      </button>

      <div className="border p-6 rounded shadow">
        <h1 className="text-2xl font-bold">{user?.name}</h1>
        <p>Email: {user?.email}</p>
        <p>Телефон: {user?.phone}</p>
        <p>Город: {user?.address.city}</p>
        <p>Улица: {user?.address.street}</p>
        <p>Сайт: {user?.website}</p>
        <img
          src={`https://robohash.org/${user?.id}?set=set5`}
          alt="avatar"
          className="w-24 h-24 mt-4 rounded-full"
        />
      </div>
    </div>
  );
}
