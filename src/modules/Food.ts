class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    get_food_X(){
        return this.element.offsetLeft;
    }
    get_food_Y(){
        return this.element.offsetTop;
    }

    change_food_position(){
        let X = Math.round(Math.random() * 29) * 10 ;
        let Y =Math.round(Math.random() * 29) * 10 ;
        this.element.style.left = X + 'px';
        this.element.style.top = Y + 'px';
    }

}

export default Food;
