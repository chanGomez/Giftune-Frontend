// DEPENDENCIES
import React, { useEffect, useState } from "react";
import Axios from "./components/API/Axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
// import FriendsWishlist from "./components/FriendswishList/FriendsWishlist";
import UserWishlist from "./components/UserWishlist/UserWishlist";
import EditWishlist from "./components/EditWishlist/EditWishlist";
import AddWishlist from "./components/AddWishlist/AddWishlist";

// COMPONENTS
import SignUpPage from "./components/SignUpPage/Signup";
import SearchPage from "./components/SearchPage/SearchPage";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Nav />
      <Sidebar />
      <Routes>
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        {/* <Route path="/friendswishlist" element={<FriendsWishlist />} /> */}
        <Route path="/userwishlist/:id" element={<UserWishlist />} />
        <Route path="/create-wishlist" element={<AddWishlist />} />
        <Route path="/edit-wishlist/:id/edit" element={<EditWishlist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
