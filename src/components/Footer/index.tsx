import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <h5>
        Created by{" "}
        <a href="https://elielsondev.vercel.app/" target="_blank">
          Elielson Nascimento
        </a>{" "}
        © {currentYear} - All rights reserved.
      </h5>
    </footer>
  );
}
