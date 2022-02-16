import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Table from "./components/table";
import Select from "./components/select";
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <Select />
        <Table />
      </Container>

      <Footer />
    </>
  );
}

export default App;
