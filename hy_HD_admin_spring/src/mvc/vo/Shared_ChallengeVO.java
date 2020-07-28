package mvc.vo;
/*
 * 
 *
create table shared_challenge(
shac_code number not null,
shac_mannum number DEFAULT 2 not null,
shac_master number DEFAULT 1 not null,
primary key(shac_code)
);
create sequence shac_seq
INCREMENT by 1
start with 1;
 */
public class Shared_ChallengeVO {

	private int shac_code,shac_mannum,shac_master;

	public int getShac_code() {
		return shac_code;
	}

	public void setShac_code(int shac_code) {
		this.shac_code = shac_code;
	}

	public int getShac_mannum() {
		return shac_mannum;
	}

	public void setShac_mannum(int shac_mannum) {
		this.shac_mannum = shac_mannum;
	}

	public int getShac_master() {
		return shac_master;
	}

	public void setShac_master(int shac_master) {
		this.shac_master = shac_master;
	}
}
