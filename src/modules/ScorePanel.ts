class ScorePanel{
    score: number = 0;
    level: number = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    upScore : number

    constructor(maxLevel: number =10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;

    }

    add_score(){
        this.scoreEle.innerHTML = ++ this.score + '';
        if (this.score % this.upScore ===0){
            this.level_up()
        }
    }

    level_up(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++ this.level + '';
        }
    }

}

export default ScorePanel;