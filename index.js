// bai 1
document.getElementById('btnTinhLuong').onclick = function() {
    var luongNgay = document.getElementById('txt-luongNgay').value * 1;
    var soNgay = document.getElementById('txt-soNgay').value * 1;
    var tongLuong = luongNgay * soNgay;
    document.getElementById('ketQua1').innerHTML = `Tổng lương của bạn là ${tongLuong}`;
}
// bai 2
document.getElementById('btnTinhTrungBinh').onclick = function() {
    var soThuNhat = document.getElementById('txt-soThuNhat').value * 1;
    var soThuHai = document.getElementById('txt-soThuHai').value * 1;
    var soThuBa = document.getElementById('txt-soThuBa').value * 1;
    var soThuBon = document.getElementById('txt-soThuBon').value * 1;
    var soThuNam = document.getElementById('txt-soThuNam').value * 1;
    var trungBinh = (soThuNhat + soThuHai + soThuBa + soThuBon + soThuNam) / 5;
    document.getElementById('ketQua2').innerHTML = `Giá trị trung bình là ${trungBinh}`;
}
// bai 3
document.getElementById('btnQuyDoi').onclick = function() {
    var soTien = document.getElementById('txt-soTien').value * 1;
    var ketQua3 = soTien * 23500;
    document.getElementById('ketQua3').innerHTML = `Số tiền VND la: ${ketQua3.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
    })}`;
}
// bai 4
document.getElementById('btnTinhCVDT').onclick = function() {
    var chieuDai = document.getElementById('txt-chieuDai').value * 1;
    var chieuRong = document.getElementById('txt-chieuRong').value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('ketQua4').innerHTML = `Chu vi hcn là ${chuVi}` + '<br>' + `Diện tích hcn là ${dienTich}`;
}
// bai 5
document.getElementById('btnTinhTong').onclick = function() {
    var soHaiChuSo = document.getElementById('txt-soHaiChuSo').value * 1;
    var soHangDV = soHaiChuSo % 10;
    var soHangChuc = (soHaiChuSo - soHangDV) / 10;
    var tongKySo = soHangDV + soHangChuc;
    document.getElementById('ketQua5').innerHTML = `Tổng 2 ký số là: ${tongKySo}`;
}