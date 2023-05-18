class Snake{
    snake_head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.snake_head = document.querySelector(('#snake > div')) as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }
    get_X(){
        return this.snake_head.offsetLeft;
    }
    get_Y(){
        return this.snake_head.offsetTop;
    }
    set_X(value: number){
        this.snake_head.style.left = value + 'px';
    }
    set_Y(value: number){
        this.snake_head.style.top = value + 'px';
    }
    addBodies(){
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }


}

export default Snake;
