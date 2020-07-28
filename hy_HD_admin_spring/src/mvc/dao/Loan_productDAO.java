package mvc.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import mvc.vo.Loan_FileVO;
import mvc.vo.Loan_detailVO;
import mvc.vo.Loan_productVO;
import mvc.vo.Loan_screenVO;
import mvc.vo.Loan_screensearchVO;
import mvc.vo.SearchVO;

@Repository
public class Loan_productDAO {

	@Autowired
	private SqlSessionTemplate ss;

	public void addloanproduct(Loan_productVO vo) {
		ss.insert("loan.productadd", vo);
		
	}

	public List<Loan_productVO> getDeptList() {		
		return ss.selectList("loan.list");
	}

	public List<Loan_productVO> getsearchDeptList(SearchVO vo) {
		return ss.selectList("loan.list",vo);
	}
	
	public void delloanproduct(int lp_num) {
		ss.delete("loan.productdel", lp_num);
		
	}

	public List<Loan_productVO> getlpname() {
		return ss.selectList("loan.getlpname");
	}

	public List<Loan_screenVO> getscreen() {
		return ss.selectList("loan.getscreen");
	}

	public List<Loan_screenVO> getlcnum() {
		return ss.selectList("loan.getlcnum");
	}

	public List<Loan_screenVO> searchscreen(Loan_screensearchVO vo) {
	
		return ss.selectList("loan.searchscreen",vo);
	}
	
	public Loan_detailVO getdetatil(int lc_num) {
		return ss.selectOne("loan.getdetail", lc_num);
	}
	
	public void stateupdate(Loan_screensearchVO vo) {
		ss.update("loan.stateupdate", vo);
		
	}
	
	public List<Loan_FileVO> filecheck(int lc_num){
		return ss.selectList("loan.filecheck",lc_num);
	}
	
}
