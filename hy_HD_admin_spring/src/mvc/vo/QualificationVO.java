package mvc.vo;

public class QualificationVO {
	/*QUA_CODE      NOT NULL NUMBER       
	QUA_NAME      NOT NULL VARCHAR2(50) 
	QUA_MAXAGE             NUMBER       
	QUA_MINAGE             NUMBER       
	QUA_MINMONEY           NUMBER       
	QUA_MAXMONEY           NUMBER       
	QUA_MINPERIOD          NUMBER       
	QUA_MAXPERIOD          NUMBER*/
	private int qua_code,qua_maxage,qua_minage,qua_maxmoney,qua_minmoney,qua_minperiod,qua_maxperiod;
	private String qua_name;
	public int getQua_code() {
		return qua_code;
	}
	public void setQua_code(int qua_code) {
		this.qua_code = qua_code;
	}
	public int getQua_maxage() {
		return qua_maxage;
	}
	public void setQua_maxage(int qua_maxage) {
		this.qua_maxage = qua_maxage;
	}
	public int getQua_minage() {
		return qua_minage;
	}
	public void setQua_minage(int qua_minage) {
		this.qua_minage = qua_minage;
	}
	public int getQua_maxmoney() {
		return qua_maxmoney;
	}
	public void setQua_maxmoney(int qua_maxmoney) {
		this.qua_maxmoney = qua_maxmoney;
	}
	public int getQua_minmoney() {
		return qua_minmoney;
	}
	public void setQua_minmoney(int qua_minmoney) {
		this.qua_minmoney = qua_minmoney;
	}
	public int getQua_minperiod() {
		return qua_minperiod;
	}
	public void setQua_minperiod(int qua_minperiod) {
		this.qua_minperiod = qua_minperiod;
	}
	public int getQua_maxperiod() {
		return qua_maxperiod;
	}
	public void setQua_maxperiod(int qua_maxperiod) {
		this.qua_maxperiod = qua_maxperiod;
	}
	public String getQua_name() {
		return qua_name;
	}
	public void setQua_name(String qua_name) {
		this.qua_name = qua_name;
	}
	
	
}
