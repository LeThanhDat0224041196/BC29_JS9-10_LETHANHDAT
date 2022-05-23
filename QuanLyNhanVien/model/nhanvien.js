function NhanVien (_taiKhoan, _tenNV, _email, _matKhau, _Ngay, _luongCB, _chucVu, _gioLam){

    this.taiKhoan = _taiKhoan;
    this.tenNV = _tenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.Ngay = _Ngay;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.loaiNV = "";
    this.tongLuong = 0;

    this.tinhTL = function(){
       if(this.chucVu === "Sếp" ){
            this.tongLuong = this.luongCB*3;
        }else if(this.chucVu === "Trưởng phòng"){
            this.tongLuong = this.luongCB*2;
        }else if(this.chucVu === "Nhân viên"){
            this.tongLuong = this.luongCB*1;
        };
    };

    this.xepLoai = function(){
        if(this.gioLam >= 192){
            this.loaiNV = "Xuất Sắc";
        }else if( 176 <=this.gioLam && this.gioLam < 192){
            this.loaiNV = "Giỏi";
        }else if( 160 <= this.gioLam && this.gioLam < 176){
            this.loaiNV = "Khá";
        }else if ( this.gioLam < 160){
            this.loaiNV = "Trung Bình"
        };
    };
};