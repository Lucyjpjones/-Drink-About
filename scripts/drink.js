function whatCanIDrink() {
    age: function() {
        if (age<0) {
            return "Sorry. I can’t tell what drink because that age is incorrect!";
        } elseif (age<14) {
            return "Drink Toddy";
        } elseif (age<18) {
            return "Drink Coke";
        } elseif (age<21) {
            return "Drink Beer";
        } elseif (age<130) {
            return "Drink Whisky";
        } else  {
            return "Sorry. I can’t tell what drink because that age is incorrect!";
        }

    }
}