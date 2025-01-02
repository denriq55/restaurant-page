import "./styles.css";
import { createHomePage } from './home.js'

const homeBtn = document.getElementById("home")
homeBtn.addEventListener("click", createHomePage )

const menuBtn = document.getElementById("menu")
menuBtn.addEventListener("click", createMenuPage )