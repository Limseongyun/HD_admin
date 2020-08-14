package mvc.vo;
/*
create table shared_saving(
shas_code number not null,
shas_count number DEFAULT 2 not null,
shas_master number DEFAULT 1 not null,
primary key(shas_code)
);


create sequence shared_saving_seq
INCREMENT by 1
start with 1;
*/
public class Shared_SavingVO {

	private int shas_code,shas_count,shas_master;

	public int getShas_code() {
		return shas_code;
	}

	public void setShas_code(int shas_code) {
		this.shas_code = shas_code;
	}

	public int getShas_count() {
		return shas_count;
	}

	public void setShas_count(int shas_count) {
		this.shas_count = shas_count;
	}

	public int getShas_master() {
		return shas_master;
	}

	public void setShas_master(int shas_master) {
		this.shas_master = shas_master;
	}
}
