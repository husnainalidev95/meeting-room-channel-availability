import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Table from "./components/table";
import Select from "./components/select";
import Container from '@mui/material/Container';
import useVenues from "./hooks/useVenues";

function App() {
  const { filteredData } = useVenues();

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <Select />
        <Table data={filteredData} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
