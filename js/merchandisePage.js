let merchs = [
  (hoodie = {
    name: "Hoodie",
    slider_des:
      "Stay warm and stylish in our cozy hoodie, perfect for any occasion!",
    description:
      "Our hoodie is made of high-quality soft cotton, making it comfortable to wear all day long. The unique design of what IIITDM Kancheepuram gives it a stylish look, perfect for casual wear, sports or outdoor activities. It's from a well-trusted person, so you can be sure of the quality. It comes in various sizes to fit you perfectly. You can check for the sizes( click on buy now). The hoodies will be available only till 5th Feb,2022.",
    img_loc: `url(../images/merchandisePage/merch_1/merch1_1.jpg)`,
    img2: `url(../images/merchandisePage/merch_1/merch1_2.jpg)`,
    img3: `url(../images/merchandisePage/merch_1/merch1_3.jpg)`,
    img4: `url(../images/merchandisePage/merch_1/merch1_4.jpg)`,
  }),
  (Surge = {
    name: "Surge T-shirt",
    slider_des:
      "Express your unique style with one of our exclusive t-shirt designs, now available for purchase online.",
    description:
      "Our latest t-shirt design is made from 100% cotton, providing a comfortable fit and breathability. The design features a unique  print, created by IIITDM student, adding a touch of individuality to your wardrobe. The print is high-quality and long-lasting. The t-shirt is available in multiple sizes to fit you perfectly. It's a must-have for anyone looking to add a trendy and unique piece to their collection. You can check for the sizes( click on buy now). The t-shirt will be available only till 5th Feb,2022.It is also available in navy-blue colour. ",
    img_loc: `url(../images/merchandisePage/merch_2/merch2_1.jpg)`,
    img2: `url(../images/merchandisePage/merch_2/merch2_2.jpg)`,
    img3: `url(../images/merchandisePage/merch_2/merch2_3.jpg)`,
    img4: `url(../images/merchandisePage/merch_2/merch2_4.jpg)`,
  }),
  (brick = {
    name: "Brick T-shirt",
    slider_des:
      "Express your unique style with one of our exclusive t-shirt designs, now available for purchase online.",
    description:
      "Check out this latest t-shirt that is perfect for those who want to make a fashion statement. Made with a blend of soft and breathable cotton, the t-shirt is comfortable to wear and suitable for all seasons. The design features an intricate design, that's sure to stand out. The print is high-quality and long-lasting. The t-shirt is available in various sizes and has a regular fit. It's a great addition to any wardrobe, perfect for both casual and dressier occasions.You can check for the sizes( click on buy now). The t-shirt will be available only till 5th Feb,2022.It is also available in navy-blue colour. ",
    img_loc: `url(../images/merchandisePage/merch_3/merch3_1.jpg)`,
    img2: `url(../images/merchandisePage/merch_3/merch3_2.jpg)`,
    img3: `url(../images/merchandisePage/merch_3/merch3_3.jpg)`,
    img4: `url(../images/merchandisePage/merch_3/merch3_4.jpg)`,
  }),
  (Surge = {
    name: "MusicXCoffee T-shirt",
    slider_des:
      "Express your unique style with one of our exclusive t-shirt designs, now available for purchase online.",
    description:
      "Get ready to turn heads and make a fashion statement with our latest t-shirt design! Made from the softest, most comfortable fabric you'll ever wear, this shirt is perfect for everyday wear. The design features a one-of-a-kind, that is sure to make you stand out from the crowd. The print is made with high-quality, making it long-lasting wear. The t-shirt is available in multiple sizes and has a relaxed fit, making it perfect for all body types. Don't miss out on this must-have addition to your wardrobe.You can check for the sizes( click on buy now). The t-shirt will be available only till 5th Feb,2022.It is also available in navy-blue colour.",
    img_loc: `url(../images/merchandisePage/merch_4/merch4_1.jpg)`,
    img2: `url(../images/merchandisePage/merch_4/merch4_2.jpg)`,
    img3: `url(../images/merchandisePage/merch_4/merch4_3.jpg)`,
    img4: `url(../images/merchandisePage/merch_4/merch4_4.jpg)`,
  }),
  (book = {
    name: "No Flux Given T-shirt",
    slider_des:
      "Express your unique style with one of our exclusive t-shirt designs, now available for purchase online.",
    description:
      "Check out this latest t-shirt that is perfect for those who want to make a fashion statement. Made with a blend of soft and breathable cotton, the t-shirt is comfortable to wear and suitable for all seasons. The design features an intricate design, that's sure to stand out. The print is high-quality and long-lasting. The t-shirt is available in various sizes and has a regular fit. It's a great addition to any wardrobe, perfect for both casual and dressier occasions.You can check for the sizes( click on buy now). The t-shirt will be available only till 5th Feb,2022.It is also available in navy-blue colour. ",
    img_loc: `url(../images/merchandisePage/merch_5/merch5_1.jpg)`,
    img2: `url(../images/merchandisePage/merch_5/merch5_2.jpg)`,
    img3: `url(../images/merchandisePage/merch_5/merch5_3.jpg)`,
    img4: `url(../images/merchandisePage/merch_5/merch5_4.jpg)`,
  }),
];

const btn1 = document.querySelector(".merch_btn1");
const btn2 = document.querySelector(".merch_btn2");
const btn3 = document.querySelector(".merch_btn3");
const btn4 = document.querySelector(".merch_btn4");
const btn5 = document.querySelector(".merch_btn5");
const slider_heading = document.querySelector(".merch_slider_text_heading");
const slider_description = document.querySelector(
  ".merch_slider_text_description"
);
const slider_image = document.querySelector(".merch_slider_img");
const merch_slider = document.querySelector(".merch_slider");
btn1.addEventListener("click", function () {
  displaySlider(merchs[0], btn1);
});
btn2.addEventListener("click", function () {
  displaySlider(merchs[1], btn2);
});
btn3.addEventListener("click", function () {
  displaySlider(merchs[2], btn3);
});
btn4.addEventListener("click", function () {
  displaySlider(merchs[3], btn4);
});
btn5.addEventListener("click", function () {
  displaySlider(merchs[4], btn5);
});

let a = 0;
function displaySlider(merch, btn) {
  slider_heading.textContent = merch.name;
  slider_description.textContent = merch.slider_des;
  slider_image.style.background = merch.img_loc;
  slider_image.style.backgroundRepeat = "no-repeat";
  slider_image.style.backgroundSize = "100% 100%";
  merch_slider.style.transition = "1s";

  if (btn == btn1) {
    btn.classList.add("highlight");
    btn2.classList.remove("highlight");
    btn3.classList.remove("highlight");
    btn4.classList.remove("highlight");
    btn5.classList.remove("highlight");
    a = 0;
  }
  if (btn == btn2) {
    btn.classList.add("highlight");
    btn1.classList.remove("highlight");
    btn3.classList.remove("highlight");
    btn4.classList.remove("highlight");
    btn5.classList.remove("highlight");
    btn1.classList.remove("b1");
    a = 1;
  }
  if (btn == btn3) {
    btn.classList.add("highlight");
    btn2.classList.remove("highlight");
    btn1.classList.remove("highlight");
    btn4.classList.remove("highlight");
    btn5.classList.remove("highlight");
    btn1.classList.remove("b1");
    a = 2;
  }
  if (btn == btn4) {
    btn.classList.add("highlight");
    btn2.classList.remove("highlight");
    btn1.classList.remove("highlight");
    btn3.classList.remove("highlight");
    btn5.classList.remove("highlight");
    btn1.classList.remove("b1");
    a = 3;
  }
  if (btn == btn5) {
    btn.classList.add("highlight");
    btn2.classList.remove("highlight");
    btn1.classList.remove("highlight");
    btn4.classList.remove("highlight");
    btn3.classList.remove("highlight");
    btn1.classList.remove("b1");
    a = 4;
  }

  displayMerchDetails(merch);
}

let merch1 = document.querySelector(".img1");
let merch2 = document.querySelector(".img2");
let merch3 = document.querySelector(".img3");
let merch4 = document.querySelector(".img4");
let merch_img = document.querySelector(".merch_img");
let merch_name = document.querySelector(".merch_name");
let merch_description = document.querySelector(".merch_description");
function displayMerchDetails(merch) {
  merch_name.textContent = merch.name;
  merch_img.style.background = merch.img_loc;
  merch_img.style.backgroundRepeat = "no-repeat";
  merch_img.style.backgroundSize = "100% 100%";
  merch_description.textContent = merch.description;
  merch1.style.background = merch.img_loc;
  merch1.style.backgroundRepeat = "no-repeat";
  merch1.style.backgroundSize = "100% 100%";
  merch2.style.background = merch.img2;
  merch2.style.backgroundRepeat = "no-repeat";
  merch2.style.backgroundSize = "100% 100%";
  merch3.style.background = merch.img3;
  merch3.style.backgroundRepeat = "no-repeat";
  merch3.style.backgroundSize = "100% 100%";
  merch4.style.background = merch.img4;
  merch4.style.backgroundRepeat = "no-repeat";
  merch4.style.backgroundSize = "100% 100%";
}

let i1 = document.querySelector(".img1");
let i2 = document.querySelector(".img2");
let i3 = document.querySelector(".img3");
let i4 = document.querySelector(".img4");
function displayMerchs(merch) {
  merch_img.style.background = merch.img2;
}
const changeImage1 = (a) => {
  merch_img.style.background = merchs[a].img_loc;
  merch_img.style.backgroundRepeat = "no-repeat";
  merch_img.style.backgroundSize = "100% 100%";
};
const changeImage2 = (a) => {
  merch_img.style.background = merchs[a].img2;
  merch_img.style.backgroundRepeat = "no-repeat";
  merch_img.style.backgroundSize = "100% 100%";
};
const changeImage3 = (a) => {
  merch_img.style.background = merchs[a].img3;
  merch_img.style.backgroundRepeat = "no-repeat";
  merch_img.style.backgroundSize = "100% 100%";
};
const changeImage4 = (a) => {
  merch_img.style.background = merchs[a].img4;
  merch_img.style.backgroundRepeat = "no-repeat";
  merch_img.style.backgroundSize = "100% 100%";
};
i1.addEventListener("click", function () {
  changeImage1(a);
});
i2.addEventListener("click", function () {
  changeImage2(a);
});
i3.addEventListener("click", function () {
  changeImage3(a);
});
i4.addEventListener("click", function () {
  changeImage4(a);
});

const toTop = document.querySelector(".gototop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
  //   progressValue.textContent = `${scrollValue}%`;
};
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;
