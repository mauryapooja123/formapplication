// import { useState } from "react";
// import User from "./Component/auth/Database/User";
// import Adduser from "./Component/auth/Database/Adduser";
import EditUser from "./Component/auth/Database/editUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./Component/event/events";
import Editevent from "./Component/event/Editevent";
import Addevent from "./Component/event/addevent";
import Adduser from "./Component/Addressuser/Adduser";
import User from "./Component/Addressuser/User";
import Updateuser from "./Component/Addressuser/updateuser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path={"/"} element={<User />} />  */}
          <Route path={"/add-user"} element={<Adduser />} />
          <Route path={"/edit-user/:id"} element={<EditUser />} />
          <Route path={"/events"} element={<Events />} />
          <Route path={"/edit-event/:id"} element={<Editevent />} />
          <Route path={"/add-event"} element={<Addevent />} />
          <Route path={"/user"} element={<User />} />
          <Route path={"/add-user"} element={<Adduser />} />
          <Route path={"/update-user/:id"} element={<Updateuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
