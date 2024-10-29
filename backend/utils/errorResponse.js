class errorResponse extends error{
    constructor(message,codeStatus){
        super(messaage);
        this.codeStatus=codeStatus;
    }
        
}

module.exports=errorResponse;