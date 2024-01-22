import { AppBar, Box, Drawer, Icon, IconButton, Link, Toolbar } from "@mui/material";
import { useState } from "react";

export default function Header(){
  const [openDrawer, setOpenDrawer] = useState(false);
  const links = [
    "Pagina inicial",
    "Procurar Comercio",
    "Cadastre Seu Comercio",
    "Contato",
    "Entrar ou Cadastrar",
    "Criar Conta de Entregado",
  ];
  return(
    <AppBar color="inherit">
      <Toolbar>
        <Box 
          sx={{
            width: "100%",
            display: {
              xs: "none",
              md: "flex",
            },
            justifyContent: "space-between",
            gap: 2,
        }}
        >
        {links.map((nome) => {
          return <Link>{nome}</Link>;
        })}
        </Box>
        <IconButton 
        size="large"
        color="inherit"
        sx= {{ mr: 2, display: {md: "none" } }} 
        onClick={() => setOpenDrawer(true)}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Drawer 
            open={openDrawer}
            onClick={() => setOpenDrawer(false)}
            onClose={() => setOpenDrawer(false)}
            >
            <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              m: 2,
            }} 
            >
            <img 
              src="/tw-express.png" 
              alt="logo"
              style={{ width: "150px", margin: "0 24px 24px 0" }}
            />
            {links.map((nome) => {
              return <Link>{nome}</Link>;
            })}
            </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}