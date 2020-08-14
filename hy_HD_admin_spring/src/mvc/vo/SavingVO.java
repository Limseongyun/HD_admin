package mvc.vo;
/*
SAV_CODE         NOT NULL NUMBER       
SAV_NAME         NOT NULL VARCHAR2(50) 
SAV_INTERESTRATE NOT NULL NUMBER       
SAV_ONLINE       NOT NULL NUMBER       
SHAS_CODE                 NUMBER       
QUA_CODE                  NUMBER       
*/


/*
create sequence saving_seq
INCREMENT BY 1
START WITH 1;


*/
public class SavingVO {

	private int sav_code,sav_interestrate,sav_online,shas_code,qua_code;
	private String sav_name;
	

	
	
	
	
	public int getSav_code() {
		return sav_code;
	}
	public void setSav_code(int sav_code) {
		this.sav_code = sav_code;
	}
	public int getSav_interestrate() {
		return sav_interestrate;
	}
	public void setSav_interestrate(int sav_interestrate) {
		this.sav_interestrate = sav_interestrate;
	}
	public int getSav_online() {
		return sav_online;
	}
	public void setSav_online(int sav_online) {
		this.sav_online = sav_online;
	}
	public int getShas_code() {
		return shas_code;
	}
	public void setShas_code(int shas_code) {
		this.shas_code = shas_code;
	}
	public int getQua_code() {
		return qua_code;
	}
	public void setQua_code(int qua_code) {
		this.qua_code = qua_code;
	}
	public String getSav_name() {
		return sav_name;
	}
	public void setSav_name(String sav_name) {
		this.sav_name = sav_name;
	}
	
}
