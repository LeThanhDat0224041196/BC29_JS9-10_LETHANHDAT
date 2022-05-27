var dsnv = new DSNV();
var validation = new Validation();


getLocalStorage();


function getEle (id){
    return document.getElementById(id);
}

function layThongTinNV (isAdd){
    var _taiKhoan = getEle("tknv").value;
    var _tenNV = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value;
    var _Ngay = getEle("datepicker").value;
    var _luongCB = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;

    var isValid = true;
    
    if(isAdd){
        isValid &= validation.kiemTraTrong(_taiKhoan, "tbTKNV", "(*)Vui lòng nhập Tài khoản") && validation.kiemTraDoDaiKyTu(_taiKhoan, "tbTKNV", 4, 6 ,"(*)Tài khoản tối đa 4 - 6 ký số, không để trống");
        isValid &= validation.kiemTraTrong(_tenNV, "tbTen", "(*)Vui lòng nhập Họ và Tên");
        isValid &= validation.kiemTraTrong(_email, "tbEmail", "(*)Vui lòng nhập Email");
        isValid &= validation.kiemTraTrong(_matKhau, "tbMatKhau", "(*)Vui lòng nhập Mật Khẩu")&& validation.kiemTraDoDaiKyTu(_matKhau, "tbMatKhau", 6, 10, "(*)Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống");
        isValid &= validation.kiemTraTrong(_Ngay, "tbNgay", "(*)Vui lòng nhập Ngày");
        isValid &= validation.kiemTraTrong(_luongCB, "tbLuongCB", "(*)Vui lòng nhập Lương");
        isValid &= validation.kiemTraTrong(_gioLam, "tbGiolam", "(*)Vui lòng nhập vào Giờ Làm");
        // isValid &= validation.kiemTraChucVu("chucvu", "tbChucVu", "(*)Vui lòng chọn Chức Vụ");
    }

   if(!isValid) return;

    var nhanVien = new NhanVien(_taiKhoan, _tenNV, _email, _matKhau, _Ngay, _luongCB, _chucVu, _gioLam);

    

    nhanVien.tinhTL();
    nhanVien.xepLoai();
    return nhanVien;

}

getEle("btnThemNV").onclick = function(){

    var nhanVien = layThongTinNV(true);

    if(nhanVien){
        dsnv.themNV (nhanVien);
        taoBang(dsnv.arr);
        setLocalStorage();
    };
    
}

function taoBang (data){
    var content = "";
    data.forEach(function(item){
        content += `
            <tr>
                <td>${item.taiKhoan}</td>
                <td>${item.tenNV}</td>
                <td>${item.email}</td>
                <td>${item.Ngay}</td>
                <td>${item.chucVu}</td>
                <td>${item.tongLuong}</td>
                <td>${item.loaiNV }</td>
                <td>
                <button class="btn btn-danger" onclick="xoaNV('${item.taiKhoan}')">Xoá</button>
                <button class="btn btn-info" onclick="suaNV('${item.taiKhoan}')" data-toggle="modal" data-target="#myModal">Sửa</button>
                </td>
            </tr>
        
        `;
    });
    getEle("tableDanhSach").innerHTML = content;
}

function xoaNV(id){
    dsnv.xoaNV(id);
    taoBang(dsnv.arr);
    setLocalStorage();
}

function suaNV(id){
    var nv = dsnv.suaNV(id);
    if(nv){
    getEle("tknv").value = nv.taiKhoan;
    getEle("name").value = nv.tenNV;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.Ngay;
    getEle("luongCB").value = nv.luongCB;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;
    
    getEle("tknv").disable = true;
    // getEle("btnCapNhat").style.display = "inline-block";
    }

    
}

getEle("btnCapNhat").onclick = function(){
    var nhanVien = layThongTinNV(false);
    dsnv.capNhatNV(nhanVien);
    taoBang(dsnv.arr);
    setLocalStorage();
}

getEle("searchName").addEventListener("keyup", function(){
    var searchName = getEle("searchName").value;
    var mangTimKiem = dsnv.timKiemNV(searchName);
    taoBang(mangTimKiem);
});


function setLocalStorage(){
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", dataString);
}

function getLocalStorage(){
    if(localStorage.getItem("DSNV")){
        var dataString = localStorage.getItem("DSNV");
        var dataJson = JSON.parse(dataString);
        dsnv.arr = dataJson;
        taoBang(dsnv.arr);
    };
}
