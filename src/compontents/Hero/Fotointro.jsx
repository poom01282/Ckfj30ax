import styled, { keyframes } from "styled-components";
import burbuja1 from "../../assets/burbuja.svg";
import burbujasecun from "../../assets/burbujasecun.svg";
import principal from "../../assets/teslaprogramador.jpg";
const morph = keyframes`
     0% { border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% }
  20% { border-radius: 52% 48% 51% 49% / 66% 54% 46% 34% }
  40% { border-radius: 66% 34% 32% 68% / 35% 64% 36% 65% }
  60% { border-radius: 42% 58% 70% 30% / 68% 34% 66% 32% }
  80% { border-radius: 55% 45% 42% 58% / 38% 70% 30% 62% }
  100% { border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% }
`;
const movement = keyframes`
     0% { border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% }
  20% { border-radius: 52% 48% 51% 49% / 66% 54% 46% 34% }
  40% { border-radius: 66% 34% 32% 68% / 35% 64% 36% 65% }
  60% { border-radius: 42% 58% 70% 30% / 68% 34% 66% 32% }
  80% { border-radius: 55% 45% 42% 58% / 38% 70% 30% 62% }
  100% { border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% }
`;

export function Fotointro() {
  return (
    <Container>
      <section>
        <img className="box" src={principal}></img>
        <div class="blob">
          <img src={burbuja1}></img>
        </div>

        <div class="blob">
          <img src={burbujasecun}></img>
        </div>
      </section>
    </Container>
  );
}
const Container = styled.div`
  section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;

    .blob {
      position: absolute;
      width: 500px;
      height: 500px;
    }
    .blob:nth-child(2) {
      filter: blur(50px);
    }
    .box {
      position: absolute;
      width: 30%;
      z-index: 100;
      width: 400px;
      height: 400px;

      // Want to blur image
     
      background-size: 200%;
      background-position: center center;

      // -webkit-filter: blur(5px);
      // -moz-filter: blur(5px);
      // -o-filter: blur(5px);
      // -ms-filter: blur(5px);
      // filter: blur(4px);

      // Evaluate this ones
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
      perspective: 100px;

      transition: all 0.8s ease-in-out;

      animation: 
    ${morph} 10s ease-in-out infinite both alternate,
    movement 10s ease-in-out infinite both;
    }
  }
`;
