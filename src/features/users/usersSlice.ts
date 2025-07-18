import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { User } from './types';
import { api } from '@/lib/axios';

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Асинхронный запрос на загрузку пользователей
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await api.get<User[]>('/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка при загрузке пользователей';
      });
  },
});

export default usersSlice.reducer;
