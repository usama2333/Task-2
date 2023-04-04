import backgroundMain from "../../assests/images/backgroundMain.png";

export const conImg = {
  backgroundImage: `url(${backgroundMain})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export const newGenStack = {
  md: "column",
  lg: "row",
};

export const lineBox = {
  display: "flex",
  ml: { xlg: "70px", lg: "15px", md: "0px" },
  alignItems: "center",
};

export const lineSx = {
    width: '26px' ,height: '10px'
}

export const phoneImgBox = {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
