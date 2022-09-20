export class BaseBoolean {

    protected value: boolean;
  
    constructor(value: boolean) {
      this.value = value;
    }
  
    getValue(): boolean {
      return this.value;
    }
  
}
  