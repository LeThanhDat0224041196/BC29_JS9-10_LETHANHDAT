var dsnv = new DSNV();

function getEle (id){
    return document.getElementById(id);
};

function layThongTinNV (){
    var _taiKhoan = getEle("tknv").value;
    var _tenNV = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value;
    var _Ngay = getEle("datepicker").value;
    var _luongCB = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;

    var nhanVien = new NhanVien(_taiKhoan, _tenNV, _email, _matKhau, _Ngay, _luongCB, _chucVu, _gioLam);


    nhanVien.tinhTL();
    nhanVien.xepLoai();
    return nhanVien;

};

getEle("btnThemNV").onclick = function(){

    var nhanVien = layThongTinNV(true);

    if(nhanVien){
        dsnv.themNV (nhanVien);
        taoBang(dsnv.arr);
    };
};

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
                </td>
            </tr>
        
        `;
    });
    getEle("tableDanhSach").innerHTML = content

    function xoaNV(id){
        dsnv.xoaNV(id);
        taoBang(dsnv.arr);
    }
};