import "./Header.css";

export default function Header() {
  return (
    <header id="container-header">
      <div id="container-div-logo-text">
        <img id="logo-header" src="favicon.png" alt="" />
        <h1>ToDo List</h1>
      </div>

      <div id="div-form">
        <input type="text" name="" id="input-task" />
        <button id="button-add-task">+</button>
      </div>
    </header>
  );
}