function DSNV (){
    this.arr = [];

    this.themNV = function(nv){
        this.arr.push(nv);
    };

    this.timVitriNhanVien = function(taiKhoan){
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
            this.arr.splice(index,1);
        };
    };

    this.suaNV = function(taiKhoan){
        var index = this.timVitriNhanVien(taiKhoan);
        if(index !== -1){
            return dsnv.arr[index];
        };
        return null
    };

    this.capNhatNV = function(nv){
        var index = this.timVitriNhanVien(nv.taiKhoan);
        if(index !== -1){
            this.arr[index] = nv;
        }
    };

    this.timKiemNV = function(searchName){
        var mangTimKiem = [];
        this.arr.forEach(function(item){
            if(item.loaiNV.toLowerCase().indexOf(searchName.toLowerCase())> -1){
                mangTimKiem.push(item);
            }
        });
        return mangTimKiem;
    }

}