import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Refine } from "@refinedev/core";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import UserList from "./components/users/list";
import CreateUser from "./components/users/create";

export default function App() {
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerProvider}
        options={{
          warnWhenUnsavedChanges: true,
        }}
        resources={[
          {
            name: "users",
            list: "/users",
            create: "/users/create",
          },
        ]}
      >
        <Routes>
          <Route path="/" element={<p>Home Page</p>} />

          <Route path="users">
            <Route index element={<UserList />} />
            <Route path="create" element={<CreateUser />} />
          </Route>
        </Routes>

        <UnsavedChangesNotifier />
      </Refine>
    </BrowserRouter>
  );
}
