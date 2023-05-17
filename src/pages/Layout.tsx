import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet/>
    </>);
}