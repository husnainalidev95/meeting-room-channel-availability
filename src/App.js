import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Table from "./components/table";
import Select from "./components/select";
import Container from '@mui/material/Container';
import useVenues from "./hooks/useVenues";
import useChannels from "./hooks/useChannels";

function App() {
  const { filteredData, handleStatusChange, handleFilterChange } = useVenues();
  const { channels } = useChannels();

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <Select options={channels} handleFilterChange={handleFilterChange} />
        <Table data={filteredData} handleStatusChange={handleStatusChange} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
