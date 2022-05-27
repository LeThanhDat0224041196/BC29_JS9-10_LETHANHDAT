function Validation (){
    this.kiemTraTrong = function(value, tbId, mess){
        if(value === ""){
            getEle(tbId).innerHTML = mess;
            getEle(tbId).style.display = "block";
            return false;
        }
            getEle(tbId).innerHTML = "";
            getEle(tbId).style.display = "none";
            return true;
    };
    // this.kiemTraChucVu = function(selectId, tbId, mess){
    //     if(getEle(selectId).SelectedIndex!==0){
    //         getEle(tbId).innerHTML = "";
    //         getEle(tbId).style.display = "block";
    //         return false;
            
    //     }
    //         getEle(tbId).innerHTML = mess;
    //         getEle(tbId).style.display="none";
    //         return true;
    //  };
     this.kiemTraDoDaiKyTu = function(value, tbId, min, max, mess){
         if(value.trim().length>=min&&value.trim().length<=max){
            getEle(tbId).innerHTML = "";
            getEle(tbId).style.display = "none";
            return true;
         }
         getEle(tbId).innerHTML = mess;
         getEle(tbId).style.display = "block";
         return false;
     };
};