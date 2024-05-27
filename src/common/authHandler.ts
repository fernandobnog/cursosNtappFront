import { AxiosRequestConfig } from "axios";
import { IAuthCache } from "../types/auth";

function getToken() {
  return localStorage.getItem("token");
}

function saveToken(token: string) {
  localStorage.setItem("token", token);
}

function saveUser(user: IAuthCache) {
  localStorage.setItem("user", JSON.stringify(user));
}

function killToken() {
  localStorage.clear();
}

function isLogged() {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
}

function setHeaderAuthForDownloads(): AxiosRequestConfig<unknown> | undefined {
  if (isLogged()) {
    return {
      headers: {
        Authorization: `Bearer ${getToken()}`
      },
      responseType: 'blob'
    }
  }
}


function setHeaderAuth(file?: File | Blob | null) {
  if (file) {
    if (isLogged()) {
      return {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getToken()}`
        }
      }
    }
  } else {
    if (isLogged()) {
      return {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
      }
    }
  }
}

export {
  getToken,
  saveToken,
  saveUser,
  killToken,
  isLogged,
  setHeaderAuth,
  setHeaderAuthForDownloads,
}