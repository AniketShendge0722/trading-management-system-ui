import React from "react";
import {
 Drawer,
 List,
 ListItemButton,
 ListItemText
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

 const navigate = useNavigate();

 return (

  <Drawer
    variant="permanent"
    sx={{
      width:240,
      "& .MuiDrawer-paper":{
        width:240
      }
    }}
  >

   <List>

    <ListItemButton
      onClick={()=>navigate("/dashboard")}>

      <ListItemText
        primary="Dashboard"
      />

    </ListItemButton>

    <ListItemButton
      onClick={()=>navigate("/customers")}>

      <ListItemText
        primary="Customers"
      />

    </ListItemButton>





    <ListItemButton
      onClick={()=>navigate("/trades")}>

      <ListItemText
        primary="Trades"
      />

    </ListItemButton>

    <ListItemButton
 onClick={()=>
 navigate("/accounts")
}>
 <ListItemText
  primary="Accounts"
/>

</ListItemButton>
<ListItemButton
 onClick={() =>
  navigate("/deposit")
 }>
 <ListItemText
  primary="Deposit"
/>
</ListItemButton>

<ListItemButton
 onClick={() =>
  navigate("/withdraw")
 }>
 <ListItemText
  primary="Withdraw"
/>
</ListItemButton>
<ListItemButton
 onClick={() =>
  navigate("/transactions")
 }>
 <ListItemText
  primary="Transactions"
/>
</ListItemButton>
<ListItemButton onClick={()=>navigate("/buy")}>
 <ListItemText primary="Buy Stock"/>
</ListItemButton>

<ListItemButton onClick={()=>navigate("/sell")}>
 <ListItemText primary="Sell Stock"/>
</ListItemButton>

<ListItemButton onClick={()=>navigate("/trade-history")}>
 <ListItemText primary="Trade History"/>
</ListItemButton>
<ListItemButton
 onClick={() =>
 navigate("/portfolio")
 }>
 <ListItemText
  primary="Portfolio"
/>
</ListItemButton>
<ListItemButton
 onClick={() =>
 navigate("/reports")
 }>
 <ListItemText
  primary="Reports"
/>
</ListItemButton>

   </List>

  </Drawer>
 );
};

export default Sidebar;