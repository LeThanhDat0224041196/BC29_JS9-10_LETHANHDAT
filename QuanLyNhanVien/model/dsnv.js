function DSNV (){
    this.arr = [];

    this.themNV = function(nv){
        this.arr.push(nv);
    };

    this.timVitriNhanVien = function(){
        var index = -1;
        this.arr.forEach(function(item, i){
            if(item.taiKhoan === taiKhoan){
                index = i;
            };
        });
        return index;
    };

    this.xoaNV = function(taiKhoan){
        var index = this.timVitriNhanVien(taiKhoan);
        if (index !== -1 ){
            this.arr.splice(index, 1);
        };
    };

    this.timNhanVienTheoLoai = function(){};
}