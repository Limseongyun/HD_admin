package mvc.vo;

public class Bangking_viewVO {
/*
 * select a.ac_code ac_code,a.ac_num ac_num,a.ac_balance ac_balance,a.ac_name ac_name,a.ac_start_date ac_start_date
        ,a.ac_end_date ac_end_date,m.mem_name mem_name,m.mem_gender mem_gender,m.mem_phn mem_phn,m.mem_job mem_job
from account a, account_client ac,member m 
where a.ac_code=ac.ac_code and ac.mem_code =m.mem_code and ac_num='1007243937';
 * */
	private int ac_code,mem_code;
	private String ac_num,ac_balance,ac_name,ac_start_date,ac_end_date,mem_name,mem_gender,mem_phn,mem_job,money,sp_name;
	
	
	public String getSp_name() {
		return sp_name;
	}

	public void setSp_name(String sp_name) {
		this.sp_name = sp_name;
	}

	public String getMoney() {
		return money;
	}

	public void setMoney(String money) {
		this.money = money;
	}

	public int getMem_code() {
		return mem_code;
	}

	public void setMem_code(int mem_code) {
		this.mem_code = mem_code;
	}

	public int getAc_code() {
		return ac_code;
	}
	
	public void setAc_code(int ac_code) {
		this.ac_code = ac_code;
	}
	public String getAc_num() {
		return ac_num;
	}
	public void setAc_num(String ac_num) {
		this.ac_num = ac_num;
	}
	public String getAc_balance() {
		return ac_balance;
	}
	public void setAc_balance(String ac_balance) {
		this.ac_balance = ac_balance;
	}
	public String getAc_name() {
		return ac_name;
	}
	public void setAc_name(String ac_name) {
		this.ac_name = ac_name;
	}
	public String getAc_start_date() {
		return ac_start_date;
	}
	public void setAc_start_date(String ac_start_date) {
		this.ac_start_date = ac_start_date;
	}
	public String getAc_end_date() {
		return ac_end_date;
	}
	public void setAc_end_date(String ac_end_date) {
		this.ac_end_date = ac_end_date;
	}
	public String getMem_name() {
		return mem_name;
	}
	public void setMem_name(String mem_name) {
		this.mem_name = mem_name;
	}
	public String getMem_gender() {
		return mem_gender;
	}
	public void setMem_gender(String mem_gender) {
		this.mem_gender = mem_gender;
	}
	public String getMem_phn() {
		return mem_phn;
	}
	public void setMem_phn(String mem_phn) {
		this.mem_phn = mem_phn;
	}
	public String getMem_job() {
		return mem_job;
	}
	public void setMem_job(String mem_job) {
		this.mem_job = mem_job;
	}
	
	
}
