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

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await userApi.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.log(error);

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
      console.log(error);

      if (error.response.data.code === 11000) {
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
      console.log(error);
      if (error.response && error.status === 401) {
        thunkAPI.dispatch(clearAuthState());
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
