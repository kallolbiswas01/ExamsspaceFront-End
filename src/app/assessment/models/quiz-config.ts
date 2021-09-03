export class QuizConfig {
     duration: number; 


    constructor(data: any) {
        data = data || {};      
        this.duration = data.duration;   
    }
}
