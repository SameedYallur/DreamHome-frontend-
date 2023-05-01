import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
CDBSidebar,
CDBSidebarContent,
CDBSidebarFooter,
CDBSidebarHeader,
CDBSidebarMenu,
CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
return (
<div
style={{ display: 'flex', height: '92vh', overflow: 'scroll initial' }}
>
<CDBSidebar textColor="#fff" backgroundColor="#000000">
<CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
<a
className="text-decoration-none"
style={{ color: 'inherit' }}
>Menu
</a>
</CDBSidebarHeader>
<CDBSidebarContent className="sidebar-content">
<CDBSidebarMenu>
<NavLink exact to="/staff-view" activeClassName="activeClicked">
<CDBSidebarMenuItem icon="columns">Staff</CDBSidebarMenuItem>
</NavLink>
<NavLink exact to="/branch-view" activeClassName="activeClicked">
<CDBSidebarMenuItem icon="table">Branch</CDBSidebarMenuItem>
</NavLink>
<NavLink exact to="/property-view" activeClassName="activeClicked">
<CDBSidebarMenuItem icon="user">Property</CDBSidebarMenuItem>
</NavLink>
{/* <NavLink exact to="/property-report" activeClassName="activeClicked">
<CDBSidebarMenuItem icon="fa fa-file">Report</CDBSidebarMenuItem>
</NavLink> */}
<NavLink exact to="/property-view" activeClassName="activeClicked">
<CDBSidebarMenuItem icon="fa fa-file-alt">Leases</CDBSidebarMenuItem>
</NavLink>
<NavLink exact to="/propertymatch   " activeClassName="activeClicked">
<CDBSidebarMenuItem icon="fa fa-handshake">Matching</CDBSidebarMenuItem>
</NavLink>
</CDBSidebarMenu>
</CDBSidebarContent>
</CDBSidebar>
</div>
);
};
export default Sidebar;