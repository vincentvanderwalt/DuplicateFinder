module app.domain {
    export interface IHomeModel {
        InputValue: string;
        TextValue: string;
    }

    export class HomeModel implements IHomeModel {
        constructor(public InputValue: string, public TextValue: string) {
            this.InputValue = InputValue;
            this.TextValue = TextValue;
        }
    }
}
