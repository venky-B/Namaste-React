# Code Assignment 

## 1. Create a Nested header Element using React.createElement (h1,h2,h3 inside a div with class “title”)
```
const header1 = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { className: "line1" }, "h1"),
  React.createElement("h2", { className: "line2" }, "h2"),
  React.createElement("h3", { className: "line3" }, "h3"),
]);
```

## 2. Creating the same element using JSX (also know as react element)
```
const header2 = (
  <div id="title" key="div">
    <h1 className="line1" key="h1k">
      h4
    </h1>
    <h2 className="line2" key="h2k">
      h5
    </h2>
    <h2 className="line3" key="h3k">
      h6
    </h2>
  </div>
);
```


## 3. Create a functional component of the same with JSX
```
const Header3 = () => {
  return (
    <div id="title" key="div">
      <h1>h7</h1>
      <h2>h8</h2>
      <h2>h9</h2>
    </div>
  );
};
```

## 4. pass the attribute into the tag in JSX
```
const Header4 = () => {
  return (
    <div id="title" key="div">
      <h1 style={{ color: "red" }} className="line1" key="h1k">
        h10
      </h1>
      <h2 style={{ color: "green" }} className="line2" key="h2k">
        h11
      </h2>
      <h2 style={{ color: "blue" }} className="line3" key="h3k">
        h12
      </h2>
    </div>
  );
};
```

## 5. function component
```
const Header5 = () => {
  return (
    <div id="title" key="div">
      <h1 id="line1" key="h1">
        Namaste React
      </h1>
      <h2 id="line2" key="h2">
        Vanakam venky
      </h2>
    </div>
  );
};
```

## 6. component composition(add component inside another component)
```
const Header6 = () => {
  return (
    <>
      {Header5()}
      <h3 id="line3" key="h3">
        This text is below react component "Header5"
      </h3>
    </>
  );
};
```
