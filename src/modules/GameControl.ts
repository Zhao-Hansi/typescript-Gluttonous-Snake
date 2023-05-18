import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
import snake from "./Snake";
class GameControl{
    snake: Snake;
    food: Food;
    score: ScorePanel;
    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.score = new ScorePanel();
        this.init()
    }

    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this) );
        this.run_snake();
    }
    keyDownHandler(event: KeyboardEvent){
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            this.direction = event.key;
        }
    }

    run_snake(){
        let X = this.snake.get_X();
        let Y = this.snake.get_Y();
        switch (this.direction){
            case "ArrowUp":
                Y -= 10;
                break;
            case "ArrowDown":
                Y += 10;
                break;
            case "ArrowLeft":
                X -= 10;
                break;
            case "ArrowRight":
                X += 10;
                break;
        }
        this.checkEat(X, Y);
        try{
            this.snake.set_X(X);
            this.snake.set_Y(Y);
        }catch (e: any){
            alert(e.message);
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run_snake.bind(this), 300 - (this.score.level -1) * 30)
    }

    checkEat(X: number, Y: number){
        if (X === this.food.get_food_X() && Y === this.food.get_food_Y()){
            this.food.change_food_position();
            this.score.add_score();
            this.snake.addBodies();
        }
    }
}

export default GameControl;