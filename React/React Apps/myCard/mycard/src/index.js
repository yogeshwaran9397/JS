import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Avatar(props) {
  //console.log(props)
  return (
    <div>
      <img
        className="avatar"
        src={`${process.env.PUBLIC_URL}/${props.image}`}
        alt="Logo"
      />
    </div>
  );
}

function Name(props) {
  return (
    <div className="name">
      <h1>{props.Name}</h1>
    </div>
  );
}

function Intro(props) {
  return <p>{props.Intro}</p>;
}

function Skills(props) {
  console.log(props.Skills);
  return <div className="skills">{props.Skills}</div>;
}

function Card(props) {
  // console.log(props);
  return (
    <div className="card">
      <Avatar image={props.image} />
      <Name Name={props.Name} />
      <Intro Intro={props.Intro} />
      <Skills Skills={props.skills} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="maincard-container">
      <Card
        image={"Jiraiya.png"}
        Name={"Jiraya"}
        Intro="Jiraiya (自来也) was one of Konohagakure's Sannin. Famed as a hermit and
      pervert of stupendous ninja skill, Jiraiya travelled the world in search
      of knowledge that would help his friends. the various novels he wrote,
      and, posthumously, the world in its entirety – knowledge that would be
      passed on to his godson and final student"
        skills={
          <ol>
            <ul>Intelligence</ul>
            <ul>Flame Bullet</ul>
            <ul>Durability</ul>
            <ul>Chakra and physical prowess</ul>
            <ul>Senjutsu</ul>
            <ul>Frogs</ul>
          </ol>
        }
      />
      <Card
        image={"Naruto.png"}
        Name={"Naruto"}
        Intro="JNaruto Uzumaki (Japanese: うずまき ナルト, Hepburn: Uzumaki Naruto) (/ˈnɑːrutoʊ/) is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. He is a ninja from the fictional Hidden Leaf Village (Japanese: 木ノ葉隠れ, Hepburn: konohagakure)."
        skills={
          <ol>
            <ul>Flame Bullet</ul>
            <ul>Durability</ul>
            <ul>Chakra and physical prowess</ul>
            <ul>Senjutsu</ul>
          </ol>
        }
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
