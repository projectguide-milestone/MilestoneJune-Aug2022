import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {

  Home,
  Agents,
  Listings,
  Login,
  Signup,
  Forgot,
  Agentt,
  Listing,
  Dashboard,
  UserProfile,
  Messages,
  Password,
  AddLisiting,
  AdminListingList,
  AdminAgentsList,
  AgentListing,
  
} from "./pages";
import  Admin from "./Admin/admin"
import  Create from "./Admin/create"
import  Update from "./Admin/update"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/agents" element={<Agents></Agents>} />
        <Route exact path="/listing" element={<Listings></Listings>} />
        <Route exact path="/agent/:id" element={<Agentt></Agentt>} />
        <Route exact path="/property/:id" element={<Listing></Listing>} />
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/signup" element={<Signup></Signup>} />
        <Route exact path="/forgot-password" element={<Forgot></Forgot>} />
        <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route exact path="/profile" element={<UserProfile></UserProfile>} />
        <Route exact path="/messages" element={<Messages></Messages>} />
        <Route exact path="/change-password" element={<Password></Password>} />
        <Route path="/add-listing/:id" element={<AddLisiting></AddLisiting>} />
        <Route exact path="/all-listing" element={<AdminListingList></AdminListingList>} />
        <Route exact path="/all-agents" element={<AdminAgentsList></AdminAgentsList>} />
        <Route exact path="/mylisting" element={<AgentListing></AgentListing>} />
        <Route exact path="/admin" element={<Admin></Admin>} />
        <Route exact path="/create" element={<Create></Create>} />
        <Route exact path={`/update/:id`} element={<Update></Update>} />
      </Routes>
    </Router>
  );
};

export default App;
