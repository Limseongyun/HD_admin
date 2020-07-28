package mvc.vo;
/*
 * HD_CODE    NOT NULL NUMBER        
HD_LEVEL   NOT NULL VARCHAR2(30)  
HD_IN_DATE NOT NULL DATE          
HD_NAME    NOT NULL VARCHAR2(30)  
HD_BIRTH   NOT NULL DATE          
HD_DNAME            VARCHAR2(30)  
HD_GENDER           VARCHAR2(30)  
HD_PHN     NOT NULL VARCHAR2(30)  
HD_EMAIL            VARCHAR2(30)  
HD_LOC              VARCHAR2(100) 
HD_ID      NOT NULL VARCHAR2(32)  
HD_PW      NOT NULL VARCHAR2(32)  

 * 
 * */
public class EmployeeVO{

	private int hd_code;
	private String hd_level,hd_in_date,hd_name,hd_birth,hd_dname
			,hd_gender,hd_phn,hd_email,hd_loc,hd_id,hd_pw;
	public int getHd_code() {
		return hd_code;
	}
	public void setHd_code(int hd_code) {
		this.hd_code = hd_code;
	}
	public String getHd_level() {
		return hd_level;
	}
	public void setHd_level(String hd_level) {
		this.hd_level = hd_level;
	}
	public String getHd_in_date() {
		return hd_in_date;
	}
	public void setHd_in_date(String hd_in_date) {
		this.hd_in_date = hd_in_date;
	}
	public String getHd_name() {
		return hd_name;
	}
	public void setHd_name(String hd_name) {
		this.hd_name = hd_name;
	}
	public String getHd_birth() {
		return hd_birth;
	}
	public void setHd_birth(String hd_birth) {
		this.hd_birth = hd_birth;
	}
	public String getHd_dname() {
		return hd_dname;
	}
	public void setHd_dname(String hd_dname) {
		this.hd_dname = hd_dname;
	}
	public String getHd_gender() {
		return hd_gender;
	}
	public void setHd_gender(String hd_gender) {
		this.hd_gender = hd_gender;
	}
	public String getHd_phn() {
		return hd_phn;
	}
	public void setHd_phn(String hd_phn) {
		this.hd_phn = hd_phn;
	}
	public String getHd_email() {
		return hd_email;
	}
	public void setHd_email(String hd_email) {
		this.hd_email = hd_email;
	}
	public String getHd_loc() {
		return hd_loc;
	}
	public void setHd_loc(String hd_loc) {
		this.hd_loc = hd_loc;
	}
	public String getHd_id() {
		return hd_id;
	}
	public void setHd_id(String hd_id) {
		this.hd_id = hd_id;
	}
	public String getHd_pw() {
		return hd_pw;
	}
	public void setHd_pw(String hd_pw) {
		this.hd_pw = hd_pw;
	}
}
