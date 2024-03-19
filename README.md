Tài khoản
Tài_khoản_role
Role

	role_super_admin
	role_student
	role_admin_school
	role_teacher

truong_lop

	id
	ten
	tieu_de
	kieu
		type_class
		type_school
	hien_thi
		0
		1
	tim_kiem
		0
		1
	
giang_vien_theo_truong_lop

	id
	id_truong_lop
	id_tai_khoan
	is_admin
 
hoc_phan

	id
	ten_hoc_phan	
	id_truong_lop
	so_tin_chi	
	ma_hoc_phan
 
chuong_trinh_dao_tao

	id
	ten_chuong_trinh
	id_truong_lop	
 
//thong_tin_chung

	trinh_do_dao_tao
	nganh_dao_tao
	loai_hinh_dao_tao
	khoa_dao_tao
 
//muc_tieu_dao_tao

	muc_tieu_chung
	muc_tieu_cu_the
 
//chuan_dau_ra

	noi_dung
 
//co_hoi_nghe_nghiep

	noi_dung
 
//thong_tin_dao_tao

	thoi_gian_dao_tao
	so_hoc_ky
	so_tin_chi
	doi_tuong_tuyen_sinh
	quy_trinh_dao_tao
	doi_tuong_top_nghiep


noi_dung_chuong_trinh

	id
	id_ctdt
	khoi_kien_thuc
	parent_id
phan_phoi_mon_hoc

	id
	id_ndct
	id_hoc_phan

ke_hoach_giang_day

	id
	hoc_ky
	id_hoc_phan

tai_lieu

	id
	id_truong_lop
	status
		class_only
		school_only
		public
		link_only

