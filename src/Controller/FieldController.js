class FieldController {
  constructor( field, api, config ){
    this.field = field;
    this.config = config;
    this.api = api;
  }
  validate( values ){
    if( this.config.validate ){
      return this.config.validate( this.api.getValue(), values );
    }
  }
  asyncValidate( values ){
    if( this.config.asyncValidate ){
      return this.config.asyncValidate( this.api.getValue(), values );
    }
  }
}

export default FieldController
