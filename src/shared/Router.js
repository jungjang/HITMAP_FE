import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import MyPage from "../pages/mypage/MyPage";
import PostList from "../pages/sns/PostList";
import Chat from "../pages/socket/Chat";
import SignUp from "../pages/user/SignUp";
import CreatePost from "../pages/sns/CreatePost";
import UpdatePost from "../pages/sns/UpdatePost";
import Login from "../pages/user/Login";
import DetailPost from "../pages/sns/DetailPost";
import Weather from "../pages/main/Weather";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/detail/:postId" element={<DetailPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/update" element={<UpdatePost />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
