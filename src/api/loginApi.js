import axios from 'axios';
import { useQuery } from 'react-query';

const header = { 'Content-Type': 'application/json' };
const config = {
  retry: 0,
  enabled: false,
  refetchOnWindowFocus: false,
  manual: true,
};

export const sendLoginInfo = async (loginInfor) => {
  const res = await axios.post('/login', JSON.stringify(loginInfor), {
    headers: header,
  });
  console.log(res.data.accessToken);
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${res.data.accessToken}`;
};

export const useSendLogin = (loginInfor) =>
  useQuery('loginInfor', sendLoginInfo(loginInfor), config);

const sendLogout = () => axios.get('/logout', { headers: header });

const getUserInfor = () =>
  axios.get('/api/v1/user/me', {
    headers: header,
  });

export const useGetUserInfor = () =>
  useQuery('loginInfor', getUserInfor, {
    retry: 0,
    refetchOnWindowFocus: false,
  });

export const useLogout = () => useQuery('logout', sendLogout, config);
