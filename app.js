const heading = React.createElement("h1",{
       
},"Hello World123");

const heading2 = React.createElement("h2",{
   
},"Hello World456");

const container = React.createElement("div",{id:"container"},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
