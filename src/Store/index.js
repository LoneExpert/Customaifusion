import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTextured: true,
  isFullTextured: false,
  logoDecal: "./Customaifusion/threejs.png",
  fullDecal: "./Customaifusion/threejs.png",
});

export default state;
