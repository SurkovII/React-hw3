import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { useState } from 'react';

function App() {
  // const [imageSrc, setSomeImageSrc] = useState("someImageSrc");
  // return (
  //   <Image render={(className)=>(<div className={className}>
  //     <img src={imageSrc} />
  //   </div>)}/>

  return (
    <>
      <div className="App">

  //       {/* {
  //         console.log(
  //           <DivWithChild>
  //             <p>Новый текст</p>
  //             <div>Новый элемент Div</div>
  //           </DivWithChild>
  //         )
  //       } */}
  //       {/* {
  //         //Example2
  //         <div>
  //           <h2>Пример 2 использования "children"</h2>
  //           <BorderComp>
  //             <p>Этот абзац находится внутри рамки</p>
  //             <button>Кнопка внутри рамки</button>
  //           </BorderComp>
  //           <BorderComp>
  //             <h3>Новый заголовок</h3>
  //           </BorderComp>
  //           <p>Этот абзац находится снаружи рамки</p>
  //         </div>
  //       } */}

  //       {/* {
  //         //Example 3 легко создавать кастомные карточки с разными элементами
  //         // внутри, такими как текст, кнопки, ссылки и др.
  //         <div>
  //           <h2>Пример 3 использования 'props.children'</h2>
  //           <Card title="Карточка 1">
  //             <p>Это содержимое первой карточки</p>
  //             <button>Действие</button>
  //           </Card>
  //           <Card title="Карточка 2">
  //             <p>Это содержимое второй карточки</p>
  //             <a href='#'>Ссылка</a>
  //           </Card>
  //         </div>
  //       } */}

        <div>
          <h1>Пример Render props с функциональными компонентами </h1>
          <MouseTracker render={({x,y}) => <MouseInfo x={x} y={y}/>}/>
        </div>


      </div>
    </>
  );
}

function DivWithChild({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

function BorderComp({ children }) {
  return (
    <div style={{ border: "2px solid #000", padding: "16px" }}>
      {children}
    </div>
  );
}
const Card = ({ title, children }) => {
  return (
    <div style={{ border: "2px solid #000", padding: "16px", marginBottom: '16px' }}>
      <h2>{title}</h2>
      <p>Любой рекламный текст</p>
      {children}
    </div>
  );
}

const Image = ({ render }) => {
  return <div>{render("imageWrapper")}</div>
}


const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }
  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {/*Внутри Render prop использует переданную функцию*/}
      {render(position)}
    </div>
  )
}

//Компонент, который использует Render prop для ренеринга информации о положении курсора
const MouseInfo = ({ x, y }) => {
  return (
    <div>
      <h1>Положение курсора мыши</h1>
      <p>X: {x}, Y: {y}</p>
    </div>
  )
}

export default App;
