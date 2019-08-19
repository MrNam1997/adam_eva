let Apple = function (weigth) {
    this.weigth = weigth;
    this.getWeigth = function () {
        return this.weigth;
    };
    this.decrease = function () {
        return this.weigth--;
    };
    this.empty = function () {
        if (this.weigth < 0) {
            return "ăn vừa thôi, hết rồi";
        }
    }
};
let Person = function (name, gender, weigth) {
    this.name = name;
    this.gender = gender;
    this.weigth = weigth;
    this.personSpeak = function (speak) {
        return speak;
    };
   this.personEat = function(food){
        this.weigth++;
        food.decrease();
        food.empty();
   }
};