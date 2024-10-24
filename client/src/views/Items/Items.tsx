import { Box } from "@mui/material"
import MasonryList from "../../components/MasonryList/MasonryList"
import NavBar from "../../components/NavBar/NavBar"

const Items = () => {
  return (
    <>
    <NavBar />
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh" >
    <MasonryList></MasonryList>

    </Box>
    </>
  )
}
export default Items