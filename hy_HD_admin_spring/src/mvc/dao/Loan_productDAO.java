package mvc.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import mvc.vo.Loan_productVO;
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
	
}
