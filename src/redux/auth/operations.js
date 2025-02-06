import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import { clearAuthState } from './slice';

export const userApi = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

export const setAuthHeader = token => {
  userApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete userApi.defaults.headers.common.Authorization;
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.post('/users/signup', credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response?.data?.code === 11000) {
        toast.error('User already exist');
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { data } = await userApi.post('/users/logout');
      clearAuthHeader();
      thunkAPI.dispatch(clearAuthState());
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue('Token is not exist');
    }
    setAuthHeader(savedToken);
    try {
      const { data } = await userApi.get('/users/current');
      return data;
    } catch (error) {
      if (error.response?.status === 401) {
        clearAuthHeader();
        thunkAPI.dispatch(clearAuthState());
        console.log(userApi.defaults.headers.common.Authorization);

        return thunkAPI.rejectWithValue('Unauthorized token cleared');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
