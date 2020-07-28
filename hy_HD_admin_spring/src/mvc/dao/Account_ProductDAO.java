package mvc.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import mvc.vo.Installment_SavingVO;
import mvc.vo.ProductVO;
import mvc.vo.QualificationVO;
import mvc.vo.SavingVO;
import mvc.vo.Shared_ChallengeVO;
import mvc.vo.Shared_SavingVO;


@Repository
public class Account_ProductDAO {
	@Autowired
	private SqlSessionTemplate ss;
	//자격요건
	public List<QualificationVO> qualification_List(){
		return ss.selectList("account.qua_list");
	}
	public void qualification_insert(QualificationVO vo) {
		ss.insert("account.qua_insert", vo);
	}
	public void qualification_delete(QualificationVO vo) {
		ss.delete("account.qua_delete",vo);
	}
	//예금
	public List<SavingVO> saving_list(){
		return ss.selectList("account.sav_list");
	}
	public void saving_insert(SavingVO vo) {
		ss.insert("account.sav_insert", vo);
	}
	public void saving_delete(SavingVO vo) {
		ss.delete("account.sav_delete",vo);
	}
	//공유예끔
	public List<Shared_SavingVO> shared_saving_list(){
		return ss.selectList("account.shas_list");
	}
	
	public void shared_saving_insert(Shared_SavingVO vo) {
		ss.insert("account.shas_insert", vo);
	}
	public void shared_saving_delete(Shared_SavingVO vo) {
		ss.delete("account.shas_delete",vo);
	}
	
	
	//적금
	public List<Installment_SavingVO> ins_list(){
		return ss.selectList("account.ins_list");
	}
	public void ins_insert(Installment_SavingVO vo) {
		ss.insert("account.ins_insert", vo);
	}
	public void ins_delete(Installment_SavingVO vo) {
		ss.delete("account.ins_delete",vo);
	}
	
	
	//공유적금
	public List<Shared_ChallengeVO> shac_list(){
		return ss.selectList("account.shac_list");
	}
	public void shac_insert(Shared_ChallengeVO vo) {
		ss.insert("account.shac_insert", vo);
	}
	public void shac_delete(Shared_ChallengeVO vo) {
		ss.delete("account.shac_delete", vo);
	}
	
	//프로덕트
	public List<ProductVO> pro_list(){
		return ss.selectList("account.pro_list");
	}
	public void pro_insert(ProductVO vo) {
		ss.insert("account.pro_insert",vo);
	}
	public void pro_delete(ProductVO vo) {
		ss.delete("account.pro_delete",vo);
	}
}
