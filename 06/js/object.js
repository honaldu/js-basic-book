var toyRobot = {
  productId: "123-12",
  name: "Robot",
  price: "25,000",
  madeIn: "korea",
  quantity: 10,
  showStock: function () {
    document.querySelector("#display").innerHTML =
      this.name + "제품은" + this.quantity + "개 남아있습니다.";
  },
  showPrice: function () {
    document.querySelector("#display").innerHTML =
      this.name + "제품은" + this.price + "원 입니다.";
  },
};
toyRobot.showStock();
toyRobot.showPrice();

function Book(author, pages, price, title) {
  this.author = author;
  this.pages = pages;
  this.price = price;
  this.title = title;
}

jsBook = new Book("홍길동", 500, 15000, "자바스크립트");
