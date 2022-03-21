import Resume from "./components/Resume";

function App() {
  const resume1 = {
    information:{   
      id: "1",
      name: "Hatice Karakuş",
      email: "haticekarakus@hotmail.com",
      phoneNumber: "5546542345"
    },
    experiences: ["Web Developer ", "Game Developer"],
    education: "Trakya University",
    courses:['React Course ','Flutter Course ','Kotlin Course ','UI Certificate'],
    projects:['Ecommerce Website ','Flappy Bird']
  };
  return (
    <div>
      <Resume item={resume1}></Resume>
    </div>
  );
}

export default App;
