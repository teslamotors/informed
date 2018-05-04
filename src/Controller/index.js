class Controller {
  
  constructor(){
    this.state = {
      values: {}
    };
  }

  get api(){
    return {
      setValue: ( field, value ) => this.setValue( field, value )
    }
  }

  setValue( field, value ){

  }
}

export default Controller;
