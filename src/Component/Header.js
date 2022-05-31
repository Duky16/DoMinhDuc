import React from 'react';
import Image from './Img/slide.jpg';
import Image2 from './Img/slide2.jpg';
import Image3 from './Img/content1.jpg';
import Image4 from './Img/content2.jpg';
import Image5 from './Img/content3.jpg';
import Image6 from './Img/content4.jpg';

export default function Header(){
    return(
<div class="container-fluid">
    {/* Header */}
    <div class="row border-bottom border-5 border-danger">
        <div class = "col-md-1">

        </div>
        <div class="col-md-3">
            <img width="226" height="100" src="https://soict.hust.edu.vn/wp-content/uploads/logo-soict-hust-1.png" class="header_logo header-logo" alt="SOICT" />
        </div>
        <div class="col-md-5">
        <div class="flex-col show-for-medium flex-left">
            <ul class="mobile-nav nav nav-left ">
                <li class="html custom html_topbar_left fw-bolder">
                    <p>Đại học Bách khoa hà nội<br></br> TRƯỜNG CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</p>
                </li>            
            </ul>
        </div>
        </div>
        <div class="col-md-3">
            <div class="row">
              <div class="col-md-1" style={{ 'padding-left': '100px' }}>
                <img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/vn.png" />
              </div>
              <div class="col-md-1">
                <img alt="Bootstrap Image Preview" src="https://a2ztech.a2ztech.vn/wp-content/plugins/polylang-pro/flags/gb.png" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="input-group rounded" style={{
                "width": "200px"
              }}>
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{
                  "width": "100px"
                }} />
                {/* icon */}
                <span class="input-group-text border-0" id="search-addon">
                  {/* <i class="fas fa-search"></i> */}
                  <i class="bi bi-search"></i>
                </span>
              </div>
            </div>
        </div>
    </div>
    {/* Navbar */}
    <nav class="navbar navbar-expand-lg bg-black">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 m-auto">
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Giới thiệu
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Thông tin chung</a></li>
                        <li><a class="dropdown-item text-white" href="#">Triết lý giáo dục</a></li>
                        <li><a class="dropdown-item text-white" href="#">Cơ cấu tổ chức</a></li>
                        <li><a class="dropdown-item text-white" href="#">Đảng ủy - Hội đồng Trường</a></li>
                        <li><a class="dropdown-item text-white" href="#">Ban lãnh đạo Trường</a></li>
                        <li><a class="dropdown-item text-white" href="#">Các tổ chức đoàn thể</a></li>
                        <li><a class="dropdown-item text-white" href="#">Văn phòng Trường</a></li>
                        <li><a class="dropdown-item text-white" href="#">Danh sách cán bộ</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Khoa - Trung tâm
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Khoa</a></li>
                        <li><a class="dropdown-item text-white" href="#">Khoa học máy tính</a></li>
                        <li><a class="dropdown-item text-white" href="#">Kỹ thuật máy tính</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Đào tạo
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                        <li><a class="dropdown-item text-white" href="#">Hệ Đại học</a></li>
                        <li><a class="dropdown-item text-white" href="#">Hệ Thạc sỹ</a></li>
                        <li><a class="dropdown-item text-white" href="#">Hệ Tiến sỹ</a></li>
                        <li><a class="dropdown-item text-white" href="#">Đào tạo chứng chỉ</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Nghiên cứu
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                        <li><a class="dropdown-item text-white" href="#">Các phòng thí nghiệm</a></li>
                        <li><a class="dropdown-item text-white" href="#">Các đề tài - dự án</a></li>
                        <li><a class="dropdown-item text-white" href="#">Công bố khoa học</a></li>
                        <li><a class="dropdown-item text-white" href="#">Tìm chuyên gia</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tuyển sinh
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Kiến tạo tương lai với soICT</a></li>
                        <li><a class="dropdown-item text-white" href="#">Tuyển sinh 2022</a></li>
                        <li><a class="dropdown-item text-white" href="#">Điểm chuẩn tham khảo</a></li>
                        <li><a class="dropdown-item text-white" href="#">Tuyển sinh đạo tạo  ngắn hạn</a></li>
                        <li><a class="dropdown-item text-white" href="#">Hỏi đáp về tuyển sinh</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sinh viên
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Biểu mẫu và quy định dành cho sinh viên</a></li>
                        <li><a class="dropdown-item text-white" href="#">Cố vấn học tập</a></li>
                        <li><a class="dropdown-item text-white" href="#">Hoạt động sinh viên nghiên cứu khoa học</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Hợp tác đối ngoại
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                        <li><a class="dropdown-item text-white" href="#">Hợp tác với khối hàn lâm</a></li>
                        <li><a class="dropdown-item text-white" href="#">Hợp tác với khối doanh nghiệp</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cựu sinh viên
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Action</a></li>
                        <li><a class="dropdown-item text-white" href="#">Another action</a></li>
                        <li><a class="dropdown-item text-white" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cựu sinh viên
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Giới thiệu chung</a></li>
                        <li><a class="dropdown-item text-white" href="#">Tấm gương cựu sinh viên</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tin tức - sự kiện
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Tin tức</a></li>
                        <li><a class="dropdown-item text-white" href="#">Thông báo</a></li>
                        <li><a class="dropdown-item text-white" href="#">Tin bài</a></li>
                        <li><a class="dropdown-item text-white" href="#">SoICT Talks</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown" style={{'list-style':'none', 'font-size':'14px'}}>
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tuyển dụng
                    </a>
                    <ul class="dropdown-menu bg-black" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item text-white" href="#">Việc làm tại SoICT</a></li>
                        <li><a class="dropdown-item text-white" href="#">Việc làm cho sinh viên</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    {/* Slider */}
    <div id="carouselExampleControls" class="carousel slide border-bottom border-5 border-danger" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={Image} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src={Image2} class="d-block w-100" alt="..."></img>
            </div>
            <div class="carousel-item">
                <img src={Image} class="d-block w-100" alt="..."></img>
            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    {/* Content */}
    <div class="row">
        <h3 class="col-12 text-uppercase text-center">Tin mới nhất</h3>
        <div class="col-md-3 col-sm-4">
            <img src={Image3} class="d-block w-100"></img>
            <h5 class="text-uppercase">Vòng chung kết bkai-naver</h5>
        </div>
        <div class="col-md-3 col-sm-4">
            <img src={Image4} class="d-block w-100"></img>
            <h5 class="text-uppercase">innovation day và cuộc thi sáng tạo ý tưởng</h5>
        </div>
        <div class="col-md-3 col-sm-4">
            <img src={Image5} class="d-block w-100"></img>
            <h5 class="text-uppercase">soict đồng hành và hỗ trợ sinh viên</h5>
        </div>
        <div class="col-md-3 col-sm-4">
            <img src={Image6} class="d-block w-100"></img>
            <h5 class="text-uppercase">tổng kết đại hôi đại biểu đoàn thanh niên</h5>
        </div>
        <div class="col-12 bg-danger text-white text-center">
            <p>Xem thêm tin tức</p>
        </div>
    </div>
</div>
    );
}