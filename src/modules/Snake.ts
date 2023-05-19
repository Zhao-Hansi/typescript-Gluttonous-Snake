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
        if (this.get_X() === value){
            return;
        }
        if (value < 0 || value > 290){
            throw new Error("This snake kit the wall, Game Over!");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.get_X()){
                value = this.get_X() - 10;
            }else {
                value = this.get_X() + 10;
            }
        }
        this.moveBodies();
        this.snake_head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set_Y(value: number){
        if (this.get_Y() === value){
            return;
        }
        if (value < 0 || value > 290){
            throw new Error("This snake hit the wall, Game Over!");
        }
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.get_Y()){
                value = this.get_Y() - 10;
            }else {
                value = this.get_Y() + 10;
            }
        }
        this.moveBodies();
        this.snake_head.style.top = value + 'px';
        this.checkHeadBody();
    }
    addBodies(){
        this.element.insertAdjacentHTML('beforeend', "<div></div>");

    }

    moveBodies(){
        for(let i=this.bodies.length-1; i > 0; i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    checkHeadBody(){
        for(let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if( this.get_X() === bd.offsetLeft && this.get_Y() ===bd.offsetTop){
                throw new Error("This snake eat itself !!!")
            }
        }
    }


}

export default Snake;
