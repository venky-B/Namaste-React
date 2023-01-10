// DOM manipulation using React.
//creating h1 and h2 elements

/* <div id="root">
  <div id="title" class="venkyclass">
    <h1 id="line1">Namaste React</h1>
    <h2 id="line2">Vanakam Venky</h2>
  </div>
</div>; */

const heading1 = React.createElement("h1", { id: "line1" }, "Namaste React");

const heading2 = React.createElement("h2", { id: "line2" }, "Vanakam Venky");

const container = React.createElement(
  "div",
  { id: "title", className: "venkyclass" },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
console.log(container); // React element is a object
