var getSection = function (id) {
    return document.querySelector(id);
}
var createEle = function (tag) {
    return document.createElement(tag);
}
getSection('#btnXacNhan').onclick = function () {
    //Tạo đối tượng chứa dữ liệu nhập từ người dùng
    var sv = new SinhVien();
    sv.maSinhVien = getSection('#maSinhVien').value;
    sv.tenSinhVien = getSection('#tenSinhVien').value;
    sv.email = getSection('#email').value;
    sv.soDienThoai = getSection('#soDienThoai').value;
    sv.loaiSinhVien = getSection('#loaiSinhVien').value;
    sv.diemToan = getSection('#diemToan').value;
    sv.diemLy = getSection('#diemLy').value;
    sv.diemHoa = getSection('#diemHoa').value;
    sv.diemRenLuyen = getSection('#diemRenLuyen').value;
    console.log('SINH VIÊN', sv);

    // Tạo ra the tr chứa thông tin sinh viên
    var trSinhVien = createEle('tr');

    // Tạo thẻ td chứa thông tin sinh viên
    var tdMaSinhVien = createEle('td');
    var tdTenSinhVien = createEle('td');
    var tdEmail = createEle('td');
    var tdSoDienThoai = createEle('td');
    var tdDiemTrungBinh = createEle('td');
    var tdXepLoai = createEle('td');


    //Tạo thẻ chức năng xoá
    var tdChucNang = createEle('td');
    var btnChucNangXoa = createEle('button');
    btnChucNangXoa.innerHTML = 'Xoá';
    btnChucNangXoa.className = 'btn btn-danger';
    // btnChucNangXoa.onclick = function(){
    //     var theTDCha = 
    // }


    tdMaSinhVien.innerHTML = sv.maSinhVien;
    tdTenSinhVien.innerHTML = sv.tenSinhVien;
    tdEmail.innerHTML = sv.email;
    tdSoDienThoai.innerHTML = sv.soDienThoai;
    tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();
    tdXepLoai.innerHTML = sv.xepLoai();

    //Đem thẻ td bỏ vảo tr
    trSinhVien.appendChild(tdMaSinhVien);
    trSinhVien.appendChild(tdTenSinhVien);
    trSinhVien.appendChild(tdEmail);
    trSinhVien.appendChild(tdSoDienThoai);
    trSinhVien.appendChild(tdDiemTrungBinh);
    trSinhVien.appendChild(tdXepLoai);
    tdChucNang.appendChild(btnChucNangXoa);



    //DOM đến thẻ tbody => bỏ tr vào tbody
    var tbody = getSection('#tableSinhVien');
    tbody.appendChild(trSinhVien);


}