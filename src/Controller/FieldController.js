class FieldController {
  constructor( field, api, config ){
    this.field = field;
    this.config = config;
    this.api = api;
  }
  validate(){
    if( this.config.validate ){
      return this.config.validate( this.api.getValue() );
    }
  }
}

export default FieldController
