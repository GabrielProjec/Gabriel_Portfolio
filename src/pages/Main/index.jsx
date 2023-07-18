import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Siderbar";

import { Container } from "./main";

export default function Main() {
  return (
    <Container>
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </Container>
  );
}
