import "./App.scss";
import Layout from "./components/Layout/Layout";
import SoundContainer from "./components/SoundContainer/SoundContainer";
import image from "./assets/images/crops.jpg";
import sound from "./assets/audio/stars.mp3";
import "../node_modules/bulma/css/bulma.min.css";

function App() {
  return (
    <Layout>
      <section className="section no_x_pad space_top">
        <h2 className="title is-1">Latest Tracks</h2>
      </section>
      <SoundContainer title="Stars" image={image} audio={sound} />
    </Layout>
  );
}

export default App;
