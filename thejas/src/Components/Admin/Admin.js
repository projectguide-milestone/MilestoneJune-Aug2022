
import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./User";
import { PostList } from "./Post";
import { PostEdit } from "./EditPost";
import { PostCreate } from "./CreatePost";
import { Dashboard } from "./DashBoard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const Adminx = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default Adminx;
