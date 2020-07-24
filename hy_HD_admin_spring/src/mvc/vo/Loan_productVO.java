package mvc.vo;

public class Loan_productVO {
	private int lp_num,lp_maximum;
	private String lp_name,lp_dambo;
	private float lp_interestrate,lp_cancelfee;
	public int getLp_num() {
		return lp_num;
	}
	public void setLp_num(int lp_num) {
		this.lp_num = lp_num;
	}
	
	public float getLp_interestrate() {
		return lp_interestrate;
	}
	public void setLp_interestrate(float lp_interestrate) {
		this.lp_interestrate = lp_interestrate;
	}
	public float getLp_cancelfee() {
		return lp_cancelfee;
	}
	public void setLp_cancelfee(float lp_cancelfee) {
		this.lp_cancelfee = lp_cancelfee;
	}
	public int getLp_maximum() {
		return lp_maximum;
	}
	public void setLp_maximum(int lp_maximum) {
		this.lp_maximum = lp_maximum;
	}
	public String getLp_name() {
		return lp_name;
	}
	public void setLp_name(String lp_name) {
		this.lp_name = lp_name;
	}
	public String getLp_dambo() {
		return lp_dambo;
	}
	public void setLp_dambo(String lp_dambo) {
		this.lp_dambo = lp_dambo;
	}
	
}
