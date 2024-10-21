// COMMON
const getElement = (selector) => {
  return document.querySelector(selector);
};

// Bài tập quản lý tuyển sinh
const KHU_VUC_A = "A";
const KHU_VUC_B = "B";
const KHU_VUC_C = "C";
const KO_THUOC_KHU_VUC = "ko";
const DOI_TUONG_1 = "1";
const DOI_TUONG_2 = "2";
const DOI_TUONG_3 = "3";
const KO_THUOC_DOI_TUONG = "0";

const chonKhuVuc = (khuVuc) => {
  if (khuVuc === KHU_VUC_A) {
    return 2;
  } else if (khuVuc === KHU_VUC_B) {
    return 1;
  } else if (khuVuc === KHU_VUC_C) {
    return 0.5;
  } else {
    return 0;
  }
};

const chonDoiTuong = (doiTuong) => {
  if (doiTuong === DOI_TUONG_1) {
    return 2.5;
  } else if (doiTuong === DOI_TUONG_2) {
    return 1.5;
  } else if (doiTuong === DOI_TUONG_3) {
    return 1;
  } else {
    return 0;
  }
};

const tinhKetQua = () => {
  let diemChuan = getElement("#diemChuan").value;
  let khuVuc = getElement("input[name='selector1']:checked").value;
  let doiTuong = getElement("input[name='selector']:checked").value;
  let diem1 = +getElement("#diem1").value;
  let diem2 = +getElement("#diem2").value;
  let diem3 = +getElement("#diem3").value;
  let tongDiem =
    chonKhuVuc(khuVuc) + chonDoiTuong(doiTuong) + diem1 + diem2 + diem3;
  if (tongDiem > diemChuan) {
    getElement(
      "#thongBao"
    ).innerHTML = `<p>Bạn đã đậu.Tổng điểm: ${tongDiem}</p>`;
  } else {
    getElement(
      "#thongBao"
    ).innerHTML = `<p>Bạn đã rớt.Tổng điểm: ${tongDiem}</p>`;
  }
};

// bài tập tính tiền điện

const tinhTienDien = () => {
  let hoTen = getElement("#hoTen").value;
  let soDien = +getElement("#soDien").value;
  let tongTien = 0;
  if (soDien <= 50) {
    tongTien = 500 * soDien;
  } else if (soDien <= 100) {
    tongTien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }
  getElement(
    "#result"
  ).innerHTML = `<p>Họ tên: ${hoTen}; Tiền điện: ${tongTien.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  )} </p>`;
};

// bài tập tính tiền thuế thu nhập cá nhân

const tinhTienThue = () => {
  let ten = getElement("#ten").value;
  let thuNhapHangNam = +getElement("#thuNhapHangNam").value;
  let nguoiPhuThuoc = +getElement("#nguoiPhuThuoc").value;
  let thuNhapChiuThue = thuNhapHangNam - 4e6 - nguoiPhuThuoc * 1600000;
  let tienThue = 0;
  if (thuNhapChiuThue <= 60e6) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120e6) {
    tienThue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210e6) {
    tienThue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384e6) {
    tienThue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624e6) {
    tienThue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960e6) {
    tienThue = thuNhapChiuThue * 0.3;
  } else {
    tienThue = thuNhapChiuThue * 0.35;
  }
  getElement(
    "#soTienThue"
  ).innerHTML = `<p>Họ tên: ${ten}; Tiền thuế thu nhập cá nhân: ${tienThue.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  )}</p>`;
};

// bài tập tính tiền cáp
function showHide() {
  const dropdown = getElement("#khachHang");
  const additionalInput = getElement("#eventShowHide");

  if (dropdown.value === "doanhNghiep") {
    additionalInput.style.display = "block";
  } else {
    additionalInput.style.display = "none";
  }
}

const tinhTienCap = () => {
  let maKhachHang = getElement("#maKhachHang").value;
  let khachHang = getElement("#khachHang").value;
  let kenhCaoCap = +getElement("#kenhCaoCap").value;
  let ketNoi = +getElement("#ketNoi").value;
  debugger;
  if (khachHang === "nhaDan") {
    tienCap = 4.5 + 20.5 + 7.5 * kenhCaoCap;
  } else {
    if (ketNoi > 10) {
      tienCap = 15 + 75 + (ketNoi - 10) * 5 + kenhCaoCap * 50;
    } else {
      tienCap = 15 + 75 + kenhCaoCap * 50;
    }
  }
  getElement(
    "#soTienCap"
  ).innerHTML = `<p>Mã khách hàng: ${maKhachHang}; Tiền cáp: ${tienCap.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )} </p>`;
};
